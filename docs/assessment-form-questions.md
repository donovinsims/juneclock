# Assessment Form Questions

## Strategy

The form is the gatekeeper. Every question must either help Donovin qualify the lead or prepare for the 20-minute call. If it doesn't do one of those, cut it.

**Target: 7 questions.** Page copy reads "7 quick questions" (currently says "Six fields" — update assessment.tsx line 106 after changing the form).

The call does the deep discovery. The form just gets Donovin oriented enough to sound prepared when he calls.

### What Donovin needs to know before calling

1. **Who they are** — name, company, trade
2. **How to reach them** — email + phone (phone required — speed-to-lead)
3. **What scale** — team size
4. **What's broken** — one clear pain signal (not three, not a paragraph)

---

## Questions

### 1. What's your first name?
- Type: short text
- Required: yes
- Note: Donovin uses their name on the call. Personal.

### 2. What's your email?
- Type: email
- Required: yes
- Note: Where the report lands. Also the lead identifier.

### 3. What's your phone number?
- Type: phone
- Required: **yes**
- Note: "I'll text before I call so you're not caught off guard."
- **Why required:** Speed-to-lead <5 min is Clockout's differentiator. Donovin calls. If the form doesn't capture a phone, the lead sits until an email reply comes back. That's the same leak Clockout fixes for clients.

### 4. What trade are you in?
- Type: dropdown
- Required: yes
- Options:
  - HVAC
  - Plumbing
  - Roofing
  - Electrical
  - Landscaping / Lawn Care
  - Cleaning / Janitorial
  - Property Management / Real Estate
  - Other (text field)
- Note: Combined "Property Management" and "Real Estate" into one option (same operational patterns, fewer choices). Either way, this tags the lead for Donovin's context.

### 5. Company name
- Type: short text
- Required: yes
- Note: "I'll use this on our call. No logos or branding needed."

### 6. How big is your team?
- Type: dropdown
- Required: yes
- Options:
  - Just me (solo operator)
  - 2–5
  - 6–15
  - 16+
- Note: Simplified from 5 to 4 options. The "30+" bucket was too broad to be useful — 16+ tells Donovin enough.

### 7. What's the one thing costing you the most right now?
- Type: dropdown (single select)
- Required: yes
- Options:
  - Missed calls (especially after-hours and weekends)
  - Slow quote follow-ups that go cold
  - Disconnected tools and manual data entry
  - Scheduling chaos — wrong tech, wrong time, wrong job
  - Chasing payments and slow invoices
  - Customer reviews and referrals (not happening)
  - Something else — I want a full audit
- Note: Single select instead of "pick up to 3." Faster to answer, clearer signal for Donovin. The "Something else" catch-all keeps it from being a barrier for people whose pain isn't listed.

---

## Changes from Previous Version

| Change | Why |
|--------|-----|
| Q3 (phone) → **required** | Speed-to-lead is the differentiator. Donovin calls. |
| Q6 (team size) → 4 options | Cut "30+" — not useful at this stage. |
| Q7 (pain) → **single-select, 7 options** | "Pick up to 3" causes hesitation. One choice is faster and gives clearer signal. Added "disconnected tools" option (signals tech sophistication). |
| ❌ Q7 (tools checklist) removed | 8 checkboxes = analysis paralysis. Donovin learns more from the pain answer plus the call. |
| ❌ Q8 (call volume) removed | Most owners guess. Donovin gets a better number in 30 seconds on the call. |
| ❌ Q10 (long text) removed | Very low fill rate. The space alone adds friction. Replaced by Q7 structured options. |

**Net: 10 questions → 7 questions.**

---

## Submission UX

After submit, the page should show:

> **Thanks, [name]!**
> Donovin will review your answers and reach out within 24 hours.
> Keep an eye on your inbox (and spam) for the written report.
> — Donovin

No secondary CTA. No upsell. The call invitation and report arrive next — that's the next step.

---

## Optional Add-ins (Keep out of main form)

These can live as separate lightweight touches (post-submit page, SMS reply, or email follow-up):

### How did you hear about Clockout?
- Purpose: Track marketing channels. Ask on the call or in the follow-up email.

### What city are you based in?
- Purpose: Only useful for Donovin's context. Can be asked on the call.

---

## Page Copy Alignment

The assessment page at `src/routes/assessment.tsx` line 106 currently says "Six fields." After updating the form to 7 questions, change this to "7 quick questions."

```diff
- Six fields. No phone tag.
+ 7 quick questions. No phone tag.
```
