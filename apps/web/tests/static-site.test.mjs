import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const staticRoot = path.join(projectRoot, "static-site");

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(projectRoot, relativePath), "utf8"));
}

function pageFile(route) {
  return route === "/"
    ? path.join(staticRoot, "index.html")
    : path.join(staticRoot, route.slice(1), "index.html");
}

test("the static export contains every public route", async () => {
  const [baseRoutes, engines] = await Promise.all([
    readJson("data/routes.json"),
    readJson("data/engines.json"),
  ]);
  const routes = [
    ...baseRoutes,
    ...engines.map((engine) => `/products/pra/integrations/${engine.slug}`),
  ];

  for (const route of routes) {
    const html = await readFile(pageFile(route), "utf8");
    assert.match(html, /<main/, route);
    assert.match(html, /eInnovator/, route);
    assert.doesNotMatch(html, /self\.__next_f|<script[^>]+_next\/static\/chunks/i, route);
  }
});

test("static HTML references copied assets and resolvable internal pages", async () => {
  const html = await readFile(pageFile("/"), "utf8");
  const assetLinks = [...html.matchAll(/(?:href|src)="(\/_next\/[^"?]+|\/static\.js|\/og\.png)"/g)]
    .map((match) => match[1]);
  assert.ok(assetLinks.some((link) => link.endsWith(".css")));
  assert.ok(assetLinks.includes("/static.js"));

  for (const asset of new Set(assetLinks)) {
    await access(path.join(staticRoot, asset.slice(1)));
  }

  const internalLinks = [...html.matchAll(/href="(\/[^"#?]*)/g)]
    .map((match) => match[1])
    .filter((link) => !link.startsWith("/_next") && link !== "/og.png");
  for (const route of new Set(internalLinks)) {
    await access(pageFile(route));
  }
});

test("benchmark filters retain a no-framework static enhancement", async () => {
  const [html, script] = await Promise.all([
    readFile(pageFile("/products/pra/benchmarks"), "utf8"),
    readFile(path.join(staticRoot, "static.js"), "utf8"),
  ]);
  assert.match(html, /data-engine=/);
  assert.match(html, /data-evidence=/);
  assert.match(script, /addEventListener\("change"/);
});

test("static hosting support files are emitted", async () => {
  const [notFound, sitemap, robots, readme, og] = await Promise.all([
    readFile(path.join(staticRoot, "404.html"), "utf8"),
    readFile(path.join(staticRoot, "sitemap.xml"), "utf8"),
    readFile(path.join(staticRoot, "robots.txt"), "utf8"),
    readFile(path.join(staticRoot, "README.txt"), "utf8"),
    readFile(path.join(staticRoot, "og.png")),
  ]);
  assert.match(notFound, /404/);
  assert.match(notFound, /requested page does not exist/i);
  assert.match(sitemap, /<urlset/);
  assert.match(robots, /Sitemap:/);
  assert.match(readme, /static eInnovator website/i);
  assert.ok(og.length > 100_000);
});
