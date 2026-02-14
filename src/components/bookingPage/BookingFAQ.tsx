import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type BookingPageContent } from '../../content/bookingPageContent';

type BookingFAQProps = {
    content: BookingPageContent;
};

const BookingFAQ: React.FC<BookingFAQProps> = ({ content }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="booking-faq-root" style={{
            backgroundColor: '#f9f9f9',
            padding: '100px 0'
        }}>
            <style>{`
                @media (min-width: 769px) {
                    .faq-question {
                        white-space: nowrap;
                    }
                }

                @media (max-width: 768px) {
                    .booking-faq-root {
                        padding: 44px 0 !important;
                    }
                    .faq-section {
                        padding: 0 16px !important;
                    }
                    .faq-header {
                        margin-bottom: 28px !important;
                    }
                    .faq-heading {
                        font-size: 2rem !important;
                    }
                    .faq-item {
                        margin-bottom: 12px !important;
                    }
                    .faq-item-trigger {
                        padding: 18px 16px !important;
                        gap: 12px !important;
                    }
                    .faq-question {
                        font-size: 1rem !important;
                        line-height: 1.5 !important;
                    }
                    .faq-answer {
                        font-size: 0.95rem !important;
                    }
                    .faq-answer-wrap {
                        padding: 0 16px 18px !important;
                        padding-top: 14px !important;
                    }
                }
            `}</style>

            <div className="container faq-section">
                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}
                >
                    <h2 className="faq-heading" style={{
                        fontSize: '2.5rem',
                        fontFamily: 'var(--font-serif)',
                        marginBottom: '1rem'
                    }}>
                        {content.faq.heading}
                    </h2>
                </motion.div>

                <div className="faq-list" style={{
                    maxWidth: '1024px',
                    margin: '0 auto'
                }}>
                    {content.faq.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                marginBottom: '20px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => toggleFAQ(index)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div className="faq-item-trigger" style={{
                                padding: '30px 28px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <h3 className="faq-question" style={{
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    color: '#333',
                                    margin: 0,
                                    flex: 1
                                }}>
                                    {item.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        flex: '0 0 auto',
                                        fontSize: '1.5rem',
                                        color: '#666'
                                    }}
                                >
                                    ▼
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{
                                            padding: '0 28px 30px',
                                            borderTop: '1px solid #f0f0f0',
                                            paddingTop: '20px'
                                        }} className="faq-answer-wrap">
                                            <p className="faq-answer" style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.8',
                                                color: '#666',
                                                margin: 0
                                            }}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingFAQ;
