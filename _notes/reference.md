---
title: A note about cats
weight: 100000
---


This is a second note with a poem with cats. 


Here's a link to a note that explains why it's important to move your body every day.

> I like my pillow, my fancy bed,
>
> My cat tree and the bathroom sink.
>
> Each has its time and fills a need,
>
> but a box is best when I want to think.


I’ve been looking into <a href="https://edwardtufte.github.io/tufte-css/">Tufte
CSS</a> recently. Tufte CSS -inspired by
the teachings of the legendary Edward Tufte<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote">1</a></sup>- provides suggestions and
tools to style web articles for improved legibility.


You can create as many notes as you want{% Foot num: "2" %}. and more stuff.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et risus at ipsum pharetra pellentesque vel in massa. Nam ornare, velit sed pulvinar gravida, justo ipsum eleifend augue, id porta velit eros vestibulum odio. Vestibulum dignissim malesuada sapien, eu volutpat lacus pellentesque et. Curabitur dui nisi, sagittis ut tempor ac, scelerisque in diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae euismod ex. Morbi lacinia iaculis tempor.

Nunc porttitor lacus ullamcorper mauris porttitor feugiat. Vestibulum condimentum lacus vitae orci lobortis pellentesque in ac dolor. Nullam libero justo, suscipit id suscipit vel, tincidunt vitae lectus. Phasellus gravida iaculis ligula, at pharetra urna. Nunc vel tellus eleifend, aliquet magna non, condimentum est. Pellentesque vulputate posuere felis eget sodales. Cras finibus tortor porta libero bibendum, vel bibendum orci luctus. Donec ac eros vitae erat malesuada imperdiet at tempor turpis.



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


https://blog.jkl.gg/jekyll-footnote-tufte-sidenote/

### Welcome!

This is your first note. You'll find it in the [`notes/`](https://github.com/maximevaillancourt/digital-garden-jekyll-template/tree/master/_notes) directory.

### Link syntax

To link to another note, you can use multiple syntaxes. The following four use the "double-bracket" notation ([view the Markdown source file](https://github.com/maximevaillancourt/digital-garden-jekyll-template/blob/master/_notes/your-first-note.md#link-syntax) to see the underlying syntax).

- Using the note title: [[a note about cats]]
- Using the note's filename: [[cats]]
- Using the note's title, with a label: [[A note about cats|link to the note about cats using the note title]]
- Using the note's filename, with a label: [[cats|link to the note about cats using the note's filename]]

In all cases, if the double-bracket link does not point to a valid note, the double brackets will still be shown, like this: [[there is no note that matches this link]].

Alternatively, you can use regular [Markdown syntax](https://www.markdownguide.org/getting-started/) for links, with a relative link to the other note, like this: [this is a Markdown link to the note about cats](/cats){: .internal-link}. Don't forget to use the `.internal-link` class to make sure the link is styled as an internal link (without the little arrow).

Since the Web is all about HTML, you can always use plain HTML if you want, like this: <a class="internal-link" href="/cats">This is a link to the note about cats with HTML</a>.

Of course, you can also link to external websites, like this: [this is a link to Wikipedia](https://wikipedia.org/). Again, you can use plain HTML if you prefer.

**Note about static hosts**: if you use a static host that doesn't support URLs that don't end with `.html` (such as Neocities), try changing the `use_html_extension` value to `true` in the `_config.yml` file and restart the Jekyll server (or re-build the site). This adds a `.html` extension to note URLs and may resolve issues with links. If you're still having trouble, I recommend using Netlify to host your digital garden: it's free, easy to use, and fully supports this template's features out of the box.

### Automatic bi-directional links

Notice in the "Notes mentioning this note" section that there is another note linking to this note. This is a bi-directional link, and those are automatically created when you create links to other notes.

### Link previews

If you're on a device with mouse support, try hovering your mouse on internal links to preview the notes: [[a note about cats]].

### Images and other Markdown goodies

Finally, because you have the full power of Markdown in this template, you can use regular Markdown syntax for various formatting options.

Lists work as expected:

- List element A
- List element B
- List element C

1. List element
2. List element
3. List element

If you'd like to quote other people, consider using quote blocks:

> Lorem ipsum dolor sit amet

And of course, images look great:

<img src="/assets/images/image.jpg"/>

### Code syntax highlighting

You can add code blocks with full syntax color highlighting by wrapping code snippet in triple backticks and specifying the type of the code (`js`, `rb`, `sh`, etc.):

```js
// Here's a bit of JavaScript:
console.log('hello!')
```

```rb
# And now some Ruby
def foo(bar)
  "baz"
end
```

```sh
$ cat /dev/urandom | grep "the answer to life" # shell scripts look nice too
```


### Next steps

**If this template is useful to you in any way, consider [donating](https://ko-fi.com/maximevaillancourt) to support my work**. ☕

This digital garden template is free, open-source, and [available on GitHub here](https://github.com/maximevaillancourt/digital-garden-jekyll-template).

The easiest way to build your own digital garden based on this template is to read this [step-by-step guide explaining how to set this up from scratch](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll). If you need any help, my [DMs are open on Twitter (@vaillancourtmax)](https://twitter.com/vaillancourtmax). 👋

Go forth, have fun, and learn new something every day! ✌️

{% FootnoteContainer %}
{% Footnote num: "1" %}
noted for <a href="https://edwardtufte.github.io/tufte-css/">his</a> writings on information design and as a pioneer in the field of data visualization
{% endFootnote %}

    {% Footnote num: "2" %}
        Yes, I know jQuery is old school and the youngins probably use fancier alternatives today but I love me some jQuery and it gets the job done.
    {% endFootnote %}
{% endFootnoteContainer %}