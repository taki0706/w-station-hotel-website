export type Locale = 'jp' | 'en';

const jpAccessPageContent = {
  hero: {
    title: 'Access',
    subtitle: 'W.STATIONへのアクセス',
    description: 'JR内房線 南三原駅改札を出て目の前。都心からのアクセスも良好です。'
  },

  locationSection: {
    id: 'location',
    heading: '所在地',
    address: {
      postal: '〒299-2713',
      prefecture: '千葉県',
      city: '南房総市',
      street: '和田町松田142',
      landmark: 'JR内房線 南三原駅改札を出て目の前'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.123456789!2d139.123456!3d34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiAxMznCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp'
  },

  transportSection: {
    id: 'transport',
    heading: '交通手段',
    subheading: 'W.STATIONへのアクセス方法',
    methods: [
      {
        id: 'train',
        icon: 'train',
        title: '電車でのアクセス',
        routes: [
          {
            route: '東京駅から',
            detail: 'JR特急わかしお号利用 → 安房鴨川 → JR内房線 南三原駅',
            time: '約2時間20分'
          },
          {
            route: '千葉駅から',
            detail: 'JR内房線快速利用 → 木更津 → 南三原駅',
            time: '約2時間20分'
          }
        ]
      },
      {
        id: 'bus',
        icon: 'bus',
        title: 'バスでのアクセス',
        routes: [
          {
            route: '東京駅/新宿駅から',
            detail: '館山・南房総行き → 館山駅下車',
            time: '約2時間'
          },
          {
            route: '館山駅から',
            detail: 'JR内房線乗換 → 南三原駅',
            time: '約20分'
          }
        ]
      },
      {
        id: 'car',
        icon: 'car',
        title: '車でのアクセス',
        routes: [
          {
            route: '富浦ICから',
            detail: '館山 → 国道128号線',
            time: '約20分'
          },
          {
            route: '君津ICから',
            detail: '県道92号 → 国道465号線 → 国道410号線',
            time: '約60分'
          }
        ]
      }
    ]
  },

  spotsSection: {
    id: 'spots',
    heading: '周辺スポット',
    subheading: 'サーフィン・観光をお楽しみください',
    description: 'W.STATION HOTELの周辺には、サーフポイントや観光スポットが多数あります。',

    surfSpots: {
      heading: 'ホテルから近いサーフポイント',
      spots: [
        { name: '花籠前', access: '徒歩15分 / 貸自転車5分' },
        { name: '白渚', access: '貸自転車10分' },
        { name: 'J\'s前、千歳', access: '車10分' }
      ],
      note: '他、鴨川、御宿、平砂浦などへのアクセスも良好です。'
    },

    touristSpots: {
      heading: '近隣の観光スポット',
      spots: [
        { name: '道の駅 ローズマリー公園', description: '地元の特産品やグルメを楽しめる人気の道の駅' },
        { name: '花嫁街道ハイキングコース', description: '自然豊かなハイキングコース' },
        { name: 'まぼろしの里みよし', description: 'トレッキングに最適な自然スポット' },
        { name: 'ハーブちくら Seaside Garden', description: 'ハーブガーデンと海を楽しめる施設' },
        { name: '千倉オレンジセンター', description: '柑橘類の直売所と体験施設' }
      ]
    }
  }
};

export type AccessPageContent = typeof jpAccessPageContent;

const enAccessPageContent: AccessPageContent = {
  hero: {
    title: 'Access',
    subtitle: 'How to Get to W.STATION',
    description: 'Right in front of Minami-Mihara Station on the JR Uchibo Line. Easy access from central Tokyo.'
  },

  locationSection: {
    id: 'location',
    heading: 'Location',
    address: {
      postal: '〒299-2713',
      prefecture: 'Chiba',
      city: 'Minamiboso',
      street: '142 Matsuda, Wada-cho',
      landmark: 'Right in front of Minami-Mihara Station on the JR Uchibo Line'
    },
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.123456789!2d139.123456!3d34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiAxMznCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp'
  },

  transportSection: {
    id: 'transport',
    heading: 'Transportation',
    subheading: 'How to Access W.STATION',
    methods: [
      {
        id: 'train',
        icon: 'train',
        title: 'By Train',
        routes: [
          {
            route: 'From Tokyo Station',
            detail: 'JR Limited Express Wakashio → Awa-Kamogawa → JR Uchibo Line → Minami-Mihara',
            time: 'Approx. 2 hours 20 minutes'
          },
          {
            route: 'From Chiba Station',
            detail: 'JR Uchibo Line Rapid → Kisarazu → Minami-Mihara',
            time: 'Approx. 2 hours 20 minutes'
          }
        ]
      },
      {
        id: 'bus',
        icon: 'bus',
        title: 'By Bus',
        routes: [
          {
            route: 'From Tokyo/Shinjuku Station',
            detail: 'Tateyama/Minamiboso bound → Tateyama Station',
            time: 'Approx. 2 hours'
          },
          {
            route: 'From Tateyama Station',
            detail: 'Transfer to JR Uchibo Line → Minami-Mihara',
            time: 'Approx. 20 minutes'
          }
        ]
      },
      {
        id: 'car',
        icon: 'car',
        title: 'By Car',
        routes: [
          {
            route: 'From Tomiura IC',
            detail: 'Via Tateyama → Route 128',
            time: 'Approx. 20 minutes'
          },
          {
            route: 'From Kimitsu IC',
            detail: 'Prefectural Road 92 → Route 465 → Route 410',
            time: 'Approx. 60 minutes'
          }
        ]
      }
    ]
  },

  spotsSection: {
    id: 'spots',
    heading: 'Surrounding Spots',
    subheading: 'Enjoy Surfing and Sightseeing',
    description: 'There are many surf spots and tourist attractions around W.STATION HOTEL.',

    surfSpots: {
      heading: 'Nearby Surf Spots',
      spots: [
        { name: 'Hanakago-mae', access: '15 min walk / 5 min by rental bike' },
        { name: 'Shirasuna', access: '10 min by rental bike' },
        { name: 'J\'s-mae, Chitose', access: '10 min by car' }
      ],
      note: 'Also easy access to Kamogawa, Onjuku, Heisaura, and more.'
    },

    touristSpots: {
      heading: 'Nearby Tourist Attractions',
      spots: [
        { name: 'Michi-no-Eki Rosemary Park', description: 'Popular roadside station with local products and cuisine' },
        { name: 'Hanayome Kaido Hiking Course', description: 'Nature-rich hiking trail' },
        { name: 'Maboroshi no Sato Miyoshi', description: 'Natural trekking spot' },
        { name: 'Herb Chikura Seaside Garden', description: 'Herb garden and ocean view facility' },
        { name: 'Chikura Orange Center', description: 'Citrus direct sales and experience facility' }
      ]
    }
  }
};

export const accessPageContents: Record<Locale, AccessPageContent> = {
  jp: jpAccessPageContent,
  en: enAccessPageContent
};

export const accessPageContent = accessPageContents.jp;
