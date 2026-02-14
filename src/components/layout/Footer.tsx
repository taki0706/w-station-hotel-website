import React from 'react';
import { Link } from 'react-router-dom';
import { type SiteContent } from '../../content/siteContent';

type FooterProps = {
    content: SiteContent;
};

const Footer: React.FC<FooterProps> = ({ content }) => {
    const footerStyle: React.CSSProperties = {
        backgroundColor: '#111',
        color: '#fff',
        padding: '80px 40px 40px',
        fontFamily: 'var(--font-sans)',
    };

    const linkStyle: React.CSSProperties = {
        display: 'block',
        marginBottom: '10px',
        color: '#aaa',
        textDecoration: 'none',
        transition: 'color 0.3s',
    };

    return (
        <footer style={footerStyle}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>{content.brand.full}</h3>
                    <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.8' }}>
                        {content.footer.descriptionLine1}<br />
                        {content.footer.descriptionLine2}
                    </p>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{content.footer.navigationHeading}</h4>
                    <Link to="/story" style={linkStyle}>{content.navigation.storyConcept}</Link>
                    <Link to="/rooms" style={linkStyle}>{content.navigation.rooms}</Link>
                    <Link to="/feature" style={linkStyle}>{content.navigation.feature}</Link>
                    <Link to="/access" style={linkStyle}>{content.navigation.access}</Link>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{content.footer.contactHeading}</h4>
                    <p style={{ color: '#aaa', marginBottom: '10px' }}>{content.footer.phone}</p>
                    <p style={{ color: '#aaa' }}>{content.footer.email}</p>
                </div>
            </div>

            <div style={{ borderTop: '1px solid #333', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} {content.brand.full}. {content.footer.copyright}</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Social icons could go here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
