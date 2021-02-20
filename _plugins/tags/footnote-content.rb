require "jekyll-spark"

module Jekyll
  class FootnoteContent < ComponentBlock
    def template(context)
      num = @props["num"]
      content = @props["content"]

      render = %Q[
        <li id="fn:#{num}" role="doc-endnote">
          <p>#{content} <a href="#fnref:#{num}" class="reversefootnote" role="doc-backlink">&#8617;</a></p>
        </li>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "Footnote",
  Jekyll::FootnoteContent,
)