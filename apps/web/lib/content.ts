import productsJson from "@/data/products.json";
import enginesJson from "@/data/engines.json";
import benchmarksJson from "@/data/benchmarks.json";

export type Product = (typeof productsJson)[number];
type EngineRecord = (typeof enginesJson)[number];
type LegacyEngineShape = {
  validatedLevel: string;
  observedLevel: string;
  deploymentModes: Record<string, string> & { E0: string; E1: string; E2: string; E3: string };
  tested: Record<string, string>;
  recommendation: { best: string; useWhen: string; avoidWhen: string; gate: string };
};
export type Engine = EngineRecord & LegacyEngineShape;
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
  "compatibility",
  "nativeMemory",
  "nativeServing",
  "recommendedToday",
  "upstream",
  "github",
]);

requireFields("benchmarks", benchmarksJson, [
  "id",
  "stage",
  "metric",
  "value",
  "comparison",
  "model",
  "engine",
  "engineVersion",
  "hardware",
  "workload",
  "quality",
  "status",
  "evidence",
  "provenance",
  "date",
  "methodology",
  "source",
]);

const missingTokens = new Set(["", "0", "0%", "0 ms"]);
for (const row of benchmarksJson) {
  for (const field of ["value", "quality", "comparison", "provenance"] as const) {
    if (missingTokens.has(row[field])) {
      throw new Error(`Benchmark ${row.id} uses an ambiguous missing value in ${field}`);
    }
  }
}

export const products = productsJson;
export const engines = enginesJson as unknown as Engine[];
export const benchmarks = benchmarksJson;
export const pra = products[0];

export function getEngine(slug: string) {
  return engines.find((engine) => engine.slug === slug);
}

export const localDocsUrl =
  process.env.DOCS_URL ?? pra.docs_url;

export function praDocsUrl(path = "") {
  return new URL(path, localDocsUrl).toString();
}

export const bundleCollectionUrl =
  "https://huggingface.co/collections/EInnovator/pra-bundles-6a971e52093232f858e660f6";

export const githubUrl =
  process.env.GITHUB_URL ?? pra.github_url;

export const siteUrl =
  process.env.SITE_URL ?? "https://einnovator.org";
