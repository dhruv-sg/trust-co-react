import React, { useState, useEffect } from 'react';
import '../styles/Resources.css';

const slides = [
  {
    id: 1,
    category: "Marketing",
    heading: "How to show your business more\nprominent in 2023",
    description: "Have you been looking better for your business? Circuit is flexible and affordable and offers you exceptional support to achieve your career goals. Circuit is a Global training provider based across the UK that specialises.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Strategy",
    heading: "Innovative approaches to scale\nyour startup rapidly",
    description: "Discover the core principles that top startups use to dominate their markets. From lean methodologies to aggressive growth hacking, we cover the essentials of modern business strategy.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Design",
    heading: "Building interfaces that speak\nto your target audience",
    description: "Design is more than just aesthetics; it's about communication. Learn how to create user-centric experiences that build trust and drive conversions for your digital products.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2000&auto=format&fit=crop"
  }
];

const ResourcesHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="resources-hero">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`resources-hero-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="resources-hero-overlay"></div>
          <div className="resources-hero-content">
            <div className="category-badge">{slide.category}</div>
            <h1 className="resources-hero-heading">
              {slide.heading.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p className="resources-hero-description">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
      
      <div className="resources-hero-indicators-container">
        <div className="resources-hero-indicators">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
