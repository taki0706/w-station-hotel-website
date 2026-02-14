import React from 'react';
import { type AccessPageContent } from '../../content/accessPageContent';
import { TrainFront, BusFront, CarFront } from 'lucide-react';

type AccessTransportSectionProps = {
    content: AccessPageContent['transportSection'];
};

const AccessTransportSection: React.FC<AccessTransportSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="access-transport-section section">
            <div className="container">
                <h2 className="section-heading">{content.heading}</h2>
                <p className="section-subheading">{content.subheading}</p>
                <div className="transport-grid">
                    {content.methods.map((method) => (
                        <div key={method.id} className="transport-card">
                            <div className="transport-icon">
                                {method.icon === 'train' && <TrainFront size={32} />}
                                {method.icon === 'bus' && <BusFront size={32} />}
                                {method.icon === 'car' && <CarFront size={32} />}
                            </div>
                            <h3 className="transport-title">{method.title}</h3>
                            <div className="transport-routes">
                                {method.routes.map((route, index) => (
                                    <div key={index} className="transport-route">
                                        <p className="route-name">{route.route}</p>
                                        <p className="route-detail">{route.detail}</p>
                                        <p className="route-time">{route.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccessTransportSection;
