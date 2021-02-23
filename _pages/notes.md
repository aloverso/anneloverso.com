---
layout: page
title: All Notes
id: all
permalink: /notes
---

<div class="narrower">
{% assign tags =  site.notes | map: 'tags' | join: ','  | split: ',' | uniq %}
{% for tag in tags %}
<span class="tag mrs mbs taglist" id="{{ tag }}">
    <span class="mrs">
        {{ site.data.icons[tag] }}
    </span>
    <span>
        {{ tag }}
    </span>
</span>
{% endfor %}
</div>

# All notes

{% assign notes_list = site.notes | sort:"weight" %}  
{% for note in notes_list %}
<p class="note" data-tags="{{ note.tags | join: ' ' }}">
    <strong>
        <a class="internal-link" href="{{ note.url }}">
            {{ note.title }}
        </a>
    </strong>
    &nbsp;{{ note.excerpt | strip_html | strip_newlines | truncatewords: 10 }}
</p>
{% endfor %}

## Graph view

<p>Here are all the notes in this garden, along with their links, visualized as a graph.</p>

{% include notes_graph.html %}

<script>
    let tags = [];
    if(window.location.hash) {
        const urlTag = window.location.hash.split('#')[1];
        tags = [urlTag];
        $("#" + urlTag).addClass("active-tag");
    }

    function filterNotesByTags() {
        $("[data-tags]").each(function(index, element) {
            const elementTags = element.getAttribute("data-tags").split(' ');
            if (elementTags.length === 0) {
                elementTags.push("seedling");
            }
            if (elementTags.some(r => tags.includes(r)) || tags.length === 0) {
                $(this).removeClass("hidden");
            } else {
                $(this).addClass("hidden");
            } 
        });
    }

    $(".taglist").each(function() {
        $(this).click(function() {
            const id = $(this).attr('id');
            if (tags.includes(id)) {
                const index = tags.indexOf(id);
                tags.splice(index, 1);
                $(this).removeClass("active-tag");
            } else {
                $(this).addClass("active-tag");
                tags.push(id);
            }
            filterNotesByTags();
        })
    });

    filterNotesByTags();

</script>