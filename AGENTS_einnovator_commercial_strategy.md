# AGENTS.md — eInnovator PRA Commercial Strategy Website Update

## Goal

Update the eInnovator website so PRA's commercial path is concrete, credible, enterprise-oriented, and aligned with the open-source strategy.

Keep the existing strong positioning:
- “Give AI models only the context they need.”
- “Send less / Recompute less / Manage reuse.”
- “Start with your existing inference stack. Go deeper only when measurement shows it pays.”
- open-source-first adoption;
- explicit qualification and negative-result discipline.

The commercial ladder should become:

```text
Open source / self-service evaluation
        ↓
Comprehensive Evaluation
        ↓
Assisted or Hands-on Production Implementation
        ↓
Optional Enterprise Control Plane
        ↓
Annual Support / Qualification Renewal
```

Core principle:

> The open-source product makes PRA's value measurable. Commercial services begin when a customer wants deeper workload qualification, production implementation, operational responsibility, enterprise controls, or ongoing support.

Do not cripple open-source evaluation to manufacture consulting demand.

## Current website assessment

The homepage already has a good technical/product narrative and a useful “Benchmark your workload” CTA. Keep it.

The current commercial section is too generic:
- Optimization Assessment
- Production Integration
- Enterprise & Engine Support

It does not explain what the customer receives, how paid evaluation differs from `pra evaluate`, indicative engagement size, implementation duration, included support, Control Plane, or annual renewal.

The Enterprise page has a good seven-step methodology, but it reads more like research methodology than a commercial offer.

Keep Design Partners separate from standard paid engagements.

## Commercial positioning

Do not sell access to PRA. PRA remains open source.

Do not sell a benchmark the customer could trivially run themselves.

Sell:
- customer-specific qualification;
- production implementation;
- validated deployment configuration;
- acceptance/regression suite;
- operational integration;
- ongoing compatibility/support responsibility;
- enterprise management/control.

Suggested positioning:

> PRA can make context and inference inefficiency visible through open-source tooling. eInnovator helps enterprises prove the opportunity against their real workload, implement the winning configuration in production, and keep it qualified as models, engines, hardware, and workloads evolve.

# Commercial packages

## 1. Comprehensive Evaluation

Public anchor:

> **Comprehensive Evaluation — starting at €5,000**

Typical range may be stated as approximately €5K–€20K, but avoid presenting it as a rigid rate card.

### Deliverables

- current architecture/context-flow review;
- representative customer workload definition;
- production-like traffic shape where practical;
- agreed quality/SLO/safety gates;
- Full Context baseline;
- Selected Context qualification;
- session-aware context reuse measurement;
- Native Memory qualification when relevant/supported;
- Native Serving qualification when relevant/supported;
- model/engine/hardware comparison where scoped;
- context waste/reuse analysis;
- capacity/economic analysis;
- recommended PRA mode/profile/storage/session policy;
- explicit fallback configuration;
- reproducible acceptance/regression suite;
- technical findings report;
- executive summary;
- production implementation plan.

The deliverable should answer:
- Does PRA help?
- How much?
- At what quality?
- Where does the gain come from?
- What should be deployed?
- What should not be deployed?
- What is the likely infrastructure impact?
- How is the result reproduced?

### Distinguish from self-service

Add a comparison:

| Self-service PRA | Comprehensive Evaluation |
|---|---|
| Standard CLI evaluation | Representative customer workload qualification |
| CLI recommendation | Expert architecture/policy analysis |
| Local metrics | Production-like traffic/SLO analysis |
| Standard profiles | Customer-specific calibration |
| Basic report | Acceptance suite + capacity/economic model + implementation plan |
| Customer owns interpretation | eInnovator owns the scoped recommendation |

Do not claim customers cannot do this themselves. The value is reduced specialist effort, broader systems expertise, and a jointly defined qualification artifact.

### Evaluation credit

State:

> Evaluation fees may be credited toward a qualifying Production Implementation started within an agreed period.

Do not hard-code a legal/commercial deadline unless policy is finalized.

## 2. Production Implementation

Public anchor:

> **Production Implementation — starting at €20,000**

Typical:
- 4–12 weeks;
- approximately €20K–€50K+ depending on scope.

Do not make €50K a ceiling.

### Assisted Implementation

Customer engineers perform much of the work.

eInnovator provides:
- architecture;
- integration guidance;
- PRA configuration;
- profile/storage/session policy;
- code review;
- qualification;
- observability;
- rollout review;
- acceptance testing.

Indicative internal range: €20K–€30K.

### Hands-on Production Implementation

eInnovator implements substantial portions of:
- agent/gateway integration;
- typed records;
- runtime deployment;
- engine integration;
- model/bundle setup;
- storage lifecycle;
- observability/dashboards;
- authentication/security integration where scoped;
- load testing;
- rollout;
- acceptance suite.

Indicative internal/public range: €30K–€50K+.

### Included support

State:

> Production Implementation includes 12 months of Standard Support for the qualified deployment.

Define Standard Support:
- business-hours support channel;
- supported-configuration guidance;
- PRA upgrade guidance;
- bug triage/fixes for supported PRA components;
- compatibility questions;
- periodic deployment/upgrade review.

Explicitly exclude unless separately contracted:
- 24×7 incident response;
- unlimited engineering;
- arbitrary new integrations;
- customer application development;
- new model/engine qualification on demand;
- emergency/weekend response.

## 3. Enterprise Control Plane

Position as optional.

Suggested heading:

> **Enterprise Control Plane — optional add-on**

Indicative initial enablement/integration: approximately +€10K–€30K when applicable.

Only advertise features that actually exist.

Potential long-term capabilities:
- fleet inventory;
- approved model/PRA bundle registry;
- profile/policy management;
- central observability;
- qualification history;
- deployment/version inventory;
- RBAC/SSO;
- audit;
- upgrade management;
- continuous optimization.

Inspect actual product state and label each as:
- Available;
- Early access;
- In development;
- Planned.

Do not market roadmap features as shipping.

Commercially, design this to evolve from one-time enablement toward:
`initial enablement + annual software/support subscription`.

If the Control Plane is not mature, use:
> Enterprise Control Plane capabilities are being developed with design partners. Contact eInnovator for current availability.

## 4. Annual Support & Qualification Renewal

Public anchor:

> **Enterprise Support — annual plans from €10,000**

Do not show €100K as an unexplained ceiling.

Explain conceptual tiers.

### Standard
Indicative €10K–€20K/year:
- business-hours support;
- supported releases;
- compatibility guidance;
- upgrade review;
- limited qualification refresh.

### Production
Indicative €25K–€50K/year:
- multiple models/engines/environments;
- faster response;
- regular qualification refresh;
- architecture guidance;
- prioritized fixes;
- named technical contact where appropriate.

### Enterprise / Critical
Indicative €50K–€100K+/year:
- multiple clusters/environments;
- critical workloads;
- tighter contractual response targets;
- named engineering ownership;
- upgrade qualification;
- escalation;
- optional 24×7 terms.

Always say final pricing depends on supported models, engines, environments, response requirements, qualification scope, and operational responsibility.

Do not publish SLA response times until eInnovator can reliably meet them.

# Homepage changes

Replace the generic commercial section with:

## From measurable opportunity to supported production

Intro:

> PRA is open source and self-service evaluation is free. eInnovator engagements begin when you want customer-specific qualification, production implementation, enterprise controls, or ongoing support.

Cards:

### Comprehensive Evaluation
`From €5K`
> Turn your workload into a reproducible technical and economic decision.

CTA: `Request an evaluation`

### Production Implementation
`From €20K · typically 4–12 weeks`
> Implement and qualify the winning PRA configuration in your environment. Includes 12 months Standard Support for the qualified deployment.

CTA: `Discuss implementation`

### Enterprise Control Plane
`Optional`
> Add centralized policy, qualification, fleet visibility, and enterprise controls as required.

Only mention available capabilities.

### Annual Support
`From €10K/year`
> Keep the deployment qualified as PRA, models, engines, hardware, and workloads evolve.

CTA: `Explore enterprise support`

# Enterprise page

Retain the current risk/control section:
- ordinary-text fallback;
- no retraining requirement;
- no raw K/V on agent wire;
- capability negotiation;
- tenant/session identity;
- authorization before materialization.

Reorganize into:
1. Why enterprises engage.
2. Commercial packages.
3. Comprehensive Evaluation.
4. Production Implementation.
5. Enterprise Control Plane.
6. Annual Support.
7. Engine partnerships.
8. FAQ/procurement.
9. CTA.

Move the existing seven-step assessment methodology inside Comprehensive Evaluation.

## Make the evaluation tangible

Add a visual:

```text
Customer workload
    ↓
Quality + SLO gates
    ↓
Context/inference measurements
    ↓
Capacity/economic model
    ↓
Recommended deployment
    ↓
Acceptance/regression suite
    ↓
Implementation plan
```

Show a sample report structure:

```text
PRA Qualification Report
├── Executive summary
├── Workload and baseline
├── Quality gates
├── Context economy
├── Session reuse
├── Prefix/native reuse
├── Latency/throughput
├── Memory/capacity
├── Recommended configuration
├── Fallback
├── Limitations
└── Reproduction/acceptance suite
```

# Infrastructure economics

Move beyond token savings.

Explain that qualification can estimate:
- successful requests/sec;
- successful tasks/hour;
- required GPU/CPU capacity for target load;
- TTFT/SLO headroom;
- memory/HBM pressure;
- context-processing reduction.

Where infrastructure pricing is known, optionally estimate:
- cost per successful request/task;
- annualized infrastructure impact.

Never promise universal savings.

Use:

> The objective is not to maximize token reduction. It is to improve the measured quality-cost frontier of the customer's workload.

## ROI illustration

Add a clearly hypothetical example:

> If a workload costs €300K/year to serve, a validated 20% capacity reduction would represent approximately €60K/year of infrastructure value.

Mark this as illustration, not a PRA benchmark or guarantee.

# Lead qualification

Encourage small users to self-serve.

Suggested block:

### Start open source when
- experimenting;
- inference spend is small;
- one small model;
- no production SLO;
- standard engine integration is sufficient.

### Talk to eInnovator when
- context/inference spend is material;
- production latency/capacity is constrained;
- prompts/context are large or repeated;
- tool/document catalogs are large;
- multiple models/engines are involved;
- enterprise deployment/support requirements exist.

Do not require customers to disclose spend publicly.

# Design Partners

Keep separate from normal commercial pricing.

Add:

> Design partnerships are separate from standard commercial engagements and are selected based on technical fit and mutual research/product value.

Design partners may receive discounted/complementary work, early features, joint engine work, or research/case-study collaboration.

Do not imply every applicant receives free consulting.

# Engine Partnership / Native Integration

Keep this offer and make deliverables concrete:
- native-memory seam design;
- scheduler/cache integration;
- storage/prefetch;
- tenant/session isolation;
- OTel/Prometheus;
- matched benchmark suite;
- upstream patch/PR;
- compatibility qualification;
- ongoing regression support.

Pricing remains contact-based.

# Open source vs commercial table

Add:

| Capability | Open source | Commercial engagement |
|---|---|---|
| PRA runtime/gateway/agent | Yes | Yes |
| CLI evaluate/recommend/report | Yes | Yes |
| Public HF bundles | Yes | Yes |
| OTel/Prometheus/basic Grafana | Yes | Yes |
| Standard engine integrations | Yes | Yes |
| Customer-specific workload qualification | Self-service | eInnovator-led |
| Custom profile/policy calibration | Self-service | Included by scope |
| Production implementation | Customer-owned | Assisted/hands-on |
| Customer-specific acceptance suite | Basic tooling | Delivered |
| Capacity/economic model | Basic metrics | Customer-specific |
| SLA/support | Community | Annual plans |
| Enterprise Control Plane | As available | Optional add-on |

Do not remove useful OSS functionality to strengthen the paid column.

# CTA strategy

Use two lanes.

## Technical/self-service
- Try PRA.
- Benchmark your workload.
- View engine support.
- Browse PRA bundles.

## Commercial
- Request a Comprehensive Evaluation.
- Discuss Production Implementation.
- Explore Enterprise Support.
- Engine Partnership.

Avoid making generic `Contact Sales` the only route.

# Contact form

If feasible add:
- interest: Evaluation / Implementation / Support / Control Plane / Engine Partnership / Design Partnership / Other;
- current model(s);
- inference engine(s);
- deployment environment;
- approximate inference/context spend (optional);
- primary problem: cost / TTFT / throughput / memory / long context / tool scale / session reuse / other;
- desired timeline.

Allow “Prefer not to say”.

# Pricing presentation

Prefer public starting anchors:

```text
Comprehensive Evaluation
Starting at €5,000

Production Implementation
Starting at €20,000
Typically 4–12 weeks

Enterprise Control Plane
Optional add-on

Annual Enterprise Support
Starting at €10,000/year
```

Detailed ranges may appear in Enterprise FAQ:
- Evaluation commonly €5K–€20K.
- Implementation commonly €20K–€50K+.
- Control Plane enablement commonly +€10K–€30K when applicable.
- Support €10K–€100K+/year depending on scope/SLA.

State that these are indicative, not contractual quotes.

# Why annual support exists

Explain:

```text
models change
engine versions change
CUDA/Metal/OpenVINO stacks change
PRA changes
workloads drift
routing/profile economics change
```

Suggested copy:

> A configuration qualified today can change as the model, engine, hardware, PRA runtime, or workload changes. Enterprise Support keeps the supported deployment within a tested compatibility and performance envelope.

# Evidence discipline

Preserve current website discipline.

Never promise:
- PRA saves 30%;
- PRA halves GPU cost;
- Native Memory is faster;

without scoped evidence.

Commercial evaluation promises a process:
`baseline → agreed gates → measurement → recommendation`.

A negative result is a valid deliverable.

# Current credibility signals

Use current proof points sparingly and link to detailed evidence pages:
- 6,258/6,258 frozen-selection parity across the common engine campaign;
- session-aware Selected Context live engine evidence;
- lossless WARM lifecycle/restart recovery;
- multiple engine integrations;
- published PRA Hugging Face bundles;
- OTel/Prometheus/Grafana observability;
- engine-specific negative results and recommendations.

Do not overload the commercial page with research tables.

# SEO / metadata

Update Enterprise page metadata around:
- LLM inference optimization services;
- AI infrastructure optimization;
- long-context optimization;
- vLLM/SGLang/TensorRT/MLX integration;
- enterprise PRA support.

Keep wording factual.

# Acceptance criteria

The update is done when:
1. Homepage commercial section reflects the new ladder.
2. Comprehensive Evaluation has concrete deliverables and starts at €5K.
3. Production Implementation starts at €20K and states typical 4–12 week scope.
4. Assisted vs hands-on implementation is explained.
5. 12 months Standard Support is clearly defined and bounded.
6. Enterprise Control Plane is optional and its maturity is honestly labeled.
7. Annual Support starts at €10K/year with understandable tiers.
8. Evaluation may be credited toward implementation.
9. Self-service vs paid evaluation is clearly differentiated.
10. Design Partners remain separate from standard commercial services.
11. Open-source vs commercial comparison exists.
12. CTA flow supports both self-service and commercial buyers.
13. Contact flow captures useful qualification information without requiring sensitive spend.
14. No unscoped performance/cost guarantee is introduced.
15. Current technical evidence links remain accurate.
16. Offline/static build and all internal links pass.
17. Mobile layout remains usable.

## Core commercial principle

> PRA should make inefficiency measurable for free. eInnovator monetizes specialist qualification, production implementation, enterprise operations, and ongoing responsibility for keeping the deployment inside a tested quality/performance envelope.
