"use client";

import { useState } from "react";
import type { Benchmark } from "@/lib/content";

const stages = ["All stages", "Context optimization", "Native-memory reuse", "Serving optimization"];

export function BenchmarkExplorer({ rows }: { rows: Benchmark[] }) {
  const [stage, setStage] = useState("All stages");
  const [filters, setFilters] = useState({ engine: "All engines", model: "All models", hardware: "All hardware", workload: "All workloads", evidence: "All evidence", metric: "All metrics" });
  const options = {
    engine: ["All engines", ...new Set(rows.map((row) => row.engine))],
    model: ["All models", ...new Set(rows.map((row) => row.model))],
    hardware: ["All hardware", ...new Set(rows.map((row) => row.hardware))],
    workload: ["All workloads", ...new Set(rows.map((row) => row.workload))],
    evidence: ["All evidence", ...new Set(rows.map((row) => row.evidence))],
    metric: ["All metrics", ...new Set(rows.map((row) => row.metric))],
  };
  const filtered = rows.filter((row) =>
    (stage === "All stages" || row.stage === stage) &&
    (filters.engine === "All engines" || row.engine === filters.engine) &&
    (filters.model === "All models" || row.model === filters.model) &&
    (filters.hardware === "All hardware" || row.hardware === filters.hardware) &&
    (filters.workload === "All workloads" || row.workload === filters.workload) &&
    (filters.evidence === "All evidence" || row.evidence === filters.evidence) &&
    (filters.metric === "All metrics" || row.metric === filters.metric),
  );

  function updateFilter(key: keyof typeof filters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return <div className="benchmark-explorer">
    <div className="benchmark-tabs" role="tablist" aria-label="Benchmark comparison stage">{stages.map((item) => <button key={item} type="button" role="tab" aria-selected={stage === item} data-stage-filter={item} onClick={() => setStage(item)}>{item}</button>)}</div>
    <div className="filters benchmark-filters" aria-label="Benchmark filters">
      {(Object.keys(options) as Array<keyof typeof options>).map((key) => <label key={key}>{key[0].toUpperCase() + key.slice(1)}<select value={filters[key]} onChange={(event) => updateFilter(key, event.target.value)} data-filter={key}>{options[key].map((item) => <option key={item}>{item}</option>)}</select></label>)}
      <p aria-live="polite">{filtered.length} evidence {filtered.length === 1 ? "record" : "records"}</p>
    </div>
    <div className="table-scroll" role="region" aria-label="Scrollable PRA evidence table"><table className="benchmark-table"><thead><tr><th>Stage</th><th>Metric</th><th>Result</th><th>Comparison</th><th>Quality</th><th>Model</th><th>Engine</th><th>Hardware</th><th>Workload</th><th>Status</th><th>Evidence</th><th>Provenance</th></tr></thead><tbody>{filtered.map((row) => <tr key={row.id} data-stage={row.stage} data-engine={row.engine} data-model={row.model} data-hardware={row.hardware} data-workload={row.workload} data-evidence={row.evidence} data-metric={row.metric}><td>{row.stage}</td><td>{row.metric}</td><td><strong>{row.value}</strong></td><td>{row.comparison}</td><td>{row.quality}</td><td>{row.model}</td><td>{row.engine}<small>{row.engineVersion}</small></td><td>{row.hardware}</td><td>{row.workload}</td><td>{row.status}</td><td>{row.evidence}</td><td><span>{row.provenance}</span><small>{row.date}</small><a href={row.source}>Source</a><a href={row.methodology}>Method</a></td></tr>)}</tbody></table></div>
    <p className="table-note">Missing measurements are explicit. “Not measured” never means zero, and a mechanism result never implies production serving benefit.</p>
  </div>;
}
