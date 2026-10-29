# 🚗 Automotive AI Skills（自動車AIスキル集）

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/shoka-jp/automotive-ai-skills/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

**自動車の診断・整備・修理・カスタマイズ・車両所有**に関するAIスキルのオープンソースコレクションです。初心者からプロの整備士まで幅広く活用できます。

[English](./README.md) | **日本語** | [Español](./README.es.md)

📖 **Webサイト版:** [shoka-jp.github.io/automotive-ai-skills](https://shoka-jp.github.io/automotive-ai-skills/)

---

## 概要

大規模言語モデル（LLM）はガレージでも十分に役立ちます。ただし、それは適切な構造・文脈・限界の認識を持ってプロンプトを与えた場合に限ります。本リポジトリはその構造を「**スキル**」としてパッケージ化したものです。厳選されたプロンプトフレームワーク、ワークフロー、ガードレールにより、汎用AIアシスタントを自動車特化のアシスタントに変えます。

各スキルには以下が定義されています。

- **できること**（機能一覧と、正直な限界の明記）
- **使い方**（推奨ワークフローと、提供すべき車両情報）
- **そのまま使えるプロンプト例**

スキルは**プラットフォーム非依存**です。Claude、ChatGPT、ローカルモデルなど、十分な能力を持つAIアシスタントであればどれでも利用できます。ドキュメント主体のため、利用にコードは不要です。

## 特徴

- 🔧 診断・修理・整備・購入・カスタム・EV・ディーゼル・旧車・フリート・タイヤ・トラック・板金塗装・牽引・オーディオ・バイク・整備受付・見積もり・販売説明・リコール確認をカバーする**20のスキル**
- 📋 助言の前に適切な車両情報を集める**構造化ワークフロー**
- ⚠️ **安全第一の設計** — 全スキルが限界を明記し、安全に関わる作業は専門家に委ねる方針
- 🧩 **スキル間の連携** — トラブルシュート → 診断 → 修理 → 予防整備へと引き継ぎ可能
- 🌍 **プラットフォーム非依存** — インストール不要
- 📖 **初心者にもプロにも有用** — 初めてのオイル交換からヘッドガスケット交換まで
- 🤝 **コントリビューション歓迎** — 新スキル作成ガイドとテンプレートを用意

## スキル一覧

すべてのスキルに日本語版があります（下表のリンクは日本語版です。各ページから英語版に切り替えられます）。

| スキル | 内容 |
|---|---|
| 🔧 [Mechanic Assistant（整備士アシスタント）](./skills/mechanic-assistant/README.ja.md) | 修理手順、トルク値、工具、システム解説 |
| 🔌 [OBD-II Diagnostic Assistant（OBD-II診断）](./skills/obd2-diagnostic-assistant/README.ja.md) | 故障コード、フリーズフレーム、ライブデータの解釈 |
| 📅 [Vehicle Maintenance Planner（整備計画）](./skills/vehicle-maintenance-planner/README.ja.md) | 車両に合わせた予防整備スケジュールと費用計画 |
| 🔍 [Used Car Inspector（中古車チェック）](./skills/used-car-inspector/README.ja.md) | 購入前チェックリスト、注意サイン、価格交渉支援 |
| 🩺 [Vehicle Troubleshooting（症状別トラブルシュート）](./skills/vehicle-troubleshooting/README.ja.md) | 異音・漏れ・振動・警告灯からの原因絞り込み |
| 🏁 [Vehicle Customization Advisor（カスタム相談）](./skills/vehicle-customization-advisor/README.ja.md) | 改造計画、フィッティング計算、施工順序、車検・法規面の注意 |
| ⚡ [EV Assistant（EVアシスタント）](./skills/ev-assistant/README.ja.md) | 充電戦略、バッテリー健全性、航続距離、EV特有の整備 |
| 🏍️ [Motorcycle Mechanic（バイク整備）](./skills/motorcycle-mechanic/README.ja.md) | 二輪の整備・診断、キャブ/FI、バルブ、サスセッティング |
| 🛢️ [Diesel Specialist（ディーゼル専門）](./skills/diesel-specialist/README.ja.md) | コモンレール、DPF/EGR/アドブルー、グロープラグ、ターボ |
| 🕰️ [Classic Car Restorer（旧車レストア）](./skills/classic-car-restorer/README.ja.md) | ポイント点火、キャブレター、錆診断、絶版部品の調達 |
| 🚛 [Fleet Manager（フリート管理）](./skills/fleet-manager/README.ja.md) | 複数車両の整備スケジュール、コスト追跡、稼働計画 |
| 🛞 [Tire & Wheel Advisor（タイヤ&ホイール）](./skills/tire-wheel-advisor/README.ja.md) | サイズ計算、フィッティング、夏冬戦略、摩耗診断、TPMS |
| 🚚 [Commercial Vehicle & Truck Assistant（商用車・トラック）](./skills/commercial-vehicle-assistant/README.ja.md) | エアブレーキ、運行前点検、固縛、重量の基礎 |
| 🎨 [Body & Paint Assistant（板金・塗装）](./skills/body-paint-assistant/README.ja.md) | へこみ・傷の評価、修理方法の選択、色合わせ、DIYの限界 |
| 🪝 [Towing & Trailer Advisor（牽引・トレーラー）](./skills/towing-trailer-advisor/README.ja.md) | ヒッチ、垂直荷重、トレーラー配線とブレーキ、蛇行予防 |
| 🔊 [Car Audio & Electronics Assistant（オーディオ・電装）](./skills/car-audio-electronics/README.ja.md) | ヘッドユニット、アンプ、ドラレコ、12V配線の規律、CANの限界 |
| 📝 [Service Intake Assistant（整備受付）](./skills/service-intake-assistant/README.ja.md) | 症状の聞き取り、申告と確認結果の区別、整備士への申し送り |
| 🧾 [Repair Estimate Reviewer（修理見積もりレビュー）](./skills/repair-estimate-reviewer/README.ja.md) | 修理見積もりの作業範囲・根拠・計算・確認事項を比較 |
| 🏷️ [Used Car Listing Assistant（中古車販売説明）](./skills/used-car-listing-assistant/README.ja.md) | 裏付けのある仕様・状態・価格内訳から中古車の掲載原稿を作成 |
| 📣 [Vehicle Recall Checker（リコール確認）](./skills/vehicle-recall-checker/README.ja.md) | 公式照会先、個別車両への適用、改修済みの根拠と未確認事項を整理 |

## 日本のユーザー向けコンテンツ

- 📗 [日本のユーザー向けガイド](./docs/ja/japan-guide.md) — 米国向け記述の読み替え表、軽自動車・国内中古車市場での使い方、用語対訳
- ✅ [車検前セルフチェックリスト](./docs/ja/shaken-checklist.md) — 車検（継続検査）前の点検項目と、AIスキルとの組み合わせ方
- 💬 会話例の日本語版 — [P0420の診断](./examples/obd2-p0420-diagnosis.ja.md) / [中古車チェック](./examples/used-car-inspection.ja.md) / [キャッチアップ整備計画](./examples/maintenance-catchup-plan.ja.md)
- 🗃️ [既知問題データベース(日本語ガイド)](./data/known-issues/README.ja.md) — 車種別の既知問題の投稿方法と[日本語テンプレート](./data/known-issues/TEMPLATE.ja.md)。軽自動車・国内専売車のエントリを特に募集中

[車なしで試すOBD-II MCPデモ](./docs/try-obd2-mcp.ja.md) — 実行コマンド、模擬データの取得結果、確認できること・できないこと。

## インストール

読むだけならインストール不要です([`skills/`](./skills/) または[Webサイト](https://shoka-jp.github.io/automotive-ai-skills/)を閲覧)。より深く統合する場合:

### Claude Code(プラグイン — 推奨)

このリポジトリはClaude Codeのプラグインマーケットプレイスです。Claude Code内で:

```text
/plugin marketplace add shoka-jp/automotive-ai-skills
/plugin install automotive-ai-skills@automotive-ai-skills
```

全20スキルがネイティブスキル(各フォルダの`SKILL.md`)としてインストールされ、車の質問をすると自動で発動します。

### OpenAI Codex

このリポジトリのクローン内で`codex`を起動すると`AGENTS.md`が自動で読み込まれます。グローバル設定やスキルごとのスラッシュコマンド化は[Codexガイド](./integrations/codex.md)(英語)を参照。

### 実車を読む: obd2-mcp 🔌

このスキル集は「知識」レイヤーです。姉妹プロジェクトの [**obd2-mcp**](https://github.com/shoka-jp/obd2-mcp) は「道具」レイヤー — 安価なELM327アダプタ経由で、AIが実車の故障コード・ライブデータ・フリーズフレームを直接読めるMCPサーバーです(モック車両同梱なのでハードウェアなしでも試せます):

[ソースからビルドして試す手順（英日）](https://github.com/shoka-jp/obd2-mcp/blob/main/docs/try-mock.md)

### その他

```bash
git clone https://github.com/shoka-jp/automotive-ai-skills.git
```

- **Claude Projects / カスタムGPT:** スキルのREADMEを指示欄に貼り付け([テンプレート](./integrations/claude-project-template.md))
- **APIアプリケーション / エージェントフレームワーク:** ルーティングには各スキルの`skill.yaml`、知識本体にはREADMEを利用

## 使い方

1. 状況に合った**スキルを選ぶ**（上の一覧を参照）
2. スキルの**推奨ワークフローを読む** — 集めるべき情報（車両情報、症状、測定値）が書かれています
3. **プロンプト例をコピー**し、自分の車両情報に合わせて修正する
4. **対話的に進める** — 一問一答ではなく、結果を報告しながら絞り込む設計です
5. **Limitations（限界）の節を尊重する** — 安全に関わる数値は必ず純正資料で確認し、リスクの高い作業は専門家に依頼してください

## リポジトリ構成

```text
automotive-ai-skills/
├── README.md                 # 英語版README
├── README.ja.md              # このファイル
├── LICENSE                   # MITライセンス
├── CONTRIBUTING.md           # コントリビューションガイド
├── CODE_OF_CONDUCT.md        # 行動規範
├── CHANGELOG.md              # 変更履歴
├── SECURITY.md               # セキュリティポリシー
├── docs/                     # ガイド・FAQ・免責事項
│   └── ja/                   # 日本向け: 車検チェックリスト、日本ユーザーガイド
├── data/known-issues/        # 車種別の既知問題データベース（コミュニティ投稿）
├── examples/                 # 会話例（日英）
├── integrations/             # Claude Projectテンプレート、統合システムプロンプト
└── skills/                   # 20スキル（各フォルダに README.md / README.ja.md / SKILL.md / skill.yaml）
```

## ロードマップ

- [x] ディーゼル専門スキル（コモンレール、DPF/EGR/SCR）
- [x] 旧車レストアスキル（ポイント点火、キャブレター、錆診断）
- [x] フリート管理スキル（複数車両のスケジュール・コスト管理）
- [x] タイヤ＆ホイールアドバイザースキル
- [x] スキル本文の日本語翻訳（全12スキル完了）
- [x] エージェントフレームワーク向けの構造化スキル定義（各スキルの `skill.yaml`）
- [x] 会話例（examples/）の日本語翻訳
- [x] 車種別既知問題データベースの受け皿（[`data/known-issues/`](./data/known-issues/)、テンプレート+初回エントリ。**投稿募集中!**）
- [x] 連携サンプル（[`integrations/`](./integrations/)：Claude Projectテンプレート、統合システムプロンプト）
- [x] 商用車・トラックスキル（エアブレーキ、運行前点検、固縛）
- [x] 板金・塗装スキル（へこみ評価、色合わせ、DIYの限界）
- [x] 既知問題データベースの拡充 — 11件収録（BMW・トヨタ・スバル・ホンダ・日産・マツダ）、すべて日英対応・拡充中。**投稿は継続募集中**
- [x] 他言語への展開開始 — スペイン語README（[README.es.md](./README.es.md)）。スキル本文の翻訳はコミュニティ主導
- [x] 牽引・トレーラースキル（ヒッチ、垂直荷重、配線、蛇行予防）
- [x] カーオーディオ・電装スキル（ヘッドユニット、12V配線の規律、CANの基礎）
- [x] スキル本文のスペイン語翻訳を開始 — 主要4スキル完了（整備/OBD-II/整備計画/中古車）。**残り16本はコントリビューター歓迎**
- [x] 既知問題データの構造化フォーマット（[`data/known-issues/index.yaml`](./data/known-issues/index.yaml)）
- [ ] 全スキルのスペイン語対応完了
- [ ] キャンピングカー居住設備スキル（水回り、ガス、サブバッテリー、ソーラー）
- [ ] 溶接・製作基礎スキル（安全第一、外注すべき境界）

## コントリビューション

新スキルの追加、既存スキルの改善、誤りの修正、翻訳、会話例の追加を歓迎します。

- [CONTRIBUTING.md](./CONTRIBUTING.md) — 手順、スタイルガイド、PRチェックリスト
- [スキル作成ガイド](./docs/skill-authoring-guide.md) — 新スキルに必要な構成
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## 安全に関する免責事項

これらのスキルは一般的な自動車情報を提供するものであり、**専門的な助言ではありません**。車両の作業は安全に直結するシステムを含みます。数値・仕様は必ず純正整備書で確認し、ブレーキ・ステアリング・エアバッグ（SRS）・燃料・高電圧系の作業は、少しでも不安があれば資格を持つ専門家に依頼してください。詳細は[安全免責事項](./docs/safety-disclaimer.md)（英語）を参照してください。

## プロジェクトを応援する

役立った方は、次の方法で開発を応援していただけます。

- [開発者をフォロー](https://github.com/shoka-jp)して、自動車 × AIの開発をチェックする。
- リポジトリをStarして保存したり、必要としている人に紹介する。
- [Issue](https://github.com/shoka-jp/automotive-ai-skills/issues)で、試した手順・期待した結果・実際の結果を共有する。ログから車台番号などの個人情報を取り除いてください。
- [GitHub Sponsors](https://github.com/sponsors/shoka-jp)でオープンソース活動を支援する。

## ライセンス

[MIT](https://github.com/shoka-jp/automotive-ai-skills/blob/main/LICENSE) © 2026 Sho Kamakura

> **注:** 本翻訳は英語版READMEを基にしています。内容に差異がある場合は英語版が優先されます。
