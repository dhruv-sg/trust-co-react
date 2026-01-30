import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { number: '$65 M', label: 'Generate sales' },
    { number: '58%', label: 'Grew revenue' },
    { number: '12', label: 'Countries' },
    { number: '16k+', label: 'Grew customers' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
