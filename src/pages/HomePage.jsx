import { useEffect } from 'react'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import {
  SectionFlowRule,
  StaggerWords,
  HeroShader,
  HeroPlate,
  TiltCard,
} from '../components/motion/index.js'
import { BOOKING_URL, BUSINESS_NAME, PHONE_DISPLAY, PHONE_TEL } from '../constants/site.js'
import { MEDIA } from '../constants/media.js'

const HERO_HEADLINE = 'Hardscaping & Landscaping in South Jersey'

function ServiceImage({ image, fallback, icon, alt = '' }) {
  if (image) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        onError={(e) => {
          if (fallback && e.currentTarget.src !== fallback) {
            e.currentTarget.src = fallback
          }
        }}
      />
    )
  }
  return (
    <div className="img-placeholder" aria-hidden="true">
      <span className="img-placeholder-icon">{icon}</span>
    </div>
  )
}

export default function HomePage({ activeService, setActiveService, serviceConfigs, currentConfig }) {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
    targets.forEach((el) => {
      const delay = Number(el.dataset.delay || 0)
      el.style.transitionDelay = `${delay}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeService])

  const processSteps = [
    {
      title: 'Same-day estimate',
      text: 'Reach out by phone or online. We respond quickly and schedule your on-site estimate as soon as the same day when possible.',
    },
    {
      title: 'Proposal',
      text: 'You get a written proposal with scope, pricing, and timeline.',
    },
    {
      title: 'Build & closeout',
      text: 'We complete the work, keep the site orderly, and walk through the finished job with you.',
    },
  ]

  const pillars = [
    {
      title: 'Hardscaping',
      description: 'Patios, walls, steps, and outdoor living.',
      image: MEDIA.servicePlates?.hardscaping || MEDIA.hardscaping[0],
      fallback: MEDIA.hardscaping[0],
      alt: 'Natural stone patio with seating wall and plantings',
      key: 'hardscaping',
    },
    {
      title: 'Landscaping',
      description: 'Design, installation, and property maintenance.',
      image: MEDIA.servicePlates?.landscaping || MEDIA.landscaping[0],
      fallback: MEDIA.landscaping[0],
      alt: 'Manicured lawn and stone walkway along a front entry',
      key: 'landscaping',
    },
    {
      title: 'Pressure washing',
      description: 'Residential and commercial exterior cleaning.',
      image: MEDIA.servicePlates?.pressureWashing || MEDIA.pressureWashing[0],
      fallback: MEDIA.pressureWashing[0],
      alt: 'Paver patio half-cleaned showing pressure washing results',
      key: 'pressurewashing',
    },
  ]

  return (
    <>
      <main className="home-main">
        <section className="hero hero--minimal hero--cinematic" id="top" aria-labelledby="hero-title">
          <div className="color-background" />
          <HeroShader className="hero-shader" />
          <HeroPlate src={MEDIA.heroPlate} alt="" />
          <div className="hero-depth-orbs" aria-hidden="true" />
          <div className="hero-scene">
            <div className="container hero-grid hero-grid--minimal">
              <div className="hero-copy hero-copy--minimal">
                <div className="hero-brand reveal" data-delay="0">
                  <img
                    src={MEDIA.logo}
                    alt=""
                    className="hero-logo hero-logo--light"
                    width={320}
                    height={128}
                  />
                  <p className="hero-brand-line">
                    <span className="hero-brand-full">{BUSINESS_NAME}</span>
                  </p>
                </div>
                <h1 id="hero-title" className="hero-title hero-title--minimal">
                  <span className="sr-only">
                    {BUSINESS_NAME}. {HERO_HEADLINE}
                  </span>
                  <StaggerWords text={HERO_HEADLINE} />
                </h1>
                <p className="hero-sub reveal" data-delay="90">
                  Licensed &amp; insured. Clean installs. Reliable service.
                </p>
                <div className="hero-cta-row hero-cta-row--minimal reveal" data-delay="120">
                  <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book estimate
                  </a>
                  <a className="btn btn-secondary" href={PHONE_TEL}>
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-flow-rule-wrap">
          <SectionFlowRule />
        </div>

        <section className="services-showcase services-showcase--centered" id="services">
          <div className="container">
            <header className="section-intro section-intro--centered reveal" data-delay="0">
              <p className="label">Services</p>
              <h2 className="section-title">What we do</h2>
            </header>

            <div className="services-grid services-grid--three">
              {pillars.map((p, index) => (
                <TiltCard
                  key={p.key}
                  as="article"
                  className="service-card-stacked reveal-scale"
                  data-delay={index * 80}
                  max={6}
                >
                  <div className="service-card-stacked-image">
                    <ServiceImage image={p.image} fallback={p.fallback} icon={currentConfig.icon} alt={p.alt} />
                  </div>
                  <div className="service-card-stacked-body">
                    <h3 className="service-card-stacked-title">{p.title}</h3>
                    <p className="service-card-stacked-desc">{p.description}</p>
                    <button
                      className="service-card-stacked-btn"
                      type="button"
                      onClick={() => {
                        setActiveService(p.key);
                        if (window.innerWidth <= 768) {
                          document.getElementById('service-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      View service list
                    </button>
                  </div>
                </TiltCard>
              ))}
            </div>

            <div className="checklist-block checklist-block--centered reveal" id="service-list" data-delay="100">
              <div className="checklist-block-header">
                <h3 className="checklist-block-title">Service list</h3>
                <p className="checklist-block-hint">Select a trade to view what we offer.</p>
              </div>
              <div className="checklist-tabs" role="tablist" aria-label="Service category">
                {Object.entries(serviceConfigs).map(([key, cfg]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activeService === key}
                    className={`checklist-tab ${activeService === key ? 'is-active' : ''}`}
                    onClick={() => setActiveService(key)}
                  >
                    {cfg.name}
                  </button>
                ))}
              </div>
              <div className="checklist-panel" role="tabpanel">
                <ul className="checklist-list">
                  {currentConfig.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section process-section--centered" id="process">
          <div className="container">
            <header className="section-intro section-intro--centered reveal" data-delay="0">
              <p className="label">How we work</p>
              <h2 className="section-title">Estimate, proposal, build</h2>
            </header>
            <div className="process-grid process-grid--three">
              {processSteps.map((step, index) => (
                <article className="process-card process-card--centered reveal" data-delay={index * 90} key={step.title}>
                  <p className="process-number">0{index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta final-cta--home final-cta--ambient" id="contact">
          <div className="container container--narrow final-cta-content reveal-scale" data-delay="0">
            <p className="label">Get started</p>
            <h2>Book an estimate or call</h2>
            <p>Tell us what you need—we’ll take it from there.</p>
            <div className="hero-cta-row">
              <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book estimate
              </a>
              <a className="btn btn-secondary btn-light" href={PHONE_TEL}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <div className="mobile-quick-cta" aria-label="Quick contact">
          <a href={PHONE_TEL} className="mobile-quick-btn mobile-quick-call">
            Call
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-quick-btn mobile-quick-estimate"
          >
            Estimate
          </a>
        </div>

        <SiteFooter />
      </main>
    </>
  )
}
