# Alt. monetization models evaluation framework

**URL:** https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5211553909  
**Author:** Mégane Martinez | **Last modified:** Oct 28, 2025

---

This document aims at providing a systematic approach to evaluating and comparing alternative monetization models. While the specific context in which a model is evaluated may lead us to consider additional criteria or disregard some others we do believe there is a subset of dimension a model should solve for to be considered suitable for testing.

# Critical criteria

**Comprehension:** Are our users likely to understand the proposed model? Will they have access to the information they need when they need it?

**Fairness**: Does the proposed model aligned with what users consider "fair"? We acknowledge there is no objective answer to that question. What we want to capture is users' perception.

**Gaming:** Is the proposed model easy to abuse or subvert by bad actors?

**Revenue impact:** While the specifics behind this dimension may change as the company context evolves we will always want to understand how the proposed model will impact revenue in case the "expected" behavior change does not happen

**User impact by segment:** Similarly, the target audience for alternative monetization models may differ depending on the test. What remains true is understanding how the target audience will be financially impacted by the proposed change.

**Legal footprint:** Will the proposed model put us on better regulatory footing, and if so why is that true? At a minimum is should not negatively impact it.

## Evaluating graduated fee models

Using this framework to evaluates the relationship based and sitter account based graduated fee models.

### Relationship based model with GBV threshold

* In this version we would increase the sitter-side fee at the start of a relationship with a new pet owner and decrease it after the relationship reaches a given milestone
* The milestone will be based on the relationship's GBV, once the target GBV is achieved the sitter will unlock and retain a lower fee with the potential to create multiple tiers and associated fees
* **Example of a candidate relationship based graduated structure:**

    * 28% fee on the first $150 USD of a relationship GBV - 10% fee on all bookings afterwards.

### Sitter account based model with GBV threshold

* In this version we would increase the sitter-side fee at the start a sitter's lifecycle and decrease it after they reach a given milestone in total Rover earnings.

    * Potentially would have to time bound the earnings included in the calculation to avoid giving a reduced fee to sitters who reached the threshold years prior and are since then operating very little on platform.

* **Example of a candidate sitter account based graduated structure:**

    * 28% fee on the first $1000 of total Rover earnings then 20% on all earnings between $1001 and $10,000 and 10% on all earnings after $10,000
    * Add a time consideration would mean sitters would have to reach the given level of earnings within a certain timeframe e.g last 12 months to retain the lower fee

|  | **Relationship based model with GBV threshold** | **Sitter account based model with GBV threshold** |
| --- | --- | --- |
| **Comprehension** | Under Evaluation - While we believe we can [design a sitter experience](https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5201496498) that will support Sitters' understanding of the new fee structure we have not yet tested it with users. **What needs to be true**: PENDING - User research shows high comprehension of the model among (top?) sitters **Next steps:** User research | Under Evaluation **What needs to be true**: PENDING - User research shows high comprehension of the model among (top?) sitters **Next steps:** Design exploration |
| **Fairness** | Under Evaluation - While we believe using a common GBV target that all relationships can realistically achieve ensures some level of fairness across providers, sitters' perception will determine how the model scores across this dimension. Note: We acknowledge using a GBV target puts cheaper services types, cheaper geos and new sitters who have lower prices at a disadvantage. Given our target is top sitters whose >50% earnings come from Boarding we consider it an acceptable tradeoff. **What needs to be true**: PENDING - User research shows (top?) sitters consider the model fair **Next steps:** User research | Under Evaluation - While we believe using a common set of GBV targets that all sitters can theoretically achieve ensures some level of fairness across providers, sitters' perception will determine how the model scores across this dimension. Note: We acknowledge using a GBV target puts cheaper services types, cheaper geos and new sitters who have lower prices at a disadvantage. Given our target is top sitters whose >50% earnings come from Boarding we consider it an acceptable tradeoff. **What needs to be true**: PENDING - User research shows (top?) sitters consider the model fair **Next steps:** User research |
| **Gaming** | Validated - Using a GBV target leaves little room to gaming. Until the target amount transits through the platform that relationship won't benefit from lower sitter side fees. **Next steps**: None at this time | Validated - Using a GBV target leaves little room to gaming. Until the target amount transits through the platform that relationship won't benefit from lower sitter side fees. **Next steps**: None at this time |
| **Revenue impact** | UNDER EVALUATION - Modelling has shown that there is a set of parameters (e.g 28%/10% with a $180 GBV target) where Rover's revenue would remain neutral or increase assuming we observe no behavioral change **What needs to be true**: VALIDATED - We've identified a set of parameters where Rover's revenue would remain neutral or increase assuming we observe no behavioral change. PENDING - We've identified a set of parameters where Rover's revenue would remain neutral or increase assuming a decrease in new bookings and no change in repeat **Next steps**: Model negative new Bookings impact due to higher fee? | Under Evaluation **What needs to be true**: PENDING - We've identified a set of parameters where Rover's revenue would remain neutral or increase assuming we observe no behavioral change. PENDING - We've identified a set of parameters where Rover's revenue would remain neutral or increase assuming a decrease in new bookings and no change in repeat **Next steps:** Model the impact of the proposed structure on Rover's revenue - assuming no behavioral change - based on the fee level and GBV target parameters |
| **User impact by segment** | Under Evaluation - Modelling has shown that in aggregate, the top 10% of sitters would benefit from the proposed model due to their tendency to have longer relationships (5.4 bookings on average). As a results > 50% of the top decile's bookings would benefit from the lower fee. **What needs to be true**: Pending - The most top providers won't be negatively impacted by the model. PENDING - Most top providers per service types won't be negatively impacted by the model **Next steps**: Understand the financial impact at sitter level e.g X% in the top decile would benefit from the proposed model | Under Evaluation **What needs to be true**: Pending - The most top providers won't be negatively impacted by the model. PENDING - Most top providers per service types won't be negatively impacted by the model **Next steps:** Model the impact of the proposed structure per Sitter deciles - assuming no behavioral change - based on the fee level and GBV target parameters |
| **Legal footprint** | ? | ? |

# Non-critical criteria

While we believe the criteria listed above are the most important ones to evaluate alternative monetization models we also believe there are many other criteria that can help us choose the right model depending on the broad context and goal.

|  | **Relationship based model with GBV threshold** | **Sitter account based model (with GBV threshold?)** |
| --- | --- | --- |
| How complex is the model to implement and maintain? |  |  |
| If behavior changes over time in the way we would expect, by how much will revenue increase? |  |  |
| Will this structure make our algorithm-development challenge easier or harder? |  |  |
| Will this structure make the marketplace harder or easier to manage or regulate? And if so, in what ways? |  |  |
| Is there an elective of some sort such that providers feel stronger buy-in to whatever model they chose? |  |  |
| Is the model easily extensible such that we can offer greater benefits or behavioral incentives to more engaged providers? |  |  |
| Does the model better align with provider perception that we deliver more value on the first booking than on subsequent repeat bookings? |  |  |
| Does the model incentivize or de-incentivize accepting new clients? |  |  |
| Does the model incentivize service type mixshifts in a way that is positive for Rover? |  |  |
| Does the model make it easier or harder to identify diverters or providers acting in bad faith? |  |  |
| Is it likely to require significant op-ex for support (e.g. processing refunds)? |  |  |
| How scalable is to other markets or service types? |  |  |
