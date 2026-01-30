import React, { useState, useEffect } from 'react';
import './BlogSection.css';

const blogPosts = [
  {
    id: 1,
    title: "What Makes an Authentic Employee Profile?",
    meta: "23 Nov 2022, by Amanda Hugh",
    description: "Discover the key elements that contribute to a genuine and impactful professional presence in today's digital workplace.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Why Does It Matter to be Authentic Employee?",
    meta: "23 Nov 2022, by Amanda Hugh",
    description: "Personal branding is more than just a buzzword; it's about transparency and building trust with your peers and clients.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "How to Build a Strong Team Culture",
    meta: "23 Nov 2022, by Amanda Hugh",
    description: "Exploring the intersection of technology and human connection to create workspace cultures that thrive on honesty.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  }
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setItemsPerView(1);
      } else if (width <= 1100) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure currentIndex doesn't go out of bounds when window resizes
  useEffect(() => {
    const maxIdx = Math.max(0, blogPosts.length - itemsPerView);
    if (currentIndex > maxIdx) {
      setCurrentIndex(maxIdx);
    }
  }, [itemsPerView, currentIndex]);

  const totalSlides = blogPosts.length;
  const maxIndex = Math.max(0, totalSlides - itemsPerView);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="blog-section">
      <div className="blog-container">
        <header className="blog-header">
          <h2 className="blog-heading">
            Whats new on <span className="highlight">Trustco.</span> ?
          </h2>
          <a href="#" className="blog-see-all">
            See All
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </header>

        <div className="blog-slider-viewport">
          <div 
            className="blog-slider-track"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (40 / itemsPerView)}px))` 
            }}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card-wrapper">
                <div className="blog-card">
                  <div className="blog-image-container">
                    <img src={post.image} alt={post.title} className="blog-image" />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-meta">{post.meta}</span>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-description">{post.description}</p>
                    <a href="#" className="blog-read-more">
                      Read Story
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="blog-indicators">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`blog-indicator-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
