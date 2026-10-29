# Agent Instructions — Automotive AI Skills

This file is read automatically by OpenAI Codex and other AGENTS.md-aware coding agents working in this repository. It serves two purposes: **using** the skills to answer automotive questions, and **contributing** to the repository correctly.

## Using the skills

This repository contains 20 automotive advisory skills. When the user asks an automotive question, adopt the matching skill by reading its `README.md` and following its recommended workflow and limitations:

| When the user asks about… | Read and follow |
|---|---|
| A warning light or scanner code (P0xxx…) | `skills/obd2-diagnostic-assistant/README.md` |
| A noise, vibration, smell, leak, or drivability symptom | `skills/vehicle-troubleshooting/README.md` |
| Executing a known repair, tools, procedures | `skills/mechanic-assistant/README.md` |
| What service is due, maintenance plans/budgets | `skills/vehicle-maintenance-planner/README.md` |
| Buying or inspecting a used vehicle | `skills/used-car-inspector/README.md` |
| Modifications, wheels/suspension/tune plans | `skills/vehicle-customization-advisor/README.md` |
| EVs: charging, battery health, range | `skills/ev-assistant/README.md` |
| Motorcycles and scooters | `skills/motorcycle-mechanic/README.md` |
| Diesels: DPF, EGR, AdBlue, glow plugs | `skills/diesel-specialist/README.md` |
| Classic cars: points, carbs, rust, parts sourcing | `skills/classic-car-restorer/README.md` |
| Managing multiple vehicles | `skills/fleet-manager/README.md` |
| Tires, wheels, sizing, TPMS | `skills/tire-wheel-advisor/README.md` |
| Trucks, air brakes, load securing | `skills/commercial-vehicle-assistant/README.md` |
| Dents, scratches, rust bubbles, paint | `skills/body-paint-assistant/README.md` |
| Towing, hitches, trailers | `skills/towing-trailer-advisor/README.md` |
| Car stereo, dash cams, 12V wiring | `skills/car-audio-electronics/README.md` |
| Service intake, customer concerns, technician handoff | `skills/service-intake-assistant/README.md` |
| Written repair estimates, scope and cost comparisons | `skills/repair-estimate-reviewer/README.md` |
| Selling a used vehicle, listing claims and disclosures | `skills/used-car-listing-assistant/README.md` |
| Recall applicability, official lookup and completion records | `skills/vehicle-recall-checker/README.md` |

Japanese versions exist as `README.ja.md` in each skill folder — reply in the language the user writes in. Model-specific known issues live in `data/known-issues/` (machine-readable index: `index.yaml`).

For model-specific questions, follow [reference routing](docs/model-reference-routing.md). The shared browser/CLI selector uses reviewed profiles, exact model codes, production-year bounds, and an explicit market. Read the full matched entry; no match is not a clean bill of health. Never infer individual recall eligibility or completion from the profile.

**Universal rules, regardless of skill:**

1. Gather vehicle context (year, make, model, engine, mileage, market) before substantive advice.
2. Present torque specs, capacities, and clearances only as typical ranges to verify against factory documentation.
3. Defer hands-on brake, steering, SRS/airbag, fuel-system, and EV high-voltage work to qualified professionals.
4. Never assist with defeating emissions controls, safety systems, odometers, or immobilizers.

## Contributing to this repository

When editing or adding content here:

- **Skill structure is fixed.** Every skill folder contains `README.md` (sections in order: Description with Audience, Capabilities, Example Prompts, Recommended Workflow, Limitations, Related Skills), `README.ja.md`, `SKILL.md` (Claude Code format), and `skill.yaml`. New skills need all four — see `docs/skill-authoring-guide.md`.
- **Bilingual rule:** substantive changes to an English skill README must be mirrored in its `README.ja.md` (or flagged in the PR if you cannot translate).
- **Safety rule:** never present safety-critical specifications as authoritative; never add content enabling emissions/safety-system defeat, odometer fraud, or immobilizer bypass — such PRs are declined per `CONTRIBUTING.md`.
- **Keep indexes in sync:** a new or renamed skill also updates `skills/README.md`, `README.md`, `README.ja.md`, `index.html` (landing page skill grid), `llms.txt`, and `CHANGELOG.md` under `[Unreleased]`.
- **Known-issue entries** follow `data/known-issues/TEMPLATE.md` (or `TEMPLATE.ja.md`) and must be added to both the README tables and `index.yaml`.
- **Links are relative** so they work on GitHub and on the GitHub Pages site (`.md` links are auto-converted to `.html`).
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).

- **Builder data:** after changing reviewed model entries, profiles, or brief workflows, run `python scripts/build_brief_data.py` and `npm test`. Commit the generated `assets/data/vehicle-brief.json` with its sources. Add a regression case for each new model boundary or corrected behavior.
