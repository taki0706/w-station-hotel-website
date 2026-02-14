import heroMainImage from '../assets/images/hero/hero-main.jpg';
import featureLightingImage from '../assets/images/feature/feature-lighting.jpg';
import featureNewYorkBarImage from '../assets/images/feature/feature-new-york-bar.jpg';
import featureOpenDiningImage from '../assets/images/feature/feature-open-dining.jpg';
import featureSentoPaintingImage from '../assets/images/feature/feature-sento-painting.jpg';
import featureGalleryArtImage from '../assets/images/feature/feature-gallery-art.jpg';
import storyKenImage from '../assets/images/story/story-ken.jpg';
import storyStayWorkImage from '../assets/images/story/story-stay-work.jpg';
import storyEcoImage from '../assets/images/story/story-eco.jpg';
import storySpaceDesignImage from '../assets/images/story/story-space-design.jpg';
import roomVanGoghImage from '../assets/images/rooms/room-van-gogh.jpg';
import roomModiglianiImage from '../assets/images/rooms/room-modigliani.jpg';
import roomKissRingImage from '../assets/images/rooms/room-kiss-ring.jpg';
import roomGauguinImage from '../assets/images/rooms/room-gauguin.jpg';
import roomLichtensteinImage from '../assets/images/rooms/room-lichtenstein.jpg';
import roomLautrecImage from '../assets/images/rooms/room-lautrec.jpg';
import roomYumejiImage from '../assets/images/rooms/room-yumeji.jpg';
import roomMiloImage from '../assets/images/rooms/room-milo.jpg';

export const siteContent = {
    brand: {
        short: 'W.STATION',
        full: 'W.STATION HOTEL'
    },
    navigation: {
        storyConcept: 'Story & Concept',
        rooms: 'Rooms',
        feature: 'Feature',
        access: 'Access',
        language: 'JP / EN',
        booking: 'BOOK NOW'
    },
    hero: {
        imageSrc: heroMainImage,
        tagline: 'Station Front x Art x Surf & Work x ZEB',
        titleTop: 'W.STATION',
        titleBottom: 'HOTEL',
        cta: 'CHECK AVAILABILITY',
    },
    storyConcept: {
        heading: 'Story & Concept',
        introLine1: 'ただのホテルではない。',
        introLine2: 'アート、自然、そして人々が交差する場所。',
        introLine3: 'W.STATIONの世界観を感じてください。',
        kenImageSrc: storyKenImage,
        kenImageAlt: '世界のKEN',
        kenHeading: '世界のKEN',
        kenDescriptionLine1: '設計デザインは2019年建築学科を卒業したての「世界のKEN」。',
        kenDescriptionLine2: '北極から南極点まで世界150の国々を旅して来た異色の旅行家。',
        kenDescriptionLine3: '世界で集めた絵画、美術品、それに遊びごころを詰め込んで出来たのが「W.STATION HOTEL」。',
        readStory: 'ストーリーを読む →',
        cards: {
            stayWork: {
                imageSrc: storyStayWorkImage,
                imageAlt: 'Concept',
                title: 'コンセプト',
                subtitle: '朝はサーフィン、昼は高速Wi-Fiでリモートワーク'
            },
            eco: {
                imageSrc: storyEcoImage,
                imageAlt: 'Eco Friendly',
                title: '地球環境にやさしいエコホテル',
                subtitle: '一次エネルギー消費量66%削減のZEB Ready設計'
            },
            space: {
                imageSrc: storySpaceDesignImage,
                imageAlt: 'Space Design',
                title: '開放感あふれる空間デザイン',
                subtitle: '透明なガラス壁越しに空まで見渡せる開放設計'
            }
        }
    },
    rooms: {
        heading: 'Guest Rooms',
        intro: '客室名は画家の名前が付けられ、各画家の作品(手描模写)が壁に直接描かれています。また壁画に合わせベット、デスク、寝具、カーテンなどデザインの違った雰囲気の部屋となっています。',
        viewAll: 'VIEW ALL ROOMS',
        items: [
            {
                id: 'van-gogh',
                imageSrc: roomVanGoghImage,
                title: "ゴッホの部屋",
                subtitle: '2 Guests • Double Bed',
                price: '¥5,500~',
                details: 'Details',
                description: 'ゴッホの世界観を再現。'
            },
            {
                id: 'Modigliani',
                imageSrc: roomModiglianiImage,
                title: "モディリアーニの部屋",
                subtitle: '2 Guests • Queen Bed',
                price: '¥4,400~',
                details: 'Details',
                description: '優美で長い首の女性を描くモディリアーニの世界。'
            },
            {
                id: 'kiss-ring',
                imageSrc: roomKissRingImage,
                title: "キスリングの部屋",
                subtitle: '2 Guests • King Bed',
                price: '¥4,400~',
                details: 'Details',
                description: '鮮やかな色彩のキスリング。'
            },
            {
                id: 'Gauguin',
                imageSrc: roomGauguinImage,
                title: "ゴーギャンの部屋",
                subtitle: '2 Guests • Double Bed',
                price: '¥3,900~',
                details: 'Details',
                description: 'タヒチの光と影、ゴーギャンの楽園。'
            },
            {
                id: 'lichtenstein',
                imageSrc: roomLichtensteinImage,
                title: "リキテンスタインの部屋",
                subtitle: '2 Guests • Queen Bed',
                price: '¥3,700~',
                details: 'Details',
                description: 'ポップアートの代表、リキテンスタインのデザイン。'
            },
            {
                id: 'lautrec',
                imageSrc: roomLautrecImage,
                title: "ロートレックの部屋",
                subtitle: '2 Guests • Double Bed',
                price: '¥4,400~',
                details: 'Details',
                description: 'パリの夜を愛したロートレックの世界。'
            },
            {
                id: 'Yumeji',
                imageSrc: roomYumejiImage,
                title: "夢二の部屋",
                subtitle: '2 Guests • Tatami/Bed',
                price: '¥3,900~',
                details: 'Details',
                description: '大正ロマンの抒情画家、竹久夢二の世界。'
            },
            {
                id: 'milo',
                imageSrc: roomMiloImage,
                title: "ミロの部屋",
                subtitle: '2 Guests • King Bed',
                price: '¥3,900~',
                details: 'Details',
                description: '自由な線と色彩、ジョアン・ミロの幻想。'
            }
        ]
    },
    feature: {
        heading: 'Features',
        description: 'ビル運営のすべてを、ひとつのOSで。',
        viewAll: 'VIEW ALL FEATURES',
        items: {
            lighting: {
                imageSrc: featureLightingImage,
                imageAlt: 'Lighting',
                title: '照明とデザイン',
                description: '館内を彩るこだわりの照明と空間デザイン。'
            },
            bar: {
                imageSrc: featureNewYorkBarImage,
                imageAlt: 'New York Bar',
                title: 'New York (入浴) BAR',
                description: '鉄道好きには最高のCAFE & BAR。駅舎や列車をゆっくり眺めてのくつろぎの時間。'
            },
            dining: {
                imageSrc: featureOpenDiningImage,
                imageAlt: 'Dining',
                title: 'オープン・ダイニングキッチン',
                description: '調理器具と調味料完備。自由にご利用いただけるシェアキッチン。'
            },
            sento: {
                imageSrc: featureSentoPaintingImage,
                imageAlt: 'Sento Art',
                title: '銭湯絵師・中島盛夫画',
                description: '日本に3人しかいない銭湯ペンキ絵師・中島盛夫氏のユニークな作品。'
            },
            art: {
                imageSrc: featureGalleryArtImage,
                imageAlt: 'Gallery',
                title: '画廊&アート作品',
                description: '館内全体がギャラリー。数々のアート作品との出会い。'
            }
        }
    },
    footer: {
        descriptionLine1: 'Where your journey becomes a story.',
        descriptionLine2: 'Experience the art of stay.',
        navigationHeading: 'NAVIGATION',
        contactHeading: 'CONTACT',
        phone: '080-5520-1173',
        email: 'info@w-station-hotel.com',
        copyright: 'All rights reserved.'
    },
    pages: {
        story: 'Story & Concept Page (Coming Soon)',
        feature: 'Feature Page (Coming Soon)',
        rooms: 'Rooms Page (Coming Soon)',
        access: 'Access Page (Coming Soon)',
        booking: 'Booking Page (Coming Soon)'
    }
} as const;
