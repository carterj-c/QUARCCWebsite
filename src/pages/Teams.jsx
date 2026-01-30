import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';
import TeamMember from '../components/TeamMember';

const Teams = () => {
    // --- EXECUTIVE TEAM ---
    const executives = [
        { name: "Carter Cameron", role: "President", linkedin: "https://linkedin.com/cartercameronfina", email: "president@quarcc.com", website: "https://jane.com" },
        { name: "Valentino Magniette-Bosseboeuf", role: "EVP", linkedin: "https://linkedin.com/in/valentino-mb/", email: "competitions@quarcc.com", website: "valentinomb.com" }
    ];

    // --- SMA TEAM ---
    const smaMembers = [
        { name: "Nicolas Romero", role: "SMA Lead", linkedin: "https://linkedin.com/in/nicolasdavidromero", email: "sma@quarcc.com", website: "" },
        { name: "Chanakya Basupally", role: "", linkedin: "https://linkedin.com", email: "bob@quarcc.com", website: "https://bob.com" }
    ];

    // --- QRG TEAM ---
    const qrgMembers = [
        { name: "Chanakya Basupally", role: "Director of Research", linkedin: "https://linkedin.com/in/chanakyabasupally", email: "research@quarcc.com", website: "" },
        { name: "Anas Maaiti", role: "Research Analyst", linkedin: "https://linkedin.com/in/anas-maaiti", email: "[EMAIL_ADDRESS]", website: "[Example.com]" }
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
