export function isPublic(data: { draft?: boolean; publishedAt: string }, today = new Date().toISOString().slice(0, 10)): boolean {
  return data.draft !== true && data.publishedAt <= today;
}
