import React from 'react';
import { Link } from 'react-router-dom';
import peopleImg from '../assets/images/people.png';

const FeaturesHero = () => {
  return (
    <section className="features-hero">
      <div className="features-container">
        
        {/* Left Column: Content */}
        <div className="features-content">
          <h1 className="features-heading">
            We are a small<br />
            team who<br />
            <span className="light-text">thinks big!!!</span>
          </h1>
          <p className="features-description">
            We provide sales teams and professionals with the knowledge,
            skill and discipline they need to be 10x more successful.
          </p>
          <Link to="/contact" className="btn-meet-team">
            Meet The Team →
          </Link>
        </div>

        {/* Right Column: Visuals */}
        <div className="features-visual">
          <img 
            src={peopleImg} 
            alt="Our small team" 
            className="main-team-image"
          />
          <div className="decorative-circle">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop" 
              alt="Decorative person" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesHero;
