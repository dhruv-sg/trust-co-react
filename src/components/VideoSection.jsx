import React, { useState } from 'react';
import './VideoSection.css';
import videoThumbnail from '../assets/images/video-thumbnail.png';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section">
      <div className="video-section-container">
        {/* Top Content Row */}
        <div className="video-section-content">
          {/* Left Column - Heading */}
          <div className="video-section-heading">
            <h2>
              High-Level Sales<br />
              <span className="highlight">Teams & Professionals</span>
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="video-section-description">
            <p>
              Circuit is flexible and affordable and offers you exceptional support to achieve your career goals.
              Circuit is a Global training provider based across the UK that specialises.
            </p>
          </div>
        </div>

        {/* Video Card */}
        <div className="video-card">
          {!isPlaying ? (
            <>
              <img 
                src={videoThumbnail} 
                alt="Training video preview" 
                className="video-thumbnail"
              />
              
              {/* Play Button Overlay */}
              <button 
                className="play-button" 
                onClick={handlePlayClick}
                aria-label="Play video"
              >
              </button>
            </>
          ) : (
            <div className="video-embed-container">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/6stlCkUDG_s?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
