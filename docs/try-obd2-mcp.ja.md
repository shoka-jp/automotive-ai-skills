---
title: 車なしで試すOBD-II MCPサーバー
description: obd2-mcpをソースからビルドし、模擬車両のP0420・フリーズフレーム・ライブデータを取得する手順。実行結果と検証範囲、つまずいたときの確認事項を紹介します。
lang: ja
locale: ja_JP
---
# 車なしで試すOBD-II MCPサーバー

[English](./try-obd2-mcp.md)

**実際のMCPクライアントを動かし、模擬車両のデータを読みます。** 姉妹プロジェクトの[obd2-mcp](https://github.com/shoka-jp/obd2-mcp)には、ツールの応答を表示するデモが付属しています。Git・Node.js・npmがあれば実行でき、実車・ELM327アダプタ・AIの有料契約は不要です。

Automotive AI Skillsは調査の進め方を記述したプロンプト集、obd2-mcpはデータを読むツールです。このデモで確認するのはツールの応答で、AIによる診断文は生成しません。

## 実行する

下記のCIで検証したNode.js 22または24を使い、ソースからビルドします。

```bash
git clone https://github.com/shoka-jp/obd2-mcp.git
cd obd2-mcp
npm ci
npm run build
node examples/mock-demo.mjs
```

スクリプトはモックモードを明示的に指定し、4つの読み取りツールを呼んで接続を終了します。故障コードは消去しません。すでにクローン済みの場合は最新の変更を取得してから実行してください。

## どんな結果が表示される？

**2026年10月29日**にLinux・Node.js 24.22.1で取得した結果です。実際のプログラム出力ですが、入力は**模擬データ**であり、実車の測定結果ではありません。表は主な項目の抜粋で、スクリプトは応答全体を表示します。

| MCPツール | 応答の抜粋 |
| --- | --- |
| `connection_status` | `connected: true`、`simulated: true`、モックELM327アダプタ |
| `read_dtcs` | 保存済みコード`P0420`、保留コードなし、故障警告灯オン |
| `read_freeze_frame` | `98 km/h`、`2210 rpm`、冷却水温`88 °C` |
| `read_live_data` | `0 km/h`、`740 rpm`、冷却水温`89 °C` |

フリーズフレームは故障コードが記録されたときの状態、ライブデータは現在の状態です。その違いを調査の材料にできますが、このコードや数値だけで故障部品が確定するわけではありません。

## 根拠と確認できる範囲

- [デモのソース](https://github.com/shoka-jp/obd2-mcp/blob/1dfdca13edf17c38b14a45a65fe44e173a55b7fc/examples/mock-demo.mjs)と[取得結果](https://github.com/shoka-jp/obd2-mcp/blob/1dfdca13edf17c38b14a45a65fe44e173a55b7fc/docs/demo-results.md)は、この手順の元になった実装を参照しています。
- [成功したNode.js 22・24のCI](https://github.com/shoka-jp/obd2-mcp/actions/runs/40875682970)では、モックの動作と、生成したnpm配布ファイルのインストールを検証しています。
- 実アダプタとの適合性、実車の診断精度、特定のAIアプリの画面上での動作を実証するものではありません。
- [会話例](../examples/)は別の学習用シナリオで、このプログラムが生成した結果ではありません。

## うまく動かないとき

1. `node --version`と`npm --version`で環境を確認し、クローンした`obd2-mcp`フォルダで実行しているか確認します。
2. `dist/index.js`がない場合は、先に`npm ci`と`npm run build`を完了させます。
3. インストールやビルドに失敗した場合は、最初のエラー・OS・Node.jsのバージョンを記録し、[再現手順をIssueで共有](https://github.com/shoka-jp/obd2-mcp/issues/new?template=bug_report.md)してください。認証情報や車台番号は取り除いてください。

## AIと組み合わせる

[MCPクライアントの設定手順](https://github.com/shoka-jp/obd2-mcp/blob/main/docs/try-mock.md)に沿ってモックモードで接続し、[OBD-II診断アシスタント](../skills/obd2-diagnostic-assistant/README.ja.md)と組み合わせます。

> モック車両の故障コード・フリーズフレーム・ライブデータを読み、観測した事実と仮説を分けて、不足している確認事項を整理して。コードは消去しないで。

実車での作業は[安全上の限界と確認事項](./safety-disclaimer.md)に従ってください。

## プロジェクトの改善に参加する

[開発者をフォロー](https://github.com/shoka-jp)して更新を確認する、[説明の修正に参加](../CONTRIBUTING.md)する、[GitHub Sponsorsで支援](https://github.com/sponsors/shoka-jp)する方法があります。
