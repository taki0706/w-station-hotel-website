import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../content/siteContent';

const Footer: React.FC = () => {
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
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>{siteContent.brand.full}</h3>
                    <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.8' }}>
                        {siteContent.footer.descriptionLine1}<br />
                        {siteContent.footer.descriptionLine2}
                    </p>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{siteContent.footer.navigationHeading}</h4>
                    <Link to="/story" style={linkStyle}>{siteContent.navigation.storyConcept}</Link>
                    <Link to="/rooms" style={linkStyle}>{siteContent.navigation.rooms}</Link>
                    <Link to="/feature" style={linkStyle}>{siteContent.navigation.feature}</Link>
                    <Link to="/access" style={linkStyle}>{siteContent.navigation.access}</Link>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{siteContent.footer.contactHeading}</h4>
                    <p style={{ color: '#aaa', marginBottom: '10px' }}>{siteContent.footer.phone}</p>
                    <p style={{ color: '#aaa' }}>{siteContent.footer.email}</p>
                </div>
            </div>

            <div style={{ borderTop: '1px solid #333', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} {siteContent.brand.full}. {siteContent.footer.copyright}</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Social icons could go here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
