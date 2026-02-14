import React from 'react';
import { motion } from 'framer-motion';
import { type BarSectionContent } from './types';
import FeatureImageCarousel from './FeatureImageCarousel';

type FeatureBarSectionProps = {
    content: BarSectionContent;
};

const FeatureBarSection: React.FC<FeatureBarSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section feature-section">
            <div className="container">
                <div className="feature-grid">
                    <FeatureImageCarousel images={content.images} sectionHeading={content.heading} />
                    <motion.div
                        className="feature-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>{content.heading}</h2>
                        <h3>{content.subheading}</h3>
                        <p className="feature-note-highlight">{content.note}</p>
                        <p>{content.description}</p>
                        <ul className="feature-list">
                            {content.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <p className="feature-note">{content.additionalInfo}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureBarSection;
