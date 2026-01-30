import React, { useState } from 'react';
import './CareersSection.css';
import ResumeModal from './ResumeModal';

const CareersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobs = [
    {
      id: 1,
      position: "Marketing Team",
      department: "Marketing",
      location: "San Francisco"
    },
    {
      id: 2,
      position: "Human Relations",
      department: "Support",
      location: "San Francisco"
    },
    {
      id: 3,
      position: "Art Director",
      department: "Design",
      location: "San Francisco"
    },
    {
      id: 4,
      position: "React Developer",
      department: "Engineering",
      location: "San Francisco"
    }
  ];

  const handleJobClick = (position) => {
    console.log(`Job clicked: ${position}`);
  };

  const handleCTAClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="careers-section" id="careers">
      <div className="careers-container">
        
        <div className="careers-header">
          <h2 className="careers-title">Want To Be A Part Of Us?</h2>
          <p className="careers-subtitle">
            We believe it takes great people to make a great product. Jobs that are available from us are looking for their own people! Browse our vacancies and find the one that is right for you!
          </p>
        </div>

        <div className="careers-table-header">
          <span>Position</span>
          <span>Department</span>
          <span>Location</span>
        </div>

        <div className="careers-list">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="job-row"
              onClick={() => handleJobClick(job.position)}
            >
              <div className="job-position">{job.position}</div>
              <div className="job-department">{job.department}</div>
              <div className="job-location">{job.location}</div>
            </div>
          ))}
        </div>

        <div className="careers-cta-container">
          <button className="careers-cta-btn" onClick={handleCTAClick}>
            Don’t see a good fit? Submit your resume →
          </button>
        </div>

        <ResumeModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default CareersSection;
