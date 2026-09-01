import Link from "next/link";
import { Arrow, Breadcrumbs, CtaBand, PageHero, SectionTitle, Status } from "./components";

const evaluationSteps = [
  ["01", "Baseline Full Context", "Pin the model, engine, hardware, workload, traffic shape, and current prompt strategy."],
  ["02", "Freeze quality and evidence", "Agree on task success, safety constraints, datasets, statistical treatment, and fallback thresholds."],
  ["03", "Measure Selected Context", "Route and select ordinary context, then measure tokens, quality, TTFT, throughput, memory, and successful work."],
  ["04", "Qualify Native Memory", "Only when reuse is relevant, freeze selection and measure incremental encoding, transfer, memory, and serving effects."],
  ["05", "Qualify Native Serving", "Only when the engine owns the seam, measure prefetch, residency, transfer, tails, and useful throughput."],
  ["06", "Recommend mode and profile", "Choose the shallowest path that improves the measured quality-cost frontier with a clear fallback."],
  ["07", "Deliver qualification artifacts", "Provide results, limitations, an acceptance suite, capacity model, and production implementation plan."],
];

const evaluationDeliverables = [
  "Architecture and context-flow review",
  "Representative workload and production-like traffic shape",
  "Agreed quality, safety, and SLO gates",
  "Full Context and Selected Context qualification",
  "Session reuse and context-waste analysis",
  "Native Memory or Native Serving qualification when relevant",
  "Scoped model, engine, and hardware comparison",
  "Capacity and economic analysis",
  "Recommended mode, profile, storage, and session policy",
  "Explicit fallback configuration",
  "Reproducible acceptance and regression suite",
  "Technical report, executive summary, and implementation plan",
];

const openSourceRows = [
  ["PRA runtime, Gateway, and Agent", "Yes", "Yes"],
  ["CLI evaluate, recommend, and report", "Yes", "Yes"],
  ["Public Hugging Face bundles", "Yes", "Yes"],
  ["OTel, Prometheus, and basic Grafana", "Yes", "Yes"],
  ["Standard engine integrations", "Yes", "Yes"],
  ["Customer workload qualification", "Self-service", "eInnovator-led"],
  ["Custom profile and policy calibration", "Self-service", "Included by scope"],
  ["Production implementation", "Customer-owned", "Assisted or hands-on"],
  ["Customer-specific acceptance suite", "Basic tooling", "Delivered"],
  ["Capacity and economic model", "Basic metrics", "Customer-specific"],
  ["Support responsibility", "Community", "Annual plans"],
  ["Enterprise Control Plane", "As available", "Optional add-on"],
];

const decisionFlow = [
  "Customer workload",
  "Quality + SLO gates",
  "Context and inference measurements",
  "Capacity and economic model",
  "Recommended deployment",
  "Acceptance and regression suite",
  "Implementation plan",
];

export function EnterpriseReworkedPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "PRA", href: "/products/pra" }, { label: "Enterprise" }]} />
      <PageHero
        eyebrow="PRA commercial services"
        title="Prove the opportunity. Implement what wins. Keep it qualified."
        intro="PRA makes context and inference inefficiency measurable with open-source tooling. eInnovator helps enterprises qualify the opportunity against a real workload, implement the winning configuration, and maintain a tested operating envelope as the stack evolves."
        actions={<><Link className="button" href="/company/contact">Request a Comprehensive Evaluation <Arrow /></Link><Link className="button button-ghost" href="/developers/quickstart">Start self-service</Link></>}
      />

      <section className="section wrap">
        <SectionTitle eyebrow="Why enterprises engage" title="Specialist qualification and operating responsibility—not access to PRA." copy="Use open source when standard evaluation and customer-owned implementation are enough. Engage eInnovator when the workload, integration surface, or ongoing support responsibility merits a jointly defined qualification artifact." />
        <div className="buyer-lanes">
          <article><span>Start open source when</span><ul className="check-list"><li>You are experimenting or inference spend is small</li><li>You operate one small model without production SLOs</li><li>A standard engine integration is sufficient</li><li>Your team can own evaluation and interpretation</li></ul><Link className="inline-link" href="/developers/quickstart">Try PRA <Arrow /></Link></article>
          <article><span>Talk to eInnovator when</span><ul className="check-list"><li>Context or inference spend is material</li><li>Latency, capacity, or memory constrains production</li><li>Context, tool, or document catalogs are large or repeated</li><li>Multiple models, engines, or enterprise controls are involved</li></ul><Link className="inline-link" href="/company/contact">Discuss your workload <Arrow /></Link></article>
        </div>
      </section>

      <section className="section section-tint" id="packages">
        <div className="wrap">
          <SectionTitle eyebrow="Commercial packages" title="A clear ladder from decision to durable operation." copy="Starting prices are indicative, exclude taxes, and are not contractual quotes. Final scope depends on workload, models, engines, environments, response requirements, and operational responsibility." />
          <div className="commercial-packages">
            <article><span className="price-label">Starting at €5,000</span><h3>Comprehensive Evaluation</h3><p>A customer-specific technical and economic decision with a reproducible acceptance suite and implementation plan.</p><a href="#evaluation">Review deliverables <Arrow /></a></article>
            <article><span className="price-label">Starting at €20,000</span><h3>Production Implementation</h3><p>Assisted or hands-on delivery, typically 4–12 weeks, with 12 months Standard Support included.</p><a href="#implementation">Compare delivery modes <Arrow /></a></article>
            <article><span className="price-label">Optional add-on</span><h3>Enterprise Control Plane</h3><p>Central management capabilities are being developed with design partners and are offered only according to current availability.</p><a href="#control-plane">See maturity <Arrow /></a></article>
            <article><span className="price-label">From €10,000/year</span><h3>Annual Support</h3><p>Compatibility guidance, qualification renewal, upgrade review, and operating support at the required scope.</p><a href="#annual-support">Compare tiers <Arrow /></a></article>
          </div>
          <p className="credit-note"><strong>Evaluation credit:</strong> Comprehensive Evaluation fees may be credited toward a qualifying Production Implementation started within an agreed period.</p>
        </div>
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="Open source and commercial" title="Self-service remains capable by design." copy="Commercial value comes from reduced specialist effort, broader systems expertise, customer-specific artifacts, implementation, and responsibility—not from withholding useful open-source functionality." />
        <div className="comparison-scroll" aria-label="Open source and commercial capability comparison">
          <table className="comparison-table"><thead><tr><th>Capability</th><th>Open source</th><th>Commercial engagement</th></tr></thead><tbody>{openSourceRows.map(([capability, openSource, commercial]) => <tr key={capability}><th scope="row">{capability}</th><td>{openSource}</td><td>{commercial}</td></tr>)}</tbody></table>
        </div>
      </section>

      <section className="section section-tint" id="evaluation">
        <div className="wrap">
          <SectionTitle eyebrow="Comprehensive Evaluation · from €5K" title="A qualification engagement that ends in a decision." copy="The objective is not to maximize token reduction. It is to improve the measured quality-cost frontier of the customer’s workload. A negative result is a valid deliverable." />
          <div className="self-service-comparison">
            <article><span>Self-service PRA</span><dl><div><dt>Workload</dt><dd>Standard CLI evaluation</dd></div><div><dt>Analysis</dt><dd>CLI recommendation and local metrics</dd></div><div><dt>Profiles</dt><dd>Standard profiles</dd></div><div><dt>Ownership</dt><dd>Customer interprets and acts</dd></div></dl></article>
            <article><span>Comprehensive Evaluation</span><dl><div><dt>Workload</dt><dd>Representative customer qualification</dd></div><div><dt>Analysis</dt><dd>Production-like traffic, SLO, capacity, and economic analysis</dd></div><div><dt>Profiles</dt><dd>Customer-specific calibration by scope</dd></div><div><dt>Ownership</dt><dd>eInnovator owns the scoped recommendation</dd></div></dl></article>
          </div>
          <div className="qualification-layout">
            <div><h3>What you receive</h3><ul className="deliverable-list">{evaluationDeliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h3>Decision path</h3><div className="qualification-flow">{decisionFlow.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></div>
          </div>
          <SectionTitle eyebrow="Method" title="Baseline → agreed gates → measurement → recommendation." />
          <div className="engagement-steps">{evaluationSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          <div className="report-preview"><div><span className="kicker">Sample artifact</span><h3>PRA Qualification Report</h3><p>The report preserves limitations and reproduces the decision, not just the winning chart.</p></div><pre>{`PRA Qualification Report
-- Executive summary
-- Workload and baseline
-- Quality and safety gates
-- Context economy and session reuse
-- Latency, throughput, and capacity
-- Recommended configuration + fallback
-- Limitations
-- Reproduction and acceptance suite`}</pre></div>
        </div>
      </section>

      <section className="section wrap" id="implementation">
        <SectionTitle eyebrow="Production Implementation · from €20K" title="Assisted when your team wants to build. Hands-on when you want us to deliver." copy="Typical implementations run 4–12 weeks. Common engagements are approximately €20K–€50K+, depending on the integration surface, qualification scope, environments, and operating responsibility." />
        <div className="implementation-grid">
          <article><Status>Assisted</Status><h3>Customer engineers lead implementation</h3><p>eInnovator provides architecture, integration guidance, PRA configuration, profile/storage/session policy, code review, observability, qualification, rollout review, and acceptance testing.</p><small>Indicative: commonly €20K–€30K</small></article>
          <article><Status>Hands-on</Status><h3>eInnovator implements substantial portions</h3><p>Scoped work may include agent or Gateway integration, typed records, runtime and engine integration, bundles, storage lifecycle, dashboards, security integration, load testing, rollout, and the acceptance suite.</p><small>Indicative: commonly €30K–€50K+</small></article>
        </div>
        <div className="support-boundary">
          <div><span className="kicker">Included for 12 months</span><h3>Standard Support for the qualified deployment</h3><ul className="check-list"><li>Business-hours support channel</li><li>Supported-configuration and compatibility guidance</li><li>PRA upgrade guidance and periodic deployment review</li><li>Bug triage and fixes for supported PRA components</li></ul></div>
          <div><span className="kicker">Separately contracted</span><h3>Responsibilities outside Standard Support</h3><ul className="limit-list"><li>24×7, emergency, or weekend response</li><li>Unlimited engineering or customer application development</li><li>Arbitrary new integrations</li><li>New model or engine qualification on demand</li></ul></div>
        </div>
      </section>

      <section className="section section-tint" id="control-plane">
        <div className="wrap">
          <SectionTitle eyebrow="Enterprise Control Plane · optional add-on" title="Central management is an availability-led path, not a prerequisite." copy="Enterprise Control Plane capabilities are being developed with design partners. Contact eInnovator for current availability. Indicative initial enablement is commonly +€10K–€30K when applicable." />
          <div className="maturity-grid">
            <article><Status>In development</Status><h3>Bundle and profile registry</h3><p>Approved model/PRA bundle and policy inventory.</p></article>
            <article><Status>In development</Status><h3>Qualification history</h3><p>Tracked evidence, configuration, and compatibility records.</p></article>
            <article><Status>Planned</Status><h3>Fleet visibility</h3><p>Deployment, version, and environment inventory.</p></article>
            <article><Status>Planned</Status><h3>Enterprise controls</h3><p>Central observability, RBAC/SSO, audit, and upgrade management.</p></article>
          </div>
          <p className="honesty-note">No roadmap capability above is represented as generally available. Initial enablement is intended to evolve toward an annual software and support subscription as the product matures.</p>
        </div>
      </section>

      <section className="section wrap" id="annual-support">
        <SectionTitle eyebrow="Annual Support & Qualification Renewal" title="Keep a changing stack inside a tested envelope." copy="A configuration qualified today can change as the model, engine, hardware, PRA runtime, or workload changes. Enterprise Support keeps the supported deployment within a tested compatibility and performance envelope." />
        <div className="support-tiers">
          <article><span className="price-label">Standard · €10K–€20K/year</span><h3>One qualified deployment</h3><p>Business-hours support, supported releases, compatibility guidance, upgrade review, and a limited qualification refresh.</p></article>
          <article><span className="price-label">Production · €25K–€50K/year</span><h3>Broader production responsibility</h3><p>Multiple models, engines, or environments; faster response; regular qualification refresh; architecture guidance; prioritized fixes; and a named technical contact where appropriate.</p></article>
          <article><span className="price-label">Enterprise / Critical · €50K–€100K+/year</span><h3>Critical and multi-environment scope</h3><p>Tighter contractual targets, named engineering ownership, upgrade qualification, escalation, and optional 24×7 terms where separately agreed.</p></article>
        </div>
        <div className="change-strip" aria-label="Reasons to renew qualification"><span>Models change</span><span>Engines change</span><span>Hardware stacks change</span><span>PRA changes</span><span>Workloads drift</span><span>Economics move</span></div>
        <p className="table-note">Final pricing depends on supported models, engines, environments, response requirements, qualification scope, and operational responsibility. Response-time commitments are defined only in a signed agreement.</p>
      </section>

      <section className="section research-band" id="engine-partnerships">
        <div className="wrap two-column"><div><p className="eyebrow">Engine partnership / native integration</p><h2>Build and qualify the engine seam together.</h2><p>Pricing is scoped directly to the integration and ongoing compatibility responsibility.</p></div><div><ul className="check-list"><li>Native-memory seam and scheduler/cache design</li><li>Storage, prefetch, tenant, and session isolation</li><li>OTel/Prometheus integration</li><li>Matched benchmark and compatibility suite</li><li>Upstream patch or pull request</li><li>Ongoing regression support</li></ul><Link className="button" href="/company/contact">Discuss an engine partnership <Arrow /></Link></div></div>
      </section>

      <section className="section wrap">
        <SectionTitle eyebrow="Evidence and economics" title="Measure successful work, capacity, and SLO headroom—not token count alone." copy="Qualification can estimate successful requests per second, successful tasks per hour, required GPU/CPU capacity, TTFT headroom, memory pressure, context-processing reduction, and—when infrastructure pricing is known—cost per successful task and annualized impact." />
        <div className="evidence-links"><Link href="/products/pra/benchmarks"><strong>6,258 / 6,258</strong><span>Frozen-selection parity in the common engine campaign</span><small>Review benchmark evidence <Arrow /></small></Link><Link href="/products/pra/integrations"><strong>Multiple engines</strong><span>Recommendations include qualification state and negative results</span><small>Compare integrations <Arrow /></small></Link><a href="https://huggingface.co/EInnovator"><strong>Public bundles</strong><span>Published PRA artifacts on Hugging Face</span><small>Browse EInnovator bundles <Arrow /></small></a></div>
        <blockquote className="roi-example"><span>Hypothetical illustration—not a PRA benchmark or guarantee</span><p>If a workload costs €300K/year to serve, a validated 20% capacity reduction would represent approximately €60K/year of infrastructure value.</p></blockquote>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <SectionTitle eyebrow="FAQ and procurement" title="Indicative anchors, explicit scope." />
          <div className="faq-list">
            <details><summary>What are the common engagement ranges?</summary><p>Comprehensive Evaluations are commonly €5K–€20K. Production Implementations are commonly €20K–€50K+. Control Plane enablement is commonly +€10K–€30K when applicable. Support ranges from €10K to €100K+/year depending on scope and service requirements.</p></details>
            <details><summary>Are these contractual prices?</summary><p>No. They are planning anchors. A proposal defines the workload, deliverables, environments, acceptance criteria, schedule, dependencies, and commercial terms.</p></details>
            <details><summary>Does an evaluation guarantee savings?</summary><p>No. It guarantees the scoped process and deliverables: baseline, agreed gates, measurement, recommendation, limitations, and reproduction. A negative recommendation is valid.</p></details>
            <details><summary>Do we have to buy services to use PRA?</summary><p>No. PRA remains open source. Teams can evaluate and implement it independently using the public runtime, tooling, integrations, bundles, and evidence.</p></details>
            <details><summary>How are Design Partners different?</summary><p>Design partnerships are separate, selective collaborations based on technical fit and mutual research or product value. They are not the standard route to discounted or free consulting.</p></details>
          </div>
        </div>
      </section>

      <section className="enterprise-cta wrap">
        <div><span className="kicker">Technical / self-service</span><h2>Benchmark your workload.</h2><p>Run the open tooling, review evidence, and choose an engine path.</p><div className="hero-actions"><Link className="button button-ghost" href="/developers/quickstart">Try PRA</Link><Link className="button button-ghost" href="/products/pra/benchmarks">View benchmarks</Link></div></div>
        <div><span className="kicker">Commercial</span><h2>Turn the result into a production decision.</h2><p>Request evaluation, implementation, support, or an engine partnership.</p><Link className="button" href="/company/contact">Choose an engagement <Arrow /></Link></div>
      </section>
    </>
  );
}

export function GatewayReworkedPage() {
  return <><Breadcrumbs items={[{ label: "PRA", href: "/products/pra" }, { label: "Gateway" }]} /><PageHero eyebrow="PRA Gateway · Compatibility boundary" title="Put Selected Context in front of an existing model endpoint." intro="The Gateway is the low-friction application path: preserve an OpenAI-compatible boundary, select authorized ordinary context, negotiate deeper capability explicitly, and retain a reversible text fallback." /><section className="section wrap"><div className="compatibility-flow" aria-label="PRA Gateway deployment"><div><span>Existing application</span><small>messages · tools · session</small></div><i>→</i><div className="accent"><span>PRA Gateway</span><small>identity · authorization · routing · selection</small></div><i>→</i><div><span>Existing model server</span><small>selected ordinary context</small></div></div></section><section className="section section-tint"><div className="wrap"><SectionTitle eyebrow="Contract" title="Logical resources cross the application boundary. Native memory does not." /><div className="risk-grid"><article><h3>Selected Context first</h3><p>Send ordinary messages or text to any compatible endpoint without an engine patch.</p></article><article><h3>Explicit capabilities</h3><p>Native features require advertised support, matched identity, and a validated downgrade path.</p></article><article><h3>Session deltas</h3><p>Carry stable session and resource changes without replaying the entire logical working set.</p></article><article><h3>Prefix coexistence</h3><p>Keep exact prefix-cache identity separate from query-addressed semantic-resource identity.</p></article><article><h3>Tenant isolation</h3><p>Do not share or attach native state across tenant, session, model, profile, or authorization boundaries.</p></article><article><h3>Authorization independent of relevance</h3><p>A highly relevant record is still excluded when the caller is not authorized to materialize it.</p></article></div><p className="honesty-note"><strong>Current status:</strong> the public product direction and compatibility contract are defined; a production Gateway command is not represented here as generally available until the reviewed CLI exposes it.</p></div></section><CtaBand title="Evaluate the Gateway against your current endpoint." /></>;
}

export function DesignPartnersReworkedPage() {
  return <><PageHero eyebrow="PRA design partners" title="Co-develop where the technical fit creates mutual value." intro="Design partnerships are separate from standard commercial engagements. They are selected for technical fit and mutual research or product value—not offered as a default path to free consulting." actions={<Link className="button" href="/company/contact">Apply with a workload <Arrow /></Link>} /><section className="section wrap"><div className="partner-grid"><article><span>Partners provide</span><ul className="check-list"><li>A representative workload and current baseline</li><li>A quality and safety evaluation harness</li><li>Target engine, model, hardware, and traffic shape</li><li>Named engineering and product contacts</li></ul></article><article><span>eInnovator provides by agreed scope</span><ul className="check-list"><li>Selected Context and optional native qualification</li><li>Early feature or joint engine work</li><li>Profile calibration and fallback design</li><li>Research or case-study collaboration where mutually useful</li></ul></article></div><p className="honesty-note">Selected partners may receive discounted or complementary work. Not every applicant is accepted, and no customer logo, case study, metric, or production claim is published without explicit permission.</p></section><section className="section section-tint"><div className="wrap"><SectionTitle eyebrow="Engagement path" title="Baseline first. Native only if the workload calls for it." /><div className="engagement-steps compact">{evaluationSteps.slice(0, 6).map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section><CtaBand title="Bring a workload with shared research or product value." /></>;
}
