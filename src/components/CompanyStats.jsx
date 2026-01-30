import React from 'react';

const CompanyStats = () => {
    const stats = [
        { number: '65M+', label: 'Revenue Generated' },
        { number: '12+', label: 'Projects Completed' },
        { number: '16k+', label: 'Customers Worldwide' },
        { number: '10+', label: 'Years Experience' }
    ];

    return (
        <section className="company-stats">
            <div className="company-stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <span className="stat-number">{stat.number}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyStats;
