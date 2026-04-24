# Service areas using travel distance

Property: Rover
Description: Increasing bookings by 4% through service area optimization.
Timeline: 2024 to 2025

<aside>
⚡

**Increasing bookings by 4% through service area optimization.**

</aside>

## Context and problem

This work started as a Maker Days hackathon project: a small team explored whether we could move beyond Rover’s simplistic “as‑the‑crow‑flies” service radius into something that reflected how sitters actually travel. That prototype became the foundation for the eventual product.

![image.png](Service%20areas%20using%20travel%20distance/image.png)

On Rover, traveling services (dog walking, drop‑ins, house sitting) mean the sitter goes to the owner’s home. Sitters historically set a simple circular radius around a single point, which was easy to build and explain but ignored real geography and travel patterns. They repeatedly told us, “I’m getting requests that are technically ‘within my radius’ but practically impossible or financially unreasonable,” and owners felt it too — search showed sitters as “available”, only for them to decline later because the trip was too long or awkward. Some sitters wanted to draw custom shapes or exclude neighborhoods, but that risked over‑concentrating supply and reinforcing bias against certain areas.

## Goals and success metrics

Our goal was to replace the straight‑line radius with a travel‑based model that:

- Let sitters define service areas that reflect how they actually travel, including different areas per traveling service (e.g:. wider for house sitting than for walks).
- Improved matching quality and bookings without hurting marketplace health.
- Held up on core marketplace metrics: new owner conversion (from search to booking), revenue per new searcher, owner–sitter distance, sitter adoption, and “outside service area” friction/feedback.

![image.png](Service%20areas%20using%20travel%20distance/image%201.png)

## Role and team

I was the lead product designer for this project, responsible for the travel‑distance service area experience.

I partnered with product, data science, and engineering to shape the experience, constraints, and experiment design. I led exploratory usability research on the travel‑distance proof‑of‑concept, feeding findings back into the spec. I also worked closely with internal comms and CX to align messaging and help docs for sitters and support teams during rollout.

## **Approach**

We took a staged, learning-first approach, but kept it simple: understand how sitters think about distance, design around that, then scale safely.

### **Understand what “distance” means to sitters**

![image.png](Service%20areas%20using%20travel%20distance/image%202.png)

We started with a working prototype that translated each sitter’s circular radius into a travel‑distance polygon using Mapbox’s isochrone API — drawing areas based on real roads and barriers instead of a perfect circle. In moderated sessions, sitters reacted to seeing their areas redrawn, adjusted distance vs. time and travel mode, and talked through how far they’d really go for different services (e.g:. “I’ll drive 40 minutes for house sitting, but not for a quick walk”).

Three design anchors came out of this: sitters think in both miles and minutes; irregular, road‑based shapes feel more intuitive than circles; and they want different areas per traveling service, not one blunt radius.

![image.png](Service%20areas%20using%20travel%20distance/image%203.png)

### **Design the new model around those anchors**

From there, we defined a single, coherent model for all traveling services.

Sitters can now define service areas by either distance (1–100 km/miles) or estimated travel time (1–60 minutes), with free‑text input and support for walking, cycling, or driving. House sitting, drop‑ins, and walks each get their own service area instead of sharing one radius.

Behind the scenes, we generate realistic polygons based on travel mode and distance/time, so areas respect water, highways, one‑way streets, and other barriers. To avoid surprises, we backfilled everyone’s initial polygon from their existing radius and then let them refine it later.

In parallel, we wired these polygons into search so that search results and displayed distances actually matched the new preferences.

### **Test, then scale with guardrails**

We validated the impact in two geographic A/B tests: a small “smoke test” in a few markets (US, GB, ES), then a larger rollout covering about 20% of addressable markets. 

We watched search composition, search‑to‑request, search‑to‑book, and how often sitters edited their areas. As stricter, more realistic areas surfaced issues with “outside service area” messaging and location precision, we tuned those systems in parallel. 

When both waves showed better matching, better conversion, and strong sitter adoption — with only small, understandable tradeoffs — we committed to global rollout instead of a long 50/50 split.⁠￼

## Solution overview

### Service area settings

In the service settings for each traveling service, sitters now see a map centered on their chosen starting point (home, pin, or address) and controls to define their area, including:

- Distance type (miles/kilometers or minutes).
- Travel mode (walking, cycling, driving).
- A value between 1–100 miles/km or 1–60 minutes.

The map updates live to show the service area polygon based on Mapbox travel‑time estimates. We also explain that time‑based areas are estimations and don’t account for real‑time traffic.

![image.png](Service%20areas%20using%20travel%20distance/image%204.png)

### Per-service flexibility

Sitters can set different areas for different traveling services — often a larger area for house sitting and smaller, more local areas for walks and drop‑ins, especially in dense cities. This matches how they think about effort vs. reward and lets them shape their business more precisely.

### Search integration

On the owner side, search now uses these service polygons instead of simple circles, stops showing sitters on the “wrong” side of major barriers just because they’re within a straight‑line radius, and feeds distance and travel‑time preferences into ranking (alongside booking probability) while preserving enough results on each page.

## Key trade-offs and decisions

**Distance vs. time as the default**

Sitters were split between thinking in minutes and in miles, and time‑based areas introduce extra expectations around traffic. We decided to support both equally and clearly label time‑based areas as estimates.⁠￼

**Rolling back**

Because we backfilled preferences and enabled per‑service areas, rolling back to a single, shared radius would have been painful. We would have had to invent a new radius per sitter from multiple polygons and remove control that sitters were already excited about. Given stable results and positive sentiment, we treated this as a one‑way‑door change and only planned rollback for true emergencies

**Soft blocks and need-to-book impact**

Early tests showed that service areas shrank in practice. That increased “outside service area” messages when owners searched with imprecise locations, which meant a small group of new owners didn’t see any viable sitters and dropped out instead of trying again. That shows up as a small drop in overall conversion for new owners.

At the same time, when a search *did* return sitters, the matches were better: search‑to‑request and search‑to‑book both improved, match‑quality scores went up, and owner–sitter distances went down. We chose to improve location precision and “outside area” behaviour so we didn’t over‑block by accident, and to accept a small hit on the edge cases in exchange for a model that made each successful search more efficient and realistic.

## Impact and metrics

Across the two geo tests (together covering about 20% of addressable markets), we saw a consistent pattern.

For new owners, there was a small initial decrease in conversion (around –1–2% relative), largely driven by stricter “outside service area” behaviour when locations were imprecise. **In other words, a few more owners hit “no one available here” and never came back, but for everyone who did see sitters, those sitters were closer and more likely to accept the job.** At the same time, search‑to‑request improved by roughly +2–3% relative and search‑to‑book by roughly +1.6–2.8% relative, with similar point estimates in the second geo set.

On search quality and distance, our internal match‑quality score improved by about 7%, the maximum distance of page 1 results dropped by roughly 4–5 miles for walking and drop‑ins (while house‑sitting distances remained mostly neutral), and median distance between owners and sitters decreased at both search and conversation level.

New revenue per searcher was positive in both geo sets, especially in US markets, where point estimates were around +5–6%.

<aside>

In short, we traded a small, understandable shift in one early metric for better search quality, shorter owner–sitter distances, and higher search‑to‑request and search‑to‑book — in a model that sitters liked and adopted.

</aside>

## Next steps and follow-ups

The rollout plan extended the feature globally for traveling services, with clear documentation and communication to sitters and CX teams. Longer-term follow-ups include:

- Surfacing travel distance/time (not just raw miles) in owner-facing UIs for better transparency.
- Exploring additional travel modes (e.g. public transport) where relevant.
- Considering additional rates or fees for very long travel times in the future.
- Updating sitter profiles to reflect context-aware service areas (per service and per address) rather than a single location bubble.

## Learnings

- **People think in travel, not geometry.** When you show sitters areas shaped by their actual routes and mode of travel, the experience feels instantly more “true,” even if it’s less perfectly symmetrical.
- **Model improvements can hurt simple metrics in the short term.** Shrinking service areas and enforcing them more honestly revealed latent issues in soft-block behaviour and location precision. The right response was to fix those, not abandon the model.
- **One-way-door design decisions are sometimes necessary.** This change touched data models, search, sitter UX, and owner matching. Designing it to be meaningfully reversible would have constrained its usefulness. Instead, we invested in careful experiments and only moved to 100% when we had consistent directional results.
- **Users will do the work when the payoff is real.** Many sitters willingly edited their service areas and switched to time-based preferences because it directly affected the convenience and economics of their bookings.
- **The shape of a service area is a strategic tool.** This project unlocked follow-on work for recurring services, alternative monetization (e.g:. charging more for longer trips), and better contextual communication in search and profiles. Getting the foundation right created an entire design and product surface we didn’t have before.