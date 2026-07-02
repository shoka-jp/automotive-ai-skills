# Skill Authoring Guide

This guide defines the required structure and quality bar for skills in this repository. Follow it when creating a new skill or making substantial changes to an existing one.

## What makes a good skill

A skill earns its place when it satisfies all of these:

1. **Distinct scope.** It covers a job the existing skills do not, or covers a shared job for a meaningfully different audience/vehicle class (e.g., Motorcycle Mechanic vs. Mechanic Assistant).
2. **Workflow, not trivia.** The skill teaches a way of working with the AI — context to gather, order of operations, iteration pattern — not just a topic list.
3. **Honest limitations.** It states clearly what the AI cannot do in this domain and where professional help is mandatory.
4. **Safe by design.** It cannot be followed into a hazard by a beginner taking it literally.

## Directory layout

```text
skills/
└── your-skill-name/        # kebab-case, descriptive
    └── README.md           # the skill definition
```

Skills may add supporting files later (checklists, structured definitions), but `README.md` is the required core.

## Required README structure

Use this template. Every section is mandatory, in this order.

```markdown
# Skill Name

One-sentence summary of what the skill does and its scope.

## Description

2–4 sentences: the problem this skill solves, its approach, and how it
relates to (not replaces) professional resources.

**Audience:** who this is for, including experience range.

## Capabilities

- Bulleted list of concrete things the skill helps with
- Group with bold sub-headers if there are more than ~8 items
- Be specific: "interpret freeze frame data" beats "help with diagnostics"

## Example Prompts

At least 4 realistic prompts in fenced ```text blocks. Requirements:
- Use plausible, specific vehicles (real year/make/model/engine)
- Show the *variety* of the skill (diagnosis, planning, explanation…)
- Model good prompting: include the context the workflow says to gather

## Recommended Workflow

Numbered steps describing how to run a session with this skill:
1. What context to gather first
2. How to phrase the initial request
3. How to iterate (report findings, answer follow-ups)
4. How to verify results before acting

## Limitations

The most important section. Must cover, as applicable:
- What the AI cannot perceive or verify in this domain
- Where factory documentation overrides the assistant
- Which tasks must be deferred to professionals, and why
- Knowledge-cutoff and regional-variation caveats

## Related Skills

- Relative links to 2–3 skills this one hands off to or from,
  with a phrase explaining the relationship
```

## Writing rules

- **Voice:** professional, direct, practical. Write like a good shop foreman explains things — respectful of beginners, never condescending.
- **Specificity:** every capability and example should survive the question "could a reader act on this?"
- **Specs:** never present torque values, capacities, or clearances as authoritative. Frame as typical ranges + "verify against the factory manual."
- **Safety-critical systems** (brakes, steering, SRS, fuel, high-voltage): mention them only with explicit professional-deferral language.
- **Prohibited content:** anything enabling emissions-control defeat, safety-system defeat, odometer fraud, or immobilizer/anti-theft bypass. No exceptions.
- **Links:** relative paths only, so they work on GitHub and in clones.

## When you add a skill, also update

1. `skills/README.md` — add a row to the index table and, if appropriate, the "Which skill do I need?" list
2. `README.md` — add a row to the Skills table (and remove it from Roadmap if it was listed)
3. `README.ja.md` — add the corresponding row (English name + short Japanese gloss is fine)
4. `CHANGELOG.md` — add an entry under **[Unreleased]**

## Quality checklist

- [ ] Scope does not substantially duplicate an existing skill
- [ ] All seven sections present, in order
- [ ] ≥ 4 example prompts, each with realistic vehicle context
- [ ] Workflow is actionable step-by-step, not a restatement of capabilities
- [ ] Limitations are specific to this domain (not boilerplate)
- [ ] No authoritative safety-critical specs; professional deferrals present
- [ ] Index files and changelog updated
- [ ] All links resolve
