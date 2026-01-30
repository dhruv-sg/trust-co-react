import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const features = [
    {
      id: 1,
      title: 'Happy Customers',
      description: 'Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="45" r="20" stroke="#FBBF24" strokeWidth="3" fill="none"/>
          <circle cx="52" cy="42" r="3" fill="#FBBF24"/>
          <circle cx="68" cy="42" r="3" fill="#FBBF24"/>
          <path d="M 45 50 Q 60 60 75 50" stroke="#FBBF24" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M 35 70 Q 40 65 45 70 L 45 95 Q 60 105 75 95 L 75 70 Q 80 65 85 70" stroke="#FBBF24" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Best Integrations',
      description: 'Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="30" height="30" rx="5" stroke="#FBBF24" strokeWidth="3" fill="none"/>
          <rect x="65" y="25" width="30" height="30" rx="5" stroke="#FBBF24" strokeWidth="3" fill="none"/>
          <rect x="25" y="65" width="30" height="30" rx="5" stroke="#FBBF24" strokeWidth="3" fill="none"/>
          <rect x="65" y="65" width="30" height="30" rx="5" stroke="#FBBF24" strokeWidth="3" fill="none"/>
          <line x1="55" y1="40" x2="65" y2="40" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="55" x2="40" y2="65" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
          <line x1="80" y1="55" x2="80" y2="65" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
          <line x1="55" y1="80" x2="65" y2="80" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Grow Without Problems',
      description: 'with evaluating in depth variety of data sets and including the speed of tech adaptation we can build bridges between any companies and their customers.',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 60 85 L 60 55" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
          <path d="M 50 65 L 60 55 L 70 65" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="60" cy="50" r="8" stroke="#FBBF24" strokeWidth="3" fill="none"/>
          <path d="M 40 85 Q 40 75 50 75 L 70 75 Q 80 75 80 85" stroke="#FBBF24" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <line x1="30" y1="95" x2="90" y2="95" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"/>
          <path d="M 25 35 Q 30 25 40 30 L 45 40" stroke="#FBBF24" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M 95 35 Q 90 25 80 30 L 75 40" stroke="#FBBF24" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-intro">
          <div className="benefits-badge">Beneficial</div>
          <h2 className="benefits-heading">
            Beneficial<br />
            Elements
          </h2>
          <p className="benefits-description">
            An awesome & powerful tools for your business, increase business revenue
          </p>
        </div>

        <div className="benefits-cards">
          {features.map((feature) => (
            <div key={feature.id} className="benefit-card">
              <div className="benefit-icon">
                {feature.icon}
              </div>
              <h3 className="benefit-title">{feature.title}</h3>
              <p className="benefit-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
