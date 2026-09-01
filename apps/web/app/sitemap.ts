import type { MetadataRoute } from "next";
import { engines, siteUrl } from "@/lib/content";
import routes from "@/data/routes.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = [...routes, ...engines.map((engine) => `/products/pra/integrations/${engine.slug}`)];
  return allRoutes.map((route) => ({ url: `${siteUrl}${route === "/" ? "" : route}`, changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : route.includes("benchmarks") ? .9 : .7 }));
}
