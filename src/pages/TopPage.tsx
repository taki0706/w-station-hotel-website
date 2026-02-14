import React from 'react';
import Hero from '../components/sections/Hero';
import StoryConcept from '../components/sections/StoryConcept';
import Rooms from '../components/sections/Rooms';
import Feature from '../components/sections/Feature';
import { type SiteContent } from '../content/siteContent';

type TopPageProps = {
    content: SiteContent;
};

const TopPage: React.FC<TopPageProps> = ({ content }) => {
    return (
        <div className="top-page">
            <Hero content={content} />
            <StoryConcept content={content} />
            <Rooms content={content} />
            <Feature content={content} />
        </div>
    );
};

export default TopPage;
