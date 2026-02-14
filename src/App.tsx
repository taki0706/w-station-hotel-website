import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TopPage from './pages/TopPage';
import StoryConceptPage from './pages/StoryConceptPage';
import { siteContents, type Locale } from './content/siteContent';
import { storyConceptPageContents } from './content/storyConceptPageContent';

const LOCALE_STORAGE_KEY = 'wstation-locale';

const App: React.FC = () => {
    const [locale, setLocale] = useState<Locale>(() => {
        const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
        return savedLocale === 'en' ? 'en' : 'jp';
    });

    const content = siteContents[locale];
    const storyConceptContent = storyConceptPageContents[locale];

    useEffect(() => {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
        document.documentElement.lang = locale === 'jp' ? 'ja' : 'en';
    }, [locale]);

    return (
        <Router>
            <div className="app">
                <Header content={content} locale={locale} onLocaleChange={setLocale} />
                <main>
                    <Routes>
                        <Route path="/" element={<TopPage content={content} />} />
                        <Route path="/story" element={<StoryConceptPage content={storyConceptContent} />} />
                        <Route path="/feature" element={<div className="section container">{content.pages.feature}</div>} />
                        <Route path="/rooms" element={<div className="section container">{content.pages.rooms}</div>} />
                        <Route path="/access" element={<div className="section container">{content.pages.access}</div>} />
                        <Route path="/booking" element={<div className="section container">{content.pages.booking}</div>} />
                    </Routes>
                </main>
                <Footer content={content} />
            </div>
        </Router>
    );
};

export default App;
