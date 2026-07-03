# 🚗 Automotive AI Skills（自動車AIスキル集）

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

**自動車の診断・整備・修理・カスタマイズ・車両所有**に関するAIスキルのオープンソースコレクションです。初心者からプロの整備士まで幅広く活用できます。

[English](./README.md) | **日本語** | [Español](./README.es.md)

---

## 概要

大規模言語モデル（LLM）はガレージでも十分に役立ちます。ただし、それは適切な構造・文脈・限界の認識を持ってプロンプトを与えた場合に限ります。本リポジトリはその構造を「**スキル**」としてパッケージ化したものです。厳選されたプロンプトフレームワーク、ワークフロー、ガードレールにより、汎用AIアシスタントを自動車特化のアシスタントに変えます。

各スキルには以下が定義されています。

- **できること**（機能一覧と、正直な限界の明記）
- **使い方**（推奨ワークフローと、提供すべき車両情報）
- **そのまま使えるプロンプト例**

スキルは**プラットフォーム非依存**です。Claude、ChatGPT、ローカルモデルなど、十分な能力を持つAIアシスタントであればどれでも利用できます。ドキュメント主体のため、利用にコードは不要です。

## 特徴

- 🔧 診断・修理・整備・購入・カスタム・EV・ディーゼル・旧車・フリート・タイヤ・トラック・板金塗装・バイクをカバーする**14のスキル**
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

## 日本のユーザー向けコンテンツ

- 📗 [日本のユーザー向けガイド](./docs/ja/japan-guide.md) — 米国向け記述の読み替え表、軽自動車・国内中古車市場での使い方、用語対訳
- ✅ [車検前セルフチェックリスト](./docs/ja/shaken-checklist.md) — 車検（継続検査）前の点検項目と、AIスキルとの組み合わせ方
- 💬 会話例の日本語版 — [P0420の診断](./examples/obd2-p0420-diagnosis.ja.md) / [中古車チェック](./examples/used-car-inspection.ja.md) / [キャッチアップ整備計画](./examples/maintenance-catchup-plan.ja.md)
- 🗃️ [既知問題データベース(日本語ガイド)](./data/known-issues/README.ja.md) — 車種別の既知問題の投稿方法と[日本語テンプレート](./data/known-issues/TEMPLATE.ja.md)。軽自動車・国内専売車のエントリを特に募集中

## インストール

インストールは不要です。これらのスキルはソフトウェアではなくプロンプトフレームワークです。

```bash
git clone https://github.com/shoka-jp/automotive-ai-skills.git
cd automotive-ai-skills
```

GitHub上で [`skills/`](./skills/) フォルダを直接閲覧するだけでも利用できます。

**オプションの活用方法:**

- **Claude Projects / カスタムGPT:** スキルのREADMEをプロジェクト指示やシステムプロンプトに貼り付けて専用アシスタントを作成
- **Claude Code / エージェントフレームワーク:** スキルREADMEをエージェントスキル定義のベースとして利用
- **APIアプリケーション:** スキルの「Description + Capabilities + Limitations」をシステムプロンプトの土台として利用

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
└── skills/                   # 12スキル（各フォルダに README.md / README.ja.md / skill.yaml）
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
- [x] 既知問題データベースの拡充 — 4プラットフォーム収録（BMW N20、トヨタ2AZ-FE、スバルEJ25、ホンダi-DCD）、すべて日英対応。**投稿は継続募集中**
- [x] 他言語への展開開始 — スペイン語README（[README.es.md](./README.es.md)）。スキル本文の翻訳はコミュニティ主導
- [ ] 牽引・トレーラースキル（ヒッチ、配線、スウェイ制御、積載）
- [ ] カーオーディオ・電装スキル（ヘッドユニット、配線、CAN連携の基礎）
- [ ] スキル本文のスペイン語翻訳（コントリビューター歓迎）
- [ ] 既知問題データの構造化フォーマット（YAML）

## コントリビューション

新スキルの追加、既存スキルの改善、誤りの修正、翻訳、会話例の追加を歓迎します。

- [CONTRIBUTING.md](./CONTRIBUTING.md) — 手順、スタイルガイド、PRチェックリスト
- [スキル作成ガイド](./docs/skill-authoring-guide.md) — 新スキルに必要な構成
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## 安全に関する免責事項

これらのスキルは一般的な自動車情報を提供するものであり、**専門的な助言ではありません**。車両の作業は安全に直結するシステムを含みます。数値・仕様は必ず純正整備書で確認し、ブレーキ・ステアリング・エアバッグ（SRS）・燃料・高電圧系の作業は、少しでも不安があれば資格を持つ専門家に依頼してください。詳細は[安全免責事項](./docs/safety-disclaimer.md)（英語）を参照してください。

## ライセンス

[MIT](./LICENSE) © 2026 Sho Kamakura

> **注:** 本翻訳は英語版READMEを基にしています。内容に差異がある場合は英語版が優先されます。
