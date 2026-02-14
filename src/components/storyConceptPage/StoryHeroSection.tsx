import React from 'react';
import { motion } from 'framer-motion';
import { type HeroContent } from './types';

type StoryHeroSectionProps = {
    content: HeroContent;
};

const StoryHeroSection: React.FC<StoryHeroSectionProps> = ({ content }) => {
    return (
        <section className="hero-section">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="hero-title">{content.title}</h1>
                <p className="hero-subtitle">{content.subtitle}</p>
                <p className="hero-description">{content.description}</p>
            </motion.div>
        </section>
    );
};

export default StoryHeroSection;
