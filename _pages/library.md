---
layout: page
title: Library
permalink: /library
---

# Currently reading

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

# Finished

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

