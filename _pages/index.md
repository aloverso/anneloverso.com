---
layout: page
title: Home
id: home
permalink: /
---

<div class="narrower mbxl">
    <h1 class="font-btm text-xl">Anne LoVerso</h1>
    engineer with a passion for software, education, and playing [[tabletop RPGs]] 
    <p markdown="1">I work for [[New Jersey Office of Innovation]] now! Formerly senior software engineer @ [[VMware Pivotal Labs|Pivotal Labs]]</p>

    <p class="callout-box">
        Welcome to my <strong>[[digital garden]]</strong>.  This site is a constantly-evolving collection of notes, thoughts, essays, and illustrations.

        Get started on your exploration below, or check out <strong><a href="/notes" class="internal-link">everything</a></strong>.
    </p>
</div>

## Illustrated notes

<div class="fdr card-container mbxl">
{% for post in site.notes %}
{% if post.tags contains "illustrations" %}
<div class="card">
    <div class="card-inner">
    <strong>
        <a class="internal-link" href="{{ post.url }}">
            {{ post.title }}
        </a>
    </strong>
    <img class="mtd" src="{{ post.img }}" alt=""/>
</div>
</div>

{% endif %}
{% endfor %}
</div>


## Featured notes

<div class="mbxl caterpillar-container fdr mtd">
{% for post in site.notes %}
{% if post.tags contains "featured" %}
<div class="caterpillar">
    <div class="caterpillar-inner fdr">
        <div class="text-l mrm">
            {% assign maintag = post.tags[0] %}
            {% if site.data.icons[maintag] %}
                {{ site.data.icons[maintag] }}
            {% else %}
                {{ site.data.icons.default }}
            {% endif %}
        </div>
        <div>
            <strong>
                <a class="no-icon" href="{{ post.url }}">
                    {{ post.title }}
                </a>
            </strong>
            <div class="text-sm">
                {{ page.last_modified_at | date: "%B %-d, %Y" }}
            </div>
        </div>
    </div>
</div>
{% endif %}
{% endfor %}
</div>

## Most recently tended

<div class="mbxl caterpillar-container fdr mtd">
{% assign new_notes_list = site.notes | sort: "last-modified-date" | reverse %}
{% for post in new_notes_list limit:8 %}
<div class="caterpillar">
    <div class="caterpillar-inner fdr">
        <div class="text-l mrm">
            {% assign maintag = post.tags[0] %}
            {% if site.data.icons[maintag] %}
                {{ site.data.icons[maintag] }}
            {% else %}
                {{ site.data.icons.default }}
            {% endif %}
        </div>
        <div>
            <strong>
                <a class="no-icon" href="{{ post.url }}">
                    {{ post.title }}
                </a>
            </strong>
            <div class="text-sm">
                {{ page.last_modified_at | date: "%B %-d, %Y" }}
            </div>
        </div>
    </div>
</div>
{% endfor %}
</div>

## Fun projects

<div class="fdr card-container">
{% assign notes_list = site.notes | sort:"weight" %}  
{% for post in notes_list %}
{% if post.tags contains "projects" %}
<div class="card">
<div class="card-inner">
    <strong>
        <a class="internal-link" href="{{ post.url }}">
            {{ post.title }}
        </a>
    </strong>
    <img class="mtd" src="{{ post.img }}" alt=""/>
</div>
</div>

{% endif %}
{% endfor %}
</div>
    