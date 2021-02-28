---
title: Test Doubles
weight: 400
tags: software budding information
---

# Five types of test double
There are five types of [test double](https://martinfowler.com/bliki/TestDouble.html) as per folks like Martin Fowler.

Much like Kickstarter reward tiers, as they increase in complexity, you tend to "get" things from the lower tiers as well (as in, a Spy is a Stub with additional functionality and a Mock is Spy with extra functionality).

## Dummy
A **dummy** is made to break if invoked. It's a null value, thing that throws an exception, whatever. It's there to fill up space in an argument list but *should never be invoked or called*.

## Stub
A **Stub** returns a set value. It can be hard-coded one time, or separately for every test, or anything else.

## Spy
A **Spy** returns a set value, like a Stub, but also exposes methods that allow us to ask it *what it was called with* or *how many times it was called* or other useful questions.

## Mock
A **Mock** is just like a Spy, except it has *built-in verification*. You can ask a Mock to self-verify whether it was used correctly. This allows us to extract repeat assertions on a Spy that we do in multiple tests into its own object.

## Fake
A **Fake** is meant to replicate the behavior of the real thing that it pretends to be. A good example is an in-memory database, where we actually assert against its state. Since a Fake mimics the precise behavior of the real, it *must be tested using the same tests as the real implementation* to ensure it can be trusted.

# Using test doubles
We use test doubles when we want to avoid using "the real thing" in a test context. Often (especially if you have a classicist TDD {% Foot num:"1" %} approach), this happens with external integrations with APIs and databases where we don't want to use the real version of an object in a test.

# More Resources
- [A high-level overview of test doubles](https://github.com/alexbasson/test-doubles) (Alex Basson)
- [Mocks aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html) (Martin Fowler)

{% FootnoteContainer %}
    {% Footnote num:"1" %}
        I'm sure I'll add more on the classicist/mockist (ie, "Detroit"/"London") styles at some point, but for now, I recommend the <a href="https://martinfowler.com/articles/mocksArentStubs.html">Martin Fowler post</a> as a starting point.
    {% endFootnote %}
{% endFootnoteContainer %}