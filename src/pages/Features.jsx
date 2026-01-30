import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturesHero from '../components/FeaturesHero';
import StatsBar from '../components/StatsBar';
import MissionSection from '../components/MissionSection';
import TeamShowcaseSection from '../components/TeamShowcaseSection';
import TeamGridSection from '../components/TeamGridSection';
import CareersSection from '../components/CareersSection';
import FinalCTASection from '../components/FinalCTASection';
import '../styles/Features.css';

const Features = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="features-page">
      <FeaturesHero />
      <StatsBar />
      <MissionSection />
      <TeamShowcaseSection />
      <TeamGridSection />
      <CareersSection />
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Features;
