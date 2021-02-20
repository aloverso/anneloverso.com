---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱

<p style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px;">
  Take a look at <span style="font-weight: bold">[[Your first note]]</span> to get started on your exploration.
</p>

This digital garden template is free, open-source, and [available on GitHub here](https://github.com/maximevaillancourt/digital-garden-jekyll-template).

do i auto update

The easiest way to get started is to read this [step-by-step guide explaining how to set this up from scratch](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll). If you need any help, my [DMs are open on Twitter (@vaillancourtmax)](https://twitter.com/vaillancourtmax). Say hi! 👋

If this template helps you in any way, [consider buying me a coffee](https://ko-fi.com/maximevaillancourt)! ☕️

<div class="grid-element">
  <h2>Podcast appearances</h2>

  {% assign podcast_limit = 2 %}
  {% for podcast in site.data.podcasts limit: podcast_limit %}
  <div class="list-entry">
    <div><a target="_blank" rel="noopener" href="{{ podcast.url }}">{{ podcast.name }}</a> <span class="faded">({{ podcast.date | date: "%Y-%m-%d" }})</span></div>
    <div>{{ podcast.description_html }}</div>
  </div>
  {% endfor %}

  {% assign additional_podcasts = site.data.podcasts.size | minus: podcast_limit %}
  {% if additional_podcasts > 0 %}
  <div>
    <p>
      <a class="internal-link" href="/podcasts">
        View all podcasts ({{ additional_podcasts }} more podcasts)
      </a>
    </p>
  </div>
  {% endif %}
</div>

<h1>tags</h1>
{% for tag in site.tags %}
<h3>{{ tag[0] }}</h3>
  <ul>
    {% for note in tag[1] %}
      <li><a href="{{ note.url }}">{{ note.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
