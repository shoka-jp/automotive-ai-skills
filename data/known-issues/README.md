# Known-Issues Database

**English** | [日本語](./README.ja.md)

A community-contributed collection of **model-specific known issues** — the "everyone in the owners' club knows this" knowledge that makes the skills dramatically more useful for a specific vehicle.

Each entry is one Markdown file describing one issue on one platform (model/generation/engine). Entries are designed to be pasted into an AI session alongside a skill, or read directly by a buyer or owner.

## How to use these entries

1. Find entries matching your vehicle (file names are `<make>-<platform-or-model>-<issue>.md`).
2. Paste the relevant entries into your AI conversation along with your question — e.g., combine with the [Used Car Inspector](../../skills/used-car-inspector/) before a viewing.
3. Treat entries as **leads to verify**, not verdicts: production changes and regional differences mean your exact vehicle may differ.

## Contributing an entry

Copy [`TEMPLATE.md`](./TEMPLATE.md), fill in every section, and open a PR. Requirements:

- **One issue per file.** Split multi-issue write-ups.
- **Scope precisely.** Years, engine codes, and markets. "BMW timing chains" is too broad; "N20 engines built before ~2015" is right.
- **Describe symptoms observably.** What an owner can hear, see, or measure — not just the failed part.
- **Be honest about frequency.** "Known failure point" and "every single one fails" are different claims; do not exaggerate.
- **State the fix and realistic cost range**, marking the currency and region your estimate comes from.
- **Note your sources** in general terms (owner communities, TSB numbers, personal shop experience). No copyrighted text dumps.
- Entries about **defeating emissions or safety systems are not accepted** (see [CONTRIBUTING.md](../../CONTRIBUTING.md)).

Japanese-language entries are welcome — use [`TEMPLATE.ja.md`](./TEMPLATE.ja.md) and a `.ja.md` suffix. Entries for Japan-market vehicles (kei cars, JDM-only models) are especially valuable.

## Current entries

| Entry | Vehicle scope | Severity | 日本語 |
|---|---|---|---|
| [bmw-n20-timing-chain.md](./bmw-n20-timing-chain.md) | BMW N20/N26 2.0T (2011–2015-ish production) | Critical | [あり](./bmw-n20-timing-chain.ja.md) |
| [toyota-2az-fe-oil-consumption.md](./toyota-2az-fe-oil-consumption.md) | Toyota 2AZ-FE 2.4L (~2006–2011) | Major | [あり](./toyota-2az-fe-oil-consumption.ja.md) |
| [subaru-ej25-head-gasket.md](./subaru-ej25-head-gasket.md) | Subaru SOHC EJ25 (~1999–2011) | Major | [あり](./subaru-ej25-head-gasket.ja.md) |
| [honda-idcd-dct-judder.md](./honda-idcd-dct-judder.md) | Honda i-DCD hybrids (2013–2015 focus) | Major | [あり](./honda-idcd-dct-judder.ja.md) |

*(This index is maintained by hand — add your entry to the table in the same PR.)*
