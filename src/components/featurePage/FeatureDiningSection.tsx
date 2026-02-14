import React from 'react';
import { motion } from 'framer-motion';
import { type DiningSectionContent } from './types';

type FeatureDiningSectionProps = {
    content: DiningSectionContent;
};

const FeatureDiningSection: React.FC<FeatureDiningSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section feature-section">
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
                        <ul className="feature-list">
                            {content.facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>
                        <p className="feature-note">{content.note}</p>
                    </motion.div>
                    <motion.div
                        className="feature-image-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src={content.imageSrc} alt={content.imageAlt} className="feature-image" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureDiningSection;
