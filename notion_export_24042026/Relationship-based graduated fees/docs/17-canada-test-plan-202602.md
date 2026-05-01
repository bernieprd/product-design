# 202602 Canada Graduated Take Relationship

**URL:** https://roverdotcom.atlassian.net/wiki/spaces/RTEST/pages/5463506962  
**Author:** David Argelich | **Last modified:** Mar 10, 2026

---

# Executive summary

---

\[A short intuitive narrative of the experiment analysis results, the roll out / back decision and estimated $ return, written after test analysis completion\]

---

Product manager: Mégane Martinez

Product designer: Bernardo Prudêncio

Analyst: David Argelich

# Proposal

---

## Intro

We believe the 20% flat sitter side fee is suboptimal primarily because:

* The largest value that Rover delivers to sitters is at a beginning of a relationship by providing them a new client. After that, Rover's perceived value diminishes but not the %fee.
* It is harder to divert new bookings (as opposed to repeat bookings) since the owner and sitter have to interact on the platform and "punish" sitters who do so. Therefore, we believe we should front-load our take rate at the beginning of a relationship.

**Hypothesis overview:**

* **Based on** feedback from sitters and the fact that our top providers get more than half their earnings from repeat bookings

    **We believe that** by setting up a take structure that more closely maps how and when Rover delivers value to sitters

    **We will** increase top sitters satisfaction and increase Rover take

    **We'll will be successful if**

    * Providers' success:

        * Most loyal sitters are better off financially (e.g making more money on Rover than before) and satisfied with the new structure

    AND

    * Rover's success: The new relationship booking volume is maintained

**One-pager / functional spec link:** link

**1-pager:** https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5044109324

**Take structure:**

| | **Start** | **End** | **%fee** |
| --- | --- | --- | --- |
| **Tier 1** | $0 | $499 | 30% |
| **Tier 2** | $500 | $999 | 15% |
| **Tier 3** | $1000 | - | 10% |

**UX - Main touch points:**

| **NEW - Relationship page** | **UPDATED - Contacts list (prev. Rebook)** | **Conversation details** | **Comms** | **Service settings** |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Test basics

This section should ideally be completed alongside the functional spec, to help engineering know how to set up the experiment during development.

| Test type | Learnings Gathering - Geo Split Test |
| --- | --- |
| Platform(s) | All Platforms |
| Market(s) | Canada |
| Target / actual testing dates | Phase 1: Smoke Test in 4 geos (Saskatoon, Regina, Nanaimo and Quebec) started on 4th of March 2026. Phase 2: Treatment Markets in 3 geos (Ottawa-Gatineau, Vancouver and Calgary). Pending to decide the start date. Tentative 16th of March 2026. Duration of the test will be between 8 and 10 weeks. |

# Test plan

---

## KPIs

* **Powering metric:** Absolute number of bookings where the need had a conversation with a new provider for that owner.
* **Decision making metrics:**

    * Owner BtB - might be impacted because of sitters being less incentivised to book on platform or to book new clients
    * Owner StR - might be impacted because sitters increase their prices to compensate the increased fee

* **Relative minimal detectable effect:** 5-6% MDE (see https://docs.google.com/document/d/1Pcj07B0ea-x2B_nX9dBO-BWy-A3cmjkd6DNZPjGIzXg/edit?tab=t.0)
* **Required sample size:** -
* **Expected test length:** 8 to 10 weeks
* **Secondary metrics of interest:**

    * Diversion related metrics - sitters might try to divert more often to avoid higher fees

        * %CBR for Sitters
        * M&G to book
        * Diversion triggers (paying methods, telephone blocking…)
        * Cancellation Rate
        * FUN (Follow-Up Need) Rate

    * Price Increases - Sitters might increase prices to compensate the higher fees

        * Number of Sitters that increased their price
        * Standard Rate Pre vs at the end of the experiment

    * Sitter Churn

        * Calendar Availability - less interest in Rover or more diversion happening off-platform
        * Away from service types - only accepting repeat customers (sitters might not want to be available for new relationships due to fees increase)
        * % of matriculation for new sitters - less interest in Rover

    * Sitter Sign-up

        * New Sitters Sign-Up Rate

    * Health metrics

        * Gross booking value
        * Take
        * Search to request
        * Need to book
        * ABV

**Test length estimate workings:** https://docs.google.com/document/d/1Pcj07B0ea-x2B_nX9dBO-BWy-A3cmjkd6DNZPjGIzXg/edit?tab=t.0

## What is the minimum that needs to be seen for the variant(s) to be rolled out?

* Is statistical significance of the primary metric necessary?

    * We've designed this as a learning experiment. We're leaning on our primary metric because it reacts quickly; if we used something like rebooking rates, we'd be waiting months for a result. Since the new model brings a 7% increase in take, it effectively sets our 'break-even' point. As long as we don't see a statistically significant drop larger than that 7%, we can comfortably say the model isn't hurting the business for new relationships. In that case, the focus shifts to our secondary metrics to measure the broader impact on the marketplace and understanding long term impacts in future bookings within the relationships.

* How might secondary metrics, including those that are qualitative, be taken into consideration in the event of a non stat sig primary metric?

    * This is a big product shift that could change the marketplace's behaviour. We might see higher prices or an effect where established sitters dominate because it's harder for new ones to build volume at higher rates. New owners might discouraged to start new relationships if it feels less attractive now. We need to build a full narrative to track these shifts and understand the actual tradeoffs within our marketplace.

* Is this a milestone in a larger initiative, and a necessary step to continue?

    * No.

## Under what circumstances might the test be ended early?

* How much of an estimated decline, and accompanying confidence in those estimations, in any marketplace metric is acceptable?

    * We're keeping a close eye on the numbers, but because Canada is a smaller market, we expect some noise and natural fluctuations in a geo-split. Unless the data looks truly disastrous or we see a massive spike in negative sitter sentiment, the plan is to stay the course for the full 10 weeks to make sure our learnings are actually valid.

* What qualitative data could be used to complement the quantitative results in a early end decision?

    * We're going to be proactive about tracking the status monitoring social media and running in-app surveys to catch sitter feedback as soon as possible. We're expecting a fair amount of pushback on this, so we want to make sure we're actually listening to the specifics and staying ahead of the narrative. This is also a big change in the product so we want to be aware of possible bugs or bad UI experiences that sitters might be facing.

**Dashboard:**

[Phase 1: Smoke Markets Mode Dashboard](https://app.mode.com/editor/rover/reports/92d7dd246354/presentation)

# Narrative (test results)

---

* Narrative of the analysis

    * Quantitative results
    * Qualitative results

* Conclusion

    * A summary of the learnings

* Recommendation / next steps

    * Should the new experience be rolled out / back / iterated on?

Include additional tables, charts, metrics that complement the analysis but do not contribute to the main narrative

## Investment & estimated annual return

**Investment**: To be filled out by the PM.

**Annual return**: To be filled out by the analyst.

**Initiative durability classification:** To be filled out by the PM.

**Link to ROI Calculation:** \[Make of copy of this [template document](https://docs.google.com/spreadsheets/d/1s1I7WEltcoPXzHlpOw0nNWRGSBRFVAFMWC5Mku81VMs/edit?usp=sharing) and complete it with your experiments results, add a link to your completed document here\]

**Investment:** \[$x\]

**Annual return:** \[$x ± confidence interval, x% ± confidence interval, bookings ± confidence interval\]

**New Aggregate Relative Impact:** \[x% ± confidence interval, $x ± confidence interval, bookings ± confidence interval\]

**Repeat Aggregate Relative Impact:** \[x% ± confidence interval, $x ± confidence interval, bookings ± confidence interval\]

**Initiative durability classification:**

| Classification | unselected | Low | Medium | High | Very high | Not applicable |
| --- | --- | --- | --- | --- | --- | --- |
| Selection | x | | | | | |

# Issues & bugs

---

All tests that experienced experiment related issues should go through the post mortem process. This helps gather learnings and improve the experimentation process.

Instructions on this process can be found here: https://roverdotcom.atlassian.net/wiki/spaces/TECH/pages/3327951814

* **Were there any issues that arose complicating the testing / analysis process that we can learn from?**

    * \[Details including bucketing related issues, including necessary test restarts\]
    * \[Link to any applicable post mortem or other documentation on bugs\]
