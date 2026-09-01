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
  assert.match(html, /einnovator-logo\.webp/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("commercial strategy is concrete without weakening self-service", async () => {
  const [home, enterprise, contact, partners] = await Promise.all([
    render().then((response) => response.text()),
    render("/products/pra/enterprise").then((response) => response.text()),
    render("/company/contact").then((response) => response.text()),
    render("/design-partners").then((response) => response.text()),
  ]);
  assert.match(home, /From measurable opportunity to supported production/);
  assert.match(home, /From €5K/);
  assert.match(home, /From €20K/);
  assert.match(home, /From €10K\/year/);
  assert.match(enterprise, /Starting at €5,000/);
  assert.match(enterprise, /Starting at €20,000/);
  assert.match(enterprise, /4–12 weeks/);
  assert.match(enterprise, /12 months Standard Support/);
  assert.match(enterprise, /Evaluation fees may be credited/);
  assert.match(enterprise, /Self-service remains capable by design/);
  assert.match(enterprise, /being developed with design partners/);
  assert.match(enterprise, /negative result is a valid deliverable/i);
  assert.match(contact, /name="current_models"/);
  assert.match(contact, /name="inference_engines"/);
  assert.match(contact, /Prefer not to say/);
  assert.match(partners, /separate from standard commercial engagements/);
  assert.doesNotMatch(`${home}${enterprise}`, /PRA saves \d|halves GPU cost|universal savings/i);
});

test("commercial claims follow the current technical product surface", async () => {
  const [home, quickstart, gateway, agent, enterprise] = await Promise.all([
    render().then((response) => response.text()),
    render("/developers/quickstart").then((response) => response.text()),
    render("/products/pra/gateway").then((response) => response.text()),
    render("/products/pra/agent").then((response) => response.text()),
    render("/products/pra/enterprise").then((response) => response.text()),
  ]);
  assert.match(home, /Available today/);
  assert.match(home, /Qualification CLI/);
  for (const command of ["pra doctor", "pra engines", "pra inspect", "pra evaluate", "pra recommend", "pra report", "pra serve", "pra gateway serve"]) {
    assert.match(quickstart, new RegExp(command));
  }
  assert.match(gateway, /Available compatibility boundary/);
  assert.match(gateway, /selected-context/);
  assert.match(gateway, /typed-transport/);
  assert.match(agent, /Available reference application/);
  assert.match(agent, /pra agent chat/);
  assert.match(agent, /pra agent run/);
  assert.match(agent, /Web UI is experimental/);
  assert.match(enterprise, /pra assess init/);
  assert.match(enterprise, /One artifact contract/);
  assert.doesNotMatch(`${home}${quickstart}${gateway}${agent}`, /does not yet expose|commands are not exposed|unreleased gateway/i);
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
    const html = await response.text();
    assert.doesNotMatch(html, /file:\/\/\//i, route);
    assert.doesNotMatch(html, /\bE[0-3]\b/, route);
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
  assert.ok(benchmarks.length >= 9);
  assert.ok(products.every((row) => row.id && row.name && row.docs_url && row.github_url));
  assert.ok(engines.every((row) => row.compatibility && row.nativeMemory && row.nativeServing && row.recommendedToday));
  assert.ok(engines.every((row) => row.evidence?.status && row.evidence?.provenance && row.evidence?.date && row.evidence?.methodology));
  for (const row of benchmarks) {
    for (const key of ["value", "quality", "comparison", "provenance", "date", "methodology"]) {
      assert.ok(!["", "0", "0%", "0 ms"].includes(row[key]), `${row.id}.${key}`);
    }
  }
});

test("homepage internal links resolve", async () => {
  const response = await render();
  const html = await response.text();
  const links = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((match) => match[1]);
  for (const path of new Set(links)) {
    if (path.startsWith("/_next") || /\.(?:png|webp|css|js)$/i.test(path)) continue;
    const linked = await render(path);
    assert.ok(linked.status < 400, `${path} returned ${linked.status}`);
  }
});

test("brand and social images and public documentation seam exist", async () => {
  const [logo, og, product] = await Promise.all([
    readFile(new URL("../public/einnovator-logo.webp", import.meta.url)),
    readFile(new URL("../public/og.png", import.meta.url)),
    readFile(new URL("../data/products.json", import.meta.url), "utf8"),
  ]);
  assert.equal(logo.subarray(0, 4).toString("ascii"), "RIFF");
  assert.equal(logo.subarray(8, 12).toString("ascii"), "WEBP");
  assert.ok(logo.length > 4_000);
  assert.ok(og.length > 100_000);
  assert.match(product, /https:\/\/github\.com\/einnovator\/pdattention/);
  assert.match(product, /https:\/\/einnovator\.github\.io\/pdattention\/index\.html/);
  assert.doesNotMatch(product, /file:\/\/\//i);
});
