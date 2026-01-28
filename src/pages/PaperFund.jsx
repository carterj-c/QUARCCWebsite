import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';

const PaperFund = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Helmet>
                <title>Paper Fund - QUARCC</title>
                <meta name="description" content="Explore QUARCC's paper portfolios and live trading strategies managed by our research teams." />
            </Helmet>
            <SystemBox title="Paper Portfolios">
                <p>The QRG manages several paper portfolios trading live on the market.</p>
                <div style={{ marginTop: '1rem', border: '1px dashed var(--color-border)', padding: '1rem' }}>
                    <h3>Portfolio Alpha</h3>
                    <p>Strategy: Statistical Arbitrage</p>
                    <p>Status: Active</p>
                    <p>YTD Return: +12.5%</p>
                </div>
            </SystemBox>
        </div>
    );
};

export default PaperFund;
