export function readingTime(body = ''): number { return Math.max(1, Math.ceil(body.trim().split(/\s+/u).length / 200)); }
export function formatDate(date: string, lang: 'en' | 'tr' = 'en'): string {
  return new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}
