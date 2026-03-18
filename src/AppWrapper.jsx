import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardNav from './CardNav'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import './App.css'

function AppWrapper() {
  // Service switching state - persist across page navigation
  const [activeService, setActiveService] = useState(() => {
    return localStorage.getItem('mpm-active-service') || 'hardscaping';
  });

  // Update localStorage when service changes
  useEffect(() => {
    localStorage.setItem('mpm-active-service', activeService);
  }, [activeService]);

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
        '/hardscaping/1.png',
        '/hardscaping/2.png',
        '/hardscaping/3.png'
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
        '/pressurewash/1.png',
        '/pressurewash/2.png',
        '/pressurewash/3.png'
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

  // Apply dynamic color scheme with persistence
  useEffect(() => {
    const root = document.documentElement;
    const colors = currentConfig.colors;
    
    // Apply colors to CSS variables
    root.style.setProperty('--service-primary', colors.primary);
    root.style.setProperty('--service-secondary', colors.secondary);
    root.style.setProperty('--service-accent', colors.accent);
    root.style.setProperty('--service-neutral', colors.neutral);
    root.style.setProperty('--service-background', colors.background);
    
    // Also apply to data attributes for more reliable styling
    root.setAttribute('data-theme', activeService);
    root.setAttribute('data-primary', colors.primary);
    root.setAttribute('data-secondary', colors.secondary);
    root.setAttribute('data-accent', colors.accent);
    
    // Force a repaint to ensure styles apply
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
    
    console.log('Applied theme:', activeService, colors);
  }, [activeService, currentConfig.colors]);

  const items = [
    {
      label: "About",
      bgColor: currentConfig.colors.primary,
      textColor: "#fff",
      href: "/about",
      links: [
        { label: "Contact", ariaLabel: "Contact Us" },
        { label: "Our Story", ariaLabel: "Our Story" },
        { label: "Customer Testimonies", ariaLabel: "Customer Testimonies" }
      ]
    },
    {
      label: "Services", 
      bgColor: currentConfig.colors.primary,
      textColor: "#fff",
      href: "/",
      links: [
        { label: "Hardscaping", ariaLabel: "Hardscaping Services" },
        { label: "Landscaping", ariaLabel: "Landscaping Services" },
        { label: "Pressure Washing", ariaLabel: "Pressure Washing Services" }
      ]
    },
    {
      label: "Gallery",
      bgColor: currentConfig.colors.primary, 
      textColor: "#fff",
      href: "/gallery",
      links: [
        { label: "Images", ariaLabel: "Project Images" },
        { label: "Reviews", ariaLabel: "Customer Reviews" },
        { label: "Extras", ariaLabel: "Additional Content" }
      ]
    }
  ];

  return (
    <Router>
      <div className="app">
        {/* Animated Navigation - Always visible */}
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

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={
            <Home 
              activeService={activeService}
              setActiveService={setActiveService}
              serviceConfigs={serviceConfigs}
              currentConfig={currentConfig}
            />
          } />
          <Route path="/about" element={<About currentConfig={currentConfig} />} />
          <Route path="/gallery" element={<Gallery currentConfig={currentConfig} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppWrapper;
