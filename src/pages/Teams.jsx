import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';
import TeamMember from '../components/TeamMember';

const Teams = () => {
    // --- EXECUTIVE TEAM ---
    const executives = [
        { name: "Carter Cameron", role: "President", linkedin: "https://linkedin.com/cartercameronfina", email: "president@quarcc.com", website: "" },
        { name: "Valentino Magniette-Bosseboeuf", role: "EVP", linkedin: "https://linkedin.com/in/valentino-mb/", email: "competitions@quarcc.com", website: "valentinomb.com" },
        { name: "Nicolas Romero", role: "Director of Operations", linkedin: "https://linkedin.com/in/nicolasdavidromero", email: "research@quarcc.com", website: "" },
        { name: "Chanakya Basupally", role: "Director of Research", linkedin: "https://www.linkedin.com/in/nicolasdavidromero/", email: "operations@quarcc.com", website: "https://bob.com" },
        { name: "Hani Hishmih", role: "VP Finance", linkedin: "https://www.linkedin.com/in/hanihishmih/", email: "finance@quarcc.com", website: "" },
        { name: "Kyra Rousketos", role: "VP Marketing", linkedin: "https://www.linkedin.com/in/kyra-rousketos/", email: "marketing@quarcc.com", website: "" },
        { name: "Alexander Nendsa", role: "VP Marketing", linkedin: "https://www.linkedin.com/in/alexander-nendsa-9aa927272/", email: "marketing@quarcc.com", website: "" },
        { name: "Cloe Monteith", role: "VP Internal", linkedin: "https://www.linkedin.com/in/cloe-monteith-a435301a9/", email: "internal@quarcc.com", website: "" },
    ];

    // --- SMA TEAM ---
    const smaMembers = [
        { name: "Thomas Ballard", role: "SMA Member", linkedin: "https://www.linkedin.com/in/thomas-ballard1/", email: "sma@quarcc.com", website: "" },
        { name: "Inga Fehlhaber", role: "SMA Member", linkedin: "https://www.linkedin.com/in/ingafehlhaber/", email: "sma@quarcc.com", website: "" },
        { name: "Andrew Koumoudjian", role: "SMA Member", linkedin: "https://www.linkedin.com/in/andrewkoumoudjian/", email: "sma@quarcc.com", website: "" },
        { name: "Rifat Katranci", role: "SMA Member", linkedin: "https://www.linkedin.com/in/rifat-katranci-a30405287/", email: "sma@quarcc.com", website: "" },
        { name: "Thomas Ballard", role: "SMA Member", linkedin: "https://www.linkedin.com/in/thomas-ballard1/", email: "sma@quarcc.com", website: "" },
        { name: "Thomas Ballard", role: "SMA Member", linkedin: "https://www.linkedin.com/in/thomas-ballard1/", email: "sma@quarcc.com", website: "" },
    ];

    // --- QRG TEAM ---
    const qrgMembers = [
        { name: "Anas Maaiti", role: "Research Analyst", linkedin: "https://linkedin.com/in/anas-maaiti", email: "Maaitianas@gmail.com", website: "" }
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
