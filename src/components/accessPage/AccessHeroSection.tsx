import React from 'react';
import { type AccessPageContent } from '../../content/accessPageContent';

type AccessHeroSectionProps = {
    content: AccessPageContent['hero'];
};

const AccessHeroSection: React.FC<AccessHeroSectionProps> = ({ content }) => {
    return (
        <section className="access-hero-section">
            <div className="access-hero-content">
                <h1 className="access-hero-title">{content.title}</h1>
                <p className="access-hero-subtitle">{content.subtitle}</p>
                <p className="access-hero-description">{content.description}</p>
            </div>
        </section>
    );
};

export default AccessHeroSection;
