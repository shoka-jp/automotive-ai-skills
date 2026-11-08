# Example Conversations

Six annotated teaching conversations showing the skills in action. Each example demonstrates the workflow its skill recommends: context first, iteration, verification before spending money. The workshop and sales cases follow incomplete evidence through a follow-up, with explicit unresolved outcomes.

| Example | Skill demonstrated | Shows | 日本語 |
|---|---|---|---|
| [Diagnosing a P0420 without wasting money](./obd2-p0420-diagnosis.md) | OBD-II Diagnostic Assistant | Code interpretation, live-data reasoning, test-before-parts discipline | [日本語版](./obd2-p0420-diagnosis.ja.md) |
| [Inspecting a used car end-to-end](./used-car-inspection.md) | Used Car Inspector | Pre-viewing research, checklist use, findings → negotiation | [日本語版](./used-car-inspection.ja.md) |
| [Building a catch-up maintenance plan](./maintenance-catchup-plan.md) | Vehicle Maintenance Planner | Unknown-history planning, prioritization, DIY vs. shop split | [日本語版](./maintenance-catchup-plan.ja.md) |
| [Updating an intake for an intermittent concern](./service-intake-intermittent.md) | Service Intake Assistant | Customer corrections, not reproduced vs. not checked, diagnostic authorization | [日本語版](./service-intake-intermittent.ja.md) |
| [Comparing repair scope and a diagnostic credit](./repair-estimate-scope-credit.md) | Repair Estimate Reviewer | Incomplete quotes, conditional credit, remaining balance vs. total spend | [日本語版](./repair-estimate-scope-credit.ja.md) |
| [Revising a listing when evidence changes](./used-car-listing-evidence.md) | Used Car Listing Assistant | Claim ledger, visible defects, missing charges, publication blockers | [日本語版](./used-car-listing-evidence.ja.md) |

日本語では、[再現しない症状の受付](./service-intake-intermittent.ja.md)、[診断料の充当を含む見積比較](./repair-estimate-scope-credit.ja.md)、[追加情報による販売文の修正](./used-car-listing-evidence.ja.md)から実際の出力形式を確認できます。いずれも架空の教材で、実車の診断・修理実績ではありません。

## Notes on these examples

- Assistant responses are condensed for readability; real sessions include more follow-up questions.
- Vehicles, prices, and findings are realistic but fictional.
- **Annotations** (in blockquotes marked 💡) explain *why* each step matters — they are the teaching layer.
- “Outcome” can be a clear handoff or an unpublished draft with unresolved checks. Do not invent a repair, official lookup, approval, or publication to make a conversation look complete.
- [Answer review cases](../evals/answer-cases.yaml) include workshop and sales rubrics. They are authored review inputs, not automated AI accuracy tests.

## Contributing an example

Real (anonymized) sessions make the best examples. Requirements:

- Show the full arc: context → iteration → verification → outcome
- Annotate the key decision points with 💡 blockquotes
- Remove personal information (names, plates, VINs, locations)
- Link the demonstrated skill at the top
- Pair English and Japanese versions, label fictional inputs clearly, and distinguish observed evidence from invented teaching outcomes

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the PR process.
