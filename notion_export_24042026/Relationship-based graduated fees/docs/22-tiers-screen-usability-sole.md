# Tiers Screen Usability: Variant A vs. Variant B

**Researcher:** Soledad Strunc | **Stakeholders:** Bernardo Prudêncio, Camille Brito, Lizeth Herrera  
**Method:** Unmoderated user testing (UserTesting.com)  
**Launched:** Feb 17, 2026 | **Analysis completed:** Feb 19, 2026  
**Analysis board (Figma):** https://www.figma.com/board/YAieRhKE57sCxBz3xe36K1/Sitter-flow---Soledad?node-id=321-3539

---

## Context

Evaluated comprehension of the new earnings model using non-moderated user testing across:
- Landing Page (education screen)
- Relationship / Tiers Screen
- Two UI variants for tier progress: **V-A (Box-based)** and **V-B (Timeline-based)**

**Participants:** New sitters and Recurring sitters

**Test questions — Landing screen:**
- Based only on what you've just read, how would you explain how this earnings model works in your own words?
- After reviewing this screen, how clear is your understanding of how the new earnings model works? (1 = Very confusing, 5 = Very clear)
- What specifically influenced your rating? What felt clear or unclear?

**Test questions — Tiers screen:**
- In your own words, what is this screen showing you?
- Which tier are you currently in?
- What do the green progress bars indicate?
- Based only on this screen, how much more would you need to earn with this client to reach the next tier?
- If you complete another booking with this client, what do you expect to change (if anything)?
- What would you need to do to reach Tier 3?
- Does this screen match your previous understanding of how the tier system works?
- After reviewing this screen, how clear is your understanding? (1–5)
- What specifically influenced your rating?

---

## Key Findings

- The earnings model is **motivating and well received.**
- **Understanding does not happen instantly** — it is learnable but not intuitive.
- The **biggest friction is numeric transparency,** not conceptual clarity.
- Both Tier UI variants **require users to do their own math.**
- Variant A supports better numeric accuracy.
- Variant B increases numeric ambiguity.
- Users consistently ask how tier thresholds affect payouts (split vs. step logic): *"How exactly is that booking paid? Does the new rate apply immediately? Do you split the booking?"*

**The risk is confusion around:**
- What counts toward progress
- How much is left to earn
- How payouts work at threshold

**Main friction: Financial grounding.** Users need precision, transparency, and predictability. The current system requires mental math, assumptions, and inference.

**The challenge is precision and transparency. If numeric clarity is improved, this system can become a strong retention driver.**

---

## Do Both UIs Have the Same Problem?

Both variants share one structural issue: **users must do their own math to understand how much more they need.**

- Variant A feels stronger for numeric clarity.
- Variant B is stronger for conceptual visual motivation.
- Neither UI externalizes the math. Users are forced to compute: **Threshold − Current Completed.** That is the consistent pattern across all testing.
- Variant A keeps earnings and thresholds more visually integrated.
- Variant B increases abstraction.

**Variant B increases risk of:**
- Visual misinterpretation
- Approximate understanding
- False precision confidence

---

## Verdict

**Variant A (Box-based) outperformed Variant B (Timeline-based) in terms of user confidence and mathematical accuracy.**

Variant A's distinct Tier Boxes provide "anchors" that make the math feel concrete and transparent. The UI choice for the Tier progress screen significantly impacts financial transparency.

---

## Performance Comparison

| Feature | Variant A (Boxes) | Variant B (Timeline) |
|---|---|---|
| **Clarity Rating** | Increased from 4/5 (landing) to 5/5 (tiers screen) | Decreased from 4–5/5 (landing) to 3–4/5 (tiers screen) |
| **Visual Mapping** | Clear connection between dollars and tier boxes | Visual midpoint was falsely interpreted as a financial midpoint |
| **Cognitive Load** | Low; data is explicitly anchored to boxes | High; users felt they had to "estimate" or "guess" |

### Variant A — Strengths & Weaknesses

**Strengths:**
- Stronger numeric continuity
- Users more frequently calculated correctly
- Clear connection between completed amount and threshold
- Supports financially analytical users

**Weakness:** Threshold crossing mechanics not explained

### Variant B — Strengths & Weaknesses

**Strengths:**
- Emotionally motivating
- Feels milestone-based and structured
- Users rated clarity highly (subjectively)

**Weaknesses:**
- Increased numeric ambiguity
- Users relied more on visual inference than numbers

---

## Frequently Asked Questions (Raised by Users in Both Variants)

### What counts toward Tier progress?

Is tier progress based on total booking value (gross) or earnings after Rover fees (net)?

Users blended completed + upcoming bookings. Misread totals. Were unsure what number visually represents their progress.

**Variant B increases numeric ambiguity** — users were less certain which number to reference.

---

### How much do I currently have toward the threshold?

**Variant A:** Precision was stronger. Users could usually identify the number, sometimes had to calculate, but could see the amount (e.g. $102) clearly.

**Variant B:** Weakens numeric anchoring. Repeated issue: "I don't know exactly how much I have." "It doesn't show me." Users miscalculated or guessed based on visual midpoint.

---

### What happens when I cross the threshold mid-booking?

Raised strongly in both, but more cognitively salient in Variant B.

Questions raised: Is payout split? Is entire booking at old rate? When does new rate apply?

**Variant A:** Concern about fairness, but less prominent.

**Variant B:** Raised more explicitly — because the UI visually emphasizes milestone crossing, users think more deeply about the mechanics and question them more actively.

---

### How much more do I need?

Users had to mentally compute the answer. Both variants required manual math.

**Variant A:** Problem exists but is less severe. Numeric anchors were clearer.

**Variant B:** Amplifies the "mental math burden." Strong repeated pattern: users couldn't answer precisely, said "I don't know," some miscalculated.

---

### Does it reset?

This is a **systemic model explanation gap, not a UI-specific issue.** Both variants triggered these questions: Does the tier expire? Is it lifetime? What if the client stops booking? What about refunds?

---

### Relationship mental model

Both variants triggered: Is it per client? Per pet? Per service? Why "relationship"?

The moderated study (Lizeth, Jan 2026) confirms this is foundational but not intuitive. The unmoderated study confirms: this is a model-level clarity issue, not UI-specific.

---

## Visual Interpretation vs. Numeric Reality

**Variant A pattern:**
- Less visual inference
- More numeric grounding
- Still required mental math
- Less "false confidence"

**Variant B pattern:**
- Increases visual abstraction
- Visual midpoint is assumed to equal monetary midpoint
- Confidence without precise understanding
- Leads to incorrect math
- "I don't see how much I need"
