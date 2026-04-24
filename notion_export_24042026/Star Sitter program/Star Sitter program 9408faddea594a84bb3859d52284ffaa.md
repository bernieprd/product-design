# Star Sitter program

Property: Rover
Description: Driving a 10% increase in requests to top-tier sitters.
Timeline: 2023 to 2025

<aside>
⚡

**Driving a 10% increase in requests to top-tier sitters.**

</aside>

---

## Summary

Rover is a two‑sided marketplace for pet care, connecting pet parents with independent sitters.

We built Star Sitter because **sitter success and on‑platform behavior are critical to both owner experience** and Rover revenue. We had already introduced best practices (e.g:. responsiveness, reliability, quality care, on‑platform booking) and given sitters visibility via booking walkthroughs and the Sitter Insights dashboard, but we lacked a strong motivation and recognition mechanism that would actually change day‑to‑day behavior.

At the same time, off‑platform bookings (diversion) were a large strategic opportunity, with the potential to lift Rover revenue materially if we could keep more relationships on platform. Star Sitter is a provider‑level status program that rewards sitters with a track record of highly rated, reliable, on‑platform care, and routes more demand to them in search and profiles. In experiments, it increased **new‑to‑Rover revenue per customer by 4.8%** and **extrapolated to roughly $2.5M in incremental annual revenue**.

![image.png](Star%20Sitter%20program/image.png)

## **Role and scope**

As lead product designer for Rover’s sitter experience, I co‑led the design of Star Sitter from first concept through global rollout and major program iterations. This included the end‑to‑end status model, owner and sitter product surfaces, and the underlying “explainability” layer in Sitter Insights and admin tools.

I partnered tightly with marketplace PMs and data science on qualifications and experimentation, UX research, and CX/ops on scalable workflows for disputes, Trust & Safety disqualifications, and sentiment management.

## **Problem**

Rover already had work in motion around “Successful Sitters”: onboarding best practices, booking walkthroughs, and the Sitter Insights dashboard. Those efforts focused on teaching sitters what “good” looks like (e.g:. responsiveness, reliability, quality care, on‑platform booking) and giving them visibility into their performance via Sitter Insights and education flows.

Despite that, we were still seeing three core gaps:

- Owners had a hard time identifying our most reliable, on‑platform sitters in search.
- Sitters saw metrics, but didn’t feel a strong, ongoing motivation to change behavior.
- Diversion remained a large, strategic revenue leak despite education and policy work.

Internally, we framed this as needing a third lever in addition to education and visibility — a status program that could:

- Gamify the behaviors we cared about (sitters work to earn and keep status).
- Direct demand to our most reliable supply by recognizing them clearly in search and profiles.
- Start reducing off‑platform bookings in core services, by tying status to on‑platform repeat behavior and diversion‑related disqualifiers.

We delivered this over two years, from early 2023 (Sitter Insights experiments) through the April 2025 launch of the rolling Star Sitter model.

## **Solution overview**

We designed and iterated a provider‑level status program, Star Sitter, that:

- Evaluates sitters on a bundle of quality, reliability, and business health metrics.
- Badges qualified sitters in search and on profiles, with a dedicated filter for owners.
- Exposes clear, data‑backed criteria and real‑time progress in the Sitter Insights dashboard.
- Enforces hard disqualifiers for diversion and serious trust & safety incidents.
- Evolved from quarterly refreshes into a rolling, grace‑based system that better matches sitter and marketplace reality.

The rest of this case study focuses on the product development journey and how research, sentiment, and operational constraints shaped each iteration.

### **Phase 1 · Laying the foundation: Sitter Insights**

We launched the Sitter Insights dashboard with metrics like response rate, booking rate, calendar updates, profile views, and cancellations. The experiment showed small but positive improvements in conversation booking rate and non‑response (around +0.6% and ‑0.8% relative, respectively) and, more importantly, established a mental model: “this is where I understand how my business is doing”.

![Sitter Insights](Star%20Sitter%20program/image%201.png)

Sitter Insights

I joined the project as it moved into development, refining details so the shipped experience matched sitter needs and could serve as the foundation for a future status program, with the same metrics, layout, and affordances we planned to build Star Sitter on top of.

### **Phase 2 · Star Sitter Beta: proving the badge**

With the data foundation in place, we introduced Star Sitter as a beta in limited set of markets, with some key design choices:

![image.png](Star%20Sitter%20program/image%202.png)

![filter.2d1c3c1a.gif](Star%20Sitter%20program/filter.2d1c3c1a.gif)

- Provider‑level, non‑tiered status.
- Qualification based on:
    - 10+ lifetime bookings
    - Response rate, last‑minute cancellation rate, star rating
    - New client booking rate
    - Repeat clients in the last 180 days
- Badge surfacing on search cards and profiles, plus a “Only show Star Sitters” filter.
- A static landing page explaining criteria and perks.
- A Star Sitter callout in Sitter Insights that told them if they earned status, which we later evolved into a dedicated tab showing both snapshot and live qualification metrics.

![image.png](Star%20Sitter%20program/image%203.png)

The owner‑side split test showed that the badge meaningfully shifted behavior and revenue (e.g:. more conversations going to Star Sitters, higher conversion and higher average booking values), which gave us confidence to keep investing.

At the same time, CX and social sentiment surfaced early cracks:

- Sitters struggling to understand booking rate and what they could do to improve it.
- Confusion about why some “great” sitters lacked the badge while others with fewer reviews had it.
- Pain around cancellations and edge cases like low‑activity but long‑tenured sitters.

### **Phase 3 · Make it understandable: landing page and tracking iterations**

We iterated on two main surfaces: the public Star Sitter landing page and the Sitter Insights tracking tab.

On the landing page, quick usability tests showed that while perks were intuitive, sitters struggled to parse the criteria and often skimmed past key rules (“every 3 months”, “10 bookings”). We tightened the copy to use direct, instructive phrasing (e.g:. “Maintain at least a 4.9 average rating”), pulled the core rules into short, scannable bullets, and added a prominent “Check your progress” CTA that sends sitters straight into Sitter Insights instead of making them do the math themselves.

[Screen Recording 2026-03-07 at 13.01.03.mov](Star%20Sitter%20program/Screen_Recording_2026-03-07_at_13.01.03.mov)

On the tracking side, usability tests highlighted:

- Confusion around qualification periods and the dropdown.
- Difficulty understanding what “met” meant mid‑period (“If I met everything, why don’t I have the badge now?”).
- Persistent confusion about new customer booking rate.

I worked with UXR and PM to reshape the tab:

- A clearer distinction between past snapshots and current‑period metrics.
- A simple, prominent status message (“You are on track to get Star Sitter on {date}” / “Improve your {metric} to get Star Sitter on {date}”).
- Tiered “Learn more” patterns for the hardest concepts (booking rate, repeat clients, cancellations).

![Metrics, past and current period, and manual grace periods](Star%20Sitter%20program/image%204.png)

Metrics, past and current period, and manual grace periods

### **Phase 4 · Make it fair and defensible: criteria, legacying, and metric transparency**

As the program scaled, fairness and explainability became as important as raw impact.

We made three major changes:

1. **From lifetime to recent activity.** We changed the “10 lifetime bookings” rule to “5 recent clients and 2 recent repeat clients in the last 6 months”, plus quality and reliability metrics, to better reflected currently active, high‑quality supply rather than long‑ago activity.

![Not getting, not eligible or losing statuses](Star%20Sitter%20program/image%205.png)

Not getting, not eligible or losing statuses

1. **Legacying and grace.** In early refreshes we manually “forgave” some sitters who dipped on a single metric but were otherwise strong. We then formalized that as productized legacying:
    - Sitters who met all criteria last period but miss one metric can keep the badge for one grace period, as long as they remain active (5+ clients in the last 6 months).
    - Trust & Safety and diversion still cause immediate disqualification.
    
    I helped thread this into all surfaces: Sitter Insights, the landing page, admin snapshot tools, and CX workflows, so our policies matched what sitters saw.
    

![Lost and legacy statuses](Star%20Sitter%20program/image%206.png)

Lost and legacy statuses

![Period selection in Star Sitter tab](Star%20Sitter%20program/image%207.png)

Period selection in Star Sitter tab

1. **Rethinking booking rate and Contact More Sitters.** Analysis showed that Contact More Sitters — a feature that encourages owners to message additional “backup” sitters after their first request — was disproportionately hurting high‑value sitters’ new client booking rate, due to lower owner intent on those extra requests. We recommended and implemented excluding those unbooked backup requests from the Star Sitter booking rate denominator, while keeping booked ones as positive signal. This moved a cohort of long‑tenured, high‑client sitters over the 33% threshold without lowering the bar for weaker supply.

To support all of this, we invested in transparency:

- A dedicated Star Sitter tab in Sitter Insights showing snapshots at refresh and, later, in‑progress metrics.
- Clear, status‑specific emails and in‑product copy for gaining, maintaining, legacying, and losing status.

### **Phase 5 · Scale and automate: from quarterly refreshes to rolling status**

Quarterly refreshes gave us stability at launch, but over time the trade‑offs became clear:

- Sitters experienced long delays between behavior change and status change.
- CX saw predictable ticket spikes around refresh days.
- Engineering and data science had to orchestrate a fragile, manually monitored batch process that only got heavier as we expanded markets.
- Status drifted out of sync with seasonality and demand changes.

We partnered across product, engineering, DS, and ops to move to a rolling model:

- Sitters earn Star Sitter as soon as they meet the criteria, after a short holding period.
- Dropping below criteria puts them into a three‑month grace period; if they have not recovered by the end, they lose status.
- Trust & Safety and diversion remain immediate disqualifiers.
- Notifications shift from quarterly blasts to more contextual messaging (e.g:. when earning status, when 30 days from losing it).

![Live status on Sitter Insights](Star%20Sitter%20program/image%208.png)

Live status on Sitter Insights

On the design side, this allowed us to dramatically simplify the Sitter Insights UX:

- No more quarterly qualification period dropdowns or confusing timeframes.
- A single, real‑time picture of where sitters stand against each metric.
- A status model that better matches sitter mental models (“if I improve, I see the effect soon”) and reduces operational spikes.

## **Outcomes**

Across experiments and rollouts, Star Sitter drove measurable impact on both owners and the business:

- Owner‑side experiments in Star Sitter markets showed a 4.8% increase in revenue per new‑to‑Rover customer, driven by higher average booking values and nearly 1 percentage point higher conversion.
- At full scale, the core geo‑split extrapolated to roughly $2.5M in incremental Rover revenue, assuming we applied the tested uplift globally.
- Search behavior shifted toward sitters with stronger reliability and on‑platform habits, as more owner conversations flowed to Star Sitters.
- Over time, booking‑rate‑related Trust & Safety and CX contacts dropped as we refined criteria (e.g:. Contact More Sitters adjustments), added grace periods, and exposed both snapshot and live metrics in Sitter Insights and admin.

Just as importantly, we now have a status program that is:

- Flexible enough to support future tiers or additional perks.
- Technically sustainable to run globally without manual quarterly interventions.

## **What I’d do next**

If I had another iteration cycle, I would focus on:

- Better recognition for established, relationship‑heavy sitters whose value is more about repeat care than new client intake, while tightening early‑stage qualifications in line with Trust & Safety data that shows sitters under ~3–4 months on the platform are consistently the highest‑risk group for incidents.
- Tighter linkage between status and other sitter‑side incentives (e.g:. pricing, loyalty‑style rewards) while keeping the core badge clean and trustworthy.
- More nuanced owner‑side education about what Star Sitter guarantees and what it doesn’t, to keep expectations healthy as adoption grows.
- Giving sitters clearer visibility into the predictability and value of status itself — for example, showing how Star Sitter typically affects request volume and mix in their area — so they can better understand what they’re working toward and make informed decisions about their business.

![image.png](Star%20Sitter%20program/image%209.png)

Star Sitter began as a single badge, but the design challenge was really to create a living, explainable system that balances sitter motivation, owner trust, operational reality, and marketplace health. That lens drove each iteration of the program.