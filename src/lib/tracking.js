import { GTM_ID, META_PIXEL_ID, META_PIXEL_READY, TRACKING_READY } from '../constants/tracking.js'

let gtmLoaded = false
let metaPixelLoaded = false

function initMetaPixel() {
  if (metaPixelLoaded || typeof window === 'undefined' || !META_PIXEL_READY) return

  if (typeof window.fbq === 'function') {
    metaPixelLoaded = true
    return
  }

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  fbq('init', META_PIXEL_ID)
  fbq('track', 'PageView')
  metaPixelLoaded = true
}

/** Initialize Meta pixel + GTM. Idempotent. GTM stays inert until GTM_ID is set. */
export function initTracking() {
  if (typeof window === 'undefined') return

  initMetaPixel()

  if (gtmLoaded) return

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
  gtmLoaded = true
}

/** Push an event onto dataLayer for GTM triggers to fire on. */
export function pushEvent(event, params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

/** Fire on /thank-you mount. GTM + Meta Lead conversion. */
export function fireLeadConversion(meta = {}) {
  pushEvent('generate_lead', {
    method: 'contact_form',
    form_location: '/estimate',
    ...meta,
  })

  if (typeof fbq === 'function') {
    fbq('track', 'Lead')
  }
}
