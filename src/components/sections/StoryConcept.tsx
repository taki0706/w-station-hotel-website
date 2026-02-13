import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import kenImg from '../../assets/images/story/ken.jpg';
import morningImg from '../../assets/images/story/morning.jpg';
import ecoImg from '../../assets/images/story/eco.jpg';
import spaceImg from '../../assets/images/story/space.jpg';

const StoryConcept: React.FC = () => {
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
                        Story & Concept
                    </motion.h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666', fontSize: '0.95rem' }}>
                        ただのホテルではない。<br />
                        アート、自然、そして人々が交差する場所。<br />
                        W.STATIONの世界観を感じてください。
                    </p>
                </div>

                <div className="bento-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '24px',
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
                            border-radius: 8px; /* Rounded for modern app feel or 0 for sharp */
                            background: #fdfdfd;
                        }
                        .bento-text-card {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding: 2rem;
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
                        <img src={kenImg} alt="世界のKEN" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>世界のKEN</h3>
                        <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            設計デザインは2019年建築学科を卒業したての『世界のKEN』。<br />
                            北極から南極点まで世界150の国々を旅して来た異色の旅行家。<br /><br />
                            世界で集めた絵画、美術品、それに遊びごころを詰め込んで出来たのが『W.STATION HOTEL』。
                        </p>
                        <Link to="/story" style={{
                            textDecoration: 'underline',
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em'
                        }}>
                            ストーリーを読む →
                        </Link>
                    </motion.div>

                    {/* Small Item 1: Stay & Work */}
                    <motion.div
                        className="bento-item span-small"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <img src={morningImg} alt="Stay & Work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, width: '100%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            padding: '20px', color: 'white'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>過ごし方</h4>
                            <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>サーフィンとワークの融合</p>
                        </div>
                    </motion.div>

                    {/* Small Item 2: Eco */}
                    <motion.div
                        className="bento-item span-small"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <img src={ecoImg} alt="Eco Friendly" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, width: '100%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            padding: '20px', color: 'white'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>エコホテル</h4>
                            <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>ZEB認証のサステナブル建築</p>
                        </div>
                    </motion.div>

                    {/* Small Item 3: Space */}
                    <motion.div
                        className="bento-item span-small"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <img src={spaceImg} alt="Space Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, width: '100%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            padding: '20px', color: 'white'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>空間デザイン</h4>
                            <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>開放感あふれるガラスの美学</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StoryConcept;
