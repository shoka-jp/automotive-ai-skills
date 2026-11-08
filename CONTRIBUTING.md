# Contributing to Automotive AI Skills

Thank you for considering a contribution! This project improves through the collective knowledge of mechanics, engineers, enthusiasts, and everyday owners. This guide explains how to contribute effectively.

## Find a first task

Browse [open good first issues](https://github.com/shoka-jp/automotive-ai-skills/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22); each describes the goal and how to check the result. Leave a note on an issue before starting so others can avoid duplicating the work. Questions, reports and pull requests are welcome in English or Japanese. You can contribute documentation or tests without a car or an AI account; check each issue for its requirements.

## Share feedback or edit in your browser

You can [share a question or first-use feedback](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=first-experience.yml) without writing code. Submitting opens a public GitHub issue and requires a GitHub account; remove identifying details before posting.

For a small documentation fix without installing Git:

1. Sign in to GitHub, open the file and select the pencil icon. If prompted, create a fork.
2. Edit and preview the change, then choose **Propose changes**.
3. Create a pull request with what changed and how you checked it. Questions are welcome if you get stuck.

## ブラウザーだけで参加する

コードを書かなくても、[初めて使った感想や質問](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=first-experience.yml)を送れます。送信にはGitHubアカウントが必要で、Issueは公開されます。車台番号や個人情報は書かないでください。

小さな文章の修正はGitのインストールなしでも提案できます。GitHubでファイルを開き、鉛筆アイコンを押し、案内に沿ってフォークします。修正・プレビュー後に変更を提案し、変更内容と確認したことを書いてプルリクエストを作成してください。

## 日本語

[初めての方向けIssue](https://github.com/shoka-jp/automotive-ai-skills/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22)から、目的と確認方法を見て選べます。作業の重複を避けるため、着手前にIssueへ一言コメントしてください。質問・報告・PRは日本語でも歓迎します。車やAIアカウントを使わずにできるドキュメントやテストの課題もあります。詳しくは各Issueをご確認ください。

リポジトリをフォークしてブランチを作り、小さく変更してからPRを開いてください。変更理由と確認結果をPRに記載し、英日両方の作成が難しければ未翻訳の箇所もお知らせください。大きな変更は先にIssueで相談してください。

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
- [ ] Substantive changes to an English skill README are mirrored in its `README.ja.md` (or flagged in the PR)
- [ ] If a skill was added/renamed, all indexes are updated: `skills/README.md`, `README.md`, `README.ja.md`, `index.html` (landing-page skill grid), and `llms.txt`

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

Open a [discussion or issue](https://github.com/shoka-jp/automotive-ai-skills/issues). For conduct concerns, see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md); for security concerns, see [SECURITY.md](./SECURITY.md).

## Improve a vehicle brief

Use the [quality workflow](./docs/quality.md) to contribute evidence and outcomes. Vehicle coverage needs original-market sources, precise variants, bilingual entries, and a regression case. Rebuild `assets/data/vehicle-brief.json` from its source files; do not edit the generated bundle alone. Reports are reviewed before they become reference claims.
