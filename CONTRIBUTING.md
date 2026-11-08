# Contributing to Automotive AI Skills

Thank you for considering a contribution! This project improves through the collective knowledge of mechanics, engineers, enthusiasts, and everyday owners. This guide explains how to contribute effectively.

## Find a first task

Browse [open good first issues](https://github.com/shoka-jp/automotive-ai-skills/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22); each describes the goal and how to check the result. Leave a note on an issue before starting so others can avoid duplicating the work. Questions, reports and pull requests are welcome in English or Japanese. You can contribute documentation or tests without a car or an AI account; check each issue for its requirements.

## Issue and pull request workflow

1. **Open a focused issue when useful.** Search existing issues first. For a [website/software bug](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=software-bug.yml), describe actual and expected behavior, safe reproduction steps and the relevant environment, or say what is unknown. For a [technical inaccuracy](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=inaccuracy-report.yml), identify the passage, concern and any available evidence. For an idea, use the [improvement proposal](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=feature-request.yml) to explain the problem and desired outcome; an implementation idea and acceptance criteria are helpful but optional. Small fixes may start with a PR; discuss larger, safety-sensitive or breaking changes in an issue first. Maintainers use `good first issue` for small tasks with clear prerequisites and completion criteria, and `help wanted` when outside help is welcome.
2. **Protect privacy.** Issues and PRs are public. Remove VINs, license plates, credentials, private network addresses, names, contact details and identifying documents from text, screenshots and logs. Do not reproduce unsafe conditions to collect evidence.
3. **Open a focused PR against `main`.** A concise title such as `fix: handle an empty response` is helpful; Japanese titles are welcome. Explain the problem, change, related issue, verification results and remaining risks in the PR template. Reference an issue with `#123`; use `Closes #123` only if the PR completes the whole issue. GitHub may close it when a PR targeting the default branch is merged if automatic closing is enabled. Use a plain reference for partial work.
4. **Verify and describe limits.** For code or data changes, run `npm test` and `python scripts/validate_repo.py` (Node.js 22+ and Python with PyYAML). After changing reviewed entries, profiles or workflows, rebuild with `python scripts/build_brief_data.py`, check with `python scripts/build_brief_data.py --check`, and include the generated bundle and appropriate regression cases. For documentation-only changes, check affected links and explain any skipped checks. Record commands and actual results, and explain checks not run or blocked. Disclose material AI assistance and external sources where applicable; the contributor remains responsible for the content.
5. **Review before merge.** A maintainer checks scope, verification, relevant CI, safety/privacy and unresolved feedback. Investigate failing checks; if an infrastructure issue prevents a check, document the limitation and maintainer decision rather than marking it as passed. Draft PRs and questions are welcome.

## Issue・PRの進め方

1. **Issueは１件につき１つの課題を目安に。** 既存Issueを確認し、[サイト・ソフトの不具合](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=software-bug.yml)は実際の動作・期待・安全な再現手順・環境を、[技術的な誤り](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=inaccuracy-report.yml)は該当箇所・懸念点・分かる範囲の根拠を記載します。不明な点は「不明」で大丈夫です。改善提案は[機能・改善の提案](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=feature-request.yml)へ、困りごとと期待する結果を記載します。実装案・完了条件は任意です。小さな修正はIssueなしでPRを開けます。大きな変更や安全に関わる変更は先に相談してください。 メンテナーは、前提と完了条件が明確な小さな課題に `good first issue`、協力を募集する課題に `help wanted` を付けます。
2. **個人情報を載せない。** IssueとPRは公開されます。車台番号、ナンバー、認証情報、非公開ネットワークアドレス、氏名・連絡先や識別できる書類は、画像やログからも取り除いてください。危険な状態を実車で再現しないでください。
3. **PRを小さく作る。** `main` 向けに作成し、背景・変更・関連Issue・検証結果・未確認事項をテンプレートに記載します。タイトルは短く具体的にし、`fix:` や `docs:` の接頭辞を使えます。日本語でも歓迎します。関連Issueは `#123` と参照でき、全体を解決する場合のみ `Closes #123` を使います。自動クローズが有効なら、既定ブランチ向けPRのマージ時に閉じられます。部分対応は番号だけを参照してください。
4. **検証と限界を記載。** コード・データ変更では `npm test` と `python scripts/validate_repo.py` を実行します（Node.js 22以上、PythonとPyYAML）。確認済み資料・車種プロファイル・ワークフローを変えた場合は `python scripts/build_brief_data.py` で再生成し、`--check` と回帰テストを実行して生成物も含めます。文書のみならリンクを確認し、省略した検証を記載します。実行したコマンドと結果、未実施・実行できなかった理由を正直に記載します。AI支援や外部資料を実質的に利用した場合はその旨も書き、内容の正確さは投稿者が確認してください。
5. **マージ前に確認。** メンテナーは範囲、検証、関連CI、安全・個人情報、未解決の指摘を確認します。失敗した検証は調査し、環境要因で実行できない場合は合格扱いにせず、制約と判断を記録します。下書きPRや質問も歓迎します。

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
