document.querySelectorAll('a[href^="http"], a[href^="file:"]').forEach((link) => {
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const osintSearch = document.querySelector('#osint-search');
const osintClear = document.querySelector('#osint-clear');
const osintExpand = document.querySelector('#osint-expand');
const osintCount = document.querySelector('#osint-count');
const osintEmpty = document.querySelector('#osint-empty');
const osintGroups = [...document.querySelectorAll('.alpha-group')];
const totalOsintLinks = document.querySelectorAll('.osint-row').length;

function filterOsintLibrary() {
  if (!osintSearch) return;
  const query = osintSearch.value.trim().toLocaleLowerCase();
  let totalVisible = 0;

  osintGroups.forEach((group) => {
    const rows = [...group.querySelectorAll('.osint-row')];
    let groupVisible = 0;

    rows.forEach((row) => {
      const match = !query || row.dataset.search.includes(query);
      row.hidden = !match;
      if (match) groupVisible += 1;
    });

    group.hidden = groupVisible === 0;
    const badge = group.querySelector('.group-count');
    if (badge) badge.textContent = `${groupVisible} ${groupVisible === 1 ? 'link' : 'links'}`;
    if (query && groupVisible > 0) group.open = true;
    totalVisible += groupVisible;
  });

  if (osintCount) osintCount.textContent = `${totalVisible} of ${totalOsintLinks} links`;
  if (osintEmpty) osintEmpty.hidden = totalVisible !== 0;
}

osintSearch?.addEventListener('input', filterOsintLibrary);
osintClear?.addEventListener('click', () => {
  osintSearch.value = '';
  osintGroups.forEach((group, index) => {
    group.hidden = false;
    group.open = index === 0;
  });
  filterOsintLibrary();
  osintSearch.focus();
});

osintExpand?.addEventListener('click', () => {
  const shouldOpen = !osintGroups.filter((group) => !group.hidden).every((group) => group.open);
  osintGroups.filter((group) => !group.hidden).forEach((group) => { group.open = shouldOpen; });
  osintExpand.textContent = shouldOpen ? 'Collapse all' : 'Expand all';
  osintExpand.setAttribute('aria-pressed', String(shouldOpen));
});
