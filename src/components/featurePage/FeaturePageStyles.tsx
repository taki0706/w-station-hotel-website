import React from 'react';

const FeaturePageStyles: React.FC = () => {
    return (
        <style>{`
            .feature-page {
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

            /* Feature Section */
            .feature-section {
                background: var(--color-white);
            }
            .feature-section:nth-child(odd) {
                background: var(--color-bg);
            }
            .feature-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                align-items: center;
            }
            .feature-grid.reverse {
                direction: rtl;
            }
            .feature-grid.reverse > * {
                direction: ltr;
            }
            .feature-image-wrapper {
                position: relative;
                overflow: hidden;
                border-radius: 4px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            .feature-image {
                width: 100%;
                height: auto;
                display: block;
                transition: transform 0.5s ease;
            }
            .feature-image-wrapper:hover .feature-image {
                transform: scale(1.05);
            }

            .feature-content h2 {
                font-family: var(--font-serif);
                font-size: 2.5rem;
                margin-bottom: 0.5rem;
                color: var(--color-text);
            }
            .feature-content h3 {
                font-family: var(--font-sans);
                font-size: 1rem;
                color: var(--color-accent);
                margin-bottom: 2rem;
                letter-spacing: 0.1em;
            }
            .feature-content p {
                font-size: 1rem;
                line-height: 1.9;
                color: #555;
                margin-bottom: 1.5rem;
            }
            .feature-list {
                list-style: none;
                padding: 0;
                margin: 2rem 0;
            }
            .feature-list li {
                padding-left: 1.5rem;
                margin-bottom: 1rem;
                position: relative;
                color: #555;
                line-height: 1.8;
            }
            .feature-list li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--color-accent);
                font-weight: bold;
            }

            /* Artist Info (Sento Section) */
            .artist-info {
                background: var(--color-bg);
                padding: 30px;
                border-radius: 4px;
                margin-top: 2rem;
            }
            .feature-sento-section .artist-info {
                background: var(--color-white);
            }
            .artist-info h4 {
                font-family: var(--font-serif);
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
                color: var(--color-text);
            }
            .artist-title {
                font-size: 0.9rem;
                color: var(--color-accent);
                margin-bottom: 1rem !important;
                letter-spacing: 0.05em;
            }
            .artist-link {
                display: inline-block;
                margin-top: 1rem;
                color: var(--color-accent);
                text-decoration: none;
                border-bottom: 1px solid var(--color-accent);
                transition: all var(--transition-fast);
            }
            .artist-link:hover {
                color: var(--color-text);
                border-bottom-color: var(--color-text);
            }

            /* Feature Note */
            .feature-note {
                font-size: 0.9rem;
                color: #888;
                margin-top: 2rem;
                padding: 15px 20px;
                background: var(--color-bg);
                border-left: 3px solid var(--color-accent);
                border-radius: 4px;
            }
            .feature-section:nth-child(odd) .feature-note {
                background: var(--color-white);
            }
            .feature-note-highlight {
                display: inline-block;
                padding: 8px 16px;
                background: var(--color-accent);
                color: var(--color-white);
                font-size: 0.85rem;
                border-radius: 20px;
                margin-bottom: 1rem;
                font-family: var(--font-sans);
                letter-spacing: 0.05em;
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

                .feature-grid {
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
                .feature-grid.reverse {
                    direction: ltr;
                }
                .feature-grid .feature-image-wrapper {
                    order: 1;
                }
                .feature-grid .feature-content {
                    order: 2;
                }
                .feature-content h2 {
                    font-size: 2rem;
                }

                .artist-info {
                    padding: 20px;
                }
            }
        `}</style>
    );
};

export default FeaturePageStyles;
