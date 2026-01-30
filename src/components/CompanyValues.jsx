import React from 'react';

const CompanyValues = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Customer First',
            description: 'We prioritize our customers needs and feedback in every decision we make.'
        },
        {
            icon: '🤝',
            title: 'Transparency',
            description: 'Open communication and honesty are the foundation of our work culture.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We constantly push boundaries to find better solutions for complex problems.'
        },
        {
            icon: '🚀',
            title: 'Teamwork',
            description: 'Collaborative spirit and mutual support drive our shared success.'
        }
    ];

    return (
        <section className="company-values">
            <div className="company-values-container">
                <h2 className="section-title">What We Believe In</h2>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className="value-card">
                            <span className="value-icon">{value.icon}</span>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyValues;
