import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, role, image, linkedin }) => {
    return (
        <div className="team-member-card">
            <div className="member-image-container">
                {image ? (
                    <img src={image} alt={name} className="member-image" />
                ) : (
                    <div className="member-placeholder-image">
                        <span>{name.charAt(0)}</span>
                    </div>
                )}
            </div>
            <div className="member-info">
                <h3 className="member-name">{name}</h3>
                <p className="member-role">{role}</p>
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-button">
                        [LinkedIn]
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamMember;
