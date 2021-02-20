require "jekyll-spark"

module Jekyll
  class FootnoteContainer < ComponentBlock
    def template(context)
      num = @props["num"]
      content = @props["content"]

      render = %Q[
        <div class="footnotes" role="doc-endnotes">
          <ol>
            #{content}
          </ol>
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "FootnoteContainer",
  Jekyll::FootnoteContainer,
)