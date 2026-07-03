# Body & Paint Assistant

**English** | [日本語](./README.ja.md)

An AI skill for vehicle bodywork and paint — dent and scratch assessment, repair method selection (PDR vs. filler vs. panel), paint matching and blending concepts, and honest guidance on where DIY ends.

## Description

Body and paint is the domain where "how hard can it be?" gets expensive. The Body & Paint Assistant helps you assess damage accurately (is that scratch through the clearcoat? is that dent PDR-able?), choose the right repair path, understand what makes paint match or mismatch, and — critically — recognize the jobs where DIY attempts reduce the car's value below doing nothing at all. It also covers detailing-adjacent correction (polishing, wet sanding) and the insurance-claim context around body repairs.

**Audience:** Owners deciding between DIY, a body shop, and living with it; detailing enthusiasts moving into correction; buyers evaluating repair quality.

## Capabilities

- **Damage assessment** — scratch depth diagnosis (clearcoat / base coat / primer / metal) with the fingernail and reflection tests, dent classification (size, location, crease vs. smooth, aluminum vs. steel panels), rust implications of broken paint, plastic vs. metal panel differences
- **Repair path selection** — paintless dent repair (PDR) suitability rules, filler-and-paint repairs, panel repair vs. replacement economics, when a smart repair (localized) works and when it shows
- **Paint systems** — how modern paint is layered (e-coat, primer, base, clear), finding your paint code, why the same code still mismatches (fade, metallic orientation, tinting), why blending into adjacent panels is standard practice, tri-coat/pearl complexity
- **DIY-appropriate work** — touch-up pens done properly (chip filling, leveling), clearcoat scratch polishing, headlight restoration, small-area rattle-can technique and its honest limits, trim and bumper scuff repair
- **Correction & detailing** — polishing theory (cut vs. finish), machine vs. hand, wet sanding risks and clearcoat thickness budgets, paint depth gauges, swirl prevention
- **Rust repair grades** — surface treatment vs. cut-and-weld, why bubbling paint means more than it shows, cavity protection after repair
- **Quality evaluation** — judging body shop work (panel gaps, orange peel comparison, tape lines, overspray, blend visibility), questions to ask a shop, what a proper estimate includes
- **Insurance context** — how claims interact with repair choice (OEM vs. aftermarket panels, diminished value concepts), documenting damage properly

## Example Prompts

```text
A door ding about 3 cm across, no crease, paint intact, middle of the
door skin. Is this a PDR job, and what should it roughly cost?
```

```text
A scratch on my rear quarter catches my fingernail but I can't see
primer. What layer am I into, and what are my repair options from
cheapest to best?
```

```text
I want to respray my own hood with rattle cans. Tell me honestly what
result I can expect versus a shop respray, and the technique if I proceed.
```

```text
The used car I'm viewing has one door that looks slightly different in
sunlight. How do I tell a good repaint from a bad one — and from factory?
```

```text
Paint is bubbling along the bottom of my tailgate. Why is this worse
than it looks, and what does a proper fix involve?
```

## Recommended Workflow

1. **Assess before deciding.** Describe the damage precisely: size, location on the panel, depth test results, panel material if known, and vehicle age/value.
2. **Get the full option tree.** Ask for every path from "live with it" to full panel replacement, with realistic costs and appearance outcomes for each.
3. **Match the repair to the car.** A 20-year-old commuter and a leased vehicle warrant different answers — say which yours is.
4. **For DIY:** ask for the honest expected result first, then the technique, materials list, and the failure modes that ruin it.
5. **For shop work:** get the quality-evaluation checklist before pickup, and inspect in direct sunlight.
6. **Photograph everything** before and after — for insurance, resale, and future sessions.

## Limitations

- **Color and finish cannot be judged remotely.** Metallic orientation, fade, and blend quality are sunlight-and-eyes judgments; the skill teaches you what to look for.
- **2K paints and isocyanate hardeners are genuinely hazardous** — spraying them requires supplied-air protection and ventilation; the skill will not coach unprotected spraying of catalyzed products.
- **Structural damage is out of scope.** Anything involving crash structure, airbag deployment, or frame measurement belongs to a collision shop with a bench — cosmetic advice stops where structure begins.
- **Cost estimates vary widely** by region, shop tier, and paint system; treat ranges as orientation for negotiating, not quotes.
- **DIY results depend on skill and conditions** more than in most automotive domains — dust, humidity, and temperature ruin work the instructions were right about.

## Related Skills

- [Used Car Inspector](../used-car-inspector/) — detecting prior bodywork before purchase
- [Classic Car Restorer](../classic-car-restorer/) — rust and refinishing in a restoration context
- [Vehicle Customization Advisor](../vehicle-customization-advisor/) — wraps, aero, and appearance modification planning
