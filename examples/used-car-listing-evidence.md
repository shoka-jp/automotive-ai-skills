---
title: "Example: Revising a Listing When Evidence Changes"
description: "Illustrative listing revision: match claims to evidence, disclose a new defect, clarify price conditions, and keep publication pending."
lang: en
locale: en_US
---
# Example: Revising a Listing When Evidence Changes

**English** | [日本語](./used-car-listing-evidence.ja.md)

> **Illustrative conversation:** Vehicle records, prices, observations, and outcomes are fictional. This is an unpublished teaching draft, not a verified vehicle advertisement or a current advertising-law assessment.

**Skill:** [Used Car Listing Assistant](../skills/used-car-listing-assistant/)
**Scenario:** Replace unsupported sales claims with specific evidence, then update the listing when an intermittent concern is disclosed.

## Initial request

**User:**

> We are a dealer preparing a Japan-market Toyota Vitz listing: first registered in 2017, 1.3 gasoline/CVT. Exact model code and production date are still missing. A day-5 dashboard photo shows 88,400 km, and stock photos show two keys and a rear-bumper scratch. We have only two service invoices, from 2023 and 2025. No structural-repair assessment, complete mileage history, or individual recall lookup is available. The previous owner said “all recalls done.” Write “accident-free, full service history, verified mileage, all recalls complete.”
>
> Our price sheet lists vehicle price ¥900,000 and known required charges ¥60,000, both including stated taxes. A further required registration charge is undecided. Optional warranty ¥30,000. Collection/delivery conditions are also undecided. These are fictional amounts; do not publish anything.

**Assistant:**

Those four claims exceed the evidence. Start with this ledger and keep the listing as a draft until material information and publication requirements are checked.

| Requested claim | Available source | Status | Wording supported by the supplied material |
|---|---|---|---|
| Accident-free | No assessment supplied | Unknown | Structural repair/accident history has not been verified; do not replace either with “none.” |
| Full service history | Invoices dated 2023 and 2025 | Two documents supplied; other periods unknown | “Two service invoices available, from 2023 and 2025.” |
| Verified mileage | Day-5 dashboard photo | Display observed; mileage history unverified | “Odometer display: 88,400 km in the day-5 photo.” This does not certify actual accumulated mileage. |
| All recalls complete | Previous owner's statement only | Seller-reported; applicability and completion unverified | “Individual recall applicability and completion have not yet been verified.” Do not imply the lookup has started or finished. |
| Condition | Day-5 stock photos | Photographed scratch; wider condition unverified | “Rear-bumper scratch shown in photos.” |
| Two keys | Day-5 stock photos | Two keys shown; functionality not tested | “Two keys shown; operation not yet checked.” |

Internal price worksheet: ¥900,000 + ¥60,000 = **¥960,000 in known components**, not a final payable total. The required registration charge is missing. Keep the ¥30,000 optional warranty separate; its terms and optional status need confirmation. Do not put ¥960,000 into a customer-facing “total price” field.

> 💡 A photo supports what it shows. A parts or service invoice covers its recorded work. Neither fills gaps in vehicle history.

## New information and revised draft

**User:**

> Day 6: the prior owner now reports intermittent A/C loss of cooling. No diagnosis or repair is recorded. We must disclose it. Our revised sheet confirms ALL required charges total ¥80,000 including stated taxes, for registration in our specified service area and collection at the shop. Delivery elsewhere needs a separate quote. The warranty really is optional at ¥30,000 including stated taxes, but its written coverage is not supplied. The history/recall documents are still missing, and current advertising/platform requirements have not been checked. Give a revised draft and the remaining checks.

**Assistant:**

Add the day-6 A/C report to the ledger as **owner-reported, cause and remedy unknown**. Carry it into the condition description and buyer FAQ, removing any conflicting “fault-free” wording wherever it appears. A price revision does not resolve history or condition gaps.

### Customer-facing draft — not ready for publication

**Toyota Vitz — first registered 2017, 1.3 gasoline, CVT**

Odometer display: 88,400 km in the day-5 photo; complete mileage history has not been verified. Two service invoices, dated 2023 and 2025, are available. Two keys are shown in the stock photos; operation remains to be checked.

**Known condition information:** rear-bumper scratch shown in the photos. The previous owner reports intermittent loss of A/C cooling; the cause and repair requirements have not been confirmed. Structural repair/accident history and individual recall applicability/completion remain unverified.

| Price component | Amount and condition |
|---|---|
| Vehicle | ¥900,000, including stated taxes |
| All stated required charges | ¥80,000, including stated taxes, for the specified registration area and shop collection |
| Calculated total for those conditions | **¥980,000** |
| Optional warranty | ¥30,000 including stated taxes; coverage needs confirmation; not included in ¥980,000 |
| If the optional warranty is chosen | **¥1,010,000** under the same registration/collection conditions |
| Delivery elsewhere | Separate quote; do not describe ¥980,000 as an unconditional delivered price |

Buyer FAQ draft:

- **Is the A/C repaired?** No repair record is supplied. An intermittent concern has been reported; cause and remedy remain unconfirmed.
- **Does it have full history or verified mileage?** Two service invoices and one displayed reading are available. They do not establish complete service or mileage history.
- **Are all recalls complete?** That is not verified. We need an appropriate current individual lookup and campaign-specific completion evidence; the previous owner's statement is insufficient.

### Seller's remaining checks

1. Obtain an appropriate condition/history assessment and have the A/C concern assessed. Refer any repair proposal to [Repair Estimate Reviewer](../skills/repair-estimate-reviewer/); do not promise a fix or a repair price from this report.
2. Confirm exact vehicle identifiers privately, then use [Vehicle Recall Checker](../skills/vehicle-recall-checker/) for official applicability and completion checks. Do not publish identifying documents.
3. Confirm the missing mileage/service-history evidence, key operation, written warranty, and exact registration/delivery conditions. Keep unresolved items unknown.
4. Check current local/platform requirements and required condition/price fields before publication. Do not convert “unknown” into “none” to fill a mandatory field; obtain the evidence or keep publication pending.
5. Reconcile the title, description, tables, FAQ, photos, and any existing listing copies against the updated ledger. Keep the scratch visible in photographs and remove private details from record images.

**Outcome:** A revised draft with visible defects and conditional price arithmetic. Publication remains pending; no inspection, recall lookup, or advertising-compliance review is claimed to have been completed.

> 💡 Known defects belong in the buyer-facing description. Unresolved review tasks belong in the seller checklist as well; keeping a defect only in that checklist would hide it from buyers.

## Review checkpoints

- Distinguish a displayed odometer reading from verified mileage and partial records from a complete history.
- Keep unknown mandatory charges out of a claimed final total.
- Propagate new adverse information to all affected copy, preserving its source and date.
- Do not turn a drafted description into a completed inspection, official lookup, or published advertisement.

[All examples](./README.md) · [Answer review cases](../evals/answer-cases.yaml)
