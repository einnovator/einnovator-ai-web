"use client";

import { useMemo, useState } from "react";
import type { Benchmark } from "@/lib/content";

export function BenchmarkExplorer({ rows }: { rows: Benchmark[] }) {
  const [engine, setEngine] = useState("All engines");
  const [evidence, setEvidence] = useState("All evidence");
  const engines = ["All engines", ...Array.from(new Set(rows.map((row) => row.engine)))];
  const tiers = ["All evidence", ...Array.from(new Set(rows.map((row) => row.evidence)))];
  const filtered = useMemo(
    () => rows.filter((row) => (engine === "All engines" || row.engine === engine) && (evidence === "All evidence" || row.evidence === evidence)),
    [rows, engine, evidence],
  );

  return (
    <div className="benchmark-explorer">
      <div className="filters" aria-label="Benchmark filters">
        <label>Engine<select value={engine} onChange={(event) => setEngine(event.target.value)} data-event="benchmark-filter-engine">{engines.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Evidence<select value={evidence} onChange={(event) => setEvidence(event.target.value)} data-event="benchmark-filter-evidence">{tiers.map((item) => <option key={item}>{item}</option>)}</select></label>
        <p aria-live="polite">{filtered.length} qualification {filtered.length === 1 ? "record" : "records"}</p>
      </div>
      <div className="table-scroll" role="region" aria-label="Scrollable PRA benchmark table">
        <table>
          <thead><tr><th>Model</th><th>Engine</th><th>Workload</th><th>Profile</th><th>Quality</th><th>Quality detail</th><th>Visible context</th><th>Active K/V</th><th>TTFT</th><th>Peak memory</th><th>Status</th><th>Evidence</th></tr></thead>
          <tbody>{filtered.map((row) => <tr key={row.id} data-engine={row.engine} data-evidence={row.evidence}><td>{row.model}</td><td>{row.engine}</td><td>{row.workload}</td><td>{row.profile}</td><td>{row.quality}</td><td>{row.qualityDelta}</td><td>{row.visibleReduction}</td><td>{row.activeKvReduction}</td><td>{row.ttft}</td><td>{row.memory}</td><td>{row.status}</td><td>{row.evidence}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="table-note">Missing measurements are shown explicitly. “Not measured” never means zero.</p>
    </div>
  );
}
