import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  return (await import(workerUrl.href)).default;
}

async function render(path = "/") {
  const worker = await loadWorker();
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("homepage communicates the product and removes starter metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Give AI models only the/);
  assert.match(html, /context they need/);
  assert.match(html, /PRA is open source/);
  assert.match(html, /eInnovator/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("all launch routes render", async () => {
  const [baseRoutes, engines] = await Promise.all([
    readFile(new URL("../data/routes.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../data/engines.json", import.meta.url), "utf8").then(JSON.parse),
  ]);
  const routes = [
    ...baseRoutes.filter((route) => route !== "/"),
    ...engines.map((engine) => `/products/pra/integrations/${engine.slug}`),
  ];
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html/i, route);
  }
});

test("registries keep evidence and missing values explicit", async () => {
  const [products, engines, benchmarks] = await Promise.all([
    readFile(new URL("../data/products.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../data/engines.json", import.meta.url), "utf8").then(JSON.parse),
    readFile(new URL("../data/benchmarks.json", import.meta.url), "utf8").then(JSON.parse),
  ]);
  assert.ok(products.length >= 1);
  assert.equal(engines.length, 10);
  assert.ok(benchmarks.length >= 4);
  assert.ok(products.every((row) => row.id && row.name && row.docs_url && row.github_url));
  assert.ok(engines.every((row) => row.compatibility && row.nativeMemory && row.nativeServing && row.recommendedToday));
  assert.ok(engines.every((row) => row.evidence?.status && row.evidence?.provenance && row.evidence?.date && row.evidence?.methodology));
  for (const row of benchmarks) {
    for (const key of ["quality", "visibleReduction", "activeKvReduction", "ttft", "memory"]) {
      assert.ok(!["", "0", "0%", "0 ms"].includes(row[key]), `${row.id}.${key}`);
    }
  }
});

test("homepage internal links resolve", async () => {
  const response = await render();
  const html = await response.text();
  const links = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((match) => match[1]);
  for (const path of new Set(links)) {
    if (path.startsWith("/_next") || path === "/og.png") continue;
    const linked = await render(path);
    assert.ok(linked.status < 400, `${path} returned ${linked.status}`);
  }
});

test("social image and local documentation seam exist", async () => {
  const [og, product] = await Promise.all([
    readFile(new URL("../public/og.png", import.meta.url)),
    readFile(new URL("../data/products.json", import.meta.url), "utf8"),
  ]);
  assert.ok(og.length > 100_000);
  assert.match(product, /file:\/\/\/D:\/git\/rd\/pdattention\/site\/index\.html/);
});
