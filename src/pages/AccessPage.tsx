import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { type AccessPageContent } from '../content/accessPageContent';
import {
    AccessPageStyles,
    AccessHeroSection,
    AccessLocationSection,
    AccessTransportSection,
    AccessSpotsSection
} from '../components/accessPage';

type AccessPageProps = {
    content: AccessPageContent;
};

const AccessPage: React.FC<AccessPageProps> = ({ content }) => {
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
        <div className="access-page">
            <AccessPageStyles />
            <AccessHeroSection content={content.hero} />
            <AccessLocationSection content={content.locationSection} />
            <AccessTransportSection content={content.transportSection} />
            <AccessSpotsSection content={content.spotsSection} />
        </div>
    );
};

export default AccessPage;
