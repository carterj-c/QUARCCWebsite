import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';
import { events } from '../data/events';

const Events = () => {
    // Get current date and time
    const now = new Date();

    // Helper to parse event datetime
    const getEventDateTime = (event) => {
        return new Date(`${event.date}T${event.endTime}`);
    };

    // Filter events
    const upcomingEvents = events.filter(event => getEventDateTime(event) >= now).sort((a, b) => getEventDateTime(a) - getEventDateTime(b));
    const pastEvents = events.filter(event => getEventDateTime(event) < now).sort((a, b) => getEventDateTime(b) - getEventDateTime(a)); // Most recent past event first

    const EventItem = ({ event }) => (
        <li style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                {event.link ? (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>
                        {event.title}
                    </a>
                ) : (
                    event.title
                )}
            </div>
            <div style={{ color: '#666', marginBottom: '5px' }}>
                {event.date} | {event.startTime} - {event.endTime}
            </div>
            <div style={{ marginBottom: '5px' }}>
                📍 <a href={event.locationLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#555' }}>
                    {event.location}
                </a>
                {event.room && <span> ({event.room})</span>}
            </div>
            <div>{event.description}</div>
        </li>
    );

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Helmet>
                <title>Events - QUARCC</title>
                <meta name="description" content="Stay updated with QUARCC's upcoming workshops, lectures, and social events in quantitative finance." />
            </Helmet>

            <SystemBox title="Upcoming Events">
                {upcomingEvents.length > 0 ? (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {upcomingEvents.map(event => (
                            <EventItem key={event.id} event={event} />
                        ))}
                    </ul>
                ) : (
                    <p>No upcoming events at the moment. Check back soon!</p>
                )}
            </SystemBox>

            <SystemBox title="Past Events">
                {pastEvents.length > 0 ? (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {pastEvents.map(event => (
                            <EventItem key={event.id} event={event} />
                        ))}
                    </ul>
                ) : (
                    <p>No past events to show.</p>
                )}
            </SystemBox>
        </div>
    );
};

export default Events;
