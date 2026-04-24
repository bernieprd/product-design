# Reducing platform diversion

Property: Rover
Description: Protecting $5M in revenue by enforcing platform communication.
Timeline: 2022 to 2023

<aside>
⚡

**Protecting $5M in revenue by enforcing platform communication.**

</aside>

---

## Summary

As part of Rover’s diversion strategy, I led design on two complementary initiatives: a cross‑platform phone number blocking system and an in‑product Community Guidelines modal.

Together, they reduced the ability and incentive to move conversations off Rover while maintaining neutral all‑up booking rates and delivering an estimated combined upside of roughly **$5M+ in protected annual Rover revenue (marketplace take)** in the highest‑risk segments.

## Program context and strategy

Rover estimated that more than **20% of potential marketplace revenue was being lost to off‑platform bookings** — relationships that started on Rover but completed elsewhere. Research and internal analysis highlighted two critical levers.

First, norms and expectations. Many users did not fully understand that Rover expects bookings and business to stay on the platform, or why that matters for safety, protection, and fraud prevention.

Second, mechanics and enforcement. Even when users knew the rules, nothing in the product stopped them from sharing direct contact information and moving off Rover.

We framed a simple program:

- Use Community Guidelines inside the product to set expectations, tie behaviour to safety and protection, and make “book on Rover” a clear norm.
- Use phone number blocking and masking across app, web, and SMS to enforce those expectations at the moment of action, without harming overall booking rates.

We measured each layer independently and together, looking at conversation booking rate, repeat behaviour and on‑platform rebooking, and estimated annual revenue in high‑risk segments.

## My role

I was the lead product designer for both projects.

For the Community Guidelines modal (app and web), I partnered closely with Content Design on the messaging and owned the experience and triggering strategy.

For phone number blocking (apps, web, SMS), I designed the end‑to‑end UX for blocking and masking flows, and worked closely with data science and engineering on detection constraints and a staged experimentation strategy.

At the program level, I connected the dots between the two features: positioning them as parts of a coherent diversion‑reduction story, aligning copy and expectations, and making sure we were measuring impact in comparable ways.

## What we shipped

![image.png](Reducing%20platform%20diversion/image.png)

### Community Guidelines

We introduced a full‑screen modal for sitters and owners that:

- Explains expectations — keep communication and bookings on Rover.
- Frames why — safety, Rover Guarantee, fraud protection, and 24/7 support.
- Links to the full Community Guidelines and Terms of Service.

We targeted it as follows:

- Existing users with at least one request saw it on their next log in.
- New owners saw it when sending their first request.
- New sitters saw it after completing booking onboarding, when they next opened the app.

Users had to explicitly tap “Got it” to dismiss. If they closed the app instead, the modal re‑appeared on the next trigger.

Read all in:

[Community guidelines](Reducing%20platform%20diversion/Community%20guidelines%20314332846c008046a93dda49beb71448.md)

### Phone number blocking

On app, web, and mobile web:

- For new sitter–owner relationships, any personal phone number shared before a booking was blocked in messages.
- A modal explained that phone numbers can’t be shared before booking, why staying on Rover matters, and that support numbers are still allowed.
- Once a booking was confirmed between that pair, the block was lifted.

On SMS:

- Phone numbers in SMS replies were detected and masked.
- Both parties received a system SMS and an in‑thread message explaining that the number was masked and why.

We added a couple of special rules:

- Rover support numbers are always allowed.
- Rover relay numbers are blocked from being re‑shared outside their original relationship, since they are not functional for other users and can cause confusion.

![image.png](Reducing%20platform%20diversion/image%201.png)

Read all in:

[Phone number blocking](Reducing%20platform%20diversion/Phone%20number%20blocking%20314332846c0080469828d85d0c18a05c.md)

## How we worked

We treated the two features as separate experiments with a shared strategy.

For both, we deliberately set the bar as **“do not hurt booking rates or critical funnel steps”** rather than chasing a huge lift. If we could prove neutrality or better, that was enough to justify rollout.

We also took a segment‑first approach, focusing heavily on:

- Conversations where a phone number was detected and blocked.
- Activated sitters and repeat owners, who are both more valuable and more likely to divert.
- Conversations where either or both sides had seen the Community Guidelines modal.

We kept a tight design–data loop:

- For Community Guidelines, we probed how CBR and revenue changed for new vs repeat owners, activated vs new sitters, and mixed combinations.
- For phone blocking, we iterated detection (regex, text‑to‑numbers, adjacent numbers, multi‑line exploration) based on real avoidance tactics we saw in the data.

![image.png](Reducing%20platform%20diversion/image%202.png)

## Impact and why it mattered

Together, the Community Guidelines modal and phone number blocking showed that we could enforce on‑platform communication without hurting overall conversion, and unlock meaningful upside in the riskiest areas.

Across the marketplace, booking rates stayed neutral when we introduced these protections — in plain terms, we didn’t make it harder for people to successfully book.

In the segments that matter most for diversion risk:

- The Community Guidelines modal increased the likelihood that conversations between experienced providers and repeat customers turned into bookings.
- Phone number blocking increased booking rates in conversations where people tried to share their numbers and were stopped.

Financially, when you add up the uplift from both projects in those higher‑risk segments, the combined impact is on the order of **$5M+ in protected or incremental annual Rover revenue**.

So the simple story for someone with no Rover context is: by setting clearer expectations and enforcing on‑platform communication, we kept money and relationships inside the product, at scale, without breaking the booking experience.

## What I took away

Users respond better to clear expectations plus fair guardrails than to silent enforcement. The Community Guidelines work made the phone block feel more principled and less surprising.

Protecting revenue in a marketplace looks like a series of small, well‑measured interventions rather than a single big bet. Both features were individually “boring” but meaningfully additive.

For diversion, success is more about shifting behaviour at the edges than achieving 100% prevention. The most determined people will still find ways; the goal is to move the majority of relationships into safer, on‑platform patterns.