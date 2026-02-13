import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import lightImg from '../../assets/images/feature/light.jpg';
import sentoImg from '../../assets/images/feature/sento.jpg';
import artImg from '../../assets/images/feature/art.jpg';
import diningImg from '../../assets/images/feature/dining.jpg';
import barImg from '../../assets/images/feature/bar.jpg';

const Feature: React.FC = () => {
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
                        Features
                    </motion.h2>
                    <p>Experience the unique elements that define W.Station.</p>
                </div>

                <div className="feature-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '20px',
                    gridAutoRows: 'minmax(200px, auto)'
                }}>
                    {/* Feature 1: Lighting (Large Left) */}
                    <motion.div
                        className="feature-item"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ gridColumn: 'span 8', gridRow: 'span 2', position: 'relative', minHeight: '400px' }}
                    >
                        <img src={lightImg} alt="Lighting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            <h3 style={{ fontSize: '2rem' }}>Lighting Design</h3>
                        </div>
                    </motion.div>

                    {/* Feature 2: Bar (Small Right Top) */}
                    <motion.div
                        className="feature-item"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ gridColumn: 'span 4', gridRow: 'span 1', position: 'relative', minHeight: '200px' }}
                    >
                        <img src={barImg} alt="New York Bar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            <h3 style={{ fontSize: '1.2rem' }}>New York Bar</h3>
                        </div>
                    </motion.div>

                    {/* Feature 3: Dining (Small Right Bottom) */}
                    <motion.div
                        className="feature-item"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ gridColumn: 'span 4', gridRow: 'span 1', position: 'relative', minHeight: '200px' }}
                    >
                        <img src={diningImg} alt="Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            <h3 style={{ fontSize: '1.2rem' }}>Open Dining</h3>
                        </div>
                    </motion.div>

                    {/* Feature 4: Sento (Medium Left) */}
                    <motion.div
                        className="feature-item"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{ gridColumn: 'span 6', gridRow: 'span 2', position: 'relative', minHeight: '300px' }}
                    >
                        <img src={sentoImg} alt="Sento Art" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            <h3 style={{ fontSize: '1.5rem' }}>Sento Painting</h3>
                        </div>
                    </motion.div>

                    {/* Feature 5: Art (Medium Right) */}
                    <motion.div
                        className="feature-item"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ gridColumn: 'span 6', gridRow: 'span 2', position: 'relative', minHeight: '300px' }}
                    >
                        <img src={artImg} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            <h3 style={{ fontSize: '1.5rem' }}>Art Gallery</h3>
                        </div>
                    </motion.div>

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
                        VIEW ALL FEATURES
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;
