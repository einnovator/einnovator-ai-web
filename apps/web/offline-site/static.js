(() => {
  const explorer = document.querySelector(".benchmark-explorer");
  if (!explorer) return;

  const selects = Array.from(explorer.querySelectorAll("select[data-filter]"));
  const tabs = Array.from(explorer.querySelectorAll("button[data-stage-filter]"));
  const rows = Array.from(explorer.querySelectorAll("tbody tr[data-stage]"));
  const count = explorer.querySelector('[aria-live="polite"]');
  let stage = "All stages";

  const applyFilters = () => {
    let visible = 0;
    for (const row of rows) {
      const stageMatches = stage === "All stages" || row.dataset.stage === stage;
      const fieldsMatch = selects.every((select) => {
        const key = select.dataset.filter;
        return select.value.startsWith("All ") || row.dataset[key] === select.value;
      });
      row.hidden = !(stageMatches && fieldsMatch);
      if (!row.hidden) visible += 1;
    }
    if (count) count.textContent = `${visible} evidence ${visible === 1 ? "record" : "records"}`;
  };

  for (const select of selects) select.addEventListener("change", applyFilters);
  for (const tab of tabs) tab.addEventListener("click", () => {
    stage = tab.dataset.stageFilter;
    for (const item of tabs) item.setAttribute("aria-selected", String(item === tab));
    applyFilters();
  });
})();
