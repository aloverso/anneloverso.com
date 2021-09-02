---
title: Why Avoid Code Comments
weight: 500
tags: software
---

A controversial opinion! Let's break down some reasons.

## Clean code should be readable

**Myth**: Good code should be "self-documenting"

**Fact**: You can write code in a more readable way that helps explain what it does without comments.

You don't need to believe in "self-documenting" code to believe in the power of descriptive names.

Consider this situation, where code comments can be replaced by breaking up a long expression with useful variable names.

```typescript
// remove articles
const value = input
  .replace(new RegExp("\\b(a|an|the)\\b", "gi"), " ")
  .replace(/\s{2,}/g, " ") 
```

Here's one way to refactor using descriptive variable names:
```typescript
const articles = ["a", "an", "the"]
const findArticlesRegex = new RegExp("\\b(" + articles.join("|") + ")\\b", "gi")
const valueWithRemovedArticles = input
  .replace(findArticlesRegex, " ")
  .replace(/\s{2,}/g, " ") 
```

Here's a way to refactor using descriptive function names:
```typescript
const removeWords = (value: string, words: string[]): string => {
  const findWordsRegex = new RegExp("\\b(" + words.join("|") + ")\\b", "gi")
  return value
    .replace(new RegExp("\\b(" + regexString + ")\\b", "gi"), " ")
    .replace(/\s{2,}/g, " ");
};

const removeArticles = (input: string) => {
  return removeWords(input, ["a", "an", "the"]);
}

const value = removeArticles(input)
```

When your variable or function names are descriptive and broken down into specific tasks, it removes the need for comments explaining what is happening.

## Code comments get out-of-date

The axiom I propose:

#### Inaccurate, misleading code comments are worse than no comments at all.

If you have no comments and difficult-to-read code, you're forcing people reading your code to parse through each line and figure out what it does. Not ideal.

But if you have comments that are outdated and *inaccurately* describe your difficult-to-read code, then people reading your code will rely on the comment instead of trying to parse each line. Then, they will draw incorrect assumptions that could prove disastrous.

#### Unless you never change your code, your comments *will* fall out-of-sync with what the code does

Developers have too much on our minds to remember to update every small comment when they move or change code. It will happen. 

#### Tests are executable documentation

If you use tests instead of code comments to describe the behavior of your code, your documentation will never fall out of date because if the tests don't pass, the code does not ship.

Tests, not comments, should be how developers communicate what a piece of code does.

## Nothing is objective

I'm sure there are some context-dependent reasons out there as to why code comments are the *only* solution to a specific problem. If that's you, I would consider why you have found yourself in this place. And try to fix it. But in the end, there are probably some places where comments may be appropriate. However, they are few and far between.