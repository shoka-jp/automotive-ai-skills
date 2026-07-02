# Getting Started

This guide takes you from "I found this repository" to a productive AI-assisted automotive session in about five minutes.

## What these skills are (and aren't)

Each skill in [`skills/`](../skills/) is a **prompt framework**: a documented way of working with an AI assistant on a specific automotive task. There is nothing to install or run. The value is in:

- knowing **what context to provide** (the difference between a generic answer and a useful one),
- following a **workflow** that mirrors how good technicians actually diagnose and work, and
- understanding the **limitations**, so you know when to trust the output and when to verify.

They are **not** a replacement for factory service manuals, professional judgment, or physical inspection.

## Step 1 — Pick your skill

Use the [selection guide](../skills/README.md#which-skill-do-i-need). The most common entry points:

- Warning light or scanner code → [OBD-II Diagnostic Assistant](../skills/obd2-diagnostic-assistant/)
- Noise, leak, smell, vibration → [Vehicle Troubleshooting](../skills/vehicle-troubleshooting/)
- "What service does my car need?" → [Vehicle Maintenance Planner](../skills/vehicle-maintenance-planner/)

## Step 2 — Gather your vehicle context

Almost every skill needs this baseline. Have it ready before you start:

```text
Vehicle: [year] [make] [model] [trim]
Engine:  [displacement, cylinders, turbo/NA, fuel type]
Transmission: [auto/manual/CVT]
Mileage: [current]
Recent work: [anything replaced or serviced recently]
```

The more precise this is, the better the answers. "My Civic" and "my 2015 Civic 1.8 CVT with 130k miles" get very different quality of advice.

## Step 3 — Start with an example prompt

Every skill README has an **Example Prompts** section. Copy one, replace the details with yours, and paste it into your AI assistant (Claude, ChatGPT, or any capable model).

For a more persistent setup, paste the entire skill README into:

- a **Claude Project's** instructions,
- a **Custom GPT's** system prompt, or
- your agent framework's system prompt.

This primes the assistant with the skill's workflow and limitations for the whole conversation.

## Step 4 — Work the conversation, not the question

The skills are designed for iteration:

1. Describe the situation with full context.
2. Answer the assistant's follow-up questions — they discriminate between causes.
3. Do the suggested checks **in the real world**.
4. Report what you found, including measurements.
5. Repeat until the diagnosis is confirmed or the plan is complete.

The single biggest usage mistake is treating the assistant as a search engine ("P0420 fix") instead of a diagnostic partner.

## Step 5 — Verify before you act

Before applying any safety-relevant advice:

- **Cross-check specs** (torque values, capacities, clearances) against the factory service manual.
- **Confirm the diagnosis with a physical test** before buying parts.
- **Defer to a professional** for brakes, steering, SRS/airbags, fuel systems, and anything high-voltage — the skills will tell you when you have reached that boundary.

Read the full [safety disclaimer](./safety-disclaimer.md).

## Next steps

- Browse the annotated [example conversations](../examples/) to see complete sessions.
- Read the [FAQ](./faq.md).
- Want to improve or add a skill? See the [Skill Authoring Guide](./skill-authoring-guide.md) and [CONTRIBUTING.md](../CONTRIBUTING.md).
