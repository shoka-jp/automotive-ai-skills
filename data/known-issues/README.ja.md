# 既知問題データベース

[English](./README.md) | **日本語**

**車種別の既知問題と確認事項を17件**収録しています。対象の型式・製作時期・仕向けを確認し、AIへの質問や購入前の確認に使うための資料です。

各エントリは「1つのプラットフォーム(車種/世代/エンジン)の1つの問題」を1つのMarkdownファイルで記述します。AIとの会話にスキルと一緒に貼り付けて使うことも、購入検討者・オーナーがそのまま読むこともできます。

## 使い方

1. 自分の車両に合うエントリを探します(ファイル名は `<メーカー>-<型式または車種>-<問題>.md`)。
2. 質問と一緒にエントリをAIとの会話に貼り付けます — 例:現車確認の前に [Used Car Inspector](../../skills/used-car-inspector/README.ja.md) と組み合わせる。
3. エントリは**検証すべき手がかり**であって判決ではありません。生産時期による仕様変更や仕向け差により、個々の車両では状況が異なることがあります。

## エントリの投稿方法

[`TEMPLATE.ja.md`](./TEMPLATE.ja.md)(英語で書く場合は [`TEMPLATE.md`](./TEMPLATE.md))をコピーし、全セクションを埋めてPRを出してください。要件:

- **1ファイル1問題。** 複数の問題はファイルを分けてください。
- **範囲を正確に。** 年式、エンジン型式、仕向け。「BMWのタイミングチェーン」では広すぎ、「2015年頃以前に生産されたN20エンジン」が適切です。
- **症状は観察可能な形で。** 壊れる部品名だけでなく、オーナーが聞ける・見える・測れることを書いてください。
- **頻度は正直に。** 届出台数は故障台数ではありません。裏付けがなければ発生率は不明と明記し、全車が故障すると断定しません。
- **修理内容と費用の根拠を明記。** 検証できる見積りがあれば地域・通貨・時点を添えます。なければ不明とし、金額を作らず見積り取得を案内してください。リコールと保証延長を区別し、個別適用を確認します。
- **一次資料を優先。** メーカー・行政のURL、届出番号、確認日を記載し、対象範囲の限定や訂正も反映します。体験談は公表済みの事実と区別し、著作物を転載しません。
- **排ガス装置・安全装置の無効化に関するエントリは受け付けません**([CONTRIBUTING.md](../../CONTRIBUTING.md) 参照)。

日本語エントリはファイル名を `.ja.md` にしてください。日本市場固有の車種(軽自動車、国内専売車)のエントリは特に歓迎です — 海外にデータが少なく、価値が高い領域です。

## 現在のエントリ

| エントリ | 対象車両 | 深刻度 |
|---|---|---|
| [BMW N20 タイミングチェーン](./bmw-n20-timing-chain.ja.md)([EN](./bmw-n20-timing-chain.md)) | BMW N20/N26 2.0ターボ(〜2015年頃生産) | 致命的 |
| [トヨタ 2AZ-FE オイル消費](./toyota-2az-fe-oil-consumption.ja.md)([EN](./toyota-2az-fe-oil-consumption.md)) | 2AZ-FE 2.4L(〜2006〜2011年頃) | 重大 |
| [スバル EJ25 ヘッドガスケット](./subaru-ej25-head-gasket.ja.md)([EN](./subaru-ej25-head-gasket.md)) | SOHC EJ25(〜1999〜2011年頃) | 重大 |
| [ホンダ i-DCD ジャダー](./honda-idcd-dct-judder.ja.md)([EN](./honda-idcd-dct-judder.md)) | i-DCD搭載ハイブリッド(2013〜2015年中心) | 重大 |
| [日産(ジヤトコ)CVT 早期故障](./nissan-jatco-cvt-failure.ja.md)([EN](./nissan-jatco-cvt-failure.md)) | ジヤトコ製CVT搭載日産車(〜2003〜2018年頃) | 重大 |
| [トヨタ 30プリウス EGR詰まり・ヘッドガスケット](./toyota-zvw30-prius-egr-head-gasket.ja.md)([EN](./toyota-zvw30-prius-egr-head-gasket.md)) | ZVW30プリウス / 2ZR-FXE(2009〜2015年) | 重大 |
| [マツダ FD3S 13B-REW 圧縮低下](./mazda-fd3s-13b-rew-compression-loss.ja.md)([EN](./mazda-fd3s-13b-rew-compression-loss.md)) | RX-7 FD3S(1991〜2002年、全年式) | 重大 |
| [スバル EJ系ターボ リングランド割れ・メタル](./subaru-ej20t-ringland-bearing.ja.md)([EN](./subaru-ej20t-ringland-bearing.md)) | WRX/STI GC8/GDB/GRB、EJ255/257 | 重大 |
| [日産 RB26 オイルポンプドライブ破損](./nissan-rb26-oil-pump-drive.ja.md)([EN](./nissan-rb26-oil-pump-drive.md)) | スカイラインGT-R BNR32/33/34 | 致命的 |
| [日産 SR20 チェーンガイドのラトル音](./nissan-sr20det-chain-guide-rattle.ja.md)([EN](./nissan-sr20det-chain-guide-rattle.md)) | S13/S14/S15系ほか(1989〜2002年) | 軽微 |
| [ホンダ RK系ステップワゴン 変速機の特定・振動の確認](./honda-rk-stepwgn-cvt-judder.ja.md)([EN](./honda-rk-stepwgn-cvt-judder.md)) | RK1/2/5/6（2009〜2015年、4WDは途中で5ATからCVTへ変更） | 重大（故障確認時） |

| [86／BRZ バルブスプリング](./toyota-86-subaru-brz-valve-spring.ja.md)([EN](./toyota-86-subaru-brz-valve-spring.md)) | 日本仕様・86 ZN6／BRZ ZC6（2012〜2013年の指定製作範囲） | 致命的 |
| [N-BOX 燃料ポンプ](./honda-nbox-jf3-jf4-fuel-pump.ja.md)([EN](./honda-nbox-jf3-jf4-fuel-pump.md)) | 日本仕様・JF3/JF4（2017〜2020年の指定製作範囲） | 致命的 |
| [ワゴンR エバポレータ漏れ](./suzuki-wagon-r-mh23s-evaporator-leak.ja.md)([EN](./suzuki-wagon-r-mh23s-evaporator-leak.md)) | 日本仕様・MH23S（2008〜2012年の指定製作範囲） | 重大 |
| [タント ブレーキブースタ腐食](./daihatsu-tanto-la600s-brake-booster-corrosion.ja.md)([EN](./daihatsu-tanto-la600s-brake-booster-corrosion.md)) | 日本仕様・LA600S/LA610S（2013〜2016年の指定製作範囲） | 致命的 |
| [セレナ ECOモータ軸受](./nissan-serena-c26-eco-motor-bearing.ja.md)([EN](./nissan-serena-c26-eco-motor-bearing.md)) | 日本仕様・C26/FC26/NC26/FNC26（2010〜2016年、型式別に異なる） | 致命的 |
| [CX-5 インジェクタ気密・オイルストレーナ](./mazda-cx5-ke2-injector-seal-oil-strainer.ja.md)([EN](./mazda-cx5-ke2-injector-seal-oil-strainer.md)) | 日本仕様・KE2FW/KE2AW（2012〜2016年、届出3997の不具合(1)該当車） | 致命的 |

*(この一覧は手動管理です — エントリ追加のPRでは同時にこの表にも行を追加してください。)*

## 機械可読インデックス

[`index.yaml`](./index.yaml) は上の表を構造化メタデータ(メーカー、プラットフォーム、年式、深刻度、タグ、言語別ファイルパス)としてミラーしたもので、プログラムからの利用を想定しています — 例:特定車種のエントリだけを抽出してAIセッションに注入する、など。エントリを投稿する際は、同じPRで `index.yaml` にも追加してください。

新規・再検証したエントリでは、`markets`（仕向け）、`evidence_type`（`recall`／`warranty_extension`／`manufacturer_specification`）、`campaign_ids`、`source_urls`、`last_verified`（日本時間の確認日）も記録します。これらは任意の追加項目で、旧エントリに存在しない場合は未確認です。概要の年式だけで対象車と判定せず、本文とメーカーの個別照会を確認してください。
