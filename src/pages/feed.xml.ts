import rss from '@astrojs/rss';
import { publicContent } from '../lib/content';
import { site } from '../data/site';
export async function GET() { const { publications } = await publicContent(); return rss({ title: `${site.name} — Security Notebook`, description: site.description, site: site.url, items: publications.map(({ data }) => ({ title: data.title, description: data.description, pubDate: new Date(`${data.publishedAt}T12:00:00Z`), link: data.permalink, categories: data.categories })) }); }
