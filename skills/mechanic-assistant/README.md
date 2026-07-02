# Mechanic Assistant

**English** | [日本語](./README.ja.md)

A general-purpose AI skill that supports professional mechanics and serious DIYers through repair jobs — from initial symptom assessment to torque specs, procedure walkthroughs, and post-repair verification.

## Description

The Mechanic Assistant acts as a knowledgeable second opinion in the shop. It helps you reason through unfamiliar jobs, recall procedures and specifications, plan repair sequences, and avoid common pitfalls. It is designed to complement — not replace — factory service manuals, manufacturer technical bulletins, and hands-on judgment.

**Audience:** Professional technicians, apprentice mechanics, and experienced DIYers.

## Capabilities

- Walk through repair procedures step by step (e.g., timing belt replacement, wheel bearing service, head gasket jobs)
- Explain how vehicle systems work (ignition, fuel delivery, cooling, charging, braking, HVAC, drivetrain)
- Suggest diagnostic strategies when a symptom could have multiple causes
- Recall typical torque specification ranges and fastener patterns, with reminders to verify against the factory manual
- Recommend the right tools for a job, including specialty tools and acceptable substitutes
- Identify common failure modes for specific makes, models, and engine families
- Help interpret service manual language, wiring diagram conventions, and technical bulletin terminology
- Estimate job difficulty, labor time ranges, and whether a job is DIY-appropriate
- Advise on parts selection: OEM vs. aftermarket, remanufactured vs. new, what to replace "while you're in there"

## Example Prompts

```text
I'm replacing the timing belt on a 2012 Subaru Outback 2.5L. Walk me through
the procedure and tell me what else I should replace while I'm in there.
```

```text
What's the correct sequence and torque spec approach for head bolts on an
aluminum block engine? Explain why the sequence matters.
```

```text
A customer's car has a whining noise that changes with engine RPM but not
vehicle speed. What systems should I check first?
```

```text
I need to remove a seized brake caliper bracket bolt. What are my options,
from least to most aggressive?
```

```text
Explain how a dual-mass flywheel fails and how to tell if it needs replacement
during a clutch job.
```

## Recommended Workflow

1. **Describe the vehicle precisely.** Year, make, model, engine, transmission, and mileage. Trim level matters for many procedures.
2. **State the job or symptom.** Include what you have already checked or replaced.
3. **Ask for a plan before turning wrenches.** Get the full procedure, required tools, and parts list up front.
4. **Verify critical specifications.** Cross-check torque values, fluid capacities, and clearances against the factory service manual before applying them.
5. **Work iteratively.** Report what you find at each step (e.g., "the tensioner has play") and let the assistant adjust the plan.
6. **Confirm the repair.** Ask for a post-repair verification checklist (leak checks, relearn procedures, test drive criteria).

## Limitations

- **Not a substitute for factory documentation.** Torque specs, capacities, and procedures vary by market, production date, and running changes. Always verify safety-critical values against the OEM service manual.
- **Cannot see, hear, or measure.** Diagnosis quality depends entirely on the accuracy and detail of your descriptions and measurements.
- **Knowledge has a cutoff.** Very recent models, recalls, and technical service bulletins may not be covered.
- **No liability for repair outcomes.** Brakes, steering, suspension, airbags (SRS), and fuel systems are safety-critical; when in doubt, defer to a certified professional.
- **Regional variation.** Specifications and regulations differ between markets (e.g., US, EU, JDM vehicles).

## Related Skills

- [OBD-II Diagnostic Assistant](../obd2-diagnostic-assistant/) — for trouble-code-driven electronic diagnosis
- [Vehicle Troubleshooting](../vehicle-troubleshooting/) — for symptom-first triage before repair
- [Motorcycle Mechanic](../motorcycle-mechanic/) — for two-wheeled equivalents of this skill
