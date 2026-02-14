import React from 'react';
import { motion } from 'framer-motion';
import { type GallerySectionContent } from './types';

type FeatureGallerySectionProps = {
    content: GallerySectionContent;
};

const FeatureGallerySection: React.FC<FeatureGallerySectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section feature-section">
            <div className="container">
                <div className="feature-grid">
                    <motion.div
                        className="feature-image-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={content.imageSrc} alt={content.imageAlt} className="feature-image" />
                    </motion.div>
                    <motion.div
                        className="feature-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>{content.heading}</h2>
                        <h3>{content.subheading}</h3>
                        <p>{content.description}</p>
                        <ul className="feature-list">
                            {content.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureGallerySection;
