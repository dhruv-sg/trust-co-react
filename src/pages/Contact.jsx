import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactCards from '../components/ContactCards';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  const { pathname } = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <h1 className="contact-heading">We are here to help</h1>
          <p className="contact-subtitle">
            Contact us if you have any questions about our company.<br />
            Our best team will provide your answer within a few hours.
          </p>
        </header>

        <ContactCards />
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
