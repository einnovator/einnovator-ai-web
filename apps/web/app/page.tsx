import Link from "next/link";
import { githubUrl } from "@/lib/content";
import { Arrow, CtaBand, EngineGrid, SectionTitle, Status } from "./components";

export default function Home() {
  return (
    <>
      <section className="home-hero wrap" id="main">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Open-source context infrastructure</p>
          <h1>Give AI models only the <em>context they need.</em></h1>
          <p className="lede">PRA is open-source context infrastructure for AI agents and long-running model applications. It keeps reusable documents, tools, results, and task state outside the active prompt, then selects what each request needs.</p>
          <div className="hero-actions"><Link className="button" href="/developers/quickstart">Try PRA <Arrow /></Link><Link className="button button-ghost" href="/products/pra/benchmarks">Benchmark your workload</Link></div>
          <p className="hero-modes">No retraining <i>•</i> Existing model servers <i>•</i> Text fallback</p>
        </div>
        <div className="hero-system" aria-label="PRA selects context before inference">
          <div className="system-head"><span>Reusable context</span><span>Persistent · addressable</span></div>
          <div className="memory-stack"><div><b>01</b><span>Documents</span><small>source://knowledge</small></div><div><b>02</b><span>Tools &amp; results</span><small>tool://workspace</small></div><div><b>03</b><span>Task state</span><small>task://active</small></div><div className="muted-row"><b>···</b><span>Sessions &amp; records</span><small>session://archive</small></div></div>
          <div className="router-line"><span>route</span><i /><span>select</span><i /><span>send less</span></div>
          <div className="active-context"><span>Selected Context</span><strong>Only relevant, authorized detail</strong><div className="token-line">request + selected records → existing model server</div></div>
        </div>
      </section>

      <section className="outcome-strip wrap" aria-label="PRA adoption path">
        <Link href="/products/pra/context"><span>01</span><strong>Send less.</strong><p>Reduce active prompt context with your existing inference engine.</p></Link>
        <Link href="/products/pra/native-memory"><span>02</span><strong>Recompute less.</strong><p>Reuse selected context as native model memory on qualified integrations.</p></Link>
        <Link href="/products/pra/native-serving"><span>03</span><strong>Manage reuse.</strong><p>Prefetch, share, place, and evict reusable semantic memory with supported engines.</p></Link>
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="Start compatible" title="Keep your inference stack. Change how context reaches it." copy="PRA Gateway or the SDK selects ordinary context before calling your existing endpoint. No model retraining or inference-engine patch is required for this first deployment path." />
        <div className="compatibility-flow" aria-label="PRA Selected Context compatibility deployment"><div><span>Existing application</span></div><i>→</i><div className="accent"><span>PRA Gateway / SDK</span><small>route · authorize · select</small></div><i>→</i><div><span>Existing model server</span><small>selected ordinary context</small></div></div>
        <p className="reassurance">Start with your existing inference stack. Go deeper only when measurement shows it pays.</p>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <SectionTitle eyebrow="A measured progression" title="Three product paths. One compatibility floor." copy="Selected Context is the baseline. Native Memory and Native Serving are optional qualification paths—not prerequisites." />
          <div className="mode-cards"><article><Status>Available</Status><h3>PRA Context</h3><p>Send selected ordinary text to an existing model server. Benchmark token reduction, quality, latency, throughput, and memory.</p><Link className="inline-link" href="/products/pra/context">Explore compatibility <Arrow /></Link></article><article><Status>Qualification</Status><h3>PRA Native Memory</h3><p>Reuse selected semantic resources as model-native memory when repeated prefill is expensive and the engine has a validated seam.</p><Link className="inline-link" href="/products/pra/native-memory">Understand native reuse <Arrow /></Link></article><article><Status>Partner path</Status><h3>PRA Native Serving</h3><p>Coordinate residency, prefetch, sharing, placement, eviction, and transfer within a serving engine.</p><Link className="inline-link" href="/products/pra/native-serving">Explore serving integration <Arrow /></Link></article></div>
        </div>
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="Engine integrations" title="A recommendation for today—not a universal promise." copy="Every engine page separates what works without modification, what native work may unlock, what has been measured, and what remains under qualification." />
        <EngineGrid limit={6} />
        <div className="section-action"><Link className="inline-link" href="/products/pra/integrations">Compare engine recommendations <Arrow /></Link></div>
      </section>

      <section className="section research-band">
        <div className="wrap split-band"><div><p className="eyebrow">Active systems qualification</p><h2>Corrections and negative results are part of the product.</h2></div><div><p>Every published metric is tied to a model, engine, hardware environment, workload, and evidence level. Recommendations change when new measurements change the quality-cost frontier.</p><div className="hero-actions"><a className="button" href={githubUrl}>View open source <Arrow /></a><Link className="button button-ghost" href="/research/publications">Review evidence</Link></div></div></div>
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="Commercial support" title="Benchmark first. Integrate what earns its place." />
        <div className="commercial-grid"><article><span>01</span><h3>Optimization Assessment</h3><p>Baseline Full Context, freeze quality criteria, measure Selected Context, and return a reproducible recommendation.</p></article><article><span>02</span><h3>Production Integration</h3><p>Integrate PRA Gateway, the SDK, storage policy, observability, and the qualified engine path.</p></article><article><span>03</span><h3>Enterprise &amp; Engine Support</h3><p>Get private qualification, priority support, and partner engineering for native integration.</p></article></div>
      </section>

      <CtaBand />
    </>
  );
}
