import { readFileSync, writeFileSync } from "node:fs";
const input = process.env.SITE_URL;
if (!input) {
  console.log("SITE_URL не задан: canonical и sitemap не создаются.");
  process.exit(0);
}
const url = new URL(input);
if (url.protocol !== "https:")
  throw new Error("SITE_URL должен использовать HTTPS");
url.hash = "";
url.search = "";
if (!url.pathname.endsWith("/")) url.pathname += "/";
const escape = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const site = escape(url.href);
let html = readFileSync("dist/index.html", "utf8");
html = html
  .replace(/<link rel="canonical"[^>]*\/>/g, "")
  .replace(/<meta property="og:url"[^>]*\/>/g, "");
html = html.replace(
  "</head>",
  `<link rel="canonical" href="${site}"/><meta property="og:url" content="${site}"/></head>`,
);
writeFileSync("dist/index.html", html);
writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site}</loc></url></urlset>`,
);
writeFileSync(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${url.href}sitemap.xml\n`,
);
