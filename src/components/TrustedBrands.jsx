import React from 'react';
import './TrustedBrands.css';

// Import brand logos
import googleLogo from '../assets/logos/google.png';
import atlassianLogo from '../assets/logos/atlassian.png';
import canonLogo from '../assets/logos/canon.png';
import walmartLogo from '../assets/logos/walmart.png';
import amazonLogo from '../assets/logos/amazon.png';

/**
 * TrustedBrands Component
 * 
 * Displays a "Trusted by the best in the world" section with brand logos.
 * This section appears below the hero section and showcases partner brands.
 * 
 * Features:
 * - Responsive layout (desktop-first)
 * - Text on left, logos on right (desktop)
 * - Stacked layout on mobile
 * - Clean, minimal enterprise styling
 */
const TrustedBrands = () => {
  // Brand logos data array for easy maintenance
  const brands = [
    { name: 'Google', logo: googleLogo },
    { name: 'Atlassian', logo: atlassianLogo },
    { name: 'Canon', logo: canonLogo },
    { name: 'Walmart', logo: walmartLogo },
    { name: 'Amazon', logo: amazonLogo }
  ];

  return (
    <section className="trusted-brands">
      <div className="trusted-brands-container">
        {/* Left side: Text */}
        <div className="trusted-brands-text">
          <p>Trusted by the best in the world</p>
        </div>

        {/* Right side: Brand logos */}
        <div className="trusted-brands-logos">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-logo">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
