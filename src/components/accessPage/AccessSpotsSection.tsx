import React from 'react';
import { type AccessPageContent } from '../../content/accessPageContent';

type AccessSpotsSectionProps = {
    content: AccessPageContent['spotsSection'];
};

const AccessSpotsSection: React.FC<AccessSpotsSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="access-spots-section section">
            <div className="container">
                <h2 className="section-heading">{content.heading}</h2>
                <p className="section-subheading">{content.subheading}</p>
                <p className="spots-description">{content.description}</p>

                <div className="spots-grid">
                    {/* Surf Spots */}
                    <div className="spot-category">
                        <h3 className="spot-category-heading">{content.surfSpots.heading}</h3>
                        <ul className="spot-list">
                            {content.surfSpots.spots.map((spot, index) => (
                                <li key={index} className="spot-item">
                                    <p className="spot-name">{spot.name}</p>
                                    <p className="spot-access">{spot.access}</p>
                                </li>
                            ))}
                        </ul>
                        {content.surfSpots.note && (
                            <p className="spot-note">{content.surfSpots.note}</p>
                        )}
                    </div>

                    {/* Tourist Spots */}
                    <div className="spot-category">
                        <h3 className="spot-category-heading">{content.touristSpots.heading}</h3>
                        <ul className="spot-list">
                            {content.touristSpots.spots.map((spot, index) => (
                                <li key={index} className="spot-item">
                                    <p className="spot-name">{spot.name}</p>
                                    <p className="spot-description">{spot.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessSpotsSection;
