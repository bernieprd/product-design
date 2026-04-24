# Community guidelines

## Context and problem

Rover’s Trust & Safety team had already defined Community Guidelines that clearly ask both sitters and pet parents to keep communication and bookings on the platform. In practice, though, these guidelines lived mostly as static web content. Many users never saw them, and they weren’t integrated into the core product experience.

At the same time, diversion (moving off Rover to transact) was a key strategic issue. We were investing in mechanical deterrents like phone number blocking, but there was still a missing foundation: an explicit, in‑product moment where we set expectations and explained why staying on Rover matters for safety and protection.

The risk was that we were enforcing rules users had never really seen, which can feel arbitrary or punitive.

## Goal and success metrics

The goal was to bring the Community Guidelines into the product experience in a way that:

- Made expectations around on‑platform communication and booking explicit.
- Reinforced the safety and protection narrative (Rover Guarantee, fraud prevention, support).
- Did not harm key funnel metrics like contact page to request sent or conversation booking rate.

Primary success metrics (non‑inferiority):

- Owners:
    - Contact page view → request sent rate (baseline ~63.4%).
    - Bucketed to booked rate.
- Sitters:
    - Conversation booking rate (baseline ~42.5%).

Secondary:

- Number of users reached.
- Time spent on the modal.
- Abandon vs “Got it” click rate.
- Cross‑pairing effects when one or both sides had seen the modal (owner vs sitter).

## Role and team

I was the lead product designer, working with content, product, data science, engineering, and Trust & Safety.

My focus:

- Translate existing guidelines and legal constraints into a simple, high‑signal touch point experience.
- Choose triggers that reach the right users at the right time without derailing core flows.
- Shape a test design that could detect subtle improvements or harms, especially for more established users who are at higher diversion risk.

## Approach

![image.png](Community%20guidelines/image.png)

### Experience and messaging

We created a blocking modal that:

- Explains, in plain language, that Rover expects bookings and communication to stay on the platform.
- Frames this expectation through safety and value, not just rules:
    - You’re protected when you book on Rover.
    - Going off platform means you’re taking on more risk.
    - You’re agreeing to be a good community member.
- Links to Terms of Service and the Community Guidelines page for full details.
- Requires an explicit “Got it” acknowledgment to dismiss.

The same copy and structure applied to sitters and owners to keep the message consistent.

### Trigger strategy

We were careful about where and when to interrupt:

- Existing users (owners or sitters who had sent/received at least one request):
    - Show the modal on next app open, regardless of the landing screen.
- New users:
    - Owners: show it when they send their first request (after filling the contact form and resolving validation).
    - Sitters: show it after they complete the Booking Walkthrough and open the app again as an approved sitter.

If a user killed the app without tapping “Got it”, we would show the modal again on the next trigger, ensuring they actually acknowledge it.

## Key trade‑offs

We had to balance:

- **Visibility vs. friction**: We needed the message to be prominent enough to matter, but not so intrusive that it suppressed contact or bookings. This is why we treated contact page → request sent as a hard non‑inferiority metric and placed the owner trigger right after the “Send” button (not before they’d composed a request).
- **One‑time clarity vs. repeated annoyance**: We allowed repeat triggers if users dismissed the app without acknowledging, but once they tapped “Got it” they would never see the modal again.
- **New vs. established users**: New users are already hit with a lot of onboarding content. More experienced sitters and repeat owners are at higher risk of diversion. We deliberately designed triggers so that both groups would see the modal, but we expected more behavioural impact from the latter.

## Impact and metrics

The test was globally bucketed and run as a non‑inferiority experiment.

For owners:

- The rate of contact page view → message sent was neutral between control and variant. The modal did not break the core “contact a sitter” flow.
- Initial 7‑day booking rates were neutral for both new and repeat owners.
- Repeat owners in the variant group re‑transacted on Rover at higher rates than repeat owners in the control group, which is exactly where we’d expect guidelines to help reinforce on‑platform behaviour.

For sitters:

- Conversation booking rate was higher for sitters in the variant group, especially for **activated** sitters (those with prior activity), who are more exposed to diversion opportunities.

Cross‑party interactions:

- When both owner and sitter were in the variant group, the odds a conversation booked were about **3.5% higher** than when both were in control.
- As long as at least one party was in the variant, conversation booking rate improved, with the strongest effect when the sitter was in the variant.

Estimated annual return:

- Using provider CBR estimates, the analysis estimated that, for **activated, in‑app bookings**, the feature contributed around **$2.2M** in annual Rover take (point estimate), with a 95% confidence interval roughly in the **$1.4M–$3.0M** range.
- All‑up in‑app bookings produced a slightly lower but still clearly positive point estimate (around **$1.7M**, with a 95% CI of roughly **$1.0M–$2.4M**).

## Next steps

Following the experiment:

- We rolled the modal out broadly across app and web, aligning the implementation and trigger logic between platforms.
- We updated the link target to move from a specific Terms of Service section to the dedicated Community Guidelines page, which better matches the intent of the content.
- We cleaned up legacy feature flag logic and unified the conditions under which the modal appears.

## Learnings

For me, this project was a reminder that:

- Setting **clear expectations** in‑product can move behaviour, especially for repeat and more experienced users, even when the UX is lightweight.
- When you design “blocking” content, non‑inferiority tests and cross‑pair analysis (who has seen what on each side of a marketplace conversation) are essential to avoid false positives.
- Narrative work like this becomes much more powerful when it’s part of a broader program (e.g: guidelines + blocking + triggered emails), rather than a one‑off modal.