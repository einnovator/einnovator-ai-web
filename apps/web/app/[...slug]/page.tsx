import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { engines, getEngine } from "@/lib/content";
import routes from "@/data/routes.json";
import {
  AboutPage,
  ContactPage,
  LegalPage,
  ProductsPage,
  ProfilesPage,
  QuickstartPage,
  ResearchPage,
} from "../content-pages";
import { AgentReworkedPage, PublicationsReworkedPage, SolutionReworkedPage } from "../content-hygiene-pages";
import { DesignPartnersReworkedPage, EnterpriseReworkedPage, GatewayReworkedPage } from "../enterprise-pages";
import { BenchmarksReworkedPage } from "../benchmark-page";
import { EngineReworkedPage, IntegrationsReworkedPage } from "../engine-pages";
import { ArchitectureReworkedPage, ContextPage, NativeMemoryPage, NativeServingPage, PraOverviewPage } from "../pra-modes";

export function generateStaticParams() {
  return [...routes.filter((route) => route !== "/"), ...engines.map((engine) => `/products/pra/integrations/${engine.slug}`)].map((route) => ({ slug: route.slice(1).split("/") }));
}

const titles: Record<string, string> = {
  products: "Products",
  "products/pra": "PRA context and inference optimization",
  "products/pra/architecture": "PRA architecture",
  "products/pra/context": "PRA Selected Context",
  "products/pra/native-memory": "PRA Native Memory",
  "products/pra/native-serving": "PRA Native Serving",
  "products/pra/benchmarks": "PRA benchmarks",
  "products/pra/profiles": "PRA optimization profiles",
  "products/pra/integrations": "PRA engine integrations",
  "products/pra/agent": "PRA Agent",
  "products/pra/gateway": "PRA Gateway",
  "products/pra/enterprise": "PRA enterprise support",
  "developers/quickstart": "PRA developer quickstart",
  research: "Research",
  "research/publications": "PRA publications",
  "research/c5": "C5 research",
  "company/about": "About",
  "company/contact": "Contact",
  "design-partners": "PRA design partners",
  "solutions/long-context": "Long-context AI",
  "solutions/agent-infrastructure": "Agent infrastructure",
  "solutions/inference-optimization": "Inference optimization",
  "solutions/enterprise-ai": "Enterprise AI",
  "legal/privacy": "Privacy",
  "legal/terms": "Terms",
  "legal/security": "Security",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const route = (await params).slug.join("/");
  const engine = route.startsWith("products/pra/integrations/") ? getEngine(route.split("/").at(-1) ?? "") : undefined;
  const title = engine ? `PRA for ${engine.name}` : titles[route] ?? "eInnovator";
  const routeDescriptions: Record<string, string> = {
    "developers/quickstart": "Install PRA, inspect a model and engine, evaluate a workload, export a qualification report, and start the open-source Gateway, Agent, or runtime.",
    "products/pra/gateway": "Open-source PRA Gateway for Selected Context, typed resources, durable sessions, capability negotiation, streaming, traces, and explicit fallback.",
    "products/pra/agent": "Open-source PRA Agent for durable sessions, tasks, tools, typed context records, CLI/TUI operation, and documented external-agent integration boundaries.",
  };
  const enterpriseMetadata = route === "products/pra/enterprise" ? {
    description: "LLM inference optimization services, long-context workload qualification, production implementation, and enterprise PRA support across vLLM, SGLang, TensorRT-LLM, MLX, and other engines.",
    keywords: ["LLM inference optimization services", "AI infrastructure optimization", "long-context optimization", "vLLM integration", "SGLang integration", "TensorRT-LLM integration", "MLX integration", "enterprise PRA support"],
  } : {};
  return { title, description: engine ? `${engine.bestFor} Current PRA integration status, deployment modes, requirements, metrics, and qualification gates.` : enterpriseMetadata.description ?? routeDescriptions[route], keywords: enterpriseMetadata.keywords, alternates: { canonical: `/${route}` } };
}

export default async function ContentRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const route = (await params).slug.join("/");
  if (route === "products") return <ProductsPage />;
  if (route === "products/pra") return <PraOverviewPage />;
  if (route === "products/pra/architecture") return <ArchitectureReworkedPage />;
  if (route === "products/pra/context") return <ContextPage />;
  if (route === "products/pra/native-memory") return <NativeMemoryPage />;
  if (route === "products/pra/native-serving") return <NativeServingPage />;
  if (route === "products/pra/benchmarks") return <BenchmarksReworkedPage />;
  if (route === "products/pra/profiles") return <ProfilesPage />;
  if (route === "products/pra/integrations") return <IntegrationsReworkedPage />;
  if (route.startsWith("products/pra/integrations/")) {
    const engine = getEngine(route.split("/").at(-1) ?? "");
    return engine ? <EngineReworkedPage engine={engine} /> : notFound();
  }
  if (route === "products/pra/agent") return <AgentReworkedPage />;
  if (route === "products/pra/gateway") return <GatewayReworkedPage />;
  if (route === "products/pra/enterprise") return <EnterpriseReworkedPage />;
  if (route === "developers/quickstart") return <QuickstartPage />;
  if (route === "research" || route === "research/c5") return <ResearchPage />;
  if (route === "research/publications") return <PublicationsReworkedPage />;
  if (route === "company/about") return <AboutPage />;
  if (route === "company/contact") return <ContactPage />;
  if (route === "design-partners") return <DesignPartnersReworkedPage />;
  if (route.startsWith("solutions/")) return <SolutionReworkedPage slug={route.split("/").at(-1) ?? "long-context"} />;
  if (route === "legal/privacy") return <LegalPage kind="privacy" />;
  if (route === "legal/terms") return <LegalPage kind="terms" />;
  if (route === "legal/security") return <LegalPage kind="security" />;
  notFound();
}
