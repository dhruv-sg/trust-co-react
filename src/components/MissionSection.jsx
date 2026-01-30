import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  const handlePlayClick = () => {
    console.log("Play video clicked");
  };

  return (
    <section className="mission-section">
      <div className="mission-container">
        
        <h2 className="mission-heading">
          Our Mission Is To Make Your<br />
          <span className="light-text">Business Growth</span>
        </h2>

        <div className="mission-video-card" onClick={handlePlayClick}>
          <div className="mission-thumbnail">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
              alt="Mission video thumbnail" 
            />
          </div>
          
          <div className="play-btn-overlay">
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;
