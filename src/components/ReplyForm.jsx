import React, { useState } from 'react';

const ReplyForm = ({ onAddComment }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    notify: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    const newComment = {
      id: Date.now(),
      name: formData.name,
      role: 'Guest',
      text: formData.message,
      likes: 0,
      avatar: `https://i.pravatar.cc/150?u=${formData.name}`
    };

    onAddComment(newComment);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      notify: false
    });
  };

  return (
    <form className="reply-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="sr-only">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="sr-only">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="message" className="sr-only">Message*</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message*"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-footer">
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="notify"
            checked={formData.notify}
            onChange={handleChange}
          />
          <span className="checkbox-text">
            Notify me if someone reply my comment
          </span>
        </label>

        <button type="submit" className="send-reply-btn">
          Send Reply
        </button>
      </div>
    </form>
  );
};

export default ReplyForm;
