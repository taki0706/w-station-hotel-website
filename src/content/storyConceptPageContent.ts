import storyKenImage from '../assets/images/story/story-ken.jpg';
import storyStayWorkImage from '../assets/images/story/story-stay-work.jpg';
import storyEcoImage from '../assets/images/story/story-eco.jpg';
import storySpaceDesignImage from '../assets/images/story/story-space-design.jpg';

export type Locale = 'jp' | 'en';

const jpStoryConceptPageContent = {
  hero: {
    title: 'Story & Concept',
    subtitle: 'W.STATIONの物語と想い',
    description: '世界を旅した男が辿り着いた、山と海に囲まれた南房総。アート、自然、そして人々が交差する場所として生まれたW.STATION HOTELの世界観をご紹介します。'
  },

  kenSection: {
    id: 'ken',
    heading: '世界のKEN',
    subheading: 'ホテル誕生の物語',
    paragraphs: [
      '設計デザインは2019年建築学科を卒業したての男『世界のKEN』。北極から南極点まで世界150の国々を旅して来た異色の旅行家。',
      'もともと冒険好きで毎年のヒマラヤ山行脚する傍らで世界の砂漠、海と手当たり次第に旅をした。海では潜りもするがサーフィンが大好きだ！',
      '自然ばかりではない。美しい街並、絵画、建築、デザインなどアート好き。',
      '2020年世界はパンデミックへ。男は足止めされ、世界の居場所を失った。そんな時、山と海に近い南房総にセカンドハウスが欲しくなり、2023年自ら建築をデザインし、世界で集めた絵画、美術品、それに遊びごころを詰め込んで出来たのが『W.STATION HOTEL』。'
    ],
    imageSrc: storyKenImage,
    imageAlt: '世界のKEN'
  },

  stayStyleSection: {
    id: 'stay-style',
    heading: 'サーフィン・ワーケーションの過ごし方',
    subheading: 'あなただけの滞在スタイル',
    intro: 'W.STATIONでは、朝はサーフィン、昼はリモートワーク、夜は仲間との団らん。自由な時間の使い方で、充実した滞在を。',
    timeSlots: [
      {
        id: 'morning',
        time: '朝',
        title: '朝の過ごし方',
        description: '晴れやかな朝に海まで散歩。波をチェック。ホテルに戻りオープンダイニングでモーニングコーヒーとトーストを。朝食後、サーフボードを持って海まで直行。人の少ないポイントで良い波を満喫。',
        imageSrc: storyStayWorkImage,
        imageAlt: '朝の過ごし方'
      },
      {
        id: 'afternoon',
        time: '昼',
        title: 'お昼の過ごし方',
        description: '海辺のレストランでトロピカルランチ。ホテルに戻り、ゆっくり昼寝。その後、高速Wifiと快適な作業環境でリモートワーク。',
        imageSrc: storyStayWorkImage,
        imageAlt: 'お昼の過ごし方'
      },
      {
        id: 'evening',
        time: '夜',
        title: '夕方・夜の過ごし方',
        description: '地元の市場まで夕食の食材の買い出し。BBQの準備にワクワク。地元の食材を活かした料理と共に、オープンダイニングで仲間と団らん。',
        imageSrc: storyStayWorkImage,
        imageAlt: '夕方・夜の過ごし方'
      }
    ]
  },

  ecoSection: {
    id: 'eco',
    heading: '地球環境にやさしいエコホテル',
    subheading: 'サステナブルな滞在体験',
    intro: 'W.STATION HOTELは、太陽光のクリーンなエネルギーを活用した自然環境にやさしい革新的なホテルです。',
    imageSrc: storyEcoImage,
    imageAlt: 'エコホテル',

    cleanlinessSection: {
      heading: '日本人の綺麗好き！とエコな取組み',
      points: [
        '客室の掃除は絶対に先客の痕跡を残さないよう「髪の毛一本、糸くず一つ、ワタぼこり一つでも残さないよう」にします。例え見えないシャワー室の排水口までその都度キレイにしています。',
        '館内土足禁止なホテルです。外からの汚れを防ぐとともに靴を脱ぎ、くつろいだ気分に。',
        '館内、客室フローリング。湿気によるカビやダニを防ぎ、絨毯やカーペットでは目立たない床のホコリやチリを取除けます。汚れにも水拭きが容易で清潔です。'
      ]
    },

    ecoInitiativesSection: {
      heading: '地球にやさしく、エコなホテルライフを提唱してます',
      description: 'ベットシーツや枕、布団カバーのアイロン掛け、糊付けなどはエコの観点からしておりません。勿論、洗濯乾燥された清潔なものを提供していますが、自ずと付いたシワはそのままです。さらに連泊の際バスタオルなど、汚れていなく乾いたものがタオルハンガーに掛けられていればお取替えしません。お取替えされたい時はシャワールーム床に置いてください。',
      requests: {
        heading: 'お客様へのお願い',
        items: [
          'チェックアウトや外出時はお部屋の冷暖房、照明はオフに。',
          '歯磨きセット、カミソリなどの使い捨てアメニティは備えておりません。ご自身でお持ちください。'
        ]
      }
    },

    zebSection: {
      heading: 'ZEBとは？',
      description: 'ZEB(Zero Energy Building：ゼロ・エネルギー・ビル)とは、環境にやさしい建物のことです。建物自身で必要なエネルギーを作り出し、使用するエネルギーをできるだけゼロに近づけることを目指しています。',
      benefits: '地球の資源を節約し、温室効果ガスの排出を削減することで、地球温暖化や環境破壊のリスクを低減できます。W.STATION HOTELでは、太陽光のクリーンなエネルギーを使っています。',
      conclusion: '南房総の自然に優しい快適なホテルでサーフィン・ワーケーションを是非お楽しみください。'
    },

    belsSection: {
      heading: 'BELS認証で5つ星を取得！',
      description: '当ホテルでは一次エネルギー消費量を66％削減する設計です。千葉県初のZEB Readyランクのホテルです。',
      ranks: [
        { rank: 'ZEB', criteria: '省エネ率100%' },
        { rank: 'Nearly ZEB', criteria: '省エネ率75~99%' },
        { rank: 'ZEB Ready', criteria: '省エネ率50～74%', current: true },
        { rank: 'ZEB oriented', criteria: '省エネ率30~49％' }
      ]
    }
  },

  spaceDesignSection: {
    id: 'space-design',
    heading: '開放感あふれる空間デザイン',
    subheading: '光と空間の調和',
    description: '透明なガラス壁越しに空まで見渡せる開放設計。自然光を最大限に取り入れた明るく広々とした空間で、心地よい滞在をお約束します。',
    imageSrc: storySpaceDesignImage,
    imageAlt: '空間デザイン'
  },
};

export type StoryConceptPageContent = typeof jpStoryConceptPageContent;

const enStoryConceptPageContent: StoryConceptPageContent = {
  hero: {
    title: 'Story & Concept',
    subtitle: 'The Story and Philosophy of W.STATION',
    description: 'Discover the world of W.STATION HOTEL, born from a world traveler\'s journey to Minami Boso, surrounded by mountains and sea—a place where art, nature, and people intersect.'
  },

  kenSection: {
    id: 'ken',
    heading: 'KEN of the World',
    subheading: 'The Birth Story of the Hotel',
    paragraphs: [
      'The architectural design was created by "KEN of the World," a fresh graduate from architecture school in 2019. He is an extraordinary traveler who has journeyed through 150 countries, from the Arctic to the South Pole.',
      'An adventurer at heart, he trekked the Himalayas annually while traveling through the world\'s deserts and oceans. He loves diving, but surfing is his greatest passion!',
      'It\'s not just nature. He loves beautiful cityscapes, paintings, architecture, and design—an art enthusiast through and through.',
      'In 2020, the world faced a pandemic. The man was grounded, losing his place in the world. During that time, he desired a second home near the mountains and sea in Minami Boso. In 2023, he designed the architecture himself and filled it with paintings, artworks, and playful ideas collected from around the world, creating "W.STATION HOTEL."'
    ],
    imageSrc: storyKenImage,
    imageAlt: 'KEN of the World'
  },

  stayStyleSection: {
    id: 'stay-style',
    heading: 'Surf & Workation Lifestyle',
    subheading: 'Your Unique Stay Style',
    intro: 'At W.STATION, surf in the morning, work remotely in the afternoon, and gather with friends at night. Enjoy a fulfilling stay with the freedom to use your time as you wish.',
    timeSlots: [
      {
        id: 'morning',
        time: 'Morning',
        title: 'How to Spend Your Morning',
        description: 'Take a morning walk to the beach and check the waves. Return to the hotel for morning coffee and toast at the open dining area. After breakfast, grab your surfboard and head straight to the beach. Enjoy great waves at a less crowded spot.',
        imageSrc: storyStayWorkImage,
        imageAlt: 'Morning Activities'
      },
      {
        id: 'afternoon',
        time: 'Afternoon',
        title: 'How to Spend Your Afternoon',
        description: 'Enjoy a tropical lunch at a beachside restaurant. Return to the hotel for a relaxing nap. Afterwards, work remotely with high-speed Wi-Fi in a comfortable environment.',
        imageSrc: storyStayWorkImage,
        imageAlt: 'Afternoon Activities'
      },
      {
        id: 'evening',
        time: 'Evening',
        title: 'How to Spend Your Evening and Night',
        description: 'Shop for dinner ingredients at the local market. Get excited preparing for a BBQ. Enjoy local cuisine and gather with friends at the open dining area.',
        imageSrc: storyStayWorkImage,
        imageAlt: 'Evening Activities'
      }
    ]
  },

  ecoSection: {
    id: 'eco',
    heading: 'Eco-Friendly Hotel',
    subheading: 'Sustainable Stay Experience',
    intro: 'W.STATION HOTEL is an innovative hotel that utilizes clean solar energy, being environmentally friendly.',
    imageSrc: storyEcoImage,
    imageAlt: 'Eco Hotel',

    cleanlinessSection: {
      heading: 'Japanese Cleanliness & Eco Initiatives',
      points: [
        'We clean guest rooms to leave absolutely no trace of previous guests—not a single hair, thread, or speck of dust. We even thoroughly clean the shower drain each time.',
        'Our hotel is shoes-off inside. This prevents outside dirt and allows guests to relax in a comfortable atmosphere.',
        'All hotel and guest room floors are hardwood. This prevents mold and mites caused by humidity and removes dust and dirt that carpets cannot. Stains can be easily wiped clean with water.'
      ]
    },

    ecoInitiativesSection: {
      heading: 'We Promote Eco-Friendly Hotel Life',
      description: 'From an eco perspective, we do not iron or starch bed sheets, pillows, or duvet covers. Of course, we provide clean, washed, and dried items, but natural wrinkles remain. Additionally, for consecutive stays, if bath towels are not dirty and are hanging on the towel rack, we will not replace them. If you would like them replaced, please place them on the shower room floor.',
      requests: {
        heading: 'Requests to Our Guests',
        items: [
          'Please turn off heating/cooling and lights when checking out or leaving your room.',
          'Disposable amenities such as toothbrush sets and razors are not provided. Please bring your own.'
        ]
      }
    },

    zebSection: {
      heading: 'What is ZEB?',
      description: 'ZEB (Zero Energy Building) is an environmentally friendly building. It aims to produce the energy it needs and bring energy consumption as close to zero as possible.',
      benefits: 'By conserving the Earth\'s resources and reducing greenhouse gas emissions, we can reduce the risks of global warming and environmental destruction. W.STATION HOTEL uses clean solar energy.',
      conclusion: 'Please enjoy surfing and workation at our comfortable hotel that is kind to the nature of Minami Boso.'
    },

    belsSection: {
      heading: 'Achieved 5-Star BELS Certification!',
      description: 'Our hotel is designed to reduce primary energy consumption by 66%. It is Chiba Prefecture\'s first ZEB Ready ranked hotel.',
      ranks: [
        { rank: 'ZEB', criteria: '100% energy saving' },
        { rank: 'Nearly ZEB', criteria: '75-99% energy saving' },
        { rank: 'ZEB Ready', criteria: '50-74% energy saving', current: true },
        { rank: 'ZEB oriented', criteria: '30-49% energy saving' }
      ]
    }
  },

  spaceDesignSection: {
    id: 'space-design',
    heading: 'Open Space Design',
    subheading: 'Harmony of Light and Space',
    description: 'An open design where you can see the sky through transparent glass walls. We promise a comfortable stay in bright and spacious areas that maximize natural light.',
    imageSrc: storySpaceDesignImage,
    imageAlt: 'Space Design'
  }
};

export const storyConceptPageContents: Record<Locale, StoryConceptPageContent> = {
  jp: jpStoryConceptPageContent,
  en: enStoryConceptPageContent
};

export const storyConceptPageContent = storyConceptPageContents.jp;
