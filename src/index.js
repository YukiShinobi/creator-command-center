export const CONTENT_STAGES = ['idea', 'script', 'recorded', 'edited', 'scheduled', 'published'];

export function createContent({ id, title, format = 'short', platforms = [], priority = 3 }) {
  if (!title) throw new Error('title is required');
  return {
    id,
    title,
    format,
    platforms,
    priority,
    stage: 'idea',
    scheduledFor: null,
    metrics: {},
    history: [{ stage: 'idea', at: new Date().toISOString() }]
  };
}

export function moveContent(item, stage, at = new Date().toISOString()) {
  if (!CONTENT_STAGES.includes(stage)) throw new Error(`Unknown content stage: ${stage}`);
  return { ...item, stage, history: [...item.history, { stage, at }] };
}

export function scheduleContent(item, when) {
  return { ...moveContent(item, 'scheduled'), scheduledFor: new Date(when).toISOString() };
}

export function publishingQueue(items, now = new Date()) {
  return items
    .filter(item => item.stage === 'scheduled' && item.scheduledFor)
    .sort((a, b) => new Date(a.scheduledFor) - new Date(b.scheduledFor))
    .map(item => ({ ...item, dueInMinutes: Math.round((new Date(item.scheduledFor) - now) / 60000) }));
}

export function recordMetrics(item, platform, metrics) {
  return {
    ...item,
    metrics: {
      ...item.metrics,
      [platform]: { ...(item.metrics[platform] ?? {}), ...metrics, capturedAt: new Date().toISOString() }
    }
  };
}

export function engagementRate({ likes = 0, comments = 0, shares = 0, views = 0 }) {
  if (!views) return 0;
  return Number((((likes + comments + shares) / views) * 100).toFixed(2));
}

export function ideaScore({ hook = 0, relevance = 0, proof = 0, effort = 5 }) {
  return Math.max(0, Math.min(100, Math.round(hook * 3.5 + relevance * 3 + proof * 2.5 + (10 - effort) * 1)));
}

export function weeklyPlan(items, maxPosts = 7) {
  return [...items]
    .filter(item => item.stage === 'idea')
    .sort((a, b) => b.priority - a.priority)
    .slice(0, maxPosts);
}
