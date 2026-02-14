import React from 'react';
import { type AccessPageContent } from '../../content/accessPageContent';

type AccessLocationSectionProps = {
    content: AccessPageContent['locationSection'];
};

const AccessLocationSection: React.FC<AccessLocationSectionProps> = ({ content }) => {
    return (
        <section id={content.id} className="access-location-section section">
            <div className="container">
                <h2 className="section-heading">{content.heading}</h2>
                <div className="location-content">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.5827339999997!2d139.9765382!3d35.0206625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6017fdcce7a57121%3A0x5c3a2e964a103ca3!2z44CSMjk5LTI3MTMg5Y2D6JGJ55yM5Y2X5oi_57eP5biC5ZKM55Sw55S677yR77yU77yS!5e0!3m2!1sja!2sjp!4v1639000000000!5m2!1sja!2sjp"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="W.STATION HOTEL Location Map"
                        />
                    </div>
                    <div className="address-card">
                        <p className="address-line">
                            {content.address.postal}
                        </p>
                        <p className="address-line">
                            {content.address.prefecture}{content.address.city}
                            {content.address.street}
                        </p>
                        <p className="address-landmark">
                            {content.address.landmark}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccessLocationSection;
