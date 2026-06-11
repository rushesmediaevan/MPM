/**
 * MPM — Google measurement IDs + form endpoint.
 *
 * REPLACE the placeholders below after creating the accounts.
 * See clients/mpm/docs/MPM-GOOGLE-CONVERSION-TRACKING-BUILD-PROMPT.md.
 *
 * Until GTM_ID is set to a real GTM-XXXXXXX value, the loader stays inert
 * (no network calls, no console errors). The form falls back to a mailto:
 * if FORM_ENDPOINT is still the placeholder.
 */

// 1. Create container at https://tagmanager.google.com → paste here
export const GTM_ID = 'GTM-XXXXXXX'

// 2. Create GA4 property at https://analytics.google.com → paste here
//    (used inside GTM's GA4 Configuration tag, not loaded directly here)
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'

// 3. Google Ads conversion (created later in Ads UI → wired via GTM tag)
//    These two are reference-only for the dev hand-off; GTM holds the live values.
export const GOOGLE_ADS_CONVERSION_ID = 'AW-XXXXXXXXXX'
export const GOOGLE_ADS_CONVERSION_LABEL = 'XXXXXXXXXXXX'

// 4. Form submission endpoint.
//    Recommended: Formspree (https://formspree.io) — free tier, 2-minute signup.
//    Create a form, set notification email to mikluspropertymaintenance@gmail.com
//    + BCC evan@rushesmedia.com, then paste the endpoint URL here.
//    Example: 'https://formspree.io/f/xqkrwbpl'
export const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID'

// Derived helpers
export const TRACKING_READY = GTM_ID !== 'GTM-XXXXXXX'
export const FORM_READY = !FORM_ENDPOINT.includes('REPLACE_WITH_FORM_ID')
