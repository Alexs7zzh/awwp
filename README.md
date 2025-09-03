## TODO:

- High res images
- Home description
- Home content
- Works description
- About description
- Pin image

## Usage

### Environment Setup

This project requires Bun to run. Install Bun from below:
https://bun.com

For content adjustment locally, run the following command:
```
bun dev
```

Website will automatically be built and updated on Vercel once changes are committed to GitHub. Changes usually takes 30s ~ 6mins depending on if images are regenerated. If changes are not reflected, it can be:
- changes are not pushed to GitHub
- There is an error in the build process

To verify if there was any build error, either check the build log on Vercel, or try building locally with the following command and see how it goes:
```
bun build
```

Some common errors:
- Artwork data is saved in yaml format. Make sure yaml is valid. Common issue can be 全角 in where it should be 半角

## Features

### Artwork

Each artwork should be in its own folder, with `index.yaml` as its data. Images related to artwork can be put in the folder.

For image names, ideally keep it to alphabet and underscore, and avoid characters like space to keep it safe. The site generator will automatically generate multiple resolutions of images so it has the optimal resolution on different screen sizes while avoiding loading unnecessary file sizes. Original images should be high res if possible. Up to 4K should be sufficient though.

Just to avoid unnecessary file size, it is recommended to run image compression once for all original images. On mac the following application is recommended. It has lossless option for compression.
https://imageoptim.com/mac

For `index.yaml`, it supports the following fields:

title: z.string(),
year: z.number(),
keywords: z.array(z.string()),
description_jp: z.string(),
meta_jp: z.string(),
footer: z.string().optional(),
pin: z.array(z.string()).optional()


Sample:

```yaml
title: Over Billions of Years
keywords:
  - Audio Visual Installation with 128ch Line Array Speakers & 8K Movie
year: 2024
description_en: ""
description_jp: |-
  果てなく続く大地の変遷。そのダイナミクスを8K映像と音場合成技術により体感する

  「人間が10億年生きることができたら、大地が流体のように振る舞う様子に立ち会えるのではないだろうか」。悠久の時間の中で展開される大地の脈動や呼吸を聞き、大地のその新陳代謝に立ち合いたい。本作はそんな思いに端を発しています。作家は氷河期、間氷期、大地の砂漠化、森林化、河川の生成、島の生成、人工物の生成など、数千年から億年単位で推移するさまざまな段階を、1つの数理モデルを用いてシミュレーションし、高精細な映像表現と音像表現で可視聴化します。大地はどのように生まれ、変化していくのか。文明が生まれて衰退していく過程はどのようなものか。自然と人工はどのように接続されるのか−。8K映像と音場合成技術による新たな音響表現がもたらす空間のなかに、根源的な問いが浮かび上がります。

  （札幌国際芸術祭 解説より）
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

`|-` is for multi-line text in yaml. For `pin`, it requires image file name without file extension.

###