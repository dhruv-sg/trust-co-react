import React, { useState } from 'react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    experience: '',
    salary: '',
    city: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Submitted:', formData);
    alert('Thank you! Your application has been submitted successfully.');
    onClose();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={e => e.stopPropagation()}>
        <button className="resume-modal-close" onClick={onClose}>×</button>
        
        <h2>Join Our Talent Pool</h2>
        <p>Don't see the right role? Send us your details and we'll keep you in mind for future openings.</p>

        <form className="resume-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="John Doe" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Interested Role</label>
            <input 
              type="text" 
              name="role" 
              placeholder="e.g. UX Designer" 
              required 
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-inner-group">
              <label style={{ fontSize: '14px', fontWeight: '600', color: '#0a2640', display: 'block', marginBottom: '6px' }}>Experience</label>
              <input 
                type="text" 
                name="experience" 
                placeholder="2+ Years" 
                required 
                style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className="form-inner-group">
              <label style={{ fontSize: '14px', fontWeight: '600', color: '#0a2640', display: 'block', marginBottom: '6px' }}>Expected Salary</label>
              <input 
                type="text" 
                name="salary" 
                placeholder="$80k - $100k" 
                required 
                style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                value={formData.salary}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Current City</label>
            <input 
              type="text" 
              name="city" 
              placeholder="San Francisco, CA" 
              required 
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Upload Resume (PDF)</label>
            <div className="file-input-wrapper">
              <input type="file" className="file-input" accept=".pdf,.doc,.docx" required />
            </div>
          </div>

          <button type="submit" className="resume-submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeModal;
