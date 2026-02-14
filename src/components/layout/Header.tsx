import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../../content/siteContent';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Header styles
    const headerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '20px 40px' : '40px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        color: isScrolled ? 'var(--color-text)' : 'white',
        transition: 'all 0.4s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
    };

    const navLinkStyle = {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.2rem',
        marginLeft: '30px',
        cursor: 'pointer',
        position: 'relative' as const,
    };

    return (
        <header style={headerStyle}>
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                <Link to="/">{siteContent.brand.short}</Link>
            </div>

            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '2rem', marginRight: '3rem' }} className="hidden-mobile">
                    <Link to="/story" style={navLinkStyle}>{siteContent.navigation.storyConcept}</Link>
                    <Link to="/rooms" style={navLinkStyle}>{siteContent.navigation.rooms}</Link>
                    <Link to="/feature" style={navLinkStyle}>{siteContent.navigation.feature}</Link>
                    <Link to="/access" style={navLinkStyle}>{siteContent.navigation.access}</Link>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button style={{
                        background: 'transparent',
                        border: `1px solid ${isScrolled ? 'var(--color-text)' : 'white'}`,
                        color: 'inherit',
                        padding: '8px 16px',
                        borderRadius: '0',
                        fontFamily: 'var(--font-sans)',
                        cursor: 'pointer'
                    }}>
                        {siteContent.navigation.language}
                    </button>

                    <Link to="/booking" style={{
                        background: isScrolled ? 'var(--color-text)' : 'white',
                        color: isScrolled ? 'white' : 'var(--color-text)',
                        padding: '12px 24px',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                    }}>
                        {siteContent.navigation.booking}
                    </Link>

                    <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer', marginLeft: '20px', display: 'none' }}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </nav>

            {/* Simple Mobile Menu Overlay - To be improved with CSS properly */}
        </header>
    );
};

export default Header;
