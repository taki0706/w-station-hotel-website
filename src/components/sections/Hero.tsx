import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero/main.jpg';

const Hero: React.FC = () => {
    return (
        <section className="hero" style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Background Image with Parallax effect could go here */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)' // Overlay for text readability
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 style={{
                        fontSize: '1.5rem',
                        letterSpacing: '0.2em',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase'
                    }}>
                        Station Front x Art x Surf & Work x ZEB
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '2rem',
                        lineHeight: 1.1,
                        fontFamily: 'var(--font-serif)'
                    }}>
                        W.STATION<br />HOTEL
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Link to="/booking" style={{
                            display: 'inline-block',
                            border: '1px solid white',
                            padding: '16px 32px',
                            color: 'white',
                            fontSize: '1rem',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(5px)'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = 'black';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = 'white';
                            }}
                        >
                            CHECK AVAILABILITY
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                SCROLL
                <div style={{ width: '1px', height: '40px', background: 'white', margin: '10px auto 0', opacity: 0.5 }}></div>
            </div>
        </section>
    );
};

export default Hero;
