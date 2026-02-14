import React from 'react';
import { motion } from 'framer-motion';
import { type SpaceDesignSectionContent } from './types';

type StorySpaceDesignSectionProps = {
    content: SpaceDesignSectionContent;
};

const StorySpaceDesignSection: React.FC<StorySpaceDesignSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section space-design-section">
            <div className="container">
                <div className="space-design-grid">
                    <motion.div
                        className="ken-content"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>{content.heading}</h2>
                        <h3>{content.subheading}</h3>
                        <p>{content.description}</p>
                    </motion.div>
                    <motion.div
                        className="space-design-image-wrapper"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src={content.imageSrc}
                            alt={content.imageAlt}
                            className="space-design-image"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StorySpaceDesignSection;
