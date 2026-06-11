import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fireLeadConversion } from '../lib/tracking.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants/site.js'
import '../styles/pages/estimate.css'

export default function ThankYouPage() {
  useEffect(() => {
    fireLeadConversion()
  }, [])

  return (
    <div className="thanks-page">
      <main className="thanks-card">
        <p className="thanks-eyebrow">Request received</p>
        <h1 className="thanks-title">Thanks — we’ll be in touch shortly.</h1>
        <p className="thanks-body">
          A member of the MPM team will call or text within one business day to confirm details and set
          a walk-through. If it’s after hours, we’ll reach out first thing in the morning.
        </p>
        <p className="thanks-phone">
          Need us sooner? <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
        </p>
        <Link className="thanks-home" to="/">
          Back to home
        </Link>
      </main>
    </div>
  )
}
