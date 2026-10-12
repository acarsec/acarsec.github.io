export const categoryIds = ['fundamentals', 'blue-team', 'offensive', 'dfir', 'malware', 'networking', 'programming', 'osint'] as const;
export const platformIds = ['tryhackme', 'letsdefend', 'cyberdefenders', 'htb', 'local'] as const;
export const contentTypes = ['note', 'writeup', 'research'] as const;
export const categories: Record<(typeof categoryIds)[number], string> = {
  fundamentals: 'Fundamentals', 'blue-team': 'Blue Team', offensive: 'Offensive Security', dfir: 'DFIR', malware: 'Malware', networking: 'Networking', programming: 'Programming', osint: 'OSINT',
};
export const platforms: Record<(typeof platformIds)[number], string> = {
  tryhackme: 'TryHackMe', letsdefend: 'LetsDefend', cyberdefenders: 'CyberDefenders', htb: 'Hack The Box', local: 'Local',
};
export const typeLabels = { note: 'Note', writeup: 'Write-up', research: 'Research', lab: 'Lab', project: 'Project' } as const;
export function tagSlug(tag: string): string {
  return tag.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ı/g, 'i').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
export function unicodeTagSlug(tag: string): string { return tag.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, ''); }
