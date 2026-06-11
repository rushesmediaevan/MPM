import { GTM_ID, TRACKING_READY } from '../constants/tracking.js'

let loaded = false

/** Initialize dataLayer + inject GTM script. Idempotent. No-op until GTM_ID is set. */
export function initTracking() {
  if (loaded || typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })

  if (!TRACKING_READY) return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(s)
  loaded = true
}

/** Push an event onto dataLayer for GTM triggers to fire on. */
export function pushEvent(event, params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

/** Fire on /thank-you mount. GTM listens for `generate_lead` and fires GA4 + Ads conversion. */
export function fireLeadConversion(meta = {}) {
  pushEvent('generate_lead', {
    method: 'contact_form',
    form_location: '/estimate',
    ...meta,
  })
}
