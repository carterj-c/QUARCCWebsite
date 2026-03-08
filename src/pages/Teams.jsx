import React from 'react';
import { Helmet } from 'react-helmet-async';
import SystemBox from '../components/SystemBox';
import TeamMember from '../components/TeamMember';

const Teams = () => {
    // --- EXECUTIVE TEAM ---
    const executives = [
        { name: "Carter Cameron", role: "President", linkedin: "https://linkedin.com/cartercameronfina", email: "president@quarcc.com", website: "" },
        { name: "Valentino Magniette-Bosseboeuf", role: "EVP", linkedin: "https://linkedin.com/in/valentino-mb/", email: "competitions@quarcc.com", website: "valentinomb.com" },
        { name: "Nicolas Romero", role: "Director of Operations", linkedin: "https://linkedin.com/in/nicolasdavidromero", email: "sma@quarcc.com", website: "" },
        { name: "Chanakya Basupally", role: "Director of Research", linkedin: "https://www.linkedin.com/in/chanakyabasupally/", email: "operations@quarcc.com", website: "https://bob.com" },
        { name: "Hani Hishmih", role: "VP Finance", linkedin: "https://www.linkedin.com/in/hanihishmih/", email: "finance@quarcc.com", website: "" },
        { name: "Kyra Rousketos", role: "VP Marketing", linkedin: "https://www.linkedin.com/in/kyra-rousketos/", email: "marketing@quarcc.com", website: "" },
        { name: "Alexander Nendsa", role: "VP Marketing", linkedin: "https://www.linkedin.com/in/alexander-nendsa-9aa927272/", email: "marketing@quarcc.com", website: "" },
        { name: "Cloe Monteith", role: "VP Internal", linkedin: "https://www.linkedin.com/in/cloe-monteith-a435301a9/", email: "internal@quarcc.com", website: "" },
    ];

    // --- SMA TEAM ---
    const smaMembers = [
        { name: "Bryan Zhang", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/bryan-zhg/", email: "sma@quarcc.com", website: "" },
        { name: "Nathan Au", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/-nathanau/", email: "sma@quarcc.com", website: "" },
        { name: "Monish Das", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/monish-das-b45bba338/", email: "sma@quarcc.com", website: "" },
        { name: "Sebastian Bobos", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/sebastian-b-8b670129a/", email: "sma@quarcc.com", website: "" },
        { name: "Shiri Rosen", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/shiri-rosen/", email: "sma@quarcc.com", website: "" },
        { name: "Temuujin Nomynbayasgalan", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/tnomynbayasgalan/", email: "sma@quarcc.com", website: "" },
        { name: "Sebastian Bobos", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/sebastian-b-8b670129a/", email: "sma@quarcc.com", website: "" },
        { name: "Vidhyaasagar Shanmugam", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/vidhyaasagar-shanmugam-668143140/", email: "sma@quarcc.com", website: "" },
        { name: "Sebastian Serban", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/sebastian-serban003465/", email: "sma@quarcc.com", website: "" },
        { name: "Andrei Turcu", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/andrei--turcu/", email: "sma@quarcc.com", website: "" },
        { name: "Giuseppe-Luca Cianflone", role: "Quantitative Analyst", linkedin: "https://www.linkedin.com/in/gcianflone/", email: "sma@quarcc.com", website: "" },


    ];

    // --- QRG TEAM ---
    const qrgMembers = [
        { name: "Anas Maaiti", role: "Research Lead", linkedin: "https://linkedin.com/in/anas-maaiti", email: "Maaitianas@gmail.com", website: "" },
        { name: "Inga Fehlhaber", role: "Research Lead", linkedin: "https://www.linkedin.com/in/ingafehlhaber/", email: "sma@quarcc.com", website: "" },
        { name: "Andrew Koumoudjian", role: "Research Lead", linkedin: "https://www.linkedin.com/in/andrewkoumoudjian/", email: "sma@quarcc.com", website: "" },
        { name: "Rifat Katranci", role: "Research Lead", linkedin: "https://www.linkedin.com/in/rifat-katranci-a30405287/", email: "sma@quarcc.com", website: "" },
        { name: "Thomas Ballard", role: "Research Lead", linkedin: "https://www.linkedin.com/in/thomas-ballard1/", email: "sma@quarcc.com", website: "" },
        { name: "Georges Hawi", role: "Research Lead", linkedin: "https://www.linkedin.com/in/georges-hawi-1b1394375/", email: "sma@quarcc.com", website: "" },
        { name: "Shubham Singh", role: "Research Lead", linkedin: "https://www.linkedin.com/in/shubhamsingh0608/", email: "sma@quarcc.com", website: "" },
        { name: "Hubert Lefebvre", role: "Research Lead", linkedin: "https://www.linkedin.com/in/hubert-lefebvre-476a26321/", email: "sma@quarcc.com", website: "" },
        { name: "Hedi Belkahia", role: "Research Lead", linkedin: "https://www.linkedin.com/in/hedi-belkahia/", email: "sma@quarcc.com", website: "" },
        { name: "Félix Aubry DeFilippo", role: "Research Lead", linkedin: "https://www.linkedin.com/in/felix-aubry-d/", email: "sma@quarcc.com", website: "" },
        { name: "Alexandre Wu", role: "Research Lead", linkedin: "https://www.linkedin.com/in/alexandre-wu-202441305/", email: "sma@quarcc.com", website: "" },

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

            <SystemBox title="Quantitative Research Lead">
                <p style={{ marginBottom: '20px', color: 'var(--color-text)' }}>
                    Advanced teams managing paper portfolios: Research, Development, Trading.
                </p>
                {qrgMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </SystemBox>

            <SystemBox title="Quantitative Analysts">
                <p style={{ marginBottom: '20px', color: 'var(--color-text)' }}>
                    A guided curriculum on systematic trading; helping Research Leads with research.
                </p>
                {smaMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </SystemBox>
        </div>
    );
};

export default Teams;
