import React from 'react';
import Hero from '../components/Hero';
import TrustedBrands from '../components/TrustedBrands';
import VideoSection from '../components/VideoSection';
import BenefitsSection from '../components/BenefitsSection';
import BridgeSection from '../components/BridgeSection';
import StatsSection from '../components/StatsSection';
import FounderSection from '../components/FounderSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FinalCTASection from '../components/FinalCTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <VideoSection />
      <BenefitsSection />
      <BridgeSection />
      <StatsSection />
      <FounderSection />
      <TestimonialsSection />
      <BlogSection />
      <FinalCTASection />
    </>
  );
};

export default Home;
