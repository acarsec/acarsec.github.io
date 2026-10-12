export const reservedPaths = ['/', '/blog/', '/notes/', '/writeups/', '/research/', '/labs/', '/projects/', '/about/', '/categories/', '/tags/', '/404.html', '/feed.xml', '/search.json', '/robots.txt', '/sitemap-index.xml', '/sitemap-0.xml'];
export function validPermalink(path: string): boolean {
  if (!path.startsWith('/') || !path.endsWith('/') || path.startsWith('//') || /[?#\\%\s]/.test(path)) return false;
  return !path.split('/').some(segment => segment === '.' || segment === '..' || (segment && !/^[\p{L}\p{N}._~-]+$/u.test(segment))) && !path.includes('//');
}
export function validatePermalink(path: string, archivePaths: string[] = []): void {
  if (!validPermalink(path)) throw new Error(`Invalid permalink: ${path}`);
  if ([...reservedPaths, ...archivePaths].includes(path) || reservedPaths.filter(route => route.includes('.')).some(route => path.startsWith(route + '/')) || /^\/(assets|_astro|docs)\//.test(path)) throw new Error(`Reserved or archive path: ${path}`);
}
export function safeJson(value: unknown): string { return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026'); }
