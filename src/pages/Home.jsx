import React from 'react';
import { Helmet } from 'react-helmet-async';
import AsciiLogo from '../components/AsciiLogo';
import SystemBox from '../components/SystemBox';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Helmet>
                <title>QUARCC - Quantitative Research and Competitions Club</title>
                <meta name="description" content="QUARCC is a student-run club at Concordia University dedicated to quantitative finance, featuring research groups and algorithmic trading." />
            </Helmet>
            <div className="home-left">
                <AsciiLogo />
                <div className="news-container">
                    [News]
                </div>
            </div>
            <div className="home-right">
                <SystemBox title="Club Details">
                    <div className="detail-row">
                        <span className="label">Name:</span> <span className="value">QUARCC</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Full Name:</span> <span className="value">Quantitative Research and Competitions Club</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Location:</span> <span className="value">Concordia University, Montreal</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Mission:</span> <span className="value">Quant Finance Education & Research</span>
                    </div>
                </SystemBox>

                <SystemBox title="Technical Stack">
                    <div className="detail-row">
                        <span className="label">Groups:</span> <span className="value">SMA (Stock Market Analysts), QRG (Research Group)</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Activities:</span> <span className="value">Lectures, Workshops, Paper Portfolios</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Status:</span> <span className="value green">Active</span>
                    </div>
                </SystemBox>

                <SystemBox title="Project Status">
                    <div className="detail-row">
                        <span className="label">Events:</span> <span className="value">Workshops ongoing</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Recruitment:</span> <span className="value">Open for all students</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Contact:</span> <span className="value">info@quarcc.com</span>
                    </div>
                </SystemBox>
            </div>
        </div>
    );
};

export default Home;
