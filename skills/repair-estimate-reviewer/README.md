# Repair Estimate Reviewer

**English** | [日本語](./README.ja.md)

Compare written repair estimates on scope, evidence, arithmetic, and unanswered questions before authorizing work.

## Description

A cheaper total may cover different parts, labor, or follow-up work. This skill normalizes itemized estimates into a comparable table and prepares factual questions for the shop. It reviews the quote; it does not diagnose the vehicle, certify a fair market price, or approve delaying a safety repair.

**Audience:** Vehicle owners, service advisors, used-car businesses, and fleet purchasers reviewing repair proposals.

## Capabilities

- Extract parts, quantities, part condition, labor hours/rates, consumables, taxes, fees, and exclusions.
- Recalculate totals using the quote's stated currency and tax basis, leaving missing values unknown.
- Identify scope differences and possible overlapping labor without assuming an overcharge.
- Separate evidence-backed corrective work, scheduled maintenance, optional work, and items needing clarification.
- Compare written warranty terms and quote validity without inventing coverage.
- Draft a short request for diagnostic findings, itemization, and an explicit authorization boundary.

## Example Prompts

```text
2016 Honda Civic 2.0 gasoline, 120,000 km, US. Compare two written air
conditioning estimates: one includes leak diagnosis, the other only
refrigerant service. Identify missing scope before comparing price.
```

```text
2018 Toyota Aqua 1.5 hybrid, 95,000 km, Japan. A synthetic quote lists
parts ¥12,000, labor 1.5 hours at ¥8,000/hour, and supplies ¥1,000.
All are before a stated 10% tax on the entire subtotal. Check the math;
do not treat these illustrative figures as a market price or tax rule.
```

```text
2015 Volkswagen Golf 1.4 TSI, 140,000 km, UK. One quote lists separate
labor for two jobs that may share disassembly. Draft a question about
included operations rather than accusing the shop of duplicate billing.
```

```text
2020 Nissan Leaf 40 kWh, 80,000 km, Japan. The shop proposes a traction
battery repair but the quote has no diagnostic report or warranty terms.
Prepare questions for the qualified EV specialist; no DIY instructions.
```

## Recommended Workflow

1. **Collect context and documents.** Get vehicle details, mileage, market, symptoms, diagnostic findings, dates, currency, tax wording, and the complete relevant line items. Redact names, addresses, payment data, and unnecessary identifiers.
2. **Normalize without filling gaps.** Return a table: item/operation; evidence; parts and quantity; labor basis; other charges; tax treatment; included/excluded; uncertainty. Keep lump-sum labor as lump sum if hours are not provided.
3. **Check arithmetic.** Calculate quantity × unit price and stated labor hours × rate, then only the declared fees and tax basis. Show discrepancies and rounding assumptions. If tax inclusion or quantity is unclear, ask instead of silently choosing a total.
4. **Compare equivalent scope.** Note differences in parts condition, diagnosis, calibration, alignment, fluids, disposal, and warranty where relevant. Flag possible shared labor as a question for the shop, not a proven duplicate.
5. **Prioritize questions using evidence.** Ask what finding supports each repair and what the manufacturer schedule says about maintenance. Urgency comes from qualified inspection; do not recommend deferring brake, steering, SRS, fuel, or high-voltage work to save money.
6. **Return a decision brief.** Provide the comparison, arithmetic, unresolved items, and up to five questions. Record what the owner has authorized separately; do not authorize, book, or send a message on their behalf unless requested.

## Limitations

- Prices depend on location, date, vehicle variant, parts, and labor scope. No quote is “fair” or “fraudulent” based on its total alone.
- A quote does not prove the diagnosis. Refer faults to [Vehicle Troubleshooting](../vehicle-troubleshooting/) and qualified inspection.
- Verify fitment, specifications, and procedures against factory documentation. Safety-critical hands-on work belongs to qualified professionals.
- Tax rules, consumer rights, and warranty terms vary and change. Use current primary sources for the relevant jurisdiction; see [verification sources](../../docs/vehicle-service-sources.md). This skill does not decide legal disputes or coverage.

## Related Skills

- [Service Intake Assistant](../service-intake-assistant/) — preserve the original concern and approval scope
- [Mechanic Assistant](../mechanic-assistant/) — understand the proposed operations
- [Vehicle Maintenance Planner](../vehicle-maintenance-planner/) — distinguish scheduled service from corrective work
