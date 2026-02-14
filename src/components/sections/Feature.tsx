import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteContent } from '../../content/siteContent';

const Feature: React.FC = () => {
    const featureCards = [
        {
            key: 'bar',
            item: siteContent.feature.items.bar,
            gridColumn: 'span 8',
            gridRow: 'span 2',
            minHeight: '400px',
            titleSize: '2rem',
            delay: 0
        },
        {
            key: 'lighting',
            item: siteContent.feature.items.lighting,
            gridColumn: 'span 4',
            gridRow: 'span 1',
            minHeight: '200px',
            titleSize: '1.2rem',
            delay: 0.1
        },
        {
            key: 'dining',
            item: siteContent.feature.items.dining,
            gridColumn: 'span 4',
            gridRow: 'span 1',
            minHeight: '200px',
            titleSize: '1.2rem',
            delay: 0.2
        },
        {
            key: 'sento',
            item: siteContent.feature.items.sento,
            gridColumn: 'span 6',
            gridRow: 'span 2',
            minHeight: '300px',
            titleSize: '1.5rem',
            delay: 0.3
        },
        {
            key: 'art',
            item: siteContent.feature.items.art,
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
                        {siteContent.feature.heading}
                    </motion.h2>
                    <p>{siteContent.feature.description}</p>
                </div>

                <div className="feature-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '5px',
                    gridAutoRows: 'minmax(200px, auto)'
                }}>
                    {featureCards.map((card) => (
                        <motion.div
                            key={card.key}
                            className="feature-item feature-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={card.delay > 0 ? { delay: card.delay } : undefined}
                            style={{ gridColumn: card.gridColumn, gridRow: card.gridRow, position: 'relative', minHeight: card.minHeight }}
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
                        {siteContent.feature.viewAll}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;
