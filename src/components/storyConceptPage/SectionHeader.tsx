import React from 'react';
import { motion } from 'framer-motion';

type SectionHeaderProps = {
    heading: string;
    subheading: string;
    intro?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ heading, subheading, intro }) => {
    return (
        <div className="section-header">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {heading}
            </motion.h2>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                {subheading}
            </motion.h3>
            {intro ? (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {intro}
                </motion.p>
            ) : null}
        </div>
    );
};

export default SectionHeader;
