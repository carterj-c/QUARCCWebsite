import React from 'react';
import './SystemBox.css';

const SystemBox = ({ title, children }) => {
    return (
        <fieldset className="system-box">
            <legend className="system-box-title">── {title} ──</legend>
            <div className="system-box-content">
                {children}
            </div>
        </fieldset>
    );
};

export default SystemBox;
