import React from 'react';
import { motion } from 'framer-motion';
import { type BookingPageContent } from '../../content/bookingPageContent';

type CheckInInfoProps = {
    content: BookingPageContent;
};

const CheckInInfo: React.FC<CheckInInfoProps> = ({ content }) => {
    return (
        <section style={{
            backgroundColor: '#fff',
            padding: '100px 20px'
        }}>
            <style>{`
                @media (max-width: 768px) {
                    .checkin-section {
                        padding: 60px 20px !important;
                    }
                    .checkin-heading {
                        font-size: 2rem !important;
                    }
                    .checkin-grid {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                    .checkin-card {
                        padding: 30px 25px !important;
                    }
                    .checkin-instructions {
                        padding: 30px 25px !important;
                    }
                }
            `}</style>

            <div className="container checkin-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}
                >
                    <h2 className="checkin-heading" style={{
                        fontSize: '2.5rem',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '1rem'
                    }}>
                        {content.checkIn.heading}
                    </h2>
                </motion.div>

                {/* Instructions */}
                <motion.div
                    className="checkin-instructions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        padding: '50px 40px',
                        borderRadius: '8px',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                    }}>
                        チェックイン手順
                    </h3>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        {content.checkIn.instructions.map((instruction, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '15px'
                                }}
                            >
                                <div style={{
                                    flex: '0 0 auto',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.9rem',
                                    fontWeight: 600
                                }}>
                                    {index + 1}
                                </div>
                                <p style={{
                                    flex: 1,
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    color: '#ddd',
                                    margin: '5px 0 0'
                                }}>
                                    {instruction}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CheckInInfo;
