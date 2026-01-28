import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';

const Join = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Helmet>
                <title>Join Us - QUARCC</title>
                <meta name="description" content="Join QUARCC to connect with like-minded students and gain hands-on experience in quantitative finance." />
            </Helmet>
            <SystemBox title="Join Us">
                <p>Interested in Quantitative Finance? Join us!</p>
                <p>We welcome students from all backgrounds (Finance, CS, Math, Engineering).</p>
            </SystemBox>
            <SystemBox title="Contact">
                <p>Email: info@quarcc.com</p>
                <p>Instagram: @quarcc_concordia</p>
                <p>LinkedIn: QUARCC</p>
            </SystemBox>
        </div>
    );
};

export default Join;
