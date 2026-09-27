import test from 'node:test';
import assert from 'node:assert/strict';
import { createContent, engagementRate, moveContent, scheduleContent, weeklyPlan } from '../src/index.js';

test('moves content through production stages', () => {
  let item = createContent({ id: '1', title: 'Rank push', priority: 5 });
  item = moveContent(item, 'script');
  item = scheduleContent(item, '2026-09-30T18:00:00Z');
  assert.equal(item.stage, 'scheduled');
});

test('calculates engagement rate', () => {
  assert.equal(engagementRate({ likes: 100, comments: 20, shares: 30, views: 1000 }), 15);
});

test('weekly plan favours higher priority ideas', () => {
  const items = [createContent({ id: 'a', title: 'A', priority: 1 }), createContent({ id: 'b', title: 'B', priority: 5 })];
  assert.equal(weeklyPlan(items, 1)[0].id, 'b');
});
