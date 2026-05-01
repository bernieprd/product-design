# 1P: Measure impact of sitter side "fee transparency" in ledgers

**URL:** https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5351243783  
**Author:** Mégane Martinez | **Last modified:** Dec 23, 2025

---

# Summary

* **Goal:** Measure the impact of showing sitters how much they are actually earning per request on conversation ledgers.
* **Problem:** 
    * One of the design criteria of the Relationship-based graduated sitter fee test is to show sitters how much they are actually earning per booking on conversation ledgers in order to communicate they are making more as the relationship last longer
    * This "fee transparency" comes with the risk of anchoring the sitter fee strongly in sitters mind and in turn increase diversion and churn. 
    * We want to disentangle the impact of the "fee transparency" from the graduated fee structure itself
    
* **Solution:** Run a fee transparency experiment ahead the graduated fee structure test in the same market (Canada) 
* **Roll-out plan:** AB-test in Canada
* **Results: TBD**

# Opportunity

## Context

Currently, sitters actual earnings per bookings are only visible in the Payment history page. 

![Current payment history](../images/fee-tranp-current.png)

On the main booking touch points e.g the conversation screen and booking details sitters can only see the stay total which still includes the 15%-20% sitter side fee.

![Sitter side old conversation ledger on Web](../images/fee-tranp-ledger-convo-web.png)
_Sitter side old conversation ledger on Web_

![Sitter side old conversation ledger](../images/fee-tranp-ledger-convo-native.png)
_Sitter side old conversation ledger_

Todo: Add new conversation screens

## Problem statement

As part of the alternative monetization strategy we want to test a sitter-side fee structure where the fee %percentage depends on the length of the relationship with a given client. This means that at a given point in time a sitter may be keeping different shares of the total stay price for bookings happening at the same time but with different clients.

To help sitters in the graduated fee structure test understand how much they are earning for each booking and reinforce that the longer the relationship with a client lasts the more they'll earn we believe we need to explicitly show sitters earnings in conversation ledgers.

The risk of being transparent about sitter side fees in the conversation ledgers is to drive additional diversion. If this change is launched together with the graduated fee structure test we will not know what (possibly negative) impact can be attributed to it and will make the fee test itself harder to interpret.

### Hypothesis

**Based on** design heuristics

**We believe that** by showing sitters how much they'll earn for each booking in the main booking touch points

**We will** make it easier for sitters to understand the future graduated fees test and its benefits

**We'll will be successful if** %CBR (TBC) doesn't go down

# Solution Space

## Proposed solutions

### Sitter side fee transparency experiment in Canada

* Measure the impact of sitter side fee transparency alone by adding it on top of the current fee structure (flat 20% fee) in an AB-test;
* Make the sitter payout value explicitly visible on all platforms in the:

    * Conversation ledger;
    * Booking details ledger;
    * Modify request;
    * Modify booking (EBS);
    
* Lean on how much they earn, what are their earnings and not so much on what is the fee;
* Explain how the earnings are calculated and what the fee supports;

The designs are work in progress.

[https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?node-id=900-51929&t=jR23qqmJca7cvFg6-4](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?node-id=900-51929&t=jR23qqmJca7cvFg6-4)

## Risks and mitigations

* **Risk of rolling back**: If we measure a negative impact on %CBR/Booking rates, do we have the option to roll back? Would it upset sitters if this transparency was added and then taken away?

    * One way to mitigate this risk is to test on a small share/subset of the sitter population. We will look into this option in the experiment design.
    * Rather than rolling back another option in case of negative impact is to iterate the design to a version where the information is still available but less visible. In this case we would keep the more visible version for the graduated fee test.
    
* **Overlap with the conversation screen migration**: The conversation ledgers are being migrated as part of the conversation screen RxN and SSR migration. This experiment targets %CBR as a primary metric. These experiments should probably not interact since they are targeting the same screens and metric.

    * The sitter side of the conversation migration is starting the week of Nov 17th and planned to last 4 weeks (TBC). If so, we could launch this test right before the December code freeze (Dec 19th) and run it until the start of the graduated fee test in February.
    

### Owner Experience

* As stated in the risks section we could observe more sitter led diversion that impacts %CBR/%NtB 

# Roll-out

* Experiment in Canada
* Target sitter segment to be confirmed during test design.

# Results

In this section we'll keep track of launch results and whether we met or goals

# Next steps

Finally the _Next steps_ will highlight the decisions made based on the observed results
