---
title: Automotive AI Skillsの品質と育て方
description: 車種別チェックメーカーの検証内容、未検証の範囲、車種リクエストと確認事例を改善に戻す手順。
lang: ja
locale: ja_JP
---
# 品質の確かめ方と育て方

[English](./quality.md) | **日本語**

[車種別チェックメーカー](../tools/vehicle-brief.ja.html)は、確認事項と根拠をまとめて質問文を作るツールです。AI診断、実車点検、公式のリコール照会は実行しません。次の相談を具体的にし、後から根拠を確認できることを目指しています。

## 自動で検証すること

- 車名の別表記、型式の違い、製造年の範囲、元の仕向け。資料が一致しても**参考候補**であり、対象や対策完了の判定にはしません。
- リコール・保証延長・仕様訂正の区別。出典確認から180日を超える資料には再確認を案内します。新しい確認日でも、利用時の公式照会は必要です。
- ブラウザーとCLIの出力、日英の用途別手順、相談内容・履歴・製造年・型式を含めない共有リンク。
- 実ブラウザーでの日英操作。サンプル、コピーと手動コピーへの切り替え、Markdown保存、入力変更、対象外の扱い、消去、スマートフォン幅のはみ出し。
- 確認済み資料と配信用データの一致、リポジトリ構成、公開ページのメタデータとリンク。

Python＋PyYAML、Node.js 22以上で同じ検証を実行できます。

```bash
python scripts/build_brief_data.py --check
python scripts/validate_repo.py
npm test
```

画面操作は[CI](https://github.com/shoka-jp/automotive-ai-skills/actions/workflows/ci.yml)で実際のJekyll生成物を使って検証し、スクリーンショットを保存します。利用者のブラウザーにNode.jsやPythonを入れる必要はありません。

## まだ証明できていないこと

ソフトウェアのテスト合格は、**診断精度やAIの正答率、安全性の認証ではありません**。使うAIとその版、車両の情報によって回答が変わります。[回答レビュー用ケース](../evals/answer-cases.yaml)には、質問・必要な区別・避けるべき断定を記載しています。これは検証用に作成した状況であり、実車の修理実績ではありません。AIの正答率は掲げていません。

資料全体は17件です。メーカー等の出典を確認した**7件を、日本向け8車種プロフィールから参照**できます。旧来のコミュニティ資料は[全体の一覧](../data/known-issues/README.ja.md)で読めますが、出典と対象範囲を確認するまでは質問文に自動挿入しません。他の車種にも、車種別資料を付けない共通手順を使えます。

## 事例を改善に戻す手順

1. [車種リクエスト](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=vehicle-request.yml)または[根拠と確認結果](https://github.com/shoka-jp/automotive-ai-skills/issues/new?template=verified-finding.yml)を投稿します。個人・車両を特定する情報を除き、観察・診断・修理・結果を分けます。
2. メンテナーが公開資料、元の仕向け、仕様、製作期間を確認します。確認前は未検証として扱い、1台の経験から発生率を推定しません。
3. 日英の本文と構造化インデックスを更新します。根拠が揃った車種を `data/vehicle-profiles.yaml` に追加します。
4. 間違えやすい条件を再現テストに追加します。`python scripts/build_brief_data.py` で配信用データを作り直し、質問文を確認します。
5. 検証後に統合し、変更履歴に記録します。対象を広げる前に古い出典を再確認します。

入力内容は作成中のページ内だけに置き、このプロジェクトへの送信やブラウザー保存は行いません。Issueへの投稿や外部AIへの貼り付けは利用者が別途選ぶ操作で、そのサービスに内容が渡ります。

## 次に育てるところ

- 具体的な利用目的と確認可能な出典を優先して、対応車種を追加する。
- 実際に見つかった取り違えを、型式・年式の境界テストや回答レビューに追加する。
- 使用モデル・版・質問・採点基準・失敗例を揃えた回答評価を行い、測定後に改善を報告する。

現車確認や整備相談に役立ったら、[GitHubでStar](https://github.com/shoka-jp/automotive-ai-skills)すると後から見つけやすくなります。更新通知は別途Watchから選べます。[GitHubのStarについて](https://docs.github.com/en/get-started/exploring-projects-on-github/saving-repositories-with-stars)。
