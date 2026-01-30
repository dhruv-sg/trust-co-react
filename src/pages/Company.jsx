import React, { useEffect } from 'react';
import CompanyHero from '../components/CompanyHero';
import CompanyStats from '../components/CompanyStats';
import CompanyValues from '../components/CompanyValues';
import CompanyTeamPreview from '../components/CompanyTeamPreview';
import { Link } from 'react-router-dom';
import '../styles/Company.css';

const Company = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="company-page">
            <CompanyHero />
            <CompanyStats />
            <CompanyValues />
            <CompanyTeamPreview />
            
            {/* 5. Careers CTA Section integrated directly */}
            <section className="company-careers-cta">
                <div className="careers-cta-container">
                    <h2>Want to work with us?</h2>
                    <p>We are always looking for talented people to join our mission. Check out our open roles and find your next challenge.</p>
                    <Link to="/features#careers" className="btn-primary">View Open Positions →</Link>
                </div>
            </section>
        </div>
    );
};

export default Company;
