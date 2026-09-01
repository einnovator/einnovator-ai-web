import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const staticRoot = path.join(projectRoot, "static-site");
const offlineRoot = path.join(projectRoot, "offline-site");

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(projectRoot, relativePath), "utf8"));
}

function pageFile(route, root = staticRoot) {
  return route === "/"
    ? path.join(root, "index.html")
    : path.join(root, route.slice(1), "index.html");
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
    assert.doesNotMatch(html, /file:\/\/\//i, route);
    assert.doesNotMatch(html, /\bE[0-3]\b/, route);
  }
});

test("static HTML references copied assets and resolvable internal pages", async () => {
  const html = await readFile(pageFile("/"), "utf8");
  const assetLinks = [...html.matchAll(/(?:href|src)="(\/_next\/[^"?]+|\/static\.js|\/og\.png|\/einnovator-logo\.webp)"/g)]
    .map((match) => match[1]);
  assert.ok(assetLinks.some((link) => link.endsWith(".css")));
  assert.ok(assetLinks.includes("/static.js"));

  for (const asset of new Set(assetLinks)) {
    await access(path.join(staticRoot, asset.slice(1)));
  }

  const internalLinks = [...html.matchAll(/href="(\/[^"#?]*)/g)]
    .map((match) => match[1])
    .filter((link) => !link.startsWith("/_next") && !/\.(?:png|webp|css|js)$/i.test(link));
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
  assert.match(html, /data-stage=/);
  assert.match(html, /data-model=/);
  assert.match(html, /data-hardware=/);
  assert.match(html, /data-workload=/);
  assert.match(html, /data-metric=/);
  assert.match(script, /addEventListener\("change"/);
  assert.match(script, /addEventListener\("click"/);
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

test("offline pages resolve entirely through file-compatible links", async () => {
  const [baseRoutes, engines] = await Promise.all([
    readJson("data/routes.json"),
    readJson("data/engines.json"),
  ]);
  const routes = [
    ...baseRoutes,
    ...engines.map((engine) => `/products/pra/integrations/${engine.slug}`),
  ];

  for (const route of routes) {
    const filename = pageFile(route, offlineRoot);
    const html = await readFile(filename, "utf8");
    assert.doesNotMatch(html, /\b(?:href|src|action)=["']\/(?!\/)/i, route);
    assert.doesNotMatch(html, /file:\/\/\//i, route);
    assert.doesNotMatch(html, /\bE[0-3]\b/, route);

    const references = [...html.matchAll(/\b(?:href|src|action)=["']([^"']+)["']/gi)]
      .map((match) => match[1])
      .filter((value) => !/^(?:[a-z]+:|#|\/\/)/i.test(value));
    for (const reference of new Set(references)) {
      const localPath = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
      if (localPath) await access(path.resolve(path.dirname(filename), localPath));
    }
  }

  const [home, readme] = await Promise.all([
    readFile(pageFile("/", offlineRoot), "utf8"),
    readFile(path.join(offlineRoot, "README.txt"), "utf8"),
  ]);
  assert.match(home, /href="products\/pra\/index\.html"/);
  assert.match(home, /href="_next\/static\/css\/.+\.css"/);
  assert.match(home, /src="static\.js"/);
  assert.match(readme, /no server is required/i);
});
