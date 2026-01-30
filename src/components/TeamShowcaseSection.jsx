import React from "react";
import "./TeamShowcaseSection.css";

const TeamShowcaseSection = () => {
  return (
    <section className="team-showcase-section">
      {/* Background Split */}
      <div className="team-showcase-bg">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
      </div>

      <div className="team-showcase-container">
        {/* TOP CONTENT */}
        <div className="team-top-row">
          <div className="team-top-left">
            <h2 className="team-top-heading">
              High-Level Sales <br />
              <span className="highlight">
                Teams & <br /> Professionals
              </span>
            </h2>
          </div>

          <div className="team-top-right">
            <div className="team-top-description">
              <p>
                Have you been looking better for your business? Circuit is flexible
                and affordable and offers you exceptional support to achieve your
                career goals. Circuit is a Global training provider based across
                the UK that specialises.
              </p>
              <p>
                With evaluating in depth variety of data sets and including the
                speed of tech adaptation we can build bridges between any companies
                and their customers.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE COLLAGE */}
        <div className="team-collage-grid">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className={`collage-col col-${index}`}>
              <div className="collage-img-card top-card"></div>
              <div className="collage-img-card bottom-card"></div>
            </div>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="team-bottom-row">
          <div className="team-bottom-left">
            <p className="team-bottom-quote">
              Passionate as you are about the organization you're building. And
              keep in mind, I have no clue who you are or what you're building so
              that's no judgment on you or the idea, just the reality I've observed
              over 20 years of start ups.
            </p>
          </div>

          <div className="team-bottom-right">
            <h2 className="team-bottom-heading">
              A Team creates amazing <br />
              work for <span className="light-text">Your business</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcaseSection;
