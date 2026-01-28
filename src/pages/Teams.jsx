import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';

const Teams = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Helmet>
                <title>Teams - QUARCC</title>
                <meta name="description" content="Meet the QUARCC executive team and explore our research groups: SMA (Stock Market Analysts) and QRG (Quantitative Research Group)." />
            </Helmet>
            <SystemBox title="Executives">
                <p>President: [Name]</p>
                <p>VP External: [Name]</p>
                <p>VP Internal: [Name]</p>
            </SystemBox>
            <SystemBox title="Research Groups">
                <h3>Stock Market Analysts (SMA)</h3>
                <p>A guided curriculum on systematic trading.</p>
                <br />
                <h3>QUARCC Research Group (QRG)</h3>
                <p>Advanced teams managing paper portfolios: Research, Development, Trading.</p>
            </SystemBox>
        </div>
    );
};

export default Teams;
