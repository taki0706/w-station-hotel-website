export type Locale = 'jp' | 'en';

type FeatureImage = {
  src: string;
  alt: string;
};

const sortImageSources = (imageModules: Record<string, string>): string[] => {
  return Object.entries(imageModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .map(([, src]) => src);
};

const withAltLabels = (sources: string[], label: string): FeatureImage[] => {
  return sources.map((src, index) => ({
    src,
    alt: `${label} ${index + 1}`
  }));
};

const featureImageSources = {
  lighting: sortImageSources(
    import.meta.glob(
      '../../assets/reference-images-2026-02-13/by-page/009lightinganddesign/*.{jpg,jpeg,png,webp}',
      { eager: true, import: 'default' }
    ) as Record<string, string>
  ),
  sento: sortImageSources(
    import.meta.glob(
      '../../assets/reference-images-2026-02-13/by-page/010sentopainter/*.{jpg,jpeg,png,webp}',
      { eager: true, import: 'default' }
    ) as Record<string, string>
  ),
  gallery: sortImageSources(
    import.meta.glob(
      '../../assets/reference-images-2026-02-13/by-page/011galleryartworks/*.{jpg,jpeg,png,webp}',
      { eager: true, import: 'default' }
    ) as Record<string, string>
  ),
  dining: sortImageSources(
    import.meta.glob(
      '../../assets/reference-images-2026-02-13/by-page/012opendiningkitchen/*.{jpg,jpeg,png,webp}',
      { eager: true, import: 'default' }
    ) as Record<string, string>
  ),
  bar: sortImageSources(
    import.meta.glob(
      '../../assets/reference-images-2026-02-13/by-page/013newyorkbar/*.{jpg,jpeg,png,webp}',
      { eager: true, import: 'default' }
    ) as Record<string, string>
  )
};

const createFeatureImageSets = (labels: {
  lighting: string;
  sento: string;
  gallery: string;
  dining: string;
  bar: string;
}) => {
  return {
    lighting: withAltLabels(featureImageSources.lighting, labels.lighting),
    sento: withAltLabels(featureImageSources.sento, labels.sento),
    gallery: withAltLabels(featureImageSources.gallery, labels.gallery),
    dining: withAltLabels(featureImageSources.dining, labels.dining),
    bar: withAltLabels(featureImageSources.bar, labels.bar)
  };
};

const jpFeatureImages = createFeatureImageSets({
  lighting: '照明とデザイン',
  sento: '銭湯絵師作品',
  gallery: 'アート作品',
  dining: 'オープン・ダイニングキッチン',
  bar: 'New York BAR'
});

const enFeatureImages = createFeatureImageSets({
  lighting: 'Lighting & Design',
  sento: 'Sento Mural',
  gallery: 'Gallery Artwork',
  dining: 'Open Dining Kitchen',
  bar: 'New York BAR'
});

const jpFeaturePageContent = {
  hero: {
    title: 'Features',
    subtitle: 'W.STATIONならではの魅力',
    description: 'アート、デザイン、そしてくつろぎの空間。W.STATION HOTELの個性豊かな施設とこだわりの空間をご紹介します。'
  },

  lightingSection: {
    id: 'lighting',
    heading: '照明とデザイン',
    subheading: 'こだわりの照明設計',
    description: '館内を彩るこだわりの照明と空間デザイン。それぞれの空間に最適な光を配置し、心地よい雰囲気を演出します。',
    images: jpFeatureImages.lighting,
    features: [
      '各空間に最適な照明設計',
      '温かみのある光で演出する空間',
      'アート作品を引き立てる照明配置'
    ]
  },

  sentoSection: {
    id: 'sento',
    heading: '銭湯絵師・中島盛夫画',
    subheading: '日本に3人しかいない銭湯ペンキ絵師の異色作',
    description: 'ホテル館内には、直接壁面に手描きされた絵画が中島画の他、各客室名となる有名画家の模写が描かれています。',
    images: jpFeatureImages.sento,
    artist: {
      name: '中島盛夫',
      title: '銭湯ペンキ絵師',
      description: '日本に3人しかいない貴重な銭湯ペンキ絵師の一人。伝統的な技法と独創的な発想で、W.STATION HOTELに唯一無二の作品を残しています。',
      website: 'https://www.morionakajima.com/',
      websiteLabel: '作家のウェブサイト →'
    }
  },

  gallerySection: {
    id: 'gallery',
    heading: '画廊&アート作品',
    subheading: '館内全体がギャラリー',
    description: '館内全体がギャラリー。数々のアート作品との出会いが、あなたの滞在をより豊かなものにします。',
    images: jpFeatureImages.gallery,
    highlights: [
      '世界中から集めたアート作品',
      '各客室に描かれた有名画家の模写',
      '館内随所に配置された美術品'
    ]
  },

  diningSection: {
    id: 'dining',
    heading: 'オープン・ダイニングキッチン',
    subheading: '自由に使えるシェアキッチン',
    description: 'コーヒーメーカー（朝食時）及びトースター、大型冷蔵庫、IHクッキングテーブル、電子レンジの他、鍋、フライパン等の調理器具と調味料などご自由にご使用いただけます。',
    images: jpFeatureImages.dining,
    facilities: [
      'コーヒーメーカー（朝食時）',
      'トースター・電子レンジ',
      '大型冷蔵庫',
      'IHクッキングテーブル',
      '調理器具・調味料完備'
    ],
    note: '備付のナイフ、フォークなどカトラリー、食器類は使用後は洗ってもとの場所に戻し、整理整頓にご協力をお願いしております。'
  },

  barSection: {
    id: 'bar',
    heading: 'New York (入浴) BAR',
    subheading: '鉄道好きには最高のCAFE & BAR',
    description: '駅舎や列車をゆっくり眺めてのくつろぎの時間。もちろん入浴も可能ですが外からもまる見えです…笑',
    images: jpFeatureImages.bar,
    features: [
      '駅舎を眺める開放的な空間',
      '鉄道ファンにはたまらないロケーション',
      '会員制の特別な空間'
    ],
    note: '※会員制',
    additionalInfo: '駅舎を眺める開放的なトイレ。外から下半身は見えません‥安心'
  }
};

export type FeaturePageContent = typeof jpFeaturePageContent;

const enFeaturePageContent: FeaturePageContent = {
  hero: {
    title: 'Features',
    subtitle: 'Unique Attractions of W.STATION',
    description: 'Art, design, and spaces for relaxation. Discover the unique facilities and thoughtfully crafted spaces at W.STATION HOTEL.'
  },

  lightingSection: {
    id: 'lighting',
    heading: 'Lighting & Design',
    subheading: 'Thoughtful Lighting Design',
    description: 'Thoughtfully curated lighting and spatial design throughout the hotel. Optimal lighting is placed in each space to create a comfortable atmosphere.',
    images: enFeatureImages.lighting,
    features: [
      'Optimal lighting design for each space',
      'Spaces illuminated with warm light',
      'Lighting arrangement that highlights artworks'
    ]
  },

  sentoSection: {
    id: 'sento',
    heading: 'Sento Mural by Morio Nakajima',
    subheading: 'A Unique Work by One of Only Three Sento Mural Artists in Japan',
    description: 'Inside the hotel, hand-painted murals are drawn directly on the walls, including Nakajima\'s work and reproductions of famous painters that name each guest room.',
    images: enFeatureImages.sento,
    artist: {
      name: 'Morio Nakajima',
      title: 'Sento Mural Artist',
      description: 'One of only three rare sento mural artists in Japan. With traditional techniques and original ideas, he has created a one-of-a-kind work at W.STATION HOTEL.',
      website: 'https://www.morionakajima.com/',
      websiteLabel: 'Visit Artist Website →'
    }
  },

  gallerySection: {
    id: 'gallery',
    heading: 'Gallery & Artworks',
    subheading: 'The Entire Hotel is a Gallery',
    description: 'The entire hotel is a gallery. Encounters with numerous artworks will enrich your stay.',
    images: enFeatureImages.gallery,
    highlights: [
      'Artworks collected from around the world',
      'Famous painter reproductions in each guest room',
      'Art pieces placed throughout the hotel'
    ]
  },

  diningSection: {
    id: 'dining',
    heading: 'Open Dining Kitchen',
    subheading: 'A Shared Kitchen for Your Free Use',
    description: 'Coffee maker (breakfast time), toaster, large refrigerator, IH cooking table, microwave, as well as cookware such as pots and pans, and seasonings are all available for your free use.',
    images: enFeatureImages.dining,
    facilities: [
      'Coffee maker (breakfast time)',
      'Toaster & microwave',
      'Large refrigerator',
      'IH cooking table',
      'Cookware and seasonings provided'
    ],
    note: 'Please wash and return cutlery such as knives and forks, and tableware to their original places after use, and help keep things organized.'
  },

  barSection: {
    id: 'bar',
    heading: 'New York (Bath) BAR',
    subheading: 'A Perfect Cafe & Bar for Railway Enthusiasts',
    description: 'Relax while watching station buildings and trains. Of course, bathing is also possible, but you can be seen from outside... lol',
    images: enFeatureImages.bar,
    features: [
      'An open space overlooking the station',
      'An irresistible location for railway fans',
      'A special members-only space'
    ],
    note: '*Members only',
    additionalInfo: 'An open toilet overlooking the station. Your lower body cannot be seen from outside... rest assured'
  }
};

export const featurePageContents: Record<Locale, FeaturePageContent> = {
  jp: jpFeaturePageContent,
  en: enFeaturePageContent
};

export const featurePageContent = featurePageContents.jp;
