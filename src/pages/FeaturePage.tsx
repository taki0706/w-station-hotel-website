import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { type FeaturePageContent } from '../content/featurePageContent';
import {
    FeaturePageStyles,
    FeatureHeroSection,
    FeatureLightingSection,
    FeatureSentoSection,
    FeatureGallerySection,
    FeatureDiningSection,
    FeatureBarSection
} from '../components/featurePage';

type FeaturePageProps = {
    content: FeaturePageContent;
};

const FeaturePage: React.FC<FeaturePageProps> = ({ content }) => {
    const location = useLocation();

    // スムーズスクロールのハンドリング（トップページからのハッシュリンク対応）
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="feature-page">
            <FeaturePageStyles />
            <FeatureHeroSection content={content.hero} />
            <FeatureLightingSection content={content.lightingSection} />
            <FeatureSentoSection content={content.sentoSection} />
            <FeatureGallerySection content={content.gallerySection} />
            <FeatureDiningSection content={content.diningSection} />
            <FeatureBarSection content={content.barSection} />
        </div>
    );
};

export default FeaturePage;
