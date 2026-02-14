import React from 'react';
import { motion } from 'framer-motion';
import { type KenSectionContent } from './types';

type StoryKenSectionProps = {
    content: KenSectionContent;
};

const StoryKenSection: React.FC<StoryKenSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section ken-section">
            <div className="container">
                <div className="ken-grid">
                    <motion.div
                        className="ken-image-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={content.imageSrc} alt={content.imageAlt} className="ken-image" />
                    </motion.div>
                    <motion.div
                        className="ken-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>{content.heading}</h2>
                        <h3>{content.subheading}</h3>
                        {content.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StoryKenSection;
