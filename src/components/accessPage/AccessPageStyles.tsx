import React from 'react';

const AccessPageStyles: React.FC = () => {
    return (
        <style>{`
            .access-page {
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
            .access-hero-section {
                min-height: 60vh;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                background: linear-gradient(135deg, #f5f5f0 0%, #e8e8e0 100%);
                margin-top: 80px;
            }
            .access-hero-content {
                max-width: 800px;
                padding: 0 20px;
            }
            .access-hero-title {
                font-family: var(--font-serif);
                font-size: 4rem;
                margin-bottom: 1rem;
                color: var(--color-text);
            }
            .access-hero-subtitle {
                font-family: var(--font-sans);
                font-size: 1.2rem;
                margin-bottom: 1.5rem;
                color: var(--color-accent);
                letter-spacing: 0.1em;
            }
            .access-hero-description {
                font-size: 1rem;
                line-height: 1.8;
                color: #666;
            }

            /* Location Section */
            .access-location-section {
                background: var(--color-white);
            }
            .location-content {
                max-width: 900px;
                margin: 0 auto;
            }
            .section-heading {
                font-family: var(--font-serif);
                font-size: 2.5rem;
                margin-bottom: 3rem;
                text-align: center;
                color: var(--color-text);
            }
            .address-card {
                background: var(--color-bg);
                padding: 40px;
                border-radius: 4px;
                margin-bottom: 3rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
            .address-line {
                font-size: 1.1rem;
                line-height: 2;
                color: var(--color-text);
                margin: 0.5rem 0;
            }
            .address-landmark {
                font-size: 1rem;
                color: var(--color-accent);
                margin-top: 1rem;
                font-weight: 500;
                letter-spacing: 0.05em;
            }
            .map-container {
                width: 100%;
                height: 450px;
                border-radius: 4px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            .map-container iframe {
                width: 100%;
                height: 100%;
                border: none;
            }

            /* Transport Section */
            .access-transport-section {
                background: var(--color-bg);
            }
            .section-subheading {
                font-family: var(--font-sans);
                font-size: 1rem;
                text-align: center;
                color: var(--color-accent);
                margin-bottom: 3rem;
                letter-spacing: 0.1em;
            }
            .transport-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 30px;
                margin-top: 3rem;
            }
            .transport-card {
                background: var(--color-white);
                padding: 40px 30px;
                border-radius: 4px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                transition: all var(--transition-smooth);
            }
            .transport-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            .transport-icon {
                font-size: 3rem;
                margin-bottom: 1.5rem;
                text-align: center;
            }
            .transport-title {
                font-family: var(--font-serif);
                font-size: 1.5rem;
                margin-bottom: 2rem;
                text-align: center;
                color: var(--color-text);
            }
            .transport-route {
                margin-bottom: 2rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid #e8e8e0;
            }
            .transport-route:last-child {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: none;
            }
            .route-name {
                font-weight: 600;
                color: var(--color-accent);
                margin-bottom: 0.5rem;
                font-size: 0.95rem;
                letter-spacing: 0.05em;
            }
            .route-detail {
                font-size: 0.9rem;
                line-height: 1.8;
                color: #666;
                margin-bottom: 0.5rem;
            }
            .route-time {
                font-size: 0.9rem;
                color: var(--color-text);
                font-weight: 500;
                margin-top: 0.5rem;
            }

            /* Spots Section */
            .access-spots-section {
                background: var(--color-white);
            }
            .spots-description {
                text-align: center;
                font-size: 1rem;
                color: #666;
                margin-bottom: 4rem;
                line-height: 1.8;
            }
            .spots-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                margin-top: 3rem;
            }
            .spot-category {
                background: var(--color-bg);
                padding: 40px;
                border-radius: 4px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
            .spot-category-heading {
                font-family: var(--font-serif);
                font-size: 1.8rem;
                margin-bottom: 2rem;
                color: var(--color-text);
                padding-bottom: 1rem;
                border-bottom: 2px solid var(--color-accent);
            }
            .spot-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .spot-item {
                margin-bottom: 1.5rem;
                padding-bottom: 1.5rem;
                border-bottom: 1px solid #e8e8e0;
            }
            .spot-item:last-child {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: none;
            }
            .spot-name {
                font-weight: 600;
                color: var(--color-text);
                margin-bottom: 0.5rem;
                font-size: 1.05rem;
            }
            .spot-access {
                font-size: 0.9rem;
                color: var(--color-accent);
                margin-top: 0.3rem;
            }
            .spot-description {
                font-size: 0.9rem;
                color: #666;
                line-height: 1.7;
                margin-top: 0.5rem;
            }
            .spot-note {
                font-size: 0.95rem;
                color: #888;
                margin-top: 2rem;
                padding-top: 1.5rem;
                border-top: 1px solid #e8e8e0;
                font-style: italic;
            }

            /* Mobile Styles */
            @media (max-width: 1024px) {
                .transport-grid {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
                .spots-grid {
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
            }

            @media (max-width: 768px) {
                .section {
                    padding: 60px 0;
                }
                .container {
                    padding: 0 20px;
                }
                .access-hero-section {
                    min-height: 50vh;
                    margin-top: 60px;
                }
                .access-hero-title {
                    font-size: 2.5rem;
                }
                .access-hero-subtitle {
                    font-size: 1rem;
                }
                .access-hero-description {
                    font-size: 0.9rem;
                }

                .section-heading {
                    font-size: 2rem;
                }
                .address-card {
                    padding: 30px 20px;
                }
                .address-line {
                    font-size: 1rem;
                }
                .map-container {
                    height: 350px;
                }

                .transport-card {
                    padding: 30px 20px;
                }
                .transport-icon {
                    font-size: 2.5rem;
                }
                .transport-title {
                    font-size: 1.3rem;
                }

                .spot-category {
                    padding: 30px 20px;
                }
                .spot-category-heading {
                    font-size: 1.5rem;
                }
            }
        `}</style>
    );
};

export default AccessPageStyles;
