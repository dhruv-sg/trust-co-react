import React from 'react';
import './BridgeSection.css';

const BridgeSection = () => {
  return (
    <section className="bridge-section">
      <div className="bridge-container">
        <div className="bridge-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop" 
            alt="Business Collaboration" 
            className="bridge-image"
          />
          <div className="award-badge">
            <span className="award-number">#1</span>
            <span className="award-label">Best Award</span>
            <span className="award-year">2023</span>
          </div>
        </div>

        <div className="bridge-content">
          <h2 className="bridge-heading">
            Building bridges<br />
            between <span className="highlight">companies</span><br />
            and <span className="highlight">customers</span>
          </h2>
          
          <p className="bridge-description">
            with evaluating in depth variety of data sets and including the speed of tech adaptation 
            we can build bridges between any companies and their customers.
          </p>

          <button className="bridge-cta-btn">
            View Reports
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BridgeSection;
