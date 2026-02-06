import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AsciiLogoAnimation from '../components/AsciiLogoAnimation';
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
                <AsciiLogoAnimation />
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

                <SystemBox title="System Navigation">
                    <div className="nav-links-grid">
                        <Link to="/about" className="nav-link">
                            <span className="nav-key">about</span>
                            <span className="nav-desc">Club Information</span>
                        </Link>
                        <Link to="/events" className="nav-link">
                            <span className="nav-key">events</span>
                            <span className="nav-desc">Upcoming Events</span>
                        </Link>
                        <Link to="/teams" className="nav-link">
                            <span className="nav-key">teams</span>
                            <span className="nav-desc">Our Structure</span>
                        </Link>
                        <Link to="/join" className="nav-link">
                            <span className="nav-key">join</span>
                            <span className="nav-desc">Recruitment</span>
                        </Link>
                        <Link to="/paper-fund" className="nav-link">
                            <span className="nav-key">paper-fund</span>
                            <span className="nav-desc">Live Portfolios</span>
                        </Link>
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
