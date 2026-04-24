# Relationship-based graduated fees

Property: Rover
Description: Aligning sitter fees with relationship value to curb diversion and grow per‑relationship revenue.
Timeline: 2025 to today · in-flight project

<aside>
🔥

**Aligning sitter fees with relationship value to curb diversion and grow per‑relationship revenue.**

</aside>

## Summary

![Early explorations](Relationship-based%20graduated%20fees/image.png)

Early explorations

Relationship‑based graduated fees is an in‑flight, strategic project to rethink how Rover charges sitters. Instead of a flat percentage on every booking, we’re testing a model where the platform fee starts higher on the first bookings with a client and decreases as that relationship grows.

The goal is to better align fees with the value Rover actually provides (more up‑front for acquisition, less over time for trusted repeats), reduce off‑platform bookings, and increase take per relationship, while still feeling fair and understandable to top sitters.

![image.png](Relationship-based%20graduated%20fees/image%201.png)

I’m treating this as both a monetization and experience problem: how do you design a “regressive tax”‑style model that feels transparent, motivating, and hard to game, rather than arbitrary and punitive.

## **Context and problem**

Today, Rover takes a flat percentage of sitter earnings on every booking (e.g:. 20% in North America, 15% in Europe). That fee is the same for:

- A first‑ever booking with a brand‑new client, where Rover provides discovery, trust, and protection.
- A long‑standing relationship where owner and sitter know and trust each other, and are mostly using Rover as infrastructure.

We have strong evidence that:

- Frustration about fees is a core driver of diversion. Sitters often feel that “paying the same fee forever” no longer matches the value they get, especially for repeat relationships.
- A previous test reducing fees to 5% for some daytime services in ES/GB did *not* meaningfully change behaviour overall, and came with material financial risk if scaled. We learned that “just lowering the fee” is a blunt tool.

At the same time, internal analysis shows that if we could keep diverted revenue on platform, Rover’s marketplace take could be ~40% higher, and repeat‑relationship diversion is the biggest driver. The provider strategy work also set a North Star: increase take **per relationship** by ~23% over the next few years, not just per booking.

A flat fee doesn’t map well to that reality. It neither rewards the repeat behaviour we want nor charges more to those who use Rover primarily as a top‑of‑funnel lead generator and then divert.

## **Role and team**

I’m the lead product designer embedded with the alternative monetization and Sitter Experience teams on this work.

I partner closely with:

- Product on shaping the overall model, test strategy, and target segments.
- Data science on modelling candidate structures (relationship‑based, account‑based, new vs repeat) and their revenue impact under different behaviour assumptions.
- UX research on concept testing sitters’ mental models of “fair” fees, graduated structures, and relationship vs account‑based models.
- Engineering and backend teams on feasibility, GBV tracking, and how to apply fees per booking without breaking ledgers and payouts.

![image.png](Relationship-based%20graduated%20fees/image%202.png)

My contributions span:

- Co‑creating the evaluation framework for graduated models (comprehension, fairness, gaming, revenue impact, segment impact, legal footprint).
- Leading the **relationship‑based** experience exploration: milestones, GBV as threshold, relationship vs account UX, and the “relationship page” as the source of truth.
- Writing the deep‑dives that informed the 1‑pager, and defining the MVP Relationship page scope and touchpoints needed to make the model explainable.
- Helping shape the Canada pilot (vs. ES/GB) as the first test for a relationship‑based model.

![image.png](Relationship-based%20graduated%20fees/image%203.png)

## **Strategy and model options**

Before diving into UI, we mapped the space of possible models and how they line up with sitter behaviour and our principles.

We considered three main families:

- **New vs repeat**: lower fee on all repeat bookings, flat fee on all new.
- **Relationship‑based (GBV)**: fee starts higher with a specific client and drops as cumulative booking value with that client hits milestones.
- **Account‑based (GBV)**: fee starts higher for a sitter overall and drops as their total Rover earnings hit milestones.

- See ➕ design-deep dive
    
    [Design exploration: graduated take.pdf](Relationship-based%20graduated%20fees/PSD-Design_exploration__graduated_take_rate-070326-153140.pdf)
    
    [Relationship-based model.pdf](Relationship-based%20graduated%20fees/PSD-Deep-dive__relationship-based-070326-152210.pdf)
    
    [Account-based model.pdf](Relationship-based%20graduated%20fees/PSD-Deep-dive__account-based-070326-152219.pdf)
    

Using the evaluation framework we defined (Alt. monetization models evaluation framework), we assessed each along:

- Comprehension: can sitters understand and track it?
- Fairness: does it match their mental model of when Rover adds value?
- Gaming: how easy is it to exploit?
- Revenue impact: can we configure parameters that are value‑accretive even if behaviour doesn’t change?
- Segment impact: do top sitters (who drive ~75% of earnings) end up better off or worse off?

We landed on:

- New vs repeat as too simple and easy to game (e.g:. splitting bookings), and weak at directing behaviour.
- Account‑based as conceptually cleaner, but less aligned with how sitters talk about “fair vs unfair” fees (they think per client, not per year).
- Relationship‑based as the best match to sitter mental models and loyalty incentives, but also the hardest to explain and implement.

Given that, we decided to test the **relationship‑based GBV model first**, in Canada as a proxy for the US, and keep account‑based as a later, complementary option.

## **Relationship‑based model: design deep‑dive**

At its simplest, the test model looks like:

- Higher fee on the first slice of relationship GBV (e.g:. 28–35% up to a threshold).
- Lower fee once the relationship hits that GBV milestone (e.g:. 10–15% after $X), with the option of a third, “loyal” tier at an even lower rate.

Critically, it is:

- **Per relationship**: each owner–sitter pair has its own progress.
- **GBV‑based**: we use gross booking value (excluding tips and owner fees), not “number of bookings”, to avoid gaming via splitting and to better map to value.
- **Permanent within the relationship**: once you unlock a lower tier with that client, you keep it for future bookings (no recency layer in v1).

That led to a set of design problems:

- Sitters currently cannot see GBV per client or how fees are calculated per relationship across bookings and cancellations – only scattered info in ledgers and conversations.
- A multistep GBV model is conceptually more complex than “your fee is 20%”.
- Crossing a threshold mid‑booking introduces questions of fairness (split fee vs cashback).
- Different services (walking vs boarding) hit thresholds at very different speeds, which can feel unfair if not framed correctly.

I explored several options:

- Small tweaks to payment history and booking details (adding relationship GBV and fee tier).
- Reworking Rebook into a client‑centric progress view.
- Creating a dedicated **Relationship page** as the “source of truth” for a sitter–client pair, with a GBV progress tracker, fee tier, and transaction history.

We concluded the Relationship page is necessary, both to make the model understandable and to give sitters a place to “check the math” when they see a fee they don’t expect.

![image.png](Relationship-based%20graduated%20fees/image%204.png)

## **Key UX challenges and decisions**

The design exploration, usability tests, and strategy reviews surfaced a few hard UX problems:

![image.png](Relationship-based%20graduated%20fees/image%205.png)

**Model mechanics comprehension**: sitters struggled with cumulative GBV, milestones, permanent reductions, and how it applied across services. We decided to lean on progressive disclosure and anchor everything around the concept of “this relationship with this client”, not the abstract platform model.

**Perceived inequality between services**: earnings‑based milestones naturally favour high‑ticket services like boarding vs low‑ticket walking and drop‑ins. We chose to accept that, given the focus on top sitters and boarding’s revenue share, but baked it into messaging and considered longer‑term point‑systems to rebalance across services.

**Sense of agency**: sitters felt some parts of the model depended heavily on owner behaviour (whether the owner repeats) rather than sitter effort or quality. We focused UI and messaging on actions sitters control (e.g:. rebooking on platform, keeping relationships active) and avoided over‑promising.

![image.png](Relationship-based%20graduated%20fees/image%206.png)

![image.png](Relationship-based%20graduated%20fees/image%207.png)

**Threshold‑crossing bookings**: applying a blended fee within a single booking is fairest but hard to explain; cashback is easier to display but feels delayed. We recommended split‑fee as the “truthful” model for a relationship test, with backlog work to explore cashback if we layer account‑based or point‑based models later.

**Status and recency**: we explored recency layers, decay, and grace periods (monthly rolling vs yearly status), and concluded that v1 of relationship‑based should *not* include recency, to avoid sitters feeling like they’re “running in place” just to keep a status. Instead, we’ll use recency/tenure in a separate account‑based track where a status model (like airlines) makes more sense.

## **In‑flight state and what we’re testing**

At this stage (pre‑launch test in Canada), the relationship‑based model is:

- Configured as a 3‑tier GBV structure at the relationship level (exact thresholds and percentages under conjoint and modelling).
- Scoped to Canada first, as a proxy market for US (similar maturity and repeat patterns, lower financial risk).
- Supported by:
    - A Relationship page MVP (client identity, current tier, progress to next milestone, transaction history, actionable CTAs to rebook/message).
    - Contacts/Clients list as an entry point.
    - Booking‑level fee breakdowns that explain how the tier is applied.
    - System messages, banners, and a landing page to explain the model and show progress.

Result‑wise, the test is just beginning, so this case study is intentionally focused on strategy and design decisions rather than outcomes. Once we have early data, you can extend the “Impact and metrics” section similar to your other case studies.

## What I’m watching

I’ll consider this first test successful if we see:

- High comprehension and perceived fairness among top sitters, especially those in the target deciles.
- No material increase in new‑relationship diversion, despite higher upfront fees.
- Improved repeat behaviour on platform for eligible relationships, without significant price inflation.
- Clear evidence that the model can be tuned to be revenue‑neutral or better, even if behaviour change is smaller than hoped.

If those signals are weak or mixed, my next moves would be to:

- Explore point‑based adjustments to rebalance across services without losing the relationship anchor.
- Consider layering a simpler account‑based track on top for overall loyalty, while keeping relationships as the primary lever.
- Iterate on the Relationship page and communication touchpoints to close gaps in understanding and perceived fairness.