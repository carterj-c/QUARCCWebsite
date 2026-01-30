import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import CliInput from './CliInput';
import './Layout.css';

const Layout = () => {
    const location = useLocation();
    const showHomeLink = location.pathname !== '/';

    return (
        <div className="layout-container">
            {showHomeLink && (
                <Link to="/" className="home-link">
                    &lt; Home
                </Link>
            )}
            <main className="layout-content">
                <Outlet />
            </main>
            <footer className="layout-footer">
                <CliInput />
            </footer>
        </div>
    );
};

export default Layout;
