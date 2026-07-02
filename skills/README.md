# Skills Index

Each skill is a self-contained folder with a `README.md` describing what it does, what it can help with, example prompts, a recommended workflow, and honest limitations. Every skill also has a Japanese version (`README.ja.md`) in the same folder.

| Skill | Best for | Audience |
|---|---|---|
| [Mechanic Assistant](./mechanic-assistant/) | Repair procedures, specs, tools, system explanations | Technicians & experienced DIYers |
| [OBD-II Diagnostic Assistant](./obd2-diagnostic-assistant/) | Trouble codes, freeze frame, live data interpretation | Anyone with a code reader |
| [Vehicle Maintenance Planner](./vehicle-maintenance-planner/) | Personalized preventive maintenance schedules | All vehicle owners |
| [Used Car Inspector](./used-car-inspector/) | Pre-purchase inspection and negotiation | Used car buyers |
| [Vehicle Troubleshooting](./vehicle-troubleshooting/) | Symptom-first diagnosis: noises, leaks, vibrations | All drivers |
| [Vehicle Customization Advisor](./vehicle-customization-advisor/) | Modification planning, fitment, build order, legality | Enthusiasts |
| [EV Assistant](./ev-assistant/) | Charging, battery health, range, EV maintenance | EV owners & shoppers |
| [Motorcycle Mechanic](./motorcycle-mechanic/) | Two-wheeled maintenance, diagnosis, and setup | Riders who wrench |

## Which skill do I need?

- **"A light is on / I have a code"** → OBD-II Diagnostic Assistant
- **"It makes a noise / smells / leaks / shakes"** → Vehicle Troubleshooting
- **"I know what's broken, help me fix it"** → Mechanic Assistant (or Motorcycle Mechanic)
- **"What service is due?"** → Vehicle Maintenance Planner
- **"Should I buy this car?"** → Used Car Inspector (plus EV Assistant for EVs)
- **"I want to modify it"** → Vehicle Customization Advisor
- **"EV-specific question"** → EV Assistant

Skills are designed to hand off to each other — Troubleshooting narrows the cause, Mechanic Assistant executes the fix, Maintenance Planner prevents the next failure.

## Adding a New Skill

See the [Skill Authoring Guide](../docs/skill-authoring-guide.md) and [CONTRIBUTING.md](../CONTRIBUTING.md). New skills should follow the same README structure: Description, Capabilities, Example Prompts, Recommended Workflow, Limitations, Related Skills.
