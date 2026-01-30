import React from 'react';
import './TeamGridSection.css';

const TeamGridSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Scott",
      role: "Regional Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Pam Beesly",
      role: "Art Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Jim Halpert",
      role: "Product Sales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Dwight Schrute",
      role: "Sales Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Stanley Hudson",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    },
    {
      id: 6,
      name: "Angela Martin",
      role: "Accountant",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    },
    {
      id: 7,
      name: "Kevin Malone",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    },
    {
      id: 8,
      name: "Oscar Martinez",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      socialLinks: {
        instagram: "#",
        dribbble: "#",
        linkedin: "#"
      }
    }
  ];

  const SocialIcon = ({ type }) => {
    switch (type) {
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M7.75 2h8.5C19.42 2 22 4.58 22 7.75v8.5c0 3.17-2.58 5.75-5.75 5.75h-8.5C4.58 22 2 19.42 2 16.25v-8.5C2 4.58 4.58 2 7.75 2zm0 1.5c-2.35 0-4.25 1.9-4.25 4.25v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5zm8.5 2c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM12 7.5c2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5 2.02-4.5 4.5-4.5zm0 1.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        );
      case 'dribbble':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.74 5.3c-.63-.98-1.57-1.87-2.73-2.57-.4-.25-.83-.46-1.28-.63-.38 1.48-.87 2.94-1.46 4.38 1.37.5 2.65 1.15 3.82 1.93.36-.57.87-2.11 1.65-3.11zm-5.73-3.66c-.34-.1-.7-.18-1.07-.23-.1-.01-.2-.02-.3-.02-1.63 0-3.12.52-4.34 1.4-.08.06-.15.12-.23.18-.38.29-.73.61-1.05.95 1.31 1.01 2.45 2.13 3.4 3.33.6-.8 1.14-1.64 1.63-2.51.52-1.03.95-2.08 1.3-3.08l.38-.02.28-.01zm-7.65 2.22C5.12 6.84 4.14 8 3.47 9.29c.14.07.28.14.42.21 1.49.77 2.9 1.76 4.2 2.9.23.21.46.42.68.64-.81-1.89-1.81-3.64-2.98-5.22-.16-.21-.32-.42-.48-.62l.05.66zm-1.02 4.79C2.41 12.3 2 14.1 2 16c0 1.25.26 2.44.75 3.52.4.88.94 1.67 1.6 2.36 0-1.2.22-2.39.65-3.53.49-1.3 1.18-2.52 2.05-3.63-.5-.45-1.02-.88-1.56-1.28-.63-.47-1.31-.9-2.02-1.29l.06.52zm.17 6.44c.4.5.86.95 1.37 1.33.1.08.2.15.3.22 1.29.93 2.87 1.49 4.58 1.49 1.31 0 2.54-.33 3.63-.91-1.18-.73-2.3-1.61-3.34-2.61-.17-.16-.34-.33-.5-.5-1.27-1.34-2.34-2.84-3.17-4.46-.94 1.67-1.83 3.42-2.63 5.23-.08.18-.16.36-.24.54v.1.11zm11.23.01c-.13-.01-.26-.03-.39-.06-.82-.16-1.66-.27-2.51-.31-.5 0-.99.03-1.48.07.72.84 1.55 1.61 2.48 2.29.58.42 1.21.78 1.88 1.07.45-.48.84-1.02 1.17-1.61-1.37-1.11-2.91-1.96-4.6-2.5 1.3-.02 2.43.34 3.45.97v.08zm1.02-4.04c.1-.55.16-1.12.16-1.7 0-1.4-.33-2.73-.91-3.9-.96.96-2.02 1.76-3.17 2.39-.77.42-1.58.78-2.42 1.07.82 1.02 1.54 2.11 2.13 3.26.16.3.31.62.45.94 1.33-.27 2.6-.82 3.73-1.62.01-.15.02-.29.02-.44h.01z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2 .7-2.3 1.1v-1h-2.8v7.9h2.8v-4.3c0-.6.4-1.1 1.1-1.1.7 0 1.1.5 1.1 1.1v4.3h2.8M7 8.3a1.5 1.5 0 0 0-1.5-1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5M5.5 10h3v8.5h-3V10z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="team-grid-section">
      <div className="team-grid-container">
        <h2 className="team-grid-heading">
          Meet Our<br />
          Amazing Team
        </h2>

        <div className="team-members-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="team-avatar-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              
              <div className="team-social-links">
                <a 
                  href={member.socialLinks.instagram} 
                  className="team-social-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <SocialIcon type="instagram" />
                </a>
                <a 
                  href={member.socialLinks.dribbble} 
                  className="team-social-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                >
                  <SocialIcon type="dribbble" />
                </a>
                <a 
                  href={member.socialLinks.linkedin} 
                  className="team-social-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <SocialIcon type="linkedin" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGridSection;
