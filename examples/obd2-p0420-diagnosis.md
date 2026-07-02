# Example: Diagnosing a P0420 Without Wasting Money

**Skill:** [OBD-II Diagnostic Assistant](../skills/obd2-diagnostic-assistant/)
**Scenario:** A check engine light with the most commonly misdiagnosed code in OBD-II. The naive fix is a $1,200 catalytic converter; the actual fix here costs far less.

---

**User:**

> My check engine light is on. Code is P0420, "Catalyst System Efficiency Below Threshold (Bank 1)".
>
> Vehicle: 2015 Honda Civic EX, 1.8L, CVT, 148,000 miles.
> Recent work: spark plugs about 5,000 miles ago. No other codes, none pending.
> The car drives completely normally.

> 💡 *Full context up front — vehicle, mileage, recent work, other codes, and drivability — is exactly what the skill's workflow asks for. "No other codes" and "drives normally" are diagnostic evidence, not filler.*

**Assistant:**

P0420 means the downstream O2 sensor is seeing oxygen-storage behavior too similar to the upstream sensor — the *catalyst efficiency test* failed. The converter is only one of several possible causes, and at 148k on a Civic it's worth ruling out the cheaper ones first:

1. **Downstream O2 sensor degradation** — a lazy sensor can report a healthy cat as failed
2. **Exhaust leak** ahead of or near the downstream sensor — outside air skews readings
3. **Genuine catalyst degradation** — possible at this mileage, but Honda cats are durable
4. **Underlying mixture problems** — less likely with no fuel-trim or misfire codes

Before anything else: do you have freeze frame data, and can your scanner show live O2 sensor voltages?

**User:**

> Freeze frame: code set at 61 mph, warm engine, steady cruise. My scanner shows live data. Upstream sensor oscillates fast between about 0.1 and 0.8V. Downstream sensor mostly sits around 0.6–0.7V but dips and rises slowly sometimes, maybe every few seconds.

> 💡 *The user runs the observation the assistant asked for instead of jumping to parts. The downstream sensor's behavior is the crux of a P0420 diagnosis.*

**Assistant:**

That's actually a fairly *good* pattern. A truly dead catalyst makes the downstream sensor mirror the upstream one — fast switching on both. Yours is mostly steady with slow drift, which means the cat still has meaningful oxygen storage. That makes "borderline cat or skewed measurement" more likely than "failed cat."

Two checks, cheapest first:

1. **Exhaust leak inspection** — cold engine, listen and feel around the flex pipe, the cat's flanges, and the downstream sensor bung. The flex pipe is a known rust/crack point on 9th-gen Civics.
2. **Downstream sensor response test** — at idle, briefly snap the throttle and watch whether the downstream sensor reacts crisply or lags.

**User:**

> Found it, I think. The gasket where the flex pipe meets the cat is visibly crumbling and there's black soot around the flange. I can hear a faint puff there on cold start.

**Assistant:**

That fits perfectly. An air leak at that flange lets oxygen reach the downstream sensor, which mimics poor catalyst efficiency at cruise — exactly your freeze frame conditions. The fix is a flange gasket (a few dollars) and possibly the spring bolts if corroded.

After the repair: clear the code, then complete a drive cycle — for the catalyst monitor, that's roughly a warm-up followed by 10–15 minutes of steady 45–60 mph cruising. Then confirm the catalyst monitor reads "ready" and the code stays gone for a week of mixed driving before considering it fixed.

**User (one week later):**

> Replaced the gasket and both bolts. Monitor is ready, no code for 8 days. Total cost: $11.

> 💡 *The confirmation step matters: "code hasn't returned immediately" and "monitor ran and passed" are different standards. Outcome: an $11 gasket instead of a $1,200 converter — the payoff of test-before-parts discipline.*

---

## Takeaways

- A DTC names a **failed test**, not a failed part.
- Freeze frame conditions (steady cruise) plus live-data behavior narrowed the cause before any money was spent.
- The cheapest discriminating test came first; the expensive part was never needed.
- Verification = monitor ready **and** code absent over real driving, not just a cleared light.
