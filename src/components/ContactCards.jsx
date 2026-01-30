import React from 'react';
import '../pages/Contact.css';

const ContactCards = () => {
  const contactCards = [
    {
      id: 1,
      title: "Email Us",
      description: "Ask anything by emailing us and we’ll respond within a few days.",
      action: "Send Email →",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      title: "Drop In US",
      description: "You can meet us at our office and discuss the details of your question.",
      action: "Get directions →",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      id: 3,
      title: "Call Us Any Time",
      description: "Call us if your question requires an immediate response.",
      action: "+1 700 764 657 →",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="contact-grid">
      {contactCards.map((card) => (
        <div key={card.id} className="contact-card">
          <div className="contact-card-icon">{card.icon}</div>
          <h3 className="contact-card-title">{card.title}</h3>
          <p className="contact-card-description">{card.description}</p>
          <a href="#" className="contact-card-action">{card.action}</a>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
