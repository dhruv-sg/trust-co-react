import React from 'react';
import './StatsBar.css';

const StatsBar = () => {
  const metrics = [
    {
      number: "$65 M",
      label: "Generate sales"
    },
    {
      number: "58%",
      label: "Grew revenue"
    },
    {
      number: "12",
      label: "Project completed"
    },
    {
      number: "16k+",
      label: "Grew customers"
    }
  ];

  return (
    <section className="stats-bar-section">
      <div className="stats-bar-container">
        {metrics.map((item, index) => (
          <div key={index} className="stats-item">
            <span className="stats-number">{item.number}</span>
            <span className="stats-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
