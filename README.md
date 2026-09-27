# Creator Command Center

A content workflow engine for planning ideas, moving them through production, scheduling uploads and comparing performance across platforms.

I make gaming/creator content, so I wanted something closer to an actual publishing pipeline than a basic notes app.

## Current features

- idea → script → recorded → edited → scheduled → published workflow
- priority-based weekly planning
- scheduled publishing queue
- per-platform metrics
- engagement-rate calculation
- simple idea scoring based on hook, relevance, proof and effort

```js
import { createContent, scheduleContent, engagementRate } from './src/index.js';
```

The domain layer is intentionally platform-neutral. Twitch, TikTok, YouTube and Instagram integrations can sit on top without changing the core content model.

Requires Node 20+.
