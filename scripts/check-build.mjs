import { readFileSync, existsSync } from "node:fs";
import assert from "node:assert/strict";
const root = process.argv[2];
assert(
  root,
  "Укажите URL предпросмотра, например http://127.0.0.1:4173/portfolio/",
);
const response = await fetch(root);
assert.equal(response.status, 200);
const html = await response.text();
const paths = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => !/^https?:/.test(p));
for (const path of [
  ...paths,
  "projects/catalog.webp",
  "projects/sroki.webp",
  "projects/shramko.webp",
  "robots.txt",
]) {
  const res = await fetch(new URL(path, root));
  assert.equal(res.status, 200, path);
  assert(
    !res.headers.get("content-type")?.includes("text/html"),
    `HTML fallback вместо файла: ${path}`,
  );
  console.log("OK", path);
}
assert(existsSync("dist/index.html"));
assert(readFileSync("dist/index.html", "utf8").includes('lang="ru"'));
console.log("Статические ресурсы доступны, HTML fallback не обнаружен.");
