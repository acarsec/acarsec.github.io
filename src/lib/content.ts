import { getCollection, type CollectionEntry } from 'astro:content';
import { isPublic } from './policy';
import { readingTime } from './reading-time';
export type Entry = CollectionEntry<'publications'> | CollectionEntry<'labs'> | CollectionEntry<'projects'>;
export type IndexRecord = {
  id: string; title: string; description: string; url: string; type: string; publishedAt: string; categories: string[]; tags: string[]; tools: string[]; platform?: string; difficulty?: string; status?: string; durationMinutes?: number; minutes: number; relatedUrl?: string;
};
async function loadPublicContent() {
  const [publications, labs, projects] = await Promise.all([getCollection('publications'), getCollection('labs'), getCollection('projects')]);
  const sort = <T extends Entry>(entries: T[]) => entries.filter(entry => isPublic(entry.data)).sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt));
  return { publications: sort(publications), labs: sort(labs), projects: sort(projects) };
}
let cache: ReturnType<typeof loadPublicContent> | undefined;
export function publicContent() { return import.meta.env.DEV ? loadPublicContent() : cache ??= loadPublicContent(); }
export function toRecord(entry: Entry): IndexRecord {
  const data = entry.data;
  return {
    id: 'contentId' in data ? data.contentId : 'labId' in data ? data.labId : data.projectId,
    title: data.title, description: data.description, url: data.permalink, publishedAt: data.publishedAt,
    type: 'contentType' in data ? data.contentType : entry.collection === 'labs' ? 'lab' : 'project',
    categories: 'categories' in data ? data.categories : [], tags: data.tags, tools: data.tools,
    platform: 'platform' in data ? data.platform : undefined, difficulty: 'difficulty' in data ? data.difficulty : undefined,
    status: 'labStatus' in data ? data.labStatus : 'status' in data ? data.status : undefined,
    durationMinutes: 'durationMinutes' in data ? data.durationMinutes : undefined, minutes: readingTime(entry.body),
  };
}
