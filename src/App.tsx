import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TopPage from './pages/TopPage';
import { siteContent } from './content/siteContent';

// Placeholder pages
const StoryPage = () => <div className="section container">{siteContent.pages.story}</div>;
const FeaturePage = () => <div className="section container">{siteContent.pages.feature}</div>;
const RoomsPage = () => <div className="section container">{siteContent.pages.rooms}</div>;
const AccessPage = () => <div className="section container">{siteContent.pages.access}</div>;
const BookingPage = () => <div className="section container">{siteContent.pages.booking}</div>;

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<TopPage />} />
                        <Route path="/story" element={<StoryPage />} />
                        <Route path="/feature" element={<FeaturePage />} />
                        <Route path="/rooms" element={<RoomsPage />} />
                        <Route path="/access" element={<AccessPage />} />
                        <Route path="/booking" element={<BookingPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
