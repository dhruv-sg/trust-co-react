import React from 'react';

const SolutionCard = ({ solution }) => {
  return (
    <div className="solution-card">
      <div className="solution-image">
        <img src={solution.image} alt={solution.title} />
      </div>
      <div className="solution-content">
        <h3 className="solution-title">{solution.title}</h3>
        <p className="solution-category">{solution.tagLabel}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
