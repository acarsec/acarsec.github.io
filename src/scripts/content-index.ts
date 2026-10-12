import { readState, filterRecords, type FilterState } from '../lib/filter';
import type { IndexRecord } from '../lib/content';
document.querySelectorAll<HTMLElement>('.content-index').forEach(root => {
  const form = root.querySelector<HTMLFormElement>('form')!;
  const records: IndexRecord[] = JSON.parse(root.querySelector('.index-data')!.textContent || '[]');
  const cards = Array.from(root.querySelectorAll<HTMLElement>('.content-card'));
  const count = root.querySelector<HTMLElement>('.result-count')!;
  const empty = root.querySelector<HTMLElement>('.empty-state')!;
  const pagination = root.querySelector<HTMLElement>('.pagination')!;
  const prev = pagination.querySelector<HTMLButtonElement>('[data-prev]')!, next = pagination.querySelector<HTMLButtonElement>('[data-next]')!;
  let state = readState(new URLSearchParams(location.search));
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null;
  function normalize() { form.querySelectorAll<HTMLSelectElement>('select').forEach(select => { const key = select.name as keyof FilterState; if (!Array.from(select.options).some(option => option.value === String(state[key]))) (state as unknown as Record<string, unknown>)[key] = key === 'sort' ? 'newest' : ''; }); }
  function syncForm() { Object.entries(state).forEach(([key, value]) => { const input = field(key); if(input) input.value = String(value); }); }
  function urlState() { const params = new URLSearchParams(); Object.entries(state).forEach(([key, value]) => { if(value && !(key === 'page' && value === 1) && !(key === 'sort' && value === 'newest')) params.set(key, String(value)); }); return location.pathname + (params.size ? '?' + params.toString() : '') + location.hash; }
  function render(push = false) {
    normalize(); const matches = filterRecords(records, state), pages = Math.max(1, Math.ceil(matches.length / 6)); state.page = Math.min(state.page, pages);
    const visible = matches.slice((state.page - 1) * 6, state.page * 6); const ids = new Set(visible.map(record => record.id));
    cards.forEach(card => { card.hidden = !ids.has(card.dataset.recordId!); });
    const grid = root.querySelector('.content-grid')!; visible.forEach(record => { const card = cards.find(card => card.dataset.recordId === record.id); if (card) grid.appendChild(card); });
    count.textContent = `${matches.length} ${matches.length === 1 ? 'entry' : 'entries'}`; empty.hidden = matches.length > 0; pagination.hidden = pages <= 1;
    pagination.querySelector('[data-page-info]')!.textContent = `Page ${state.page} of ${pages}`; prev.disabled = state.page === 1; next.disabled = state.page === pages;
    syncForm(); if(push) history.pushState(null, '', urlState());
  }
  form.hidden = false;
  function changed() { const params = new URLSearchParams(); new FormData(form).forEach((value, key) => params.set(key, String(value))); state = readState(params); render(true); }
  form.addEventListener('submit', event => event.preventDefault()); form.addEventListener('input', event => { if ((event.target as Element).matches('input')) changed(); }); form.addEventListener('change', event => { if ((event.target as Element).matches('select')) changed(); });
  form.addEventListener('reset', event => { event.preventDefault(); state = readState(new URLSearchParams()); render(true); });
  prev.addEventListener('click', () => { state.page--; render(true); }); next.addEventListener('click', () => { state.page++; render(true); });
  window.addEventListener('popstate', () => { state = readState(new URLSearchParams(location.search)); render(); }); render();
});
