import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BookingHero from '../components/bookingPage/BookingHero';
import RoomsList from '../components/bookingPage/RoomsList';
import CheckInInfo from '../components/bookingPage/CheckInInfo';
import BookingFAQ from '../components/bookingPage/BookingFAQ';
import StayRules from '../components/bookingPage/StayRules';
import { type BookingPageContent } from '../content/bookingPageContent';

type BookingPageProps = {
    content: BookingPageContent;
};

const BookingPage: React.FC<BookingPageProps> = ({ content }) => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const id = decodeURIComponent(location.hash.replace('#', ''));
        const timeoutId = window.setTimeout(() => {
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);

        return () => window.clearTimeout(timeoutId);
    }, [location.hash]);

    return (
        <div className="booking-page">
            <BookingHero content={content} />
            <RoomsList content={content} />
            <CheckInInfo content={content} />
            <BookingFAQ content={content} />
            <StayRules content={content} />
        </div>
    );
};

export default BookingPage;
