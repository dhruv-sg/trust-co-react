import React from 'react';

const SolutionsFilter = ({ activeCategory, onCategoryChange, categories }) => {
  return (
    <div className="solutions-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SolutionsFilter;
