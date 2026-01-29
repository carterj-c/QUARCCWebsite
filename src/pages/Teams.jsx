import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';
import TeamMember from '../components/TeamMember';

const Teams = () => {
    // --- EXECUTIVE TEAM ---
    const executives = [
        { name: "Jane Doe", role: "President", linkedin: "https://linkedin.com", email: "jane@quarcc.com", website: "https://jane.com" },
        { name: "John Smith", role: "VP External", linkedin: "https://linkedin.com", email: "john@quarcc.com", website: "" }
    ];

    // --- SMA TEAM ---
    const smaMembers = [
        { name: "Alice Johnson", role: "SMA Lead", linkedin: "https://linkedin.com", email: "alice@quarcc.com", website: "" },
        { name: "Bob Williams", role: "Analyst", linkedin: "https://linkedin.com", email: "bob@quarcc.com", website: "https://bob.com" }
    ];

    // --- QRG TEAM ---
    const qrgMembers = [
        { name: "Charlie Brown", role: "Head of Research", linkedin: "https://linkedin.com", email: "charlie@quarcc.com", website: "" },
        { name: "Diana Prince", role: "Algo Developer", linkedin: "https://linkedin.com", email: "diana@quarcc.com", website: "https://diana.dev" }
    ];

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Helmet>
                <title>Teams - QUARCC</title>
                <meta name="description" content="Meet the QUARCC executive team and explore our research groups: SMA (Stock Market Analysts) and QRG (Quantitative Research Group)." />
            </Helmet>

            <SystemBox title="Executives">
                {executives.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </SystemBox>

            <SystemBox title="QUARCC Research Group (QRG)">
                <p style={{ marginBottom: '20px', color: 'var(--color-text)' }}>
                    Advanced teams managing paper portfolios: Research, Development, Trading.
                </p>
                {qrgMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </SystemBox>

            <SystemBox title="Stock Market Analysts (SMA)">
                <p style={{ marginBottom: '20px', color: 'var(--color-text)' }}>
                    A guided curriculum on systematic trading.
                </p>
                {smaMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </SystemBox>
        </div>
    );
};

export default Teams;
