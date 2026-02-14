import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { type Locale, type SiteContent } from '../../content/siteContent';

type HeaderProps = {
    content: SiteContent;
    locale: Locale;
    onLocaleChange: (locale: Locale) => void;
};

const Header: React.FC<HeaderProps> = ({ content, locale, onLocaleChange }) => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isSolidHeader = isScrolled || location.pathname !== '/';

    // Header styles
    const headerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isSolidHeader ? '20px 40px' : '40px',
        backgroundColor: isSolidHeader ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        color: isSolidHeader ? 'var(--color-text)' : 'white',
        transition: 'all 0.4s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backdropFilter: isSolidHeader ? 'blur(10px)' : 'none',
        boxShadow: isSolidHeader ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
    };

    const navLinkStyle = {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.2rem',
        marginLeft: '30px',
        cursor: 'pointer',
        position: 'relative' as const,
    };

    const languageButtonStyle: React.CSSProperties = {
        background: 'transparent',
        color: 'inherit',
        padding: '8px 12px',
        border: 'none',
        fontFamily: 'var(--font-sans)',
        letterSpacing: '0.06em',
        cursor: 'pointer'
    };

    const languageWrapperStyle: React.CSSProperties = {
        display: 'flex',
        border: `1px solid ${isSolidHeader ? 'var(--color-text)' : 'white'}`
    };

    return (
        <header className="site-header" style={headerStyle}>
            <div className="site-header-title" style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                <Link to="/">{content.brand.short}</Link>
            </div>

            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '2rem', marginRight: '3rem' }} className="hidden-mobile site-header-links">
                    <Link to="/story" style={navLinkStyle}>{content.navigation.storyConcept}</Link>
                    <Link to="/rooms" style={navLinkStyle}>{content.navigation.rooms}</Link>
                    <Link to="/feature" style={navLinkStyle}>{content.navigation.feature}</Link>
                    <Link to="/access" style={navLinkStyle}>{content.navigation.access}</Link>
                </div>

                <div className="site-header-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="site-header-language" style={languageWrapperStyle} aria-label={content.navigation.language}>
                        <button
                            type="button"
                            onClick={() => onLocaleChange('jp')}
                            aria-pressed={locale === 'jp'}
                            style={{
                                ...languageButtonStyle,
                                backgroundColor: locale === 'jp' ? (isSolidHeader ? 'var(--color-text)' : 'white') : 'transparent',
                                color: locale === 'jp' ? (isSolidHeader ? 'white' : 'var(--color-text)') : 'inherit'
                            }}
                        >
                            JP
                        </button>
                        <button
                            type="button"
                            onClick={() => onLocaleChange('en')}
                            aria-pressed={locale === 'en'}
                            style={{
                                ...languageButtonStyle,
                                backgroundColor: locale === 'en' ? (isSolidHeader ? 'var(--color-text)' : 'white') : 'transparent',
                                color: locale === 'en' ? (isSolidHeader ? 'white' : 'var(--color-text)') : 'inherit'
                            }}
                        >
                            EN
                        </button>
                    </div>

                    <Link className="site-header-cta" to="/booking" style={{
                        background: isSolidHeader ? 'var(--color-text)' : 'white',
                        color: isSolidHeader ? 'white' : 'var(--color-text)',
                        padding: '12px 24px',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                    }}>
                        {content.navigation.booking}
                    </Link>

                    <button
                        type="button"
                        className="mobile-menu-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ cursor: 'pointer', marginLeft: '20px', display: 'none', border: 'none', background: 'transparent', color: 'inherit' }}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Simple Mobile Menu Overlay - To be improved with CSS properly */}
        </header>
    );
};

export default Header;
