import { BUSINESS_NAME, EMAIL, PHONE_DISPLAY, PHONE_TEL } from '../../constants/site.js'
import { MEDIA } from '../../constants/media.js'
import '../../styles/components/site-footer.css'

const IG_URL = 'https://www.instagram.com/mpm.newjersey/'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <img src={MEDIA.logo} alt="MPM logo" width={44} height={44} className="site-footer-logo" />
          <div>
            <p className="site-footer-name">{BUSINESS_NAME}</p>
            <p className="site-footer-tagline">
              Hardscaping, landscaping, and pressure washing—South Jersey and the Philadelphia area.
            </p>
          </div>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-heading">Contact</p>
          <a href={PHONE_TEL} className="site-footer-link">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="site-footer-link">
            {EMAIL}
          </a>
          <p className="site-footer-muted">Based in Cherry Hill, NJ · South Jersey &amp; Philadelphia area</p>
        </div>
        <div className="site-footer-col site-footer-col--social">
          <p className="site-footer-heading">Follow</p>
          <a href={IG_URL} className="site-footer-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="container site-footer-bottom-inner">
          <p>&copy; {year} {BUSINESS_NAME}. All rights reserved.</p>
          <a href="/privacy/" className="site-footer-legal">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
