import React from 'react';

const StoryConceptPageStyles: React.FC = () => {
    return (
        <style>{`
            .story-concept-page {
                background: var(--color-bg);
            }
            .section {
                padding: 100px 0;
                position: relative;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 var(--spacing-container);
            }

            /* Hero Section */
            .hero-section {
                min-height: 60vh;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                background: linear-gradient(135deg, #f5f5f0 0%, #e8e8e0 100%);
                margin-top: 80px;
            }
            .hero-content {
                max-width: 800px;
                padding: 0 20px;
            }
            .hero-title {
                font-family: var(--font-serif);
                font-size: 4rem;
                margin-bottom: 1rem;
                color: var(--color-text);
            }
            .hero-subtitle {
                font-family: var(--font-sans);
                font-size: 1.2rem;
                margin-bottom: 1.5rem;
                color: var(--color-accent);
                letter-spacing: 0.1em;
            }
            .hero-description {
                font-size: 1rem;
                line-height: 1.8;
                color: #666;
            }

            /* Ken Section */
            .ken-section {
                background: var(--color-white);
            }
            .ken-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                align-items: center;
            }
            .ken-image-wrapper {
                position: relative;
                overflow: hidden;
                border-radius: 4px;
            }
            .ken-image {
                width: 100%;
                height: auto;
                display: block;
            }
            .ken-content h2 {
                font-family: var(--font-serif);
                font-size: 2.5rem;
                margin-bottom: 0.5rem;
            }
            .ken-content h3 {
                font-family: var(--font-sans);
                font-size: 1rem;
                color: var(--color-accent);
                margin-bottom: 2rem;
                letter-spacing: 0.1em;
            }
            .ken-content p {
                font-size: 1rem;
                line-height: 1.9;
                color: #555;
                margin-bottom: 1.5rem;
            }

            /* Stay Style Section */
            .stay-style-section {
                background: var(--color-bg);
            }
            .section-header {
                text-align: center;
                margin-bottom: 60px;
            }
            .section-header h2 {
                font-family: var(--font-serif);
                font-size: 2.8rem;
                margin-bottom: 0.5rem;
            }
            .section-header h3 {
                font-family: var(--font-sans);
                font-size: 1rem;
                color: var(--color-accent);
                margin-bottom: 1.5rem;
                letter-spacing: 0.1em;
            }
            .section-header p {
                max-width: 700px;
                margin: 0 auto;
                color: #666;
                line-height: 1.8;
            }

            .time-slots {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 30px;
            }
            .time-slot {
                background: var(--color-white);
                padding: 30px;
                border-radius: 4px;
                transition: all var(--transition-fast);
            }
            .time-badge {
                display: inline-block;
                padding: 6px 16px;
                background: var(--color-accent);
                color: var(--color-white);
                font-size: 0.85rem;
                border-radius: 20px;
                margin-bottom: 1rem;
                font-family: var(--font-sans);
                letter-spacing: 0.05em;
            }
            .time-slot h4 {
                font-family: var(--font-serif);
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            .time-slot p {
                color: #666;
                line-height: 1.8;
                font-size: 0.95rem;
            }

            /* Eco Section */
            .eco-section {
                background: var(--color-white);
            }
            .eco-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                margin-bottom: 60px;
            }
            .eco-image-wrapper {
                position: relative;
                overflow: hidden;
                border-radius: 4px;
            }
            .eco-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            .eco-content h4 {
                font-family: var(--font-serif);
                font-size: 1.8rem;
                margin-bottom: 1.5rem;
            }
            .eco-content ul {
                list-style: none;
                padding: 0;
            }
            .eco-content li {
                padding-left: 1.5rem;
                margin-bottom: 1rem;
                position: relative;
                color: #555;
                line-height: 1.8;
            }
            .eco-content li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--color-accent);
                font-weight: bold;
            }
            .eco-text-block {
                background: var(--color-bg);
                padding: 40px;
                border-radius: 4px;
                margin-bottom: 40px;
            }
            .eco-text-block h4 {
                font-family: var(--font-serif);
                font-size: 1.8rem;
                margin-bottom: 1.5rem;
            }
            .eco-text-block p {
                color: #666;
                line-height: 1.8;
                margin-bottom: 1.5rem;
            }

            .bels-ranks {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 20px;
                margin-top: 2rem;
            }
            .rank-card {
                background: var(--color-bg);
                padding: 20px;
                border-radius: 4px;
                text-align: center;
                border: 2px solid transparent;
                transition: all var(--transition-fast);
            }
            .rank-card.current {
                border-color: var(--color-accent);
                background: rgba(165, 165, 141, 0.08);
            }
            .rank-card h5 {
                font-family: var(--font-serif);
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                color: var(--color-text);
            }
            .rank-card p {
                font-size: 0.9rem;
                color: #666;
            }

            /* Space Design Section */
            .space-design-section {
                background: var(--color-bg);
            }
            .space-design-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                align-items: center;
            }
            .space-design-image-wrapper {
                position: relative;
                overflow: hidden;
                border-radius: 4px;
            }
            .space-design-image {
                width: 100%;
                height: auto;
                display: block;
            }

            /* Recommended Plans Section */
            .plans-section {
                background: var(--color-white);
            }
            .plans-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 40px;
            }
            .plan-card {
                background: var(--color-bg);
                padding: 40px 30px;
                border-radius: 4px;
                transition: all var(--transition-fast);
            }
            .plan-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
            }
            .plan-card h4 {
                font-family: var(--font-serif);
                font-size: 2rem;
                margin-bottom: 1rem;
                color: var(--color-text);
            }
            .plan-card p {
                color: #666;
                line-height: 1.8;
                margin-bottom: 1.5rem;
            }
            .plan-features {
                list-style: none;
                padding: 0;
            }
            .plan-features li {
                padding-left: 1.5rem;
                margin-bottom: 0.8rem;
                position: relative;
                color: #555;
                font-size: 0.95rem;
            }
            .plan-features li::before {
                content: '→';
                position: absolute;
                left: 0;
                color: var(--color-accent);
            }

            /* Mobile Styles */
            @media (max-width: 768px) {
                .section {
                    padding: 60px 0;
                }
                .container {
                    padding: 0 20px;
                }
                .hero-section {
                    min-height: 50vh;
                    margin-top: 60px;
                }
                .hero-title {
                    font-size: 2.5rem;
                }
                .hero-subtitle {
                    font-size: 1rem;
                }
                .hero-description {
                    font-size: 0.9rem;
                }

                .ken-grid {
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
                .ken-grid .ken-image-wrapper {
                    order: 1;
                }
                .ken-grid .ken-content {
                    order: 2;
                }
                .ken-content h2 {
                    font-size: 2rem;
                }

                .section-header h2 {
                    font-size: 2rem;
                }
                .time-slots {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }

                .eco-grid {
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
                .bels-ranks {
                    grid-template-columns: 1fr;
                    gap: 15px;
                }

                .space-design-grid {
                    grid-template-columns: 1fr;
                    gap: 30px;
                }

                .plans-grid {
                    grid-template-columns: 1fr;
                    gap: 25px;
                }
            }
        `}</style>
    );
};

export default StoryConceptPageStyles;
