# AGENTS.md — eInnovator Commercial Website
## Product-led website with PRA as the first product and an extensible architecture for CogCopro and future products

## 0. Goal

Create a new production-quality commercial website for **eInnovator**.

Launch with **PRA (Progressive Retrieval Attention)** as the primary product, while using a structure that can later accommodate additional products such as CogCopro / Cognitive Coprocessors and future inference, runtime, data, analytics, and vertical products.

The website should support three simultaneous goals:

1. explain the company clearly to technical and commercial visitors;
2. convert interested users into PRA adopters, design partners, services customers, and enterprise leads;
3. preserve a credible bridge to eInnovator/C5 research without making the commercial site feel like a research notebook.

The site should not read as a list of papers. The public commercial message should be product-first and outcome-first.

## 1. Core positioning

### Company

eInnovator builds infrastructure for efficient, capable AI systems.

Initial product:

```text
PRA — Progressive Retrieval Attention
```

Simple product message:

> Run long-context AI agents with less active context.

Supporting explanation:

> PRA keeps documents, tools, task state, and other reusable context outside the active prompt and brings back only what the model needs.

Additional positioning:

```text
works with existing agents
works with OpenAI-compatible APIs
works as a gateway
works natively with supported inference engines
supports persistent semantic records
supports model/engine-specific optimization profiles
```

Do not lead with dense transformer/KV terminology on the homepage. Technical detail belongs one level deeper.

## 2. Commercial narrative

```text
Problem
  ↓
Long-context agents waste tokens, memory, bandwidth, and repeated model work.

PRA
  ↓
Separates reusable context from active sequential context.

Deployment choices
  ↓
Gateway / Agent / SDK-runtime / Native engine integrations

Evidence
  ↓
Quality-preserving context reduction
native K/V reuse
persistent semantic memory
cross-engine support

Adoption
  ↓
Try OSS
Benchmark your workload
Use a verified profile
Talk to us about optimization/enterprise support
```

## 3. Business model reflected in the site

Do not imply PRA itself is a closed-source SaaS.

### Open source

```text
PRA runtime
gateway
agent
CLI
engine integrations
protocol
profiles/evaluation tooling
```

### Commercial services / enterprise

```text
PRA Optimization Assessment
production integration
private profile calibration
enterprise support
deployment architecture
performance engineering
fleet/control-plane roadmap
```

Future commercial control-plane features may include fleet management, profile rollouts, quality-regression monitoring, cost dashboards, tenant policy, RBAC/SSO, audit, and verified private profiles.

Do not build a fake pricing page with invented numbers.

## 4. Target audiences

Design content for at least four personas:

- AI/inference engineer — engine support, benchmarks, architecture, quickstart, CLI, runtime integration.
- Agent/platform engineer — typed records, gateway, tasks, tools/skills, sessions, compatibility.
- Engineering leader/CTO — cost/quality benefits, integration effort, risk, security, support.
- Research/advanced user — papers, benchmarks, methodology, architecture, C5 connection.

## 5. Information architecture

Use a top-level structure that works with one product today and many later:

```text
/
├── products/
│   ├── pra/
│   │   ├── overview
│   │   ├── architecture
│   │   ├── benchmarks
│   │   ├── integrations
│   │   ├── profiles
│   │   ├── agent
│   │   ├── gateway
│   │   └── enterprise
│   └── future products
├── solutions/
│   ├── agent-infrastructure
│   ├── inference-optimization
│   ├── long-context
│   └── enterprise-ai
├── developers/
│   ├── quickstart
│   ├── docs
│   ├── github
│   ├── examples
│   └── compatibility
├── research/
│   ├── overview
│   ├── publications
│   └── c5
├── company/
│   ├── about
│   ├── contact
│   └── careers (optional)
└── design-partners/
```

Do not expose empty launch routes.

## 6. Launch navigation

Visible header:

```text
Products
Solutions
Developers
Research
Company
```

Primary CTA: `Try PRA`

Secondary CTA: `Talk to us`

Product dropdown initially contains PRA but must be data-driven for future additions.

## 7. Homepage

### Hero direction

Heading:

> Run long-context AI with less active context.

Subheading:

> PRA is an open-source context and inference optimization layer for AI agents and open models. Keep reusable documents, tools, task state, and other context outside the active prompt, then materialize only what the model needs.

CTAs:

```text
Try PRA
View benchmarks
```

Small supporting line:

```text
Gateway • Agent • SDK • Native engine integrations
```

## 8. Homepage evidence

Use evidence cards with qualification, e.g.:

```text
90%+ visible-context reduction
on current frozen-selection cross-engine benchmarks

6,258 / 6,258 exact E0/E2 pairs
across tested vLLM, SGLang, and MLX cohorts

Shared native memory
persistent HOT/WARM/COLD/SOURCE lifecycle

OpenAI-compatible adoption path
gateway-first or native engine integration
```

Every claim links to methodology/benchmarks. Never imply universal guarantees.

## 9. Homepage deployment section

Show:

```text
Your Agent / Application
        ↓
      PRA
  ┌─────┼──────────┐
Agent  Gateway   Runtime/SDK
        ↓
Inference Engines
```

Engine cards may include Hugging Face, vLLM, SGLang, MLX, TensorRT-LLM, OpenVINO.

Distinguish statuses clearly:

```text
Validated
Reference
Experimental
In progress
Planned
```

## 10. Future product extensibility

Include a subtle statement such as:

> PRA is the first product in eInnovator's broader AI systems roadmap.

Do not heavily market CogCopro before product readiness.

## 11. PRA overview page

Route: `/products/pra`

Structure:

1. value proposition;
2. how it works;
3. deployment modes;
4. agent/gateway/runtime;
5. engine support;
6. model/profile system;
7. benchmarks;
8. OSS quickstart;
9. enterprise/services CTA.

## 12. PRA deployment modes

Explain:

### PRA Agent
Reference interactive agent and dogfooding environment.

### PRA Gateway
Use existing OpenAI-compatible agents/apps with PRA mediation.

### PRA Runtime / SDK
Integrate directly into applications.

### Native engine integration
Deep integration for selected native K/V and engine-level reuse.

## 13. Architecture page

Route: `/products/pra/architecture`

Explain progressively:

```text
typed records
routing
selection
materialization
profiles
HOT/WARM/COLD/SOURCE
agent/gateway protocol
engine-native K/V
```

Start with a simple systems diagram, then deeper sections.

## 14. Benchmarks page

Route: `/products/pra/benchmarks`

This should become a central product page.

Filters:

```text
model
engine
hardware
profile
dataset/workload
```

Columns:

```text
Model
Engine
Hardware
Profile
Quality
Quality delta
Visible-token reduction
Active-K/V reduction
TTFT
ITL/TPOT
Peak memory
Status
Evidence tier
```

Use explicit `Not measured`, `Blocked`, `Candidate`, etc. Never encode missing as zero.

## 15. Profiles page

Route: `/products/pra/profiles`

Explain:

```text
REFERENCE_CORRECTNESS
QUALITY_MAX
QUALITY_MAX_CANDIDATE
BALANCED
ECONOMY
```

For each: objective, quality gate, tradeoff, validation status, supported combinations.

Do not imply universal configurations.

## 16. Integrations page

Route: `/products/pra/integrations`

Cards for HF, vLLM, SGLang, MLX, TensorRT-LLM, OpenVINO.

Each card includes:

```text
integration level
status
capabilities
native K/V
prefix-cache coexistence
storage lifecycle
benchmark link
docs link
```

## 17. Agent page

Route: `/products/pra/agent`

Show:

```text
chat
sessions
tasks
tools
skills
typed records
gateway/remote endpoint support
AUTO/PRA/TEXT transport
web UI
TUI
```

State prominently:

> PRA Agent is optional. PRA works with existing agents.

## 18. Gateway page

Route: `/products/pra/gateway`

Explain:

```text
OpenAI-compatible endpoint
AUTO capability negotiation
typed records
G10 downgrade
G11 logical/native path
session/resource deltas
prefix preservation
```

Use this as the low-friction adoption page.

## 19. Quickstart

Route: `/developers/quickstart`

Target a 5-minute experience.

Example direction:

```bash
pip install ...
pra gateway start ...
```

Then point an existing OpenAI client at the PRA gateway.

Also show `pra agent chat` and native runtime usage.

Do not require reading research papers.

## 20. Docs integration

Do not duplicate the full MkDocs/reference documentation.

Use:

```text
commercial site = product/concept/adoption docs
technical docs = detailed reference
```

Prominent links: Documentation, GitHub, Examples, API, CLI.

## 21. Design Partner page

Route: `/design-partners`

Explain:

> We're working with a small number of teams operating real AI-agent and open-model workloads. Design partners receive direct engineering support to benchmark PRA against their workload and help shape the runtime.

Clarify what partners provide:

```text
workload/evaluation access
feedback
engineering contact
```

What eInnovator provides:

```text
integration help
benchmarking
profile tuning
performance analysis
```

Possible outputs:

```text
private report
production configuration
case study if mutually agreed
```

CTA: `Apply as a design partner`

Do not promise unlimited free engineering.

## 22. Enterprise/services page

Route: `/products/pra/enterprise`

Offer:

### PRA Optimization Assessment
Baseline workload analysis, PRA evaluation, profile calibration, cost/quality report, production recommendation.

### Production integration
Engine integration, deployment, storage, gateway, agent integration, observability.

### Enterprise support
Upgrades, priority support, performance debugging, profile validation, security/compatibility.

### Future control plane
Mention only as a roadmap item unless implemented.

## 23. Research section

Route: `/research`

Keep research credible but subordinate to the product journey.

Explain PRA's research origin and link to publications/C5. Do not dump every paper on the homepage.

## 24. C5 relationship

Keep a clean conceptual distinction:

```text
eInnovator
  product engineering
  open-source infrastructure
  commercial services

C5
  broader research
  cognition
  computation
  complexity
  blue-sky programs
```

Use neutral wording until legal/organizational relationship is finalized.

## 25. CogCopro extensibility

The content model should permit adding `/products/cogcopro` without global-component changes.

Example product metadata:

```yaml
id: pra
name: PRA
short_description: ...
status: available
cta: ...
docs: ...
github: ...
```

Future:

```yaml
id: cogcopro
name: CogCopro
status: research-preview
```

## 26. Content architecture

Use a data-driven product registry/content collection. Shared fields should include:

```text
id
name
tagline
summary
status
hero
features
integrations
benchmarks
docs_url
github_url
cta
```

Avoid hardcoding PRA assumptions into shared nav/layout components.

## 27. Suggested stack

Prefer:

```text
Next.js
TypeScript
React
Tailwind CSS
MDX/content collections
```

Alternative is acceptable if repo conventions favor it.

Requirements:

```text
static-friendly
SEO
responsive
fast
accessible
markdown-friendly
data-driven product pages
```

Avoid a heavy CMS initially.

## 28. Visual design

Aim for:

```text
technical
credible
minimal
modern
not generic AI-gradient-heavy
```

Use strong typography, neutral base, restrained accent, architecture diagrams, benchmark tables, code snippets and charts.

No stock robot imagery.

## 29. Branding

Use `eInnovator` consistently.

Assume `einnovator.org` as the likely primary domain, but keep DNS/deployment configurable.

Do not invent trademarks/legal suffixes.

## 30. SEO

Create natural metadata for topics including AI inference optimization, LLM context optimization, long-context agents, vLLM optimization, TensorRT-LLM optimization, SGLang, OpenVINO LLM, KV cache optimization, and OpenAI-compatible gateway.

Add OpenGraph, social cards, JSON-LD where appropriate, sitemap, robots, canonical URLs.

## 31. Analytics

Add a privacy-conscious analytics abstraction with environment-configured provider.

Track key actions:

```text
Try PRA
Docs
GitHub
Design Partner
Talk to us
benchmark filters
```

Do not hardwire a vendor.

## 32. Contact / lead flow

Create `/company/contact` and CTA forms for general contact, design partner, and enterprise/optimization assessment.

Use configurable form/API endpoint. No hardcoded credentials. Add spam-protection seam.

## 33. GitHub integration

Link prominently to the PRA repository.

Optional GitHub stats must be cached and must not make homepage rendering depend synchronously on GitHub.

## 34. Benchmark data integration

Generate website benchmark data from a checked-in JSON export of the PRA product/result registry.

```text
PRA result registry
  ↓ build/export
website JSON
  ↓
benchmark pages/tables
```

Schema validation should fail builds on invalid data.

## 35. Evidence labeling

Every benchmark result should expose status/evidence such as:

```text
Measured
Candidate
Experimental
Blocked
Not measured
Controlled
Natural QA
Model-backed
Serving
```

Do not strip evidence tiers for marketing simplicity.

## 36. Charts

Use clear charts for quality vs visible tokens, quality vs active K/V, TTFT ratios, memory savings, and wire bytes over session turns.

Avoid decorative charts.

## 37. Homepage section order

1. Hero.
2. Evidence.
3. How PRA works.
4. Deployment modes.
5. Engine integrations.
6. Benchmark/profile preview.
7. Open source.
8. Enterprise/services.
9. Research credibility.
10. CTA/footer.

## 38. CTA hierarchy

Primary: `Try PRA`

Secondary: `View benchmarks`

Commercial: `Talk to us`

Lower-page optional: `Become a design partner`

## 39. Content style

Commercial prose should be short, precise, technical, evidence-oriented and low hype.

Avoid unsupported words such as revolutionary, game-changing, magic, 10x or AGI.

Use concrete terms with explanations.

## 40. Do not expose paper numbering as product UX

Users should navigate Architecture, Benchmarks, Runtime and Integrations—not Paper 4.5 or Paper 6.1.

Research pages may link the paper series.

## 41. Security / enterprise messaging

Accurate high-level claims may include tenant/session scoped records, authorization-aware resources, self-hosted data plane, and no raw K/V over the agent-facing protocol.

Never claim certifications not obtained.

## 42. Pricing

Do not invent public pricing.

Use:

```text
Open source — free
Enterprise/support — contact
Optimization assessment — contact
```

Pricing can come later from design-partner/customer learning.

## 43. Product extensibility requirement

All global UI must support N products, N integrations, N benchmark families and N solution pages.

Launch content may contain only PRA.

## 44. Engineering quality

Require TypeScript strict mode, lint, schema/data utility tests, component smoke tests, production build, broken-link checks, responsive QA and accessibility checks. Add CI.

## 45. Performance

Optimize images, minimize client JS, statically render where possible, lazy-load charts, and target strong real-world performance.

## 46. Accessibility

Require semantic headings, keyboard navigation, focus states, contrast, alt text, ARIA where useful, and reduced-motion support.

## 47. Responsive design

Test mobile, tablet, laptop, wide desktop. Make benchmark tables usable on mobile via horizontal scroll, column prioritization or responsive cards.

## 48. Repository structure

Suggested dedicated-site layout:

```text
src/
content/
data/
public/
```

or monorepo `apps/web`. Follow existing conventions if a repo already exists.

## 49. Environment configuration

Support environment values such as:

```text
SITE_URL
DOCS_URL
GITHUB_URL
CONTACT_ENDPOINT
ANALYTICS_PROVIDER
ANALYTICS_KEY
```

Commit no secrets.

## 50. Deployment

Remain provider-neutral. Support Vercel, Cloudflare Pages, and generic Node/static hosting where practical.

## 51. Initial launch content

Write finished content for homepage, PRA overview, architecture, benchmark intro, integrations, agent, gateway, enterprise/services, design-partner program, about, research overview and contact.

No lorem ipsum.

## 52. Design-partner conversion messaging

Clearly establish:

```text
PRA is open source
```

and separately:

```text
eInnovator offers paid optimization, integration, validation and support
```

Do not imply indefinite free consulting.

## 53. Future commercial control plane

Architect content so a future product such as `PRA Control` can be added, but do not advertise it as shipping now.

## 54. Roadmap presentation

If used, statuses should be:

```text
Available
Experimental
In progress
Research
```

Do not attach dates unless committed.

## 55. About page

Suggested company description direction:

> A technology company building efficient AI infrastructure and turning systems research into practical open-source and commercial products.

Mention long-term research orientation without making the company sound unfocused.

## 56. Research-to-product loop

A useful company diagram:

```text
Research
   ↓
Open source
   ↓
Production deployments
   ↓
Measurements / feedback
   ↓
Better research and products
```

This supports the strategic goal of using PRA commercial revenue to sustain more exploratory work.

## 57. Credibility

Use benchmark methodology, paper links, GitHub, reproducibility and the engine matrix as credibility. Never show customer logos without permission.

## 58. Legal placeholders

Create Privacy, Terms and Security footer routes. If final legal text is unavailable, mark content for legal review before production. Do not fabricate guarantees.

## 59. Launch checklist

Before launch:

- all routes build;
- no placeholder prose;
- benchmark claims trace to data;
- external links work;
- mobile/accessibility QA;
- SEO metadata/sitemap/robots;
- analytics optional;
- contact flow works;
- GitHub/docs links work;
- no secrets;
- legal review placeholders addressed;
- performance checked.

## 60. Deliverables

Create website source, README, local dev instructions, deployment guide, content-editing guide, product registry schema, benchmark-data schema, and visual QA artifacts.

## 61. Suggested launch copy direction

### Hero

> Run long-context AI with less active context.

> PRA is an open-source context and inference optimization layer for AI agents and open models. Keep reusable context outside the active prompt and materialize only what the model needs.

### Evidence

> Quality-preserving native execution across tested inference engines.

> Persistent semantic resources across sessions and tasks.

> Gateway-first adoption or native engine integration.

### Open source

> Start with the gateway. Go native when it pays.

### Commercial

> Benchmark PRA on your workload.

> eInnovator offers optimization assessments, production integration, private profile calibration, and enterprise support.

## 62. Avoid these mistakes

Do not:

```text
turn homepage into a research paper
center CogCopro before it is product-ready
claim universal 90% savings
invent customers
invent pricing
invent certifications
invent supported engines
hardcode PRA into shared components
build a heavy CMS too early
make PRA Agent mandatory
hide the open-source nature
```

## 63. Stop gate

Complete when:

- the website runs locally and in production build;
- PRA is the primary launch product;
- architecture supports future products without redesign;
- homepage, PRA, developer, research, company, enterprise and design-partner pages are complete;
- benchmark data comes from structured data;
- evidence status is visible;
- agent/gateway/native modes are clear;
- OSS and commercial offerings are clearly separated;
- lead flows work;
- responsive/accessibility/SEO/build tests pass;
- deployment docs exist;
- launch copy is polished and human-readable.

## Core principle

> eInnovator should not market PRA as an academic mechanism. The site should present a practical open-source AI infrastructure product with measurable quality/cost tradeoffs, while making it easy for future products such as CogCopro to inherit the same company, developer, benchmark, research, and commercial structure.
