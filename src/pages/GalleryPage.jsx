import Masonry from '../components/media/Masonry.jsx'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import { useServiceTheme } from '../hooks/useServiceTheme.js'
import { MEDIA } from '../constants/media.js'
import '../styles/pages/gallery.css'

export default function GalleryPage({ currentConfig }) {
  useServiceTheme(currentConfig.colors)

  const masonryItems = MEDIA.gallery.map((item) => ({
    ...item,
    url: '#',
  }))

  return (
    <div className="gallery-page gallery-page--remodel">
      <header className="gallery-hero">
        <div className="gallery-hero-bg" aria-hidden="true" />
        <div className="container gallery-hero-inner">
          <p className="label">Portfolio</p>
          <h1 className="gallery-hero-title">Recent work</h1>
          <p className="gallery-hero-lead">
            Hardscapes, plantings, and cleanups from jobs across South Jersey.
          </p>
        </div>
      </header>

      <section className="gallery-section gallery-section--remodel" aria-label="Project photos">
        <div className="container gallery-masonry-wrap">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.55}
            stagger={0.04}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.98}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
