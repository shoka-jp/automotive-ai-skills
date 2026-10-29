# 🚗 Automotive AI Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/shoka-jp/automotive-ai-skills/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/shoka-jp/automotive-ai-skills/graphs/commit-activity)

An open-source collection of **AI skills for automotive diagnostics, maintenance, repair, customization, and vehicle ownership** — for beginners and experienced mechanics alike.

**English** | [日本語](./README.ja.md) | [Español](./README.es.md)

📖 **Browse as a website:** [shoka-jp.github.io/automotive-ai-skills](https://shoka-jp.github.io/automotive-ai-skills/)

---

## Overview

Large language models are genuinely useful in the garage — but only when prompted with structure, context, and awareness of their limits. This repository packages that structure as **skills**: curated prompt frameworks, workflows, and guardrails that turn a general-purpose AI assistant into a focused automotive helper.

Each skill defines:

- **What it can do** (capabilities, with honest limitations)
- **How to use it** (recommended workflow and context to provide)
- **Ready-to-use example prompts** you can copy and adapt

The skills are **platform-agnostic**: they work with Claude, ChatGPT, local models, or any capable AI assistant. They are documentation-first — no code required to use them.

## Features

- 🔧 **20 focused skills** covering diagnostics, repair, maintenance, buying, customization, EVs, diesels, classics, fleets, tires, trucks, bodywork, towing, car audio, motorcycles, service intake, estimates, listings, and recalls
- 📋 **Structured workflows** that gather the right vehicle context before advising
- ⚠️ **Safety-first design** — every skill states its limitations and defers safety-critical work appropriately
- 🧩 **Composable** — skills hand off to each other (troubleshoot → diagnose → repair → maintain)
- 🌍 **Platform-agnostic** — usable with any capable AI assistant, no installation required
- 📖 **Beginner-friendly and expert-useful** — workflows scale from first oil change to head gasket jobs
- 🤝 **Contribution-ready** — clear authoring guide and templates for new skills

## Skills

| Skill | What it does |
|---|---|
| 🔧 [Mechanic Assistant](./skills/mechanic-assistant/) | Repair procedures, torque specs, tools, and system explanations |
| 🔌 [OBD-II Diagnostic Assistant](./skills/obd2-diagnostic-assistant/) | Interprets trouble codes, freeze frame, and live sensor data |
| 📅 [Vehicle Maintenance Planner](./skills/vehicle-maintenance-planner/) | Personalized preventive maintenance schedules and budgets |
| 🔍 [Used Car Inspector](./skills/used-car-inspector/) | Pre-purchase checklists, red flags, and negotiation support |
| 🩺 [Vehicle Troubleshooting](./skills/vehicle-troubleshooting/) | Symptom-first diagnosis: noises, leaks, vibrations, warning lights |
| 🏁 [Vehicle Customization Advisor](./skills/vehicle-customization-advisor/) | Modification planning, fitment math, build order, legality flags |
| ⚡ [EV Assistant](./skills/ev-assistant/) | Charging strategy, battery health, range, EV-specific maintenance |
| 🏍️ [Motorcycle Mechanic](./skills/motorcycle-mechanic/) | Two-wheeled maintenance, carbs and EFI, valves, suspension setup |
| 🛢️ [Diesel Specialist](./skills/diesel-specialist/) | Common rail, DPF/EGR/SCR aftertreatment, glow plugs, turbos |
| 🕰️ [Classic Car Restorer](./skills/classic-car-restorer/) | Points ignition, carburetors, rust assessment, parts sourcing |
| 🚛 [Fleet Manager](./skills/fleet-manager/) | Multi-vehicle scheduling, cost tracking, downtime planning |
| 🛞 [Tire & Wheel Advisor](./skills/tire-wheel-advisor/) | Sizing math, fitment, seasonal strategy, wear diagnosis, TPMS |
| 🚚 [Commercial Vehicle & Truck Assistant](./skills/commercial-vehicle-assistant/) | Air brakes, pre-trip inspections, load securing, weight awareness |
| 🎨 [Body & Paint Assistant](./skills/body-paint-assistant/) | Dent/scratch assessment, repair paths, paint matching, DIY limits |
| 🪝 [Towing & Trailer Advisor](./skills/towing-trailer-advisor/) | Hitches, tongue weight, trailer wiring and brakes, sway prevention |
| 🔊 [Car Audio & Electronics Assistant](./skills/car-audio-electronics/) | Head units, amps, dash cams, 12V wiring discipline, CAN-bus limits |
| 📝 [Service Intake Assistant](./skills/service-intake-assistant/) | Turn customer symptoms into an evidence-labeled intake note, focused follow-up questions, and a technician handoff. |
| 🧾 [Repair Estimate Reviewer](./skills/repair-estimate-reviewer/) | Compare repair estimates by scope, diagnostic evidence, parts, labor, arithmetic, and questions to resolve before authorization. |
| 🏷️ [Used Car Listing Assistant](./skills/used-car-listing-assistant/) | Draft used-vehicle listings from documented specifications, condition disclosures, and an explicit price breakdown without unsupported claims. |
| 📣 [Vehicle Recall Checker](./skills/vehicle-recall-checker/) | Guide official recall lookups, separate model-level notices from vehicle applicability, and document completion evidence or unknown status. |

Not sure which one? See the ["Which skill do I need?" guide](./skills/README.md#which-skill-do-i-need).

🇯🇵 **All skills are also available in Japanese** — open the `README.ja.md` in each skill folder, or start from the [Japanese README](./README.ja.md). Japan-specific guides (shaken inspection checklist, market notes) live in [`docs/ja/`](./docs/ja/).

Try the companion tool: [car-free OBD-II MCP demo](./docs/try-obd2-mcp.md) — commands, captured simulated output and limitations.

## Installation

No installation is required to read and use the skills — browse [`skills/`](./skills/) or the [website](https://shoka-jp.github.io/automotive-ai-skills/). For deeper integration:

### Claude Code (plugin — recommended)

The repository is a Claude Code plugin marketplace. Inside Claude Code:

```text
/plugin marketplace add shoka-jp/automotive-ai-skills
/plugin install automotive-ai-skills@automotive-ai-skills
```

All 20 skills install as native skills (`SKILL.md` in each skill folder) and trigger automatically when you ask automotive questions.

### OpenAI Codex

`AGENTS.md` is picked up automatically when you run `codex` inside a clone of this repo. For global setup or per-skill slash commands, see the [Codex guide](./integrations/codex.md).

### Read your actual car: obd2-mcp 🔌

These skills are the *knowledge* layer. The companion [**obd2-mcp**](https://github.com/shoka-jp/obd2-mcp) MCP server is the *tool* layer — it lets the AI read real trouble codes, live data, and freeze frames from your car through a cheap ELM327 adapter (a mock vehicle is included, so no hardware is needed to try it):

[Build from source and try the mock vehicle](https://github.com/shoka-jp/obd2-mcp/blob/main/docs/try-mock.md)

### Everything else

```bash
git clone https://github.com/shoka-jp/automotive-ai-skills.git
```

- **Claude Projects / Custom GPTs:** paste a skill's README into the project instructions or system prompt — see the [Claude Project template](./integrations/claude-project-template.md).
- **API applications / agent frameworks:** use each skill's `skill.yaml` for routing metadata and the README as the knowledge payload.

## Usage

1. **Pick a skill** that matches your situation (see the table above).
2. **Read its Recommended Workflow** — each skill tells you what context to gather (vehicle details, symptoms, measurements).
3. **Copy an example prompt** and adapt it with your vehicle's details.
4. **Work iteratively.** Report findings back; the workflows are designed as conversations, not one-shot questions.
5. **Respect the limitations section.** Verify safety-critical specs against factory documentation, and defer high-risk work to professionals.

### Quick example

> **You:** My 2015 Honda Civic shows code P0420. Does this always mean the catalytic converter is bad? What should I test before replacing it?
>
> **Assistant:** Not necessarily — P0420 means the catalyst *efficiency test* failed, and the converter is only one possible cause. Before spending $1,000+ on a converter, check: (1) the downstream O2 sensor's response, (2) exhaust leaks ahead of the sensor, (3) stored misfire or fuel-trim codes that could damage the readings... *(continues with a test sequence)*

More in [`examples/`](./examples/).

## Repository Structure

```text
automotive-ai-skills/
├── README.md                 # This file
├── README.ja.md              # Japanese translation
├── LICENSE                   # MIT
├── CONTRIBUTING.md           # How to contribute
├── CODE_OF_CONDUCT.md        # Contributor Covenant v2.1
├── CHANGELOG.md              # Version history
├── SECURITY.md               # Security policy
├── docs/
│   ├── getting-started.md    # New-user walkthrough
│   ├── skill-authoring-guide.md  # How to write a new skill
│   ├── safety-disclaimer.md  # Full safety and liability notes
│   ├── faq.md                # Frequently asked questions
│   └── ja/                   # Japan-specific guides (shaken checklist, market notes)
├── data/
│   └── known-issues/         # Community model-specific known-issue entries
├── examples/                 # Full example conversations (EN + JA)
│   ├── README.md
│   ├── obd2-p0420-diagnosis.md       (+ .ja.md)
│   ├── used-car-inspection.md        (+ .ja.md)
│   └── maintenance-catchup-plan.md   (+ .ja.md)
├── integrations/             # Claude Project template, combined system prompt
└── skills/                   # 20 skills; each folder has README.md,
    ├── README.md             #   README.ja.md, SKILL.md, and skill.yaml
    ├── mechanic-assistant/
    ├── obd2-diagnostic-assistant/
    ├── vehicle-maintenance-planner/
    ├── used-car-inspector/
    ├── vehicle-troubleshooting/
    ├── vehicle-customization-advisor/
    ├── ev-assistant/
    ├── motorcycle-mechanic/
    ├── diesel-specialist/
    ├── classic-car-restorer/
    ├── fleet-manager/
    ├── tire-wheel-advisor/
    ├── commercial-vehicle-assistant/
    ├── body-paint-assistant/
    ├── towing-trailer-advisor/
    ├── car-audio-electronics/
    ├── service-intake-assistant/
    ├── repair-estimate-reviewer/
    ├── used-car-listing-assistant/
    └── vehicle-recall-checker/
```

## Example Conversations

Full annotated conversations live in [`examples/`](./examples/):

- [Diagnosing a P0420 without wasting money](./examples/obd2-p0420-diagnosis.md)
- [Inspecting a used car end-to-end](./examples/used-car-inspection.md)
- [Building a catch-up maintenance plan](./examples/maintenance-catchup-plan.md)

## Roadmap

- [x] **Diesel Specialist** skill (common rail, DPF/EGR/SCR systems, glow plugs)
- [x] **Classic Car Restorer** skill (points ignition, carburetors, rust assessment, parts sourcing)
- [x] **Fleet Manager** skill (multi-vehicle scheduling, cost tracking, downtime planning)
- [x] **Tire & Wheel Advisor** skill (deeper sizing, seasonal strategy, TPMS)
- [x] Translated skill content — Japanese versions of all 12 skills (`README.ja.md` in each skill folder)
- [x] Structured skill definitions (`skill.yaml` per skill) for direct agent-framework consumption
- [x] Japanese translations of example conversations
- [x] Community known-issue database — structure, template, and first entry in [`data/known-issues/`](./data/known-issues/); **entries wanted!**
- [x] Example integrations: Claude Project template and combined system prompt in [`integrations/`](./integrations/)
- [x] Commercial Vehicle & Truck Assistant skill (air brakes, pre-trip inspection, load securing)
- [x] Body & Paint Assistant skill (dent assessment, paint matching, DIY correction limits)
- [x] Known-issues coverage expanded — 11 entries covering BMW, Toyota, Subaru, Honda, Nissan, and Mazda, all bilingual — and growing; **community entries wanted, ongoing**
- [x] Additional languages started — Spanish README ([README.es.md](./README.es.md)); skill-content translations community-driven
- [x] Towing & Trailer Advisor skill (hitches, tongue weight, wiring, sway)
- [x] Car Audio & Electronics Assistant skill (head units, 12V discipline, CAN awareness)
- [x] Spanish skill translations started — 4 core skills done (Mechanic, OBD-II, Maintenance Planner, Used Car Inspector); **remaining 16 welcome from contributors**
- [x] Structured known-issues data format — [`data/known-issues/index.yaml`](./data/known-issues/index.yaml)
- [ ] Complete Spanish coverage of all skills
- [ ] Motorhome/RV habitation systems skill (water, gas, leisure batteries, solar)
- [ ] Welding & fabrication basics skill (safety-first, when to outsource)

Have an idea? [Open an issue](https://github.com/shoka-jp/automotive-ai-skills/issues) with the `enhancement` label.

## Contributing

Contributions are welcome — new skills, improvements to existing ones, corrections, translations, and example conversations. Please read:

- [CONTRIBUTING.md](./CONTRIBUTING.md) — process, style guide, and PR checklist
- [Skill Authoring Guide](./docs/skill-authoring-guide.md) — required structure for new skills
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

Good first contributions: fixing inaccuracies, adding example prompts, and expanding the FAQ.

## Support the project

If these skills help with your automotive workflow:

- [Follow shoka-jp](https://github.com/shoka-jp) for related automotive AI projects.
- Star this repository to bookmark it, or share a skill with someone who could use it.
- Help improve the examples, correct inaccuracies, or contribute a translation using the [contribution guide](./CONTRIBUTING.md).
- [Sponsor the maintainer](https://github.com/sponsors/shoka-jp) to support this open-source work.

## Safety Disclaimer

These skills provide general automotive information, **not professional advice**. Vehicle work involves safety-critical systems. Always verify specifications against factory documentation, and defer brake, steering, airbag (SRS), fuel, and high-voltage work to qualified professionals when in doubt. See the full [safety disclaimer](./docs/safety-disclaimer.md).

## License

[MIT](https://github.com/shoka-jp/automotive-ai-skills/blob/main/LICENSE) © 2026 Sho Kamakura

## Recommended GitHub Topics

If you fork or reuse this repository, these topics help discoverability:

`ai` · `llm` · `prompt-engineering` · `automotive` · `car-maintenance` · `obd2` · `diagnostics` · `mechanic` · `ev` · `electric-vehicles` · `motorcycle` · `ai-skills` · `claude` · `chatgpt` · `assistant`
