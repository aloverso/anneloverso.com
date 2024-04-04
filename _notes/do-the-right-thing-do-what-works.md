---
title: Do the Right Thing / Do What Works
weight: 102
tags: software principles
---

> This is part of the [[Principles for Software Engineering]] compilation.

A bit of a tension / balancing act. We **do what works** by doing the smallest, simplest thing to get a test passing, or to complete a feature, or to put an unfinished slice of work in the hands of users. We know that we don't need to plan for every possible future case upfront - we can do what works with the information we have. We don't have to design the whole database ecosystem and microservice architecture on day one - we do what works for the problem at hand and approach each new requirement as it comes.

Simultaneously, we **do the right thing** by knowing what is right, and what is necessary, even if it's not the "simplest" case. It may be simpler to store user passwords as an unencrypted string, and it would even get the job done for now, but it is not the right thing. We know when we should spend time coding something well, doing it right the first time to make future cases easier to work with. We know that it is right to document and test our code, even if it gets in the way of doing-what-works and continuously, quickly delivering new features.