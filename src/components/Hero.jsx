import React from 'react';
import './Hero.css';

// Simple Icons Components (Pixel perfect approximations)
const IconInsta = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="24" fill="white" filter="url(#shadow)"/>
    <defs>
      <filter id="shadow" x="-10" y="-10" width="68" height="68" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.08"/>
      </filter>
    </defs>
    <rect x="12" y="12" width="24" height="24" rx="6" fill="url(#insta_grad)"/>
    <rect x="12" y="12" width="24" height="24" rx="6" stroke="white" strokeWidth="2"/>
    <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2"/>
    <circle cx="31" cy="17" r="1.5" fill="white"/>
    <defs>
      <linearGradient id="insta_grad" x1="12" y1="36" x2="36" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD600"/>
        <stop offset="0.5" stopColor="#FF0100"/>
        <stop offset="1" stopColor="#D800B9"/>
      </linearGradient>
    </defs>
  </svg>
);

const IconFB = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#1877F2"/>
    <path d="M22 18H19.5V26H16.5V18H15V15.5H16.5V13.8C16.5 12.3 17.2 10 20.3 10H22.5V12.5H21.1C20.3 12.5 20.1 12.9 20.1 13.5V15.5H22.5L22 18Z" fill="white"/>
  </svg>
);

const IconLine = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill="#00C300"/>
    <path d="M28 19C28 14.5 24.5 11 20 11C15.5 11 12 14.5 12 19C12 22.8 14.4 25.9 18 26.8V29.5L21.5 25.5C21.8 25.5 22.1 25.5 22.5 25.5C26 25.5 29 23 29 19H28Z" fill="white"/>
    <text x="14" y="22" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="#00C300">LINE</text>
  </svg>
);

const IconYoutube = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="22" fill="#FF0000"/>
    <path d="M29 22L17 29V15L29 22Z" fill="white"/>
  </svg>
);

// Hero Component
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Floating Bubbles - Left */}
        <div className="bubble bubble-icon-insta" style={{ top: '15%', left: '12%' }}>
          <IconInsta />
        </div>
        <div className="bubble bubble-user-1" style={{ top: '35%', left: '5%' }}>
          <img src="https://i.pravatar.cc/150?img=33" alt="User 1" />
        </div>
        <div className="bubble bubble-icon-line" style={{ top: '48%', left: '16%' }}>
          <IconLine />
        </div>
        <div className="bubble bubble-user-2" style={{ top: '65%', left: '10%' }}>
          <img src="https://i.pravatar.cc/150?img=5" alt="User 2" />
        </div>

        {/* Center Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Find High-Potential<br />
            Customers with <span className="highlight">Trustco.</span>
          </h1>
          <p className="hero-subtitle">
            We provide sales teams and professionals with the knowledge, skill and 
            discipline they need to be 10x more successful.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">
              <span className="play-icon">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M12 7L0.75 13.4952L0.75 0.504809L12 7Z" fill="#0A2640"/>
                </svg>
              </span>
              Check Our Video
            </button>
          </div>

          <div className="hero-rating">
            <div className="trustpilot-logo">
              <span className="tp-star">★</span> 
              <span className="tp-text">Trustpilot</span>
            </div>
            <div className="stars">
              ★★★★★
            </div>
            <span className="rating-count">4900+ 5 Stars</span>
          </div>
        </div>

        {/* Floating Bubbles - Right */}
        <div className="bubble bubble-user-3" style={{ top: '20%', right: '15%' }}>
           <img src="https://i.pravatar.cc/150?img=9" alt="User 3" />
        </div>
        <div className="bubble bubble-icon-fb" style={{ top: '35%', right: '8%' }}>
          <IconFB />
        </div>
        <div className="bubble bubble-icon-yt" style={{ top: '55%', right: '15%' }}>
          <IconYoutube />
        </div>
        <div className="bubble bubble-user-4" style={{ top: '60%', right: '8%' }}>
           <img src="https://i.pravatar.cc/150?img=32" alt="User 4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
