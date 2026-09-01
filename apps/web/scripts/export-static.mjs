import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("../", import.meta.url)));
const outputRoot = resolve(projectRoot, "static-site");
const offlineRoot = resolve(projectRoot, "offline-site");
const distClient = resolve(projectRoot, "dist/client");
const workerPath = resolve(projectRoot, "dist/server/index.js");

if (dirname(outputRoot) !== projectRoot || basename(outputRoot) !== "static-site") {
  throw new Error(`Refusing to replace unsafe static output path: ${outputRoot}`);
}
if (dirname(offlineRoot) !== projectRoot || basename(offlineRoot) !== "offline-site") {
  throw new Error(`Refusing to replace unsafe offline output path: ${offlineRoot}`);
}

const [baseRoutes, engines] = await Promise.all([
  readFile(resolve(projectRoot, "data/routes.json"), "utf8").then(JSON.parse),
  readFile(resolve(projectRoot, "data/engines.json"), "utf8").then(JSON.parse),
]);
const routes = [...baseRoutes, ...engines.map((engine) => `/products/pra/integrations/${engine.slug}`)];
const routeSet = new Set(routes);

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const context = { waitUntil() {}, passThroughOnException() {} };

function staticHtml(html) {
  const withoutRuntimeScripts = html.replace(
    /<script\b([^>]*)>[\s\S]*?<\/script>/gi,
    (full, attributes) => /type=["']application\/ld\+json["']/i.test(attributes) ? full : "",
  );
  const withoutRuntimePreloads = withoutRuntimeScripts.replace(
    /<link\b[^>]*>/gi,
    (tag) => {
      const isModule = /rel=["']modulepreload["']/i.test(tag);
      const isScript = /as=["']script["']/i.test(tag) || /href=["'][^"']+\.js(?:\?[^"']*)?["']/i.test(tag);
      return isModule || isScript ? "" : tag;
    },
  );
  return withoutRuntimePreloads.replace("</body>", '<script src="/static.js" defer></script></body>');
}

function offlineReference(value, currentDirectory) {
  if (!value.startsWith("/") || value.startsWith("//")) return value;
  const match = value.match(/^([^?#]*)([?#].*)?$/);
  const pathname = match?.[1] || "/";
  const suffix = match?.[2] || "";
  const normalizedRoute = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const target = routeSet.has(normalizedRoute)
    ? normalizedRoute === "/" ? "index.html" : join(...normalizedRoute.slice(1).split("/"), "index.html")
    : pathname.slice(1);
  const localPath = relative(currentDirectory, resolve(offlineRoot, target)) || basename(target);
  return localPath.split(sep).join("/") + suffix;
}

function offlineHtml(html, currentDirectory) {
  return html.replace(
    /(\b(?:href|src|action)=["'])(\/[^"']*)(["'])/gi,
    (full, prefix, value, suffix) => `${prefix}${offlineReference(value, currentDirectory)}${suffix}`,
  );
}

async function render(path, accept = "text/html") {
  return worker.fetch(
    new Request(`https://einnovator.local${path}`, { headers: { accept } }),
    env,
    context,
  );
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(distClient, outputRoot, { recursive: true });

for (const route of routes) {
  const response = await render(route);
  if (response.status !== 200) throw new Error(`Static export failed for ${route}: HTTP ${response.status}`);
  const html = staticHtml(await response.text());
  if (/file:\/\/\//i.test(html)) throw new Error(`Static export rejected local file URL on ${route}`);
  if (/\bE[0-3]\b/.test(html)) throw new Error(`Static export rejected paper-level label on ${route}`);
  const directory = route === "/" ? outputRoot : join(outputRoot, ...route.slice(1).split("/"));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), html, "utf8");
}

const missing = await render("/__static_export_404__");
const missingHtml = staticHtml(await missing.text());
if (/file:\/\/\//i.test(missingHtml)) throw new Error("Static export rejected local file URL on 404 page");
await writeFile(join(outputRoot, "404.html"), missingHtml, "utf8");

for (const [route, filename, accept] of [
  ["/sitemap.xml", "sitemap.xml", "application/xml"],
  ["/robots.txt", "robots.txt", "text/plain"],
]) {
  const response = await render(route, accept);
  if (response.status !== 200) throw new Error(`Static export failed for ${route}: HTTP ${response.status}`);
  await writeFile(join(outputRoot, filename), await response.text(), "utf8");
}

await writeFile(
  join(outputRoot, "README.txt"),
  "Static eInnovator website. Serve this directory as the web root. Generated with: npm run build:static\n",
  "utf8",
);

console.log(`Static site exported: ${routes.length} routes -> ${outputRoot}`);

await rm(offlineRoot, { recursive: true, force: true });
await cp(outputRoot, offlineRoot, { recursive: true });

for (const route of routes) {
  const directory = route === "/" ? offlineRoot : join(offlineRoot, ...route.slice(1).split("/"));
  const filename = join(directory, "index.html");
  await writeFile(filename, offlineHtml(await readFile(filename, "utf8"), directory), "utf8");
}

const offline404 = join(offlineRoot, "404.html");
await writeFile(offline404, offlineHtml(await readFile(offline404, "utf8"), offlineRoot), "utf8");
await writeFile(
  join(offlineRoot, "README.txt"),
  "Offline eInnovator website. Double-click index.html to open it directly in a browser; no server is required. Generated with: npm run build:offline\n",
  "utf8",
);

console.log(`Offline site exported: ${routes.length} routes -> ${offlineRoot}`);
