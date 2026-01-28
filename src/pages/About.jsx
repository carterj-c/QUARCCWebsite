import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';

const About = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Helmet>
                <title>About - QUARCC</title>
                <meta name="description" content="Learn about QUARCC's mission to educate students in quantitative finance through workshops, lectures, and research." />
            </Helmet>
            <SystemBox title="About QUARCC">
                <p>QUARCC is a student-run club at the University of Concordia in Montreal, Quebec, Canada.</p>
                <p style={{ marginTop: '1rem' }}>Our club is dedicated to providing students with the opportunity to learn about and engage with the field of quantitative finance.</p>
                <p style={{ marginTop: '1rem' }}>We host a variety of events throughout the year, including lectures, workshops, and social gatherings.</p>
            </SystemBox>
        </div>
    );
};

export default About;
