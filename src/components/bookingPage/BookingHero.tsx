import React from 'react';
import { motion } from 'framer-motion';
import { type BookingPageContent } from '../../content/bookingPageContent';

type BookingHeroProps = {
    content: BookingPageContent;
};

const BookingHero: React.FC<BookingHeroProps> = ({ content }) => {
    return (
        <section style={{
            minHeight: '60vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '120px 20px 80px'
        }}>
            <style>{`
                @media (max-width: 768px) {
                    .booking-hero-section {
                        min-height: 50vh !important;
                        padding: 100px 20px 60px !important;
                    }
                    .booking-hero-title {
                        font-size: 2.5rem !important;
                    }
                    .booking-hero-subtitle {
                        font-size: 1rem !important;
                    }
                    .booking-hero-description {
                        font-size: 0.95rem !important;
                    }
                }
            `}</style>

            <div className="container booking-hero-section" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                maxWidth: '900px'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="booking-hero-subtitle" style={{
                        fontSize: '1.2rem',
                        letterSpacing: '0.2em',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase',
                        color: '#bbb'
                    }}>
                        {content.hero.subtitle}
                    </h2>

                    <h1 className="booking-hero-title" style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        marginBottom: '2rem',
                        lineHeight: 1.2,
                        fontFamily: 'var(--font-serif)'
                    }}>
                        {content.hero.title}
                    </h1>

                    <motion.p
                        className="booking-hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            maxWidth: '700px',
                            margin: '0 auto',
                            color: '#ddd'
                        }}
                    >
                        {content.hero.description}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingHero;
