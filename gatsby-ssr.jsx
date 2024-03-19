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
                console.log(document.documentElement);
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
              console.log("TEST TEST TEST TEST TEST");
              console.log(window.__setPreferredTheme);
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