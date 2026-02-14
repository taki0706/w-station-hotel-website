import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { type SiteContent } from '../../content/siteContent';

type FeatureProps = {
    content: SiteContent;
};

const FEATURE_CARD_KEY_TO_SECTION_ID: Record<string, string> = {
    art: 'gallery'
};

const resolveFeatureSectionId = (cardKey: string): string => {
    return FEATURE_CARD_KEY_TO_SECTION_ID[cardKey] ?? cardKey;
};

const Feature: React.FC<FeatureProps> = ({ content }) => {
    const navigate = useNavigate();

    const handleFeatureCardClick = (cardKey: string) => {
        const sectionId = resolveFeatureSectionId(cardKey);
        navigate(`/feature#${sectionId}`);
    };

    const featureCards = [
        {
            key: 'bar',
            item: content.feature.items.bar,
            gridColumn: 'span 8',
            gridRow: 'span 2',
            minHeight: '400px',
            titleSize: '2rem',
            delay: 0
        },
        {
            key: 'lighting',
            item: content.feature.items.lighting,
            gridColumn: 'span 4',
            gridRow: 'span 1',
            minHeight: '200px',
            titleSize: '1.2rem',
            delay: 0.1
        },
        {
            key: 'dining',
            item: content.feature.items.dining,
            gridColumn: 'span 4',
            gridRow: 'span 1',
            minHeight: '200px',
            titleSize: '1.2rem',
            delay: 0.2
        },
        {
            key: 'sento',
            item: content.feature.items.sento,
            gridColumn: 'span 6',
            gridRow: 'span 2',
            minHeight: '300px',
            titleSize: '1.5rem',
            delay: 0.3
        },
        {
            key: 'art',
            item: content.feature.items.art,
            gridColumn: 'span 6',
            gridRow: 'span 2',
            minHeight: '300px',
            titleSize: '1.5rem',
            delay: 0.4
        }
    ];

    return (
        <section className="section bg-white">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3rem' }}
                    >
                        {content.feature.heading}
                    </motion.h2>
                    <p>{content.feature.description}</p>
                </div>

                <style>{`
                    .feature-grid {
                        display: grid;
                        grid-template-columns: repeat(12, 1fr);
                        gap: 5px;
                        grid-auto-rows: minmax(200px, auto);
                    }
                    .feature-item-bar { grid-column: span 12; grid-row: span 2; min-height: 300px; }
                    .feature-item-lighting { grid-column: span 12; grid-row: span 1; min-height: 200px; }
                    .feature-item-dining { grid-column: span 12; grid-row: span 1; min-height: 200px; }
                    .feature-item-sento { grid-column: span 12; grid-row: span 2; min-height: 300px; }
                    .feature-item-art { grid-column: span 12; grid-row: span 2; min-height: 300px; }
                    
                    @media (min-width: 768px) {
                        .feature-item-bar { grid-column: span 8; grid-row: span 2; min-height: 400px; }
                        .feature-item-lighting { grid-column: span 4; grid-row: span 1; min-height: 200px; }
                        .feature-item-dining { grid-column: span 4; grid-row: span 1; min-height: 200px; }
                        .feature-item-sento { grid-column: span 6; grid-row: span 2; min-height: 300px; }
                        .feature-item-art { grid-column: span 6; grid-row: span 2; min-height: 300px; }
                    }
                `}</style>
                <div className="feature-grid">
                    {featureCards.map((card) => (
                        <motion.div
                            key={card.key}
                            className={`feature-item feature-card feature-item-${card.key}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={card.delay > 0 ? { delay: card.delay } : undefined}
                            style={{ position: 'relative', cursor: 'pointer' }}
                            onClick={() => handleFeatureCardClick(card.key)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    handleFeatureCardClick(card.key);
                                }
                            }}
                            role="link"
                            tabIndex={0}
                        >
                            <img
                                className="feature-card-image"
                                src={card.item.imageSrc}
                                alt={card.item.imageAlt}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="feature-card-overlay" />
                            <div className="feature-card-title">
                                <h3 style={{ fontSize: card.titleSize }}>{card.item.title}</h3>
                            </div>
                        </motion.div>
                    ))}

                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/feature" style={{
                        display: 'inline-block',
                        border: '1px solid black',
                        padding: '12px 30px',
                        fontSize: '1rem',
                        letterSpacing: '0.1em',
                        color: 'black'
                    }}>
                        {content.feature.viewAll}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;
