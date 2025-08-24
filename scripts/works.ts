import { z, ZodSchema } from "zod";
import { dump } from "js-yaml";
import { mkdir } from "node:fs/promises";

const topContents = [
  {
    title: "龍雨図 - Dragon Rain",
    src: "./img/work/ryuuzu_thumb.jpg",
    href: "#works/dragonrain",
  },
  {
    title: "Stream",
    src: "./img/work/stream_thumb.png",
    href: "#works/stream",
  },
  {
    title: "Over Billions of Years (2024)",
    src: "./img/work/overbillions_thumb.jpg",
    href: "#works/overbillions",
  },
  {
    title: "Climatic Reflector(2024)",
    src: "./img/work/climatic_thumb.jpg",
    href: "#works/climatic",
  },
  {
    title: "us (2023)",
    src: "./img/work/us_thumb.jpg",
    href: "#works/us",
  },
  {
    title: "Neuro Music - Dive Into Your Brain (2023)",
    src: "./img/work/vie_thumb.jpg",
    href: "#works/vie",
  },
  {
    title: "Mother Fluctuation (2023)",
    src: "./img/work/arsdas_thumb.jpg",
    href: "#works/arsdas",
  },
  {
    title: "Cross Section of Light (2023)",
    src: "./img/work/crosssection_thumb.png",
    href: "#works/crosssection",
  },
  {
    title: "Armstrong | Oppenheimer (2023)",
    src: "./img/work/oppenheimer_thumb.jpg",
    href: "#works/oppenheimer",
  },
  {
    title: "Proposal - JR Version (2023)",
    src: "./img/work/proposaljr_thumb.jpg",
    href: "#works/proposalJR",
  },
  {
    title: "Proposal - KOKUYO Version (2022)",
    src: "./img/work/kokuyo_thumb.jpg",
    href: "#works/proposal",
  },
  {
    title: "For Alan and Keith (2021-2022)",
    src: "./img/work/keith_all.jpg",
    href: "#works/keith_all",
  },
  {
    title: "Dancers (For Alan and Keith) (2021-2022)",
    src: "./img/work/keith_dancers.jpg",
    href: "#works/keith_dancers",
  },
  {
    title: "Embryo (For Alan and Keith) (2021-2022)",
    src: "./img/work/keith_embryo.jpg",
    href: "#works/keith_embryo",
  },
  {
    title: "Parameters (For Alan and Keith) (2021-2022)",
    src: "./img/work/keith_thumb.jpg",
    href: "#works/keith_param",
  },
  {
    title: "Diversity (For Alan and Keith) (2021-2022)",
    src: "./img/work/keith_diversity.jpg",
    href: "#works/keith_diversity",
  },
  {
    title: "Governing Equation (For Alan and Keith) (2021-2022)",
    src: "./img/work/keith_equation.jpg",
    href: "#works/keith_equation",
  },

  {
    title: "Vortex (2022)",
    src: "./img/work/jomon_vortex.jpg",
    href: "#works/jomon_vortex",
  },
  {
    title: "Jomonverse (2022)",
    src: "./img/work/jomonverse_thumb.png",
    href: "#works/jomonverse",
  },

  {
    title: "Hollow (2021)",
    src: "./img/work/jomon_hollow.jpg",
    href: "#works/hollow",
  },

  {
    title: "Postoperative (2021)",
    src: "./img/work/postoperative_thumb.jpg",
    href: "#works/postoperative",
  },
  {
    title: "Holiness (AV version) (2021)",
    src: "./img/work/holiness2_thumb.jpg",
    href: "#works/holiness2",
  },
  {
    title: "2020 (2021)",
    src: "./img/work/2020_thumb.jpg",
    href: "#works/2020",
  },
  {
    title: "Triplet (2020)",
    src: "./img/work/triplet_thumb.jpg",
    href: "#works/triplet",
  },
  {
    title: "Hidden Superb View (2020)",
    src: "./img/work/hidden_thumb.jpg",
    href: "#works/hidden",
  },
  {
    title: "ASYNC LAB. (2020)",
    src: "./img/work/async_thumb.jpg",
    href: "#works/async",
  },
  {
    title: "Holiness (2020)",
    src: "./img/work/holiness_thumb.jpg",
    href: "#works/holiness",
  },
  {
    title: "Gem (2020)",
    src: "./img/work/crown_thumb.jpg",
    href: "#works/gem",
  },
  {
    title: "cognition (2020)",
    src: "./img/work/xray_thumb.jpg",
    href: "#works/cognition",
  },
  {
    title: "Science (2020)",
    src: "./img/work/science_thumb.jpg",
    href: "#works/science",
  },
  {
    title: "Religion (2020)",
    src: "./img/work/religion_thumb.jpg",
    href: "#works/religion",
  },
  {
    title: "ray drawing (2020)",
    src: "./img/work/raydraw_thumb.jpg",
    href: "#works/raydrawing",
  },
  {
    title: "Moment - horizontal version (2020)",
    src: "./img/work/momentMAT_thumb.jpg",
    href: "#works/momentMAT",
  },
  {
    title: "CLAIR DE LUNE (2020)",
    src: "./img/work/ikebukuro_thumb.jpg",
    href: "#works/clair",
  },
  {
    title: "Count The Number of Photons  (2019)",
    src: "./img/work/any2019_thumb.jpg",
    href: "#works/count",
  },
  {
    title: "River  (2019)",
    src: "./img/work/river_thumb.jpg",
    href: "#works/river",
  },
  {
    title: "Moment  (2019)",
    src: "./img/work/moment_thumb.jpg",
    href: "#works/moment",
  },
  {
    title: "Ant Colony Optimization  (2019)",
    src: "./img/work/insect_thumb.jpg",
    href: "#works/insect",
  },
  {
    title: "Under The Sea  (2019)",
    src: "./img/work/octagon_thumb.jpg",
    href: "#works/octagon",
  },
  {
    title: "Dismantling Awe  (2018)",
    src: "./img/work/dismantle_thumb.jpg",
    href: "#works/dismantle",
  },
  {
    title: "scenery  (2018)",
    src: "./img/work/scenery_thumb.jpg",
    href: "#works/scenery",
  },
  {
    title: "Scalar Field of Cosmetics (2018)",
    src: "./img/work/cosmetics_thumb.png",
    href: "#works/cosmetics",
  },
  {
    title: "XHIASMA (2018)",
    src: "./img/work/xhiasma_thumb.jpg",
    href: "#works/xhiasma",
  },
  {
    title: "Over Display - Materiality (2018)",
    src: "./img/work/overdisplay_2_thumb.jpg",
    href: "#works/overdisplay_2",
  },

  {
    title: "Over Display - Modality (2018)",
    src: "./img/work/overdisplay_thumb.jpg",
    href: "#works/overdisplay",
  },
  {
    title: "(Non)Linear (2018)",
    src: "./img/work/nonlinear_thumb.jpg",
    href: "#works/nonlinear",
  },
  {
    title: "Activator / Inhibitor (2018)",
    src: "./img/work/activator_thumb.jpg",
    href: "#works/activator",
  },
  {
    title: "Home Electronics (2017)",
    src: "./img/work/homeelectronics_thumb.jpg",
    href: "#works/homeelectronics",
  },
  {
    title: "Concept of Nature (2018)",
    src: "./img/work/concept_thumb.jpg",
    href: "#works/concept",
  },
  {
    title: "Perfomance at Mutek / RedBull Music Festival (2017)",
    src: "./img/work/mutek_thumb.jpg",
    href: "#works/mutek",
  },
  {
    title: "New Synergetics (2017)",
    src: "./img/work/newsyn_thumb.jpg",
    href: "#works/newsyn",
  },
  {
    title: "Visualization of Air Conditioner (2017)",
    src: "./img/work/voac_thumb.png",
    href: "#works/voac",
  },
  {
    title: "Amplification (2017)",
    src: "./img/work/amp_thumb.jpg",
    href: "#works/amp",
  },
  {
    title: "Ryoanji / Parking (2016)",
    src: "./img/work/ryoanji_thumb.jpg",
    href: "#works/ryoanji",
  },
  {
    title: "Relief (2016)",
    src: "./img/work/relief_thumb.jpg",
    href: "#works/relief",
  },
  {
    title: "Furnished Fluid #4 (2016)",
    src: "./img/work/ff4_thumb.png",
    href: "#works/ff4",
  },
  {
    title: "Darkside of Computation (2016)",
    src: "./img/work/darkside_thumb.jpg",
    href: "#works/darkside",
  },
  {
    title: "Furnished Fluid #3 (2016)",
    src: "./img/work/ff3_thumb.png",
    href: "#works/ff3",
  },
  {
    title: "Scalar Fields (2016)",
    src: "./img/work/scalarfields_thumb.png",
    href: "#works/scalar8k",
  },
  {
    title: "Furnished Fluid #2 (2016)",
    src: "./img/work/ff2_thumb.png",
    href: "#works/ff2",
  },
  {
    title: "Ocean Current Visualization (2016)",
    src: "./img/work/geo_thum.png",
    href: "#works/geo",
  },
  {
    title: "Scalar Field of Shoes (2015)",
    src: "./img/work/sfos_thum.png",
    href: "#works/sfos",
  },
  {
    title: "Furnished Fluid (2014 - 2016)",
    src: "./img/work/furnish_2.png",
    href: "#works/furnish",
  },
  {
    title: "FLORA (2015)",
    src: "./img/work/flora_thum_2.png",
    href: "#works/flora",
  },
  {
    title: "FINA (2015)",
    src: "./img/work/fina_thum.jpg",
    href: "#works/fina",
  },
  {
    title: "UNDA (2013)",
    src: "./img/work/unda_thum.jpg",
    href: "#works/unda",
  },
  {
    title: "Blob Motility (2010)",
    src: "./img/work/blob.png",
    href: "#works/blob",
  },
  {
    title: "FABCELL (2006)",
    src: "./img/work/fabcell.jpeg",
    href: "#works/fabcell",
  },
  {
    title: "RYUKYU ALIVE (2002)",
    src: "./img/work/alive.jpeg",
    href: "#works/alive",
  },
  {
    title: "CT (2000)",
    src: "./img/work/ct.png",
    href: "#works/ct",
  },
  {
    title: "INFOTUBE (1999)",
    src: "./img/work/infotube.jpeg",
    href: "#works/infotube",
  },
];

const worksContents = {
  //-------------------------------------------------------------------
  dragonrain: {
    title: {
      title: "龍雨図 - Dragon Rain",
      keys: ["Audio Visual Installation"],
      span: "2024",
      bg_src: "./img/work-inner/dragonrain/dragonrain_2.jpg",
    },
    intro_en: [
      "In Zen temples, dragons are guardian gods and are considered to be creatures that bring rain of Buddhist Dharma to the monks. In this work, I challenge to depict a dragon that brings rain of Buddhism in a modern way by using nonlinear physical systems, digital imaging technology, and brain science-based sound. This work will be installed as a counterpart to Junsaku Koizumi’s Twin Dragons painted on the ceiling of the Dharma Hall of Kenninji Temple.",
      'Another challenge is to submit a unique type of inheritance in the 2020s of the ancient Japanese aesthetic of "kasane," "utsushi," and "nazorae". What does it mean to depict Junsaku Koizumi’s "Twin Dragons" in Akira Wakita’s own way? After a thorough investigation, I decided that it was not simply a matter of processing a digital scan of Koizumi’s painting, but to depict the phenomena and principles behind the act of looking at the dragons, the presence of the scene. Also, as an homage to Koizumi’s technique, I projected Sumi (Japanese Black Paint) image on the screen and painted layers and layers of white particles on top of it, aiming to create colors, shapes, and movements that are neither simply white nor simply grainy, but have depth and breadth.',
      'We may see a tripartite conversation across science, art, and religion in the phenomenon of a nonlinear dynamical system creating a dragon. The shift from "emptiness to completeness and from completeness to emptiness" created by a simple system resonates with the world of Zen, where all is one and one is all.',
    ],
    intro_jp: [
      "禅宗寺院において、龍は守護神であり、僧に仏法の雨を降らせる存在とされています。本作では、非線形物理システム、デジタル映像技術、そして脳科学に基づくサウンドを駆使することで、現代ならではの「仏法の雨を降らせる龍」を描くことに挑戦します。建仁寺の法堂の天井に描かれた小泉淳作の『双龍図』と対をなす形で本作『龍雨図』は設置されます。",
      "もう一つのチャレンジは、日本画における「写」の現代的なあり方の模索であり、「かさね」「うつし」「なぞらえ」といった日本古来の美意識の2020年代ならではの継承の型を提出することです。小泉淳作の『双龍図』を脇田玲なりに描くとはどういうことか。それを突き詰めた結果、単に小泉の絵のデジタルスキャンに加工を施すということではなく、龍を見るという行為の背後にある現象や原理、その場が発する気配といったもの、それ自体を描くことだと考えました。また、小泉の技法へのオマージュとして、スクリーンに墨色の映像を投影し、その上に何層も何層も白い粒子を塗り重ね、単純な白ではなく、単純な粒でもない、深みと広がりをもった色と形と動きをつくることを目指しました。",
      "最後に。非線形の力学系が龍を創発するという現象はとても興味深く、ここに科学、芸術、宗教の横断的な対話を見ることができるかもしれません。シンプルなシステムが生み出す「無から有、有から無」への転換は、全てが一つであり一つが全てであるという禅の世界と共振します",
    ],

    imgs: [
      {
        src: "./img/work-inner/dragonrain/dragonrain_1.jpg",
        caption: "Photo by Chise Toshiro",
      },
      {
        src: "./img/work-inner/dragonrain/dragonrain_2.jpg",
        caption: "Photo by @kyoto_ryota.f",
      },
      {
        src: "./img/work-inner/dragonrain/dragonrain_3.jpg",
        caption: "Photo by @i_miya_i",
      },
      {
        src: "./img/work-inner/dragonrain/dragonrain_4.jpg",
        caption: "Photo by @anya_photographer",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Kenninji Zen Temple, Kyoto, 2023"],
        ps_jp: ["- 建仁寺, 2024"],
      },

      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist: Akira Wakita",
          "General Production: Shuichiro Iwanami",
          "Space Production：Kei Nakanishi",
          "Technical Direction: Masamichi Okada",
          "Video Equipment: Panasonic Connect Co., Ltd.",
          "Audio Equipment: d&b audiotechnik GmbH & Co. KG., Freek",
          "Lighting Equipment and Direction: Tomoyuki Soramoto",
          "Production Cooperation: Yugo Konishi, Yohei Sogo",
          "Sound Direction: Taichi Omura",
        ],
        ps_jp: [
          "アーティスト: 脇田玲",
          "総合プロデュース: 岩波 秀一郎",
          "制作・空間プロデュース：中西 径",
          "テクニカルディレクター: 岡田 正道",
          "映像機材: パナソニック コネクト",
          "音響機材: d&b audiotechnik、株式会社フリーク",
          "照明機材・演出: 空本 朋之",
          "制作協力: コニシユウゴ、十河陽平",
          "楽曲制作: 大村太一郎",
        ],
      },

      {
        title_en: "Zen Night Walk Tokyo",
        title_jp: "Zen Night Walk Tokyo",
        ps_en: [
          "Organize : VIE, Inc., NIKKEI Inc.",
          "Special Cooperation : Kenninji",
          "Support : Kyoto City Tourism Association",
          "Cooperation : JR Central, Daiko Electric Co.,Ltd., Panasonic Connect, d&b audiotechnik, H. Ikeuchi & Co., Ltd., CANVAS inc., MUTEK Japan, ETERNAL Art Space",
        ],
        ps_jp: [
          "主催：VIE、⽇本経済新聞社",
          "場所：大本⼭建仁寺",
          "特別協⼒：⼤本⼭建仁寺",
          "後援： (公社)京都市観光協会",
          "協⼒：東海旅客鉄道, 大光電機, パナソニックコネクト, d&b audiotechnik, いけうち, カンバス, MUTEK Japan, ETERNAL Art Space",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  stream: {
    title: {
      title: "Stream",
      keys: ["Realtime Software"],
      span: "2024",
      bg_src: "./img/work-inner/stream/stream_back.jpg",
    },
    intro_en: [
      "I wanted to create a landscape where the world of Zen and reality coexist. I drew a wind flowing through Shibuya and juxtaposed it with the flow of people coming and going at the New South Exit of Shibuya Station. If you look at the painting on the floor, you will notice that the landscape is depicted using only circles of the same size. In Zen, the circle represents the world itself. No matter where you cut out this work, you will find the universe there. The organic landscape, which reminds us of the universe and all things in the forest, is created by a set of circles, and reflects the viewers mind.",
    ],
    intro_jp: [
      "禅の世界観と現実が同居する風景を作りたいと思いました。そこで、渋谷を流れる風を描き、新南口を行き交う人の流れと並置しました。床の絵を眺めていると、同じサイズの円だけで風景が描かれていることに気がつくことでしょう。禅において円は世界そのものをあらわしています。この作品のどこを切り取っても、そこに宇宙があります。円の集合が作り上げる宇宙や森羅万象を想起させる有機的な風景には、見る人の心が映し出されます。",
    ],

    imgs: [
      { src: "./img/work-inner/stream/stream_01.jpg" },
      { src: "./img/work-inner/stream/stream_back.jpg" },
      { src: "./img/work-inner/stream/stream_02.jpg" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Shibuya Stream, Tokyo, 2023"],
        ps_jp: ["- 渋谷ストリーム, 2024"],
      },
    ],
  },

  //-------------------------------------------------------------------
  overbillions: {
    title: {
      title: "Over Billions of Years",
      keys: [
        "Audio Visual Installation with 128ch Line Array Speakers & 8K Movie",
      ],
      span: "2024",
      bg_src: "./img/work-inner/overbillions/overbillions_header.jpg",
    },
    intro_en: [""],
    intro_jp: [
      "果てなく続く大地の変遷。そのダイナミクスを8K映像と音場合成技術により体感する",
      "「人間が10億年生きることができたら、大地が流体のように振る舞う様子に立ち会えるのではないだろうか」。悠久の時間の中で展開される大地の脈動や呼吸を聞き、大地のその新陳代謝に立ち合いたい。本作はそんな思いに端を発しています。作家は氷河期、間氷期、大地の砂漠化、森林化、河川の生成、島の生成、人工物の生成など、数千年から億年単位で推移するさまざまな段階を、1つの数理モデルを用いてシミュレーションし、高精細な映像表現と音像表現で可視聴化します。大地はどのように生まれ、変化していくのか。文明が生まれて衰退していく過程はどのようなものか。自然と人工はどのように接続されるのか−。8K映像と音場合成技術による新たな音響表現がもたらす空間のなかに、根源的な問いが浮かび上がります。",
      "（札幌国際芸術祭 解説より）",
    ],

    imgs: [
      {
        src: "./img/work-inner/overbillions/overbillions_01.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      {
        src: "./img/work-inner/overbillions/overbillions_02.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      {
        src: "./img/work-inner/overbillions/overbillions_03.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      {
        src: "./img/work-inner/overbillions/overbillions_04.jpg",
        caption:
          "(C)Sapporo International Art Festival 2024, Photo by KUSUMI Erika",
      },
      {
        src: "./img/work-inner/overbillions/overbillions_05.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Sapporo International Art Festival, Moerenuma Park, Sapporo, 2024",
        ],
        ps_jp: ["- 札幌国際芸術祭, モエレ沼公園, 2024"],
      },

      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Akira Wakita in collaboration with NHK Science & Technology Research Laboratories, with the support of Astrodesign Inc.",
          "----",
          "Concept / Direction : AKIRA WAKITA ",
          "Visual Software Development : YUKI KUWASHIMA",
          "Sound Composition : HANANOSUKE TAKIMOTO, KAIRI HARUNA",
          "Sound System Development and Design : YO SASAKI, YASUSHIGE NAKAYAMA",
          "Sound Effects Design : MASAKI KURINO",
          "3D Sound Design / Mastering : ATSUSHI TERADA, AKIFUMI YAMAGUCHI (NHK TECHNOLOGIES, Inc.)",
          "Technical Coordinator : KOTOMI WATANABE (NHK TECHNOLOGIES, Inc.)",
          "8K Direction : JIN SATO, KOHEI HAYAKAWA",
          "Special Thanks to : MASARU MIYAZAKI, IKUKO SAWAYA",
        ],
        ps_jp: [
          "Akira Wakita in collaboration with NHK Science & Technology Research Laboratories, with the support of Astrodesign Inc.",
          "----",
          "Concept / Direction : AKIRA WAKITA ",
          "Visual Software Development : YUKI KUWASHIMA",
          "Sound Composition : HANANOSUKE TAKIMOTO, KAIRI HARUNA",
          "Sound System Development and Design : YO SASAKI, YASUSHIGE NAKAYAMA",
          "Sound Effects Design : MASAKI KURINO",
          "3D Sound Design / Mastering : ATSUSHI TERADA, AKIFUMI YAMAGUCHI (NHK TECHNOLOGIES, Inc.)",
          "Technical Coordinator : KOTOMI WATANABE (NHK TECHNOLOGIES, Inc.)",
          "8K Direction : JIN SATO, KOHEI HAYAKAWA",
          "Special Thanks to : MASARU MIYAZAKI, IKUKO SAWAYA",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  climatic: {
    title: {
      title: "Climatic Reflector",
      keys: ["Audio Visual Installation"],
      span: "2024",
      bg_src: "./img/work-inner/climatic/climatic_01.jpg",
    },
    intro_en: [
      "This work is an immersive signage using big data on climate change. By capturing point cloud data of the viewer into the video, the work exposes the recursive relationship between climate and the viewer. The concept is: see yourself looking at the visualization of climate change. What viewers see is not only the visualization of climate change using big data, but also themselves looking at the visualization. This is inspired by the “middle voice” that existed in Proto-Indo-European language. This voice is intermediate between the active and the passive. It is a voice that deals with cases where one’s action (verb) affects not only to the object of the action but also to oneself (subject). The viewers themselves are also captured as point cloud data. The viewer who watches this will be reenacting climate change and their own middle voice state for themselves.",
      "Various open big data on climate change are used in this work: 66 years of phenological observation data from the Japan Meteorological Agency, specific CFCs accumulated in the ocean over the past 60 years from Applied Physics Laboratory of University of Washington, NASA Ozone Watch’s 42 years of Antarctic ozone hole observations, and MERIT DEM’s revised Copernicus sentinel data.",
      "This work was exhibited in a shopping district in Sapporo, Japan, in February 2024. Using public signage that normally displays advertisements, immersive audiovisual experience was installed. Through this practice, a cultural infrastructure that triggers educational and introspective behaviors was examined.",
      "This work is the result of a four-year collaboration between Mitsubishi Electric Corporation Integrated Design Center and Keio University Akira Wakita Laboratory. Mitsubishi Electric is a company that builds highly public infrastructure. The collaboration between the two is an experiment in building a new cultural infrastructure using visualization based on art and science.",
    ],
    intro_jp: [
      "本作は「人々の気候変動への態度」を可視化する装置です。コンセプトは、気候変動の可視化を見ている自分自身を見る。鑑賞者が見ているのは、ビッグデータを用いた気候変動の可視化だけではなく、その可視化を見ている自分自身です。これはインド・ヨーロッパ祖語に存在した「中動態」にインスピレーションを受けています。これは能動態と受動態の中間的な態度を指します。自分の行為（動詞）が、行為の対象のみならず自分自身に及ぶ場合を扱う態のことです。このデータアートの中には鑑賞者自身も点群データとして取り込まれます。そして、それをみている鑑賞者は、気候変動の問題が自分たち自身にも影響を及ぼすものであるという擬似状態、つまり人々の環境に対する中動態的な状態を自ら再現することになります。",
      "本作には様々な気候変動に関するオープンなビッグデータが用いられています。Japan Meteorological Agency Website, Phenological Observation Dataによる66年分の風物詩のデータ、Applied Physics Laboratory, University of Washingtonによる過去70年間の海面シミュレーションのデータおよび過去60年で海中に蓄積された特定フロンのデータ、NASA Ozone Watch による南極オゾンホールの42年間の観測データ、MERIT DEMによるコペルニクスのセンチネルデータの修正版、IPCC（気候変動に関する政府間パネル）の2300年のシナリオ、などです。これらの科学的なオープンなビッグデータに対して、アーティストの言語や操作が適用され、その結果が可聴/可視化されています。作品はすべてリアルタイムのソフトウェアとして制作されており、FullHDのLEDパネルを横3面に展開した没入型の環境に投影されます。",
      "Climatic Reflectorは2024年の2月に日本の札幌市の商店街で展示されました。普段は消費行動を促す企業広告が表示されている公共のサイネージを利用し、対話的で没入型の視聴覚体験をインストールしました。鑑賞者は美しく心地の良い視聴覚作品を体験しているうちに、徐々にそれが気候変動のデータを可視化しており、その一部に自分自身が取り込まれていることを理解し始め、周囲の人々と様々な対話をし始める様が観察されました。この実践を通して購買活動とは異なる文化的、教育的、内省的行動を誘発する文化インフラのあり方が検討されました。",
      "本作は三菱電機統合デザイン研究所と慶應義塾大学脇田玲研究室の4年間の共同研究の成果として制作されました。三菱電機はエレベータ、発電機、人工衛星などの公共性の高いインフラを構築する世界的企業であり、脇田研究室は可視化の新しい可能性をアートとサイエンスの融合により開拓しています。両者のコラボレーションは、アートとサイエンスに裏打ちされた可視化を用いた新しい社会インフラ構築の実験であり、街中に次々にと組み込まれているLEDサイネージを用いた新たな公共性のデザインの実験でもあります。",
    ],

    videos: ["https://player.vimeo.com/video/994357022"],

    imgs: [
      { src: "./img/work-inner/climatic/climatic_01.jpg" },
      { src: "./img/work-inner/climatic/climatic_02.jpg" },
      { src: "./img/work-inner/climatic/climatic_03.jpg" },
      { src: "./img/work-inner/climatic/climatic_04.jpg" },
      { src: "./img/work-inner/climatic/climatic_05.jpg" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Sapporo International Art Festival, Sapporo, 2024"],
        ps_jp: ["- 札幌国際芸術祭, 札幌地下歩道 オーロラプラザ, 2024"],
      },

      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Mitsubishi Electric Corporation Integrated Design Center + Keio University Akira Wakita Laboratory",
          "Direction : Akira Wakita, Shusuke Sekino",
          "Visualization : Maki Ito, Misaki Yamao, Shodai Kayama, Yuta Morofuji, Yuki Yoshida",
          "System Development : Yuta Morofuji, Yuki Ikeda",
          "Display Layout : Momone Matsumura",
          "Sound Design : Misaki Yamao, Momoha Anayama",
        ],
        ps_jp: [
          "三菱電機統合デザイン研究所 + 慶應義塾大学脇田玲研究室",
          "Direction : Akira Wakita, Shusuke Sekino",
          "Visualization : Maki Ito, Misaki Yamao, Shodai Kayama, Yuta Morofuji, Yuki Yoshida",
          "System Development : Yuta Morofuji, Yuki Ikeda",
          "Display Layout : Momone Matsumura",
          "Sound Design : Misaki Yamao, Momoha Anayama",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  arsdas: {
    title: {
      title: "Mother Fluctuation",
      keys: ["Audio Visual Installation / Live Performance"],
      span: "2023",
      bg_src: "./img/work-inner/arsdas/arsdas_01.jpg",
    },
    intro_en: [
      "This film aims to express the impact of climate change from an artistic standpoint while using scientific data. Through multiple scenes, the work focuses on the phenomenon of fluctuation (rise and fall) of temperature, sea level altitude, markets, and civilization, and depicts Mother Earth, which is indifferent to human activity. Referencing the expression of traditional Japanese hell painting (Jigoku-e), the work renders landscapes that reminds us of the catastrophe that global warming will bring to mankind by manipulating open scientific data in an art-specific manner. The team aimed to create an immersive visual and acoustic space with 8K video and 5.1ch stereoscopic sound.",
    ],
    intro_jp: [
      "本作は気候変動のビッグデータを用いた没入型のオーディオビジュアルインスタレーションです。複数のシーンを通して、温度、海面高度、市場、文明などのフラクチュエーション（上昇と下降）という現象に着目し、人間の営為には頓着することのない母なる地球が描かれています。日本伝統の地獄絵の表現を参照しながら、オープンな科学データにアート特有の操作を適用し、温暖化が人類にもたらす大災害を想起させる風景を可視化／可聴化しています。8K映像と5.1ch立体音響を駆使して、没入的な映像音響空間を構築しました。",
    ],

    videos: ["https://www.youtube.com/embed/4YYHjoOBvEY"],

    imgs: [
      {
        src: "./img/work-inner/arsdas/arsdas_04.jpg",
        caption: "Photo by Markus Schneeberger",
      },
      {
        src: "./img/work-inner/arsdas/arsdas_03.jpg",
        caption: "Photo by Markus Schneeberger",
      },
      {
        src: "./img/work-inner/arsdas/arsdas_02.jpg",
        caption: "Photo by Markus Schneeberger",
      },
      { src: "./img/work-inner/arsdas/arsdas_05.png" },
      { src: "./img/work-inner/arsdas/arsdas_06.png" },
      { src: "./img/work-inner/arsdas/arsdas_07.png" },
    ],
    options: [
      {
        title_en: "SCREENING",
        title_jp: "上映",
        ps_en: [
          "- Ars Electronica Festival, Data Art and Science, DeepSpace8K, Linz, 2023",
        ],
        ps_jp: [
          "- Ars Electronica Festival, Data Art and Science, DeepSpace8K, Linz, 2023",
        ],
      },

      {
        title_en: "PERFORMANCE",
        title_jp: "ライブパフォーマンス",
        ps_en: ["- Ars Electronica Festival, Future Lab Night, Linz, 2023"],
        ps_jp: ["- Ars Electronica Festival, Future Lab Night, Linz, 2023"],
      },

      {
        title_en: "DATA SET",
        title_jp: "データセット",
        ps_en: [
          "- IPCC - The Intergovernmental Panel on Climate Change, https://www.ipcc.ch",
          "- OFES (Ocean General Circulation Model for the Earth Simulator) dataset by JAMSTEC, https://www.jamstec.go.jp/ofes/",
        ],
        ps_jp: [
          "- IPCC - The Intergovernmental Panel on Climate Change, https://www.ipcc.ch",
          "- OFES (Ocean General Circulation Model for the Earth Simulator) dataset by JAMSTEC, https://www.jamstec.go.jp/ofes/",
        ],
      },

      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : AKIRA WAKITA",
          "Software : YUKI KUWASHIMA, YUTA MOROFUJI",
          "Sound : KAIRI HARUNA",
          "Research : YOSHINORI SHIBAHARA, KAZUKI NAGATA, TAISHO NISHIHARA",
          "Technical Support : ASTRODESIGN INC., MASAKI YAMABE",
        ],
        ps_jp: [
          "アーティスト : 脇田玲",
          "ソフトウェア : 桑島侑己, 諸藤勇太",
          "サウンド : 春名海里",
          "リサーチ : 柴原佳範, 永田一樹, 西原大生",
          "テクニカルサポート : アストロデザイン, 山辺真幸",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  vie: {
    title: {
      title: "Neuro Music - Dive Into Your Brain",
      keys: ["Live Performance"],
      span: "2023",
      bg_src: "./img/work-inner/vie/vie_01.jpg",
    },
    intro_en: [
      "VIE Inc., a developer of next-generation wearable earphone electroencephalographs and a social implementer of neurotechnology, presented a special live program at the MUTEK.JP Pro Conference 2023 held at Shibuya Stream Hall on Sunday, December 10, 2023. An audiovisual live performance by Shinya Fujii and Akira Wakita was held to experience the art of the future with music and images fused with the brain.",
    ],
    intro_jp: [
      "次世代型ウェアラブル・イヤホン型脳波計の開発とニューロテクノロジーの社会実装を行うVIE株式会社プロデュースにより、12月10日（日）に渋谷ストリームホールで行われたMUTEK.JP Pro Conference 2023 内にて、スペシャルライブプログラムを披露。脳と融合したAIが生成する音楽・映像による未来のアートを体験する、藤井進也＋脇田玲によるオーディオビジュアルライブを行いました。",
    ],

    videos: ["https://www.youtube.com/embed/cXp04YnhFUU"],

    imgs: [
      { src: "./img/work-inner/vie/vie_01.jpg" },
      { src: "./img/work-inner/vie/vie_02.jpg" },
      { src: "./img/work-inner/vie/vie_03.png" },
    ],
    options: [
      {
        title_en: "PERFORMANCE",
        title_jp: "ライブパフォーマンス",
        ps_en: ["- MUTEK JP, Pro Conference 2023, Tokyo, 2023"],
        ps_jp: ["- MUTEK JP, Pro Conference 2023, 渋谷ストリームホール, 2023"],
      },
    ],
  },

  //-------------------------------------------------------------------
  us: {
    title: {
      title: "us",
      keys: ["Installation"],
      span: "2023",
      bg_src: "./img/work-inner/us/us_back.jpg",
    },
    intro_en: [
      "This work is a 4K 2-channel audio visual installation consisting of two large displays, speakers, and a PC. The aim was to create an audiovisual poetic experience within the context of biodiversity, climate change, and pandemics.",
    ],
    intro_jp: [
      "本作は2台の大型ディスプレイ、スピーカー、PCから構成される4K 2chのオーディオ・ヴィジュアル・インスタレーションです。生物多様性、気候変動、パンデミックといった文脈を背景に、視聴覚による詩的体験を目指しました。",
    ],

    concept_ps_en: [
      "----------",
      "Our bodies are a collection of living microorganisms. It is said that 40% of our cell count comes from bacteria. If that is the case, where is the individual self? Microorganisms, viruses, minerals, and non-human things are also human.",
      "We are accidentally born out of nothingness. And one day, we will be transformed back into absolute nothingness. Cells, mountains, planets, and even galaxies all share the same fate. Everything is in the flow of a great circulation.",
    ],
    concept_ps_jp: [
      "----------",
      "私たちの体は生きた微生物の集合体。細胞数の4割はバクテリアのものらしい。だとしたら、自分という個はどこにあるのか。微生物もウイルスも鉱物も、人間ならざるものは人間でもある。",
      "私たちは無から偶然生まれた存在。またいつか、絶対的な無にかえっていく存在。細胞も山脈も惑星も、そして銀河ですら、みな同じ運命。すべては大循環の流れのなかにある。",
    ],

    imgs: [
      { src: "./img/work-inner/us/us_01.jpg" },
      { src: "./img/work-inner/us/us_02.jpg" },
      { src: "./img/work-inner/us/us_03.jpg" },
      {
        src: "./img/work-inner/us/us_04.jpg",
        caption: "photo by Takeshi Uematsu",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- YATSUGATAKE ART ECOLOGY, Yamanashi, 2023"],
        ps_jp: [
          "- 山梨国際芸術祭 八ヶ岳アート・エコロジー 2023, 清春芸術村, 2023",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  crosssection: {
    title: {
      title: "Cross Section of Light",
      keys: ["Installation"],
      span: "2023",
      bg_src: "./img/work-inner/crosssection/crosssection_back.png",
    },
    intro_en: [""],
    intro_jp: [""],
    imgs: [
      { src: "./img/work-inner/crosssection/crosssection_02.jpg" },
      { src: "./img/work-inner/crosssection/crosssection_01.png" },
      { src: "./img/work-inner/crosssection/crosssection_03.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita"],
        ps_jp: ["アーティスト：脇田玲"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- TOKYO GENDAI, Yokohama, 2023"],
        ps_jp: ["- 東京現代, 2023"],
      },
    ],
  },

  //-------------------------------------------------------------------
  oppenheimer: {
    title: {
      title: "Armstrong | Oppenheimer",
      keys: ["Installation"],
      span: "2023",
      bg_src: "./img/work-inner/oppenheimer/oppenheimer_back.png",
    },
    intro_en: [
      "The theme of joy and repentance in science and technology. Neil Armstrong's and Robert Oppenheimer's videos are perfectly matched in scale and volume, and are played back at the same time. The words of both men spread through the space as if they were drowning each other out, and are played on a loop forever.",
    ],
    intro_jp: [
      "科学技術における歓喜と懺悔をテーマにした。ニール・アームストロングとロバート・オッペンハイマーの映像は尺も音量もぴたりと合わせてあり、同じタイミングで再生される。両者の言葉はお互いをかき消すように空間に広がり、永遠にループ再生される。",
    ],
    imgs: [
      { src: "./img/work-inner/oppenheimer/oppenheimer_01.jpg" },
      { src: "./img/work-inner/oppenheimer/oppenheimer_02.png" },
      { src: "./img/work-inner/oppenheimer/oppenheimer_03.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Setup Assistants: Kairi Haruna, Yoshinori Shibahara, Kazuki Nagata, Masaya Shirai, Yuki Ishibashi",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "制作補佐：春名海里、柴原佳範、永田一樹、白井雅也、石橋優希",
        ],
      },

      {
        title_en: "MATERIAL",
        title_jp: "資料",
        ps_en: [
          "Video downloaded from NASA APOLLO 11 Video Library (https://history.nasa.gov/alsj/a11/video11.html). Public domain. ",
          "Corrected Transcript downloaded from NASA APOLLO 11 LUNAR SURFACE JOURNALS, Copyright (C) 1995 by Eric M. Jones. All rights reserved.",
          "Robert Oppenheimer movie, Copyright 1998-2023 by AJ Software & Multimedia, All Rights Reserved., Downloaded from https://www.atomicarchive.com/media/videos/media/oppenheimer-quote.mp4",
        ],
        ps_jp: [
          "Video downloaded from NASA APOLLO 11 Video Library (https://history.nasa.gov/alsj/a11/video11.html). Public domain. ",
          "Corrected Transcript downloaded from NASA APOLLO 11 LUNAR SURFACE JOURNALS, Copyright (C) 1995 by Eric M. Jones. All rights reserved.",
          "Robert Oppenheimer movie, Copyright 1998-2023 by AJ Software & Multimedia, All Rights Reserved., Downloaded from https://www.atomicarchive.com/media/videos/media/oppenheimer-quote.mp4",
        ],
      },

      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Akira Wakita - Governing Equations, JAPAN ART BRIDGE, Tokyo, 2023",
        ],
        ps_jp: [
          "- 脇田玲個展「Governing Equations」, JAPAN ART BRIDGE, JR旧万世橋駅, 2023",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  proposalJR: {
    title: {
      title: "Proposal (JR Version)",
      keys: ["Installation"],
      span: "2023",
      bg_src: "./img/work-inner/proposaljr/proposaljr_back.jpg",
    },
    intro_en: [
      "Can AI really design an ideal mobile environment?",
      "Can people accept a mobile device created by an AI with conviction and peace of mind?",
      'This work consists of a monitor and a ballot box. The monitor displays the office of the future generated by AI from the text. For example, the viewer is asked to cast one vote of "YES" or "NO" for a design automatically generated by artificial intelligence using words such as "train design of the future," "innovative train interior design to reduce the incidence of molestation," or "innovative train interior design to prevent indiscriminate killings" as keys, through the classic and political decision-making system called voting. The ballot box is made of transparent material. The ballot box is made of a transparent material that allows people to visualize in real time whether they accept or reject the mobility design by AI.',
      "",
      "Inspired ”MoMA Poll” by Hans Haacke, this work visualizes a politics with AI that asks viewers whether they support power in the 2020s.",
    ],
    intro_jp: [
      "AIは果たして理想の移動環境をデザインしうるのでしょうか?",
      "AIがつくった移動体を人は納得して、そして安心して受け入れられるのでしょうか?",
      "本作品はモニターと投票箱から構成されます。モニターにはAIがテキストから生成した未来の移動環境が表示されます。たとえば「未来の電車のデザイン」「痴漢の発生を抑制する画期的な車内デザイン」「無差別殺傷事件を防止する画期的な車内デザイン」などの言葉をキーとして人工知能が自動生成したデザインに対し、鑑賞者は投票という古典的かつ政治的な意思提示システムを用いて、1票をYESかNOに投じます。投票箱は透明な素材で作られており、人々がAIによるモビリティデザインを受け入れるのか否かがリアルタイムに可視化されます。",
      "本作はハンス・ハーケ(Hans Haacke)が1970年に発表した「MoMA Poll」にインスパイアされています。2020年代における権力、つまりAIやアルゴリズム、を支持するかどうかを鑑賞者に問う「AIとの政治学」のささやかな試みです。",
    ],
    imgs: [
      { src: "./img/work-inner/proposaljr/proposaljr_01.jpg" },
      { src: "./img/work-inner/proposaljr/proposaljr_02.jpg" },
      { src: "./img/work-inner/proposaljr/proposaljr_03.jpg" },
      { src: "./img/work-inner/proposaljr/proposaljr_04.jpg" },
      { src: "./img/work-inner/proposaljr/proposaljr_05.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Fixture Design: Gaku Inoue",
          "AI Image Generation: Kaoru Yoshizawa",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "筐体設計：井上岳",
          "AI画像生成：吉沢馨",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Akira Wakita - PROPOSAL, JAPAN ART BRIDGE, Tokyo, 2023"],
        ps_jp: [
          "- 脇田玲個展「PROPOSAL」, JAPAN ART BRIDGE, JR旧万世橋駅, 2023",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  proposal: {
    title: {
      title: "Proposal",
      keys: ["Installation"],
      span: "2022",
      bg_src: "./img/work-inner/kokuyo/kokuyo_head.jpg",
    },
    intro_en: [
      "Can artificial intelligence really design an ideal office space?",
      "Can people accept such a space with conviction?",
      "",
      "The artist entered words such as, ”the best office space Kokuyo will present in 2030” or ”The office designed by a revived Corbusier,” and the proposed space design automatically generated by the artificial intelligence was displayed. Viewers cast one vote for YES or NO using the classic and political intention presentation system. The ballot box is made of transparent material, which visualizes in real time whether people accept or reject the office design by AI.",
      "",
      "Inspired ”MoMA Poll” by Hans Haacke, this work visualizes a politics with AI that asks viewers whether they support power in the 2020s.",
    ],
    intro_jp: [
      "AIは果たして理想のオフィス空間をデザインしうるのでしょうか？",
      "そのような空間を人は納得して受け入れられるのでしょうか？",
      "",
      "本作品はモニターと投票箱から構成されます。モニターにはAIがテキストから生成した未来のオフィスが表示されます。たとえば「2030年にコクヨが発表する最高のオフィス空間」「生き返ったコルビジェがデザインしたオフィス」などの言葉をキーとして人工知能が自動生成した空間デザインに対し、鑑賞者は投票という古典的かつ政治的な意思提示システムを用いて、1票をYESかNOに投じます。投票箱は透明な素材で作られており、人々がAIによるオフィスデザインを受け入れるのか否かがリアルタイムに可視化されます。",
      "",
      "本作はハンス・ハーケ(Hans Haacke)が1970年に発表した「MoMA Poll」にインスパイアされています。2020年代における権力、つまりAIやアルゴリズムを支持するかどうかを鑑賞者に問う「AIとの政治学」の最初の試みです。",
    ],
    imgs: [
      { src: "./img/work-inner/kokuyo/kokuyo_2.jpg" },
      { src: "./img/work-inner/kokuyo/kokuyo_1.jpg" },
      { src: "./img/work-inner/kokuyo/result.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Fixture Design: Gaku Inoue",
          "AI Image Generation: Risako Takeya",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "筐体設計：井上岳",
          "AI画像生成：武谷梨紗子",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Kokuyo Open Lab., Tokyo, 2022"],
        ps_jp: ["- Kokuyo Open Lab., 品川, 2022"],
      },
    ],
  },

  //-------------------------------------------------------------------
  jomon_vortex: {
    title: {
      title: "Vortex",
      keys: ["Installation", "(Realtime Software, Jomon Pottery)"],
      span: "2022",
      bg_src: "./img/work/jomon_vortex.jpg",
    },
    intro_en: [
      "Art in the age of invisibility",
      "In the process of creating works based on computational fluid dynamics, I am struck by the mysterious impressions and primordial aesthetic sensations of its fluidic forms that well up from deep within my body. When I saw the Jomon pottery in front of me, I realized that my body was filled with sensations that were quite similar, if not identical, to what I had at the process of creating works based on computational fluid dynamics.",
      "The sudden appearance of powerful whirlpools, the complex asymmetry yet unbroken harmony, and the organic curves and surfaces that are reminiscent of reptiles and amphibians. The formative characteristics found in them are common to both computational fluid dynamics and the Jomon pottery. It is very strange that the fluid images that emerge through the use of computers, the symbol of modern technology, are so similar to the patterns of earthenware, the symbol of the Jomon period.",
      "How were the Jomon people able to create such complex fluidic forms in an age without computers? What kind of landscape and the world did the Jomon pople see? The Jomon must have possessed a physical and spatial sensibility that is beyond our imagination, as they spent their days in a fierce of struggles facing their prey with all their might, in a situation where they could not afford to live or die, hunt or be hunted. In addition to such physical and spatial senses, their creations may have been related to the Jomon’s unique spiritual world of magic (Taro Okamoto named such a sense of the Jomon people as the four-dimensional world and he tried to unravel the relationship between the world they saw and Jomon pottery modeling in his article” Jomon-doki-ron”(1952)).",
      "On the other hand, in this digital era today, while big data and AI seem to be making things “visible,” we may actually be living in an age of “invisibility. In the COVID-19 pandemic, we are striving to see the truth. However, it seems that many people do not directly touch the data with their own hands but they actually seem to try to grasp the world through the mass media, which is rife with inflammatory headlines and fake news. Like the Jomon people of old, shouldn’t modern humans acquire the body to run through the forest of data and try to capture the truth with all our might?",
      "What do we see, and what do we not see? Didn’t the Jomon people see more than what we do now? In the midst of a world in turmoil due to the pandemic, such questions come to mind. In this exhibition, by juxtaposing Jomon pottery and stone tools with fluid images based on data science, I wanted to reexamine what it means to “see” and “be seen” for us.",
    ],
    intro_jp: [
      "不可視化する時代のアート - Art in the age of invisibility",
      "",
      "私は数値流体力学に基づく作品をつくる過程で、流れの造形に対して体の奥底から湧き上がる不思議な感動、根源的な美的感覚を感じているのですが、縄文土器を目の前にした時、全く同じでは無いにせよかなり近い感覚が身体を満たしていることに気がつきました。",
      "突如出現する力強い渦巻、複雑なアンシンメトリーでありながら崩れるのことのない調和、爬虫類や両生類を思わせる有機的な曲線や曲面。これらの造形的特徴が両者に共通しているのです。現代の技術の象徴であるコンピュータを駆使して浮かび上がらせる流体のイメージが、縄文時代の象徴である土器のパターンによく似ているのはとても不思議なことです。",
      "コンピュータがなかった時代に、なぜ縄文人は複雑な流体的造形をつくりえたのでしょうか？縄文人はどのような風景と世界を見ていたのでしょうか？生きるか死ぬか、狩るか狩られるかというのっぴきならない状況で、全身全霊で獲物と向き合う激烈な日常を過ごしていた縄文人は、我々の想像を絶する身体感覚や空間感覚を持っていたことでしょう。そのような身体と空間に加えて、縄文特有の呪術的精神世界が彼らの創作物に関係していたのかもしれません（岡本太郎はそのような縄文人の感覚を四次元的世界と名づけ、『縄文土器論』で彼らが見ていた世界と土器造形の関係を紐解こうとしました）。",
      "一方で、コンピュータ全盛の現代は、ビックデータやAIによる「見える化」が進んでいるようで、実は「不可視化」が進んでいる時代なのかもしれません。コロナ禍において我々は真実をみようと努力しています。しかし、多くの人は自らの手で直接データに触れることはなく、その代わりに、扇動的な見出しやフェイクニュースが横行するマスメディアから世界を捉えようとしているようにみえます。かつての縄文人のように、現代人はデータの森を駆け抜け、全身全霊で真実を捉えようとする身体を獲得すべきではないでしょうか。",
      "我々には何が見えていて、何が見えていないのか。縄文人は我々よりも多くのものを見ていたのではないか。パンデミックで混乱した世界の中で、そのような問いが浮かび上がります。この展示では、縄文時代の土器や石器とデータサイエンスに基づく映像を併置することで、我々にとって「見る」「見える」とはどのようなことなのか改めて問いたいと考えました。",
    ],
    imgs: [
      { src: "./img/work-inner/jomon_vortex/vortex_2.jpg" },
      { src: "./img/work-inner/jomon_vortex/vortex_1.jpg" },
      {
        src: "./img/work-inner/jomon_vortex/vortex_3.jpg",
        caption: "Photo by Issei Suzuki",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Setup Assistant : Issei Suzuki"],
        ps_jp: ["アーティスト：脇田玲", "設営補佐：鈴木一生"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Kiyoharu Jomon Exhibition, Kiyoharu Shikaraba Museum, Yamanashi, 2022",
        ],
        ps_jp: ["- 清春縄文展, 清春白樺美術館, 山梨, 2021-2022"],
      },
    ],
  },

  //-------------------------------------------------------------------
  jomonverse: {
    title: {
      title: "Jomonverse",
      keys: ["Realtime Software"],
      span: "2022",
      bg_src: "./img/work-inner/jomonverse/jomonverse_head.png",
    },
    intro_en: [""],
    intro_jp: [""],
    imgs: [
      { src: "./img/work-inner/jomonverse/jomonverse_2.png" },
      { src: "./img/work-inner/jomonverse/jomonverse_3.png" },
      { src: "./img/work-inner/jomonverse/jomonverse_4.png" },
      { src: "./img/work-inner/jomonverse/jomonverse_1.png" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Setup Assistant : Issei Suzuki"],
        ps_jp: ["アーティスト：脇田玲", "設営補佐：鈴木一生"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Kiyoharu Jomon Exhibition, Kiyoharu Shikaraba Museum, Yamanashi, 2022",
        ],
        ps_jp: ["- 清春縄文展, 清春白樺美術館, 山梨, 2021-2022"],
      },
    ],
  },

  //-------------------------------------------------------------------
  hollow: {
    title: {
      title: "Hollow",
      keys: ["Installation"],
      span: "2022",
      bg_src: "./img/work/jomon_hollow.jpg",
    },
    intro_en: [
      "A hollow clay figurine is paired with a hollow computer. Some objects may reveal something for the first time when their contents are removed and only the shell remains. By making the computer hollow, the anthropomorphic, organic, and magical qualities that lurk in modern artifacts become visible. By facing the concept of emptiness not from the perspective of phenomena or symbols, but from the perspective of ones own body, we may be able to see a rich meaning in it.",
    ],
    intro_jp: [
      "中空土偶と中空のコンピュータを対置した。中身がなくなり、殻だけが残ることで、つまり中空の状態になることで、初めて何かが見えてくる対象もあるだろう。コンピュータを中空にすることで、現代の人工物に潜む擬人性、有機性、呪術性が見えてくる。それ以外の何かを見る人もいるだろう。空という概念に、現象や記号から向き合うのではなく、己の身体から向き合うことで、そこに豊かな意味を見ることができるのではなかろうか。",
    ],
    imgs: [
      { src: "./img/work-inner/jomon_hollow/hollow_2.jpg" },
      {
        src: "./img/work-inner/jomon_hollow/hollow_1.jpg",
        caption: "Photo by Issei Suzuki",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Setup Assistant : Issei Suzuki"],
        ps_jp: ["アーティスト：脇田玲", "設営補佐：鈴木一生"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Kiyoharu Jomon Exhibition, Kiyoharu Shikaraba Museum, Yamanashi, 2022",
        ],
        ps_jp: ["- 清春縄文展, 清春白樺美術館, 山梨, 2021-2022"],
      },
    ],
  },

  //-------------------------------------------------------------------
  keith_diversity: {
    title: {
      title: "Diversity (For Alan and Keith)",
      keys: ["Realtime Software"],
      span: "2021",
      bg_src: "./img/work-inner/keith_diversity/diversity_0.jpg",
    },
    intro_en: [
      "Mapping the Gray-Scott model to the UV plane provides a continuous view of all the possible shapes this model can produce. This image is familiar to researchers in complex systems science, and there is nothing novel here in a scientific sense. However, if you display this pattern using the fastest PC available to you, at the maximum resolution that can be interactively displayed, you will find that it produces richer shapes than you can imagine. In the future, as PCs become faster, we will be able to visualize a finer and finer world, and we will encounter unknown forms.",
      "This seems to apply not only to the Turing pattern, but to many other things as well. Advances in science and technology will allow us to look at the world in greater depth and detail in the years to come. What we thought were only two classifications for a given subject may actually be nine, and as more science advances, the existence of tens of thousands of patterns may become apparent.",
      "In the 1950s, when Alan Turing died, homosexuality was a crime. In the 21st century, the term diversity has become popularized, and the gradations of sexuality known as LTBTQ are finally becoming known. However, it seems that there are still many people who do not understand this kind of gender identity. It seems as if they are stubbornly continuing to use old-fashioned PCs and are stuck in a world with low resolution. In this age of high speed and high resolution, we need to look at the world as a complex system.",
    ],
    intro_jp: [
      "Gray-ScottモデルをUV平面にマッピングすると、このモデルで生成しうるすべての形を連続的に表示することができます。この画像は複雑系科学の研究者にとって馴染みであり、科学的な意味での新規性はここにはありません。しかし、自分が利用しうる最も高速なPCを用いて、インタラクティブに表示しうる最大解像度でこのパターンを表示してみると、想像を超える豊かな形が生まれてくることに気が付きます。この先、PCが高速化すればするほど、私たちはより微細な世界を可視化することができるようになり、未知の形と出会うことになるでしょう。",
      "これはチューリングパターンのみならず、多くのことに当てはまるように感じられます。科学と技術の進歩により、この先、私たちはより深く細かく世界を見つめることができるようになるのです。ある対象に対して、2つしかないと思っていた分類が、実は9つあるかもしれないし、もっと科学が進めば数万のパターンの存在が明らかになるかもしれません。",
      "アラン・チューリングが亡くなった1950年代には同性愛は犯罪でした。キース・ヘリングが亡くなった1990年までWTOは同性愛を精神疾患として扱っていました。21世紀になって多様性という言葉が普及し、ようやくLTBTQというグラデーションをもった性のあり方が知られるようになりました。しかし、このような性自認に対して理解のない人はまだまだ多いように感じられます。まるで古臭いPCを頑なに使い続けて、解像度の低い世界にとらわれているように見えます。高速化と高解像度化が進む時代を生きる私たちには、世界を複雑系として見つめる眼差しが必要ではないでしょうか。",
    ],
    imgs: [{ src: "./img/work-inner/keith_diversity/snapshot_3.png" }],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Concept : Akira Wakita",
          "Software : Akira Wakita, Koki Nagashima, Yuta Morofuji, Maya Udagawa",
          "Setup Assistants : Maya Udagawa, Rakuki Ogawa, Yoshinori Shibahara, Issei Suzuki, Yuta Morofuji, Ai Yamamoto",
        ],
        ps_jp: [
          "コンセプト：脇田玲",
          "ソフトウェア開発：脇田玲、長島康生、諸藤勇太、宇田川まや",
          "設営補佐：宇田川まや、小川楽生、柴原佳範、鈴木一生、諸藤勇太、山本愛",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- For Alan and Keith, Hokuto Art Program ed.1, Nakamura Keith Haring Collection, Yamanashi, 2021-2022",
        ],
        ps_jp: [
          "- 「脇田玲 −アランとキースのために」 (Hokuto Art Program ed.1), 中村キース・ヘリング美術館, 山梨, 2021-2022",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  keith_equation: {
    title: {
      title: "Governing Equation (For Alan and Keith)",
      keys: ["FullHD Video"],
      span: "2021",
      bg_src: "./img/work-inner/keith_equation/equation_0.jpg",
    },
    intro_en: [
      "On the morning of the exhibit set-up, I unusually woke up at the crack of dawn. I had quite a bit of time before breakfast, so I took a walk in the forest adjacent to the Keith Haring Museum. I was able to capture many patterns on my smartphone during my hour-long walk.",
      'Scientists have attempted to describe nature through mathematics. In physics, they are called Governing Equations. As Galilei said, "The book of the universe is written in the language of mathematics.',
      "Those who have programmed some governing equations will see the output of the software overlap with the natural landscape, and will be able to see nature at a deeper level as a system. We are the first generation to live in an era in which we can reinterpret nature through programming.",
    ],
    intro_jp: [
      "設営の朝、私は珍しく夜明けと同時に目を覚ましました。朝食までに随分と時間があったので、キース・ヘリング美術館に隣接する森を散歩することにしました。朝日を浴びる枯れ木の裏に隠れた菌類の皺、八ヶ岳から穏やかに降りてくる風に揺れる草花のまだ小さいものに見られる葉序。1時間ほどの散策で、多くのパターンをスマートフォンで撮影することができました。",
      "科学者は数学による自然の記述を試みてきました。それらは物理学の世界では支配方程式(Governing Equation)と呼ばれています。ガリレイの言うように「宇宙という書物は数学の言葉で書かれている」のでしょう。",
      "何らかの支配方程式をプログラミングした経験のある者は、そのソフトウェアがアウトプットする様態と自然の風景が重なって見え、システムとして一段階深いレベルで自然を見ることができるようになります。我々はプログラミングによって自然を再解釈できる時代を生きる最初の世代なのです。",
    ],
    imgs: [
      {
        src: "./img/work-inner/keith_equation/equation_1.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      {
        src: "./img/work-inner/keith_equation/equation_2.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      { src: "./img/work-inner/keith_equation/equation_0.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Video / Graphic Design / Direction : Akira Wakita",
          "Graphic Design Assistant : Yoshinori Shibahara",
          "Video Assistants : Ai Yamamoto, Rakuki Ogawa, Issei Suzuki",
          "Setup Assistants : Maya Udagawa, Rakuki Ogawa, Yoshinori Shibahara, Issei Suzuki, Yuta Morofuji, Ai Yamamoto",
        ],
        ps_jp: [
          "撮影／編集：脇田玲",
          "グラフィックデザイン：柴原佳範",
          "撮影補佐：山本愛、小川楽生、鈴木一生",
          "設営補佐：宇田川まや、小川楽生、柴原佳範、鈴木一生、諸藤勇太、山本愛",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- For Alan and Keith, Hokuto Art Program ed.1, Nakamura Keith Haring Collection, Yamanashi, 2021-2022",
        ],
        ps_jp: [
          "- 「脇田玲 −アランとキースのために」 (Hokuto Art Program ed.1), 中村キース・ヘリング美術館, 山梨, 2021-2022",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  keith_dancers: {
    title: {
      title: "Dancers (For Alan and Keith)",
      keys: ["5ch Realtime Software"],
      span: "2021",
      bg_src: "./img/work-inner/keith_dancers/dancers_1.jpg",
    },
    intro_en: [
      "When I was shown unpublished drawings left by Keith Haring during his visit to Japan, I thought the curves were alive. The creature with Harings DNA must have grown naturally as it was, and as a result, an undulating, rotating, dynamic body was drawn. I made my own improvements to the algorithm of the Turing pattern, developed a system that draws curves while growing by itself, and juxtaposed it with Herings drawings",
    ],
    intro_jp: [
      "キース・ヘリングが来日時に残した未発表のドローイングを見せてもらった時、曲線が生きていると思った。ヘリングのDNAをもった生物がそのまま自然に生長した結果、うねりながら、回転しながら、躍動する身体が描かれていったのではなかろうか。チューリングパターンのアルゴリズムに独自の改良を加え、自ら生長しながら曲線を描くシステムを開発し、ヘリングのドローイングと併置した。",
    ],
    imgs: [
      {
        src: "./img/work-inner/keith_dancers/dancers_1.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Video : Akira Wakita",
          "Setup Assistants : Maya Udagawa, Rakuki Ogawa, Yoshinori Shibahara, Issei Suzuki, Yuta Morofuji, Ai Yamamoto",
        ],
        ps_jp: [
          "ソフトウェア／インスタレーション：脇田玲",
          "設営補佐：宇田川まや、小川楽生、柴原佳範、鈴木一生、諸藤勇太、山本愛",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- For Alan and Keith, Hokuto Art Program ed.1, Nakamura Keith Haring Collection, Yamanashi, 2021-2022",
        ],
        ps_jp: [
          "- 「脇田玲 −アランとキースのために」 (Hokuto Art Program ed.1), 中村キース・ヘリング美術館, 山梨, 2021-2022",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  keith_embryo: {
    title: {
      title: "Embryo (For Alan and Keith)",
      keys: ["Digital Print"],
      span: "2021",
      bg_src: "./img/work-inner/keith_embryo/embryo_1.jpg",
    },
    intro_en: [
      'Those who have read through the monumental paper "The Chemical Basis of Morphogenesis" will find that the roots of this idea lie in the concept of the Embryo',
    ],
    intro_jp: [
      "アラン・チューリングの記念碑的論文「The Chemical Basis of Morphogenesis」を読み進めた人であれば、この思想の根源は「胎児」の概念にあることに気が付くはずです。",
    ],
    imgs: [
      { src: "./img/work-inner/keith_embryo/embryo_1.jpg" },
      {
        src: "./img/work-inner/keith_embryo/embryo_2.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Design Assistant : Ai Yamamoto",
          "Setup Assistants : Maya Udagawa, Rakuki Ogawa, Yoshinori Shibahara, Issei Suzuki, Yuta Morofuji, Ai Yamamoto",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "制作補佐：山本愛",
          "設営補佐：宇田川まや、小川楽生、柴原佳範、鈴木一生、諸藤勇太、山本愛",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- For Alan and Keith, Hokuto Art Program ed.1, Nakamura Keith Haring Collection, Yamanashi, 2021-2022",
        ],
        ps_jp: [
          "- 「脇田玲 −アランとキースのために」 (Hokuto Art Program ed.1), 中村キース・ヘリング美術館, 山梨, 2021-2022",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  keith_param: {
    title: {
      title: "Parameters (For Alan and Keith)",
      keys: ["3ch HD Video"],
      span: "2021",
      bg_src: "./img/work/keith_thumb.jpg",
    },
    intro_en: [
      "To what extent is it possible to mathematically interpret Keith Haring`s drawings using Turing patterns? By developing animations of morphogenesis while changing the parameters of the reaction-diffusion system Kill and Feed, I attempted to generate patterns of biological shapes, motions, waves, and crosses characteristic of his work and their transitions.",
    ],
    intro_jp: [
      "チューリングパターンを用いてキース・ヘリングのドローイングを数学的に解釈することはどこまで可能でしょうか。反応拡散系のKillとFeedのパラメータを変更しながら形態生成のアニメーションを展開し、ヘリングの作品に特徴的な「生物的形状」「動きの軌跡」「波動」「十字架」などのパターンの生成とそれらの遷移を試みました。",
    ],
    imgs: [
      { src: "./img/work-inner/keith_param/keith_1.jpg" },
      {
        src: "./img/work-inner/keith_param/keith_2.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Video : Akira Wakita",
          "Setup Assistants : Maya Udagawa, Rakuki Ogawa, Yoshinori Shibahara, Issei Suzuki, Yuta Morofuji, Ai Yamamoto",
        ],
        ps_jp: [
          "映像：脇田玲",
          "設営補佐：宇田川まや、小川楽生、柴原佳範、鈴木一生、諸藤勇太、山本愛",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- For Alan and Keith, Hokuto Art Program ed.1, Nakamura Keith Haring Collection, Yamanashi, 2021-2022",
        ],
        ps_jp: [
          "- 「脇田玲 −アランとキースのために」 (Hokuto Art Program ed.1), 中村キース・ヘリング美術館, 山梨, 2021-2022",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  keith_all: {
    title: {
      title: "For Alan and Keith",
      keys: ["A Series of Works"],
      span: "2021",
      bg_src: "./img/work-inner/keith_all/keith_all_2.jpg",
    },
    intro_en: [
      "I wanted to create a timeless dialogue between two artistic geniuses, Alan Turing (father of computer science) and Keith Herring, who lived in different eras as sexual minorities. In my works, I mathematically reinterpreted Harings drawings and expressed the changing discussion of diversity while shifting from homophobia to a more accepting one of LGBT.",
    ],
    intro_jp: [
      "性的マイノリティとして異なる時代を生きた二人の天才、アラン・チューリング（計算機科学の父）とキース・ヘリングの時を超えた対話の場を作ろうと考えました。ヘリングのドローイングへの数学的な再解釈、ホモフォビアから LGBT へと変化してきた多様性の議論の変遷など、副次的なメッセージも込めて作品を作りました。",
    ],
    imgs: [
      { src: "./img/work-inner/keith_all/keith_all_1.jpg" },
      {
        src: "./img/work-inner/keith_all/keith_all_2.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Setup Assistants : Maya Udagawa, Rakuki Ogawa, Yoshinori Shibahara, Issei Suzuki, Yuta Morofuji, Ai Yamamoto",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "設営補佐：宇田川まや、小川楽生、柴原佳範、鈴木一生、諸藤勇太、山本愛",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- For Alan and Keith, Hokuto Art Program ed.1, Nakamura Keith Haring Collection, Yamanashi, 2021-2022",
        ],
        ps_jp: [
          "- 「脇田玲 −アランとキースのために」 (Hokuto Art Program ed.1), 中村キース・ヘリング美術館, 山梨, 2021-2022",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  postoperative: {
    title: {
      title: "Postoperative",
      keys: ["360-degree Dome Video"],
      span: "2021",
      bg_src: "./img/work-inner/postoperative/dome_0.jpg",
    },
    intro_en: [
      "After suffering from a malignant tumor in 2014, the artist, Akira Wakita, has been taking tomographic images (CT scans) of his abdomen on a regular basis. This film is a three-dimensional reconstruction of the CT images taken immediately after the surgery and made into a three-minute domed video. As if to visualize his anxiety about recurrence or metastasis, the shape of the body gradually transforms into a demonic architecture.",
    ],
    intro_jp: [
      "2014年に悪性腫瘍を患った私は定期的に腹部の断層映像（CTスキャン）を撮り溜めてきました。本作は手術直後のCT画像を三次元再構成し、3分間のドーム型映像にしたものです。再発や転移への不安を可視化するかのように、身体の形状は徐々に悪魔的な建築物へと変化していきます。",
    ],
    imgs: [
      {
        src: "./img/work-inner/postoperative/dome_4.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      {
        src: "./img/work-inner/postoperative/dome_0.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      { src: "./img/work-inner/postoperative/dome_1.jpg" },
      { src: "./img/work-inner/postoperative/dome_2.jpg" },
      { src: "./img/work-inner/postoperative/dome_3.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Sound : Hananosuke Takimoto",
          "Technical Support : Astrodesign",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "サウンド：瀧本花乃介",
          "テクニカルサポート：アストロデザイン",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- MADD.screening (a special event of SIGGRAPH ASIA 2021 Art Gallery), KonicaMinolta Planetaria Tokyo, 2021",
        ],
        ps_jp: [
          "- MADD.screening (a special event of SIGGRAPH ASIA 2021 Art Gallery), コニカミノルタ プラネタリア東京, 2021",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  holiness2: {
    title: {
      title: "Holiness (AV version)",
      keys: ["3ch Audio Visual Installation"],
      span: "2021",
      bg_src: "./img/work-inner/holiness2/holiness_2_1.jpg",
    },
    intro_en: [
      "This is an ongoing project that aims to collect and reconstruct all the patterns of light in architecture around the world that evokes the holiness.",
      "I hypothesized that humans do not perceive holiness in the style of religious architecture or in God as a symbol, but in the gradient of patterns of light formed by reflection, refraction, and the caustics produced as an accumulation of these patterns.",
      'Sound was added to this work, and the study of "holiness" as an auditory experience was also initiated.',
    ],
    intro_jp: [
      "本作は「神聖さ」を感じさせる世界中の建築の全ての光のパターンの収集と再構築を目指して進めらている現在進行形のプロジェクトです。",
      "人間は、宗教建築の様式や記号としての神に神聖さを感じ取るのではなく、反射や屈折、それらの集積として生まれるコースティクスが形成する光のパターンの勾配に神聖さを感じるのではなかろうか、という仮説を私は立てました。",
      "本作では新たにサウンドを付与し、聴覚的体験としての「神聖さ」の検討も開始しました。",
    ],
    imgs: [
      {
        src: "./img/work-inner/holiness2/holiness_2_1.jpg",
        caption: "Photo by Tomohiro Nakaya / xorium",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Sound Designer : Hananosuke Takimoto",
          "Tool Developer : Yuki Mizuno",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "サウンド：瀧本花乃介",
          "ツール開発：水野雄基",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Media Ambition Tokyo, Tokyo, 2021"],
        ps_jp: ["- Media Ambition Tokyo, 東京シティビュー, 2021"],
      },
    ],
  },

  //-------------------------------------------------------------------
  2020: {
    title: {
      title: "2020",
      keys: ["Installation", "8K Movie + 4K Realtime Software"],
      span: "2020",
      bg_src: "./img/work-inner/2020/2020_2.png",
    },
    intro_en: [
      "2020 was the year of upheaval.",
      "The COVID-19 infection explosion, the postponement of the Tokyo Olympics, and the various divisions and conflicts that arose as a result.",
      'I thought it would be possible to describe them from the perspective of "reaction and diffusion".',
      "A huge reaction, reminiscent of Neo-Tokyo in AKIRA, diffused across the entire screen of the 8K monitor.",
      "As you watch the energy being transmitted, gradually pulling back the camera, various landscapes emerge.",
      "There are thoughts and phenomena of various people, and this country and this planet are moving. I tried to depict this from a flat standpoint.",
      "A small black monitor was placed some distance away, and I drew a red dot on it, which was an 8K scene scaled down to one pixel.",
      'On the dot, I wrote "We are here".',
    ],
    intro_jp: [
      "2020年は激動の一年でした。",
      "COVID-19の感染爆発、東京オリンピックの延期、それによって生まれた様々な分断と対立。",
      "「反応と拡散」の数理モデルからこのような社会現象の記述を試みました。",
      "漫画「AKIRA」のネオ東京を思わせる巨大な反応、それが8Kモニターの画面全体に拡散していきます。",
      "そのエネルギーが伝わっていく様を、徐々にカメラを引きながら見ていくと、様々な風景が浮かび上がります。",
      "様々な人の思いがあり、現象があり、この国や、この惑星が動いている。それをフラットな立場で描こうと思いました。",
      "少し離れたところに真っ黒な小さなモニターが置いてあり、8Kのシーンを1ピクセルに縮小した赤い点を描きました。",
      "その点には「we are here」と書いてあります。",
      "　",
    ],
    videos: ["https://www.youtube.com/embed/YFtu78qaNQk"],
    imgs: [
      { src: "./img/work-inner/2020/2020_1.png" },
      { src: "./img/work-inner/2020/2020_3.png" },
      { src: "./img/work-inner/2020/2020_1.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Technical Support : Astro Design",
          "Sound : Hananosuke Takimoto",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "テクニカルサポート：アストロデザイン",
          "サウンド：瀧本花乃介",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- HOKUTO ART PROGRAM ed.0, Kiyoharu Art Colony, Yamanashi, 2020",
        ],
        ps_jp: ["- HOKUTO ART PROGRAM ed.0, 清春芸術村, 山梨, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  triplet: {
    title: {
      title: "Triplet",
      keys: ["Land Art", "8K / Visual Audio Installation"],
      span: "2020",
      bg_src: "./img/work-inner/triplet/triplet_back.jpg",
    },
    intro_en: [
      "Focusing on the unit of genetic code called Triplet in biology, this project attempts to expand the concept of this code to include cities, organisms, music, images, and social phenomena.",
      "Using Chichibugahama beach in Mitoyo City, Kagawa Prefecture as a site, a 10-meter screen was set up in the sea, and 8K video and sound were output from the beach to the sea.",
      "The rising and falling tides, the underwater topography exposed by the tides, and natural elements such as the setting sun, clouds, and wind. By obscuring the boundary between these elements and the visual audio installation, I challenged myself to create an installation that would allow viewers to feel the existence of a language for describing phenomena common to both natural and artificial objects.",
    ],
    intro_jp: [
      "生物学におけるTripletと呼ばれる遺伝子暗号の単位に着目し、都市、生物、音楽、映像、社会現象などを対象に、この暗号概念の拡張を試みるプロジェクト。",
      "香川県三豊市の父母ヶ浜をサイトとして、海中に10メートルのスクリーンを設置し、砂浜から海に向けて8K映像とサウンドをアウトプットしている。",
      "潮の満ち引き、その際に露わになる海中の地形、そして夕陽、雲、風といった自然の要素。これらとヴィジュアルオーディオインスタレーションの境界を不明瞭にすることで、自然物と人工物に共通する現象記述言語の存在を感じられるようなインスタレーションに挑戦した。",
    ],
    imgs: [
      { src: "./img/work-inner/triplet/triplet_05.jpg" },
      { src: "./img/work-inner/triplet/triplet_04.jpg" },
      { src: "./img/work-inner/triplet/triplet_01.jpg" },
      { src: "./img/work-inner/triplet/triplet_02.jpg" },
      { src: "./img/work-inner/triplet/triplet_03.jpg" },
      { src: "./img/work-inner/triplet/triplet_06.jpg" },
    ],
    options: [
      {
        title_en: "Artist",
        title_jp: "アーティスト",
        ps_en: ["Image : Akira Wakita", "Sound : Tetsuya Komuro"],
        ps_jp: ["映像：脇田玲", "音楽：小室哲哉"],
      },
      {
        title_en: "Technical Support",
        title_jp: "制作協力",
        ps_en: [
          "8K Technical Support : Astro Design",
          "Civil Engineering : Sone Doboku Kensetsu",
        ],
        ps_jp: [
          "8K映像：アストロデザイン 株式会社",
          "技術：株式会社 曽根土木建設",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Chichibugahama Art Festival, Kagawa, 2020"],
        ps_jp: ["- 父母ヶ浜芸術祭, 香川, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  async: {
    title: {
      title: "ASYNC LAB.",
      keys: ["Installation"],
      span: "2020",
      bg_src: "./img/work/async_thumb.jpg",
    },
    intro_en: [],
    intro_jp: [
      "つくる都市の価値は場所を共有することにあった。時間と空間が同期した活動を前提とすることで、多様な価値を生み出す場所がこれまでの都市であった。",
      "だとすれば、物理的な空間と時間を共有しないかたちでの、非同期のアクティビティを模索することで、つくらない都市のモードやマナーを指し示すことができないだろうか。",
      "ASYNC LAB.はこのような仮説のもとに、建築家の吉村靖孝とアーティストの脇田玲によって実施されるコラボレーション・プロジェクトである。",
      "kudan house の一室に二人の研究室を同居させる。二人は決して出会ってはならないというルールの元、新たな都市のビジョンの生成を目指して非同期な対話を続ける。",
      "　",
    ],
    videos: [
      "https://www.youtube.com/embed/l2YHjRvjI6k",
      "https://www.youtube.com/embed/j4-pjNhKv_g",
    ],
    imgs: [
      { src: "./img/work-inner/async/async_02.jpg" },
      { src: "./img/work-inner/async/async_03.jpg" },
      { src: "./img/work-inner/async/async_04.jpg" },
      { src: "./img/work-inner/async/async_05.jpg" },
      { src: "./img/work-inner/async/async_01.jpg" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Unbuilt Development, kudan house, Tokyo, 2020"],
        ps_jp: ["- つくらない都市計画, kudan house, 東京,2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  hidden: {
    title: {
      title: "Hidden Superb View",
      keys: ["4K Realtime Simulation", "5G Network / Edge Computing"],
      span: "2020",
      bg_src: "./img/work-inner/hidden/hidden_back.jpg",
    },
    intro_en: [
      'The theme of this work is "the spectacular scenery hidden in our daily lives". It is a "picture of a landscape of air" that tries to capture the invisible elements of nature such as velocity, density, and heat. Imagine that in the ordinary landscape in front of you, there is actually a tremendous and shiver-inducing view. If spectacular scenery is omnipresent everywhere, what exactly does it mean to have beautiful scenery visible to the naked eye?',
      "The video for this work is generated by a large, cloud-based GPU server and sent to the venue via a 5G connection. Interactive viewing of artworks using scientific simulations will become increasingly common in the future. The way art is created, the viewing experience, and the archiving methods will change drastically with the advancement of technology.",
    ],
    intro_jp: [
      "本作は「我々の日常生活に隠された絶景」をテーマにしています。速度、密度、熱といった目に見えない自然界の要素を捉えようとした「空気の風景画」です。目の前の何気ない風景の中に、実はとてつもない絶景や戦慄する風景が広がっていることを想像してみてください。もし、絶景がどこにでも遍在するとすれば、肉眼で見える美しい景色とは一体何を意味するのでしょうか？",
      "本作の映像は、クラウド化された大規模なGPUサーバで生成され、5G回線を通して会場に送られています。科学シミュレーションを用いた作品のインタラクティブな鑑賞は今後ますます一般化していくことでしょう。技術の進歩により、アートの作り方、鑑賞体験、アーカイブ手法は大きく変化していくのです。",
    ],
    imgs: [
      { src: "./img/work-inner/hidden/hidden_03.jpg" },
      { src: "./img/work-inner/hidden/hidden_01.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Technical Support : Astro Design",
          "Network Support : Softbank",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "映像技術協力：アストロデザイン",
          "通信技術協力：ソフトバンク",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Hidden Superb View powered by Softbank 5G, Mixalive TOKYO, Tokyo, 2020",
        ],
        ps_jp: [
          "- Hidden Superb View powered by Softbank 5G, Mixalive TOKYO, 池袋, 2020",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  holiness: {
    title: {
      title: "Holiness",
      keys: ["Installation"],
      span: "2020",
      bg_src: "./img/work-inner/holiness/holiness_back.jpg",
    },
    intro_en: [
      "This is an ongoing project that aims to collect and reconstruct all the patterns of light in architecture around the world that evokes the holiness.",
      "I hypothesized that humans do not perceive holiness in the style of religious architecture or in God as a symbol, but in the gradient of patterns of light formed by reflection, refraction, and the caustics produced as an accumulation of these patterns.",
    ],
    intro_jp: [
      "本作は「神聖さ」を感じさせる世界中の建築の全ての光のパターンの収集と再構築を目指して進めらている現在進行形のプロジェクト。",
      "人間は、宗教建築の様式や記号としての神に神聖さを感じ取るのではなく、反射や屈折、それらの集積として生まれるコースティクスが形成する光のパターンの勾配に神聖さを感じるのではなかろうか、という仮説を立てた。",
    ],
    imgs: [
      { src: "./img/work-inner/holiness/holiness_01.jpg" },
      { src: "./img/work-inner/holiness/holiness_02.png" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Tool Maker : Yuki Mizuno"],
        ps_jp: ["アーティスト：脇田玲", "ツール開発：水野雄基"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Photons - Akira Wakita Solo Exhibition, Museum of the Light in Kiyoharu Art Colony, Yamanashi, 2020",
        ],
        ps_jp: ["- Photons - 脇田玲 (個展), 清春芸術村 光の美術館, 山梨, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  gem: {
    title: {
      title: "Gem",
      keys: ["Installation", "with 6ch FullHD Videos"],
      span: "2020",
      bg_src: "./img/work-inner/gem/gem_back.jpg",
    },
    intro_en: [
      /*
      'A gemstone is a device that produces a pattern of light. People have manufactured, bought and sold, and used this device regularly. This could be called the first visual culture for mankind. If so, it is possible that images(or movies) evolved in a completely different direction than they do today. The random cables extending from the six monitors in this work are a metaphor for the phylogenetic tree of visual evolution.',
      */
    ],
    intro_jp: [
      /*
      '宝石は光のパターンを生成する装置である。人はこの装置を製造し、売買し、常用してきた。これは人類にとって最初の映像文化といってもよいだろう。だとすれば、現在とは全く異なる方向に映像が進化した可能性もある。本作の6つのモニターから伸びる無造作なケーブルは、映像の進化の系統樹のメタファである。',
      */
    ],
    imgs: [
      { src: "./img/work-inner/gem/gem_01.jpg" },
      { src: "./img/work-inner/gem/gem_02.png" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Tool Maker : Yuki Mizuno"],
        ps_jp: ["アーティスト：脇田玲", "ツール開発：水野雄基"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Photons - Akira Wakita Solo Exhibition, Museum of the Light in Kiyoharu Art Colony, Yamanashi, 2020",
        ],
        ps_jp: ["- Photons - 脇田玲 (個展), 清春芸術村 光の美術館, 山梨, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  cognition: {
    title: {
      title: "cognition",
      keys: ["Realtime Software"],
      span: "2020",
      bg_src: "./img/work/xray_thumb.jpg",
    },
    intro_en: [],
    intro_jp: [],
    imgs: [
      { src: "./img/work-inner/cognition/cognition_01.jpg" },
      { src: "./img/work-inner/cognition/cognition_02.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Tool Maker : Yuki Mizuno"],
        ps_jp: ["アーティスト：脇田玲", "ツール開発：水野雄基"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Photons - Akira Wakita Solo Exhibition, Museum of the Light in Kiyoharu Art Colony, Yamanashi, 2020",
        ],
        ps_jp: ["- Photons - 脇田玲 (個展), 清春芸術村 光の美術館, 山梨, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  science: {
    title: {
      title: "Science",
      keys: ["Installation"],
      span: "2020",
      bg_src: "./img/work/science_thumb.jpg",
    },
    intro_en: [],
    intro_jp: [],
    imgs: [
      { src: "./img/work-inner/science/science_01.jpg" },
      { src: "./img/work-inner/science/science_03.jpg" },
      { src: "./img/work-inner/science/science_02.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita"],
        ps_jp: ["アーティスト：脇田玲"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Photons - Akira Wakita Solo Exhibition, Museum of the Light in Kiyoharu Art Colony, Yamanashi, 2020",
        ],
        ps_jp: ["- Photons - 脇田玲 (個展), 清春芸術村 光の美術館, 山梨, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  religion: {
    title: {
      title: "Religion",
      keys: ["Installation"],
      span: "2020",
      bg_src: "./img/work-inner/religion/religion_back.jpg",
    },
    intro_en: [],
    intro_jp: [],
    imgs: [
      { src: "./img/work-inner/religion/religion_01.jpg" },
      { src: "./img/work-inner/religion/religion_02.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita"],
        ps_jp: ["アーティスト：脇田玲"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Photons - Akira Wakita Solo Exhibition, Museum of the Light in Kiyoharu Art Colony, Yamanashi, 2020",
        ],
        ps_jp: ["- Photons - 脇田玲 (個展), 清春芸術村 光の美術館, 山梨, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  raydrawing: {
    title: {
      title: "ray drawing",
      keys: ["FullHD Movie"],
      span: "2020",
      bg_src: "./img/work/raydraw_thumb.jpg",
    },
    intro_en: [],
    intro_jp: [],
    imgs: [
      { src: "./img/work-inner/raydrawing/raydrawing_01.jpg" },
      { src: "./img/work-inner/raydrawing/raydrawing_02.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Tool Maker : Yuki Mizuno"],
        ps_jp: ["アーティスト：脇田玲", "ツール開発：水野雄基"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Photons - Akira Wakita Solo Exhibition, Museum of the Light in Kiyoharu Art Colony, Yamanashi, 2020",
        ],
        ps_jp: ["- Photons - 脇田玲 (個展), 清春芸術村 光の美術館, 山梨, 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  momentMAT: {
    title: {
      title: "Moment - horizontal version",
      keys: ["Installation"],
      span: "2020",
      bg_src: "./img/work-inner/momentMAT/momentMAT_back.jpg",
    },
    intro_en: [
      "Is a moment the smallest sense of time that our bodies can perceive? Is a moment discrete? How can one moment and the next moment be connected? Is it possible to consider the moment as continuous or to consider the superposition? What kind of structure and dimension does our consciousness bring up the momentary sensation? This sculpture was made considering such things.",
      'Originally, this work was created in collaboration with Akira Wakita, Hakuten and Tokyo Midtown for the design event "Tokyo Midtown DESIGN TOUCH" held in Tokyo Midtown Roppongi in 2019. The design team measured the wind at a certain moment, imported it to a computer, and output it as a sculpture. The aim was to materialize the intangible concept of a moment as a tangible object in front of the eyes, so that the viewer could face the meaning of that time. This work is reconstructed as a surrealistic installation.',
    ],
    intro_jp: [
      "一瞬とは我々の身体が知覚しうる最小の時間感覚なのでしょうか。一瞬とは離散的なものなのでしょうか。一瞬と一瞬はどのように接続しうるのでしょうか。一瞬を連続的なものとして捉えたり、その重ね合わせを検討することは可能でしょうか。一瞬という感覚を立ち上げる我々の意識はどのような構造や次元を持っているのでしょうか。本作はそのようなことを考えながら作った彫刻作品です。",
      "もともと本作は、2019年に東京ミッドタウン六本木で開催されたデザインイベント「Tokyo Midtown DESIGN TOUCH」のために、脇田玲、博展、東京ミッドタウンのコラボレーションにより制作されました。ある瞬間の風の様子を計測し、コンピュータに取り込み、彫刻としてアウトプットしたものです。一瞬というインタンジブルな概念を有形物として目の前に物質化することで、鑑賞者にその時間のもつ意味に改めて向き合ってもらうことを目的としました。horizontal versionではシュールレアリズム的なインスタレーションとして本作を再構築しています。",
    ],
    imgs: [
      { src: "./img/work-inner/momentMAT/momentMAT_02.jpg" },
      { src: "./img/work-inner/momentMAT/momentMAT_01.jpg" },
      { src: "./img/work-inner/momentMAT/momentMAT_03.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Production : HAKUTEN ( Yosuke Nakazato / Ryukei Aoyagi / Otake Konatsu / Masayuki Sawada / Kana Hashimoto / Tohru Kawakami ) ",
          "Research : Keio Univeristy SFC Akira Wakita Laboratory ( Ken Ishii / Koichi Nakamura )",
          'Organized by "TOKYO MIDTOWN ( Nami Fujitani ) ',
          "Exhibition : Tokyo Midtown DESIGN TOUCH 2019",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "制作協力：博展（中里洋介、青栁龍佳、大武小夏、澤田雅之、橋本果菜、川上徹）",
          "リサーチ：慶應義塾大学SFC 脇田研究室（石井健 、中村光一）",
          "主催：東京ミッドタウン（藤谷菜未）",
          "イベント：Tokyo Midtown DESIGN TOUCH 2019  ",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Media Ambition Tokyo, 2020",
          "- Gradation Daikanyama, Tokyo, 2019",
        ],
        ps_jp: [
          "- Media Ambition Tokyo, Shibuya QWS, 2020",
          "- Garadation代官山, Tenoha Daikanyama, 2019",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  octagon: {
    title: {
      title: "Under The Sea",
      keys: ["Installation", "with led monitors, lasers and 5.1ch Sound"],
      span: "2019",
      bg_src: "./img/work/octagon_thumb.jpg",
    },
    intro_en: [
      "The underground space of Roppongi is used as a deep sea, an installation that calls upon the memory of the Devonian period, which lies deep within our DNA, by reversing the process of evolution by returning humanity from land to sea. The goal was to create an overwhelming spatial experience in which the visualization of natural phenomena projected on large LED displays, spatial direction using ten lasers, and sound effects that evoke the deep sea are synchronized at a high level.",
    ],
    intro_jp: [
      "六本木の地下空間を深海に見立て、人類を陸から海に戻すことで、進化の過程を逆行し、 我々のDNAの奥深くに眠るデボン紀の記憶に呼びかけるインスタレーション。大型LEDディスプレイに投影される自然現象のビジュアライゼーションと、10台のレーザーを駆使した空間演出、そして深海をイメージしたサウンドが、高レベルでシンクロする圧倒的な空間体験を目指した。",
    ],
    videos: ["https://player.vimeo.com/video/447162630"],
    imgs: [
      { src: "./img/work-inner/octagon/underthesea_01.jpg" },
      { src: "./img/work-inner/octagon/underthesea_02.jpg" },
      { src: "./img/work-inner/octagon/underthesea_03.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Visualization : Akira Wakita",
          "Laser / Lighting : AIBA",
          "Sound Design : Katsuyuki Seto",
        ],
        ps_jp: [
          "ビジュアライゼーション : 脇田玲",
          "レーザー / ライティング : AIBA",
          "サウンドデザイン : 瀬戸勝之",
        ],
      },
      {
        title_en: "",
        title_jp: "",
        ps_en: ["Produced by hiromiyoshii and Avex"],
        ps_jp: ["Produced by hiromiyoshii and Avex"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Roppongi Art Night, SEL Octagon Tokyo, 2019"],
        ps_jp: ["- 六本木アートナイト, SEL Octagon Tokyo, 2019"],
      },
    ],
  },

  //-------------------------------------------------------------------
  insect: {
    title: {
      title: "Ant Colony Optimization",
      keys: ["3ch Realtime Software"],
      span: "2019",
      bg_src: "./img/work/insect_thumb.jpg",
    },
    intro_en: [],
    intro_jp: [
      "蟻に代表される社会性昆虫は群れで行動する。それぞれの個体はシンプルなルールに従って自律的に行動する。結果として、群れ全体に協調した振る舞いが生まれる。1つ目の映像はよく知られたシンプルな群衆シミュレーションで、3つのルール（個体間の衝突を避ける、周りの進行方向に合わせる、群れから離れすぎないようにする）を満たした行動をすることで、協調した振る舞いを実現している。2つ目は捕食行動に着目し、捕食者間にコミュニケーションがない原始的な状態をモデリングした。通信手段がないと協調は生まれない。3つ目は蟻コロニー最適化のシミュレーション。餌を見つけた個体はフェロモンを分泌しながら巣に戻る。フェロモンを見つけた個体はそれに沿って移動し、餌を見つけたら自分もフェロモンを分泌しながら巣に戻る。ただそれだけで餌と巣を結ぶ最適な経路が生まれる。シンプルな通信ルールと鮮やかな最適化。蟻の群れは通信技術が埋め込まれたIoT機器や自動運転のお手本でもあるのだ。",
    ],
    imgs: [
      { src: "./img/work-inner/insect/insect_01.jpg" },
      { src: "./img/work-inner/insect/insect_02.png" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Collaboration : Akira Wakita Laboratory, Keio University SFC.",
        ],
        ps_jp: ["制作協力：慶應義塾大学SFC 脇田玲研究室 "],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Insects: Models for Design, 21_21 DESIGN SIGHT, 2019"],
        ps_jp: ["- 虫展, 21_21 DESIGN SIGHT, 2019"],
      },
    ],
  },

  //-------------------------------------------------------------------
  moment: {
    title: {
      title: "Moment",
      keys: ["Sculpture"],
      span: "2019",
      bg_src: "./img/work-inner/moment/moment_back.jpg",
    },
    intro_en: [],
    intro_jp: [],
    imgs: [
      { src: "./img/work-inner/moment/moment_01.jpg" },
      { src: "./img/work-inner/moment/moment_02.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Concept : Akira Wakita / Nami Fujitani",
          "Planner : Yosuke Nakazato（HAKUTEN）",
          "Designer : Ryukei Aoyagi（HAKUTEN）",
          "Production Management : Otake Konatsu (HAKUTEN ) / Masayuki Sawada (HAKUTEN)/Kana Hashimoto (HAKUTEN)",
          "Construction Management : Tohru Kawakami(HAKUTEN)",
          "Research : Ken Ishii / Koichi Nakamura",
          "Producer/Text : Nami Fujitani",
          "Organized by : TOKYO MIDTOWN",
        ],
        ps_jp: [
          "作家　　　　脇田 玲",
          "コンセプト　脇田 玲 /藤谷 菜未",
          "プランナー　中里 洋介(博展)",
          "デザイナー　青栁 龍佳(博展)",
          "制作管理　　大武 小夏(博展) /澤田 雅之(博展)/橋本 果菜(博展)",
          "施工管理　　川上 徹(博展)",
          "リサーチ　　石井 健 / 中村 光一",
          "プロデューサー・テキスト 藤谷 菜未",
          "主催　　　　東京ミッドタウン",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Tokyo Midtown DESIGN TOUCH 2019"],
        ps_jp: ["- Tokyo Midtown DESIGN TOUCH 2019"],
      },
    ],
  },

  //-------------------------------------------------------------------
  river: {
    title: {
      title: "River",
      keys: ["Digital Print"],
      span: "2019",
      bg_src: "./img/work/river_thumb.jpg",
    },
    intro_en: [
      "I generated a huge image using the motif of the flow of the Shibuya River and pasted it on the Shibuya River Underground Structure. I created this image by thinking about the flow of energy in the underground plaza, the energy of people passing by, and the flow of the Shibuya River, which cannot be seen.",
    ],
    intro_jp: [
      "渋谷川の流れをモチーフに生成したイメージを渋谷川地下構造体に貼り付けた。地下広場の気の流れ、行き交う人々のエネルギー、そして見ることのできない渋谷川の流れに思いを馳せて制作した。",
    ],
    imgs: [
      { src: "./img/work-inner/river/river_1.png" },
      { src: "./img/work-inner/river/river_2.png" },
      { src: "./img/work-inner/river/river_3.png" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Hello Neo Shibuya, Shibuya station east exit underground square, Tokyo, 2019",
        ],
        ps_jp: ["- Hello Neo Shibuya, 渋谷駅東口地下広場, 2019"],
      },
    ],
  },

  //-------------------------------------------------------------------
  count: {
    title: {
      title: "Count The Number of Photons",
      keys: ["4ch Visual Installation"],
      span: "2019",
      bg_src: "./img/work-inner/count/count_back.jpg",
    },
    intro_en: [
      "These images depict particles of light entering the eye. The four monitors are connected to the PC as a metaphor for the brain through cables stretched like the optic nerves.",
      "A particle of light is called a photon. Mass is zero, size and charge are zero. Even in a dark room similar to a movie theater, 400 billion photons fall on your fingertips in just one second. Under sunlight, the number is 100,000 times. Our “seeing” is realized by the vast number of photons colliding with the ground, floors, walls, trees and people, and they continue to reflect and refract an unimaginable number of times. After 150 million kilometers of travel from the sun, new photons arrive on the ground one after another and continue to interact. Our bodies are immersed in such a space. Part of it reaches the eyeball, hits the retina through the lens, and the collision energy is converted into electrical energy and transmitted to the optic nerve. Imagine the number of photons flying in front of you.",
    ],
    intro_jp: [
      "これらの映像は眼球に入り込む光の粒子を描いたものです。モニターは、視神経のように張り巡らされたケーブルを通して、脳のメタファであるPCに接続されます。",
      "光の粒子のことを光子（こうし、フォトン）を言います。質量はゼロ、大きさも電荷もゼロです。映画館と同程度の暗い部屋でさえ、あなたの指先にはたった1秒間に4000億個のフォトンが降り注いでいます。日光の下ではその数は10万倍になります。膨大な数のフォトンが大地、床、壁、樹木、人にぶつかり、膨大な数の反射をし続けることで、我々の「見る」は成立しているのです。太陽から1億5000万キロの旅路を経て、次々に新たなフォトンが地上に到着し、インタラクションを続けていく。そのような空間に我々の身体は浸されています。その一部が眼球に到着し、レンズの役割を果たす水晶体を通して、網膜に当たり、その衝突エネルギーが電気エネルギーに変換され、視神経を伝達していきます。目の前を飛び交う光子の数を想像してみてください。",
    ],
    imgs: [
      { src: "./img/work-inner/count/count_1.png" },
      {
        src: "./img/work-inner/count/count_back.jpg",
        caption: "Photo by Shunichi Oda",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Tool Developer : Yuki Mizuno"],
        ps_jp: ["アーティスト：脇田玲 ", "ツール開発：水野雄基"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- AnyTokyo, Kudan House, Tokyo, 2019"],
        ps_jp: ["- AnyTokyo, kudan house, 2019"],
      },
    ],
  },

  //-------------------------------------------------------------------
  clair: {
    title: {
      title: "CLAIR DE LUNE",
      keys: ["Audio Visual Installation with 4ch Sound"],
      span: "2020",
      bg_src: "./img/work-inner/clair/clair_back.png",
    },
    intro_en: [
      'In this timeless collaboration between Isao Tomita and Akira Wakita on the theme of "Moonlight", the majestic 4-channel synthesizer sound and delicate simulated images create a fantastical 5 minutes and 50 seconds of time and space.',
      "The light born in the sun arrives at the moon a few minutes later and is reflected on its surface, reaching our eyeballs. When we look at the moon, we are looking at this magnificent phenomenon. This film tells us that the things we take for granted around us are actually threatening.",
    ],
    intro_jp: [
      "CLAIR DE LUNE - 月の光",
      "「月の光」を主題として、冨田勲と脇田玲の時代を超えたコラボレーションが実現。4chの荘厳なシンセサイザーサウンドと繊細なシミレーション映像が、幻想的な5分50秒の時空間を作り上げている。",
      "太陽で生まれた光は、数分後には月に到着し、その表面で反射し、我々の眼球に届いている。月を見ている時、我々はこの壮大な現象を見ている。身の回りの当たり前のことは実は脅威的なことでもある。",
    ],
    imgs: [
      { src: "./img/work-inner/clair/clair_01.png" },
      { src: "./img/work-inner/clair/clair_02.png" },
      { src: "./img/work-inner/clair/clair_03.jpg" },
      { src: "./img/work-inner/clair/clair_04.jpg" },
    ],
    options: [
      {
        title_en: "ARTIST",
        title_jp: "アーティスト",
        ps_en: [
          "Visualization : Akira Wakita",
          "Music / Sound Design : Isao Tomita",
        ],

        ps_jp: [
          "ビジュアライゼーション：脇田玲 ",
          "音楽／サウンドデザイン：冨田勲 ",
        ],
      },
      {
        title_en: "",
        title_jp: "",
        ps_en: [
          "Software Developer : Yuki Mizuno, Souto Manabe",
          "Supervisor : Rie Seno, Nippon Columbia Co.,LTD",
        ],

        ps_jp: [
          "映像：ツール開発 水野雄基・パーゴラ映像 眞鍋創人",
          "監修：妹尾理恵・Nippon Columbia Co.,LTD",
        ],
      },
      {
        title_en: "GLOBAL MUSEUM",
        title_jp: "GLOBAL MUSEUM",
        ps_en: [
          "Creative Director : Jun Nishida (Drill-inc.)",
          "Technical Producer :　Keisaku Ibuki (Drill-inc.)",
          "Producer : Akira Oishi (Nomadic TOKYO)",
          "Artist Curator : Shuichiro Iwanami / Junichi Takekawa (MUTEK.JP)",
        ],

        ps_jp: [
          "クリエイティブ・ディレクター：西田　淳（Drill-inc.）",
          "テクニカル・プロデューサー　伊吹圭策（Drill-inc.）",
          "プロデューサー　大石　暉（Nomadic TOKYO） ",
          "アーティスト・キュレーター　岩波秀一郎 / 竹川潤一（MUTEK.JP）",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Global Ring Theater, Ikebukuro Nishiguchi Park, 2019 - 2020",
        ],
        ps_jp: ["- Global Ring Theater, 池袋西口公園野外劇場, 2019 - 2020"],
      },
    ],
  },

  //-------------------------------------------------------------------
  dismantle: {
    title: {
      title: "Dismantling Awe",
      keys: ["Installation"],
      span: "2018",
      bg_src: "./img/work-inner/dismantle/dismantle_back.jpg",
    },
    intro_en: [
      "This work is an installation aimed at witnessing a place where awe is dismantled.",
      "In the cave of the mining site, I made a sculpture using 4 huge super organza with a height of 13 meters and a width of 8 meters. A real-time fluid simulation using 8K projector is projected on its surface. Its appearance seems to be a gigantic creature that extends the tentacles. People are surprised, afraid, and stand up to its huge and irregular shapes.",
      'However, after a few minutes, the attitude of the viewer changes by artist explaining "This work is only visualizing the wind". "The pattern projected on the cloth is a vector field of wind blowing on the spot, and this work is visualizing the wind itself with cloth movement and 8K video." Such a scientific explanation is made by the artist. Then, people understand it as a physical phenomenon, and conversion from the sense of awe to the impression "indeed" "interesting" “beautiful” begins.',
      'But there is no sense of irregular feeling that people first felt, or feeling of awe. It was dismantled by scientific explanation. The lump of sensation with infinite possibilities people first sensed is scattered and can not be regained again. When we face unknown or irregular things, we fear them. However, once we feel "understood" by scientific explanation, they can be caught only as a scientific symbol.',
      "As a technical aspect, this work aims to realize CG animation in physical space. The wind blowing on the spot is physically animated using the shape of the fluid cloth and the simulation image projected on it. By acquiring the shape of the organza with cameras and analyzing its curved surface shape in a trihedral view, numerical analysis is performed, and a vector field is generated inversely. In this calculation process, data of the micro controller for the electric fan is also used. The vector field generated here is projected to a 4-layer cloth through an 8K projector, and a vector field with immersive feeling with volume is generated.",
    ],
    intro_jp: [
      "Dismantling Awe - 畏怖の解体",
      "人にとって畏怖の感覚が如何に大切であるか、また科学が如何にその感覚を解体してきたか。その解体の様子に立ち会うことを目的としたインスタレーション。",
      "大谷石の洞窟内に、高さ13メートル、幅8メートルのスーパーオーガンジーを4層重ねることで巨大な彫刻を作り出した。その表皮には8Kの高輝度プロジェクタを用いたリアルタイムの流体シミュレーションが投影されている。風に煽らて揺らめくその姿はあたかも触手を伸ばす巨大生物のようだ。その巨大さと異形さに人々は戸惑い、恐れ、立ちすくむ。",
      "しかし、数分も立たないうちに、作者が「この作品は風を可視化しているにすぎない」という説明をすることで、鑑賞者の態度は変化する。布に投影されている模様はその場で吹いている風のベクトル場であること、本作は風そのものを布の動きと8K映像で可視化した作品であること、そのような科学的な側面からの説明をする。すると、人々には理解が生まれ「なるほど」「面白い」「美しい」という感覚への変換が始まる。",
      "しかし、最初に感じた形容し難い異形の感や畏怖の感覚はそこには残らない。それは科学的な説明によって解体されてしまった。最初に感じ取った無限の可能性をもった感覚の塊は霧散し、二度と取り戻すことはできない。我々は未知のものと向き合った時に、それを恐れる。しかし、科学的な説明によって一旦「解った」と感じてしまうと、以後はその現象を科学的な記号としてしか捉えられなってしまうのではかなろうか。",
      "技術的側面としては、本作では、物理空間でのCG的アニメーションの実現を目指している。その場に吹いている風を、流体的な布の形とそこに投影されるシミュレーション映像の二つを用いて物理的にアニメーションしているのだ。オーガンジーの形状をカメラで取得しつづけ、三面図的にその曲面形状を分析することで、その場の風の流れを数値解析し、ベクトル場を逆生成している。この計算過程には扇風機を制御するマイコンのデータも合わせて用いられる。ここで生成されたベクトル場は8Kプロジェクタを通して4階層の布にプロジェクションされ、ボリュームをもった没入間のある風のベクトル場が生成される。",
    ],
    videos: ["https://player.vimeo.com/video/320690117"],
    imgs: [
      {
        src: "./img/work-inner/dismantle/dismantle_01.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      {
        src: "./img/work-inner/dismantle/dismantle_02.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
      {
        src: "./img/work-inner/dismantle/dismantle_03.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "8K Technical Director : Jin Sato",
          "Sound Designer : Hananosuke Takimoto",
          "Special Effect Director : Hiroyuki Ogata",
        ],
        ps_jp: [
          "アーティスト：脇田玲 ",
          "8Kディレクター：佐藤仁",
          "サウンドデザイナー：瀧本花乃介",
          "特殊効果：緒方宏幸",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- VENT, Utsunomiya, 2018"],
        ps_jp: ["- VENT, 大谷資料館, 2018"],
      },
    ],
  },

  //-------------------------------------------------------------------
  scenery: {
    title: {
      title: "scenery",
      keys: ["Installation"],
      span: "2018",
      bg_src: "./img/work-inner/scenery/scenery_bg.jpg",
    },
    intro_en: [
      "What kind of everyday scenery will the future human beings see?",
    ],
    intro_jp: ["未来の人間はどのような日常風景を見ることになるのだろうか。"],
    videos: ["https://player.vimeo.com/video/322604452"],
    imgs: [
      { src: "./img/work-inner/scenery/scenery_kiyoharu_01.jpg" },
      { src: "./img/work-inner/scenery/scenery_kiyoharu_02.jpg" },
      { src: "./img/work-inner/scenery/scenery_kiyoharu_03.jpg" },
      { src: "./img/work-inner/scenery/scenery_kiyoharu_4.jpg" },
      {
        src: "./img/work-inner/scenery/scenery_kiyoharu_5.jpg",
        caption: "Photo by Ken Ishii",
      },
      //{src: './img/work-inner/scenery/scenery_01.jpg', caption: 'Photo by Takahiro Tsushima'},
      //{src: './img/work-inner/scenery/scenery_02.jpg', caption: 'Photo by Takahiro Tsushima'},
      //{src: './img/work-inner/scenery/scenery_03.jpg', caption: 'Photo by Takahiro Tsushima'},
      { src: "./img/work-inner/scenery/scenery_04.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Visualization / Concept : Akira Wakita",
          "Sound Design : Hananosuke Takimoto",
          "Technical Direction : Akira Taniguchi",
        ],
        ps_jp: [
          "ヴィジュアライゼーション / コンセプト：脇田玲 ",
          "サウンドデザイン：瀧本花乃介",
          "テクニカルディレクション：谷口旭",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- scenery - Akira Wakita Solo Exhibition, Rouault Chapel in Kiyoharu Art Colony, Yamanashi, 2018",
          "- ARIGATO SAKURAGAOKA produced by Art Photo Tokyo, Tokyo, 2018",
          "- MUTEK_JP, Tokyo, 2018",
        ],
        ps_jp: [
          "- 『scenery』 ─ 脇田玲 個展, 清春芸術村 ルオー礼拝堂, 2018",
          "- ARIGATO SAKURAGAOKA producedy by Art Photo Tokyo, 渋谷, 2018",
          "- MUTEK, 日本科学未来館, 2018",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  xhiasma: {
    title: {
      title: "XHIASMA",
      keys: ["Dance Performance"],
      span: "2018",
      bg_src: "./img/work-inner/xhiasma/xhiasma_bg.jpg",
    },
    intro_en: [
      "Xhiasma, an experimental performance by fusion of fashion, dance and laser images. The work is collaboration between Tamae Hirokawa, Ema Yuasa and Akira Wakita.",
    ],
    intro_jp: [
      "廣川玉枝、湯浅永麻、脇田玲のコラボレーションとして一夜限りで実現したパフォーマンス。ファッション、レーザー映像、ダンスの融合による新しい舞台表現を目指した。",
    ],
    videos: ["https://player.vimeo.com/video/284910004"],
    imgs: [
      { src: "./img/work-inner/xhiasma/xhiasma_1.jpg" },
      { src: "./img/work-inner/xhiasma/xhiasma_2.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Concept: Tamae Hirokawa, Akira Wakita",
          "Choreography : Ema Yuasa",
          "Costume : Tamae Hirokawa",
          "Space Design : Akira Wakita",
          "Space Design Assistance : Scott Allen",
          "Sound : Hananosuke Takimoto",
          "Lighting : Akihiro Tashiro",
          "Sound Effects : Raku Nakahara",
          "Graphics Design : Takeshi Fukui",
          "Production Cooperation : Dance New Air",
          "Sponcer : Tokyo Midtown",
        ],
        ps_jp: [
          "企画・演出・コンセプト：廣川玉枝（SOMA DESIGN）、脇田玲 ",
          "振付・出演：Ema Yuasa",
          "衣裳：廣川玉枝（SOMA DESIGN）",
          "空間：脇田 玲",
          "空間補佐：Scott Allen",
          "音楽：瀧本花乃介",
          "照明：田代弘明（株式会社DOTWORKS）",
          "音響：中原楽（LUFTZUG）",
          "デザイン製作：福井武（SOMA DESIGN）",
          "制作協力：Dance New Air（一般社団法人Dance Nippon Associates）",
          "主催：東京ミッドタウン",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- Roppongi Art Night, Tokyo, 2018"],
        ps_jp: ["- 六本木アートナイト, 東京ミッドタウン, 2018"],
      },
    ],
  },

  //-------------------------------------------------------------------
  cosmetics: {
    title: {
      title: "Scalar Field of Cosmetics",
      keys: ["Mixed Media"],
      span: "2018",
      bg_src: "./img/work/cosmetics_1.jpg",
    },
    intro_en: [
      'This work is an installation that was offered at a new work presentation of Kanebo cosmetics "LUNASOL". The image projected on the cloth simulates the moment when the powder put on the brush reaches the skin.The movement of the brush calculated based on physics, and the state that powder contacting the skin diffuses by air pressure.Those micro-behavior are visualized through thousands of calculations. Although cosmetics are commercialized on highly scientific and aesthetic knowledge, scientific and aesthetic phenomena are occurring even at the moment when we make up makeup.A very advanced color and shadow design language is used in the world of makeup. The method of constructing beautiful shading by overlaying color and texture on many layers was diverted to the structure of the installation as it is. By combining the transmittance and reflection characteristics of the cloth, the fluctuation by the wind, and the diffusion simulation image by numerical fluid dynamics, the artist aimed to space the texture like cosmetics which can not be realized only by CG.',
    ],
    intro_jp: [
      "カネボウ化粧品「LUNASOL」の新作発表会に提供したインスタレーション。布に投影された映像はブラシにのせたパウダーが肌に着く瞬間をシミュレーションしています。物理学に基づいて計算されたブラシの動き、そして肌に接触したパウダーが空気圧によって拡散していく様子。それらを数千回の計算を通してビジュアライズしました。化粧品は高度な科学的かつ美的な知見の上に製品化されますが、私たちが化粧をする瞬間にも科学的かつ美的な現象が起きているのです。メイクの世界では非常に高度な色彩と陰影のデザイン言語が用いられています。何層にも色とテクスチャを重ねることで美しいシェーディングを構築するその方法をそのままインスタレーションの構造に転用しました。布が有する透過率と反射特性、風による揺らぎ、数値流体力学によるパウダーの拡散シミュレーションの映像を組み合わせることで、CGだけでは実現できない化粧品のような質感の空間化を目指しました。",
    ],
    videos: ["https://player.vimeo.com/video/293729127"],
    imgs: [
      { src: "./img/work-inner/cosmetics/cosmetics_2.jpg" },
      { src: "./img/work-inner/cosmetics/cosmetics_1.png" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          '- Kanebo Cosmetics "LUNASOL" 2018 Autumn Collection, Tokyo, 2018',
        ],
        ps_jp: ["- カネボウ化粧品「LUNASOL」2018 AUTUMN COLLECTION, 2018"],
      },
    ],
  },

  //-------------------------------------------------------------------
  nonlinear: {
    title: {
      title: "(Non)Linear",
      keys: ["Full HD Realtime Simulation"],
      span: "2018",
      bg_src: "./img/work/nonlinear_thumb.jpg",
    },
    intro_en: [
      "Attempt to apply “linear” graphic design elements (grid and layout) to fluid behavior which is essentially “nonlinear”. The essential disharmony between them and the moment of harmony that sometimes appears is similar to the relationship between nature and artificiality.",
    ],
    intro_jp: [
      "本質的に非線形である流体の振る舞いに対して、線形なグラフィックデザイン的要素（グリッドやレイアウト）の適用を試みている。両者の本質的な不調和と時に現れる調和の瞬間は自然と人工の関係に似ている。",
    ],
    imgs: [
      { src: "./img/work-inner/nonlinear/nonlinear_1.jpg" },
      {
        src: "./img/work-inner/nonlinear/nonlinear_2.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Takahashi Collection - Face and Abstraction, Kiyoharu Art Colony, 3/18-5/6, 2018.",
          "- Symptom Visualized (Solo Exhibition), Art & Science Gallery Lab AXIOM, 1/20-3/10, 2018.",
        ],
        ps_jp: [
          "- 高橋コレクション - 顔と抽象, 清春芸術村, 3/18-5/6, 2018",
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  activator: {
    title: {
      title: "Activator / Inhibitor",
      keys: ["Full HD Realtime Simulation"],
      span: "2018",
      bg_src: "./img/work/activator_thumb.jpg",
    },
    intro_en: [
      "This work simulates the chemical reaction of two virtual substances. Organic patterns are generated and diffuse while substances that inhibit the reaction(Inhibitors) and substances that activate(Activators) influence each other. It seems to me that this simulation shows how the conflicting consciousness, such as Left Wing and Right Wing, anti-war and war-minded, calm and blind, etc., repeats conflict and dialogue and as a result some kind of public opinion, atmosphere, sometimes disinformation are formed. To what extent is it possible to see macroscopic social phenomena in micro-scientific phenomena ?",
    ],
    intro_jp: [
      "本作では二つの物質の化学反応をシミュレーションしている。反応を抑制する物質（抑制因子）と活性化する物質（活性因子）がお互いに影響を与えながら、有機的なパターンが生成され、拡散していく。保守と改革、反戦と好戦、冷静と盲信など、相反する意識が対立と対話を繰り返しながら、その結果としてある種の世論や雰囲気、時にはデマなどが形成されていく様子を表しているように私には見えるのだ。ミクロな科学現象にマクロな社会現象を見ることはどの程度まで可能だろうか？",
    ],
    imgs: [
      { src: "./img/work-inner/activator/activator_1.jpg" },
      { src: "./img/work-inner/activator/activator_2.jpg" },
      {
        src: "./img/work-inner/activator/activator_3.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
        ps_jp: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  homeelectronics: {
    title: {
      title: "Home Electronics",
      keys: ["Mixed Media"],
      span: "2018",
      bg_src: "./img/work/homeelectronics_thumb.jpg",
    },
    intro_en: [
      "The scenery generated by the industrial design of the 20th century.",
    ],
    intro_jp: ["20世紀工業デザインが作り上げた風景"],
    imgs: [
      { src: "./img/work-inner/homeelectronics/homeelectronics_4.jpg" },
      { src: "./img/work-inner/homeelectronics/homeelectronics_3.jpg" },
      { src: "./img/work-inner/homeelectronics/homeelectronics_2.jpg" },
      {
        src: "./img/work-inner/homeelectronics/homeelectronics_1.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
        ps_jp: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
      },
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Assistant : Ken Ishii"],
        ps_jp: ["アーティスト：脇田玲", "制作補佐：石井健"],
      },
    ],
  },
  //-------------------------------------------------------------------
  overdisplay_2: {
    title: {
      title: "Over Display - Materiality",
      keys: ["Mixed Media"],
      span: "2018",
      bg_src: "./img/work/overdisplay_2_thumb.jpg",
    },
    intro_en: [
      'In 2018, the 20-inch monitor is cheaper than the high-quality printing fee of the same size. A disposable monitor will appear in the meantime. That is, the monitor is just one of the same materials as paper, wood and clay. This work is an attempt to explore the way of "monitor as material" born from such awareness.',
    ],
    intro_jp: [
      "2018年現在、20インチのモニターは同サイズの高品位な印刷代よりも安い。そのうち使い捨てのモニターも現れることだろう。つまり、モニターは紙や木材や粘土と同じマテリアルの1つにすぎない。本作はそのような気づきから生まれた「素材としてのモニター」のあり方を探る試みである。",
    ],
    imgs: [
      { src: "./img/work-inner/overdisplay_2/overdisplay_2_1.jpg" },
      { src: "./img/work-inner/overdisplay_2/overdisplay_2_3.jpg" },
      { src: "./img/work-inner/overdisplay_2/overdisplay_2_2.jpg" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Ars Electronica Festival, Gallery Spaces, Linz, Sep. 6-10, 2018.",
        ],
        ps_jp: [
          "- アルス・エレクトロニカ・フェスティバル, Gallery Spaces, リンツ, 2018年 9月6-10日",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  overdisplay: {
    title: {
      title: "Over Display - Modality",
      keys: ["Mixed Media"],
      span: "2018",
      bg_src: "./img/work/overdisplay_thumb.jpg",
    },
    intro_en: [
      "In this work the artist is exploring new media expressions against the anticipated use and manners of computer. ",
    ],
    intro_jp: [
      "本作ではコンピュータの想定された用途や作法に抗うメディア表現を探求している。",
    ],
    imgs: [
      { src: "./img/work-inner/overdisplay/overdisplay_1.jpg" },
      {
        src: "./img/work-inner/overdisplay/overdisplay_2.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
        ps_jp: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
      },
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Assistant : Akito Nakano, Ken Ishii"],
        ps_jp: ["アーティスト：脇田玲", "制作補佐：中野亜希人, 石井健"],
      },
    ],
  },
  //-------------------------------------------------------------------
  concept: {
    title: {
      title: "Concept of Nature",
      keys: ["Mixed Media"],
      span: "2018",
      bg_src: "./img/work/concept_thumb.jpg",
    },
    intro_en: [
      "The Japanese were ethnic groups who feel the sound of insects, such as cricket and grasshopper, as comfortable music. At the moment when urban insects are going extinct, we are surrounded by artifacts such as household appliances and information devices rather than plants and insects. Maybe modern Japanese people living in urban areas have gained the feeling perceiving a kind of music by the noise emitted by household appliances. Finding nature and the universe in the noise of appliances may be said to be a new view of nature in the Japanese ?",
    ],
    intro_jp: [
      "かつて日本人は虫の音に心地よい音楽を感じとる民族であった。都会の虫が根絶しつつある現在、我々を取り囲むのは花鳥風月ではなく、家電や情報機器などの人工物である。もしかしたら、都会に住む現代人は家電の発するノイズに音楽を感じ取る感性を獲得しているのではなかろうか？家電や情報機器のノイズの中に自然や宇宙を見出すのは、新しい日本人的自然観といってもよいのではなかろうか？",
    ],
    imgs: [
      { src: "./img/work-inner/conceptofnature/concept_1.jpg" },
      { src: "./img/work-inner/conceptofnature/concept_2.jpg" },
      {
        src: "./img/work-inner/conceptofnature/concept_3.jpg",
        caption: "Photo by Takahiro Tsushima",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
        ps_jp: [
          "- Symptom Visualized, Art & Science Gallery Lab AXIOM, 1/20 - 3/10, 2018.",
        ],
      },
    ],
  },

  //-------------------------------------------------------------------
  mutek: {
    title: {
      title: "Performance at Mutek / RedBull Music Festival",
      keys: ["Audio Visual Performance"],
      span: "2017",
      bg_src: "./img/work/mutek_thumb.jpg",
    },
    intro_en: [
      "Visual audio performance by musician Tetsuya Komuro and Scientist Akira Wakita . A fourty minute space journey using fantastic synthesizer sound and images of physics / chemistry simulation. From the viewpoint of the universe and the earth, physical phenomena and life phenomena, structure and movement, we have constructed synesthetic sound and images. While sound and images share the basic scenario, they are all generated as live performances. As part of the image, we use the calculation data of the ocean current by the supercomputer Earth Simulator.",
    ],
    intro_jp: [
      "音楽家 小室哲哉とサイエンティスト 脇田玲によるヴィジュアル・オーディオ・パフォーマンス。幻想的なシンセサイザー・サウンドと物理・化学シミュレーションの映像を用いた40分間のスペースジャーニー。宇宙と地球、物理現象と生命現象、構造と動き、の観点から共感覚性の高い音像と映像を構築している。サウンドと映像は基本的なシナリオは共有しつつも、いずれもライブのパフォーマンスとして生成されている。映像の一部には日本のスーパーコンピュータ「地球シミュレータ」による海流の計算データを用いている。",
    ],
    imgs: [
      { src: "./img/work-inner/mutek/mutek_4.jpg" },
      { src: "./img/work-inner/mutek/mutek_2.jpg" },
      { src: "./img/work-inner/mutek/mutek_3.jpg" },
      { src: "./img/work-inner/mutek/mutek_1.jpg" },
    ],
    options: [
      {
        title_en: "PERFORMANCE",
        title_jp: "パフォーマンス",
        ps_en: ["Mutek / RedBull Music Festival 2017, 11/5, 2017."],
        ps_jp: ["Mutek / RedBull Music Festival 2017, 11/5, 2017."],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "- MUTEK.JP 2017",
          href: "http://mutek.jp/?eventime_speakers=tetsuya-komuro-akira-wakitajp",
        },
        {
          label: "- RedBull Interview",
          href: "https://www.redbull.com/jp-ja/videos/mutekjp-closing-comment-video",
        },
        {
          label: "- BAKERY",
          href: "https://www.bakery-lab.tokyo/2017/11/mutek-jp-2017-performance/",
        },
        {
          label: "- Mucre",
          href: "http://mucre.net/2017/11/07/mutek2017/",
        },
      ],
      urls_jp: [
        {
          label: "- MUTEK.JP 2017",
          href: "http://mutek.jp/?eventime_speakers=tetsuya-komuro-akira-wakitajp",
        },
        {
          label: "- RedBull Interview",
          href: "https://www.redbull.com/jp-ja/videos/mutekjp-closing-comment-video",
        },
        {
          label: "- BAKERY",
          href: "https://www.bakery-lab.tokyo/2017/11/mutek-jp-2017-performance/",
        },
        {
          label: "- Mucre",
          href: "http://mucre.net/2017/11/07/mutek2017/",
        },
      ],
    },
  },

  //-------------------------------------------------------------------
  newsyn: {
    title: {
      title: "NEW SYNERGETICS - NISSAN LEAF X AKIRA WAKITA",
      keys: [
        "Realtime Visual Audio Installation",
        "9ch Full-HD Display",
        "Stereo Sound",
      ],
      span: "2017",
      bg_src: "./img/work/newsyn_thumb.jpg",
    },
    intro_en: [
      "This artwork, “New Synergetics” is a number of videos which are inspired by the idea of design of NISSAN LEAF. “Movement” represents an intelligent movement of a life modelized. “Energy” represents a visualization of invisible energy flow. “Connection” shows the future and the past of the network, developing like a nervous system.",
    ],
    intro_jp: [
      "「New Synergetics」はNIISAN LEAFのデザイン思想にインスパイアされて制作した映像群です。 生命のインテリジェントな移動をモデル化した映像(Movement)、肉眼では捉えられないエネルギーの可視化(Energy)、神経系のように発展していくネットワークの過去と未来(Connection)から構成されています。",
    ],
    videos: ["https://player.vimeo.com/video/252284586"],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "What people of Nissan designed through new LEAF is not only its car body but also a new system which coevolve with the earth while responding. It is a new energy flow focusing on its body, a new locomotion cooperating with the environmental information, and a new relationship with the earth-sized Internet.",
      "What LEAF symbolizes is a figure of coexistence between the human race and the earth and is a new science which persistently develops itself while studying exquisite nature mechanism. It can be called a modern version of Synergetics, an idea once Buckminster Fuller pursued through his life.",
      "This artwork, “New Synergetics” is a number of videos which are inspired by the idea of design of LEAF. “Movement” represents an intelligent movement of a life modelized. “Energy” represents a visualization of invisible energy flow. “Connection” shows the future and the past of the network, developing like a nervous system. What does smart motorization have the meaning and the value for us? Where are we going in the future　?",
      "The system of New Synergetics is composed of Full HD videos of 9 channels and the stereo sound. The electricity is supplied from LEAF TO HOME, a device of supplying energy to Nissan LEAF.",
      "Movement 1 A Movement of the Flock: A Movement of the Flock Although a flock of bird or fish is composed of a number of individuals, they never collide. Sensing environmental information constantly, they move autonomously, distributedly, and cooperatively.",
      "Movement 2 Predation: One of the most important purpose of the movement is the predation. At this moment, the prey is at the center of attention by the all individuals, and an invisible gravity is generated there. ",
      "Movement 3 Optimization of the ant colony: When the ant find its food, it brings a part of the food, secreting the pheromone. Following the track, other ants that detect the pheromone brings back their food when they found it while secreting the pheromone.",
      "Energy 1 Pattern of the Wind: Designing the car body is fighting against invisible wind. Wind swirls, separates, and creates various forces. As the speed increases, the laminar flow changes to the turbulent flow, and creates the incredible pattern.",
      "Energy 2 Wave of the Ocean: Ocean wave is the process which a huge energy conducts around the wilderness of sea. Through the ocean which covers the surface of the earth, the energy pervades all over the earth.",
      "Energy 3 Interfering Wave: If we can see the sound, the world will completely change. From the source of sound, the pressure propagates through the air, and infinitely spread to the world while interfering with each other.",
      "Connection1 Pulmonary Artery: Blood Vessels which covers all over the body from the lungs is a network for effectively spreading the oxygen to the body. Gigantic trees and extent of the river to the earth are also creates similar pattern of divergence.",
      "Connection 2 Sailing Route: It is a sailing route which is visualized based on the navigation sailing diary of 18th to 19th century. Before the Internet, there was a time when a movement of things and information was undifferentiated. It is artificial but it is similar to the branch pattern of the nature.",
      "Connection 3 Attractor: There is some kinds of rule behind the phenomenon called chaos. It is difficult to find relationships between butterfly's flapping and stock price, but the network growing to the global scale will certainly enable the design of new connections beyond space and time.",
    ],
    concept_ps_jp: [
      "日産LEAFにデザインされたものは、その車体にとどまらず、地球と呼応しながら共進化していくための新しいシステムだと思います。それは、車体を中心とした新しいエネルギーの流れ、環境情報と協調した新しい移動、地球大のインターネットと繋がる新しい車のつながりです。",
      "LEAFがシンボライズするものは、人類と地球との共存の姿であり、自然の精妙な仕組みに学びながら持続的に発展する新しいサイエンスです。かつてバックミンスター・フラーがその生涯を通して追求したシナジェティクス(Synergetics)と呼ばれる思想の現代版ともいうべきものでしょう。",
      "本作「New Synergetics」はLEAFのデザイン思想にインスパイアされて制作した映像群です。生命のインテリジェントな移動をモデル化した映像(Movement)、肉眼では捉えられないエネルギーの可視化(Energy)、神経系のように発展していくネットワークの過去と未来(Connection)。我々にとって移動とはどのような意味と価値を持つのでしょうか。我々は今後どこへ向かっていくのでしょうか。",
      "New Synergeticsのシステムは、9チャンネルのFullHD映像とステレオサウンドから構成されています。 日産LEAFの給電デバイスであるLEAF TO HOMEからシステムへ電気が供給されます。",
      "Movement 1 : 群の動き鳥や魚の群れは膨大な個体から構成されているが、彼らが衝突することはない。常に環境情報をセンシングしながら、自律・分散、協調的に移動している。",
      "Movement 2 : 捕食活動移動の最も重要な目的の1つは捕食だ。その瞬間、獲物は全個体の注意の中心となり、目に見えない引力がその場に生成される。",
      "Movement 3 : 蟻コロニー最適化蟻は餌を見つけると、フェロモンを出しながら餌の一部を巣に持ち帰る。フェロモンを感じ取った他の蟻は、その軌跡を辿り、もし餌を見つけたならば同様にフェロモンを出しながら餌を巣に持ち帰る。",
      "Energy 1 : 風のパターン車体のデザインは目に見えない風との戦いだ。風は渦を巻き、渦は剥離し、様々な力を作り出す。速度が上がるにつれて、層流は乱流へと変化し、我々の想像を超えたパターンを作りだす。",
      "Energy 2 : 海の波海洋の波は巨大なエネルギーが海中を伝わっていく過程である。地表を覆う大海原を介してエネルギーは地球の隅々にまで行き渡っている。",
      "Energy 3 : 干渉波もし音を見ることができたら、この世界は一変するだろう。音の発信源から空気中に圧力が伝播し、お互いに干渉しながらこの世界に無限に広がっていく",
      "Connection 1 : 肺動脈肺から全身体に伸びる血管は、酸素を効果的に身体に行き渡らせるためのネットワークだ。巨大な樹木も、大地への河川の広がりも、似たような分岐パターンを作りだす",
      "Connection 2 : 航路18〜19世紀の航海日誌を元に可視化された航路。インターネット以前には物と情報の移動が未分化だった時代があった。人工的なものであるが、生物の分岐パターンと類似している。",
      "Connection 3 : アトラクタカオスと呼ばれる現象にはある種のルールが背後に存在する。蝶の羽ばたきと株価に関係を見出すことは難しいが、地球大に伸びづけるネットワークはいつの日か空間と時間を超えた新しいつながりのデザインを可能にするだろう。",
    ],
    imgs: [
      { src: "./img/work-inner/newsyn/newsyn_1.png" },
      { src: "./img/work-inner/newsyn/newsyn_2.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Sound Design : Hananosuke Takimoto",
          "Software Development Support : Masaki Yamabe",
        ],
        ps_jp: [
          "アーティスト：脇田玲",
          "サウンドデザイン：滝本花乃介",
          "ソフトウェア開発補佐：山辺真幸",
        ],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "- NISSAN CROSSING, 6 Sep. - 22 Dec., 2017, Tokyo. ",
          href: "https://www3.nissan.co.jp/crossing/en.html",
        },
      ],
      urls_jp: [
        {
          label: "- NISSAN CROSSING, 銀座,　2017年 9月6日〜12月22日",
          href: "https://www3.nissan.co.jp/crossing/en.html",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  voac: {
    title: {
      title: "Visualization of Air Conditioner",
      keys: ["Custom Fluid Dynamics Software"],
      span: "2017",
      bg_src: "./img/work/voac_thumb.png",
    },
    intro_en: [
      "This software was developed by the joint research project of Keio University SFC Wakita Laboratory and Daikin Design. The aim of this project is to visualize indoor airflow from art and science perspective. The intention is for users to reinterpret the recognition of air conditioner.",
    ],
    intro_jp: [
      "このソフトウェアは慶應義塾大学SFC脇田研究室とダイキンデザインの共同研究から生まれました。プロジェクトの目的は、アートとサイエンスの視点から、室内の風の流れを美しく可視化し、エアコンへの再解釈を引き出すことです。",
    ],
    videos: ["https://player.vimeo.com/video/231993089"],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "This software was developed by the joint research project of Keio University SFC Wakita Laboratory and Daikin Design. The aim of this project is to visualize indoor airflow from art and science perspective. The intention is for users to reinterpret the recognition of air conditioner. Air conditioner is an equipment used to sustain comfortable living spaces by adjusting the air. Nevertheless it is not easy to control the airflow invisible to human eyes. We could control the direction of air vent and the air strength by remote controls, but wouldn't be able to understand the air flow itself in details. In this project, we challenged to visualize the beauty of indoor air flow. We can visualize various factors in three dimensions such as the direction and the strength of air, the position and the size of obstacles, the spread of moisture, and the temperature change. We could understand the difference of airflow by moving and changing the obstacles. We could also find the most comfortable spot in the space by overlooking perspective. By visually grasping the state of air, air conditioner as a product will enter a new paradigm. It is an evolution from an equipment adjusting the air (conditioner) into an equipment assembling the air (composer). Please imagine the future where we could construct the airflow within the space in the same sense as deciding your floor plan. The new binding of art and science established in this project will renew our understanding of the world. You will witness a superb view hidden in your room through the air conditioner simulation and visualization. ",
    ],
    concept_ps_jp: [
      "このソフトウェアは慶應義塾大学SFC脇田研究室とダイキンデザインの共同研究から生まれました。プロジェクトの目的は、アートとサイエンスの視点から、室内の風の流れを美しく可視化し、エアコンへの再解釈を引き出すことです。 エアコンは、室内の空気を調整し、住空間を快適化する装置です。しかし、肉眼で捉えられない空気の流れをコントロールすることは容易ではありません。我々はリモコンを通して送風口の向きと強さを調整しますが、そこから生成される空気の流れを詳細に知ることはできません。 このプロジェクトでは室内の空気の流れを美しく可視化することにチャレンジしました。風の向き、強さ、障害物の位置や大きさ、湿度の分布、室内温の変化など、様々な要素を3次元で可視化することができます。障害物の位置と形を変えることで、家具を移動させた際の風の変化を把握できます。視点をフライスルーさせることで、室内のもっとも快適な場所を見つけることもできます。 風の生態系を視覚的に把握することで、エアコンというプロダクトは新しいパラダイムに突入することでしょう。それは、空気を調整する装置(Conditioner)から、風を組み立てる装置（Composer)への進化です。室内の間取りを決めるのと同じ感覚で、室内の風の構図を組み立てることができる未来を想像してみてください。 本プロジェクトで実現したアートとサイエンスの新しい結合は、私たちの世界の認識を新たにします。エアコンのシミュレーションとビジュアライゼーションから、あなたは部屋の中の隠された絶景を発見することになるでしょう。 ",
    ],
    imgs: [
      { src: "./img/work-inner/voac/voac_1.jpg" },
      { src: "./img/work-inner/voac/voac_2.jpg" },
      { src: "./img/work-inner/voac/voac_3.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Keio Univeristy SFC (Futa Kera, Masaki Yamabe, Akira Wakita)",
          "Technology and Innovation Center, Daikin Industries, Ltd.",
        ],
        ps_jp: [
          "慶應義塾大学SFC脇田玲研究室（計良風太, 山辺真幸, 脇田玲）",
          "ダイキン工業 テクノロジー・イノベーションセンター",
        ],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label:
            "- The power of design makes it possible to “visualize” otherwise invisible air.",
          href: "http://www.daikin.com/about/design/2017/09/entry-21.html",
        },
        {
          label: "- Visualization of Air Conditioner on Vimeo",
          href: "https://vimeo.com/231993089",
        },
      ],
      urls_jp: [
        {
          label: "- デザインの力で見えない空気を「見える化」する",
          href: "http://www.daikin.co.jp/design/2017/09/entry-21.html",
        },
        {
          label: "- Visualization of Air Conditioner on Vimeo",
          href: "https://vimeo.com/231993089",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  amp: {
    title: {
      title: "Amplification",
      keys: ["Audio Visual Performance"],
      span: "2017",
      bg_src: "./img/work/amp_thumb.jpg",
    },
    intro_en: [
      "Live performance recorded for the DVD of the first limited edition of Mr. Tetsuya Komuro’s album “JOBS#1”. Wakita made a sound-reactive fluid visualization for Mr. Komuro’s improvised performance. This work can also be seen as a remake of the secret concert that Mr. Komuro and Wakita performed at the Ars Electronica Festival in 2016.",
    ],
    intro_jp: [
      "小室哲哉氏のアルバム「JOBS#1」の初回限定版DVD用に収録されたライブパフォーマンス。小室氏の演奏に応じてリアクティブに反応する流体映像ソフトウェアを開発し、 即興パフォーマンスを収録し、映像化したもの。 本作は、2016年のアルス・エレクトロニカ・フェスティバルで行われた小室氏と脇田によるシークレットライブを、環境を整えてリメイクしたものとも言える。",
    ],
    imgs: [
      { src: "./img/work-inner/amplification/amplification.jpg" },
      { src: "./img/work-inner/amplification/amplification_2.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Produced by Tetsuya Komuro",
          "Visual Arts by Akira Wakita, Masayuki Iwamoto",
          "Software Development Supported by Masaki Yamabe",
          "Data Set Supported by JAMSTEC (Japan Agency for Marine-Earth Science and Technology). ",
          "OFES (Ocean General Circulation Model for the Earth Simulator) dataset is used for the visualization.",
        ],
        ps_jp: [
          "Produced by Tetsuya Komuro",
          "Visual Arts by Akira Wakita, Masayuki Iwamoto",
          "ソフトウェア開発補助：山辺真幸 (Masaki Yamabe) ",
          "データ提供：国立研究開発法人海洋研究開発機構 (JAMSTEC) （「地球シミュレータ」によって計算された超高解像度海洋大循環モデルOFESデータを利用）",
        ],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "- 「JOBS#1」",
          href: "http://avex.jp/tk/jobs1/",
        },
      ],
      urls_jp: [
        {
          label: "- 「JOBS#1」",
          href: "http://avex.jp/tk/jobs1/",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  ryoanji: {
    title: {
      title: "Ryoanji / Parking",
      keys: ["Custom Software"],
      span: "2016",
      bg_src: "./img/work/ryoanji_thumb.jpg",
    },
    intro_en: [
      "There are 15 stones in the rock garden of Ryōan-ji temple. Oddly, there is not a single place where all 15 stones can be seen together. Only up to 14 stones can be seen from any spot on the stage. An exquisite “space” that cannot be captured with the naked eye is designed there. The 15 stones can be divided into five groups, and a recent study shows that when vertical bisectors are drawn between these groups, a growth pattern of plants is revealed. I thought whether I could use the flow of wind to visualize the tension and looseness created by the perfectly designed space. By applying a fluid simulation into a scenery that overlooks the rock garden, I tried to expose the ecosystem of the wind that blows through it. At the same time, I applied a similar simulation to a parking lot in Tokyo which is thought to have absolutely no regard to design. By juxtaposing it with the simulation with Ryōan-ji temple, I decided to offer an opportunity to think about the similarities and differences between cases with and without the intervention of human design.",
    ],
    intro_jp: [
      "龍安寺の石庭には15個の石がある。奇妙なことに、15個全ての石を同時に捉えられる場所はどこにも存在しない。舞台のどこから見ても最大で14個の石しか見えないのだ。 そこには肉眼では捉えられない絶妙な「間（ま）」がデザインされている。15個の石は5つの群に分けることができるのだが、この群の間に垂直2等分線を引いていくと、植物が成長していくパターンがたちあらわれることも近年の研究で明らかになっている。 このように絶妙にデザインされた間が作り出す緊張や緩みを風の流れを通して可視化することができないかと考えた。 石庭を俯瞰した風景に流体シミュレーションを適用することで、そこに流れる風の生態系をあらわにしようと試みた。 同時に、全くデザインがなされていないと考えられる都内のある駐車場を俯瞰した風景にも同様のシミュレーションを適用し、 龍安寺のそれと並置することで、人の意図が介在する場合としない場合の、両者の類似と相違を考える契機を提供することにした。",
    ],
    imgs: [
      {
        src: "./img/work-inner/ryoanji/ryoanji.jpg",
        caption: "© Nacása & Partners Inc. FUTA Moriishi",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Ars Electronica Gallery Spaces, 7-10 Sep. 2017, Ars Electronica Festival 2017.",
          "- Fluid (Solo Exhibition), 8 Oct. - 28 Dec. 2016, Art & Science gallery lab AXIOM.",
        ],
        ps_jp: [
          "- Ars Electronica Gallery Spaces, 7-10 Sep. 2017, Ars Electronica Festival 2017.",
          "- Fluid (Solo Exhibition), 8 Oct. - 28 Dec. 2016, Art & Science gallery lab AXIOM.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  relief: {
    title: {
      title: "Relief",
      keys: ["Video Installation", "Custom Fluid Dynamics Software"],
      span: "2016",
      bg_src: "./img/work/relief_thumb.jpg",
    },
    intro_en: [
      "The Japanese culture discovers meaning in a “space” that the eyes cannot see. It believes that there is plenty of energy in areas that the naked eye cannot perceive. In this work, through the coexistence of relief and fluid simulation, I searched for common grounds between the Buddhist concept of “true emptiness, wondrous being” and physics.",
    ],
    intro_jp: [
      "日本文化は目に見えていない「間（ま）」に意味を見出す。肉眼で捉えられない領域に豊かなエネルギーが満ちていると考える。 本作では、レリーフと流体シミュレーションを共存させることで、仏教における真空妙有の概念と物理学の共通の着地点を模索した。",
    ],
    imgs: [
      {
        src: "./img/work-inner/relief/relief.jpg",
        caption: "© Nacása & Partners Inc. FUTA Moriishi",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Fluid (Solo Exhibition), 2016年10月8日〜12月28日, Art & Science gallery lab AXIOM.",
        ],
        ps_jp: [
          "- Fluid (Solo Exhibition), 8 Oct. - 28 Dec. 2016, Art & Science gallery lab AXIOM.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  ff4: {
    title: {
      title: "Furnished Fluid #4",
      keys: ["Video Installation", "Custom Fluid Dynamics Software"],
      span: "2016",
      bg_src: "./img/work/ff4_thumb.png",
    },
    intro_en: [
      "The fourth work of the Furnished Fluids series. It is an attempt to connect the material and spiritual worlds, like the previous work. I focused on the richness of this world where a single bowl can dominate the space and juxtaposed a black vase and a ghostic fluid simulation.",
    ],
    intro_jp: [
      "Furnished Fluid（家具付けられた流体）シリーズの4作目。前作に続き、物質的世界と精神的世界の接続を試みている。たった1つの器が空間を支配しうるこの世界の豊かさに着目し、黒い壺と幽霊的な流体シミュレーションを並置した。",
    ],
    imgs: [
      {
        src: "./img/work-inner/furnished_4/ff4.jpg",
        caption: "© Nacása & Partners Inc. FUTA Moriishi",
      },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Fluid (Solo Exhibition), 2016年10月8日〜12月28日, Art & Science gallery lab AXIOM.",
        ],
        ps_jp: [
          "- Fluid (Solo Exhibition), 8 Oct. - 28 Dec. 2016, Art & Science gallery lab AXIOM.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  darkside: {
    title: {
      title: "Darkside of Computation",
      keys: ["Inkjet Print", "100cm x 200cm"],
      span: "2016",
      bg_src: "./img/work/darkside_thumb.jpg",
    },
    intro_en: [
      "The history of the technological development of the computer is also a history of mass massacre. The world’s first electronic computer ENIAC was created in 1944 in the United States Army facility of Aberdeen Proving Ground with the objective of effectively processing the trajectory of missiles. In trajectory calculation, it is necessary to solve nonlinear partial differential equations of fluid dynamics, so an advanced processing capacity was needed. Its successor model, EDVAC, was used in actual combat. It is the so-called von Neumann-type computer, the prototype of the architecture of the PC we now use every day. In other words, it is possible to say that the electronic computer we use today was born as an instrument of murder. However, using the same computer, we have created many peaceful applications as well. We communicate with people all around the world and produce images and music. How we are going to use science and technology and whether we will lead ourselves to utopia or dystopia depend on our choices. In order to transmit the negative history of the computer to future generations, I carried out a simulation of fluid dynamics using a present-day ordinary PC, and outputted the result to a paper, which can be stored for a long time. I selected several dates that marked the negative history of computers and estimated the number of people who would have been killed, and set them as environment variables of the simulation. I then extracted the shape of the fluid generated as a result.",
    ],
    intro_jp: [
      "コンピュータの技術進歩の歴史は実は大量殺戮の歴史でもある。1944年に生まれた世界初の電子式コンピュータENIAC。この部屋ほどの大きさのコンピュータはミサイルの弾道計算を効果的に処理するために米国アバディーン実験場で生まれた。弾道計算は流体力学の非線形偏微分方程式を解く必要があるため、高度な処理能力が必要とされていたのだ。その後継機種EDVACは実戦の弾道計算に使われた。この機種はいわゆるノイマン型・コンピュータと呼ばれており、我々が日々使っているPCのアーキテクチャの原型である。つまり我々が日々使っている電子式コンピュータは、殺人の道具として誕生したとも言えるのだ。しかし、同じコンピュータを使って、私たちは平和的な数々の用途を生み出している。地球上の人とコミュニケーションし、映像や音楽を作り出している。科学技術をどのように使うか、ユートピアとディストピアのどちらに導かれるか、それは我々の選択次第なのだ。コンピュータの負の歴史を後世に伝えるために、今日の一般的なPCを用いて流体力学のシミュレーションを行い、その結果を長期間保存が可能な紙というメディアに出力した。 シミュレーションでは、コンピュータの負の歴史を刻んだいくつかの年号、計算により殺戮されたであろう想定人数などをシミュレーションの環境変数として設定し、その結果として生成される流体の形を取り出している。",
    ],
    imgs: [{ src: "./img/work-inner/darkside/darkside.jpg" }],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Fluid (Solo Exhibition), 2016年10月8日〜12月28日, Art & Science gallery lab AXIOM.",
        ],
        ps_jp: [
          "- Fluid (Solo Exhibition), 8 Oct. - 28 Dec. 2016, Art & Science gallery lab AXIOM.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  ff3: {
    title: {
      title: "Furnished Fluid #3 (2016)",
      keys: ["Video Installation", "Custom Fluid Dynamics Software"],
      span: "2016",
      bg_src: "./img/work/ff3_thumb.png",
    },
    intro_en: [
      "3rd work of the Furnished Fluid series. In contrast to the predecessor works focusing on the physicality, this work focuses on the spirituality to visualize the cemetery of the 20th century industrial design. The scene consists of abandoned tube television, typewriter and vacuum sweeper. Ghostly fluid dynamics simulation applied to the scene visualizes the entities of modern material civilization.",
    ],
    intro_jp: [
      "Furnished Fluid（家具付けられた流体）シリーズの3作目。過去の作品と異なり、物質的側面よりも精神的側面に着目し、20世紀工業デザインの墓場の風景を可視化している。 展示会場となった兜町の廃ビルを渉猟し、放棄されていたブラウン管テレビ、タイプライター、掃除機などを蒐集し、そこから作り出される借景された物質文明の一風景に幽霊的な流体シミュレーションを適用した。",
    ],
    imgs: [{ src: "./img/work-inner/furnished_3/ff3_1.png" }],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- ART PHOTO TOKYO -edition zero-, 18-20 Nov., 2016, Tokyo."],
        ps_jp: [
          "- ART PHOTO TOKYO -edition zero-, 2016年11月18〜20日, 茅場町.",
        ],
      },
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Artist : Akira Wakita", "Assistant : Ken Ishii"],
        ps_jp: ["アーティスト：脇田玲", "制作補佐：石井健"],
      },
    ],
    link: {
      label_en: "Press",
      label_jp: "記事掲載",
      urls_en: [
        {
          label: "- PREMIUM JAPAN, 25 Nov. 2016.",
          href: "http://www.premium-j.jp/culture/48403/?lang=",
        },
        {
          label: "- Kabuto LIVE, 14 Dec. 2016.",
          href: "http://kabuto-live.com/report/spAEQp",
        },
      ],
      urls_jp: [
        {
          label: "- PREMIUM JAPAN, 2016年11月25日.",
          href: "http://www.premium-j.jp/culture/48403/?lang=",
        },
        {
          label: "- 兜LIVE, 2016年12月14日",
          href: "http://kabuto-live.com/report/spAEQp",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  scalar8k: {
    title: {
      title: "Scalar Fields (2016)",
      keys: [
        "8K Visual Audio Intallation",
        "Custom Fluid Dynamics Software",
        "5.1ch Sound",
      ],
      span: "2016",
      bg_src: "./img/work/scalarfields_thumb.png",
    },
    intro_en: [
      "This work visualizes the pressure field around the sole of a shoe. By using the fluid simulation software developed by Akira Wakita, the propagation of pressure in air is visualized in 8K video, with a marvelous sound experience designed by Tetsuya Komuro. During the Ars Electronica Festival 2016, the visualization has been exhibited as floor and wall projection at Deep Space 8K with a marvelous 5.1 ch sound experience.",
    ],
    intro_jp: [
      "本作は靴のソールが作り出す圧力場のヴィジュアライゼーションである。歩行時に空気中に圧力が伝播する様子を数値流体力学でシミュレーションし、8K映像と5.1chサウンドを用いた映像音響インスタレーションに仕上げた。 本作は小室哲哉氏と脇田玲によるコラボレーションにより実現。アルス・エレクトロニカ・センターに設置された映像空間Deep Spaceにおける初の本格的8Kアート作品として2016年のフェスティバルで発表された。",
    ],
    videos: ["https://player.vimeo.com/video/202616797"],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "This work visualizes the pressure field around the sole of a shoe. By using the fluid simulation software developed by Akira Wakita, the propagation of pressure in air is visualized in 8K video, with a marvelous sound experience designed by Tetsuya Komuro.During the Ars Electronica Festival 2016, the visualization has been exhibited as floor and wall projection at Deep Space 8K with a marvelous 5.1 ch sound experience. ",
      "A small-scale storm is raging in the micro space around the shoe sole. Wind pressure generated due to walking, blows off the mite from the carpet. Converting to macro scale, it is similar to the phenomenon in which human beings get blown off by the air pressure generated when buildings collapse or air raids are conducted in war regions. Through simulation and visualization, we may obtain a wide range of perception connecting the micro to the macro world. ",
    ],
    concept_ps_jp: [
      "本作は靴のソールが作り出す圧力場のヴィジュアライゼーションである。歩行時に空気中に圧力が伝播する様子を数値流体力学でシミュレーションし、8K映像と5.1chサウンドを用いた映像音響インスタレーションに仕上げた。 本作は小室哲哉氏と脇田玲によるコラボレーションにより実現。アルス・エレクトロニカ・センターに設置された映像空間Deep Spaceにおける初の本格的8Kアート作品として2016年のフェスティバルで発表された。 ",
      "ソールの周囲のミクロな空間には小さな暴風が吹き荒れている。歩行による風圧は、カーペットのダニを吹き飛ばし、アスファルトの蟻をその場に踏みとどまらせる。マクロなスケールに変換すれば、（あまり良い比喩ではないかもしれないが）ビルの倒壊や紛争地域の空爆が作り出す風圧が人間を吹き飛ばしてしまう現象にも似ている。ヴィジュアライゼーションとシミュレーションを通して、我々はミクロとマクロをつなぐレンジの広い知覚能力を獲得できるかもしれない。 ",
    ],
    imgs: [
      { src: "./img/work-inner/scalar8k/sf8k_01.jpg" },
      { src: "./img/work-inner/scalar8k/sf8k_02.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Visualization : Akira Wakita", "Music: Tetsuya Komuro"],
        ps_jp: ["映像 : 脇田 玲", "音楽 : 小室 哲哉"],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Media Ambition Tokyo, 11 Jun. - 12 Mar. 2017, Tokyo.",
          "- Ars Electronica Festival, Deep Space 8K, 8-12 Sep. 2016, Linz.",
        ],
        ps_jp: [
          "-  メディア・アンビション・トウキョウ, 2017年2月11日〜3月12日, 六本木.",
          "- アルス・エレクトロニカ・フェスティバル, Deep Space 8K, 2016年9月8〜12日, リンツ. ",
        ],
      },
    ],
    link: {
      label_en: "Press",
      label_jp: "記事掲載",
      urls_en: [
        {
          label:
            '- ARS ELECTRONICA Blog "Scalar Fields – Each step has an Importance"',
          href: "https://www.aec.at/aeblog/en/2016/09/10/scalar-fields/",
        },
        {
          label: "- WIRED JAPAN",
          href: "http://wired.jp/special/2017/wakita-komuro/",
        },
        {
          label: "- SENSORS.JP (Interview 1)",
          href: "http://www.sensors.jp/post/tetsuya-komuro-akira-wakita-ars.html",
        },
        {
          label: "- SENSORS.JP (Interview 2)",
          href: "http://www.sensors.jp/post/tetsuya-komuro-akira-wakita-ars-1.html",
        },
      ],
      urls_jp: [
        {
          label:
            '- ARS ELECTRONICA Blog "Scalar Fields – Each step has an Importance"',
          href: "https://www.aec.at/aeblog/en/2016/09/10/scalar-fields/",
        },
        {
          label:
            '- WIRED, "TKとTOMITA。アルスでの邂逅, 脇田玲＋小室哲哉「Scalar Fields」を語る"',
          href: "http://wired.jp/special/2017/wakita-komuro/",
        },
        {
          label:
            "- SENSORS, 小室哲哉・脇田玲インタビュー完全版 アルスエレクトロニカ舞台裏を語る",
          href: "http://www.sensors.jp/post/tetsuya-komuro-akira-wakita-ars.html",
        },
        {
          label:
            '- SENSORS, 小室哲哉と"視覚"の関係-絵を描くこと・映像表現・自らのパフォーマンス',
          href: "http://www.sensors.jp/post/tetsuya-komuro-akira-wakita-ars-1.html",
        },
      ],
    },
  },

  //-------------------------------------------------------------------
  ff2: {
    title: {
      title: "Furnished Fluid #3 (2016)",
      keys: [
        "Realtime Visual Installation",
        "Custom Fluid Dynamics Software",
        "8ch Full-HD Display",
      ],
      span: "2016",
      bg_src: "./img/work/ff2_thumb.png",
    },
    intro_en: [
      "2nd work of the Furnished Fluid series. Interpretation of the hidden meaning behind 20th century industrial design using todays computation power. La Chaise(Charles & Ray Eames 1948), Butterfly Stool (Sori Yanagi 1954) and Diamond Chair(Harry Bertoia 1952) are selected as examples of computational design interpretation.",
    ],
    intro_jp: [
      "Furnished Fluid（家具付けられた流体）シリーズの2作目。デザイン模型とリアルタイム映像を一体化したこのインスタレーションは、20世紀工業デザインの価値と魅力を、科学の力を用いて再解釈する新しい方法論の提案である。今回は La Chaise(Charles & Ray Eames 1948)、Butterfly Stool (Sori Yanagi 1954) 、Diamond Chair(Harry Bertoia 1952) の3つの椅子をサンプルとしている。",
    ],
    imgs: [
      { src: "./img/work-inner/furnished_2/furnished_2_1.jpg" },
      { src: "./img/work-inner/furnished_2/furnished_2_2.jpg" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Impetus and Movement (ARS ELECTRONICA in the KNOWLEDGE CAPITAL Vol.06) 18 Aug. - 6 Nov, 2016, Osaka.",
        ],
        ps_jp: [
          "- ART PHOTO TOKYO -edition zero-, 2016年11月18〜20日, 茅場町.",
        ],
      },
    ],
    link: {
      label_en: "Press",
      label_jp: "記事掲載",
      urls_en: [
        {
          label: "- Osaka Nichinichi News, 19 Aug. 2016.",
          href: "http://www.nnn.co.jp/dainichi/news/160819/20160819042.html",
        },
        {
          label: "- IMPETUS AND MOVEMENT Photo Report, 19 Aug. 2016, Artlogue.",
          href: "http://www.artlogue.org/photo-impetus-and-movement-osaka/",
        },
      ],
      urls_jp: [
        {
          label: "- PREMIUM JAPAN, 25 Nov. 2016.",
          href: "http://www.premium-j.jp/culture/48403/?lang=",
        },
        {
          label: "- Kabuto LIVE, 14 Dec. 2016.",
          href: "http://kabuto-live.com/report/spAEQp",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  geo: {
    title: {
      title: "Ocean Current Visualization (2016)",
      keys: ["Augmented Reality Visualization"],
      span: "2016",
      bg_src: "./img/work/geo_thum.png",
    },
    intro_en: [
      "We have developed Ocean Current Visualization for the Geo-Prism system of Mirakan. Geo-prism is the new augmented reality system for Geo-Cosmos which is the symbol exhibit of Miraikan, produces high precision images on its sphere surface. Geo-Prism, developed by Rhizomatiks, is a framework to which new contents can be embedded. Keio SFC Wakita Lab has developed a super high resolution visualization of ocean behavior by using a set of simulation data that is calculated by JAMSTEC with their super computer, Earth Simulator.",
    ],
    intro_jp: [
      "脇田研究室は日本科学未来館のジオ・プリズムに流体ビジュアライゼーションを提供しました。 ジオ・プリズムは、AR（拡張現実感）技術を用いて、全球型ディスプレイ「ジオ･コスモス」にデータやシミュレーションを重ねて表示できるシステムです。 このビジュアライゼーションでは、海洋研究開発機構（JAMSTEC）のスーパーコンピュータ「地球シミュレータ」によって計算された超高解像度海洋大循環モデルOFESのデータを使い、地球上の波の動きを3つの詳細度で可視化しています。",
    ],
    imgs: [
      { src: "./img/work-inner/ocean/ocean_03.jpg" },
      { src: "./img/work-inner/ocean/ocean_02.jpg" },
      { src: "./img/work-inner/ocean/ocean_01.jpg" },
    ],
    options: [
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Miraikan, Geo-Prism, permanent exhibition, from March 2016, Tokyo.",
        ],
        ps_jp: ["- 日本科学未来館, Geo-Prism, 常設展示, 2016年3月〜."],
      },
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Visualization: Keio University SFC, Akira Wakita Laboratory",
          "Data provided by: Japan Agency for Marine-Earth Science and Technology (JAMSTEC)",
          "Geo-Prism System Development: Rhizomatiks Research",
        ],
        ps_jp: [
          "ビジュアライゼーション開発：慶応大学脇田研究室（山辺真幸、中野亜希人、脇田玲）",
          "データ提供：海洋研究開発機構（JAMSTEC）",
          "ジオ・プリズム システム開発：ライゾマティクスリサーチ",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  //sfos_stl: {
  //  title: {
  //    title: 'Scalar Field of Shoes - Still',
  //    keys: [
  //      'Print on Aluminum',
  //    ],
  //    span: '2016',
  //    bg_src: './img/work/sfos_stl.png',
  //  },
  //  intro_en : [
  //    "This work visualizes the pressure field around the sole of a shoe using computational fluid dynamics simulation. The propagation of pressure in air was visualized and materialized as a set of digital photographies on aluminum plates. The artist tries to catch the pressure field alive into the still images. Through the successive processes of modelization, visualization and materialization, sensory perception of human can be extended sagaciously and beautifully.",
  // ],
  // intro_jp : [
  //   '靴のソールが作り出す圧力場を数値流体力学のシミュレーションにより可視化し、静止写真として物質化した。空気中に圧力が伝播していく様子の生け捕り／採取に挑戦した作品。 モデル化、可視化、物質化という3つの連続過程を通して、人間の知覚を美しく鋭敏に拡張する。',
  //],
  //imgs: [
  //  {src: './img/work-inner/sfos_still/sfos_still_0.jpg'},
  //  {src: './img/work-inner/sfos_still/sfos_still_1.jpg'},
  //  {src: './img/work-inner/sfos_still/sfos_still_2.jpg'},
  //  {src: './img/work-inner/sfos_still/sfos_still_3.jpg'},
  //  {src: './img/work-inner/sfos_still/sfos_still_4.jpg'},
  //  {src: './img/work-inner/sfos_still/sfos_still_5.jpg'},
  //],
  //},
  //-------------------------------------------------------------------
  sfos: {
    title: {
      title: "Scalar Field of Shoes",
      keys: ["4K Video Installation", "Custom Fluid Dynamics Software"],
      span: "2015",
      bg_src: "./img/work/sfos_thum.png",
    },
    intro_en: [""],
    intro_jp: [""],
    videos: ["https://player.vimeo.com/video/150054096"],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "This work visualizes the pressure field around the sole of a shoe. The propagation of pressure in air was visualized and recorded in 4K video.",
      "When wearing shoes and performing acts such as standing, walking, and running, our body continuously gathers a variety of information through the interaction between the sole and the ground. At the same time, with each step taken, a pressure field that is invisible to the naked eye is generated on the surface of contact, and this certainly continues affecting the surrounding areas. In retrospect, although the pattern and structure of the sole constitute the essence of shoe design, the sole itself has rarely been given due attention. As the viewer watches the video of the pressure field receptively, it becomes clear that the shoe is not just a device to support walking; it is also a medium to propagate the wearer's existence and identity in the form of a mild pressure that is invisible to the naked eye. Through simulation I want to reinterpret the very existence of shoes. I also want to elicit a new viewpoint regarding shoe design and the act of walking.",
      'For many, patterns of pressure propagation present a maiden encounter with a new kind of natural beauty, and make them aware of the existence of the "invisible magnificent view" around the foot. A miracle of beauty is created from the very existence of both the shoe and the person wearing it. At times it appears as if plants are flourishing, and at times it appears as if organisms are growing leisurely. The visualization described here is not just about the artificial patterns that mechanical repetitions produce, it is also about the organic rhythm generated through recursive self-update as articulated by Ludwig Klages. I want you to think about the fact that at this very moment, people all over the world are generating exquisite patterns around them as they walk.',
      "A small-scale storm is raging in the micro space around the shoe sole. Wind pressure generated due to walking, blows off the mite from the carpet, but forces the ants to remain stuck at the same spot on the asphalt. Although the metaphor may not be appropriate, converting to macro scale, it is similar to the phenomenon in which human beings get blown off by the air pressure generated when buildings collapse or air raids are conducted in war regions. Through simulation and visualization, we may obtain a wide range of perception connecting the micro to the macro world.",
      "This work was produced by using the fluid simulation software developed by the artist. Based on the sole shape input data, the surrounding pressure field is calculated utilizing high-speed GPGPU computation. The shade of the color is determined based on the pressure level, and a different color is used when the pressure exceeds a certain threshold. The shape and growth pattern generated by the pressure, are not the result of any arbitrary design by the artist, but are due to a design based on the results of pure fluid dynamics computation. Although, in general, it is often thought that advanced technology application and human nature (intuition) remain far apart, with rapid progress in advanced technology, the output is becoming increasingly sensed naturally. ",
      "In this installation, combining elegant shoes and 4K video, I suggest a new interpretation of shoe design based on fluid dynamics computation, extending the reality to the invisible world. The use of computational fluid dynamics as a new language to interpret design concepts, elicits a new relationship between art and science. ",
    ],
    concept_ps_jp: [
      "本作は靴のソールが作り出す圧力場のヴィジュアライゼーションである。空気中に圧力が伝播していく様子を4K映像として可視化した。",
      "靴を履いて「立つ」「歩く」「走る」という行為は、ソールを通して地面とインタラクションすることであり、我々の身体はそこから多様な情報を取得し続けている。同時に、その一歩一歩は、肉眼では見ることのできない圧力場を床面に生成し、周囲に確実に影響を与え続けている。その意味で、ソールのパターンや構造は靴のデザインの本質である訳だが、ソールそのものが注目されることはあまりない。鑑賞者は、圧力場の映像に身を任せる内に、靴は単に歩行を支援する装置ではなく、自身の存在やアイデンティティを目に見えない穏やかなプレッシャーとして周囲に伝えるメディアでもあることに気がつく。シミュレーションを通して靴という存在を捉え直すこと。靴のデザイン、そして歩くという行為に新しい眼差しを提供したい。",
      "ソールが作り出す圧力伝播のパターンは、多くの人にとって初めて目にする自然の造形美であり、我々の足元に「見えない絶景」が生成されていることに気がつく。人と靴、両者の存在により生成される美の奇跡。植物が生き生きと繁茂する様にも見え、生物が伸び伸びと成長していく様にも見える。ここで可視化されているのは、機械的な反復が生み出す人工的なパターンではなく、クラーゲスが言うところの、自己を再帰的に更新していく中で生まれる有機的なリズムである。世界中の人々が、今この瞬間、美しい模様を描きながらこの地球上を歩いているという事実に思いを馳せてほしい。",
      "ソールの周囲のミクロな空間には小さな暴風が吹き荒れている。歩行による風圧は、カーペットのダニを吹き飛ばし、アスファルトの蟻をその場に踏みとどまらせる。マクロなスケールに変換すれば、（あまり良い比喩ではないかもしれないが）ビルの倒壊や紛争地域の空爆が作り出す風圧が人間を吹き飛ばしてしまう現象にも似ている。ヴィジュアライゼーションとシミュレーションを通して、我々はミクロとマクロをつなぐレンジの広い知覚能力を獲得できるかもしれない。",
      "本作は独自開発した流体シミュレーションのソフトウェアを用いて制作した。入力されたソールの形状データをもとに、GPGPUを用いた高速な演算により周囲の圧力場が計算されている。色彩の濃淡は圧力の高低に応じて決定され、ある閾値を超えた場合には別の色へと変化する。圧力が作り出す形状とその成長パターンは、アーティストの手により恣意的に作られたものではなく、純粋な流体力学の計算結果から得られた造形である。一般にハイテクノロジーは人間性とかけ離れたところにあると考えられがちだが、技術が高度化すればするほど、アウトプットはより自然に感じられるものになるのだ。",
      "美しい靴と4K映像を一体化したこのインスタレーションは、靴のデザインへのコンピュテーションによる再解釈を促し、見えない世界へのリアリティを拡張する。数値流体力学というハイテクノロジーをデザインを解釈する言語として位置づけることで、芸術と科学の新しい関係が生まれる。",
    ],
    imgs: [
      { src: "./img/work-inner/scalar/sfos_1.jpg" },
      { src: "./img/work-inner/scalar/sfos_2.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : Akira Wakita",
          "Sound Design : Hananosuke Takimoto",
          "Software Development Support : Masaki Yamabe",
          //"Commissioned by AnyTokyo 2015 with the support of Tod's Japan and Sony",
        ],
        ps_jp: [
          "アーティスト : 脇田玲",
          "音楽 : Kan Sano (origami PRODUCTIONS)",
          "ショートムービー：辻航平",
          //'シューズ協力 : トッズ・ジャパン',
          "ディスプレイ協力 : ソニー",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: ["- AnyTokyo 2015, 24 Oct. - 3 Nov. 2015, Zojoji, Tokyo. "],
        ps_jp: ["- AnyTokyo 2015, 増上寺, 2015/10/24〜11/3. "],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "- AnyTokyo 2015",
          href: "http://anytokyo.com/",
        },
        {
          label: "- Scalar Field of Shoes",
          href: "https://vimeo.com/150054096",
        },
      ],
      urls_jp: [
        {
          label: "- AnyTokyo 2015",
          href: "http://anytokyo.com/",
        },
        {
          label: "- Scalar Field of Shoes",
          href: "https://vimeo.com/150054096",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  furnish: {
    title: {
      title: "Furnished Fluid (2014 - 2016)",
      keys: ["Realtime Visual Installation", "Custom Fluid Dynamics Software"],
      span: "2016",
      bg_src: "./img/work/furnish.png",
    },
    intro_en: [
      "Furnished Fluid is visualization that utilizes the air flow that we are practically unaware of in our daily lives. By applying fluid simulation technology — with seemingly no relation to daily life — to the objects overflowing in our surroundings, the complex and elaborate air flow and ecosystem that are invisible to the naked eye but present all around us are made apparent.",
    ],
    intro_jp: [
      "Furnished Fluid（家具付けられた流体）は、私たちが日常生活ではほとんど意識することのない空気の流れに着目したヴィジュアライゼーションです。日常とは無縁に思える流体シミュレーションというテクノロジーを、ありふれた日常的な人工物に適用することで、目の前にありながらも肉眼では決して見ることができない複雑で精妙な流れの生態系を露わにします。",
    ],
    videos: [
      "https://player.vimeo.com/video/121172665",
      "https://www.youtube.com/embed/iWWZuxQpkWs",
    ],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "Furnished Fluid is visualization that utilizes the air flow that we are practically unaware of in our daily lives. By applying fluid simulation technology — with seemingly no relation to daily life — to the objects overflowing in our surroundings, the complex and elaborate air flow and ecosystem that are invisible to the naked eye but present all around us are made apparent.",
      "As a symbol of 20th century industrial design, miniatures of chairs are placed in front of three displays. W. W. Stool (1990) by Philippe Starck, Robie House 1 (1908) by Frank Lloyd Wright, and the Big Easy (1991) by Ron Arad were selected in tribute to these great designers, as the works are unrivaled and magnificent in beauty.",
      "Form data for the chairs were input initially into fluid dynamics software that was developed independently; it calculates the density and velocity of virtual space in real time at a speed of 45 frames per second. Then, it dynamically renders particles’ movements and colors. In the fluid simulation, it focused on the characteristic parts of the three chairs and calculated the behavior of the surrounding fluids on a two-dimensional scale. This process resembles the CT scanning of internal parts of the human body that are invisible to the naked eye. The aim is to slice the complex and turbulent forms surrounding the chairs flatly so that they can be understood intuitively.",
      "We offer two visualization modes. Air mode describes the air flow surrounding the furniture by displaying fine particles against a white background. To derive various interpretations regarding furniture design, values for fluid viscosity and time steps vary. Stellar mode expresses the microcosm of the current that the chairs generate by utilizing particles that radiate a blue light against a black background. In both modes, the particles are colored according to their velocity and the density of the field; they vividly illustrate the ecosystem of the current pattern.",
      "This installation, which integrates design miniatures and real-time images, enables us to use the power of science to make visible the appealing and valuable aspects of industrial design that have been invisible up to the present time. As the beholder observes the constantly changing image of fluids, he/she begins to catch the details of a chair that have always existed but which could not be perceived by the senses. At the same time, the beholder perceives the vivid features of the chair’s form, such as its curve, lattice work, and surface, which are also communicated with vibrancy in the current’s pattern within the surrounding space. This work is an attempt to search for common ground from the aspects of physicality and sculptured forms in industrial design and the computerized, data-driven sculptures.",
    ],
    concept_ps_jp: [
      "Furnished Fluidは、私たちが日常生活ではほとんど意識することのない空気の流れに着目したヴィジュアライゼーションです。日常とは無縁に思える流体シミュレーションというテクノロジーを、ありふれた日常的な人工物に適用することで、目の前にありながらも肉眼では決して見ることができない複雑で精妙な流れの生態系を露わにします。 ",
      "3つのディスプレイの前には、20世紀工業デザインの象徴として、椅子のミニチュアが配置されています。偉大なデザイナーへのオマージュとして、そしてその比類なき造形的な美しさから、フィリップ・スタルクのW.W. Stool(1990)、フランク・ロイド・ライトのRobie House 1(1908)、ロン・アラッドのBig Easy(1991)が選択されました。",
      "本作品のコンセプトは、「20世紀工業デザインへのコンピュテーションによる再解釈」を試みることにあります。 一般に、工業デザインは造形美、質感、大量生産性などによりその魅力が評価されます。 一方、プロダクトの形状を流体シミュレーションにかけることで、椅子は単に座るための装置ではなく、室内の空気の流れを調律するメディアとして機能していることが明らかになりました。美しい椅子は美しい空気の流れを作り出しているのでしょうか。 そこから生み出される渦や乱流は我々の精神活動にどのような影響を与えているのでしょうか。 科学との接点を通して工業デザインの新しい価値と魅力を発見できるかもしれません。",
      "これらの椅子の形状データは独自開発した流体力学ソフトウェアに入力され、毎秒45フレームで仮想空間の密度と速度をリアルタイムに計算し、パーティクルの動きと色彩をダイナミックにレンダリングします。流体シミュレーションにおいては、3つの椅子の特徴的な部位にフォーカスし、その周囲の流体の振る舞いを二次元平面上で計算しています。これは、肉眼では捉えられない人体内部の形状をCTで断層撮影するのに近いイメージであり、椅子の周りの複雑な乱流形状を平面で切り取り直感的に捉えようとしたものです。",
      "ビジュアライゼーションには2つのモードが用意されています。Airモードは、白い背景に細やかなパーティクルを表示することで、家具の周りの空気の流れを表現しています。椅子が作り出す流れや淀み、そして家具のフォルムへの多様な解釈を引き出すために、流体の粘性とタイムステップは多様な値に変化します。Stellarモードは、黒い背景に青く発光するパーティクルを用いることで、椅子が作り出す流れの小宇宙を表現しています。両方のモードにおいて、パーティクルは場の速度と密度に応じて彩色され、流れのパターンの生態系を生き生きと映し出します。",
      "デザイン模型とリアルタイム映像を一体化したこのインスタレーションは、20世紀工業デザインの価値と魅力を、科学の力を用いて再解釈する新しい方法論の提案でもあります。流体の映像に身を任せるうちに、鑑賞者の目は、まえから存在していたのであろうが、感覚が捉えきれなかった椅子の細部を拾い始めます。同時に、curve, lattice, surface といった造形的な特徴は、周囲の空間の流れのパターンにも鮮明に伝えられていることに気付くのです。 ",
    ],
    imgs: [
      {
        src: "./img/work-inner/furnished/furnished_1.jpg",
        caption: "Photo: Ryuichi Maruo",
      },
      {
        src: "./img/work-inner/furnished/furnished_2.jpg",
        caption: "Photo: Ryuichi Maruo",
      },
      {
        src: "./img/work-inner/furnished/furnished_3.jpg",
        caption: "Photo: Ryuichi Maruo",
      },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Artist : AKIRA WAKITA",
          "Excerpt Movie Direction : KOHEI TSUJI",
          "Documentary Direction: TAKAHIRO NIIBE",
          "Commissioned by AnyTokyo 2014 with the support of Sony and Vitra & Artek.",
        ],
        ps_jp: [
          "アーティスト : 脇田玲",
          "ショートムービー：辻航平",
          "ドキュメンタリー：新部貴弘",
          "ディスプレイ協力 : Sony",
          "ミニチュアチェア協力 : Vitra & Artek",
        ],
      },
      {
        title_en: "EXHIBITION / SCREENING",
        title_jp: "展示 / スクリーニング",
        ps_en: [
          "- Moths, Crabs, Fluids, 22 Oct. - 30 Nov. 2016. Griffin Art Space, Warsaw",
          "- Best of Art and Science, European Forum Alpbach, 25 Aug. 2016, Alpbach. ",
          "- Eco Expanded City, 13 May - 3 July 2016, WRO Art Center, Wrocław. ",
          "- Technarte, 19 - 20 May 2016, Bizkaia Aretoa, Bilbao. ",
          "- SIGGRAPH Asia 2015, Art Gallery, 3-5 Nov. 2015, Kobe Convention Center, Kobe. ",
          "- Elements of Art and Science, 3 Sep - 31 Dec. 2015, Ars Electronica Center, Linz.",
          "- Ars Electronica Animation Festival, 3-7 Sep. 2015, Central, Linz. ",
          "- AnyTokyo 2014, 25 Oct. - 3 Nov. 2014, Zojoji, Tokyo. ",
        ],
        ps_jp: [
          "- Moths, crabs, fluids, Griffin Art Space, ワルシャワ, 2016/10/22 - 11/30.",
          "- Best of Art and Science, European Forum Alpbach, アルプバッハ, 2016/8/25.",
          "- Eco Expanded City 展, WRO Art Center, ブロツワフ, 2016/5/13〜7/3.",
          "- Technarte, Bizkaia Aretoa, ビルバオ, 2016/5/19〜20.",
          "- SIGGRAPH Asia 2015, Art Gallery, 神戸国際展示場, 2015/11/3〜5.",
          "- Elements of Art and Science 展, Ars Electronica Center, リンツ, 2015/9/3〜12/31",
          "- Ars Electronica Animation Festival, Central, リンツ, 2015/9/3〜7.",
          "- AnyTokyo 2014, 増上寺, 2014/10/25〜11/3.",
        ],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "- Elements of Art and Science",
          href: "http://www.aec.at/postcity/en/elements/",
        },
        {
          label: "- Ars Electronica Animation Festival",
          href: "http://www.aec.at/postcity/files/2015/08/Animationsfestival2015.pdf",
        },
        {
          label: "- AnyTokyo 2014",
          href: "http://anytokyo.com/2014/",
        },
      ],
      urls_jp: [
        {
          label: "- Elements of Art and Science",
          href: "http://www.aec.at/postcity/en/elements/",
        },
        {
          label: "- Ars Electronica Animation Festival",
          href: "http://www.aec.at/postcity/files/2015/08/Animationsfestival2015.pdf",
        },
        {
          label: "- AnyTokyo 2014",
          href: "http://anytokyo.com/2014/",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  flora: {
    title: {
      title: "FLORA (2015)",
      keys: [
        "Realtime Visual Installation",
        "3ch Full HD Displays",
        "Custom Fluid Dynamics Software",
      ],
      span: "2015",
      bg_src: "./img/work/flora_thum_2.png",
    },
    intro_en: [
      "FLORA is a visual art work that focuses on the invisible relationship between vegetation and air. This curious combination of the familiar product of nature, vegetation, and the high-level technology of computational fluid dynamics represents the magnificent aerodynamics of the plant form. It also allows the viewer to experience the life, aroma, and aura of plants integrally using all five senses.",
    ],
    intro_jp: [
      "FLORAは植物と空気のインヴィジブルな関係性に着目したヴィジュアライゼーションです。植物という身近な自然物と数値流体力学というハイテクノロジーの不思議な組み合わせは、植物のかたちの優れた空気力学的特性(Aerodynamics)をあらわにすると同時に、草花の生命、香り、オーラが一体となった新しい五感体験を提供します。",
    ],
    videos: ["https://player.vimeo.com/video/129108352"],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "FLORA is a visual art work that focuses on the invisible relationship between vegetation and air. FLORA is the name of the Roman goddess of flowers and abundance, and it also refers to the whole plants of a particular region. This is a custom-made work prepared for the opening party of “amu,” the creative space of AZ Holdings, inc. Vegetation is one of the motifs used to symbolize amu and the AZ group. Just as flowers and grasses grow, and trees take roots, to form forests teeming with diverse life, the AZ group will grow as an ecosystem rich in diversity, creating organic communication with customers and people involved with us. ",
      "The design is the result of an impromptu overnight experiment, in which flowers were integrated with real-time video. Specifically, a beautiful flower arrangement coordinated by Kusakanmuri, the AZ group flower shop established as an annex to amu, was marvelously combined with a set of fluid dynamics software, which was developed by Akira Wakita over a two years’ period. Three beautiful flower arrangement silhouettes were inputted into simulation software that conducts high-speed calculation of a fluid thermal flow field. This enabled the visualization of the airflow around flower arrangement as realtime images into a large display set in the background. This curious combination of the familiar product of nature, vegetation, and the high-level technology of computational fluid dynamics represents the magnificent aerodynamics of the plant form. It also allows the viewer to experience the life, aroma, and aura of plants integrally using all five senses.",
    ],
    concept_ps_jp: [
      "FLORAは植物と空気のインヴィジブルな関係性に着目したヴィジュアライゼーションです。FLORAという言葉はローマ神話に登場する花と豊穣の神の意であり、ある領域に生育する植物の総体（植物相）の意でもあります。この作品はAZホールディングスのクリエイティブスペース「amu」のオープニングパーティのためにカスタムメイドされました。植物はamuとAZグループを象徴するモチーフのひとつです。ちょうど草花が生い茂り、木々が根をはり、多様な生命に満ちた森ができていくように、AZグループが、顧客や関係者の方々との有機的なコミュニケーションを生成しながら、多様性を蓄えた生態系として成長していくイメージを重ねています。 ",
      "amuに併設するAZグループのフラワーショップkusakanmuriがコーディネートした美しいフラワーアレンジメントと、脇田玲が2年間の歳月をかけて開発した流体解析ソフトウェア群との不思議な組み合わせにより、草花とリアルタイム映像を一体化させた一夜限りの即興的な試みが実現しました。3つの美しいフラワーアレンジメントのシルエットは流体の熱流動場を高速計算するシミュレーションソフトウェアに入力され、背後に設置された大型ディスプレイに解析された空気の流れが可視化されます。植物という身近な自然物と数値流体力学というハイテクノロジーの不思議な組み合わせは、植物のかたちの優れた空気力学的特性(Aerodynamics)をあらわにすると同時に、草花の生命、香り、オーラが一体となった新しい五感体験を提供します。",
    ],
    imgs: [
      { src: "./img/work-inner/flora/snap_0.jpg" },
      { src: "./img/work-inner/flora/snap_1.jpg" },
      { src: "./img/work-inner/flora/snap_4.jpg" },
      { src: "./img/work-inner/flora/snap_5.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Concept / Fluid Simulation : AKIRA WAKITA",
          "Flower Arrangement : KUSAKANMURI",
        ],
        ps_jp: [
          "コンセプト / 流体シミュレーション : 脇田 玲",
          "フラワーアレンジメント : KUSAKANMURI",
        ],
      },
      {
        title_en: "EXHIBITION",
        title_jp: "展示",
        ps_en: [
          "- Commissioned by AZ Holdings,inc.",
          "- Exhibited at amu, Tokyo, Jan.30,2015.",
        ],
        ps_jp: [
          "- クライアント：AZ Holdings",
          "- クリエイティブスペース amu にて展示 (2015年1月30日)",
        ],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "http://www.az-hd.co.jp",
          href: "http://www.az-hd.co.jp",
        },
        {
          label: "http://www.a-m-u.jp",
          href: "http://www.a-m-u.jp",
        },
        {
          label: "Sound: Go Inward by General Fuzz",
          href: "https://www.jamendo.com/en/track/377456/go-inward",
        },
      ],
      urls_jp: [
        {
          label: "http://www.az-hd.co.jp",
          href: "http://www.az-hd.co.jp",
        },
        {
          label: "http://www.a-m-u.jp",
          href: "http://www.a-m-u.jp",
        },
        {
          label: "Sound: Go Inward by General Fuzz",
          href: "https://www.jamendo.com/en/track/377456/go-inward",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  fina: {
    title: {
      title: "FINA",
      keys: ["Automotive UI", "Original In-car System"],
      span: "2015",
      bg_src: "./img/work/fina_thum.jpg",
    },
    intro_en: [
      "FINA (Fluid-HMI Inspired by Nature) is aimed to intuitively transfer the environmental information which “the car is sensing”. FINA maps the information on the driver’s body especially on the upper limb where it is directly associated with steering gear.",
    ],
    intro_jp: [
      "FINA (Fluid-HMI Inspired by NAture) は、ドライバーの身体、特にステアリングと直結する上肢に対して情報をマッピングすることで「クルマが感じているであろう」環境情報をドライバーに直感的に伝えることを目指したHMI(Human Machine Interface)です。",
    ],
    videos: ["https://player.vimeo.com/video/135181161"],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "FINA (Fluid-HMI Inspired by Nature) is aimed to intuitively transfer the　environmental information which “the car is sensing”. FINA maps the information on the driver’s body especially on the upper limb where it is directly associated with steering gear. Generally, HMI(Human Machine Interface) is aimed to accelerate the communication between different kinds such as human vs. machine. In most cases, the approach taken is demanding the machine to send out human language message (written or in audio form). But it has constructed homage relationship in a sense. What we aimed to accomplish in this project is an organic synchronicity between both human and the car body by transmitting organic image. It means to recognize car as a part of body image (spatial self body image) as well as to embody the scale, the dimension of a car in much deeper level. ",
      "To achieve this aim, the design team has set tasks in 4 specific developmental levels. 1) To convert the car body’s environmental information into organic, biological images and directly project over human body. 2) The images that is being projected is not explicit information such as with written words or numbers. It should dynamically reflect changes in outer field. 3) To create images, which directly inspire body sensation, we use real-time image based on physics such as fluid simulation and particle system. 4) By sensing the driver’s position, we compensate the projected image dynamically. ",
      "Using these approaches, we could rehearse the sense of a vehicle width sensibly and effectively. It has also been revealed that there are lots of practical scenarios that could be developed from this study such as inducing the speed and steering gear. By introducing “The bio inspired screen language” and “The human body as material” for car design, we believe that we could sublimate driving into more smooth and elegant transfer. FINA is a first prototype step to accomplish this goal. By repeating the steps of assessing the system and redesigning, we hope to improve HMI into more practical version.",
      "Akira Wakita",
    ],
    concept_ps_jp: [
      "FINA(Fluid-HMI Inspired by NAture)は、ドライバーの身体、特にステアリングと直結する上肢に対して情報をマッピングすることで「クルマが感じているであろう」環境情報をドライバーに直感的に伝えることを目指したHMI(Human Machine Interface)です。 一般的に、HMIは人間-対-機械という異質なもの同士の対話の円滑化を目的としています。多くの場合、機械に人間の自然言語（文字や音声）を話すように要求するアプローチが採用されており、ある種、主従関係とも言えるデザインが進められています。一方、本プロジェクトで目指したものは、映像という感覚的な言語を介した、車体と人間、双方の身体の有機的なシンクロニシティです。それはボディ・イメージ（自己の身体の空間的な像）の一部としてクルマを認識することであり、車体のスケールやディメンジョンをより深いレベルで身体化することでもあります。 ",
      "この目的を実現するために、デザインチームは以下の4つの具体的な開発課題を設定しました。 1) 車体の環境情報を有機的で生物的な映像に変換し、それを身体に直接投影する。2) 投影する映像は、文字や数値などの明示的な情報ではなく、外部の場(Field)の変化をダイナミックに反映した映像とする。3) 身体感覚に直接訴える映像を実現するために、流体シミュレーションやパーティクルシステムなどの物理学に基づくリアルタイム映像を用いる。4) ドライバーの姿勢をセンシングし、投影画像を動的に補正する。",
      "このアプローチにより、車幅感覚を感覚的かつ効果的に習熟させたり、速度や操舵を誘導するといった実用的なシナリオを多く展開できることが明らかになりました。 「自然を模倣した映像言語」と「身体というマテリアル」をクルマのデザインに導入することで、運転をより滑らかで優美な移動へと昇華できると我々は信じています。FINAはこの目的達成に向けての第一歩となるプロトタイプであり、システムの評価とリ・デザインを繰り返しながら、実用性の高いHMIへとバージョンアップさせたいと考えています。",
      "脇田玲",
    ],
    imgs: [
      { src: "./img/work-inner/fina/fina_1.jpg" },
      { src: "./img/work-inner/fina/fina_2.jpg" },
      { src: "./img/work-inner/fina/fina_3.jpg" },
    ],
    options: [
      {
        title_en: "DESIGN AND DEVELOPMENT",
        title_jp: "DESIGN AND DEVELOPMENT",
        ps_en: [
          "TOYOTA INFOTECHNOLOGY CENTER",
          "KEIO UNIVERSITY SFC AKIRA WAKITA LAB.",
        ],
        ps_jp: ["トヨタIT開発センター + 慶應義塾大学SFC 脇田玲研究室"],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "- FINA - Fluid HMI Inspired by Nature",
          href: "https://vimeo.com/135181161",
        },
      ],
      urls_jp: [
        {
          label: "- FINA - Fluid HMI Inspired by Nature",
          href: "https://vimeo.com/135181161",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  unda: {
    title: {
      title: "UNDA",
      keys: [
        "Automotive UI Concept",
        "Soft Robotics / Operation Language",
        "Material Computing",
      ],
      span: "2013",
      bg_src: "./img/work/unda_thum.jpg",
    },
    intro_en: [
      'UNDA (Latin for "wave") is an organic interface that was born through collaboration between Toyota InfoTechnology Center and Keio University’s Wakita Lab. As a result of the serious pursuit of intuitiveness for an in-car interface, we have envisioned a sensuous operation surface that organically combines life-like transformation and elastic property. UNDA has been prototyped as one example of this concept. The biggest challenge in this project was the realization of the "undulating concept" for a next-generation operation surface that synchronizes the wavelengths of the user and the machine. ',
    ],
    intro_jp: [
      "ラテン語で「波」を意味する名前が付けられたこの有機的なインターフェイスは、トヨタIT開発センターと慶應義塾大学脇田研究室との共同研究の中から生まれました。我々は、自動車インターフェイスの直感性を真摯に追求した結果、生物的な変形としなやかな素材性が有機的に連動したセンシュアスな操作曲面というビジョンに逢着しました。その一事例としてプロトタイピングされたのがUNDAです。このプロジェクトで我々が目指したのは、ユーザの波長とマシンの波長がシンクロする次世代のオペレーション -Undulating Concept- の具現化です。 ",
    ],
    videos: ["https://player.vimeo.com/video/79174492"],
    conceptTitle: "Design Detail",
    concept_ps_en: [
      "The soft outer skin that covers the top face of UNDA generates an extraordinary variety of surface shapes through the coordination of internal actuators. The shape, motion, and light emissions of the surface work as a kinetic display, which presents a variety of information. The user interacts with UNDA by making full use of not only their visual sense but also their haptic sense and kinesthesia. Each of 12 elevating buttons, to which unique functions are attached, is lifted when it is available, based on the context. It is also possible to generate a large button by operating multiple buttons simultaneously. The soft skin-like material that covers the surface allows various operations such as pushing, tracing, pinching, or sweeping.",
    ],
    concept_ps_jp: [
      "UNDAの上面を覆う人肌のように柔らかな外皮は、内包されたアクチュエータの動作と連動して驚くほど多彩な曲面形状を生成します。曲面の形状／動き／発光は多様な情報を提示するキネティックなディスプレイになっており、UNDAのユーザは視覚のみならず触覚や筋感覚を駆使してマシンと対話することになります。12個の昇降するボタンにはそれぞれに独立した機能が付与されており、コンテクストに応じて利用可能なものだけが隆起します。複数のボタンが連携して同時に動くことで、一塊の大きなボタンを生成することも可能です。人肌のように柔らかな素材は、押す／軌跡をたどる／つまむ／手の平で掃くなどの多様な操作言語をユーザにアフォードします。",
    ],
    imgs: [
      { src: "./img/work-inner/unda/unda_1.jpg" },
      { src: "./img/work-inner/unda/unda_2.jpg" },
      { src: "./img/work-inner/unda/unda_3.jpg" },
      { src: "./img/work-inner/unda/unda_4.jpg" },
      { src: "./img/work-inner/unda/unda_5.jpg" },
      { src: "./img/work-inner/unda/unda_6.jpg" },
      { src: "./img/work-inner/unda/unda_7.jpg" },
      { src: "./img/work-inner/unda/unda_8.jpg" },
      { src: "./img/work-inner/unda/unda_9.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Concept and Direction: AKIRA WAKITA",
          "Art Direction: KOHEI TSUJI",
          "Technical Direction: HISAKAZU HADA",
          "Hardware Development: TATSUYA KAIHO",
          "Project Management : SAYAKA YOSHIZU",
          "Technical Advisor : CHIHIRO SANNOMIYA",
        ],
        ps_jp: [
          "コンセプト / ディレクション : 脇田 玲",
          "アートディレクション : 辻 航平",
          "技術ディレクション : 羽田久一",
          "ハードウェア開発 : 海宝竜也",
          "プロジェクトマネジメント : 吉津沙耶香",
          "技術アドバイザ : 三宮千尋",
        ],
      },
    ],
    link: {
      label_en: "PRESS",
      label_jp: "記事掲載",
      urls_en: [
        {
          label: "- WIRED JAPAN, UNDA , 2014/2/25",
          href: "http://wired.jp/2014/02/25/keio-wakita-unda/",
        },
      ],
      urls_jp: [
        {
          label:
            "- WIRED JAPAN, 「クルマのUI」を考える時代へ：慶応大学脇田研究室のプロトタイプ「UNDA」, 2014/2/25",
          href: "http://wired.jp/2014/02/25/keio-wakita-unda/",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
  blob: {
    title: {
      title: "BLOB MOTILITY",
      keys: [
        "Material Installation",
        "Custom Materials / Kinetic Interface Design / Design Tool",
      ],
      span: "2010",
      bg_src: "./img/work/blob.png",
    },
    intro_en: [
      "BLOB MOTILITY is an attempt of actuated shape display using fluid material. We have developed an environment where we can program the shape of gel geometrically and topologically using our unique magnetic fluid called pBlob. This enables us to experience organic shape changes in real space, like a metaball in the CG world. The control hardware is composed of electromagnets arranged in the honeycomb structure and their control circuits. On/off control and PWM control vary the blob shapes and realize animations. We describe the method of blob creation, details of the mechanism and the language for transformation control, and propose some applications we are developing at present. ",
    ],
    intro_jp: [
      "BLOB MOTILITY は粘性流体を用いた形状ディスプレイの試みです。pBlobと呼ばれる独自生成したゲル状の磁性流体を用いて、幾何的かつ位相的にその形態をプログラムできる環境を構築しました。ユーザはCGにおけるメタボールのように有機的な形状の変化を実空間で体験することができます。制御ハードウェアはハニカム構造に配置された64個の電磁石によって構成されており、これらのON/OFFとPWM制御によってpBlobの多様な変形とアニメーションを実現しています。pBlobの生成方法、メカニズムの詳細、変形の操作言語、この新しい素材を用いたいくつかのアプリケーションも提案しています。",
    ],
    videos: ["https://www.youtube.com/embed/oieLzWZzU8Y"],
    imgs: [
      { src: "./img/work-inner/blob/thumb_a02_a01.jpg" },
      { src: "./img/work-inner/blob/blob_2.jpg" },
      { src: "./img/work-inner/blob/blob_3.jpg" },
      { src: "./img/work-inner/blob/blob_4.jpg" },
      { src: "./img/work-inner/blob/blob_5.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "Concept and Direction : Akira Wakita",
          "Hardware and Software : Akito Nakano",
          "Blobware : Nobuhiro Kobayashi",
          "Development Assistant : Shozo Totsuka",
          "Technical Support : Yukou Kakizaki",
        ],
        ps_jp: [
          "コンセプト / ディレクション : 脇田玲",
          "ハードウェア / ソフトウェア : 中野亜希人",
          "ブロブウェア：小林展啓",
          "開発アシスタント：戸塚翔三",
          "技術協力：柿崎勇晃 ",
        ],
      },
      {
        title_en: "EXHIBITION / AWARD",
        title_jp: "展示 / 受賞",
        ps_en: [
          "- Robotinity, Ars Electronica Center, Linz, 2011 - 2015.",
          "- Technarte, Bilbao, 2011.",
          "- Japan Media Arts Festival, Agency for Cultural Affairs, Jury's Selection, 2010.",
        ],
        ps_jp: [
          "- Robotinity, アルス・エレクトロニカ・センター, リンツ, 2011〜2015.",
          "- Technarte, ビルバオ, 2011.",
          "- 第14回 文化庁メディア芸術祭, 審査委員推薦作品, 国立新美術館, 2010.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  fabcell: {
    title: {
      title: "FABCELL",
      keys: [
        "Material Installation",
        "Custom Materials / Wearable Computing / Interior Design / Fashion Design",
      ],
      span: "2006",
      bg_src: "./img/work/fabcell.jpeg",
    },
    intro_en: [
      "A wearable ambient display using non-emissive color-changing textiles. The system consists of textile modules, their controllers and substrate fabric. The textile module is called ”Fabcell” (fabric pixel) and is composed of conductive yarns and liquid crystal ink. Combining fabcells, as if they are used as pixels, produces real-space ambient display. Different from emissive flexible display such as organic EL, dynamic graphics using non-emissive color-changing textiles actualizes hospitable and aesthetic information display, blending in with environment. Our method will be expected to design brand-new communication media intended for fabric artificial materials, used for fashion and interior decoration. ",
    ],
    intro_jp: [
      "Fabcell(Fabric Element)は非発光の変色テキスタイルです。導電性繊維と示温インキによって構成される布型モジュールはピクセルのように組み合わせることで実空間におけるアンビエントディスプレイとして機能します。有機ELなどの発光性のフレキシブルディスプレイと異なり、非発光の変色テキスタイルによる動的なグラフィックスは、環境にとけ込んだ快適で美的な情報呈示を実現します。ファッションやインテリアに用いられる布製の人工物を対象とした新しいコミュニケーションメディアのデザインが期待できます。",
    ],

    videos: ["https://www.youtube.com/embed/kEWdqSsE88s"],
    imgs: [
      { src: "./img/work-inner/fabcell/ex_detail_img6_1.jpg" },
      { src: "./img/work-inner/fabcell/ex_detail_img6_2.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "- Midori Shibutani, Kohei Tsuji, Mariko Higaki, Hisakazu Hada, Akira Wakita",
        ],
        ps_jp: ["- 渋谷 みどり, 辻 航平, 檜垣 万里子, 羽田 久一, 脇田 玲"],
      },
      {
        title_en: "EXHIBITION / AWARD",
        title_jp: "展示 / 受賞",
        ps_en: [
          "- SIGGRAPH 2006, Emerging Technologies, Boston, 2006.",
          "- Interactive Tokyo, Miraikan, 2006.",
          "- INTERIOR LIFESTYLE TOKYO, 2009.",
        ],
        ps_jp: [
          "- SIGGRAPH 2006, Emerging Technologies, ボストン, 2006",
          "- インタラクティブ東京, 日本科学未来館, 2006",
          "- INTERIOR LIFESTYLE TOKYO, 2009",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  alive: {
    title: {
      title: "RYUKYU ALIVE",
      keys: [
        "Web-based 3D Visualization",
        "VRML / Digital Archive / Interface Metaphor",
      ],
      span: "2002",
      bg_src: "./img/work/alive.jpeg",
    },
    intro_en: [
      "Ryukyu ALIVE is an information visualization system of the huge Web Archives named ‘Wonder Okinawa.’ This system renders the total contents of the digital archive in a 3D space. Up-to-minute access to the archive is dynamically visualized by analyzing a user’s access log. By using the metaphor of galaxy, a variety of interactions and visualizations are realized.",
    ],
    intro_jp: [
      "Ryukyu ALIVE is an information visualization system of the huge Web Archives named ‘Wonder Okinawa.’ This system renders the total contents of the digital archive in a 3D space. Up-to-minute access to the archive is dynamically visualized by analyzing a user’s access log. By using the metaphor of galaxy, a variety of interactions and visualizations are realized.",
    ],
    conceptTitle: "Concept Detail",
    concept_ps_en: [
      "The galactic space of Ryukyu ALIVE is constructed as a concentration of many stars (icons). Each icon represents a separate Web page in the digital archives. When a user accesses a certain Web page, the corresponding icon pops out to the outermost circle of the galaxy. Icons of pages with little access will be drawn gradually into the center of the galaxy, and will eventually be absorbed and become invisible. Fluctuation of the galaxy by icon pop-out and absorption represents overall status of the digital archives. The movement of the icons is reflected to the galaxy by analyzing accesses to the Web server 15 minutes before. Thus, ALIVE stands for Access Log Information Visualizing Engine of the digital archives. ",
      "The figure shows the user interface of Ryukyu ALIVE. The screen consists of three windows: 3D window, operation window and overview window. The 3D window shows a galactic space for which the digital archive is mapped three-dimensionally. Users are free to walk around in the galaxy. Moving the mouse cursor onto one of the icons in the galaxy shows the information of the corresponding digital archive in the overview window. Clicking the icon pops up another window for the corresponding digital archive. The operation window provides interesting functions: Seiza (constellation) to show or hide information according to categories, Wakusei(planet) to show all contents in a specific category in another galaxy and time machine to visualize past status of Ryukyu ALIVE. ",
    ],
    concept_ps_jp: [
      "The galactic space of Ryukyu ALIVE is constructed as a concentration of many stars (icons). Each icon represents a separate Web page in the digital archives. When a user accesses a certain Web page, the corresponding icon pops out to the outermost circle of the galaxy. Icons of pages with little access will be drawn gradually into the center of the galaxy, and will eventually be absorbed and become invisible. Fluctuation of the galaxy by icon pop-out and absorption represents overall status of the digital archives. The movement of the icons is reflected to the galaxy by analyzing accesses to the Web server 15 minutes before. Thus, ALIVE stands for Access Log Information Visualizing Engine of the digital archives. ",
      "The figure shows the user interface of Ryukyu ALIVE. The screen consists of three windows: 3D window, operation window and overview window. The 3D window shows a galactic space for which the digital archive is mapped three-dimensionally. Users are free to walk around in the galaxy. Moving the mouse cursor onto one of the icons in the galaxy shows the information of the corresponding digital archive in the overview window. Clicking the icon pops up another window for the corresponding digital archive. The operation window provides interesting functions: Seiza (constellation) to show or hide information according to categories, Wakusei(planet) to show all contents in a specific category in another galaxy and time machine to visualize past status of Ryukyu ALIVE. ",
    ],
    imgs: [
      { src: "./img/work-inner/alive/alive.jpg" },
      { src: "./img/work-inner/alive/gallery03.jpg" },
      { src: "./img/work-inner/alive/ginga_image01.jpg" },
      { src: "./img/work-inner/alive/gallery08.jpg" },
      { src: "./img/work-inner/alive/gallery05.jpg" },
      { src: "./img/work-inner/alive/gallery06.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["RYUKYU ALIVE CONSORTIUM"],
        ps_jp: ["琉球ALIVEコンソーシアム"],
      },
      {
        title_en: "EXHIBITION / AWARD",
        title_jp: "展示 / 受賞",
        ps_en: [
          "- Asia Digital Art Awards, Digital Design Category, Excellence Award, 2003",
          "- SIGGRAPH 2003, Web Graphics (Presentations), 2003",
        ],
        ps_jp: [
          "- アジアデジタルアートアワード, デジタルデザイン部門 優秀賞, 2003",
          "- SIGGRAPH 2003, Web Graphics (Presentations), 2003",
        ],
      },
      {
        title_en: "PUBLICATION",
        title_jp: "出版",
        ps_en: [
          "- WAKITA A. and MATSUMOTO F. Information Visualization with web3D - Spatial Visualization of Human Activity Area and Its Condition- Computer Graphics Vol37, Number3 ACM SIGGRAPH, Aug.2003 29-33. ",
        ],
        ps_jp: [
          "- WAKITA A. and MATSUMOTO F. Information Visualization with web3D - Spatial Visualization of Human Activity Area and Its Condition- Computer Graphics Vol37, Number3 ACM SIGGRAPH, Aug.2003 29-33. ",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  ct: {
    title: {
      title: "CT",
      keys: [
        "Web-based 3D Visualization",
        "Urban Space Design / Interface Metaphor / Space Communication",
      ],
      span: "2000",
      bg_src: "./img/work/ct.png",
    },
    intro_en: [
      "CT, City Tomography, is a project to reconstruct visible or invisible aspects of urban spaces as a three dimensional “information city” and explore it just like a computerized tomography (CT) of the human body. CT will provide information about the city by the way visitors cannot perceive from a physical urban space. It will enhance an overall image of the city through a reciprocal relation between a place and information.",
    ],
    intro_jp: [
      "CT, City Tomography, is a project to reconstruct visible or invisible aspects of urban spaces as a three dimensional “information city” and explore it just like a computerized tomography (CT) of the human body. CT will provide information about the city by the way visitors cannot perceive from a physical urban space. It will enhance an overall image of the city through a reciprocal relation between a place and information.",
    ],
    imgs: [
      { src: "./img/work-inner/ct/ct-ukiyoe-big.jpg" },
      { src: "./img/work-inner/ct/ct2.png" },
      { src: "./img/work-inner/ct/ct-fig1.jpg" },
      { src: "./img/work-inner/ct/ct-fig2.jpg" },
      { src: "./img/work-inner/ct/ct-fig3.jpg" },
      { src: "./img/work-inner/ct/gallery04.jpg" },
      { src: "./img/work-inner/ct/gallery05.jpg" },
      { src: "./img/work-inner/ct/gallery06.jpg" },
      { src: "./img/work-inner/ct/ct-fig7.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: ["Fumio Matsumoto : Direction", "Akira Wakita : Programming"],
        ps_jp: ["松本文夫：ディレクション", "脇田　玲：プログラミング"],
      },
      {
        title_en: "EXHIBITION / AWARD",
        title_jp: "展示 / 受賞",
        ps_en: [
          "- Japan Media Arts Festival, Agency for Cultural Affairs, Jury's Selection, 2001",
          "- SIGGRAPH 2002, Web Graphics, 2002",
          "- SIGGRAPH 2002, Sketches and Applications, 2002",
          "- Graz Biennial on Media + Architecture, Graz, 2001",
          "- cast01, Bonn, 2001",
          "- Sparks Cafe, Roppongi Hills Thinkzone, Tokyo, 2002.",
        ],
        ps_jp: [
          "- 文化庁メディア芸術祭, 審査委員推薦作品, 2001",
          "- SIGGRAPH 2002, Web Graphics, 2002",
          "- SIGGRAPH 2002, Sketches and Applications, 2002",
          "- Graz Biennial on Media + Architecture, Graz, 2001",
          "- cast01, Bonn, 2001",
          "- Sparks Cafe, Roppongi Hills Thinkzone, Tokyo, 2002.",
        ],
      },
    ],
  },
  //-------------------------------------------------------------------
  infotube: {
    title: {
      title: "INFOTUBE",
      keys: [
        "Web-based 3D Visualization",
        "VRML / Urban Space Design / Data Driven Sculpture",
      ],
      span: "1999",
      bg_src: "./img/work/infotube.jpeg",
    },
    intro_en: [
      'INFOTUBE is a web-based project proposing to visualize the existing Motomachi Shopping Street in Yokohama, Japan, as a cyberspace filled with consumer information. Instead of direct "representation" of the real Shopping Street into the 3D space, we choose the way of "visualization" of a space entirely generated from the information itself.INFOTUBE will supply information to visitors in a way that they cannot perceive from the real Shopping Street. It is expected to develop reciprocal actions between the Shopping Street and web pages. ',
    ],
    intro_jp: [
      "このウェブ・プロジェクトでは、元町商店街を消費情報空間として視覚的に表現することを提案している。元町商店街を3次元的に複製するリプレゼンテーション（再現）の方法ではなく、元町に関連する情報そのものを生成源として全く新しい空間表現を提示する ビジュアライゼーション（可視化）の方法が検討された。元町商店街の補足的な情報を提供するのではなく、むしろ現実の商店街では知覚・体験できない方法で情報を提示することによって、商店街とウェブとの新たな相互作用を発生させることを期待しているからである。",
    ],
    imgs: [
      { src: "./img/work-inner/infotube/tube-int.jpg" },
      { src: "./img/work-inner/infotube/tube-multi.jpg" },
      { src: "./img/work-inner/infotube/tube-long.jpg" },
    ],
    options: [
      {
        title_en: "CREDIT",
        title_jp: "クレジット",
        ps_en: [
          "- Fumio Matsumoto : Direction",
          "- Shohei Matsukawa : Modeling",
          "- Akira Wakita : Programming",
        ],
        ps_jp: [
          "- 松本文夫：ディレクション",
          "- 松川昌平：モデリング",
          "- 脇田　玲：プログラミング",
        ],
      },
      {
        title_en: "EXHIBITION / AWARD",
        title_jp: "展示 / 受賞",
        ps_en: [
          "- Nikkei Architecture Digital Design Competition, Japan, 1999, Grand Prix",
          "- Multimedia Grand Prix 2000, Japan, Dec.2000, Information Design Award (Network Division)",
          "- cast01, Germany, Sep. 2001",
          "- Architecture Media Player, Traveling exhibition, Italy, 2000",
          "- Electronic Language International Festival, Sao Paulo, 2000",
          "- European Media Art Festival 2000, Osnabrueck, Germany, 2000",
          "- Sparks Cafe, Roppongi Hills Thinkzone, Tokyo, 2002",
        ],
        ps_jp: [
          "- 日経アーキテクチュア デジタルデザインコンペ, 1999, グランプリ",
          "- マルチメディアグランプリ, 2000, ネットワーク部門 情報デザイン賞",
          "- cast01, ボン, 2001",
          "- Architecture Media Player, Traveling exhibition, イタリア, 2000",
          "- Electronic Language International Festival (FILE), サンパウロ, 2000 ",
          "- European Media Art Festival, オスナブリュック, 2000",
          "- Sparks Cafe, Roppongi Hills Thinkzone, 2002",
        ],
      },
    ],
    link: {
      label_en: "Links",
      label_jp: "関連リンク",
      urls_en: [
        {
          label: "- Project Site",
          href: "http://www.plannet-arch.com/information/tube.htm",
        },
      ],
      urls_jp: [
        {
          label: "- Project Site",
          href: "http://www.plannet-arch.com/information/tube.htm",
        },
      ],
    },
  },
  //-------------------------------------------------------------------
};

interface ITitle {
  title: string;
  keys: string[];
  span: string;
  bg_src: string;
}

interface IImage {
  src: string;
  caption?: string;
}

interface IOption {
  title_en: string;
  title_jp: string;
  ps_en: string[];
  ps_jp: string[];
}

interface ILinkUrl {
  label: string;
  href: string;
}

interface ILink {
  label_en: string;
  label_jp: string;
  urls_en: ILinkUrl[];
  urls_jp: ILinkUrl[];
}

interface IProject {
  title: ITitle;
  intro_en: string[];
  intro_jp: string[];
  videos?: string[];
  conceptTitle?: string;
  concept_ps_en?: string[];
  concept_ps_jp?: string[];
  imgs?: IImage[];
  options?: IOption[];
  link?: ILink;
}

type ProjectsJson = Record<string, IProject>;

function extractYears(str: string): { start: number; end: number } | null {
  const pattern = /(\(\s*(\d{4})(?:\s*-\s*(\d{4}))?\s*\))$/;
  const match = pattern.exec(str);

  if (match) {
    const start = parseInt(match[2], 10);
    if (match[3]) {
      return { start, end: parseInt(match[3], 10) };
    }
    return { start, end: start };
  }

  return null;
}

function getNestedValue(
  obj: unknown,
  keys: string[],
): { exists: boolean; value: unknown } {
  let current: any = obj;

  for (const key of keys) {
    if (!current[key]) {
      return { exists: false, value: undefined };
    }
    current = current[key];
  }
  return { exists: true, value: current };
}

function tryGetField<T>(
  obj: unknown,
  schema: ZodSchema<T>,
  ...keys: string[]
): {
  onExists: (callback: (value: T) => void) => void;
} {
  const result = getNestedValue(obj, keys);
  return {
    onExists: (callback) => {
      if (result.exists) {
        const parseResult = schema.safeParse(result.value);
        if (parseResult.success) {
          callback(parseResult.data);
        } else {
          console.warn(
            `${keys.join(".")}'s data does not confirm to expected type. ${parseResult.error.toString()} ${JSON.stringify(obj)}`,
          );
        }
      }
    },
  };
}

const writes: Promise<void>[] = [];
for (const [key, data] of Object.entries(worksContents)) {
  const project: {
    title: string;
    keywords: string[];
    year: number;
    description_en: string;
    description_jp: string;
    meta_en: string;
    meta_jp: string;
    videos?: string[];
  } = {
    title: "",
    keywords: [],
    year: 0,
    description_en: "",
    description_jp: "",
    meta_en: "",
    meta_jp: "",
  };

  tryGetField(data, z.string(), "title", "title").onExists((value) => {
    const years = extractYears(value);
    if (years) {
      project.year = years.end;
      project.title = value
        .replace(/(\(\s*\d{4}(?:\s*-\s*\d{4})?\s*\))$/, "")
        .trim();
    } else {
      project.title = value;
    }
  });

  tryGetField(data, z.string().array(), "title", "keys").onExists((value) => {
    project.keywords = value;
  });

  tryGetField(data, z.string(), "title", "span").onExists((value) => {
    const parsed = parseInt(value, 10);
    if (project.year && project.year !== parsed) {
      console.warn(
        `Span does not match: ${project.title}: ${project.year} ${value}`,
      );
    } else if (!project.year) {
      project.year = parsed;
    }
  });

  tryGetField(data, z.string().array(), "intro_en").onExists((value) => {
    project.description_en = value.join("\n\n");
  });

  tryGetField(data, z.string().array(), "intro_jp").onExists((value) => {
    project.description_jp = value.join("\n\n");
  });

  tryGetField(data, z.string().array(), "videos").onExists((value) => {
    project.videos = value;
  });

  let meta_en = "";
  let meta_jp = "";

  const optionSchema = z.object({
    title_en: z.string(),
    title_jp: z.string(),
    ps_en: z.string().array(),
    ps_jp: z.string().array(),
  });

  tryGetField(data, optionSchema.array(), "options").onExists((options) => {
    for (const opt of options) {
      meta_en += `## ${opt.title_en}\n\n${opt.ps_en.join("\n\n")}\n\n`;
      meta_jp += `## ${opt.title_jp}\n\n${opt.ps_jp.join("\n\n")}\n\n`;
    }
  });

  const linkSchema = z.object({
    label_en: z.string(),
    label_jp: z.string(),
    urls_en: z.array(z.object({ label: z.string(), href: z.string() })),
    urls_jp: z.array(z.object({ label: z.string(), href: z.string() })),
  });

  tryGetField(data, linkSchema, "link").onExists((link) => {
    meta_en += `## ${link.label_en}\n\n`;
    for (const url of link.urls_en) {
      let lbl = url.label.startsWith("- ") ? url.label.slice(2) : url.label;
      meta_en += `- [${lbl}](${url.href})\n`;
    }
    meta_en += "\n";

    meta_jp += `## ${link.label_jp}\n\n`;
    for (const url of link.urls_jp) {
      let lbl = url.label.startsWith("- ") ? url.label.slice(2) : url.label;
      meta_jp += `- [${lbl}](${url.href})\n`;
    }
    meta_jp += "\n";
  });

  project.meta_en = meta_en.trim();
  project.meta_jp = meta_jp.trim();

  writes.push(
    (async () => {
      await mkdir(`./works/${key}`, { recursive: true });
      const content = dump(project, { lineWidth: -1 }); // lineWidth -1 to avoid wrapping long lines
      await Bun.write(`./works/${key}/index.yaml`, content);
    })(),
  );
}

await Promise.all(writes);
