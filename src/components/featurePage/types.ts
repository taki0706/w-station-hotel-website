export type HeroContent = {
    title: string;
    subtitle: string;
    description: string;
};

export type LightingSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    features: string[];
};

export type SentoSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    artist: {
        name: string;
        title: string;
        description: string;
        website: string;
        websiteLabel: string;
    };
};

export type GallerySectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    highlights: string[];
};

export type DiningSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    facilities: string[];
    note: string;
};

export type BarSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    features: string[];
    note: string;
    additionalInfo: string;
};
