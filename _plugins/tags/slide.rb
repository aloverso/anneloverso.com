require "jekyll-spark"

module Jekyll
  class Slide < ComponentBlock
    def template(context)
      src = @props["src"]
      alt = @props["alt"]

      render = %Q[
        <div class="slide">
            <img src="#{src}" alt="#{alt}" class="illustration" />
            <div class="caption">
                #{content}
            </div>
        </div>
      ]
    end
  end
end

Liquid::Template.register_tag(
  "Slide",
  Jekyll::Slide,
)