import React from 'react';
import Hero from '../components/sections/Hero';
import StoryConcept from '../components/sections/StoryConcept';
import Rooms from '../components/sections/Rooms';
import Feature from '../components/sections/Feature';

const TopPage: React.FC = () => {
    return (
        <div className="top-page">
            <Hero />
            <StoryConcept />
            <Rooms />
            <Feature />
        </div>
    );
};

export default TopPage;
