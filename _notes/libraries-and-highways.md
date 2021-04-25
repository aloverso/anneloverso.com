---
title: Dynamic Ordering - Learning from Libraries & Highways
weight: 600
tags: budding
---

## Dewey Decimal System

In libraries, we have the Dewey Decimal System. Despite its [many](https://hacklibraryschool.com/2015/09/17/challenging-ddc-an-introduction/) [noted](https://sites.gold.ac.uk/library-blog/bad-dewey/) [flaws](https://www.forewordreviews.com/articles/article/sorry-dewey-the-decimals-are-outdated-the-catalog-of-the-future-will-aid-indies/), it does have one thing going for it:

> Every book a designated place no matter how the other books change. 
 
You could swap out every single book in your library save one, and one could still objectively place the books in their correct order. No matter what other books you have, the system accounts for being able to place them.

## The z-index

This is an emergent pattern I'm calling the **z-index** of sorting things. After, of course, the [CSS z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) which follows this pattern.

> **z-indexing** is a sorting system where individual items are given non-sequential "weights" that can be ordered, [[leaving gaps]] for new things to be added in-between.

In a normal index, things are sequentially ordered. If you're giving a talk and you have note cards, perhaps you have labelled
them 1, 2, 3, 4... and so on. This is sequential indexing. The problem arises when you realize you have something more to say,
and you need to add a card in between 3 and 4. What to label the card such that a computer could sort them in order for you?

## Z-indexing highway exit numbers

A real-world example of this problem is highway exit numbering. As of right now 2021, Massachusetts DOT is [renumbering exits on the Mass Pike](https://www.newmassexits.com/) from sequential definite indexing to mile-marker exit numbers. One benefit of this{% Foot num:"1" %} is that new exits can be added easily! The old I-90 had exits 10A and 11A. These were not reasonable sub-exits that had corresponding 10B and 11B the two directions on a road. No, they were standalone exits different from 10 and 11, because they were added later and we needed *something* to name the new exit in between 11 and 12.

This is sequential indexing. It makes sense for the set of inputs that you write it for, and not for any other set of inputs. Add an exit to your road, and your whole exit numbering system is ruined. This is not very [[Agile]] at all.

Whereas, if we follow z-indexing, we number things by its relative position to other things *in the index*. Not definite. Not "this thing is number one". It's "this thing comes before these things and after these things".

To do this, you have to leave gaps. You have to have space for more things. The Dewey Decimal System is constantly subdividing into new categories as the need arises - the computing section is a great example of this.{% Foot num:"2" %}

## Ordering dynamic lists

I've found z-indexing extremely helpful for ordering things in code. Where I know Thing A needs to come before Thing B, but there may be yet-undiscovered rules in which Thing C will need to come before Thing B, but after Thing A. We can assign A a z-index of 10, pick 30 for B, and C (when it comes up) can be assigned 25. Or 20. Or anything else that gives us space to grow and adjust the labels as necessary.

It also leaves space for when multiple things don't *need* to be definitely ordered. I don't care much whether C or D comes first - but they both really need to come after A. Unlike sequential indices, a z-index "weight" does not need to be unique.

{% FootnoteContainer %}
    {% Footnote num:"1" %}
        Other benefits include: being able to calculate the mile distance between two exits (or how far you are from an exit) without having to look it up. And a better sense of where you are on the road and how far you've travelled.
    {% endFootnote %}
    {% Footnote num:"2" %}
        Of course, the way the Dewey System forces us to cram everything technology-related into 000 is oft-cited as an example of its flaws. When it was designed, software was a lot less important than it is now.
    {% endFootnote %}
{% endFootnoteContainer %}