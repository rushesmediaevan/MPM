import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardNav from './CardNav'
import CircularText from './CircularText'
import About from './About'
import './App.css'

function App() {
  // Service switching state - default to hardscaping
  const [activeService, setActiveService] = useState('hardscaping');

  // Service configurations
  const serviceConfigs = {
    hardscaping: {
      name: 'Hardscaping',
      colors: {
        primary: '#2C2C2C',
        secondary: '#D6CBB4', 
        accent: '#4A5D3E',
        neutral: '#9E9E9E',
        background: '#F4F3EF'
      },
      images: [
        '/art/photos/2EEBEA75-DC0B-4BB8-AACE-743B2B627DF0.JPG',
        '/art/photos/848EC813-2A31-45E3-88D1-9CC272B9C4E6.JPG',
        '/art/photos/CF5BD7FC-BB07-4F0F-95BB-88AEC71E7E78.JPG'
      ],
      services: [
        {
          title: 'Patios, Walkways & Decks',
          description: 'Custom-built features to improve your outdoor space.',
          services: ['Patio design and installation', 'Walkway construction and repair', 'Custom deck builds', 'Variety of finishes and materials']
        },
        {
          title: 'Structural Hardscaping',
          description: 'Engineered installations that provide strength, support, and long-term value.',
          services: ['Retaining and garden walls', 'Steps and stairways', 'Grading and drainage solutions', 'Reinforced installations for durability']
        },
        {
          title: 'Specialty Outdoor Installations',
          description: 'Unique additions that create inviting and functional outdoor living areas.',
          services: ['Outdoor kitchens and fire pits', 'Pergolas and gazebos', 'Seating walls and accent features', 'Complete outdoor living areas']
        }
      ]
    },
    landscaping: {
      name: 'Landscaping',
      colors: {
        primary: '#1a4d3a',
        secondary: '#5A7D4E',
        accent: '#7B8F5E',
        neutral: '#8B6B4A',
        background: '#F4F3EF'
      },
      images: [
        '/art/photos/edging.JPG',
        '/art/photos/FPS.png',
        '/art/photos/B2ADB32A-7D89-42D7-83F5-778C091DEC53.JPG'
      ],
      services: [
        {
          title: 'Commercial Landscaping',
          description: 'Reliable, professional care to keep your property looking its best year-round.',
          services: ['Office buildings, retail centers, and HOAs', 'Routine lawn care and property maintenance', 'Seasonal cleanups and snow/ice management', 'Custom enhancements to improve curb appeal and safety']
        },
        {
          title: 'Residential Landscaping',
          description: 'Transform your yard into a polished, welcoming outdoor space.',
          services: ['Custom landscape design and installation', 'Lawn mowing, edging, and trimming', 'Planting trees, shrubs, and garden beds', 'Seasonal cleanups, mulching, and leaf removal']
        },
        {
          title: 'Property Enhancements & Maintenance Packages',
          description: 'Complete solutions for long-term beauty and value.',
          services: ['Irrigation and drainage solutions', 'Fertilization and weed control programs', 'Sustainable, eco-friendly care options', 'Full-service packages for hassle-free upkeep']
        }
      ]
    },
    pressurewashing: {
      name: 'Pressure Washing',
      colors: {
        primary: '#0C2D48',
        secondary: '#C7C9C7',
        accent: '#D9CDBF',
        neutral: '#2B2B2B',
        background: '#F8F8F4'
      },
      images: [
        '/art/photos/38BC2B67-4E32-4B07-8463-49739157D497.JPG',
        '/art/photos/778F3B85-4ACC-4365-B424-482AE2741410.PNG',
        '/art/photos/C407B3DE-839A-4658-8AE9-6B71037AEEE7.PNG'
      ],
      services: [
        {
          title: 'Residential Pressure Washing',
          description: 'Restore and protect your home exterior surfaces.',
          services: ['House siding and brick cleaning', 'Driveways and walkways', 'Patios and decks', 'Fences and outdoor furniture']
        },
        {
          title: 'Commercial Pressure Washing',
          description: 'Professional cleaning for businesses and properties of all sizes.',
          services: ['Storefronts and entryways', 'Parking lots and garages', 'Building exteriors', 'Sidewalks and common areas']
        },
        {
          title: 'Specialty Cleaning Services',
          description: 'Targeted pressure washing solutions for tough jobs.',
          services: ['Roof cleaning and moss removal', 'Pool decks and hardscapes', 'Stain and graffiti removal', 'Gutter brightening and detail work']
        }
      ]
    }
  };

  const currentConfig = serviceConfigs[activeService];

  // Apply dynamic color scheme
  useEffect(() => {
    const root = document.documentElement;
    const colors = currentConfig.colors;
    
    root.style.setProperty('--service-primary', colors.primary);
    root.style.setProperty('--service-secondary', colors.secondary);
    root.style.setProperty('--service-accent', colors.accent);
    root.style.setProperty('--service-neutral', colors.neutral);
    root.style.setProperty('--service-background', colors.background);
  }, [activeService, currentConfig.colors]);

  const items = [
    {
      label: "About",
      bgColor: currentConfig.colors.primary,
      textColor: "#fff",
      links: [
        { label: "Contact", ariaLabel: "Contact Us", href: "#contact" },
        { label: "Our Story", ariaLabel: "Our Story", href: "/about" },
        { label: "Customer Testimonies", ariaLabel: "Customer Testimonies", href: "#testimonies" }
      ]
    },
    {
      label: "Services", 
      bgColor: currentConfig.colors.primary,
      textColor: "#fff",
      links: [
        { label: "Hardscaping", ariaLabel: "Hardscaping Services", href: "#hardscaping", onClick: () => setActiveService('hardscaping') },
        { label: "Landscaping", ariaLabel: "Landscaping Services", href: "#landscaping", onClick: () => setActiveService('landscaping') },
        { label: "Pressure Washing", ariaLabel: "Pressure Washing Services", href: "#pressurewashing", onClick: () => setActiveService('pressurewashing') }
      ]
    },
    {
      label: "Gallery",
      bgColor: currentConfig.colors.primary, 
      textColor: "#fff",
      links: [
        { label: "Images", ariaLabel: "Project Images", href: "#images" },
        { label: "Reviews", ariaLabel: "Customer Reviews", href: "#reviews" },
        { label: "Extras", ariaLabel: "Additional Content", href: "#extras" }
      ]
    }
  ];

  return (
    <Router>
      <div className="app">
      {/* Animated Navigation */}
      <CardNav
        logo=""
        logoAlt=""
        businessName="Miklus Property Maintenance"
        items={items}
        baseColor="rgba(255, 255, 255, 0.95)"
        menuColor={currentConfig.colors.primary}
        buttonBgColor={currentConfig.colors.primary}
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Hero Section with Color Background */}
      <section className="hero">
        <div className="color-background"></div>
        
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src="/logo.png" 
              alt="Miklus Property Management Logo" 
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

      {/* White Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="button-layout">
            <div className="button-row">
              <button 
                className={`service-button ${activeService === 'hardscaping' ? 'active' : ''}`}
                onClick={() => setActiveService('hardscaping')}
              >
                Hardscaping
              </button>
              <button 
                className={`service-button ${activeService === 'landscaping' ? 'active' : ''}`}
                onClick={() => setActiveService('landscaping')}
              >
                Landscaping
              </button>
              <button 
                className={`service-button ${activeService === 'pressurewashing' ? 'active' : ''}`}
                onClick={() => setActiveService('pressurewashing')}
              >
                Pressure Washing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="services-showcase">
        <div className="container">
          <div className="services-header">
            <div className="services-header-top">
              <h2 className="services-title">{currentConfig.name} Services</h2>
              <a href="https://clienthub.getjobber.com/booking/a03d1ca8-3c12-4e78-bec3-125a0fd3a597" target="_blank" rel="noopener noreferrer" className="services-book-now-button">Book Now</a>
            </div>
            <p className="services-subtitle">Professional {currentConfig.name.toLowerCase()} solutions for your property</p>
          </div>
          
          <div className="services-grid">
            {/* Service 1 - Large Image */}
            <div className="service-item service-large">
              <div className="service-image">
                <img src={currentConfig.images[0]} alt={`${currentConfig.name} Service`} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{currentConfig.services[0].title}</h3>
                <p className="service-description">{currentConfig.services[0].description}</p>
                <ul className="service-list">
                  {currentConfig.services[0].services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 2 - Medium Image */}
            <div className="service-item service-medium">
              <div className="service-image">
                <img src={currentConfig.images[1]} alt={`${currentConfig.name} Service`} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{currentConfig.services[1].title}</h3>
                <p className="service-description">{currentConfig.services[1].description}</p>
                <ul className="service-list">
                  {currentConfig.services[1].services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3 - Small Image */}
            <div className="service-item service-small">
              <div className="service-image">
                <img src={currentConfig.images[2]} alt={`${currentConfig.name} Service`} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{currentConfig.services[2].title}</h3>
                <p className="service-description">{currentConfig.services[2].description}</p>
                <ul className="service-list">
                  {currentConfig.services[2].services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
      
      
      <Routes>
        <Route path="/about" element={<About currentConfig={currentConfig} />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
