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
            <SystemBox title="General Inquiries">
                <p>Email: <a href="mailto:info@quarcc.com">info@quarcc.com</a></p>
                <p>Instagram: <a href="https://www.instagram.com/quarcc.csu/">@quarcc.csu</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/company/quarcc/">QUARCC</a></p>
            </SystemBox>
            <SystemBox title="Quantitative Research Group">
                <p>Email: <a href="mailto:research.quarcc@gmail.com">research.quarcc@gmail.com</a></p>
                <p>Lead: [Chanakya Basupally]</p>
            </SystemBox>

        </div>
    );
};


//       <SystemBox title="Stock Market Analyst">
//                <p>Email: <a href="mailto:quarccsma@gmail.com">quarccsma@gmail.com</a></p>
//                <p>Lead: [Analyst Lead Name]</p>
//            </SystemBox>