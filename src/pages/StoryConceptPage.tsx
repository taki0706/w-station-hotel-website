import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { type StoryConceptPageContent } from '../content/storyConceptPageContent';
import {
    StoryConceptPageStyles,
    StoryEcoSection,
    StoryHeroSection,
    StoryKenSection,
    StoryRecommendedPlansSection,
    StorySpaceDesignSection,
    StoryStayStyleSection
} from '../components/storyConceptPage';

type StoryConceptPageProps = {
    content: StoryConceptPageContent;
};

const StoryConceptPage: React.FC<StoryConceptPageProps> = ({ content }) => {
    const location = useLocation();

    // スムーズスクロールのハンドリング（トップページからのハッシュリンク対応）
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <div className="story-concept-page">
            <StoryConceptPageStyles />
            <StoryHeroSection content={content.hero} />
            <StoryKenSection content={content.kenSection} />
            <StoryStayStyleSection content={content.stayStyleSection} />
            <StoryEcoSection content={content.ecoSection} />
            <StorySpaceDesignSection content={content.spaceDesignSection} />
        </div>
    );
};

export default StoryConceptPage;
