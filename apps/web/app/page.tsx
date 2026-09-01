import Link from "next/link";
import { benchmarks, githubUrl, localDocsUrl, pra } from "@/lib/content";
import { Arrow, CtaBand, EngineGrid, LocalDocsNote, SectionTitle, Status } from "./components";

export default function Home() {
  return (
    <>
      <section className="home-hero wrap" id="main">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Open-source AI infrastructure</p>
          <h1>Run long-context AI with <em>less active context.</em></h1>
          <p className="lede">{pra.hero}</p>
          <div className="hero-actions"><Link className="button" href="/developers/quickstart" data-event="try-pra">Try PRA <Arrow /></Link><Link className="button button-ghost" href="/products/pra/benchmarks" data-event="view-benchmarks">View benchmarks</Link></div>
          <p className="hero-modes">Gateway <i>•</i> Agent <i>•</i> SDK <i>•</i> Native engine integrations</p>
        </div>
        <div className="hero-system" aria-label="PRA separates logical memory from active model context">
          <div className="system-head"><span>Logical context</span><span>Persistent · addressable</span></div>
          <div className="memory-stack"><div><b>01</b><span>Documents</span><small>source://knowledge</small></div><div><b>02</b><span>Tools &amp; skills</span><small>tool://workspace</small></div><div><b>03</b><span>Task state</span><small>task://active</small></div><div className="muted-row"><b>···</b><span>History &amp; records</span><small>session://archive</small></div></div>
          <div className="router-line"><span>route</span><i /><span>select</span><i /><span>materialize</span></div>
          <div className="active-context"><span>Active context</span><strong>Only selected detail</strong><div className="token-line">query <b>ref:02</b> evidence <b>ref:03</b> →</div></div>
        </div>
      </section>

      <section className="evidence-strip wrap" aria-label="Research evidence">
        {benchmarks.slice(0, 3).map((item) => <a href={item.source} className="evidence-card" key={item.id}><Status>{item.evidence}</Status><strong>{item.quality}</strong><span>{item.qualityDelta}</span><small>View methodology <Arrow /></small></a>)}
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="The system" title="Logical memory stays large. Active context stays bounded." copy="PRA separates what an application can address from what a model must process in the current operation." />
        <div className="steps-grid"><article><span>01</span><h3>Keep context addressable</h3><p>Store documents, records, tool results, task state, and history as typed resources with stable identities.</p></article><article><span>02</span><h3>Route before materializing</h3><p>Use compact semantic and symbolic addresses to select relevant resources under an explicit budget.</p></article><article><span>03</span><h3>Bring back exact detail</h3><p>Materialize selected text through a gateway or selected native K/V in qualified engine integrations.</p></article></div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <SectionTitle eyebrow="Adopt incrementally" title="Start at the integration depth your evidence supports." copy="The deepest integration is not automatically the best one. Begin with selected text, measure your workload, then move deeper only when native reuse pays." />
          <div className="level-track"><article><b>E0</b><span>Selected-text compatibility</span><small>Lowest-friction evaluation</small></article><i /><article><b>E1</b><span>Logical PRA-aware endpoint</span><small>Typed resource transport</small></article><i /><article><b>E2</b><span>Native detached memory</span><small>Selected K/V in attention</small></article><i /><article><b>E3</b><span>Scheduler-owned lifecycle</span><small>Placement, prefetch, reuse</small></article></div>
          <div className="deployment-grid"><article><h3>PRA Agent</h3><p>Reference interaction environment for sessions, tools, typed records, and PRA experiments.</p><Status>In progress</Status></article><article><h3>PRA Gateway</h3><p>Low-friction mediation for OpenAI-compatible applications, with selected-text compatibility as the floor.</p><Status>In progress</Status></article><article><h3>Runtime / SDK</h3><p>Direct Python integration for resolvers, records, routing, caching, training, and evaluation.</p><Status>Available</Status></article><article><h3>Native engines</h3><p>Engine-specific work on selected K/V, residency, prefix coexistence, and scheduling.</p><Status>Experimental</Status></article></div>
        </div>
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="Engine integrations" title="One semantic layer. Multiple inference paths." copy="Choose by workload and hardware, then verify the recommended PRA level for that combination." />
        <EngineGrid limit={6} />
        <div className="section-action"><Link className="inline-link" href="/products/pra/integrations">Compare all engine integrations <Arrow /></Link></div>
      </section>

      <section className="section research-band">
        <div className="wrap split-band"><div><p className="eyebrow">Open source, with evidence</p><h2>Inspect the mechanism. Reproduce the claims. Keep the adoption path open.</h2></div><div><p>PRA began as research into sparse native-K/V memory and demand-driven context expansion. The public runtime, papers, artifacts, and qualification gaps remain visible.</p><div className="hero-actions"><a className="button" href={githubUrl} data-event="github">View GitHub <Arrow /></a><a className="button button-ghost" href={localDocsUrl} data-event="docs">Read documentation</a></div><LocalDocsNote /></div></div>
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="Commercial support" title="Open source at the core. Production help when it matters." />
        <div className="commercial-grid"><article><span>01</span><h3>Optimization assessment</h3><p>Baseline your workload, evaluate PRA, calibrate profiles, and produce a quality/cost recommendation.</p></article><article><span>02</span><h3>Production integration</h3><p>Integrate the runtime, gateway path, storage lifecycle, engine, and observability into your stack.</p></article><article><span>03</span><h3>Enterprise support</h3><p>Get upgrade guidance, priority debugging, private validation, and compatibility support.</p></article></div>
        <p className="roadmap-note">PRA is the first product in eInnovator’s broader AI systems roadmap.</p>
      </section>

      <CtaBand />
    </>
  );
}
