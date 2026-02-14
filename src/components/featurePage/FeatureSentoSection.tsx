import React from 'react';
import { motion } from 'framer-motion';
import { type SentoSectionContent } from './types';
import FeatureImageCarousel from './FeatureImageCarousel';

type FeatureSentoSectionProps = {
    content: SentoSectionContent;
};

const FeatureSentoSection: React.FC<FeatureSentoSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section feature-section feature-sento-section">
            <div className="container">
                <div className="feature-grid reverse">
                    <motion.div
                        className="feature-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>{content.heading}</h2>
                        <h3>{content.subheading}</h3>
                        <p>{content.description}</p>
                        <div className="artist-info">
                            <h4>{content.artist.name}</h4>
                            <p className="artist-title">{content.artist.title}</p>
                            <p>{content.artist.description}</p>
                            <a
                                href={content.artist.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="artist-link"
                            >
                                {content.artist.websiteLabel}
                            </a>
                        </div>
                    </motion.div>
                    <FeatureImageCarousel
                        images={content.images}
                        sectionHeading={content.heading}
                        animationDelay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default FeatureSentoSection;
