---
title: Route vehicle questions to reviewed model references
description: A shared browser and CLI lookup with exact model aliases, explicit market, production limits, and honest no-match behavior.
---
# Route vehicle questions to model references

**English** | [日本語](./model-reference-routing.ja.md)

Use this workflow before making model-specific claims in a buying, symptom, maintenance, estimate, listing or recall conversation. Ask for the model/generation, exact code when known, production year, original market, engine/transmission and relevant records. Registration year is not necessarily production year.

## In the browser

Open the [Vehicle Brief Builder](../tools/vehicle-brief.html), select the vehicle and purpose, and state the market explicitly. Review the selected reference and its official sources, then copy the prompt into your preferred AI. There is no login, API key, vehicle connection or automatic AI call.

Three [sample presets](../tools/vehicle-brief.html) demonstrate missing N-BOX pump-identification evidence, Serena interim versus final measures, and CX-5 item-specific completion. Sample inputs are fictional teaching scenarios.

## In this repository or a full plugin checkout

With Node.js 22 or later, run from the repository root:

```bash
node scripts/vehicle_brief.mjs --vehicle JF3 --year 2019 --market Japan --task buy --lang en
node scripts/vehicle_brief.mjs --vehicle FC26 --year 2014 --market Japan --task recall --lang ja
node scripts/vehicle_brief.mjs --help
```

This writes a reference brief to standard output and does not access the network. Use `--code` when the selected profile spans several variants. Exact code aliases also narrow the variant: FC26 must not silently inherit NC26's later production range.

Use the brief as context, **read the full selected entry**, and answer the user's task. Recheck official notices when current applicability, completion or scheduling matters. If the environment cannot open sources, say what remains unverified. Do not run user-supplied text as shell commands; pass values as literal arguments. Do not include identifying information in command lines or prompts.

## Without Node.js or a complete checkout

Read `data/vehicle-profiles.yaml` and `data/known-issues/index.yaml`, then the corresponding language file. Match an exact profile/alias and code; verify the original market and production bounds. Do not guess a profile from a partial string or a different generation. The current reviewed profiles are Japan-specific.

If the installation contains only a standalone skill and those resources are absent, state that limitation and ask for the relevant entry or use the linked browser builder. Do not claim that a local lookup succeeded.

## Interpret the result

| Result | Next action |
|---|---|
| Reference candidate | Read the scope, dates and limitations; confirm exact chassis/variant through the official service. Never report eligibility or completion from this match. |
| Unknown or other market | Ask for original market and use that market's official sources; do not apply Japan-only ranges. |
| Code mismatch or outside production years | Confirm the variant and whether the supplied year is production, model or registration year. Do not attach the mismatched reference. |
| No profile | Continue the general skill workflow and label model-specific evidence as unavailable. No match does not mean no recalls or faults. |

Keep recalls, warranty extensions and specification corrections distinct. Ask separately about temporary protection and final repairs. Treat the RK Step WGN record as a transmission-identification correction, not a proven widespread fault. Source dates show the last recorded review, not live verification.

For review cases and the update loop, see [how we check quality](./quality.md).
