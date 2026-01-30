import React, { useState, useMemo } from 'react';
import { solutions } from '../data/solutions';
import SolutionCard from './SolutionCard';
import SolutionsFilter from './SolutionsFilter';
import '../styles/SolutionsGrid.css';

const SolutionsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = ['All', 'Enterprise', 'Marketing', 'Design', 'Government'];

  const filteredSolutions = useMemo(() => {
    if (activeCategory === 'All') return solutions;
    return solutions.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(4); // Reset count on filter change
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  const visibleSolutions = filteredSolutions.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSolutions.length;

  return (
    <section className="solutions-grid-section">
      <div className="container">
        <SolutionsFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="solutions-grid">
          {visibleSolutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>

        {hasMore && (
          <div className="show-more-container">
            <button className="btn-show-more" onClick={handleShowMore}>
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsGrid;
