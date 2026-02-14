import React from 'react';
import { motion } from 'framer-motion';
import { type BookingPageContent } from '../../content/bookingPageContent';

type RoomsListProps = {
    content: BookingPageContent;
};

const RoomsList: React.FC<RoomsListProps> = ({ content }) => {
    return (
        <section style={{
            backgroundColor: '#f9f9f9',
            padding: '100px 20px'
        }}>
            <style>{`
                .rooms-list-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 60px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .rooms-list-section {
                        padding: 60px 20px !important;
                    }
                    .rooms-list-cta-heading {
                        font-size: 2rem !important;
                    }
                    .rooms-list-grid {
                        --mobile-room-card-width: min(100%, calc(100vw - 80px));
                        display: flex;
                        grid-template-columns: none;
                        gap: 32px;
                        overflow-x: auto;
                        scroll-snap-type: x mandatory;
                        padding-bottom: 40px;
                        margin: 0 -20px;
                        /* TopPage Rooms の中央配置ロジック + セクション余白分の補正 */
                        padding-left: calc(50% - var(--mobile-room-card-width) / 2 + 20px);
                        padding-right: calc(50% - var(--mobile-room-card-width) / 2 + 20px);
                        scrollbar-width: none;
                        -webkit-overflow-scrolling: touch;
                    }
                    .rooms-list-grid::-webkit-scrollbar {
                        display: none;
                    }
                    .room-card-booking {
                        flex: 0 0 var(--mobile-room-card-width);
                        width: var(--mobile-room-card-width);
                        min-width: var(--mobile-room-card-width);
                        scroll-snap-align: center;
                        flex-direction: column !important;
                    }
                    .room-card-image-wrapper {
                        height: 300px !important;
                        width: 100% !important;
                    }
                    .room-card-content {
                        padding: 30px 25px !important;
                    }
                    .room-name {
                        font-size: 1.8rem !important;
                    }
                    .room-features {
                        flex-wrap: wrap !important;
                        gap: 8px !important;
                    }
                }
            `}</style>

            <div className="container rooms-list-section">
                {/* CTA Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '80px'
                    }}
                >
                    <h2 className="rooms-list-cta-heading" style={{
                        fontSize: '2.5rem',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '1rem'
                    }}>
                        {content.cta.heading}
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666'
                    }}>
                        {content.cta.description}
                    </p>
                </motion.div>

                {/* Rooms Grid */}
                <div className="rooms-list-grid">
                    {content.rooms.map((room, index) => (
                        <motion.a
                            key={room.id}
                            id={`room-${room.id}`}
                            href={room.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="room-card-booking"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                                scrollMarginTop: '120px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                            }}
                        >
                            {/* Room Image */}
                            <div className="room-card-image-wrapper" style={{
                                flex: '0 0 45%',
                                height: '400px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={room.imageSrc}
                                    alt={room.imageAlt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                                {/* Price Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    backgroundColor: 'rgba(255,255,255,0.95)',
                                    padding: '12px 20px',
                                    borderRadius: '30px',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <span style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        color: '#333'
                                    }}>
                                        {room.priceFrom}〜
                                    </span>
                                </div>
                            </div>

                            {/* Room Content */}
                            <div className="room-card-content" style={{
                                flex: 1,
                                padding: '50px 40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <h3 className="room-name" style={{
                                    fontSize: '2.2rem',
                                    fontFamily: "'Zen Old Mincho', serif",
                                    marginBottom: '0.5rem',
                                    fontFeatureSettings: '"palt"',
                                    marginLeft: '-0.1em'
                                }}>
                                    {room.name}
                                </h3>

                                <p style={{
                                    fontSize: '1rem',
                                    color: '#888',
                                    marginBottom: '1.5rem',
                                    fontFamily: "'Montserrat', sans-serif"
                                }}>
                                    {room.capacity} • {room.bedType}
                                </p>

                                <p style={{
                                    fontSize: '1.05rem',
                                    lineHeight: '1.8',
                                    color: '#555',
                                    marginBottom: '2rem',
                                    fontFamily: "'Zen Old Mincho', serif",
                                    fontFeatureSettings: '"palt"',
                                    marginLeft: '-0.1em'
                                }}>
                                    {room.description}
                                </p>

                                {/* Features */}
                                <div className="room-features" style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '12px',
                                    marginBottom: '2rem'
                                }}>
                                    {room.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                fontSize: '0.85rem',
                                                padding: '6px 14px',
                                                backgroundColor: '#f0f0f0',
                                                borderRadius: '20px',
                                                color: '#666'
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Booking Button */}
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#333',
                                    letterSpacing: '0.05em'
                                }}>
                                    {content.cta.bookButton}
                                    <svg
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            marginLeft: '8px',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Price Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '80px',
                        padding: '40px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '80px auto 0'
                    }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '1rem'
                    }}>
                        {content.priceInfo.heading}
                    </h3>
                    <p style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginBottom: '0.5rem'
                    }}>
                        {content.priceInfo.breakfast}
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginBottom: '0.5rem'
                    }}>
                        {content.priceInfo.description}
                    </p>
                    <p style={{
                        fontSize: '0.9rem',
                        color: '#999',
                        marginTop: '1rem'
                    }}>
                        ※ {content.priceInfo.note}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default RoomsList;
