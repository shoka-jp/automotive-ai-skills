# Service Intake Assistant

**English** | [日本語](./README.ja.md)

Turn a driver's observations into a clear service intake note and technician handoff without inventing a diagnosis.

## Description

This skill organizes the conversation before diagnosis: what happened, under which conditions, and what has actually been checked. Keep customer statements, technician observations, and unverified hypotheses separate. Use Vehicle Troubleshooting when the task becomes diagnosis and Repair Estimate Reviewer when a written estimate is available.

**Audience:** Service advisors, independent repair shops, fleet coordinators, and owners preparing for a workshop visit.

## Capabilities

- Collect a symptom timeline, frequency, operating conditions, warning messages, and recent work.
- Preserve the customer's wording while translating it into a concise technician brief.
- Flag immediate safety concerns for professional assessment without declaring the vehicle safe to drive.
- Record existing scan results, photos, and recordings with their source and date; distinguish “not checked” from “normal.”
- Separate diagnostic authorization, spending limits, and requested updates from approval to replace parts.
- Produce a customer confirmation summary and a list of the next three useful questions.

## Example Prompts

```text
2018 Toyota Corolla 1.8 gasoline, automatic, 92,000 km, US market.
The customer reports a rattle only on the first cold start; no scan has
been done. Draft an intake note and three follow-up questions.
```

```text
2020 Nissan Leaf 40 kWh, 68,000 km, Japan. The customer says charging
sometimes stops at a public charger but works at home. Separate reported
facts from missing information for the EV technician; do not diagnose it.
```

```text
2017 Mazda3 2.0 gasoline, 110,000 km, UK. A vibration began after tire
replacement. I have the invoice but no inspection findings. Prepare a
handoff that does not label the tires defective or recommend a road test.
```

```text
2019 Honda Fit 1.3 gasoline, 75,000 km, Japan. A customer approved only
a ¥5,000 diagnostic check, not repairs. Summarize that boundary and draft
a neutral update request without promising a repair cost or completion time.
```

## Recommended Workflow

1. **Identify the vehicle and visit.** Gather year, make, model, powertrain, transmission, mileage, market, customer concern, and recent work. Request only relevant records with personal details removed.
2. **Check urgency first.** If the account includes loss of braking or steering, smoke, fuel smell, severe overheating, or a high-voltage warning, stop diagnostic experiments and arrange qualified assessment or roadside assistance. Do not ask the customer to reproduce a dangerous condition.
3. **Capture the sequence.** Ask when it began, how often, cold/hot conditions, speed/load if already observed, messages, and what changed. Limit the first follow-up to the three questions most likely to clarify the handoff.
4. **Label evidence.** Use “customer reported,” “documented observation,” “hypothesis,” and “not checked.” A trouble code is a recorded clue, not proof that a component needs replacement.
5. **Return a structured note.** Include vehicle/context; customer concern; conditions/timeline; evidence with source/date; safety concerns; unknowns; and requested next assessment. Add diagnostic authorization and budget only if explicitly provided; otherwise mark them pending.
6. **Confirm the handoff.** Ask the customer to correct the summary and have the receiving professional decide tests and roadworthiness. Keep any outgoing message as a draft unless sending it is requested.

## Limitations

- Text, recordings, and photos cannot establish roadworthiness or a confirmed fault. Do not turn “no warning light reported” into “no faults.”
- The skill does not perform workshop tests or approve repairs. Defer brake, steering, SRS, fuel-system, and EV high-voltage work to qualified professionals and the vehicle's factory procedures.
- Appointment availability, diagnosis time, prices, warranty coverage, and customer consent must come from current records, not assumptions.
- Market terminology and authorization requirements vary. Consult current local guidance when those questions arise; see [verification sources](../../docs/vehicle-service-sources.md).

## Related Skills

- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — investigate symptoms after intake
- [Repair Estimate Reviewer](../repair-estimate-reviewer/) — compare the proposed work once an estimate exists
- [Fleet Manager](../fleet-manager/) — coordinate downtime across vehicles
