# AGENTS.md Add-on — eInnovator Website: PRA Engine Integration Pages

Use this as an add-on to `AGENTS_einnovator_commercial_website.md`.

## Goal

Make engine/runtime support a first-class part of the PRA product website. Create:

1. one PRA integrations/engines index page;
2. one dedicated page per engine;
3. a shared data model/template so future engines require mostly structured content rather than bespoke UI.

Initial engines:

- Hugging Face / Transformers
- vLLM
- SGLang
- MLX / MLX-LM
- OpenVINO GenAI / OVMS
- NVIDIA TensorRT-LLM
- AirLLM

Prefer the website term **engine integration** or **inference runtime**, not “provider,” because provider can mean a cloud/API vendor.

## Routes

Canonical index:

`/products/pra/integrations`

Individual routes:

- `/products/pra/integrations/hugging-face`
- `/products/pra/integrations/vllm`
- `/products/pra/integrations/sglang`
- `/products/pra/integrations/mlx`
- `/products/pra/integrations/openvino`
- `/products/pra/integrations/tensorrt-llm`
- `/products/pra/integrations/airllm`

Do not expose paper numbering in commercial URLs.

## Data-driven engine registry

Do not hardcode independent cards/pages. Create structured metadata sourced from the PRA compatibility/product registry where possible.

Example fields:

```yaml
id: vllm
name: vLLM
slug: vllm
category: production-serving
status: validated
pra_level:
  validated: E2
  observed: E2
platforms:
  - NVIDIA CUDA
deployment_modes:
  - gateway
  - native
engine_versions: []
pra_versions: []
model_families: []
docs_url: ...
upstream_url: ...
```

Never guess versions, supported models, or integration levels.

## Shared status vocabulary

Use:

- Reference
- Validated
- Experimental
- In progress
- Blocked
- Community

Show PRA integration depth separately:

- E0 — selected-text compatibility
- E1 — logical PRA-aware integration
- E2 — native detached PRA memory
- E3 — scheduler-owned PRA lifecycle

Where observed and validated levels differ, show both. Never promote an observed mechanism into a validated deployment claim.

# Engine index page

The index page should answer:

> Which inference engine should I use with PRA?

Suggested grouping:

### Production open-model serving
- vLLM
- TensorRT-LLM
- SGLang

### Local / developer inference
- MLX
- Hugging Face

### Intel / enterprise / edge
- OpenVINO

### Extreme low-VRAM / research
- AirLLM

Categories may overlap.

Suggested intro:

> PRA works at multiple integration depths, from selected-text compatibility with existing servers to native query-addressed K/V and scheduler-aware resource management. The best mode depends on your model, engine, hardware, and workload.

Link to an E0–E3 explanation and benchmark methodology.

## Engine summary cards

Each card includes:

- engine name;
- one-sentence use case;
- primary hardware/platform;
- PRA status;
- highest validated level;
- one or two headline capabilities;
- link to individual page.

Do not add numerical benchmark claims unless generated from measured registry data.

## Comparison table

Create a responsive table:

| Engine | Best for | Hardware | Gateway/E0 | Native/E2 | Scheduler/E3 | Prefix cache | Persistent PRA | Status |
|---|---|---|---|---|---|---|---|---|

Optional desktop columns:

- continuous batching;
- distributed KV;
- profile support.

Engine names link to their pages.

Missing values must be “Not measured,” “Not available,” or “In progress,” not zero.

## Short choose-an-engine guidance

Use measured, non-exclusive wording:

- **vLLM:** broad open-source production serving on NVIDIA GPUs.
- **TensorRT-LLM:** NVIDIA-centric deployments prioritizing production inference optimization.
- **SGLang:** advanced serving using RadixAttention, hierarchical/distributed cache, and research-oriented performance features.
- **MLX:** Apple Silicon, local AI, development, and unified-memory deployments.
- **OpenVINO:** Intel CPU/GPU/NPU, enterprise, edge, Windows, and AI-PC deployments.
- **Hugging Face:** semantic reference runtime, research, model compatibility, and embedded Python integration.
- **AirLLM:** experimental inference where model weights exceed accelerator memory and weight/layer streaming is required.

# Shared individual-engine page template

Every engine page should follow approximately:

1. Hero.
2. Who uses this engine / typical use cases.
3. Why PRA helps this engine.
4. Integration status.
5. Deployment modes.
6. Requirements and tested versions.
7. Architecture / how it works.
8. Benchmarks and metrics.
9. Getting started.
10. Limitations/current gates.
11. Documentation/upstream/research links.
12. CTA.

## Hero

Example:

> PRA for vLLM

> Semantic context optimization for open-source production LLM serving.

Show only registry-supported badges such as:

`Validated · E2 native · CUDA · Open source`

## Who uses this engine?

Use these starting characterizations.

### vLLM
Community/use cases:
- open-source LLM serving;
- AI infrastructure teams;
- startups self-hosting open models;
- cloud inference;
- Kubernetes/Ray;
- agent platforms.

Typical need: high-throughput production serving for open models on NVIDIA infrastructure.

### TensorRT-LLM
- NVIDIA-centric production inference;
- performance engineering;
- large GPU fleets;
- H100/B-series deployments;
- multi-GPU inference.

Typical need: maximize serving performance on NVIDIA hardware.

### SGLang
- advanced inference teams;
- LLM systems researchers;
- frontier-model serving;
- distributed cache research;
- RadixAttention users.

Typical need: sophisticated serving with strong prefix reuse and advanced cache/scheduler mechanisms.

### MLX
- Apple Silicon developers;
- local AI;
- researchers;
- Mac workstation users;
- small teams.

Typical need: efficient local inference using Apple unified memory.

### OpenVINO
- Intel CPU deployments;
- Intel GPU/NPU;
- enterprise;
- edge;
- AI PC;
- Windows;
- industrial/OEM applications.

Typical need: deploy GenAI efficiently across Intel hardware.

### Hugging Face
- ML researchers;
- model developers;
- Python applications;
- rapid experimentation;
- custom model integration.

Typical need: model flexibility and transparent reference execution.

### AirLLM
- low-VRAM users;
- researchers;
- consumer GPU users;
- hobbyists;
- large-model feasibility experiments.

Typical need: run models whose weights exceed accelerator memory by streaming weights/layers.

# Engine-specific “How PRA helps”

Do not repeat generic copy.

### vLLM
Emphasize selected context, APC coexistence, native non-prefix K/V, shared immutable resources, LMCache/WARM direction, HBM and repeated-prefill reduction.

### TensorRT-LLM
Emphasize paged KV, prefix reuse, KV Cache Connector, in-flight batching, HBM, and disaggregated prefill/decode.

### SGLang
Emphasize Radix prefix identity vs semantic-resource identity, HiCache, scheduler prefetch, distributed/off-node resource movement.

### MLX
Emphasize unified memory, rotating/local KV, persistent semantic archive, segmented attention, quality-memory-latency profiles.

### OpenVINO
Emphasize selected context, continuous batching, prefix caching, Intel CPU/GPU/NPU, and device-memory pressure. Do not claim E2 unless validated.

### Hugging Face
Emphasize reference correctness, model/profile calibration, embedded PRA, native attention semantics, research/development.

### AirLLM
Emphasize weight streaming plus semantic-context streaming, low VRAM, layer-local PRA K/V, and disk/PCIe contention.

# Requirements and version support

Every page must have a generated compatibility panel with:

- PRA version;
- tested engine version(s);
- Python version where relevant;
- OS;
- hardware;
- driver/runtime;
- tested model families;
- known topology constraints.

Use **Tested versions**, not vague “latest supported.”

Create one canonical compatibility data source, preferably generated from the PRA qualification/product registry.

Suggested row schema:

```text
engine
engine_version
pra_version
model
hardware
integration_level
status
tested_at
evidence
```

The website must not manually duplicate these values.

# Deployment modes

Show applicable modes:

### Gateway / E0
Existing OpenAI-compatible application → PRA Gateway → engine.

### Logical / E1
Typed PRA resources reach a PRA-aware endpoint without detached native memory.

### Native / E2
Selected PRA memory is consumed directly by model attention.

### Scheduler-native / E3
The scheduler manages PRA placement/prefetch/reuse.

### Embedded
For HF/MLX/AirLLM where applicable.

Each mode gets one of:

- Available
- Experimental
- In progress
- Not applicable

## Gateway-first onboarding

For OpenAI-compatible engines emphasize:

> Start with E0 through the PRA Gateway. Move to native E2/E3 only if qualification shows additional value.

Show the progression:

```text
E0 gateway
   ↓ evaluate
E2 native if useful
   ↓
E3 scheduler integration if useful
```

This is a core PRA product principle.

# Architecture diagrams

Use a reusable diagram component customized by engine.

For example vLLM should show prefix/APC separately from PRA resources and paged KV.

SGLang should show Radix and HiCache.

AirLLM must show weight streaming separately from PRA context/KV streaming.

# Metrics section

Every engine page gets a structured benchmark area sourced from the product matrix.

Metric fields/placeholders:

- task quality;
- visible-context reduction;
- active PRA K/V;
- TTFT p50/p95/p99;
- ITL p50/p95/p99;
- requests/s;
- successful requests/s;
- peak device memory;
- shared bytes saved;
- H2D/D2H;
- cache hit rate;
- cost/successful task.

Not all engines will have all metrics.

Show actual states such as:

- Not measured yet
- Benchmark in progress
- Native E2 pending

Never use fake `XX%`, `TBD%`, or `0 ms`.

## Metrics presentation

Use at most 3–5 headline cards:

- Quality
- Context reduction
- TTFT
- Throughput
- Memory

Then a detailed qualification table.

Every number should expose or link to:

- model;
- hardware;
- workload;
- evidence tier.

Evidence labels include:

- Measured
- Controlled
- Natural workload
- Model-backed
- Candidate
- Not measured

## Quality-adjusted metrics

Where available show:

- Successful requests/s
- Successful tasks / accelerator-hour
- Cost / successful task

Always show the underlying quality metric nearby.

# Getting started

Most pages should be CLI-first.

Pattern:

1. Install PRA.
2. Check engine/runtime compatibility.
3. Start/configure the engine.
4. Start PRA gateway/runtime.
5. Run qualification/evaluation.
6. Point the application at PRA.
7. Optionally enable E2/E3 if validated.

Codex must inspect the **current PRA CLI** and use exact syntax from CLI help/tests. Do not copy hypothetical commands from planning documents.

Potential command families include `pra runtime`, `pra gateway`, `pra evaluate`, `pra profiles`, and `pra agent` only where actually implemented.

# Native onboarding

For E2-capable engines show:

- requirements;
- feature/profile setting;
- validation command;
- fallback behavior.

Make clear that native E2 is optional.

# Deployment recommendation box

Every page includes:

```text
Best validated PRA mode:
Use when:
Do not use when:
Main remaining gate:
```

Generate from qualification data where practical.

This is more useful than simply advertising the deepest implemented integration.

# Limitations

Be explicit. Examples may include:

- OpenVINO native E2 not validated;
- TensorRT-LLM connector/native work pending;
- AirLLM E2 research-only;
- SGLang off-node HiCache not measured;
- model topology constraints.

Do not hide these behind marketing language.

# Links

Every page links to:

- official upstream engine website/docs;
- official upstream GitHub;
- PRA integration docs;
- PRA GitHub;
- benchmark methodology;
- corresponding PRA systems paper.

Research links should use human-readable titles rather than paper numbers as primary labels.

# CTA

Primary:

`Try PRA with <engine>`

Secondary:

`View benchmarks`

Commercial:

`Optimize your <engine> deployment`

Commercial CTA should lead to PRA Optimization Assessment/contact.

Optionally add:

> Running this engine in production? eInnovator can benchmark your existing workload, calibrate PRA profiles, and measure quality-adjusted infrastructure savings.

Keep product adoption primary; do not make every page consulting-first.

# Index filters

If useful, support lightweight filters:

Hardware:
- NVIDIA
- Apple
- Intel
- CPU
- Low VRAM

Use case:
- Production serving
- Local AI
- Research
- Edge
- Large-model offload

PRA level:
- E0
- E1
- E2
- E3

# Product matrix integration

There must be one truth source:

```text
PRA experiments
   ↓
qualification/product registry
   ↓
website export
   ↓
engine index + individual pages
```

Do not maintain a second manual benchmark database in the website.

# Tested configurations/history

Optionally show recent tested configurations:

| PRA | Engine | Model | Hardware | Level | Date | Status |
|---|---|---|---|---|---|---|

This is preferable to vague compatibility claims.

# SEO

Each engine page should have targeted metadata such as:

- PRA vLLM integration
- vLLM context optimization
- PRA TensorRT-LLM
- TensorRT-LLM KV cache optimization
- PRA SGLang
- PRA MLX
- OpenVINO LLM context optimization
- AirLLM long-context inference

Keep visible prose natural.

# Reusable components

Create shared components such as:

```text
EngineHero
EngineStatus
EngineUseCases
PraBenefit
CompatibilityPanel
DeploymentModes
EngineArchitecture
MetricCards
QualificationTable
GettingStarted
DeploymentRecommendation
EngineLimitations
EngineLinks
```

Do not fork the whole page component per engine.

# Launch behavior with incomplete metrics

It is acceptable to launch pages before every native benchmark is complete.

A page with:

```text
E0 validated
E2 in progress
TTFT measured
HBM not measured
```

is better than hiding the integration.

The UI must make evidence status obvious.

# Engine index launch requirements

The `/products/pra/integrations` page must contain:

1. short explanation of PRA integration levels;
2. engine summary cards;
3. comparison table with links;
4. choose-an-engine guidance;
5. link to benchmark methodology;
6. link to product matrix;
7. CTA to try PRA;
8. CTA for optimization assessment.

# Individual page launch requirements

Each engine page must contain:

1. engine/community/use-case explanation;
2. PRA-specific value proposition;
3. current integration status;
4. deployment modes;
5. tested version requirements;
6. architecture explanation;
7. metrics area with honest placeholders;
8. CLI-first getting started;
9. limitations/current gates;
10. upstream/PRA/research links;
11. commercial CTA.

# Stop gate

This add-on is complete when:

- integration index exists;
- all initial engine pages exist;
- pages are registry/data driven;
- each page explains the engine's main community and use cases;
- each page explains engine-specific PRA value;
- E0/E1/E2/E3 status is evidence-driven;
- tested engine/PRA versions come from a canonical compatibility source;
- deployment modes are shown;
- metrics are generated from the product matrix or show explicit missing states;
- getting-started commands are verified against current CLI;
- engine index comparison table links to individual pages;
- upstream links use official sources;
- mobile/accessibility/build/link checks pass;
- future engines can be added mostly by adding registry/content data.

# Core principle

The engine pages should help a visitor answer three questions quickly:

1. Is this the right inference engine for my workload and hardware?
2. What does PRA add to this engine, and at what validated integration level?
3. What is the shortest safe path to try it?

The deepest PRA integration is not automatically the recommended one. The website should recommend E0, E1, E2, or E3 according to measured evidence.
