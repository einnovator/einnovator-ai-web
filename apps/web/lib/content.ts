import productsJson from "@/data/products.json";
import enginesJson from "@/data/engines.json";
import benchmarksJson from "@/data/benchmarks.json";

export type Product = (typeof productsJson)[number];
export type Engine = (typeof enginesJson)[number];
export type Benchmark = (typeof benchmarksJson)[number];

function requireFields(
  collection: string,
  rows: Array<Record<string, unknown>>,
  fields: string[],
) {
  for (const [index, row] of rows.entries()) {
    for (const field of fields) {
      if (!(field in row) || row[field] === "") {
        throw new Error(`${collection}[${index}] is missing ${field}`);
      }
    }
  }
}

requireFields("products", productsJson, [
  "id",
  "name",
  "tagline",
  "summary",
  "status",
  "docs_url",
  "github_url",
]);

requireFields("engines", enginesJson, [
  "id",
  "name",
  "slug",
  "status",
  "validatedLevel",
  "observedLevel",
  "upstream",
  "github",
]);

requireFields("benchmarks", benchmarksJson, [
  "id",
  "model",
  "engine",
  "quality",
  "status",
  "evidence",
  "source",
]);

const missingTokens = new Set(["", "0", "0%", "0 ms"]);
for (const row of benchmarksJson) {
  for (const field of ["quality", "visibleReduction", "activeKvReduction", "ttft", "memory"] as const) {
    if (missingTokens.has(row[field])) {
      throw new Error(`Benchmark ${row.id} uses an ambiguous missing value in ${field}`);
    }
  }
}

export const products = productsJson;
export const engines = enginesJson;
export const benchmarks = benchmarksJson;
export const pra = products[0];

export function getEngine(slug: string) {
  return engines.find((engine) => engine.slug === slug);
}

export const localDocsUrl =
  process.env.DOCS_URL ?? pra.docs_url;

export const githubUrl =
  process.env.GITHUB_URL ?? pra.github_url;

export const siteUrl =
  process.env.SITE_URL ?? "https://einnovator.org";
