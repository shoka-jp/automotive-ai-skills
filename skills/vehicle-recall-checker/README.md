# Vehicle Recall Checker

**English** | [日本語](./README.ja.md)

Guide a vehicle-specific recall check using current official sources and document what remains unconfirmed.

## Description

A model-level recall notice is not proof that a particular vehicle is affected or that its repair is complete. This skill separates campaign discovery, vehicle applicability, and completion evidence. It helps owners and dealers prepare an official lookup and a useful manufacturer/dealer inquiry; it does not provide guaranteed database access.

**Audience:** Owners, used-car buyers and sellers, service advisors, and fleet coordinators.

## Capabilities

- Select the regulator and manufacturer sources appropriate to the vehicle's original market and current location.
- Distinguish safety recalls, other campaigns, technical bulletins, and complaints.
- Record campaign identifiers, affected variants, publication/check dates, official instructions, and unresolved applicability.
- Interpret a supplied official lookup result without overstating “no open recalls.”
- Separate confirmed outstanding, confirmed completed, possible match, and unverified status.
- Draft a dealer inquiry and a record of evidence needed to close the check.

## Example Prompts

```text
2018 Toyota Prius 1.8 hybrid, 90,000 km, Japan. I have its model code
and chassis number. Show me the official lookup route without asking me
to post the complete number publicly; do not assume a recall applies.
```

```text
2016 Honda Civic 2.0 gasoline, 100,000 miles, US. My current official VIN
lookup says zero unrepaired recalls. Explain the result's limits and what
evidence would support saying a previous campaign was completed.
```

```text
2015 Mazda MX-5 1.5 gasoline, 70,000 km, originally Japan-market and now
in the UK. Its Japanese chassis identifier is not a 17-character VIN.
Prepare the source checks and questions for the importer or manufacturer.
```

```text
2020 Nissan Leaf 40 kWh, 65,000 km, Japan. A seller says “all recalls done”
but has only a general campaign notice, not a vehicle-specific result.
Create an evidence table and a dealer inquiry without certifying completion.
```

## Recommended Workflow

For model-specific checks, follow [reference routing](../../docs/model-reference-routing.md) using the variant, production year, and original market. The [browser builder](../../tools/vehicle-brief.html) can prepare the prompt. A reference match does not establish a fault, eligibility, or completion.

1. **Identify scope, not personal history.** Gather year, make, model, powertrain, original market, current country, import status, and the notice or lookup result available. Distinguish first-registration year from model year when relevant.
2. **Use the correct identifier privately.** Let the owner enter the VIN/chassis number directly in an official site. Ask for a redacted result when enough for interpretation; do not include full identifiers in public reports. Do not pad, truncate, or invent a VIN for a market that uses a different chassis identifier.
3. **Find current primary sources.** Start with the [official source guide](../../docs/vehicle-service-sources.md), then the manufacturer. General year/model searches identify possible campaigns; vehicle-specific manufacturer confirmation establishes applicability. For imports, check original-market information and ask the local authorized representative about support.
4. **Record evidence and its limits.** Return a table: campaign ID/type; official source; checked date; vehicle match evidence; status; prescribed next step. Only use “completed” when a vehicle-specific official record or credible repair record supports it. If sources conflict, preserve both and seek confirmation.
5. **Interpret zero or missing results narrowly.** State exactly which source was checked and what it returned. “No open recall shown in this lookup” does not mean no past recalls, no other campaigns, or a safe vehicle. If lookup access is unavailable, mark the check unverified rather than inferring a result from search snippets.
6. **Follow the actual notice.** Surface any official stop-driving, parking, or charging instruction accurately and prominently. Do not invent one or relax one. Arrange manufacturer/dealer confirmation of remedy availability and completion; do not promise cost coverage, eligibility, or appointment availability without current evidence.

## Limitations

- Databases can omit recent campaigns, completed repairs, older notices, or vehicles outside their market. Check the current tool's stated coverage rather than treating the data as exhaustive.
- A chassis-number range or model match can include vehicles that are not affected. A technical bulletin or complaint is not automatically a recall or free repair entitlement.
- A recall search is not a condition inspection and does not authorize driving. Qualified professionals must handle brake, steering, SRS, fuel, and EV high-voltage work under the relevant factory procedure.
- If browsing or manufacturer access is unavailable, provide the lookup route and unanswered questions only. Do not fabricate a campaign, status, citation, or completion record.

## Related Skills

- [Used Car Inspector](../used-car-inspector/) — include recall evidence in purchase checks
- [Service Intake Assistant](../service-intake-assistant/) — hand off a notice and symptoms to the workshop
- [Vehicle Maintenance Planner](../vehicle-maintenance-planner/) — keep verified completion records with the service history
