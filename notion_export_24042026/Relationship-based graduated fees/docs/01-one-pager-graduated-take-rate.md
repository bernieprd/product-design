# 1P: Alternative sitter-side fees – Graduated take rate

**URL:** https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5044109324  
**Author:** Mégane Martinez | **Last modified:** Apr 24, 2026

---

# Summary

* **Goal:** Map the sitter side fee to the value Rover delivers to sitters
* **Problem:** 
    * Rover takes 20% of sitter earnings from each booking (15% in Europe). Previous research has led us to believe that diversion is in part due to sitters wanted to avoid paying platform fees.
    * We also believe the flat sitter side fee doesn't match the value that Rover delivers during a sitter-owner relationship lifecycle where most of the value is delivered at the beginning when acquiring the client and relying on Rover to act as as intermediary.
    * We've learnt from past research that the existence of fees in a driver of diversion
        * We also _believe_ based on social listening that some sitters find the value of the fee too high particularly considering that it remains the same from the first booking onward
* **Solution:** Test a relationship based graduated sitter side fee structure in Canada and maybe in the UK
* **Roll-out plan:** 
    - [x] Canada - Smoke test: March 4th, 2026
    - [x] Canada - Full test: March 24th, 2026
    - [ ] (Tentative) US - Full test (Chicago, Denver, Seattle): June 16th, 2026
    - [ ] UK - Q2

* **Results:** TBD

# Resources

* [Previous sitter side fee test: 5% for recurring bookings in UK and dog walking in ES](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/4524113922)
* [Modelling](https://docs.google.com/spreadsheets/d/1RlPXBvq68cSti8vffLFEZ7AqkCMT04BVLntoN53A2eg/edit?gid=1381814157#gid=1381814157)
* [Analytics deep dive](https://roverdotcom.atlassian.net/wiki/spaces/MARKET/blog/2025/09/18/5096604080)

# Opportunity - Why?

## Goal

The Sitter Experience team's objective is to increase owner LTV by improving sitters' experience and satisfaction with Rover. One of the main pain points for sitters is the Rover fee.

In a [previous test](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/4524113922) we tried decreasing the sitter side Rover from 15% to 5% for:

* All recurring bookings in the UK
* All dog walking bookings in ES

Four months into this test we haven't gotten a signal of sitters' overall behavioural change and the sample sizes prevent us from understanding the impact by sitter segments with confidence.

Our goal is to get another data point that helps us understand the extent to which reducing the sitter fees on repeat bookings can drive an increase in repeat bookings. 

We acknowledge that it's unlikely a substantially lower sitter fee percentage on repeat bookings alone will result in overall higher LTVs and therefore we are planning to include in this test an increase of the sitter side fee on new relationships bookings (threshold TBD). As such, we are trying to move towards a sitter side fee structure that better matches the value Rover delivers along the sitters' lifecycle on Rover which is mostly upfront e.g getting them access to clients.

## Problem statement

Rover takes 20% of sitter earnings from each booking (15% in Europe). The fee amount is the same regardless of how many bookings you've done on the platform, or how long you've cared for a particular client's pets.

While research tells us that diversion is in part due to sitters wanting to avoid paying fees in general, it doesn't tell us much about the 20% (or 15%) specifically being the problem.

Our belief that the 20% (or 15%) flat fee is a suboptimal sitter fee comes from (1) social listening and (2) our internal assessment of the value delivered to sitters for new bookings vs repeat bookings.

(1) - Over time sitters feel like they're getting less and less value from Rover whilst still paying a consistently high price. This is particularly true in 'repeat relationship' bookings where the owner and sitter know and trust each other.

(2) - Our internal assessment of the value delivered by Rover for new bookings is ∼76% of the booking value but only ∼18% for repeat bookings. While those numbers are only estimates they differ enough to give us confidence the value of Rover decreases as a relationship move from new to repeat.

## Customer Feedback

> [Images: 3 screenshots of sitter feedback/social listening — see images folder]

## Sitters' earnings distribution & insights

[See Analytics deep dive page for full detail]

Key findings:
* The **top 20% of sitters generate between 73-77% of total earnings** - consistent across geos
* **North America (US & Canada):** Top-decile sitters are **repeat-driven** (63% US, 59% CA earnings from repeat clients)
* **Europe (GB & EU):** Top-decile sitters are **acquisition-driven** (52% GB, 41% EU from repeat clients)
* Top earners make most money from Boarding (53%) in the US
* Previous UK test: only Doggy Day Care showed stat. sig. positive impact (+16.9% recurring units)

## Hypothesis

**Based on** feedback from sitters and the fact that our top providers get more than half their earnings from repeat bookings

**We believe that** by setting up a take structure that more closely maps how and when Rover delivers value to sitters

**We will** increase top sitters satisfaction and increase Rover take

**We'll will be successful if:** 
* Providers' success: Most loyal sitters are better off financially and satisfied with the new structure
* Rover's success: The new relationship booking volume is maintained

## Fee Structure (Proposed – Canada)

| | Start | End | %fee |
|---|---|---|---|
| **Tier 1** | $0 | $499 | 30% |
| **Tier 2** | $500 | $999 | 15% |
| **Tier 3** | $1000 | - | 10% |

## Core Principals

1. In-your-faceness: Impossible to miss communication and transparency to maximise awareness
2. Value simplicity of the set up to maximise comprehension
3. Make sure we have enough sample size from the sitter segments most likely to react
4. Value speed: design the test in a way that we get learnings quickly
5. Make sure new bookings are not hurt beyond a certain threshold (TBD)
6. Think about bad actors: the test design should limit the risk of gaming
7. Make sure we learn something that will inform the next test
8. Market fairness: same fee structure within a given market
9. [Could] Mitigate financial risk: we will not test in the US (yet)

## Roll-out plan

- [x] Canada - Smoke test: March 4th, 2026
- [x] Canada - Full test: March 24th, 2026
- [ ] (Tentative) US - Full test (Chicago, Denver, Seattle): June 16th, 2026
- [ ] UK - Q2

## Social Listening (Post-Launch)

**r/RoverPetSitting – "Rover lowering their commission"**: Sitters noticed notifications about tiers but couldn't find details. Speculated it works like Meowtel. Some cautiously optimistic; most confused by poor communication and broken notification flow.

**r/RoverPetSitting – "New tiered pilot program"**: Mostly strongly negative. Key concerns: 30% Tier 1 is a pay cut for one-off/vacation clients; combined with 11% owner fee Rover's total take approaches 59%; model structurally encourages blocking new clients or going off-platform.
