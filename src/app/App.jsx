import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardNav from '../components/layout/CardNav.jsx'
import HomePage from '../pages/HomePage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import GalleryPage from '../pages/GalleryPage.jsx'
import { serviceConfigs, DEFAULT_SERVICE_KEY } from '../data/serviceConfigs.js'
import { BOOKING_URL } from '../constants/site.js'
import '../styles/app.css'

const STORAGE_KEY = 'mpm-active-service'

function isValidServiceKey(key) {
  return Boolean(key && Object.prototype.hasOwnProperty.call(serviceConfigs, key))
}

export default function App() {
  const [activeService, setActiveService] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return isValidServiceKey(saved) ? saved : DEFAULT_SERVICE_KEY
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, activeService)
  }, [activeService])

  const currentConfig = serviceConfigs[activeService]

  useEffect(() => {
    const root = document.documentElement
    const c = currentConfig.colors
    root.style.setProperty('--service-primary', c.primary)
    root.style.setProperty('--service-secondary', c.secondary)
    root.style.setProperty('--service-accent', c.accent)
    root.style.setProperty('--service-neutral', c.neutral)
    root.style.setProperty('--service-background', c.background)
  }, [activeService, currentConfig.colors])

  const cardStyle = { bgColor: '#2a3830', textColor: '#f7f5f0' }

  const items = [
    {
      label: 'Menu',
      ...cardStyle,
      href: '/',
      links: [
        { label: 'Home', ariaLabel: 'Home', href: '/' },
        { label: 'About', ariaLabel: 'About MPM', href: '/about' },
        { label: 'Contact', ariaLabel: 'Contact and estimate', href: '/#contact' },
      ],
    },
    {
      label: 'Services',
      ...cardStyle,
      href: '/#services',
      links: [
        { label: 'Hardscaping', ariaLabel: 'Hardscaping', href: '/#services', onClick: () => setActiveService('hardscaping') },
        { label: 'Landscaping', ariaLabel: 'Landscaping', href: '/#services', onClick: () => setActiveService('landscaping') },
        { label: 'Pressure washing', ariaLabel: 'Pressure washing', href: '/#services', onClick: () => setActiveService('pressurewashing') },
      ],
    },
    {
      label: 'Book',
      ...cardStyle,
      href: BOOKING_URL,
      links: [
        { label: 'Free estimate', ariaLabel: 'Book a free estimate online', href: BOOKING_URL },
        { label: 'Call now', ariaLabel: 'Call MPM', href: 'tel:6099333526' },
        { label: 'Services', ariaLabel: 'Services', href: '/#services' },
      ],
    },
  ]

  return (
    <Router>
      <div className="app">
        <CardNav
          businessName="MPM New Jersey"
          items={items}
          baseColor="rgba(253, 252, 250, 0.96)"
          menuColor="#1e2822"
          buttonBgColor="#a67c52"
          buttonTextColor="#fdfcfa"
          bookingUrl={BOOKING_URL}
          ease="power3.out"
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                activeService={activeService}
                setActiveService={setActiveService}
                serviceConfigs={serviceConfigs}
                currentConfig={currentConfig}
              />
            }
          />
          <Route path="/about" element={<AboutPage currentConfig={currentConfig} />} />
          <Route path="/gallery" element={<GalleryPage currentConfig={currentConfig} />} />
        </Routes>
      </div>
    </Router>
  )
}
