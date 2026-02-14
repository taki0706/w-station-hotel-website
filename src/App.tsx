import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TopPage from './pages/TopPage';
import StoryConceptPage from './pages/StoryConceptPage';
import FeaturePage from './pages/FeaturePage';
import AccessPage from './pages/AccessPage';
import BookingPage from './pages/BookingPage';
import { siteContents, type Locale } from './content/siteContent';
import { storyConceptPageContents } from './content/storyConceptPageContent';
import { featurePageContents } from './content/featurePageContent';
import { accessPageContents } from './content/accessPageContent';
import { bookingPageContents } from './content/bookingPageContent';

const LOCALE_STORAGE_KEY = 'wstation-locale';

const App: React.FC = () => {
    const [locale, setLocale] = useState<Locale>(() => {
        const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
        return savedLocale === 'en' ? 'en' : 'jp';
    });

    const content = siteContents[locale];
    const storyConceptContent = storyConceptPageContents[locale];
    const featureContent = featurePageContents[locale];
    const accessContent = accessPageContents[locale];
    const bookingContent = bookingPageContents[locale];

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
                        <Route path="/feature" element={<FeaturePage content={featureContent} />} />
                        <Route path="/access" element={<AccessPage content={accessContent} />} />
                        <Route path="/booking" element={<BookingPage content={bookingContent} />} />
                    </Routes>
                </main>
                <Footer content={content} />
            </div>
        </Router>
    );
};

export default App;
