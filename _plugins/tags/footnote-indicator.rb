require "jekyll-spark"

module Jekyll
  class FootnoteIndicator < ComponentTag
    def template(context)
      num = @props["num"]

      render = %Q[
        <sup id="fnref:#{num}" role="doc-noteref"><a href="#fn:#{num}" class="footnote">#{num}</a></sup>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "Foot",
  Jekyll::FootnoteIndicator,
)