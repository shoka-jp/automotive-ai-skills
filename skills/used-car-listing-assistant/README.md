# Used Car Listing Assistant

**English** | [日本語](./README.ja.md)

Prepare a used-vehicle listing from documented facts, with visible condition disclosures and a clear price breakdown.

## Description

This skill supports sellers after vehicle information has been gathered. Build an evidence ledger before drafting the title, description, and buyer FAQ; keep unsupported claims and missing documents visible to the seller. It complements buyer-side inspection and does not replace an appraisal, condition inspection, or local advertising review.

**Audience:** Independent dealers, sales staff, and private owners preparing an accurate vehicle advertisement.

## Capabilities

- Organize specifications, equipment, service records, known defects, inspection history, and warranty terms.
- Separate seller statements, document-backed facts, observations, and unresolved claims.
- Draft readable listings and buyer answers without inventing accident-free status, ownership count, or service history.
- Prepare a photo checklist showing both features and known damage.
- Check price arithmetic, mandatory charges, optional items, and the conditions attached to the quoted total.
- Produce a publication checklist with unresolved claims and required human review.

## Example Prompts

```text
2019 Toyota Prius 1.8 hybrid, 82,000 km, Japan. I have service invoices,
two keys, and a photographed bumper scratch, but no structural repair
history assessment. Draft a listing without claiming “accident-free.”
```

```text
2017 Mazda MX-5 2.0 gasoline manual, 65,000 km, UK. Service records cover
only my ownership. Write an honest description and photo checklist;
do not turn these partial records into “full service history.”
```

```text
2020 Nissan Leaf 40 kWh, 52,000 km, Japan. The dashboard shows an estimated
range, but I have no battery health test. Draft a buyer FAQ that separates
that display from measured battery capacity and guaranteed range.
```

```text
2018 Honda N-BOX 660 cc gasoline, 60,000 km, Japan. Vehicle price is
¥900,000 and stated required charges total ¥80,000, including applicable
taxes. An optional warranty is ¥30,000. Make a price table, flag missing
registration/delivery conditions, and verify current advertising guidance.
```

## Recommended Workflow

1. **Collect the facts and market.** Record year/first registration, make, model, powertrain, trim, mileage and units, location, seller type, equipment, records, defects, and price conditions. Use the relevant platform's current listing requirements.
2. **Build an evidence ledger.** Output claim; source/date; confirmed, seller-reported, or unknown; and permitted wording. Treat “no evidence supplied” as unknown. Do not infer accident history from a clean-looking photo or an auction grade alone.
3. **Resolve material gaps.** Ask for missing condition disclosures, mileage history, inspection findings, warranty terms, and price components before calling the draft ready to publish. Keep a conspicuous “needs confirmation” checklist outside the customer-facing draft; do not hide known defects there.
4. **Check the total.** Show vehicle price and stated required charges separately from genuinely optional items. Use stated tax treatment without double-counting. If a required charge is unknown, the final payable total remains unconfirmed. For Japan, verify current AFTC guidance and its applicability; do not assume one market's rules apply elsewhere.
5. **Draft the listing.** Return a factual title, short description, specification/condition table, visible known-defect disclosures, price breakdown, photo checklist, and buyer FAQ. Avoid unsupported superlatives, urgency, certification, or warranty promises.
6. **Review before publishing.** Cross-check every claim against its source and the current local/platform requirements. Remove private owner details and unnecessary document identifiers from public material. Preserve required public disclosures. Publishing remains a separate action requiring the seller's instruction.

## Limitations

- The AI cannot inspect the vehicle, authenticate records, determine legal title, or certify history. Qualified inspection and original documents take precedence.
- Japanese “repair history” (修復歴), ordinary cosmetic repairs, and accident history are not interchangeable. Do not infer or translate them into stronger claims; consult [verification sources](../../docs/vehicle-service-sources.md) and an appropriate assessor.
- Do not conceal known faults, misstate mileage, fabricate testimonials, or edit damage out of sales photographs. An unknown status must not be rendered as “none.”
- Prices, disclosure rules, and warranty obligations vary by seller, jurisdiction, and date. This workflow is not legal certification or a valuation service.
- Any brake, steering, SRS, fuel, or high-voltage concern requires professional assessment; an attractive listing does not establish roadworthiness.

## Related Skills

- [Used Car Inspector](../used-car-inspector/) — organize independent condition checks
- [Vehicle Recall Checker](../vehicle-recall-checker/) — verify campaign status without unsupported “all clear” claims
- [Repair Estimate Reviewer](../repair-estimate-reviewer/) — review proposed reconditioning work
