const React = require("react")

exports.onRenderBody = ({
    setHtmlAttributes,
    setHeadComponents
  }, pluginOptions) => {
    setHeadComponents([
      <script
        dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__theme = (window.sessionStorage.getItem('theme') ? window.sessionStorage.getItem('theme') === "true" : window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
              console.log(window.__theme);
              console.log(window.sessionStorage.getItem('theme') + "window.sessionStorage.getItem('theme')");
              console.log(window.matchMedia('(prefers-color-scheme: dark)').matches + "window.matchMedia('(prefers-color-scheme: dark)').matches");
            })();`
          }
        }
      />
    ])
    setHtmlAttributes({ lang: "en" })
}