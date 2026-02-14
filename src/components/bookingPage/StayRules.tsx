import React from 'react';
import { motion } from 'framer-motion';
import { type BookingPageContent } from '../../content/bookingPageContent';

type StayRulesProps = {
    content: BookingPageContent;
};

const StayRules: React.FC<StayRulesProps> = ({ content }) => {
    return (
        <section style={{
            backgroundColor: '#fff',
            padding: '100px 20px'
        }}>
            <style>{`
                @media (max-width: 768px) {
                    .stay-rules-section {
                        padding: 60px 20px !important;
                    }
                    .stay-rules-heading {
                        font-size: 2rem !important;
                    }
                    .stay-rules-grid {
                        grid-template-columns: 1fr !important;
                        gap: 25px !important;
                    }
                    .rule-card {
                        padding: 30px 25px !important;
                    }
                    .rule-title {
                        font-size: 1.1rem !important;
                    }
                }
            `}</style>

            <div className="container stay-rules-section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}
                >
                    <h2 className="stay-rules-heading" style={{
                        fontSize: '2.5rem',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '1rem'
                    }}>
                        {content.stayRules.heading}
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666'
                    }}>
                        {content.stayRules.description}
                    </p>
                </motion.div>

                <div className="stay-rules-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {content.stayRules.items.map((rule, index) => (
                        <motion.div
                            key={index}
                            className="rule-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: '#f9f9f9',
                                padding: '40px 30px',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}
                        >

                            <h3 className="rule-title" style={{
                                fontSize: '1.2rem',
                                fontFamily: 'var(--font-serif)',
                                marginBottom: '1rem',
                                color: '#333'
                            }}>
                                {rule.title}
                            </h3>

                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.7',
                                color: '#666',
                                margin: 0
                            }}>
                                {rule.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StayRules;
