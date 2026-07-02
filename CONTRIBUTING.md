# Contributing to Automotive AI Skills

Thank you for considering a contribution! This project improves through the collective knowledge of mechanics, engineers, enthusiasts, and everyday owners. This guide explains how to contribute effectively.

## Ways to Contribute

- **Fix inaccuracies** — automotive misinformation can be expensive or dangerous; corrections are the most valuable contribution
- **Improve existing skills** — better example prompts, clearer workflows, missing capabilities, sharper limitations
- **Add a new skill** — see the [Skill Authoring Guide](./docs/skill-authoring-guide.md)
- **Add example conversations** — annotated real-world usage in `examples/`
- **Translate** — `README.ja.md` tracks the English README; other languages welcome
- **Report issues** — unclear docs, broken links, structural problems

## Getting Started

1. **Fork** the repository and clone your fork.
2. **Create a branch** from `main`:

   ```bash
   git checkout -b feat/diesel-specialist-skill
   ```

   Branch prefixes: `feat/` (new content), `fix/` (corrections), `docs/` (meta-documentation), `chore/` (housekeeping).
3. **Make your changes** following the style guide below.
4. **Open a pull request** against `main` with a clear description of what changed and why.

For substantial changes (a new skill, restructuring), **open an issue first** to discuss the direction before investing effort.

## Style Guide

### Documentation

- Write in **clear, professional English**. Short sentences beat long ones.
- Use **sentence case** for headings (`## Example prompts` style is fine; be consistent within a file — this repo uses Title Case for skill README section headings).
- One idea per bullet. Prefer bullets and tables over dense paragraphs.
- Wrap example prompts in fenced code blocks with the `text` language tag.
- Use relative links between files so they work on GitHub and in local clones.
- American English spelling (`tire`, not `tyre`), with international variants noted where they aid clarity.

### Skill READMEs

Every skill README **must** contain these sections in this order:

1. Title + one-line summary
2. `## Description` (with an **Audience** line)
3. `## Capabilities`
4. `## Example Prompts` (at least 4, in `text` code blocks)
5. `## Recommended Workflow` (numbered steps)
6. `## Limitations` (honest, specific — this section is mandatory and reviewed strictly)
7. `## Related Skills` (relative links)

### Technical accuracy

- **Never present a specific torque spec, capacity, or clearance as authoritative.** Frame such values as typical ranges and direct readers to factory documentation.
- **Safety-critical topics** (brakes, steering, SRS, fuel, high-voltage) must include an explicit deferral to professionals.
- Do not include instructions for **defeating emissions controls, safety systems, odometers, or immobilizers**. PRs containing such content will be declined.
- Cite the reasoning ("both banks lean suggests a shared cause") rather than bare assertions, so readers learn the method.

## Pull Request Checklist

Before submitting, confirm:

- [ ] New/changed skill READMEs contain all required sections in order
- [ ] All internal links are relative and resolve
- [ ] Example prompts are realistic and specific (real model years, plausible symptoms)
- [ ] Limitations section is present and honest
- [ ] No authoritative safety-critical specs presented without a "verify against factory manual" caveat
- [ ] `CHANGELOG.md` updated under **[Unreleased]** for user-visible changes
- [ ] Skills index (`skills/README.md`) and main README table updated if a skill was added/renamed

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat(skills): add diesel specialist skill
fix(obd2): correct P0171/P0174 shared-cause explanation
docs(readme): add Japanese translation note
```

## Review Process

- A maintainer will review your PR, usually within a week.
- Technical accuracy questions may require sources or reasoning — this is normal for automotive content, not distrust.
- Squash-merge is the default; keep PRs focused (one skill or one topic per PR).

## Questions?

Open a [discussion or issue](../../issues). For conduct concerns, see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md); for security concerns, see [SECURITY.md](./SECURITY.md).
