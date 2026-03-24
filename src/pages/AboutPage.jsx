import SiteFooter from '../components/layout/SiteFooter.jsx'
import { useServiceTheme } from '../hooks/useServiceTheme.js'
import { MEDIA } from '../constants/media.js'
import '../styles/pages/about.css'

export default function AboutPage({ currentConfig }) {
  useServiceTheme(currentConfig.colors)

  return (
    <div className="about-page about-page--remodel">
      <header className="about-hero">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <p className="label">Our team</p>
            <h1 className="about-hero-title">Family-run. Field-tested.</h1>
            <p className="about-hero-lead">
              Miklus Property Maintenance started with lawn care and grew into full outdoor
              construction and care—same standards, bigger scope.
            </p>
          </div>
          <figure className="about-hero-photo">
            <img src={MEDIA.jakubVertical} alt="MPM on site" loading="lazy" />
          </figure>
        </div>
      </header>

      <section className="about-story about-story--remodel">
        <div className="container about-story-inner">
          <h2 className="about-section-title">The story</h2>
          <div className="about-prose">
            <p>
              MPM was founded in 2019 by Jakub Miklus, building the business from hands-on lawn
              work and strong client relationships. That foundation still shows up in how we plan
              jobs and communicate on site.
            </p>
            <p>
              Jakub later partnered with his twin brother, Karol Miklus, who had grown a successful
              pressure washing company. Together they expanded MPM into hardscaping, landscaping, and
              exterior maintenance under one roof.
            </p>
            <p>
              Today the focus is unchanged: reliable scheduling, careful execution, and finishes
              that hold up in real New Jersey weather.
            </p>
          </div>
        </div>
      </section>

      <section className="about-signatures" aria-label="Founders">
        <div className="container about-signatures-inner">
          <img src={MEDIA.signatures.jakub} alt="Jakub Miklus signature" className="about-sig-img" />
          <img src={MEDIA.signatures.karol} alt="Karol Miklus signature" className="about-sig-img" />
        </div>
      </section>

      <section className="about-team about-team--remodel">
        <div className="container">
          <h2 className="about-section-title about-section-title--center">Leadership</h2>
          <div className="about-team-grid">
            <article className="about-member">
              <div className="about-member-photo">
                <img src={MEDIA.team.jakub} alt="Jakub Miklus" loading="lazy" />
              </div>
              <h3>Jakub Miklus</h3>
              <p className="about-member-role">Founder</p>
            </article>
            <article className="about-member">
              <div className="about-member-photo">
                <img src={MEDIA.team.karol} alt="Karol Miklus" loading="lazy" />
              </div>
              <h3>Karol Miklus</h3>
              <p className="about-member-role">Co-owner</p>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
