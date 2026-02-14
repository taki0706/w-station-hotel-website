import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type FeatureImage } from './types';

type FeatureImageCarouselProps = {
    images: FeatureImage[];
    sectionHeading: string;
    animationDelay?: number;
};

const FeatureImageCarousel: React.FC<FeatureImageCarouselProps> = ({
    images,
    sectionHeading,
    animationDelay = 0
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [images]);

    if (images.length === 0) {
        return null;
    }

    const activeImage = images[activeIndex];

    const showPreviousImage = () => {
        setActiveIndex((currentIndex) => {
            return (currentIndex - 1 + images.length) % images.length;
        });
    };

    const showNextImage = () => {
        setActiveIndex((currentIndex) => {
            return (currentIndex + 1) % images.length;
        });
    };

    return (
        <motion.div
            className="feature-image-wrapper feature-image-carousel"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: animationDelay }}
        >
            <motion.img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                className="feature-image"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="feature-scroll-button prev"
                        aria-label={`${sectionHeading}の前の画像`}
                        onClick={showPreviousImage}
                    >
                        <ChevronLeft size={22} strokeWidth={1.5} />
                    </button>
                    <button
                        type="button"
                        className="feature-scroll-button next"
                        aria-label={`${sectionHeading}の次の画像`}
                        onClick={showNextImage}
                    >
                        <ChevronRight size={22} strokeWidth={1.5} />
                    </button>
                    <p className="feature-image-counter" aria-live="polite">
                        {activeIndex + 1} / {images.length}
                    </p>
                </>
            )}
        </motion.div>
    );
};

export default FeatureImageCarousel;
