import React from 'react';
import { Outlet } from 'react-router-dom';
import CliInput from './CliInput';
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
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
