import React from 'react';
import './FinalCTASection.css';

const FinalCTASection = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-heading">
            Take Your Customer Service To The Next Level
          </h2>
          
          <div className="final-cta-actions">
            <button className="final-cta-button">
              Get 14 Days Free Trial
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <span className="final-cta-helper">No credit card required</span>
          </div>
        </div>

        <div className="final-cta-visual">
          <div className="final-cta-image-wrapper">
            {/* Floating icons now standalone */}
            <div className="cta-floating-icon icon-crown">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"></path>
                <circle cx="12" cy="17" r="1"></circle>
              </svg>
            </div>
            
            <div className="cta-floating-icon icon-star">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            
            <div className="cta-floating-icon icon-search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            {/* Main Person Image */}
            <img 
              src="https://static.vecteezy.com/system/resources/previews/022/484/651/large_2x/happy-3d-student-boy-with-books-on-white-background-transparent-background-free-png.png" 
              alt="Customer Success Representative" 
              className="final-cta-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
