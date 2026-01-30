import React from 'react';
import './FounderSection.css';

const FounderSection = () => {
  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="founder-content">
          <h2 className="founder-heading">Meet Our Founder</h2>
          
          <div className="founder-quote-container">
            <p className="founder-quote">
              With evaluating in depth variety of data sets and including the speed of tech adaptation 
              we can build bridges between any companies and their customers. 
              Our vision is to empower every business with the right tools for growth.
            </p>
          </div>

          <div className="founder-info">
            <span className="founder-name">Jason Hound</span>
            <span className="founder-role">Founder of Trustco.</span>
          </div>

          <button className="founder-cta">
            See Team Behind Our Success
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="founder-visual">
          <div className="founder-image-wrapper">
            <div className="decorative-pill">
              <div className="crown-circle">
                <svg className="crown-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14.5L3 5L8 10L12 3L16 10L21 5L20 14.5H4Z" />
                  <circle cx="12" cy="11.5" r="1.5" className="crown-dot" />
                </svg>
              </div>
            </div>
            <img 
              src='https://static.vecteezy.com/system/resources/previews/041/642/167/large_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png'
              alt="Jason Hound - Founder" 
              className="founder-image"
            />
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" 
              alt="Team Member" 
              className="overlap-profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
