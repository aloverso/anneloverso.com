---
layout: page
title: Home
id: home
permalink: /
---
<div class="narrower mbxl">
    <h1 class="font-btm text-xl">Anne LoVerso</h1>
    engineer with a passion for software, education, and playing [[tabletop RPGs]] 
    <p markdown="1">I work for New Jersey [Office of Innovation](https://innovation.nj.gov/) now! Formerly [[VMware Pivotal Labs|Pivotal Labs]]</p>

    <p class="callout-box">
        Welcome to my digital garden.
      Take a look at <strong>[[tabletop RPGs]]</strong> to get started on your exploration.
    </p>
</div>

## Featured articles

<ul class="mbxl">
{% assign notes_list = site.notes %}  
{% for post in notes_list %}
{% if post.tags contains "featured" %}

<li>
    <strong>
        <a class="internal-link" href="{{ post.url }}">
            {{ post.title }}
        </a>
    </strong>
</li>

{% endif %}
{% endfor %}
</ul>

## Illustrated notes

<div class="fdr card-container mbxl">
{% assign notes_list = site.notes %}  
{% for post in notes_list %}
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
    