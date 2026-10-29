# Known-Issues Database

**English** | [日本語](./README.ja.md)

A collection of **17 model-specific issue and verification entries**. Match the platform, production period, and market before using them to inform an AI conversation or a pre-purchase check.

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
- **Be honest about frequency.** A campaign population is not a failure count. State when no failure rate is established; do not claim that every example fails.
- **Explain the remedy and cost evidence.** Give the region, currency, and date of any supported estimate. If no verified range is available, say so and request a quote rather than inventing a price. Distinguish recalls from warranty extensions and verify individual eligibility.
- **Prefer primary sources.** Include manufacturer/regulator URLs, notice identifiers, and a verification date; retain scope limits and corrections. Label anecdotal evidence separately. No copyrighted text dumps.
- Entries about **defeating emissions or safety systems are not accepted** (see [CONTRIBUTING.md](../../CONTRIBUTING.md)).

Japanese-language entries are welcome — use [`TEMPLATE.ja.md`](./TEMPLATE.ja.md) and a `.ja.md` suffix. Entries for Japan-market vehicles (kei cars, JDM-only models) are especially valuable.

## Current entries

| Entry | Vehicle scope | Severity | 日本語 |
|---|---|---|---|
| [bmw-n20-timing-chain.md](./bmw-n20-timing-chain.md) | BMW N20/N26 2.0T (2011–2015-ish production) | Critical | [あり](./bmw-n20-timing-chain.ja.md) |
| [toyota-2az-fe-oil-consumption.md](./toyota-2az-fe-oil-consumption.md) | Toyota 2AZ-FE 2.4L (~2006–2011) | Major | [あり](./toyota-2az-fe-oil-consumption.ja.md) |
| [subaru-ej25-head-gasket.md](./subaru-ej25-head-gasket.md) | Subaru SOHC EJ25 (~1999–2011) | Major | [あり](./subaru-ej25-head-gasket.ja.md) |
| [honda-idcd-dct-judder.md](./honda-idcd-dct-judder.md) | Honda i-DCD hybrids (2013–2015 focus) | Major | [あり](./honda-idcd-dct-judder.ja.md) |
| [nissan-jatco-cvt-failure.md](./nissan-jatco-cvt-failure.md) | Nissan/Jatco CVTs (~2003–2018, worst 2003–2010 & 2013–2016) | Major | [あり](./nissan-jatco-cvt-failure.ja.md) |
| [toyota-zvw30-prius-egr-head-gasket.md](./toyota-zvw30-prius-egr-head-gasket.md) | Toyota Prius ZVW30 / 2ZR-FXE (2009–2015) | Major | [あり](./toyota-zvw30-prius-egr-head-gasket.ja.md) |
| [mazda-fd3s-13b-rew-compression-loss.md](./mazda-fd3s-13b-rew-compression-loss.md) | Mazda RX-7 FD3S / 13B-REW (1991–2002, all years) | Major | [あり](./mazda-fd3s-13b-rew-compression-loss.ja.md) |
| [subaru-ej20t-ringland-bearing.md](./subaru-ej20t-ringland-bearing.md) | Subaru EJ turbo WRX/STI (GC8/GDB/GRB, EJ255/257) | Major | [あり](./subaru-ej20t-ringland-bearing.ja.md) |
| [nissan-rb26-oil-pump-drive.md](./nissan-rb26-oil-pump-drive.md) | Nissan Skyline GT-R RB26DETT (BNR32/33/34) | Critical | [あり](./nissan-rb26-oil-pump-drive.ja.md) |
| [nissan-sr20det-chain-guide-rattle.md](./nissan-sr20det-chain-guide-rattle.md) | Nissan SR20DET/DE (S13/S14/S15 etc., 1989–2002) | Annoyance | [あり](./nissan-sr20det-chain-guide-rattle.ja.md) |
| [Step WGN transmission identification / judder](./honda-rk-stepwgn-cvt-judder.md) | RK1/2/5/6 (2009–2015; 4WD changed from 5AT to CVT) | Major if fault confirmed | [あり](./honda-rk-stepwgn-cvt-judder.ja.md) |
| [86 / BRZ valve springs](./toyota-86-subaru-brz-valve-spring.md) | Japan: ZN6 / ZC6; 2012-2013 (specified production ranges only) | Critical | [あり](./toyota-86-subaru-brz-valve-spring.ja.md) |
| [N-BOX fuel pump](./honda-nbox-jf3-jf4-fuel-pump.md) | Japan: N-BOX JF3 / JF4; 2017-2020 (listed DBA/6BA chassis subranges only) | Critical | [あり](./honda-nbox-jf3-jf4-fuel-pump.ja.md) |
| [Wagon R evaporator leak](./suzuki-wagon-r-mh23s-evaporator-leak.md) | Japan: Wagon R MH23S; 2008-2012 (specified production subranges only) | Major | [あり](./suzuki-wagon-r-mh23s-evaporator-leak.ja.md) |
| [Tanto brake booster corrosion](./daihatsu-tanto-la600s-brake-booster-corrosion.md) | Japan: Tanto LA600S / LA610S; 2013-2016 (specified production ranges only) | Critical | [あり](./daihatsu-tanto-la600s-brake-booster-corrosion.ja.md) |
| [Serena ECO motor bearing](./nissan-serena-c26-eco-motor-bearing.md) | Japan: Serena C26 / FC26 / NC26 / FNC26; 2010-2016 (model-code-specific production ranges) | Critical | [あり](./nissan-serena-c26-eco-motor-bearing.ja.md) |
| [CX-5 injector sealing / oil strainer](./mazda-cx5-ke2-injector-seal-oil-strainer.md) | Japan: CX-5 KE2FW / KE2AW diesel; 2012-2016 (campaign envelope; item (1) is a subset) | Critical | [あり](./mazda-cx5-ke2-injector-seal-oil-strainer.ja.md) |

*(This index is maintained by hand — add your entry to the table in the same PR.)*

## Machine-readable index

[`index.yaml`](./index.yaml) mirrors the table above with structured metadata (make, platform, years, severity, tags, file paths per language) for programmatic consumption — e.g., filtering entries for a specific vehicle before injecting them into an AI session. When contributing an entry, add it to `index.yaml` in the same PR.

New or reverified entries also record optional `markets`, `evidence_type` (`recall`, `warranty_extension`, or `manufacturer_specification`), `campaign_ids`, `source_urls`, and `last_verified` (verification date in Japan). Absence of these fields on a legacy entry means they have not been recorded, not that its evidence was rechecked. Summary years alone never establish eligibility; read the entry and use the manufacturer’s individual-vehicle lookup.
