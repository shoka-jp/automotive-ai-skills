# 🚗 Automotive AI Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/kamakura-s/automotive-ai-skills/graphs/commit-activity)

An open-source collection of **AI skills for automotive diagnostics, maintenance, repair, customization, and vehicle ownership** — for beginners and experienced mechanics alike.

**English** | [日本語](./README.ja.md)

---

## Overview

Large language models are genuinely useful in the garage — but only when prompted with structure, context, and awareness of their limits. This repository packages that structure as **skills**: curated prompt frameworks, workflows, and guardrails that turn a general-purpose AI assistant into a focused automotive helper.

Each skill defines:

- **What it can do** (capabilities, with honest limitations)
- **How to use it** (recommended workflow and context to provide)
- **Ready-to-use example prompts** you can copy and adapt

The skills are **platform-agnostic**: they work with Claude, ChatGPT, local models, or any capable AI assistant. They are documentation-first — no code required to use them.

## Features

- 🔧 **8 focused skills** covering diagnostics, repair, maintenance, buying, customization, EVs, and motorcycles
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

Not sure which one? See the ["Which skill do I need?" guide](./skills/README.md#which-skill-do-i-need).

## Installation

No installation is required — these skills are prompt frameworks, not software.

```bash
git clone https://github.com/kamakura-s/automotive-ai-skills.git
cd automotive-ai-skills
```

Or simply browse the [`skills/`](./skills/) folder on GitHub.

**Optional integrations:**

- **Claude Projects / Custom GPTs:** paste a skill's README into the project instructions or system prompt to create a dedicated assistant.
- **Claude Code / agent frameworks:** the skill READMEs can serve as the basis for agent skill definitions.
- **API applications:** use a skill's Description + Capabilities + Limitations sections as a system prompt scaffold.

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
│   └── faq.md                # Frequently asked questions
├── examples/
│   ├── README.md
│   ├── obd2-p0420-diagnosis.md       # Full example conversation
│   ├── used-car-inspection.md        # Full example conversation
│   └── maintenance-catchup-plan.md   # Full example conversation
└── skills/
    ├── README.md             # Skills index and selection guide
    ├── mechanic-assistant/
    ├── obd2-diagnostic-assistant/
    ├── vehicle-maintenance-planner/
    ├── used-car-inspector/
    ├── vehicle-troubleshooting/
    ├── vehicle-customization-advisor/
    ├── ev-assistant/
    └── motorcycle-mechanic/
```

## Example Conversations

Full annotated conversations live in [`examples/`](./examples/):

- [Diagnosing a P0420 without wasting money](./examples/obd2-p0420-diagnosis.md)
- [Inspecting a used car end-to-end](./examples/used-car-inspection.md)
- [Building a catch-up maintenance plan](./examples/maintenance-catchup-plan.md)

## Roadmap

- [ ] **Diesel Specialist** skill (common rail, DPF/EGR/SCR systems, glow plugs)
- [ ] **Classic Car Restorer** skill (points ignition, carburetors, rust assessment, parts sourcing)
- [ ] **Fleet Manager** skill (multi-vehicle scheduling, cost tracking, downtime planning)
- [ ] **Tire & Wheel Advisor** skill (deeper sizing, seasonal strategy, TPMS)
- [ ] Structured skill definitions (YAML frontmatter) for direct agent-framework consumption
- [ ] Translated skill content (Japanese first, tracking `README.ja.md`)
- [ ] Community-contributed model-specific known-issue databases
- [ ] Example integrations: Claude Project templates and system-prompt bundles

Have an idea? [Open an issue](../../issues) with the `enhancement` label.

## Contributing

Contributions are welcome — new skills, improvements to existing ones, corrections, translations, and example conversations. Please read:

- [CONTRIBUTING.md](./CONTRIBUTING.md) — process, style guide, and PR checklist
- [Skill Authoring Guide](./docs/skill-authoring-guide.md) — required structure for new skills
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

Good first contributions: fixing inaccuracies, adding example prompts, and expanding the FAQ.

## Safety Disclaimer

These skills provide general automotive information, **not professional advice**. Vehicle work involves safety-critical systems. Always verify specifications against factory documentation, and defer brake, steering, airbag (SRS), fuel, and high-voltage work to qualified professionals when in doubt. See the full [safety disclaimer](./docs/safety-disclaimer.md).

## License

[MIT](./LICENSE) © 2026 Sho Kamakura

## Recommended GitHub Topics

If you fork or reuse this repository, these topics help discoverability:

`ai` · `llm` · `prompt-engineering` · `automotive` · `car-maintenance` · `obd2` · `diagnostics` · `mechanic` · `ev` · `electric-vehicles` · `motorcycle` · `ai-skills` · `claude` · `chatgpt` · `assistant`
