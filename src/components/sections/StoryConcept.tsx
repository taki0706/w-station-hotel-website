import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { type SiteContent } from '../../content/siteContent';

type StoryConceptProps = {
    content: SiteContent;
};

const StoryConcept: React.FC<StoryConceptProps> = ({ content }) => {
    return (
        <section className="section bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}
                    >
                        {content.storyConcept.heading}
                    </motion.h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666', fontSize: '0.95rem' }}>
                        {content.storyConcept.introLine1}<br />
                        {content.storyConcept.introLine2}<br />
                        {content.storyConcept.introLine3}
                    </p>
                </div>

                <div className="bento-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '5px',
                    padding: '0 20px'
                }}>
                    {/* Inline styles for responsive grid are handled via class or we can use generic style tag for brevity in this tool */}
                    <style>{`
                        .bento-grid {
                            grid-auto-rows: minmax(200px, auto);
                        }
                        .bento-item {
                            position: relative;
                            overflow: hidden;
                            //border-radius: 4px; /* Rounded for modern app feel or 0 for sharp */
                            background: #fdfdfd;
                        }
                        .bento-text-card {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding: 2rem;
                        }
                        .story-small-card-image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: transform var(--transition-smooth);
                        }
                        .story-small-card:hover .story-small-card-image,
                        .story-small-card:focus-within .story-small-card-image {
                            transform: scale(1.06);
                        }
                        .story-small-card-overlay {
                            position: absolute;
                            inset: 0;
                            display: flex;
                            align-items: flex-end;
                            padding: 20px;
                            color: white;
                            background: linear-gradient(
                                to top,
                                rgba(0, 0, 0, 0.58) 0%,
                                rgba(0, 0, 0, 0.28) 40%,
                                rgba(0, 0, 0, 0) 100%
                            );
                        }
                        .story-small-card-title {
                            font-size: 1.2rem;
                            margin-bottom: 0.2rem;
                            text-shadow: none;
                        }
                        .story-small-card-subtitle {
                            font-size: 0.8rem;
                            opacity: 0.9;
                            text-shadow: none;
                        }
                        /* Responsive definitions */
                        .span-ken-img { grid-column: span 12; aspect-ratio: 16/9; }
                        .span-ken-text { grid-column: span 12; }
                        .span-small { grid-column: span 12; aspect-ratio: 4/3; }

                        @media (min-width: 768px) {
                            .span-ken-img { grid-column: span 8; grid-row: span 2; aspect-ratio: auto; }
                            .span-ken-text { grid-column: span 4; grid-row: span 2; }
                            .span-small { grid-column: span 4; grid-row: span 1; aspect-ratio: auto; }
                        }
                    `}</style>

                    {/* Main Feature: Ken Image */}
                    <motion.div
                        className="bento-item span-ken-img"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={content.storyConcept.kenImageSrc} alt={content.storyConcept.kenImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    {/* Main Feature: Ken Text */}
                    <motion.div
                        className="bento-item bento-text-card span-ken-text"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ backgroundColor: '#F5F5F0' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{content.storyConcept.kenHeading}</h3>
                        <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            {content.storyConcept.kenDescriptionLine1}<br />
                            {content.storyConcept.kenDescriptionLine2}<br /><br />
                            {content.storyConcept.kenDescriptionLine3}
                        </p>
                        <Link to="/story" style={{
                            textDecoration: 'underline',
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em'
                        }}>
                            {content.storyConcept.readStory}
                        </Link>
                    </motion.div>

                    {/* Small Item 1: Stay & Work */}
                    <motion.div
                        className="bento-item span-small story-small-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <img className="story-small-card-image" src={content.storyConcept.cards.stayWork.imageSrc} alt={content.storyConcept.cards.stayWork.imageAlt} />
                        <div className="story-small-card-overlay">
                            <div>
                                <h4 className="story-small-card-title">{content.storyConcept.cards.stayWork.title}</h4>
                                <p className="story-small-card-subtitle">{content.storyConcept.cards.stayWork.subtitle}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Item 2: Eco */}
                    <motion.div
                        className="bento-item span-small story-small-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <img className="story-small-card-image" src={content.storyConcept.cards.eco.imageSrc} alt={content.storyConcept.cards.eco.imageAlt} />
                        <div className="story-small-card-overlay">
                            <div>
                                <h4 className="story-small-card-title">{content.storyConcept.cards.eco.title}</h4>
                                <p className="story-small-card-subtitle">{content.storyConcept.cards.eco.subtitle}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Item 3: Space */}
                    <motion.div
                        className="bento-item span-small story-small-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <img className="story-small-card-image" src={content.storyConcept.cards.space.imageSrc} alt={content.storyConcept.cards.space.imageAlt} />
                        <div className="story-small-card-overlay">
                            <div>
                                <h4 className="story-small-card-title">{content.storyConcept.cards.space.title}</h4>
                                <p className="story-small-card-subtitle">{content.storyConcept.cards.space.subtitle}</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StoryConcept;
