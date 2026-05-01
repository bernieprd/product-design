# 100 conversations in smoke test

**URL:** https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5822383408  
**Author:** Bernardo Prudêncio | **Last modified:** Mar 12, 2026

---

This analysis is based on a sample of 100 conversations pulled from Rover's admin tools. Dia reviewed each thread end‑to‑end and tagged them against a few key themes: how people coordinate logistics (e.g: meet & greets, timing, hand‑offs), how they talk about payment and Rover's booking mechanics, and where behavior starts to lean toward off‑platform coordination.

**Dia was also explicitly looking for any organic mentions or signals related to tiered incentives and rewards** (e.g: different fees or benefits based on volume, loyalty, or relationship depth). 

## Conversation Links (Admin)

[https://www.rover.com/admin/conversations/message/?conversation__id__exact=116898341](https://www.rover.com/admin/conversations/message/?conversation__id__exact=116898341)  
[https://www.rover.com/admin/conversations/message/?conversation__id__exact=116901794](https://www.rover.com/admin/conversations/message/?conversation__id__exact=116901794)  
[https://www.rover.com/admin/conversations/message/?conversation__id__exact=116899381](https://www.rover.com/admin/conversations/message/?conversation__id__exact=116899381)  
[https://www.rover.com/admin/conversations/message/?conversation__id__exact=116882665](https://www.rover.com/admin/conversations/message/?conversation__id__exact=116882665)  
[https://www.rover.com/admin/conversations/message/?conversation__id__exact=116882976](https://www.rover.com/admin/conversations/message/?conversation__id__exact=116882976)  
_(100 conversations total — see page for full list)_

## High‑level what these conversations are about

In short, these are classic pre‑booking, booking, and post‑booking coordination threads, often very friendly and relationship‑oriented, with some in English and a substantial number in French (mostly Québec French).

The exchanges are almost entirely about routine sitter–owner coordination:

* One‑time or recurring booking requests for: Boarding, doggy day care, house sitting, drop‑in visits, and dog walking
* Confirming availability and dates
* Logistics around meet & greets: Exchanging addresses, parking instructions, how to access the home
* Day‑of details: Drop‑off / pick‑up time adjustments, real‑time updates
* Pet care instructions: Feeding quantities and routines, behavior and needs, crate vs pen, walks vs yard time
* Health / comfort updates
* Payment status and Rover mechanics: Owners asking if they've paid for all days, sitters explaining Rover mechanics

## Mentions of tiered fees or rewards

Based on the conversations:

* There are **no explicit mentions** of:
    * Tiered or graduated (volume) fees
    * Different fee "tiers" based on experience, rating, or booking value
    * Rewards programs, loyalty schemes, or sitter/owner rewards
    * Bonus structures, discounts for frequency, or formal promo programs

The closest things to "money talk" are:

* Owners and sitters clarifying **total price** for a booking ("it says 560", "should be $300 now", etc.).
* A few mentions of **how/when payment is taken**: Rover taking payment up front and paying sitter after the stay, worry about being charged for the correct number of visits.
* Occasional off‑platform hints: One or two references to paying via e‑transfer / cash when coordinating by SMS, but those are about _method_, not structured incentives.

None of the conversations show sitters or owners talking about differentiated platform fees, adjusted service fees, or additional earnings based on tiers or reward systems. All pricing is treated as a flat per‑service outcome of the standard Rover flow.

## Other patterns that might matter 

* People are very comfortable **negotiating logistics**, not pricing: Lots of "time is flexible," "any time works," "I can come earlier/later," "we can skip Wednesdays," etc. Very little negotiation of the actual price point.
* There's frequent **off‑Rover style language** inside Rover messages: Talk about paying "separately for Saturday" or paying via non‑Rover means, but not in the context of a formal discount or reward.
* High trust, relationship‑driven patterns: Many repeats: "so happy you're available again," "we'll see you Wednesday," "the cats/dogs will be very happy to see you again." These are prime candidates for loyalty‑style incentives, but the users themselves never reference such a program.

Thematically these are rich in logistics, care, and relational detail, but as far as the actual text goes, **there's no organic user language about tiered fees or rewards programs** — only standard booking/payment flow and a bit of improvisation around it.

---

### **Meet & Greet Logistics** 

**What people actually coordinate**

* "Can we do Monday at 2?" / "Tomorrow at 3pm?" / "Any time works next week."
* Address + access: Exact street address or condo number, parking instructions, which entrance
* Home walkthrough expectations: Sitters explicitly prefer meeting at the owner's place
* Role of the M&G: For sitters: evaluate behavior. For owners: vibe check, confirm sitter is "a real person."

**Behavioral signals**

* High willingness to invest time; M&Gs often function as a _soft negotiation_ moment.

**Opportunities**

1. **Codify the ritual**: Productize common patterns (address, parking, pet intro, key handoff) into a structured pre‑M&G checklist.
2. **Clarify outcomes of M&G**: A nudge to confirm/decline with clear states after a M&G.

---

### **Payment Status & Rover Mechanics** 

Money talk is surprisingly _narrow_ and mostly reactive. It's rarely about price level; it's about mechanics and correctness.

**What they're trying to understand**

* "Did I pay for all days?" — Owners double‑check whether an extra day got included
* Expired or modified requests: Expiration, Modifications
* How Rover's money flow works: "Rover requires the payment. I think it is a hold until the stay is complete."

**Patterns / pain points**

* **Mental model mismatch**: Owners often think in "trip" language. Rover thinks in service units.
* **Modification opacity**: "I was charged for 2 visits but I counted 3" → the user has no visible, human‑readable "diff".
* **Authority gap**: Sitters sometimes explain platform rules from memory, which is mostly right but informal.

**Opportunities**

1. **Clear booking diffs**: Whenever a sitter modifies a booking, show owners a summarized "Before / After" section.
2. **Inline "how payment works" explainer**: A small, consistent UI block explaining the payment hold and timing.
3. **Status cues for expiring / expired requests**: Make the 48‑hour expiry state more visible.

---

### **Diversion & Off‑Platform Gravity** 

This is the most interesting part, and it's subtle. Nobody writes "let's go off Rover," but the _gravity_ is clearly there in how they behave.

**Where the off‑platform pull shows up**

* **Payment method drift**: Some SMS threads explicitly mention e‑transfer or cash.
* **Relationship + routine**: Long‑running relationships become very personal, almost friend‑like. Rover's perceived value then is mostly insurance/coverage and record of dates/payments.
* **Granular changes handled via text, not bookings**: Owners and sitters adjust days, times, and sometimes full trips purely in SMS.
* **Busy or complicated bookings**: When there are lots of small changes, Rover's booking UX can feel like friction.

**Why they stay on platform despite all this**

* Formality and reassurance: "she's booked in," "it went through," "I've paid and confirmed."
* Clear history: both sides can look back at exact dates and services.
* Structure for big chunks of work (long boarding stays, multi‑day drop‑ins).

As the relationship matures, Rover's **perceived marginal value** drops for both sides, and if the tooling doesn't keep up with the complexity of that relationship, diversion becomes rational.

**Opportunities**

1. **Make repeat relationships a first‑class product entity**: A "Relationship view" that shows history, suggests rebooking patterns, and makes modifying series trivial.
2. **Flexible but structured change management**: Let people add/remove single days in a recurring pattern quickly.
3. **Safe, sanctioned alternative payment flows**: A quick "add $X tip / add one extra visit" inline action.
4. **Make protections more visible at the moment of temptation**: Reinforcing messaging around coverage if something goes wrong.
