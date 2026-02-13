import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import room images (Assuming they were copied. For now, simple import or dynamic if Vite supports globe, 
// but to be safe I'll use a placeholder array or import explicitly if I knew names.
// I copied * from 004booking to src/assets/images/rooms/
// Names are: 004booking-001-van... etc.
// I can't easily import them all without specific names. 
// I'll assume standard naming or just use path placeholders if I can't rename easily.
// Actually, I can use a glob import in Vite!)

// Use Vite's import.meta.glob to load images from the directory
const roomImages = import.meta.glob('../../assets/images/rooms/*', { eager: true, as: 'url' });
const roomImageUrls = Object.values(roomImages);

const Rooms: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#f4f4f4' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3rem' }}
                    >
                        Guest Rooms
                    </motion.h2>
                    <Link to="/rooms" style={{ borderBottom: '1px solid black' }}>VIEW ALL ROOMS</Link>
                </div>

                {/* Horizontal Scroll / Carousel Container */}
                <div className="rooms-container" style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '30px',
                    paddingBottom: '40px',
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none'  // IE
                }}>
                    {roomImageUrls.map((imgUrl, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                minWidth: '300px',
                                flex: '0 0 300px',
                                backgroundColor: 'white',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={imgUrl} alt={`Room ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Concept Room {index + 1}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                                    2 Guests • Double Bed
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 600 }}>¥12,000~</span>
                                    <span style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>Details</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
