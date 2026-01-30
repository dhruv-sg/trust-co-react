import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const testimonialsData = [
  {
    id: 1,
    text: "I'm totally unconvinced that two people can find a person they haven't known previously, and become an effective co-founder",
    name: "Andrew Wilkins",
    role: "Managing Director, Yess Company",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!",
    name: "Daisy Phelps",
    role: "Digital Marketing Director, Monatc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "The platform has completely transformed how we approach our sales pipeline. It's an essential tool for our team.",
    name: "Marcus Thorne",
    role: "CEO, TechFlow",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    text: "Incredible support and a product that actually delivers on its promises. Highly recommended for any serious business.",
    name: "Sarah Jenkins",
    role: "Operations Manager, Globalize",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(2);
  const timerRef = useRef(null);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = testimonialsData.length;
  const maxIndex = totalSlides - itemsPerView;

  const startAutoScroll = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) return 0;
        return prevIndex + 1;
      });
    }, 4500);
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoScroll();
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, maxIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Restart timer after manual interaction
    if (!isPaused) {
      startAutoScroll();
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <header className="testimonials-header">
          <h2 className="testimonials-heading">We Believe people we trust</h2>
          <a href="#" className="see-all-link">
            See All 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </header>

        <div 
          className="testimonials-slider-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="testimonials-slider-track"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (24 / itemsPerView)}px))` 
            }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card-wrapper">
                <div className="testimonial-card">
                  <div className="quote-content">
                    <div className="quote-icon">“</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                  </div>
                  
                  <div className="user-info">
                    <img src={testimonial.avatar} alt={testimonial.name} className="user-avatar" />
                    <div className="user-details">
                      <span className="user-name">{testimonial.name}</span>
                      <span className="user-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
