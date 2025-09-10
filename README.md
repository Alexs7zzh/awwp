# AWWP

## TODO

- ウェブサイトのアイコンを追加する
- 高解像度の画像に切り替える
- トップページ、作品ページ、Aboutページの説明文を調整する
- トップページのコンテンツを調整する
- 各作品にピン留め画像を設定する
- 一部の作品に英語または日本語の説明が未入力（対象作品：async、cognition、crosssection、gem、insect、jomonverse、moment、overbillions、raydrawing、religion、science、sfos）

---

## 使い方

### 環境構築

このプロジェクトを実行するには [Bun](https://bun.com) が必要です。

まず Bun をインストールし、その後ローカルでコンテンツを調整する場合は以下を実行します：

```bash
bun run dev
```

変更が GitHub にコミットされると、ウェブサイトは自動的に Vercel 上でビルド・デプロイされます。
ビルド時間は通常 30 秒から 6 分程度で、画像が再生成されるかどうかによって異なります。

更新が反映されない場合、考えられる原因は以下の通りです：

- 変更が GitHub にプッシュされていない
- ビルドプロセス中にエラーが発生した

ビルドエラーを確認するには：

- Vercel のビルドログを確認する
- またはローカルで以下を実行する

```bash
bun run build
```

#### よくある問題

- 作品データは YAML で管理されています。必ず YAML が正しい形式であることを確認してください。
- よくあるエラーは、半角文字ではなく全角文字を使用してしまうことです。

---

## 機能

### 作品 (Artwork)

各作品は専用のフォルダに格納されます。フォルダ内にはメタデータを含む index.yaml ファイルがあり、作品の画像ファイルも同じ場所に配置されます。

- **フォルダ名**: 作品IDとして使用されます（トップページや `https://akirawakita.com/works/[WORK_ID]` のようなURLで利用）。
- **画像ファイル名**: アルファベットとアンダースコアのみを使用してください。スペースや特殊文字は避けてください。
- **画像の並び順**: ファイル名をアルファベット順にソートして表示されます。
- **解像度**: サイトジェネレーターが自動で複数解像度を生成し、デバイスごとの読み込みを最適化します。オリジナル画像は高解像度（最大4K程度）を用意してください。
- **非表示画像**: ファイル名の先頭に `_` を付けると作品詳細ページでは非表示になります。ただし、トップページから参照することは可能です。
- **圧縮**: コミット前にオリジナル画像を圧縮してください。macOS では [ImageOptim](https://imageoptim.com/mac) の使用を推奨します（ロスレス圧縮に対応）。

#### `index.yaml` のフィールド

作品のメタデータは以下のフィールドをサポートします：

- **title**: 作品タイトル（文字列）
- **year**: 制作年（数値）
- **keywords**: キーワードのリスト（文字列の配列）
- **description_jp**: 日本語での作品説明（文字列、複数行対応）
- **description_en**: 英語での作品説明（文字列、複数行対応）
- **meta_jp**: 日本語でのメタデータ（展示情報やクレジット等、複数行対応）
- **meta_en**: 英語でのメタデータ（展示情報やクレジット等、複数行対応）
- **footer**: 任意のフッターテキスト（文字列、複数行対応）
- **pin**: ピン留め画像のリスト。拡張子を除いたファイル名で指定（文字列の配列）

#### `index.yaml` のサンプル

```yaml
title: Over Billions of Years
keywords:
  - Audio Visual Installation with 128ch Line Array Speakers & 8K Movie
year: 2024
description_en: ""
description_jp: |-
  果てなく続く大地の変遷。そのダイナミクスを8K映像と音場合成技術により体感する
  ...
meta_en: |-
  ## EXHIBITION
  - Sapporo International Art Festival, Moerenuma Park, Sapporo, 2024
  ## CREDIT
  Akira Wakita in collaboration with NHK Science & Technology Research Laboratories, with the support of Astrodesign Inc.
meta_jp: |-
  ## 展示
  - 札幌国際芸術祭, モエレ沼公園, 2024
  ## クレジット
  Akira Wakita in collaboration with NHK Science & Technology Research Laboratories, with the support of Astrodesign Inc.
footer: |-
  撮影クレジット
  - Concept / Direction : AKIRA WAKITA
  - Visual Software Development : YUKI KUWASHIMA
pin:
  - overbillions_01
  - overbillions_02
```

_注意_: YAML で複数行テキストを扱う場合は `|-` を使用します。

---

### トップページ

- ファイル: `src/pages/index.astro`
- HTML に似た形式で記述されています。
- 使用できるコンポーネントは **`LongImage`** と **`MultiImage`** の 2 種類です。

**LongImage**

- 作品 ID と画像（`WORK_ID:IMAGE_NAME`）が必要です。
- 任意でモバイル用画像の配列を追加できます。

**MultiImage**

- 作品 ID と画像の配列が必要です。
- 任意で `positions` 配列（0–1 の数値）を指定して配置を決められます。配列の数が画像より少ない場合、余った画像は中央に配置されます。

例:

```html
  <LongImage
    id="dismantle"
    image={img("dismantle:dismantle_top")}
    mobile={[img("dismantle:dismantle_thumb"), img("dismantle:dismantle_02")]}
  />
  <MultiImage
    id="clair"
    images={[
      img("clair:clair_01"),
      img("clair:clair_02"),
      img("clair:ikebukuro_thumb"),
      img("clair:clair_back"),
    ]}
    positions={[0.5, 1, 0.1]}
  />
```

---

### About ページ

- ファイル: `src/pages/about.md`
- Markdown 形式で記述されています。
