import roomVanGoghImage from '../assets/images/rooms/room-van-gogh.jpg';
import roomModiglianiImage from '../assets/images/rooms/room-modigliani.jpg';
import roomKissRingImage from '../assets/images/rooms/room-kiss-ring.jpg';
import roomGauguinImage from '../assets/images/rooms/room-gauguin.jpg';
import roomLichtensteinImage from '../assets/images/rooms/room-lichtenstein.jpg';
import roomLautrecImage from '../assets/images/rooms/room-lautrec.jpg';
import roomYumejiImage from '../assets/images/rooms/room-yumeji.jpg';
import roomMiloImage from '../assets/images/rooms/room-milo.jpg';

export type Locale = 'jp' | 'en';

const jpBookingPageContent = {
  hero: {
    title: '宿泊予約',
    subtitle: 'Guest Rooms',
    description: '客室は南向きベランダ付き全８室。各部屋は画家の名前が付けられ、壁に直接描かれた手描き模写の作品が特徴です。ベッド、デスク、寝具、カーテンなど、それぞれ異なるデザインで統一された雰囲気をお楽しみください。',
  },

  rooms: [
    {
      id: 'van-gogh',
      name: 'ゴッホの部屋',
      nameEn: "Van Gogh's Room",
      imageSrc: roomVanGoghImage,
      imageAlt: 'ゴッホの部屋',
      description: 'ゴッホの世界観を再現した部屋。鮮やかな色彩と力強い筆致が特徴的な空間です。',
      capacity: '2名',
      bedType: 'ダブルベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥5,500',
      bookingUrl: 'https://tomaro-plus.com/room-book/648b0def-88f2-4a09-9fcd-228696321370'
    },
    {
      id: 'modigliani',
      name: 'モディリアーニの部屋',
      nameEn: "Modigliani's Room",
      imageSrc: roomModiglianiImage,
      imageAlt: 'モディリアーニの部屋',
      description: '優美で長い首の女性を描くモディリアーニの世界。洗練された雰囲気が漂います。',
      capacity: '2名',
      bedType: 'クイーンベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥4,400',
      bookingUrl: 'https://tomaro-plus.com/room-book/db701a18-dfe3-4c8d-b4bb-7270666de807'
    },
    {
      id: 'kisling',
      name: 'キスリングの部屋',
      nameEn: "Kisling's Room",
      imageSrc: roomKissRingImage,
      imageAlt: 'キスリングの部屋',
      description: '鮮やかな色彩のキスリング。温かみのある明るい空間です。',
      capacity: '2名',
      bedType: 'キングベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥4,400',
      bookingUrl: 'https://tomaro-plus.com/room-book/4dee3e1a-cebc-4a5c-aed7-7d0051c02df2'
    },
    {
      id: 'gauguin',
      name: 'ゴーギャンの部屋',
      nameEn: "Gauguin's Room",
      imageSrc: roomGauguinImage,
      imageAlt: 'ゴーギャンの部屋',
      description: 'タヒチの光と影、ゴーギャンの楽園。南国の雰囲気を感じられる空間です。',
      capacity: '2名',
      bedType: 'ダブルベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥3,900',
      bookingUrl: 'https://tomaro-plus.com/room-book/61dafa24-ec34-44ea-8fd1-6b2b930d6546'
    },
    {
      id: 'lichtenstein',
      name: 'リキテンスタインの部屋',
      nameEn: "Lichtenstein's Room",
      imageSrc: roomLichtensteinImage,
      imageAlt: 'リキテンスタインの部屋',
      description: 'ポップアートの代表、リキテンスタインのデザイン。遊び心溢れる空間です。',
      capacity: '2名',
      bedType: 'クイーンベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥3,700',
      bookingUrl: 'https://tomaro-plus.com/room-book/d9eb5e57-4d0f-4632-ba3d-39e838d2700b'
    },
    {
      id: 'lautrec',
      name: 'ロートレックの部屋',
      nameEn: "Lautrec's Room",
      imageSrc: roomLautrecImage,
      imageAlt: 'ロートレックの部屋',
      description: 'パリの夜を愛したロートレックの世界。華やかな雰囲気が特徴です。',
      capacity: '2名',
      bedType: 'ダブルベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥4,400',
      bookingUrl: 'https://tomaro-plus.com/room-book/31735ba6-c0ef-44eb-91af-408727750c9c'
    },
    {
      id: 'yumeji',
      name: '夢二の部屋',
      nameEn: "Yumeji's Room",
      imageSrc: roomYumejiImage,
      imageAlt: '夢二の部屋',
      description: '大正ロマンの抒情画家、竹久夢二の世界。和の趣が感じられる空間です。',
      capacity: '2名',
      bedType: '畳/ベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥3,900',
      bookingUrl: 'https://tomaro-plus.com/room-book/500c8d57-a0b0-43dd-a4d4-cc317a615d2a'
    },
    {
      id: 'miro',
      name: 'ミロの部屋',
      nameEn: "Miro's Room",
      imageSrc: roomMiloImage,
      imageAlt: 'ミロの部屋',
      description: '自由な線と色彩、ジョアン・ミロの幻想。独創的な空間デザインです。',
      capacity: '2名',
      bedType: 'キングベッド',
      features: ['南向きベランダ', 'シャワー', 'トイレ', '壁画アート'],
      priceFrom: '¥3,900',
      bookingUrl: 'https://tomaro-plus.com/room-book/7ee2006f-29ad-43b5-a791-d2297dc615ed'
    }
  ],

  priceInfo: {
    heading: '宿泊料金（朝食付）',
    description: '各部屋の詳細料金については、予約ボタンからご確認ください。',
    breakfast: 'セルフ朝食（トースト、ゆで卵、挽きたてコーヒー）',
    note: 'シーズンやキャンペーンによって変動する可能性があります。',
    notePrefix: '※',
    priceFromSuffix: '〜'
  },

  checkIn: {
    heading: '無人チェックイン',
    instructionsHeading: 'チェックイン手順',
    methodDescription: '事前精算及び宿泊者登録をお願いしております。',
    instructions: [
      '予約完了後、メールにてチェックイン手順をお送りします',
      '到着前日までに宿泊者情報の登録をお願いします',
      '当日は専用の暗証番号で入館いただけます'
    ]
  },

  faq: {
    heading: '予約前FAQ',
    items: [
      {
        question: 'チェックイン・チェックアウトの時間は？',
        answer: ''
      },
      {
        question: '駐車場はありますか？',
        answer: ''
      },
      {
        question: 'キャンセルポリシーは？',
        answer: ''
      },
      {
        question: '朝食は付いていますか？',
        answer: 'セルフ朝食（トースト、ゆで卵、挽きたてコーヒー）が含まれています。オープンダイニングキッチンで自由にお召し上がりいただけます。'
      },
      {
        question: 'Wi-Fiは利用できますか？',
        answer: ''
      },
      {
        question: 'アメニティは何がありますか？',
        answer: 'エコの観点から、使い捨てアメニティ（歯磨きセット、カミソリなど）は備えておりません。ご自身でお持ちください。'
      }
    ]
  },

  stayRules: {
    heading: '滞在ルール',
    description: '快適な滞在のために、以下のルールをお守りください',
    items: [
      {
        title: '館内土足禁止',
        description: '外からの汚れを防ぐとともに、靴を脱いでくつろいだ気分でお過ごしください。'
      },
      {
        title: '禁煙',
        description: '館内・客室内は全て禁煙です。喫煙は指定の屋外スペースでお願いします。'
      },
      {
        title: 'エコへのご協力',
        description: 'チェックアウトや外出時は冷暖房・照明をオフにしてください。連泊の際、タオルが乾いている場合は交換いたしません。'
      },
      {
        title: '共有スペース',
        description: 'オープンダイニングキッチン、New York BARなどの共有スペースは、他のお客様への配慮をお願いします。'
      },
      {
        title: '静粛時間',
        description: '22:00〜7:00は静粛時間です。他のお客様のご迷惑にならないようご協力ください。'
      }
    ]
  },

  cta: {
    heading: 'お部屋を選んで予約',
    description: '画像をクリックして予約ページへお進みください',
    bookButton: '予約する',
    previousRoomAriaLabel: '前の部屋',
    nextRoomAriaLabel: '次の部屋'
  }
};

export type BookingPageContent = typeof jpBookingPageContent;

const enBookingPageContent: BookingPageContent = {
  hero: {
    title: 'Booking',
    subtitle: 'Guest Rooms',
    description: 'All 8 rooms face south with balconies. Each room is named after a painter and features hand-painted reproductions drawn directly on the walls. Enjoy the unique atmosphere created by coordinated beds, desks, bedding, and curtains.',
  },

  rooms: [
    {
      id: 'van-gogh',
      name: "Van Gogh's Room",
      nameEn: "Van Gogh's Room",
      imageSrc: roomVanGoghImage,
      imageAlt: "Van Gogh's Room",
      description: 'A room recreating Van Gogh\'s world. Characterized by vibrant colors and bold brushstrokes.',
      capacity: '2 Guests',
      bedType: 'Double Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥5,500',
      bookingUrl: 'https://tomaro-plus.com/room-book/648b0def-88f2-4a09-9fcd-228696321370'
    },
    {
      id: 'modigliani',
      name: "Modigliani's Room",
      nameEn: "Modigliani's Room",
      imageSrc: roomModiglianiImage,
      imageAlt: "Modigliani's Room",
      description: 'The world of Modigliani, who painted women with elegant long necks. A refined atmosphere.',
      capacity: '2 Guests',
      bedType: 'Queen Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥4,400',
      bookingUrl: 'https://tomaro-plus.com/room-book/db701a18-dfe3-4c8d-b4bb-7270666de807'
    },
    {
      id: 'kisling',
      name: "Kisling's Room",
      nameEn: "Kisling's Room",
      imageSrc: roomKissRingImage,
      imageAlt: "Kisling's Room",
      description: 'Kisling\'s vivid colors. A warm and bright space.',
      capacity: '2 Guests',
      bedType: 'King Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥4,400',
      bookingUrl: 'https://tomaro-plus.com/room-book/4dee3e1a-cebc-4a5c-aed7-7d0051c02df2'
    },
    {
      id: 'gauguin',
      name: "Gauguin's Room",
      nameEn: "Gauguin's Room",
      imageSrc: roomGauguinImage,
      imageAlt: "Gauguin's Room",
      description: 'Light and shadow of Tahiti, Gauguin\'s paradise. A space with a tropical atmosphere.',
      capacity: '2 Guests',
      bedType: 'Double Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥3,900',
      bookingUrl: 'https://tomaro-plus.com/room-book/61dafa24-ec34-44ea-8fd1-6b2b930d6546'
    },
    {
      id: 'lichtenstein',
      name: "Lichtenstein's Room",
      nameEn: "Lichtenstein's Room",
      imageSrc: roomLichtensteinImage,
      imageAlt: "Lichtenstein's Room",
      description: 'Pop art representative, Lichtenstein design. A playful space.',
      capacity: '2 Guests',
      bedType: 'Queen Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥3,700',
      bookingUrl: 'https://tomaro-plus.com/room-book/d9eb5e57-4d0f-4632-ba3d-39e838d2700b'
    },
    {
      id: 'lautrec',
      name: "Lautrec's Room",
      nameEn: "Lautrec's Room",
      imageSrc: roomLautrecImage,
      imageAlt: "Lautrec's Room",
      description: 'Lautrec\'s world, who loved the Parisian nightlife. A glamorous atmosphere.',
      capacity: '2 Guests',
      bedType: 'Double Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥4,400',
      bookingUrl: 'https://tomaro-plus.com/room-book/31735ba6-c0ef-44eb-91af-408727750c9c'
    },
    {
      id: 'yumeji',
      name: "Yumeji's Room",
      nameEn: "Yumeji's Room",
      imageSrc: roomYumejiImage,
      imageAlt: "Yumeji's Room",
      description: 'The world of Takehisa Yumeji, a lyrical painter of the Taisho romance. A space with Japanese elegance.',
      capacity: '2 Guests',
      bedType: 'Tatami/Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥3,900',
      bookingUrl: 'https://tomaro-plus.com/room-book/500c8d57-a0b0-43dd-a4d4-cc317a615d2a'
    },
    {
      id: 'miro',
      name: "Miro's Room",
      nameEn: "Miro's Room",
      imageSrc: roomMiloImage,
      imageAlt: "Miro's Room",
      description: 'Joan Miro\'s fantasy of free lines and colors. A unique space design.',
      capacity: '2 Guests',
      bedType: 'King Bed',
      features: ['South-facing Balcony', 'Shower', 'Toilet', 'Wall Art'],
      priceFrom: '¥3,900',
      bookingUrl: 'https://tomaro-plus.com/room-book/7ee2006f-29ad-43b5-a791-d2297dc615ed'
    }
  ],

  priceInfo: {
    heading: 'Room Rates (Breakfast Included)',
    description: 'Please check the booking page for detailed rates for each room.',
    breakfast: 'Self-service breakfast (toast, boiled eggs, freshly ground coffee)',
    note: 'Rates may vary depending on season and campaigns.',
    notePrefix: 'Note:',
    priceFromSuffix: '~'
  },

  checkIn: {
    heading: 'Self Check-in',
    instructionsHeading: 'Check-in Steps',
    methodDescription: 'Advance payment and guest registration are required.',
    instructions: [
      'Check-in instructions will be sent via email after booking confirmation',
      'Please register guest information by the day before arrival',
      'You can enter the hotel with a dedicated PIN code on the day'
    ]
  },

  faq: {
    heading: 'Pre-Booking FAQ',
    items: [
      {
        question: 'What are the check-in and check-out times?',
        answer: ''
      },
      {
        question: 'Is parking available?',
        answer: ''
      },
      {
        question: 'What is the cancellation policy?',
        answer: ''
      },
      {
        question: 'Is breakfast included?',
        answer: 'Self-service breakfast (toast, boiled eggs, freshly ground coffee) is included. You can enjoy it freely in the open dining kitchen.'
      },
      {
        question: 'Is Wi-Fi available?',
        answer: ''
      },
      {
        question: 'What amenities are available?',
        answer: 'From an eco perspective, disposable amenities (toothbrush set, razor, etc.) are not provided. Please bring your own.'
      }
    ]
  },

  stayRules: {
    heading: 'Stay Rules',
    description: 'Please follow the rules below for a comfortable stay.',
    items: [
      {
        title: 'Shoes Off Inside',
        description: 'To prevent outside dirt and to relax in a comfortable atmosphere, please remove your shoes.'
      },
      {
        title: 'No Smoking',
        description: 'The entire hotel and all rooms are non-smoking. Please smoke in designated outdoor areas.'
      },
      {
        title: 'Eco Cooperation',
        description: 'Please turn off heating/cooling and lights when checking out or leaving your room. For consecutive stays, towels will not be replaced if dry.'
      },
      {
        title: 'Shared Spaces',
        description: 'Please be considerate of other guests when using shared spaces such as the open dining kitchen and New York BAR.'
      },
      {
        title: 'Quiet Hours',
        description: 'Quiet hours are from 22:00 to 7:00. Please cooperate so as not to disturb other guests.'
      }
    ]
  },

  cta: {
    heading: 'Select Your Room and Book',
    description: 'Click on the image to proceed to the booking page',
    bookButton: 'Book Now',
    previousRoomAriaLabel: 'Previous room',
    nextRoomAriaLabel: 'Next room'
  }
};

export const bookingPageContents: Record<Locale, BookingPageContent> = {
  jp: jpBookingPageContent,
  en: enBookingPageContent
};

export const bookingPageContent = bookingPageContents.jp;
