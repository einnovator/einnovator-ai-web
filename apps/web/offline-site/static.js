(() => {
  const explorer = document.querySelector(".benchmark-explorer");
  if (!explorer) return;

  const engine = explorer.querySelector('[data-event="benchmark-filter-engine"]');
  const evidence = explorer.querySelector('[data-event="benchmark-filter-evidence"]');
  const rows = Array.from(explorer.querySelectorAll("tbody tr[data-engine]"));
  const count = explorer.querySelector('[aria-live="polite"]');

  const applyFilters = () => {
    let visible = 0;
    for (const row of rows) {
      const showEngine = engine.value === "All engines" || row.dataset.engine === engine.value;
      const showEvidence = evidence.value === "All evidence" || row.dataset.evidence === evidence.value;
      row.hidden = !(showEngine && showEvidence);
      if (!row.hidden) visible += 1;
    }
    if (count) count.textContent = `${visible} qualification ${visible === 1 ? "record" : "records"}`;
  };

  engine?.addEventListener("change", applyFilters);
  evidence?.addEventListener("change", applyFilters);
})();
