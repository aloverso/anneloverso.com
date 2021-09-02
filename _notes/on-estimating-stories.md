---
title: On Estimating Stories
weight: 500
tags: software
---

A few snippets of opinions on story estimation:

## Complexity not time

We estimate in complexity, not time. Engineers are bad at estimating time, and it will always be wrong. No, there is no secret "two points equals one day". It's just not there. Complexity is not time. 

## The points don't matter

Pointing *can* be useful because it *can* surface conversations that expose assumptions and differences in what people know about the system, and give feedback to a PM about story size. However, pointing is NOT intrinsically valuable and neither is velocity as a metric.

## Stories should be units of value

Users should always be humans. There is no value in "as an API client..." stories. If you're only writing an API, with no frontend, I'd expect there to be a human writing code consuming that API anyways

## The fewer tiers in your point-scale, the better

- **"Small, Medium, Large" or 1,2,3**: very good
- **"Powers of 2" aka 0,1,2,4,8**: good
- **"Fibonacci" aka 0,1,2,3,5,8**: not as good

The fewer tiers, the fewer conversations you wind up where developers are in the weeds arguing over "is this a 2 or 3 point story" instead of using the pointing exercise as a way to simply expose assumptions.

Also, points should never be objective. There should never be a lookup table defining "a one-point story is when..." and so on. This invalidates the value of pointing, which is to create conversations and expose assumptions. 

## Only engineers point stories

Points are a measure of complexity. Complexity is the engineering domain. Product & design folks can contribute their own stances on the business / user value of a story, but they should not have a voice in estimating story complexity.

