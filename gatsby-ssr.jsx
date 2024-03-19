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
              setTheme((window.sessionStorage.getItem('theme') ? window.sessionStorage.getItem('theme') === "true" : window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light");
              function setTheme(theme){
                window.__theme = theme;
                if(window.__theme === "dark"){
                  document.documentElement.className = 'dark';
                }else{
                  document.documentElement.className = '';
                }
              }
              window.__setPreferredTheme = function(theme) {
                setTheme(theme);
                try {
                  window.sessionStorage.setItem('preferred-theme', theme);
                } catch (e) {}
              };
            })();`
          }
        }
      />
    ])
    setHtmlAttributes({ lang: "en" })
}