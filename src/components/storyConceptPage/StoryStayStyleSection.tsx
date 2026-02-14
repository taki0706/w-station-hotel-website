import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { type StayStyleSectionContent } from './types';

type StoryStayStyleSectionProps = {
    content: StayStyleSectionContent;
};

const StoryStayStyleSection: React.FC<StoryStayStyleSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="section stay-style-section">
            <div className="container">
                <SectionHeader
                    heading={content.heading}
                    subheading={content.subheading}
                    intro={content.intro}
                />
                <div className="time-slots">
                    {content.timeSlots.map((slot, index) => (
                        <motion.div
                            key={slot.id}
                            className="time-slot"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className="time-badge">{slot.time}</span>
                            <h4>{slot.title}</h4>
                            <p>{slot.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoryStayStyleSection;
