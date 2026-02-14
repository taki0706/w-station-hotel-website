import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { type SiteContent } from '../../content/siteContent';

type RoomsProps = {
    content: SiteContent;
};

const Rooms: React.FC<RoomsProps> = ({ content }) => {

    return (
        <section className="section" style={{ backgroundColor: '#f4f4f4', padding: '80px 20px' }}>
            <div className="container">
                <div style={{ marginBottom: '60px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', gap: '20px' }}>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '3rem', fontFamily: 'Cinzel, serif', margin: 0, lineHeight: 1.2, flex: 1, minWidth: 0 }}
                        >
                            {content.rooms.heading}
                        </motion.h2>
                        <Link to="/rooms" style={{ borderBottom: '1px solid black', fontSize: '0.9rem', letterSpacing: '0.05em', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', lineHeight: 1.2 }}>
                            {content.rooms.viewAll}
                        </Link>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '800px', fontSize: '1rem', lineHeight: '1.8', color: '#555' }}
                    >
                        {content.rooms.intro}
                    </motion.p>
                </div>

                {/* Grid Layout Container */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '40px',
                    paddingBottom: '40px'
                }}>
                    {content.rooms.items.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '4px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={room.imageSrc}
                                    alt={room.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                />
                            </div>
                            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                <h4 style={{
                                    fontSize: '1.3rem',
                                    margin: '0 0 0.5rem 0',
                                    fontFamily: "'Zen Old Mincho', serif",
                                    textAlign: 'left',
                                    letterSpacing: '0',
                                    fontFeatureSettings: '"palt"',
                                    marginLeft: '-0.1em'
                                }}>
                                    {room.title}
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem', fontFamily: "'Montserrat', sans-serif" }}>
                                    {room.subtitle}
                                </p>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: '#555',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.8',
                                    flexGrow: 1,
                                    fontFamily: "'Zen Old Mincho', serif",
                                    fontFeatureSettings: '"palt"',
                                    marginLeft: '-0.1em'
                                }}>
                                    {room.description}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{room.price}</span>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        padding: '8px 20px',
                                        border: '1px solid #333',
                                        borderRadius: '30px',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: 'transparent'
                                    }}
                                        className="details-btn"
                                    >
                                        {room.details} &gt;
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Add simple hover style for the button in a style tag since we are using inline styles mostly */}
            <style>{`
                .details-btn:hover {
                    background-color: #333;
                    color: white;
                }
            `}</style>
        </section>
    );
};

export default Rooms;
