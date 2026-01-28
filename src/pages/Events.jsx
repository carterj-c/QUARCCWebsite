import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';

const Events = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Helmet>
                <title>Events - QUARCC</title>
                <meta name="description" content="Stay updated with QUARCC's upcoming workshops, lectures, and social events in quantitative finance." />
            </Helmet>
            <SystemBox title="Upcoming Events">
                <p>No upcoming events at the moment. Check back soon!</p>
            </SystemBox>
            <SystemBox title="Past Events">
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>[2025-10-15] Quant Finance 101 Workshop</li>
                    <li>[2025-11-02] Algo Trading with Python</li>
                </ul>
            </SystemBox>
        </div>
    );
};

export default Events;
