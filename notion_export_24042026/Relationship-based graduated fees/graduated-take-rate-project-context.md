# Graduated Take Rate — Project Context

> Last compiled: May 1, 2026  
> Scope: Sitter Experience · Alternative Monetization  
> Primary PM: Mégane Martinez  
> Design lead: Bernardo Prudêncio  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Background & Problem Statement](#2-background--problem-statement)
3. [Hypothesis & Goals](#3-hypothesis--goals)
4. [Fee Structure](#4-fee-structure)
5. [Timeline & Rollout](#5-timeline--rollout)
6. [Pre-Requisite: Fee Transparency Experiment](#6-pre-requisite-fee-transparency-experiment)
7. [Design Work](#7-design-work)
8. [Functional Spec Highlights](#8-functional-spec-highlights)
9. [Research & Validation](#9-research--validation)
10. [Cross-Functional Partners & Comms](#10-cross-functional-partners--comms)
11. [Engineering & Launch Operations](#11-engineering--launch-operations)
12. [Jira Tickets (Key)](#12-jira-tickets-key)
13. [Social Listening & Sitter Sentiment](#13-social-listening--sitter-sentiment)
14. [Open Questions & Next Steps](#14-open-questions--next-steps)
15. [Key Resources & Links](#15-key-resources--links)
16. [Team & Stakeholders](#16-team--stakeholders)

---

## 1. Project Overview

**What is this?**  
A relationship-based graduated sitter-side fee structure. Instead of the current flat 20% Rover fee (15% in Europe), sitters pay a higher fee at the beginning of a client relationship and earn progressively lower fees as the relationship grows — measured by accumulated Gross Booking Value (GBV) with that specific client.

**Why?**  
Rover's internal assessment found that the value Rover delivers is ~76% of booking value for new relationships but drops to ~18% for repeat bookings. The flat fee doesn't reflect this. Social listening and previous research also showed that diversion is partly driven by sitters perceiving the ongoing fee as too high for established relationships.

**Current status (May 1, 2026):**
- ✅ Canada smoke test launched March 4, 2026
- ✅ Canada full test scaled March 24, 2026 (Vancouver, Calgary, Ottawa-Gatineau)
- 🔜 US test targeting June 16, 2026 (Chicago, Dallas, Seattle) — conjoint analysis for US tiers pending
- 🔜 UK — Q2 2026

---

## 2. Background & Problem Statement

Rover takes 20% of sitter earnings per booking (15% in Europe), regardless of how many bookings have been done with a given client or how long the relationship has lasted.

Prior research established that:
- **Diversion is partly fee-driven.** Sitters wanting to avoid platform fees is a meaningful driver of off-platform bookings.
- **The flat fee doesn't match value delivery.** Rover provides maximum value when acquiring a new client (matching, trust infrastructure). That value drops sharply for repeat relationships where both parties already know each other.
- **Top sitters are repeat-driven.** The top 20% of sitters generate 73–77% of total platform earnings. In North America, 59–63% of top sitters' earnings come from repeat clients — making repeat retention the most financially important behavior to incentivize.

A [previous test](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/4524113922) reduced the sitter fee from 15% to 5% for all recurring bookings in the UK and all dog walking in ES. After 4 months: only Doggy Day Care showed a statistically significant positive signal (+16.9% recurring units). Results were otherwise inconclusive.

The data told us the next test should:
- Include a North America geo (Canada is most comparable to US)
- Target boarding or similarly high-ABV services (not just daytime)
- Include both new and existing sitters
- Test a structure that is net-neutral or better financially for Rover (the previous test was a pure fee cut)

---

## 3. Hypothesis & Goals

**Based on:** Feedback from sitters and the fact that top providers get more than half their earnings from repeat bookings

**We believe that:** By setting up a fee structure that more closely maps how and when Rover delivers value to sitters

**We will:** Increase top sitter satisfaction and increase Rover take

**Success criteria:**
- Providers' success: Most loyal sitters are better off financially (earning more on Rover than before) and satisfied with the new structure
- Rover's success: New relationship booking volume is maintained (CBR not significantly hurt)

**Core design principles** (from the one-pager):
1. Impossible-to-miss communication and transparency to maximise awareness
2. Simplicity of setup to maximise comprehension
3. Sufficient sample size from sitter segments most likely to react
4. Speed — get learnings quickly
5. New bookings not hurt beyond a defined threshold (TBD)
6. Limit gaming risk in test design
7. Learn something that informs the next test
8. Market fairness — same fee structure within a given market
9. Mitigate financial risk — US not first

---

## 4. Fee Structure

### Canada (live)

| Tier | Relationship GBV | Sitter fee |
|------|-----------------|-----------|
| Tier 1 | $0 – $499 | 30% |
| Tier 2 | $500 – $999 | 15% |
| Tier 3 | $1,000+ | 10% |

**Key rules:**
- Progress is based on **service total** (sitter's rate including sitter-side fee; owner fee and tips excluded)
- Only bookings for which a **service deposit has been emitted** count (completed bookings, or cancelled bookings with a penalty)
- Only bookings paid out in the test country currency count
- At launch, all past bookings were backfilled — so sitters entered the test already at their earned tier
- Existing requests/bookings at launch kept the 20% flat fee; only new ones get the tiered rate
- When a booking spans multiple tiers, a **pro-rated fee** applies (weighted average by GBV in each tier)
- Owner-side fee remains 11% flat — unchanged

### US (planned, tiers TBD)
Tiers and thresholds are TBD pending a conjoint analysis. Training and Grooming will be excluded from the graduated structure (flat 20% fee) and will not count toward relationship GBV.

### Training / Grooming edge case
Training relationships have an expected total GBV of ~$500 (vs. much higher for core services), meaning trainers would be permanently stuck at 30%. The current path forward (as of April 30, 2026) is to **exclude Training and Grooming from the graduated take** — they stay at 20% flat and don't count toward progress. Design explorations for how to represent this in the UI are in Bernardo's Confluence page (see Section 7).

---

## 5. Timeline & Rollout

### Pre-history
| Date | Event |
|------|-------|
| Sep 2025 | Analytics deep dive: sitters' earnings distribution and previous commissions test published |
| Oct 2025 | Analytics questions for the test design discussed in #proj-alt-monetization-test |
| Nov 2025 | Deep-dive: relationship-based Confluence page published (Bernardo) |
| Dec 2025 | Usability testing plan drafted; Fee Transparency pre-req page created; Workshop: on top of alternative monetization held |
| Dec 18, 2025 | Kathryn Mailler shares cross-functional messaging recommendations Google Doc |
| Jan 8, 2026 | Bernardo shares Figma examples for landing page/comms in #proj-alt-monetization-test |
| Jan 14, 2026 | Bernardo shares landing page skeleton in Figma |
| Jan 16, 2026 | Brand Studio (Defne Kavas) shares copy drafts for landing page and launch email; Bernardo presents Figma prototype |
| Feb 6, 2026 | Brand Studio shares revised comms copy for multiple deliverables |

### Build & Launch
| Date | Event |
|------|-------|
| March 4, 2026 🚀 | **Smoke test LIVE** — Nanaimo, Regina, Saskatoon, Québec |
| March 4, 2026 | Email and push notification sent to smoke test sitters at 6pm BCN time |
| March 5–13, 2026 | Bugs found and fixed: wrong tier data in system events, negative GBV, missing translations, cancelled booking callouts, accessibility issues (6 issues reported on March 11) |
| March 9, 2026 | Facebook Sitter Group post about announcement email — majority negative sentiment |
| March 10, 2026 | Reddit: r/RoverPetSitting post with confusion/misinformation about the test |
| March 11, 2026 | Reddit: "New tiered pilot program" post — strong negative reaction from Canadian sitters (30% Tier 1 seen as punitive) |
| March 17, 2026 | First prorated stay with adjustment deposit flow (stay ID 47889065) — verifies financial logic |
| March 18, 2026 | Full rollout delayed — iOS build not fully available; reschedule to March 19 |
| March 24, 2026 🚀 | **Full Canada test** — scaled to Vancouver, Calgary, Ottawa-Gatineau |
| March 24, 2026 | First Reddit mention of the test after full launch |
| March 25, 2026 | Bernardo opens tickets: landing page example clarity fix, relationship page padding |
| April 1, 2026 | Fix for missing post codes in treatment geos (geo_mapping table issue) |
| April 9, 2026 | Dan Neciu publishes RFC for multi-country tiered pricing |
| April 10, 2026 | Decision: NOT updating existing future Canadian bookings to lower fee (budget approval taking too long); will plan this from start for US test |
| April 13, 2026 | Mégane publishes US timeline: launch-ready target June 2, 2026; launch date June 16 if criteria met |
| April 17, 2026 | Fix for copy issue in green callouts (wrong copy shown for repeat relationships) |
| April 21, 2026 | Comms push: clarification sent to pilot sitters that historical earnings count toward starting tier from day 1 |
| April 29, 2026 | Tier config foreign key migration, func spec updated |
| April 30, 2026 | Training/Grooming placeholder ticket resolved; ongoing training service design exploration |
| May 1, 2026 | Bernardo publishes design exploration for training service edge case |

### Upcoming
| Date | Event |
|------|-------|
| June 2, 2026 | US test launch-ready target (product done, conjoint results back, comms ready, CX trained) |
| June 16, 2026 | Tentative US test launch (Chicago, Dallas/Fort Worth, Seattle) |
| Q2 2026 | UK MVP (TBD) |

---

## 6. Pre-Requisite: Fee Transparency Experiment

**Page:** [1P: Measure impact of sitter side "fee transparency" in ledgers](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5351243783)  
**Author:** Mégane Martinez  
**Last modified:** Dec 23, 2025

**What:** A separate A/B test in Canada, run *before* the graduated take rate, to isolate the impact of showing sitters their actual payout amount (not just the stay total) in conversation ledgers.

**Why:** The graduated take rate design requires showing sitters their earnings in ledgers to communicate the benefit of the fee structure. But fee transparency alone carries a risk — anchoring the fee in sitters' minds could increase diversion even without the tiered structure. This test was designed to disentangle the two effects.

**Current state of sitter ledgers (as of Dec 2025):**
- Actual earnings only visible in Payment History page
- Conversation ledger and Booking Details only show the stay total (which still includes the 15–20% fee)

**Proposed change:**
- Show the sitter payout explicitly in: conversation ledger, booking details, modify request, modify booking (EBS)
- Frame around *earnings*, not the fee
- Explain how earnings are calculated and what the fee supports

**Hypothesis:** Showing this information won't hurt %CBR (primary metric)

**Status:** Results TBD

**Key risk flagged:** Overlap with the conversation screen RxN/SSR migration (targeting same screens and metric). Plan was to coordinate launch timing.

---

## 7. Design Work

All design work lives in the shared Figma file:  
**[DEV-136407 – Graduated take rate](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate)**

### Confluence design pages (all by Bernardo)

| Page | Last updated | Summary |
|------|-------------|---------|
| [Design exploration: graduated take rate](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5069046793) | Oct 2025 | General exploration of design options — sitter awareness, early directions, insights, philosophy |
| [Deep-dive: account-based](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5215357278) | Oct 31, 2025 | Analysis of tenure/account-based models, recency criteria, milestones, rolling vs decay, grace periods, airline analogy |
| [Deep-dive: relationship-based](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5201496498) | Nov 13, 2025 | Analysis of relationship-based models, GBV tracking problem, relationship page rationale, milestone options, Meowtel comparison |
| [MVP: relationship page](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5241569569) | Feb 9, 2026 | Design spec for the relationship page: 3 core questions + full component priority (MoSCoW) |
| [Design exploration: relationship-based graduated take with training service](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5870324111) | Apr 30, 2026 | 5 paths for handling the Training/Grooming edge case |
| [Workshop: on top of alternative monetization](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5308743736) | Dec 2025 | Cross-functional vision workshop: what's needed beyond the graduated take rate |
| [Alt. monetization models evaluation framework](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5211553909) | Oct 2025 | Decision matrix across criteria: cognitive load, fairness, gaming risk, scalability, legal footprint, etc. |

---

### Deep-dive: Account-based model

**[Confluence page](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5215357278)** · Last modified Oct 31, 2025

An account-based model ties the sitter's fee to their overall platform tenure and total GBV across all relationships — not to any individual client relationship.

**Core limitation:** Tenure-only incentives don't address diversion. A sitter can use Rover to acquire new clients, then move bookings off-platform as their cost drops — which offers Rover little value. The conclusion: tenure-based incentives must be combined with relationship or behavioral criteria to align incentives and reduce diversion risk.

**Recency criteria:** Adding a recency layer (e.g. minimum GBV within the last 12 months) prevents gaming and encourages ongoing platform activity. It adds complexity: sitters must track both their progress toward the next milestone *and* how much of their existing GBV is about to expire.

**1 vs. multiple milestones:**
- **Single milestone** — binary state (standard vs. lower rate). Low cognitive load. Easy to understand. May not sustain motivation long-term.
- **2–3 milestones** — creates a journey. Each tier feels like an achievement. Requires dedicated UI (e.g. progress tracker). Value jumps between tiers must be meaningful.
- **5+ milestones** — highly gamified; frequent small rewards. Risk: milestones so small they feel hollow. Progress bar goes backwards if GBV expires, which can feel punishing.

**Rolling basis vs. gradual decay:**
- *Rolling basis*: Fairer — no single event causes catastrophic loss. But hard to communicate; sitters can't easily track mentally.
- *Gradual decay*: Daily "tax" on total earnings progress (e.g. −$2/day). Extreme loss aversion. Makes the UI feel like a leaking bucket.
- Warning: **"Cliff effect"** — a massive single booking that expires all at once can cause a dramatic overnight drop, feeling like punishment for something normal.
- Warning: **"Running in place"** — sitters who reach a higher milestone must maintain high GBV forever just to keep a status they already earned. Can lead to burnout.

**Grace period / status model:**
Two approaches to managing the recency layer without inducing constant anxiety:
- *Monthly rolling model*: On the 1st of each month, the system notifies sitters of GBV from the same month last year that is about to expire. Reframes the month as a 30-day mission to replace it. Active but potentially stressful.
- *Status model* (preferred): Once a sitter hits a threshold, they *achieve a status* that is locked in for the next 12 months — regardless of daily fluctuations. The system checks daily if they re-qualify for the next 12-month period. Shifts the model from **maintenance mode → earnings mode**.

**Airline miles analogy:**
Airline programs are a high-agency, flexible-reward "game" that users actively play. Our system is a passive, fixed-reward benefit that users receive. Key implications:
- We offer an invisible discount (a smaller fee), not a tangible reward. A discount is "less bad"; a reward is exciting.
- Sitters don't choose to earn — it just happens when they complete a booking.
- Lessons we *can* borrow: make the invisible visible, use aspirational status labels, keep the core rule simple ("complete booking → reach new tier").

**Threshold-crossing bookings:**
When a booking crosses a GBV milestone, two approaches exist:
- *Split fee*: Most transparent and fair. Sitter gets the benefit the instant they earn it. Downside: creates a "blended fee" for a single booking that is hard to display on a ledger.
- *Cashback on future bookings*: Entire booking charged at the current higher fee; sitter receives a credit redeemable on the next booking. Downside: delayed gratification, requires a credit wallet per sitter. At account level this is a rare event; at relationship level it becomes a recurring incentive loop.

**Relationship layer option:**
To mitigate the diversion risk of a pure tenure model, the account model can incorporate relationship logic by either:
- Counting only repeat bookings toward GBV progress, or
- Applying a multiplier (e.g. $1 new booking = 1 point; $1 repeat booking = 2 points).

**Touchpoints (account-based):**
Two communication levels needed:
- *General / foundational*: Compact announcement (how the model works) + Extended "source of truth" dashboard showing global progress, recency layer, full GBV history.
- *Transactional / contextual*: Compact per-booking callout connecting each request/booking to the sitter's long-term take rate progress.

---

### Deep-dive: Relationship-based model

**[Confluence page](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5201496498)** · Last modified Nov 13, 2025

A relationship-based model adjusts the fee as the sitter's relationship with a *specific client* grows — measured by GBV accumulated with that client.

**Current sitter-client dynamics:** Sitters typically use Rover for the first booking to secure a review and trust infrastructure, and for the second booking to register on Rover's repeat metrics. After these initial bookings, the incentive to keep bookings on-platform diminishes if the fee stays high. A graduated, relationship-based model addresses this by lowering the fee exactly at the point where diversion becomes most tempting.

**The GBV tracking problem:**
Sitters currently have no way to see per-client GBV. Booking totals only appear in payment history or within individual conversations — both cumbersome and historically limited. Solutions explored:
- Client filter in payment history *(cumbersome)*
- GBV shown inline per request/booking *(limited context)*
- Redesigned Rebook tab *(in native code — expensive to optimize)*
- **Relationship page** *(best option — centralizes bookings, requests, take status, and transactions)*

**Relationship page rationale:**
Three non-negotiable design requirements drove the decision to build a dedicated relationship page:
1. Sitters must know how and when they'll gain more value (MUST)
2. New and existing sitters must know they're rewarded for keeping bookings on platform (MUST)
3. Everything should focus at the relationship level (MUST)

The relationship page was the only touchpoint capable of satisfying all three simultaneously. It was also wanted by the Expansion and Bookings teams for their own use cases, making it a higher-leverage investment.

**1 vs. 2+ milestones (relationship-based):**
- 1 milestone: simpler tracking, works with minimal UI. May not inspire the right behavior.
- 2 milestones (3 take rates): adds specificity. Requires a relationship page for comprehension — the increased complexity only works if there's a clear place to understand progress.

**Touchpoints (relationship-based):**
- *General comms*: Announce how the new model works. Optionally show a summary of each client's relationship status — with recency/tier filtering (don't surface a client from 3 years ago just because they have a lower fee).
- *Compact view*: Contextual callout in inbox, booking details, or Rebook/Contacts tab.
- *Extended view*: Full relationship page — the source of truth for per-client progress.

**Threshold-crossing bookings:**
Same two options as account-based (split fee vs. cashback). The key difference: at the relationship level, threshold crossings happen *repeatedly with every client*. Cashback would become a recurring, predictable incentive loop rather than a one-time event. This makes the cashback model more worth considering at relationship level than at account level.

**Communication scenarios covered in the deep-dive:**
- Onboarding / initial state (all sitters in test market; existing relationships told their starting status)
- The request loop (Tier 1 → hint to rebook; Tier 2 → hint to rebook; Tier 3 → celebrate)
- Recurring booking weekly updates
- Booking modification (fee recalculation notifications)
- Post-booking updates (completion, cancellation with/without penalty, waived cancellation)

**Meowtel comparison:**
Rover's acquisition of Meowtel provided a live reference point. Meowtel uses a relationship-based commission structure:

| Tier | Cumulative earnings with client | Commission |
|------|--------------------------------|-----------|
| Tier 1 | $0 – $299 | 30% |
| Tier 2 | $300 – $999 | 25% |
| Tier 3 | $1,000 – $2,999 | 20% |
| Tier 4 | $3,000+ | 15% |

Tier is locked at the time a booking is accepted (subsequent concurrent bookings don't retroactively change the rate for an earlier one). Tips excluded from calculations. Clients can check progress via the Clients screen, sortable by Earnings.

---

### MVP: Relationship Page

**[Confluence page](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5241569569)** · Last modified Feb 9, 2026 · Author: Bernardo  
**[Figma exploration](https://www.figma.com/design/E2bbKATUHaKb79E44ygxTe/📁-Touchpoints?node-id=738-61311)**

The relationship page is a critical component of the relationship-based GBV milestone model — the "source of truth" for a sitter's progress with a specific client.

**Why it's required:**
1. Without it, the new fee structure will be impossible to understand. Sitters won't know why their fee is higher with one client vs. another, eroding trust.
2. Without visible progress, there's no motivation. The drive to keep bookings on-platform is lost.
3. Without a transaction log, sitters can't "check the math" when a fee doesn't match expectations — leading to frustration and CX load.

**The MVP answers three questions:**
1. What is my fee right now with this client?
2. What bookings or cancellations contributed to getting to this fee?
3. How do I get to the next lower fee?

**Component priority table:**

| Component | Priority | Notes |
|-----------|----------|-------|
| Client identification | MUST | Clear display of client and pets |
| Current status (tier) | MUST | What fee tier applies for this client |
| Progress to next milestone | MUST | Progress bar: GBV earned + needed to reach next tier |
| Actionable CTA | MUST | Rebook or Message button |
| Transaction history | MUST | Read-only list of GBV-counting transactions only — "proof" for transparency |
| Booking details navigation | SHOULD | More info without cluttering the page |
| Upcoming bookings | SHOULD | Visibility on which bookings will be at a lower rate |
| Requests | SHOULD | Visibility on pending requests and their tier |
| Refunds | SHOULD | Can reduce GBV progress; must be surfaced |
| Locked rates (by client) | COULD | Manage locked rates per-client instead of per-booking |
| Owner profile access | COULD | — |
| Block and report | COULD | — |
| Booking actions | WON'T | Booking / archiving / scheduling — out of scope for MVP |
| Celebratory milestones | WON'T | — |
| Advanced analytics | WON'T | — |
| Conversations | WON'T | Requires inbox filtering (separate dependency) |
| Starred messages | WON'T | — |
| Media gallery | WON'T | — |
| Rover Cards | WON'T | — |
| Links and docs | WON'T | Vet info, etc. |
| Private notes | WON'T | Door codes, etc. |
| Notification preferences | WON'T | — |
| Rover Number preferences | WON'T | — |

The intent is that the relationship page could eventually evolve into a rich CRM-like surface, but for the test, only the core fee-tracking functionality is required.

---

### Training Service Design Exploration (active)

The graduated structure works poorly for Training because:
- Average Training relationship GBV is ~$500 → virtually all training relationships stay at 30% forever
- Off-platform, trainers earn $300–350/client vs. $100–130 on Rover → 30% on Tier 1 makes this gap worse
- Trainers use Rover primarily for client acquisition, not as a full business platform

**5 paths explored:**

| Option | Description | Complexity |
|--------|-------------|-----------|
| A – Exclude Training (path forward ✅) | Training stays at 20% flat, doesn't count toward progress | Low — already done in Canada |
| B – Include as-is | Same tiers, trainers permanently stuck at Tier 1 | Very low — but creates frustration |
| C – Service-specific thresholds | Different GBV thresholds per service type | Medium |
| D – Service-specific fee percentages | Same thresholds, lower Tier 1 fee for Training | Medium |
| C+D – Fully scoped per service | Independent thresholds AND fees per service | High |
| E – Points-based system | GBV replaced by points that accrue at different rates by service | Very high |

**Current path forward:** Option A. Training and Grooming excluded from the graduated take. Key design decisions:
- No fee callouts in conversations or booking details for Training (avoids noise)
- Earnings breakdown in ledgers does surface the fee (provider is actively reviewing it there)
- Relationship page: no progress tracker if no core service progress exists
- Mixed relationships (core + training): two separate sections, training displayed in grey, contextual callout explaining training doesn't count
- Landing page needs copy updates: "eligible services" language, new FAQ entry about Training/Grooming exclusion

---

## 8. Functional Spec Highlights

**Page:** [Func. spec · Relationship based graduated take rate](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5523570713)  
**Author:** Mégane Martinez  
**Last modified:** Apr 29, 2026

The Figma file is the source of truth for all design details. Key user stories:

### Canada test (Deliverable 1)

**US 1 – Core fee functionality**
- Fee based on accumulated service total GBV with that specific client
- Pro-rated fee for bookings spanning tiers
- Historical bookings backfilled at launch; past progress visible immediately

**US 2 – Contacts/Clients page**
- Rebook tab renamed to "Contacts"
- Split into: Clients (owners with at least one confirmed booking) and Sitters tabs
- Each client shows: photo, name, pets, confirmed booking count, $ progress, current tier
- P1: sort and search by name, pet name, total bookings

**US 3 – Relationship page**
- 5–6 sections: header (Rebook + Profile CTAs), progress (tier visualization + progress bar + banner), upcoming, completed, archived, pets
- Progress bar: dark green = completed GBV, light green = pending GBV
- Entry points: Contacts tab, conversation header, conversation menu, booking earnings breakdown

**US 4 – System messages, banners, push notifications**
- System message appears in conversation screen + banner in booking details
- Content varies by relationship status: new, in-progress, tier-unlocking, maxed out (Tier 3)
- Push notification when service deposit completes (tier progress update)

**US 5 – Booking earnings breakdown**
- "Your earnings" link in booking details ledger opens bottom sheet/modal
- Shows breakdown by tier, total earnings
- Primary CTA: "See relationship" → relationship page

**US 6 – Service settings**
- Visual tiers component in service settings (collapsed by default)
- Copy below rate input updated: "earn between $X and $Y" (Tier 1 to Tier 3 range)

**US 7 – Announcements**
- Callout on Daily Dashboard (apps), sitter dashboard (web), payment history page
- Two versions: sitters with existing clients, sitters with no clients yet
- Learn more → interstitial bottom sheet → landing page

**US 8 – Landing page**
- URL: rover.com/long-term-relationships-on-rover
- Localized: en-ca, fr-ca
- Carousel (4 stages) + collapsible FAQs
- Not indexed; auth-only (for US test)

**US 9 – Payment history**
- Stay price, Rover fees, and Earnings updated to reflect the new fee model

### US test (Deliverable 2)
- Same structure as Canada + US-specific tier values (TBD via conjoint)
- Training and Grooming excluded (flat 20%)
- Landing page: authenticated users only; "out of pilot" version for non-test users
- "Eligible services" language throughout

---

## 9. Research & Validation

### Sitters' earnings deep dive
[Analytics deep dive (Sep 2025)](https://roverdotcom.atlassian.net/wiki/spaces/MARKET/blog/2025/09/18/5096604080)

Key findings:
- Top 20% of sitters generate 73–77% of total earnings (consistent across geos)
- Top 1% of sitters alone: 15–19% of all earnings; top 5%: 39–44%
- Top North American sitters are **repeat-driven** (63% US, 59% CA earnings from repeat clients)
- Top European sitters are **acquisition-driven** (only 52% GB, 41% EU from repeat clients)
- US top decile busy 49% of days; very top 1% busy 81% of the time
- Boarding services account for 53% of top sitter earnings in the US
- Previous UK test: only Doggy Day Care showed stat. sig. positive impact (+16.9% recurring units)

**Implication:** Test in Canada first (closest to US in new/repeat split). Must include Boarding-type services. Target the top 20%.

### Concept Test (Q4 2025)

**Research plan:** [Research plan: Relationship based graduated sitter fees model concept test](https://roverdotcom.atlassian.net/wiki/spaces/DSN/pages/5199595030)  
**Researcher:** Lizeth Herrera  
**Stakeholders:** Mégane Martinez, Bernardo Prudêncio, Camille Brito, Guillem Pons (CPO sponsor)  
**Market:** Canada · **Timeline:** Q4 2025 / Oct–Nov  
**Constructs Figma board:** [Concept Test – Basis](https://www.figma.com/board/j2pMgsmIZvb6tP6WhA8ja1/Concept-Test--Basis-)

**What:** A qualitative concept test using in-depth interviews (1:1 remote via Google Meet, 60 min each). Participants were individually exposed to the proposed graduated sitter-side fee models, then asked to react to visual and verbal stimuli, explain how they interpreted the concept, and discuss fairness, comprehension, and motivation.

**Why at this stage:** This research was run *before* building the product, to validate whether the concept was understood and resonated at a fundamental level before committing engineering effort. The goal was not to predict behavior or quantify adoption, but to answer: "Is this concept clear enough and compelling enough to justify a live test?"

**Participants:**

| Segment | n |
|---------|---|
| New sitters | 5–7 |
| Growing sitters | 5–7 |
| Established sitters (non-diverting) | 5–7 |
| Established sitters (believed to be diverting) | 5–7 |
| **Total** | **20–28** |

Participants recruited directly from Rover's internal sitter database (active, non-sensitive, with a booking in the last 90 days). Incentive: $60 CAD in Rover credits.

**5 learning dimensions:**

| Dimension | Core question |
|-----------|--------------|
| Cognitive load | Can sitters understand how the fee structure works and map it to their own experience? Where does confusion occur? |
| Fairness | Does the model feel proportional and legitimate? How do sitters define "fairness" in this context? |
| Alignment with Rover's decreasing value | Do sitters intuitively see that Rover's contribution decreases over time, and does a declining fee feel aligned with that? |
| Perceived benefit (revenue neutrality) | Do sitters believe they can "win" under this model? Does that belief change their willingness to stay on-platform? |
| Agency / influence | Do sitters feel they can influence their progress? How much of it depends on the owner's behavior? Does this sense of control affect motivation? |

**Main objective:** Evaluate whether the graduated, relationship-based fee model is understood, feels fair, and is strong enough to justify a live test — capturing mental models, perceived trade-offs, and emotional resonance. Not about predicting real behavior.

**Slack context:** The decision to test both a relationship-based and account-based model in concept testing was discussed in #proj-alt-monetization-test around Oct 14, 2025 — the team wanted to present both models and let the concept test inform which to take further. Concept testing was underway by Nov 5–11, 2025 (mentioned in channel). The relationship-based model was chosen for the live test following concept test findings.

---

### Canada Test Plan (202602)

**Page:** [202602 Canada Graduated Take Relationship](https://roverdotcom.atlassian.net/wiki/spaces/RTEST/pages/5463506962)  
**Owner:** Mégane Martinez · **Analyst:** David Argelich

**Test type:** Learnings Gathering — Geo Split Test  
**Platform:** All platforms · **Market:** Canada  

**Rollout:**
- Phase 1 (Smoke): March 4, 2026 — Saskatoon, Regina, Nanaimo, Québec
- Phase 2 (Full): March 24, 2026 — Ottawa-Gatineau, Vancouver, Calgary
- Duration: 8–10 weeks

**Primary metric (powering):** Absolute number of bookings where an owner had a conversation with a new provider. This metric reacts quickly and captures the risk of sitters being less incentivized to take on new clients.

**Break-even logic:** The graduated model generates a 7% increase in take rate, which sets the break-even. As long as we don't see a statistically significant drop in the primary metric larger than 7%, the model isn't hurting the business for new relationships. At that point, secondary metrics carry the narrative.

**MDE:** 5–6%

**Secondary metrics:**
- Owner BtB and StR (sitters may raise prices to compensate)
- %CBR for sitters, M&G-to-book rate, diversion signals (phone blocking, payment methods)
- Cancellation rate, FUN (Follow-Up Need) rate
- Number of sitters who increased prices; standard rate pre vs. end of test
- Calendar availability, away-from-service-type rate, new sitter matriculation rate
- GBV, take, search-to-request, need-to-book, ABV

**Early termination criteria:** Only if the data is "truly disastrous" or there's a massive spike in negative sitter sentiment. Because Canada is a smaller geo-split market, natural fluctuations are expected — the plan is to run the full 10 weeks to ensure valid learnings.

**Qualitative monitoring:** Social media monitoring (Jeffrey Lopez), in-app surveys, active tracking of sitter feedback post-launch. The team expected pushback and wanted to stay ahead of the narrative.

**Dashboards:**
- [Phase 1 Smoke Markets Mode Dashboard](https://app.mode.com/editor/rover/reports/92d7dd246354/presentation)
- [DataDog: Alt Mon Canada 2026](https://app.datadoghq.com/dashboard/kqa-cab-pwz/alternative-monetisation-canada-2026)

**Results:** Narrative section empty as of last update (Mar 10, 2026) — test was still in progress.

---

### Usability Testing Plan
**Page:** [Relationship based graduated sitter fees model - Usability Testing](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5448435566)  
**Author:** Mégane Martinez  
**Last modified:** Dec 9, 2025

Goals: Validate UX comprehension for both new and existing sitters. Also test discoverability of communication touchpoints and key task completion.

Learning objectives across 4 levels:
- **Program level:** Awareness, visibility, comprehension, perceived relevance, retention
- **Relationship level:** Discoverability and comprehension of tier status per client
- **Service & rates level:** Discoverability and comprehension when setting rates
- **Booking level:** Discoverability and comprehension of per-booking earnings

Participants: 5 potential/new sitters + 5 growing/established sitters. Method: think-aloud usability test + in-depth interview.

### 100 Conversations in Smoke Test
**Page:** [100 conversations in smoke test](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5822383408)  
**Author:** Bernardo Prudêncio  
**Last modified:** Mar 12, 2026

Analysis of 100 conversations from sitters in the smoke test market (reviewed by Dia). Key findings:

- **No organic mentions of tiered fees or rewards programs** — all pricing treated as flat per-service outcome of standard Rover flow
- Conversations are primarily logistics-heavy: booking coordination, meet & greets, pet care instructions, payment mechanics
- Significant off-platform gravity in mature relationships, not through explicit diversion but through natural relationship drift
- Strong "relationship CRM" pattern: same sitter + owner, lots of repeat coordination, high trust
- Opportunities identified: 
  - Relationship page as a first-class product entity
  - Better modification UX (inline "before/after" diffs)
  - More visible platform protections at the moment of temptation

### Customer feedback (from one-pager)
Social listening evidence shows sitters feel they're getting less value over time while still paying a high, consistent fee. "Particularly true in repeat relationships where owner and sitter know and trust each other."

---

## 10. Cross-Functional Partners & Comms

### Working partners referenced
- **Kathryn Mailler** — Content/messaging strategist. Provided cross-functional messaging recommendations ([Google Doc](https://docs.google.com/document/d/1B2_N4QVhu0CceMGwFDyMh9yo-c7HLqmlAxqKF1q91Hs/edit?tab=t.jfvfosw692ag)) in Dec 2025. Collaborated with Bernardo on notification center announcement copy in Figma.
- **Defne Kavas** — Brand Studio. Led comms copy for landing page and launch email (multiple rounds through Jan–Feb 2026). Shared comms update April 21 about historical earnings clarification push.
- **Jeffrey Lopez** — Trust & Safety / Community. Monitored sitter Facebook Group and Reddit post-launch; removed off-platform coordination suggestions from public posts.
- **David Argelich** — Analytics. Ran the financial modeling and sitters' earnings deep dive.
- **Ion Scerbatiuc** — Analytics. Questions about tier progression data and reporting post-launch.

### Launch comms deliverables
- Email campaign to treatment geos (sent March 4, 2026 at 6pm BCN)
- Push notification at launch
- Notification center announcement
- Landing page: rover.com/long-term-relationships-on-rover
- FAQs / Help Center article: support-ca.rover.com
- April 21, 2026: Clarification push — historical earnings count toward starting tier from day 1

### Comms learning (April 21, 2026)
Most consistent confusion from sitters: **"Do my past earnings with a client count toward my starting tier?"** (Answer: yes.) This was a high-leverage clarification moment — reframes the pilot as something sitters are already winning from day 1.

---

## 11. Engineering & Launch Operations

**Main channel:** [#temp-alt-sitter-side-fees](https://rover.enterprise.slack.com/archives/C09SSJWTHAM)

### Team
- **Alessio Romano** — Engineering lead
- **Alexandra Donchenko** — Engineer (QA, bug fixes, BE)
- **Dan Neciu** — Engineer (relationship GBV, tier logic, multi-country RFC)
- **Anna Gruszka** — Engineer (snapshot logic, GBV backfill, translations, zip code geo mapping)
- **Joshua Ferriday** — Engineer (tier config, migration commands)
- **Lorenzo Patras** — Engineer (frontend, callout logic, snapshot updates)
- **Gilat Blumberger** — Engineer (callouts, relationship page)
- **Parker Lewis** — Mobile (min version check for AltMonetisationVersionCheck)
- **Basavaraj Virupanna / Sindhu Santhosh** — QA (accessibility + translation testing)

### Key technical decisions
- **GBV calculation:** Relationship GBV uses service total (sitter rate + sitter fee, excluding owner fee and tips). Based on service deposits emitted.
- **Backfill at launch:** All past relationship GBV backfilled so sitters enter at their earned tier immediately.
- **Snapshot-based:** Tier progress tracked via snapshots; snapshot on provider group updates.
- **Pro-rating:** Bookings spanning tier boundaries get a weighted average fee.
- **Zip code geo mapping:** Used to assign sitters to treatment/control geos. Bug found April 1 (missing post codes) — fixed same day.
- **Future Canadian bookings (created before launch):** Decision made April 10 NOT to update these to the new lower tier fee. Budget approval was too slow; plan to do this from day 1 in the US test.
- **Multi-country support:** Dan's RFC for multi-country tiered pricing (April 9). Each country can have its own tier config; controlled by Statsig flag.

### Notable bugs/incidents
| Date | Issue |
|------|-------|
| March 4–5, 2026 | 500 errors at launch (Sentry issue) — fixed same day |
| March 4, 2026 | Conversations in Canada with 25% take rate (cycling issue) — investigated and explained |
| March 5, 2026 | Green system event showing wrong tier data |
| March 5, 2026 | System event showing fee % instead of take rate % (e.g., 10% instead of 90%) |
| March 9, 2026 | Wrong Rover fee applied to new recurring requests (blocker — fixed) |
| March 11, 2026 | Only latest recurring booking shown in completed list instead of all of them |
| March 12, 2026 | Negative GBV for some relationships (Anna's PR reverted; Dan fixed separately) |
| March 16, 2026 | Relationship page inaccessible 100% of the time on mobile app build 26.0218.03 |
| March 17, 2026 | First prorated stay successfully processed via adjustment deposit flow |
| March 23, 2026 | Pending requests not appearing on relationship page before both parties accept |
| April 8, 2026 | Bad translations for Polish sitters in UK exposure |
| April 15, 2026 | Recurring skipped weeks appearing in "upcoming" instead of "completed" |
| April 17, 2026 | Wrong callout copy shown for repeat relationships (new relationship copy used) |

---

## 12. Jira Tickets (Key)

Full list: search Jira for `project = DEV AND text ~ "graduated take rate"`. Total known: 30+ tickets.

### Active / Backlog
| Ticket | Summary | Status |
|--------|---------|--------|
| DEV-147660 | Update YourEarningsModal for non-browsable services | Backlog |
| DEV-147659 | Provide landing page for the USA | Blocked (not started) |
| DEV-147533 | Adjust RelationshipPage for grooming/training tasks | Blocked (not started) |
| DEV-147532 | Adjust RelationshipPage components for non-browsable services | Backlog |
| DEV-146909 | Update skipped recurring and payment issue display in relationship page | Backlog |
| DEV-146715 | Tiers Page Not in the Experiment Fallback | Blocked (not started) |
| DEV-146073 | Runbook | Backlog |

### Recently resolved (selection)
| Ticket | Summary |
|--------|---------|
| DEV-146477 | Copy issue: new/repeat callout logic bug |
| DEV-146341 | Bug with recurring skipped weeks in upcoming/completed |
| DEV-145818 | Missing post codes in treatment geos (geo_mapping fix) |
| DEV-145417 | Migrate additional ~50 providers to alt mon group |
| DEV-144983 | Contacts page analytics events not firing on mobile |
| DEV-144130 | Add section in relationship page + update headers |
| DEV-143560 | Clean up `dark_launch_graduated_take_rate_model` flag |

---

## 13. Social Listening & Sitter Sentiment

### Reddit (post-launch)

**[r/RoverPetSitting — Rover lowering their commission](https://www.reddit.com/r/RoverPetSitting/comments/1rj4s2a/rover_lowering_their_commission/)**  
Sitters in Canada noticed new notifications about tiers but couldn't find details in the app (broken notification flow). Speculation that it works like Meowtel (which Rover acquired). Some cautiously optimistic; most just confused and frustrated by poor communication.

**[r/RoverPetSitting — New tiered pilot program](https://www.reddit.com/r/RoverPetSitting/comments/1rkrhyn/new_tiered_pilot_program/)**  
Most sitters strongly negative. Key concerns:
- 30% Tier 1 fee is a pay cut for one-off/vacation clients who will never reach Tier 2
- Combined with 11% owner fee: Rover's effective take on early bookings could approach 59%
- Structurally encourages blocking new clients, raising prices, or moving off-platform
- Directly compared to Meowtel, which many dislike for the same reason
- "Part-time" sitters feel disadvantaged

### Facebook (Sitter Group)
Post-launch Facebook Group post about the announcement email — mostly negative, especially in Gatineau. Jeffrey Lopez monitoring and removing comments suggesting off-platform coordination.

### Design implications of social feedback
The most actionable signal from sitter feedback: **confusion about historical earnings**. Sitters didn't know their past bookings with a client were already being counted toward their starting tier. This was addressed with a clarification push on April 21 and should inform how prominently this is communicated in future markets.

---

## 14. Open Questions & Next Steps

### US test (active)
- **US tier values:** Pending conjoint analysis results. Tiers TBD.
- **GBV backfill for US:** ~6.5M relationships for 180K providers. Management by provider_id (vs relationship_id) improved performance — feasibility being assessed.
- **Training/Grooming handling:** Design exploration complete (Bernardo, May 1). Engineering tickets created (DEV-147533, DEV-147532). Landing page copy updates needed.
- **US landing page:** Ticket DEV-147659 blocked.
- **US comms:** Mégane targeting June 2 for comms readiness.
- **US future bookings policy:** Plan to approve budget upfront to update future bookings to lower tier fee from day 1 (unlike Canada).

### UK
- Q2 2026 target
- Need serious translation/localization work before any European expansion (especially Polish sitters)
- Different new/repeat split vs North America — learnings may not transfer directly

### Analytics
- No public results data yet from Canada test
- Ion Scerbatiuc asked for tier progression report on March 18 (Mode/Datadog)
- Primary metric: %CBR
- Results section of the one-pager is still "TBD"

### Design / product open questions (from one-pager)
- Who are we targeting? High-frequency sitters? Top 2%, 5%, 10%, 20%?
- Which service types are we targeting? Targeting all = higher financial risk
- What sample size is needed to learn quickly about target segment?
- What threshold moves a relationship from new to repeat? (Booking-based is simplest but gameable)
- How do we handle sitters who move out of a test geo?

---

## 15. Key Resources & Links

### Confluence
- [1P: Alternative sitter-side fees – Graduated take rate (one-pager)](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5044109324)
- [1P: Measure impact of sitter side "fee transparency" in ledgers (pre-req)](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5351243783)
- [Func. spec · Relationship based graduated take rate](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5523570713)
- [Design exploration: graduated take rate](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5069046793)
- [Deep-dive: relationship-based](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5201496498)
- [Design exploration: relationship-based graduated take with training service](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5870324111)
- [Workshop: on top of alternative monetization](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5308743736)
- [Relationship based graduated sitter fees model – Usability Testing](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5448435566)
- [100 conversations in smoke test](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5822383408)
- [Alt. monetization models evaluation framework](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5211553909)
- [RFC: Multi-Country Tiered Pricing for Alternative Monetization](https://roverdotcom.atlassian.net/wiki/spaces/TECH/pages/5941166099)
- [Previous sitter side fee test: 5% for recurring bookings in UK/ES](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/4524113922)
- [Analytics deep dive: Sitters' earnings distribution](https://roverdotcom.atlassian.net/wiki/spaces/MARKET/blog/2025/09/18/5096604080)

### Figma
- [Main design file: DEV-136407 – Graduated take rate](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate)
  - [Canada spec](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?node-id=4451-28079)
  - [US spec](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?m=auto&node-id=18866-51821)
  - [Fee transparency pre-req screens](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?node-id=900-51929)
  - [Comms: announcements + notification center](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?m=auto&node-id=4448-25888)
  - [Earnings breakdown modal / booking details](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?node-id=6185-45582)

### Google Docs
- [Financial modelling spreadsheet](https://docs.google.com/spreadsheets/d/1RlPXBvq68cSti8vffLFEZ7AqkCMT04BVLntoN53A2eg)
- [Cross-functional messaging recommendations (Kathryn Mailler)](https://docs.google.com/document/d/1B2_N4QVhu0CceMGwFDyMh9yo-c7HLqmlAxqKF1q91Hs)
- [Comms copy doc (Brand Studio – Defne Kavas)](https://docs.google.com/document/d/19SsD74l-828GQgka3uqaIAs8ApoBViag_Id-dsAQe08)

### Slack channels
- [#proj-alt-monetization-test](https://rover.enterprise.slack.com/archives/C09KRSDT52M) — Cross-functional project channel
- [#temp-alt-sitter-side-fees](https://rover.enterprise.slack.com/archives/C09SSJWTHAM) — Engineering / day-to-day implementation

### Staging / tooling
- [Canada sitter on staging](https://staging-pr-92457.webapp.roverstaging.com/admin/people/person/become_user/1349/?brand=rover)
- [Admin: Tier configuration page (staging)](https://staging-pr-92457.webapp.roverstaging.com/admin/conversations/tierconfiguration/)
- [DataDog: Alt Mon Canada 2026 dashboard](https://app.datadoghq.com/dashboard/kqa-cab-pwz/alternative-monetisation-canada-2026)
- [Landing page (Canada)](https://www.rover.com/ca/long-term-relationships-on-rover/)

---

## 16. Team & Stakeholders

| Name | Role | Notes |
|------|------|-------|
| **Mégane Martinez** | Product Manager | Lead PM; authors most Confluence pages; drives rollout decisions |
| **Bernardo Prudêncio** | Senior Product Designer | All UX design; landing page, relationship page, comms, training edge case |
| **Kathryn Mailler** | Content Strategy / Product Writer | Messaging strategy; cross-functional copy recommendations; notification center copy |
| **Alessio Romano** | Engineering Lead | Leads the eng team; coordinates OTA releases; overarching technical decisions |
| **Alexandra Donchenko** | Software Engineer | Backend and QA; monitoring dashboard; blocker bug fixes |
| **Dan Neciu** | Software Engineer | Relationship GBV logic; multi-country RFC; tier configuration |
| **Anna Gruszka** | Software Engineer | Snapshot logic; GBV backfill; translations; geo/zip code mapping |
| **Joshua Ferriday** | Software Engineer | Tier config migrations; GBV recalculation commands |
| **Lorenzo Patras** | Software Engineer | Frontend; callout logic; snapshot update PR |
| **Gilat Blumberger** | Software Engineer | Callouts; relationship page frontend |
| **David Argelich** | Analytics | Financial modelling; sitters' earnings deep dive; geo split test pipeline |
| **Ion Scerbatiuc** | Analytics / Data | Tier progression reporting; data questions |
| **Defne Kavas** | Brand Studio / Comms | Landing page and email copy; comms updates; sitter sentiment monitoring |
| **Jeffrey Lopez** | Trust & Safety / Community | Monitoring sitter social media (Facebook, Reddit); managing public comms |
| **Parker Lewis** | Mobile | Min version check for AltMonetisationVersionCheck |
| **Dan Neciu** | Engineer | See above; also shared multi-country POC on staging |
