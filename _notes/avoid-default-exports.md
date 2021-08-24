---
title: Why Avoid Default Exports
weight: 500
tags: software
---

## Default Export example

```javascript
// MyComponent.tsx
const MyComponent = (): ReactElement => {...}
export default MyComponent;

// using the import in another file
import MyComponent from './MyComponent.tsx'
```

## Named export example
```javascript
// MyComponent.tsx
export const MyComponent = (): ReactElement => {...}

// using the import in another file
import { MyComponent } from './MyComponent.tsx'
```

# Okay, why avoid default exports?

Here's a few reasons I've collected:

## Things should have names

Default exports don't actually have a name associated with the object being imported, other than the filename. 

Named imports, meanwhile, guarantee (nearly... unless it is explicitly renamed) that the thing is referenced by the same name throughout the codebase. 

## Helps the IDE

When exports have names, IDE auto-complete typically works better when knowing how to auto-import the named component.

## When you add more things to the export

Maybe you start with a default export because there's only one function in the file, and then it turns out that you want the file to export another, equally-important function.

What now? Either you have the file export one default function, and one named function, and you are sad about the illogical inconsistency. 

Or, you have to refactor the original function to be a named export, and change the way that every file imports it. Could be potentially touching a lot of files.

Would have been easier if it had just been a named export to begin with.

## Consistency frees your brain space

It's highly unlikely that you would write a JavaScript codebase using only default exports. Why would you *want* to write your JS as if you're constrained by the one-class-per-file Java paradigm?

So if you accept you'll need both, might as well make it consistently named imports throughout, so that you never have to devote brain space ever again to considering if any given import is default or named.