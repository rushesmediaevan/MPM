import React, { useEffect } from 'react';
import CircularText from './CircularText';
import './About.css';

const About = ({ currentConfig }) => {
  // Ensure colors are applied on this page
  useEffect(() => {
    const root = document.documentElement;
    const colors = currentConfig.colors;
    
    root.style.setProperty('--service-primary', colors.primary);
    root.style.setProperty('--service-secondary', colors.secondary);
    root.style.setProperty('--service-accent', colors.accent);
    root.style.setProperty('--service-neutral', colors.neutral);
    root.style.setProperty('--service-background', colors.background);
  }, [currentConfig.colors]);
  return (
    <div className="about-page">
      {/* Hero Section with Logo */}
      <section className="hero">
        <div 
          className="color-background"
          style={{
            background: `linear-gradient(135deg, ${currentConfig.colors.primary} 0%, ${currentConfig.colors.secondary} 50%, ${currentConfig.colors.accent} 100%)`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
        ></div>
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src="/logo.png" 
              alt="Miklus Property Maintenance Logo" 
              className="hero-logo"
            />
            <CircularText
              text="MIKLUS PROPERTY MAINTENANCE "
              onHover="speedUp"
              spinDuration={20}
              className="hero-circular-text"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2 className="story-title">About</h2>
            
            <div className="story-text">
              <p>
                MPM was founded in 2019 by Jakub Miklus, whose dedication to lawn care and commitment to excellence helped him grow the business from the ground up. Through years of hands-on experience, Jakub built strong client relationships and earned a reputation for dependable, high-quality service.
              </p>
              
              <p>
                In time, Jakub partnered with his twin brother, Karol Miklus, who had established and grown a successful pressure washing company of his own. Together, they combined their expertise to expand MPM into a full-service property maintenance company—offering professional landscaping, hardscaping, and pressure washing.
              </p>
              
              <p>
                Today, MPM continues to operate with the same values it was founded on: reliability, attention to detail, and pride in every project. Whether serving homeowners or businesses, our mission is to deliver results that enhance curb appeal, add lasting value, and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signatures Section */}
      <section className="signatures-section">
        <div className="container">
          <div className="signatures-grid">
            <div className="signature-item">
              <img src="/art/sigs/j.png" alt="Jakub Miklus Signature" className="signature-img" />
            </div>
            <div className="signature-item">
              <img src="/art/sigs/k.png" alt="Karol Miklus Signature" className="signature-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <div className="team-grid">
            {/* Jakub Profile */}
            <div className="team-member">
              <div className="member-image">
                <img src="/aboutpage/jakub.jpg" alt="Jakub Miklus - Founder" />
              </div>
              <div className="member-content">
                <h3 className="member-name">Jakub Miklus</h3>
                <p className="member-title">Founder</p>
              </div>
            </div>

            {/* Karol Profile */}
            <div className="team-member">
              <div className="member-image">
                <img src="/aboutpage/karol.jpeg" alt="Karol Miklus - Co-Owner" />
              </div>
              <div className="member-content">
                <h3 className="member-name">Karol Miklus</h3>
                <p className="member-title">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <img src="/logo.png" alt="Miklus Property Maintenance Logo" />
                <h3>Miklus Property Maintenance</h3>
              </div>
              <p className="footer-description">
                Delivering premium landscaping and property care with a focus on unmatched quality, lasting results, and dedicated customer service. We pride ourselves on providing the best work, the best results, and the best care for every client.
              </p>
            </div>

            <div className="footer-section footer-services">
              <h4>Our Services</h4>
              <ul>
                <li>Landscaping Design & Install</li>
                <li>Hardscaping Design & Install</li>
                <li>Property Maintenance</li>
                <li>Lawn Care & Mowing</li>
                <li>Pressure Washing</li>
              </ul>
            </div>

            <div className="footer-section footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>(609) 933-3526</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>mikluspropertymaintenance@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Cherry Hill, New Jersey</span>
                </div>
              </div>
              <div className="footer-social">
                <a href="https://www.instagram.com/mpm.newjersey/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
                <a href="tel:(609) 933-3526" className="social-link" aria-label="Phone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2019 Miklus Property Maintenance. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
