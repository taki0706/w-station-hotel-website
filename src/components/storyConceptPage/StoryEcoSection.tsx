import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { type EcoSectionContent } from './types';

type StoryEcoSectionProps = {
    content: EcoSectionContent;
};

const StoryEcoSection: React.FC<StoryEcoSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section eco-section">
            <div className="container">
                <SectionHeader
                    heading={content.heading}
                    subheading={content.subheading}
                    intro={content.intro}
                />

                <div className="eco-grid">
                    <motion.div
                        className="eco-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <img src={content.imageSrc} alt={content.imageAlt} className="eco-image" />
                    </motion.div>
                    <motion.div
                        className="eco-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4>{content.cleanlinessSection.heading}</h4>
                        <ul>
                            {content.cleanlinessSection.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="eco-text-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h4>{content.ecoInitiativesSection.heading}</h4>
                    <p>{content.ecoInitiativesSection.description}</p>
                </motion.div>

                <motion.div
                    className="eco-text-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h4>{content.zebSection.heading}</h4>
                    <p>{content.zebSection.description}</p>
                    <p>{content.zebSection.benefits}</p>
                    <p>{content.zebSection.conclusion}</p>
                </motion.div>

                <motion.div
                    className="eco-text-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h4>{content.belsSection.heading}</h4>
                    <p>{content.belsSection.description}</p>
                    <div className="bels-ranks">
                        {content.belsSection.ranks.map((rank, index) => (
                            <div key={index} className={`rank-card ${rank.current ? 'current' : ''}`}>
                                <h5>{rank.rank}</h5>
                                <p>{rank.criteria}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StoryEcoSection;
