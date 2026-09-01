import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../static-site", import.meta.url)));
const port = Number(process.env.PORT || 4173);
const mime = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

async function resolveRequest(pathname) {
  const decoded = decodeURIComponent(pathname);
  const candidate = resolve(root, `.${decoded}`);
  if (candidate !== root && !candidate.startsWith(`${root}\\`) && !candidate.startsWith(`${root}/`)) return null;
  try {
    const info = await stat(candidate);
    return info.isDirectory() ? join(candidate, "index.html") : candidate;
  } catch {
    if (!extname(candidate)) {
      try {
        const cleanUrl = join(candidate, "index.html");
        await stat(cleanUrl);
        return cleanUrl;
      } catch {
        // No matching clean-URL directory exists.
      }
    }
    return null;
  }
}

createServer(async (request, response) => {
  const pathname = new URL(request.url || "/", "http://localhost").pathname;
  const file = await resolveRequest(pathname);
  const target = file || join(root, "404.html");
  response.statusCode = file ? 200 : 404;
  response.setHeader("Content-Type", mime.get(extname(target)) || "application/octet-stream");
  if (request.method === "HEAD") return response.end();
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Static site: http://127.0.0.1:${port}/`);
});
