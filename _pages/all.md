---
layout: page
title: All Notes
id: all
permalink: /all
---

# All notes

{% assign notes_list = site.notes | sort:"weight" %}  
{% for post in notes_list %}
<strong><a class="internal-link" href="{{ post.url }}">{{ post.title }}</a></strong>
{{ post.excerpt | strip_html | truncatewords: 40 }}
{% endfor %}


<p>Here are all the notes in this garden, along with their links, visualized as a graph.</p>

<!--{% include notes_graph.html %}-->
