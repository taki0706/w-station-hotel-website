export type HeroContent = {
    title: string;
    subtitle: string;
    description: string;
};

export type FeatureImage = {
    src: string;
    alt: string;
};

export type LightingSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    images: FeatureImage[];
    features: string[];
};

export type SentoSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    images: FeatureImage[];
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
    images: FeatureImage[];
    highlights: string[];
};

export type DiningSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    images: FeatureImage[];
    facilities: string[];
    note: string;
};

export type BarSectionContent = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    images: FeatureImage[];
    features: string[];
    note: string;
    additionalInfo: string;
};
