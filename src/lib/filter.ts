import type { IndexRecord } from './content';
export type FilterState = { q: string; type: string; category: string; platform: string; tag: string; difficulty: string; status: string; sort: string; page: number };
export function readState(params: URLSearchParams): FilterState {
  const page = Number(params.get('page'));
  return { q: params.get('q') || '', type: params.get('type') || '', category: params.get('category') || '', platform: params.get('platform') || '', tag: params.get('tag') || '', difficulty: params.get('difficulty') || '', status: params.get('status') || '', sort: params.get('sort') === 'oldest' ? 'oldest' : 'newest', page: Number.isInteger(page) && page > 0 ? page : 1 };
}
export function filterRecords(records: IndexRecord[], state: FilterState): IndexRecord[] {
  const query = state.q.toLocaleLowerCase().trim();
  return records.filter(record => (!query || [record.title, record.description, ...record.tags, ...record.tools].join(' ').toLocaleLowerCase().includes(query)) && (!state.type || record.type === state.type) && (!state.category || record.categories.includes(state.category)) && (!state.platform || record.platform === state.platform) && (!state.tag || record.tags.includes(state.tag)) && (!state.difficulty || record.difficulty === state.difficulty) && (!state.status || record.status === state.status)).sort((a, b) => (state.sort === 'oldest' ? 1 : -1) * a.publishedAt.localeCompare(b.publishedAt));
}
