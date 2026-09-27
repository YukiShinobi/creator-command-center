<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=200&text=CREATOR%20COMMAND%20CENTER&fontAlignY=38&desc=IDEAS%20%E2%80%A2%20PIPELINE%20%E2%80%A2%20PERFORMANCE&descAlignY=58&color=0:050505,55:202020,100:5a1616&fontColor=f5f5f5&descColor=d4d4d4" width="100%" />

![Creator](https://img.shields.io/badge/focus-content%20workflow-111111?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-20%2B-2b2b2b?style=for-the-badge&logo=nodedotjs)
![Tests](https://img.shields.io/badge/tests-node:test-7a1f1f?style=for-the-badge)

**A content workflow engine built around how I actually plan gaming/creator output.**

</div>

---

## Workflow

```txt
idea
 ↓
script
 ↓
recorded
 ↓
edited
 ↓
scheduled
 ↓
published
```

## Current features

- content lifecycle state transitions
- priority-based weekly planning
- scheduled publishing queue
- per-platform metrics
- engagement-rate calculation
- idea scoring using hook, relevance, proof and effort
- automated tests

## Why I built it

I wanted something closer to an actual publishing pipeline than a notes app. The domain model stays platform-neutral so Twitch, TikTok, YouTube and Instagram integrations can sit on top later.

## Use

```js
import { createContent, scheduleContent, engagementRate } from './src/index.js';
```

```bash
npm test
```

## Next

`content calendar` · `platform adapters` · `thumbnail/asset tracking` · `analytics imports` · `repeatable series templates`

---

<div align="center"><sub>YukiShinobi // ideas are cheap; the pipeline is what gets them published.</sub></div>
