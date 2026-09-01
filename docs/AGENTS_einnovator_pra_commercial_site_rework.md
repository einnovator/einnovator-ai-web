# AGENTS.md — eInnovator PRA Commercial Website Rework

## Goal

Make the eInnovator PRA product website credible to an enterprise prospect, inference-platform partner, and agent/application company while remaining technically conservative and explicit that qualification evolves.

Do not expose paper labels E0/E1/E2/E3 on public website pages.

Use product language:
- **PRA Context / Selected Context** — send less.
- **PRA Native Memory** — recompute less.
- **PRA Native Serving** — manage/move reusable model memory more efficiently.

## Buyer questions the site must answer

### Enterprise CTO/platform lead
- Can I use PRA without replacing my inference stack?
- What changes architecturally?
- What is the quality risk?
- What is the fallback?
- How are tenants/sessions isolated?
- Which engines are usable today?
- Which claims are measured?
- Can I benchmark before commitment?
- What does eInnovator sell?

### Inference-engine/platform partner
- What does PRA already deliver through Selected Context?
- What incremental benefit might Native Memory unlock?
- What engine seams are needed?
- Is native integration optional?
- How does PRA coexist with prefix/KV caches?
- How are gains attributed fairly?

### Agent/application company
- Can PRA stop replaying all documents/tool outputs/history each turn?
- Are exact source records retained?
- Are tasks/tools/results/sessions first-class?
- Can it sit in front of my existing OpenAI-compatible endpoint?

## Core positioning

Recommended homepage hierarchy:

### Headline
> Give AI models only the context they need.

### Subhead
> PRA is open-source context infrastructure for AI agents and long-running model applications. It keeps reusable documents, tools, results, and task state outside the active prompt, then selects what each request needs.

### Three-step value
- **Send less.** Reduce active prompt context with your existing inference engine.
- **Recompute less.** Reuse selected context as native model memory on qualified integrations.
- **Manage reuse.** Let supported serving engines prefetch, share, place, and evict reusable semantic memory.

### Adoption reassurance
> Start with your existing inference stack. Go deeper only when measurement shows it pays.

## Claim discipline

Lead with Selected Context, not universal native-K/V speedup.

Use:
> PRA can reduce the context processed by an existing model server while preserving or improving task quality on qualified workloads. The resulting latency and throughput benefit depends on model, engine, hardware, caching, and workload.

For Native Memory:
> Native Memory lets selected semantic resources be reused as model-native memory instead of visible prompt text. Its incremental benefit is engine- and workload-dependent, so it is qualified against Selected Context rather than assumed to be faster.

Never claim Native Memory is universally faster.

## Product sections/pages

### PRA overview
Explain:
- addressable logical context;
- typed records;
- selection;
- exact backing detail;
- tasks/sessions;
- profiles;
- gateway;
- runtime/SDK;
- engine integrations.

### PRA Context
Create/emphasize a compatibility-deployment page:

```text
Existing application
      |
PRA Gateway / SDK
      |
selected ordinary context
      |
existing model server
```

Benefits:
- no model retraining;
- no inference-engine patch required;
- lower visible input context;
- potentially lower prefill/KV pressure;
- less irrelevant context;
- immediate benchmarkable path.

### PRA Native Memory
Explain:
- reusable selected model memory;
- best fit: repeated/shared immutable resources and expensive prefill;
- qualification against Selected Context required.

### PRA Native Serving
Explain:
- scheduler-owned residency;
- prefetch;
- sharing;
- placement;
- eviction;
- transfer-aware serving.

Position as advanced/partner integration.

## Metrics model

Replace paper-level comparisons with:

### Context gain
`Full Context -> Selected Context`

Expose:
- input-token reduction;
- quality delta;
- TTFT;
- throughput;
- peak memory where measured.

### Native gain
`Selected Context -> Native Memory`

Expose:
- encoding/reuse cost;
- TTFT;
- throughput;
- native K/V bytes;
- transfer;
- reuse;
- memory.

### Serving gain
`Native Memory -> Native Serving`

Expose:
- prefetch;
- shared residency;
- transfer;
- tail latency;
- useful throughput.

Every metric block must include:
- model;
- engine;
- hardware;
- workload;
- evidence label;
- provenance/date;
- methodology link.

No naked metrics.

## Engine-page template

Every engine page:
1. What it is used for.
2. Recommended PRA deployment today.
3. What works without engine modification.
4. Native opportunities.
5. Current evidence.
6. Known limitations.
7. Deployment example.
8. Qualification status.
9. Partner/integration opportunity.
10. Technical docs/research links.

## Current engine narrative

### Hugging Face / Transformers
Reference mechanism and embedded research/runtime path.

### MLX
Selected Context + Native Memory validated. Current synchronized larger-model results show native execution near Selected Context parity at scale, not a dramatic universal speedup. Remove stale ~2x native-speed messaging.

### vLLM
Selected Context already has strong context-pressure evidence. Native CUDA correctness/concurrency/isolation is promising. Matched native-HOT/native-WARM economics remain under qualification.

### SGLang
Native mechanism/prefetch evidence exists. Scheduler/distributed/off-node economics remain the next qualification.

### OpenVINO
Recommended: Selected Context. Use latest controlled results; do not imply detached-native support.

### TensorRT-LLM
Recommended: Selected Context. Native economics ongoing.

### AirLLM
Recommended: Selected Context. Turn negative native evidence into credibility:
> Native Memory is technically feasible in the research integration, but current request-path overhead outweighs reuse benefit for the tested workload.

### llama.cpp
Recommended: Selected Context. Normal slot/prompt-state persistence is not PRA Native Memory. Native GGUF work is an active integration opportunity.

### Ollama
Recommended: Selected Context/Gateway. Deeper native behavior should be delegated only to a backend that explicitly advertises and validates it.

### FreeToken
Joint semantic-context/bandwidth-adaptive serving research. No live native performance claim yet.

## Benchmark page redesign

Replace paper-centric wording with:

> Selected Context is the compatibility baseline. Native Memory or Native Serving is recommended only when it improves the measured quality-cost frontier.

Sections/tabs:
- Context optimization;
- Native-memory reuse;
- Serving optimization.

Filters:
- engine;
- model;
- hardware;
- workload;
- evidence level;
- metric.

Statuses:
- measured;
- qualification in progress;
- blocked;
- not applicable.

## Enterprise credibility

### Deployment risk
Explain:
- fallback to ordinary selected text;
- no retraining requirement;
- no raw K/V on agent/gateway wire;
- capability negotiation;
- session/tenant identity;
- authorization remains independent of retrieval relevance.

### Evaluation engagement
Describe a paid/partner assessment:
1. baseline Full Context;
2. freeze quality/evidence;
3. measure Selected Context;
4. optionally qualify Native Memory;
5. optionally qualify Native Serving;
6. recommend mode/profile;
7. deliver reproducible report.

### Commercial offers
Present:
- Optimization Assessment;
- Production Integration;
- Enterprise Support;
- Engine Partnership / Native Integration.

## Active-research messaging

Use a standard callout:
> PRA is under active systems qualification. Every published metric is tied to a model, engine, hardware environment, workload, and evidence level. Recommendations are updated when new measurements change the frontier.

Make corrections and negative results a credibility feature.

## Homepage changes

Remove E0/E1/E2/E3 from:
- adoption strip;
- engine cards;
- product overview.

Commercial homepage should compress to:
- Send less;
- Recompute less;
- Manage reuse.

Typed transport details belong in technical docs.

## Link hygiene

Public/production HTML must never contain `file:///D:/...`.
Generate docs/paper links from configuration.
Add CI failure on `file:///` in production output.

## Source of truth

Website engine status/metrics must be generated or checked against Paper 4.5 product matrix/qualification artifacts.

Distinguish:
- compatibility available;
- native mechanism validated;
- recommended today;
- qualification in progress;
- blocked;
- not measured.

## Acceptance tests

- no public page contains E0/E1/E2/E3;
- no `file:///`;
- metric claims carry evidence/provenance;
- MLX stale speed claim removed;
- AirLLM recommends Selected Context;
- OpenVINO uses updated controlled results;
- vLLM native economics marked pending;
- llama.cpp slot state not called Native Memory;
- common engine template;
- internal links/mobile/offline build pass.

## Definition of done

A sophisticated prospect should answer within five minutes:
- What is PRA?
- Can I try it without changing my engine?
- What can it save?
- What quality risk exists?
- What is Selected Context vs Native Memory?
- What is recommended for my engine?
- Which claims are measured vs ongoing?
- How do I benchmark my workload?
- What can eInnovator do commercially?
