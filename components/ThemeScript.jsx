import Script from "next/script";

export default function ThemeScript() {
  const code = `
    (function(){
      try {
        var saved = localStorage.getItem("theme");
        var dark = saved ? saved === "dark" : true;
        document.documentElement.classList.toggle("dark", dark);
      } catch(e) {}
    })();
  `;
  return <Script id="theme-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: code }} />;
}