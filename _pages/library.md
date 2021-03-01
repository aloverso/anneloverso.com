---
layout: page
title: Library
permalink: /library
---

# The Library

<div class="narrower" markdown="1">
I tend to read an eclectic collection generally covering: political philosophy, culture & social commentary, fiction/novels, technology, design, psychology, and more. My book notes are likely unedited, stream-of-consciousness, and rough.

**Disclaimer:** I don't *necessarily* recommend all of these as "good" books. Their inclusion here is for my own note-taking and archival purposes. See the ratings and notes on individual books for my recommendation. Think of this Library like my own personal GoodReads where I have control over the format and the way I link my reviews to other notes and concepts.

Finished books list is obviously incomplete. I plan slowly add entries for older books that I read before I started note-taking.
</div>

## Currently reading

<div class="fdr card-container">
{% assign notes_list = site.notes %}  
{% for post in notes_list %}
    {% if post.tags contains "library" and post.tags contains "current" %}
    <div class="card-small">
        <div class="card-inner">
            <div class="card-title">
                <strong>
                    <a class="internal-link" href="{{ post.url }}">
                        {{ post.title }}
                    </a>
                </strong>
            </div>
            <img class="pvd" src="{{ post.img }}" alt=""/>
        </div>
    </div>
    {% endif %}
{% endfor %}
</div>

## Finished

<div class="fdr card-container">
{% assign notes_list = site.notes | sort: "rating" | reverse %}  
{% for post in notes_list %}
    {% if post.tags contains "library" %}
    {% unless post.tags contains "current" %}
    <div class="card-small">
        <div class="card-inner">
            <div class="card-title">
                <strong>
                    <a class="internal-link" href="{{ post.url }}">
                        {{ post.title }}
                    </a>
                </strong>
            </div>
            <img class="pvd" src="{{ post.img }}" alt=""/>
        </div>
    </div>
    {% endunless %}
    {% endif %}
{% endfor %}
</div>

