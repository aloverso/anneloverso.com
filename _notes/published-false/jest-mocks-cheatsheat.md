---
title: Mocking modules with jest and TypeScript - a cheatsheat
weight: 300
tags: software budding information
published: false
---

My favorite setup for frontend testing is [react-testing-library](https://testing-library.com/) with [jest](https://jestjs.io/).

A really common problem in [[test-driven development]] or testing in general is how to deal with dependencies in the code you're testing. And a common solution to that is [[test doubles]]. Jest provides some help with these in the form of mocks.

Unfortunately, I struggle a lot with how to setup module mocks perfectly. Especially with TypeScript. So here's some cheat guides!

# Module mocking: mocking return values

Here's a common situation: using a library like `axios`.

```typescript
import axios, { AxiosError, AxiosResponse } from "axios";

const callApi = (endpoint: string): void => {
  axios
    .get(`/api/${endpoint}`)
    .then((response: AxiosResponse) => {
      // do something
    })
    .catch((errorResponse: AxiosError) => {
      // handle error
    })
}
```

If we want to test this, we need to mock the return value from `axios.get`.  Here's my favorite way to do that in TypeScript

```typescript
import axios from "axios";
import { apiClient } from "./ApiClient";

jest.mock("axios");

describe("ApiClient", () => {
  let mockedAxios: jest.Mocked<typeof axios>;

  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>;
  });

  it("does something", () => {
    const stubData = // your stub response here
    mockedAxios.get.mockResolvedValue({data: stubData});

    apiClient.callApi('some-url');
    expect(mockedAxios.get).toHaveBeenCalledWith("/api/some-url");
    // assert something about how it handles your data
  });
});
```

## This is cool because:

The `mockedAxios` variable is typed as `jest.Mocked<typeof axios>` which means:
- it is a jest mock, and therefore TypeScript knows that you call things on its mock functions like `mockResolvedValue`
- it is typed like the `axios` library, and therefore TypeScript knows it has functions on it like `.get`

However, this approach gets harder when we want a more complicated return value, such as logic based on the input value. Let's show:

# Module mocking: implementations

There are a lot of possible ways to do this in jest, but this is the *easiest* way that I've found to get this scenario tested with TypeScript.

Let's say we want to test this code:
```typescript
/* read a list of JSON files and return a list of all their id properties */
const getFileIds = (filepaths: string[]): string[] => {
  return filepaths.map((path: string) => {
    const fileContents = fs.readFileSync(path, "utf8");
    return JSON.parse(fileContents).id;
  })
}
```

## A non-comprehensive test

Here, we need to mock the return value of `fs.readFileSync()`.

❌ I don't recommend this testing approach!

```typescript
import axios from "axios";
import { apiClient } from "./ApiClient";

jest.mock("fs");

describe("getFileIds", () => {
  let mockedFs: jest.Mocked<typeof fs>;

  beforeEach(() => {
    mockedFs = fs as jest.Mocked<typeof fs>;
  });

  it("returns the ids", () => {
    const stubData =  JSON.stringify({ id: "1" })
    mockedFs.readFileSync.mockResolvedValue(stubData);

    const results = getFileIds(['file1.json']);
    expect(results).toEqual(["1"]);
  });
});
```

This *works*, but it's not sufficiently testing the functionality because we're not testing that it can properly handle a list with many items.

Ideally, we would test that it can "read" two different files and return both their contents.

> in other words, we need `mockResolvedValue` to return specific values for different inputs

## A better test

Here, we need to mock the return value of `fs.readFileSync()`.

✅ I recommend this testing approach!

```typescript
import axios from "axios";
import { apiClient } from "./ApiClient";

jest.mock("fs");

describe("ApiClient", () => {
  let mockedFs: jest.Mocked<typeof fs>;

  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof fs>;
  });

  it("does something", () => {
    const stubData = // your stub response here
    mockedAxios.get.mockResolvedValue({data: stubData});

    apiClient.callApi('some-url');
    expect(mockedAxios.get).toHaveBeenCalledWith("/api/some-url");
    // assert something about how it handles your data
  });
});
```