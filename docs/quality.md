---
title: How Automotive AI Skills improves with evidence
description: What the builder tests, what remains unmeasured, and how model requests and documented findings improve the knowledge base.
---
# How we check quality

**English** | [日本語](./quality.ja.md)

The [Vehicle Brief Builder](../tools/vehicle-brief.html) assembles questions and references. It does not run an AI model, diagnose a car, or query an official recall database. Our goal is to make the next conversation more specific and easier to verify.

## What is checked automatically

- Exact vehicle aliases, model-code differences, production-year bounds and original-market scope. A match is always a **reference candidate**, never proof of eligibility or completion.
- Recall versus warranty-extension versus specification/correction labels; source dates older than 180 days get a recheck notice. A fresh date still does not replace current official lookup.
- Browser/CLI output, bilingual workflows, and preset links that exclude personal notes, history, year and model code.
- Real-browser operation in English and Japanese: samples, clipboard and manual-copy fallback, Markdown download, field changes, source exclusions, clearing and mobile overflow.
- A generated data bundle that must match the reviewed source files, plus existing repository, site metadata and link checks.

Run the same local checks with Python + PyYAML and Node.js 22 or later:

```bash
python scripts/build_brief_data.py --check
python scripts/validate_repo.py
npm test
```

Browser checks use a real Jekyll build in [CI](https://github.com/shoka-jp/automotive-ai-skills/actions/workflows/ci.yml). Screenshots are attached to the run. The dependency-free builder itself does not require Node.js or Python in a visitor's browser.

## What these checks do not prove

Passing software tests is **not diagnostic accuracy**, an AI benchmark score, or clinical/safety validation. The downstream AI, its version, and the user's vehicle evidence vary. [Answer review cases](../evals/answer-cases.yaml) specify questions, required distinctions and unacceptable claims for reviewing actual AI outputs. They are authored scenarios, not confirmed real-world repairs; no model accuracy percentage is claimed.

The full library has 17 entries. The builder initially selects **7 source-reviewed entries through 8 Japan-market vehicle profiles**. Older community entries remain readable in the [full database](../data/known-issues/) but are not automatically injected until their sources and scope are reviewed. Other vehicles can use the general workflows without model-specific references.

## How a finding becomes an improvement

1. Submit a [vehicle request](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=vehicle-request.yml) or a [documented finding](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=verified-finding.yml). Remove identifying details and separate observation, diagnosis, repair and outcome.
2. A maintainer verifies public sources, original market, exact variant and dates. A report stays unverified until reviewed; one case does not establish a failure rate.
3. Update both language entries and the structured index. Add a profile in `data/vehicle-profiles.yaml` only when evidence supports it.
4. Add a regression case for the mistake or boundary. Rebuild with `python scripts/build_brief_data.py` and review the actual brief.
5. Merge after checks and document the change. Recheck outdated sources before extending coverage.

Data stays in the user's page while drafting. It is not sent to this project or stored in browser storage. Sharing an issue or pasting a brief into an AI is a separate user action and can make its contents available to that service.

## What to build next

- More source-reviewed model profiles, prioritized by concrete requests and available evidence.
- More variant boundaries and answer-review cases for mistakes found in use.
- Measured downstream-answer evaluations, with the model/version, prompts, rubric and failures published together before claiming improvement.

If this helps you prepare a viewing or workshop conversation, [star the project](https://github.com/shoka-jp/automotive-ai-skills) to find it again. Star saves the project; use GitHub's Watch controls separately if you want notifications. [GitHub explains stars here](https://docs.github.com/en/get-started/exploring-projects-on-github/saving-repositories-with-stars).
