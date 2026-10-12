import { publicContent, toRecord } from '../lib/content';
export async function GET() { const data = await publicContent(); return new Response(JSON.stringify([...data.publications, ...data.labs, ...data.projects].map(toRecord)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } }); }
