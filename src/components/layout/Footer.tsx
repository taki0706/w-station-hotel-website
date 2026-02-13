import React from 'react';
import { Link } from 'react-router-dom';

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
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>W.STATION HOTEL</h3>
                    <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.8' }}>
                        Where your journey becomes a story.<br />
                        Experience the art of stay.
                    </p>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>NAVIGATION</h4>
                    <Link to="/story" style={linkStyle}>Story & Concept</Link>
                    <Link to="/rooms" style={linkStyle}>Rooms</Link>
                    <Link to="/feature" style={linkStyle}>Feature</Link>
                    <Link to="/access" style={linkStyle}>Access</Link>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>CONTACT</h4>
                    <p style={{ color: '#aaa', marginBottom: '10px' }}>080-5520-1173</p>
                    <p style={{ color: '#aaa' }}>info@w-station-hotel.com</p>
                </div>
            </div>

            <div style={{ borderTop: '1px solid #333', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} W.STATION HOTEL. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Social icons could go here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
