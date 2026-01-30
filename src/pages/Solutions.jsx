import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SolutionsHero from '../components/SolutionsHero';
import SolutionsGrid from '../components/SolutionsGrid';
import FinalCTASection from '../components/FinalCTASection';
import '../styles/Solutions.css';

const Solutions = () => {
  const { pathname } = useLocation();

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="solutions-page">
      <SolutionsHero />
      <SolutionsGrid />
      <FinalCTASection />
    </div>
  );
};

export default Solutions;
