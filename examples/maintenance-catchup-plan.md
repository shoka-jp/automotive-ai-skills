# Example: Building a Catch-Up Maintenance Plan

**Skill:** [Vehicle Maintenance Planner](../skills/vehicle-maintenance-planner/)
**Scenario:** A newly purchased vehicle with unknown service history gets a prioritized, budgeted catch-up plan split between DIY and shop work.

---

**User:**

> I just bought a 2017 Mazda CX-5 Touring, 2.5L, AWD, 82,000 miles. No service records at all — the previous owner "thinks the oil was changed regularly." I do drive it daily: about 30 miles round trip, moderate climate, no towing.
>
> I can do basic DIY (oil, filters, wipers) and I'd like to spread costs over a few months. Build me a catch-up plan.

> 💡 *Vehicle, mileage, usage pattern, DIY skill level, and budget constraint — all five inputs the skill's workflow asks for, in one message.*

**Assistant:**

With no records, the safe assumption is that anything not visibly recent is due. Good news: the 2.5L Skyactiv is low-drama and the AWD system just needs fluid attention. Plan in three phases:

**Phase 1 — Now (safety + cheap insurance): ~$150–200 DIY**

| Item | Why now | DIY? | Est. cost |
|---|---|---|---|
| Engine oil + filter | Unknown history; baseline everything from here | ✅ | $45 |
| Tire inspection: tread depth, date codes, pressures | Safety; tires older than ~6 years need replacing regardless of tread | ✅ | $0 |
| Brake visual check through wheels + brake fluid look | Safety triage — determines if Phase 1 grows | ✅ | $0 |
| Engine + cabin air filters | Cheap, certainly ignored | ✅ | $40 |
| Wipers, all lights check | Safety, trivial | ✅ | $30 |
| Battery test (free at most parts stores) | 82k car is likely on its original or a cheap replacement | ✅ | $0 |

**Phase 2 — Within 1–2 months (fluids with unknown history): ~$350–500, mixed**

| Item | Why | DIY? | Est. cost |
|---|---|---|---|
| Transmission fluid drain & fill | Mazda says "lifetime" but at 82k with unknown history, fresh fluid is cheap protection — drain & fill only, no flush | Shop recommended | $150–250 |
| Rear differential + transfer case fluid | AWD-specific, tiny capacities, often never touched | Borderline DIY | $80–150 |
| Brake fluid exchange | Hygroscopic; 3-year interval almost certainly missed | Shop (proper bleed) | $80–120 |
| Coolant check / exchange if original | FL22 long-life is ~120k rated but verify condition | Check first | $0–130 |

**Phase 3 — Within 6 months (wear items): ~$100–450 depending on findings**

| Item | Trigger | Est. cost |
|---|---|---|
| Spark plugs | Due at 75k — assume never done | $60–90 DIY |
| Brake pads/rotors | Whatever Phase 1 inspection found | $0–400 |
| Serpentine belt | Inspect for cracking at oil change | $30–60 DIY |
| Alignment | If tire wear in Phase 1 was uneven | $100 |

Realistic total: **$600–1,100** spread over 6 months, heavily DIY-weighted. Want the DIY procedures for any Phase 1 item?

**User:**

> This is great. Two questions: the transmission "lifetime fluid" thing — is a drain and fill at 82k actually safe? I've read horror stories about servicing high-mileage transmissions. And the tire date codes read "3016".

**Assistant:**

**Transmission:** the horror stories come from *flushing* neglected units or from transmissions already failing. A **drain and fill** replaces only ~40–50% of fluid gently, with the correct Mazda FZ fluid — at 82k on a healthy-shifting Skyactiv-Drive unit this is low-risk and beneficial. If it currently shifts fine, do it. If it slips or flares *today*, diagnose first.

**Tires:** 3016 = week 30 of 2016 — they're nearly 10 years old. Regardless of tread, that's past the safe service life; rubber hardens and loses wet grip long before wear bars show it. **Move tire replacement into Phase 1.** That changes your near-term budget by roughly $500–700 for a quality set installed, and it's the most important line in the whole plan now.

> 💡 *The plan adapts as facts arrive — a date code moved tires from "inspect" to "replace now, top priority." Static schedules can't do this; the conversation is the tool.*

**User:**

> Ordered tires for Friday. Log started with today's oil change at 82,014 miles.

**Assistant:**

Perfect — that log is now the foundation. Keep every entry as *date, mileage, item, parts used, cost*, and bring the log to any future session (or resale negotiation — documented history recovers real money). Next checkpoint: Phase 2 fluids at your convenience within two months; I'd pair the diff/transfer case fluids with the transmission service to save a shop visit.

---

## Takeaways

- Unknown history means **assume due, then verify** — inspection results shrink the plan; they rarely grow it.
- Prioritization is risk-based: safety items first, fluid insurance second, wear items third.
- Tire **age** trumped tread depth — the kind of detail a generic mileage schedule misses.
- The maintenance log created on day one feeds every future session and preserves resale value.
