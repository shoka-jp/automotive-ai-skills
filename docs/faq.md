# Frequently Asked Questions

## General

### What exactly is a "skill" in this repository?

A documented prompt framework: a description of what an AI assistant can do in a specific automotive domain, the workflow to follow, example prompts, and the limitations to respect. There is no code — the skill *is* the documentation.

### Which AI assistants do these work with?

Any capable large language model: Claude, ChatGPT, Gemini, or good local models. The skills describe *how to work with* an assistant, so they are platform-agnostic. More capable models follow the workflows better and hallucinate specifications less — but no model is exempt from the verification rules.

### Do I need to paste the whole skill README into the AI?

No, but it helps for longer sessions. Two modes work well:

- **Lightweight:** copy an example prompt, adapt it, and follow the workflow yourself.
- **Persistent:** paste the full skill README into a Claude Project's instructions or a Custom GPT's system prompt so the assistant internalizes the workflow and limitations.

### Is this free to use commercially?

Yes — MIT licensed. Attribution is appreciated but the license only requires preserving the copyright notice. See [LICENSE](https://github.com/shoka-jp/automotive-ai-skills/blob/main/LICENSE).

### Can this repository read my car directly?

The skills are prompt frameworks and cannot connect to a vehicle by themselves. The companion [obd2-mcp](https://github.com/shoka-jp/obd2-mcp) project supplies MCP tools for diagnostic data. Start with the [hardware-free demo](./try-obd2-mcp.md) to inspect simulated responses before considering a vehicle connection.

### Are the example conversations real test results?

The [example conversations](../examples/) are teaching scenarios. Their dialogue, repair costs and outcomes should not be treated as verified customer results. The [MCP demo guide](./try-obd2-mcp.md) separately identifies program output captured from simulated data and links to the script and test run.

## Trust and accuracy

### Can I trust the torque specs / capacities the AI gives me?

**No — treat them as starting estimates only.** Language models recall plausible values, which is exactly what makes wrong ones dangerous. Every skill instructs you to verify specifications against factory documentation, and that instruction is the load-bearing part. See the [safety disclaimer](./safety-disclaimer.md).

### The AI diagnosed my car wrong. Is the skill broken?

Possibly, but check the usual causes first: incomplete context (mileage, recent work, exact symptom conditions), skipping the follow-up questions, or acting before running the discriminating tests. Diagnosis by description is probabilistic — the workflows exist to raise the hit rate, not to guarantee it. If a skill's guidance itself was misleading, please [open an issue](https://github.com/shoka-jp/automotive-ai-skills/issues); accuracy fixes are the most valued contribution.

### Why do the skills refuse some topics?

By design, this project excludes content that enables defeating emissions controls, safety systems, odometers, or immobilizers. These are illegal in most jurisdictions and dangerous. Contributions containing them are declined — see [CONTRIBUTING.md](../CONTRIBUTING.md).

## Usage

### Which skill do I start with?

See the [selection guide](../skills/README.md#which-skill-do-i-need). Rule of thumb: **code → OBD-II**, **symptom → Troubleshooting**, **known repair → Mechanic Assistant**, **planning → Maintenance Planner**.

### Can I use multiple skills in one conversation?

Yes — they are designed to hand off. A common chain: Vehicle Troubleshooting narrows the cause → OBD-II Diagnostic Assistant confirms with data → Mechanic Assistant guides the repair → Vehicle Maintenance Planner schedules follow-up. Just tell the assistant when you are switching modes.

### Do these work for my market (JDM / EU / etc.)?

The workflows are universal; specifics vary. OBD-II applies to 1996+ US vehicles and 2001+/2004+ EU petrol/diesel; specifications, regulations, and model availability differ by market. State your market in the vehicle context and the assistant will adjust.

### Can these skills look up my vehicle's history report or recalls?

No. The skills work with information you provide. Pull history reports, recall databases (e.g., NHTSA, your national authority), and TSBs yourself — the assistant can then help interpret them.

## Contributing

### I'm a mechanic, not a writer. Can I still contribute?

Yes, and your input is the most valuable kind. Open an issue describing the inaccuracy or missing knowledge in plain terms — a maintainer or another contributor can handle the wording.

### How do I propose a new skill?

Open an issue first with the skill's scope and audience, then follow the [Skill Authoring Guide](./skill-authoring-guide.md). See the [roadmap](../README.md#roadmap) for skills already planned.

### Why English first?

English is the shared contribution language. All 20 skills also have Japanese READMEs; four core skills have Spanish translations. See the [skills index](../skills/README.md) for coverage. Translation corrections and the remaining Spanish translations are welcome.
