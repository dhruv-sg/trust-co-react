import React from 'react';
import { Link } from 'react-router-dom';

const CompanyTeamPreview = () => {
    const previewTeam = [
        { name: 'Michael Scott', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
        { name: 'Pam Beesly', role: 'Design Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
        { name: 'Jim Halpert', role: 'Head of Growth', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Angela Martin', role: 'Ops Lead', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' }
    ];

    return (
        <section className="company-team-preview">
            <div className="team-preview-container">
                <h2 className="section-title">Meet the People Behind Trustco</h2>
                <p className="team-preview-subtitle">Our team is a diverse group of passionate individuals dedicated to delivering excellence.</p>
                <div className="team-preview-grid">
                    {previewTeam.map((member, index) => (
                        <div key={index} className="team-preview-card">
                            <img src={member.image} alt={member.name} className="team-preview-img" />
                            <h4>{member.name}</h4>
                            <span>{member.role}</span>
                        </div>
                    ))}
                </div>
                <Link to="/features" className="btn-primary">Meet The Full Team →</Link>
            </div>
        </section>
    );
};

export default CompanyTeamPreview;
