# Used Car Inspector

**English** | [日本語](./README.ja.md)

An AI skill that guides you through evaluating a used vehicle before purchase — inspection checklists, red-flag detection, model-specific known issues, and price negotiation support.

## Description

The Used Car Inspector helps you avoid buying someone else's problem. It generates model-specific inspection checklists, teaches you what accident damage and odometer fraud look like, interprets listing language and seller behavior, decodes VINs, and helps you translate inspection findings into a negotiating position or a walk-away decision.

**Audience:** Used car buyers at any experience level, and sellers who want to represent a vehicle honestly.

## Capabilities

- Generate a model-specific pre-purchase inspection checklist (known weak points for that make/model/generation/engine)
- Walk through a structured inspection: exterior, panel gaps and paint, glass, tires, underbody, engine bay, fluids, interior, electronics, cold start, and test drive
- Explain how to spot signs of accident repair, flood damage, and odometer rollback
- Decode VIN structure and explain what a vehicle history report does and does not reveal
- Interpret test-drive symptoms (pulls, vibrations, noises, shift quality, smoke color)
- Assess whether a listed price is reasonable given condition, mileage, and market
- Turn inspection findings into negotiation points with realistic repair cost estimates
- Provide question lists to ask private sellers and dealers, and explain evasive-answer red flags
- Explain title statuses (clean, salvage, rebuilt, lien) and their implications
- Advise when a professional pre-purchase inspection (PPI) is essential and what to ask the shop to check

## Example Prompts

```text
I'm looking at a 2014 BMW 328i with 95,000 miles. What are the known problem
areas for this generation, and what should I specifically check?
```

```text
Give me a printable 30-minute inspection checklist for a used car viewing,
ordered so deal-breakers get checked first.
```

```text
The seller says "minor fender bender, professionally repaired." How do I
verify the quality of the repair and what should I look for?
```

```text
During the test drive the transmission hesitated shifting 2nd to 3rd when
cold, then smoothed out. How concerned should I be on a 2013 Nissan Altima?
```

```text
The car checks out but needs tires, front brakes, and has a slow oil leak.
Asking price is $9,500. Help me build a negotiation position.
```

## Recommended Workflow

1. **Before contacting the seller:** share the listing details and ask for known issues, fair price range, and questions to ask remotely.
2. **Before the viewing:** request a model-specific checklist and print it or keep it on your phone.
3. **During inspection:** work through the checklist and note everything — take photos of anything questionable.
4. **After the viewing:** report findings and ask for a risk assessment: buy, negotiate, PPI first, or walk away.
5. **Before money changes hands:** verify title, VIN match, and history report; get a professional PPI for anything expensive or complex.
6. **After purchase:** hand off to the [Vehicle Maintenance Planner](../vehicle-maintenance-planner/) for a catch-up service plan.

## Limitations

- **Cannot see the vehicle.** The assistant works from your observations and photos you describe; it cannot detect what you do not check.
- **No access to history report databases.** It can interpret a Carfax/AutoCheck report you summarize, but cannot pull one.
- **Market prices shift.** Valuations are directional; cross-check against current local listings and pricing guides.
- **A professional PPI is irreplaceable** for high-value, exotic, or heavily modified vehicles — a lift and a borescope find what a parking-lot inspection cannot.
- **Legal requirements vary by jurisdiction** (disclosure laws, lemon laws, title transfer) — verify locally.

## Related Skills

- [Vehicle Maintenance Planner](../vehicle-maintenance-planner/) — post-purchase catch-up planning
- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — investigate specific symptoms found during a test drive
- [EV Assistant](../ev-assistant/) — used EV purchases hinge on battery health assessment
