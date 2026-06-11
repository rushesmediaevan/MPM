import MpmStaticAd from '../components/ads/MpmStaticAd.jsx'
import { BOOKING_URL } from '../constants/site.js'
import '../styles/mpm-static-ad-export.css'

const PHONE_DISPLAY = '(609) 933-3526'
const PHONE_TEL = 'tel:6099333526'
const SITE = 'mpmnewjersey.com'
const AREA = 'Cherry Hill · Marlton · Moorestown'

const PLATES = {
  p1: '/ads/pressure-washing/mpm-pw-p1-driveway-split-4x5.jpg',
  p2: '/ads/pressure-washing/mpm-pw-p2-wand-silhouette-9x16.jpg',
  p3: '/ads/pressure-washing/mpm-pw-p3-paver-split-1x1.jpg',
  p4: '/ads/pressure-washing/mpm-pw-p4-vinyl-stripes-9x16.jpg',
  p5: '/ads/pressure-washing/mpm-pw-p5-before-establishing-4x5.jpg',
}

export default function PressureWashAdsPage() {
  return (
    <div className="mpm-static-ads-route">
      <p className="page-title">
        Fal nano-banana-2 plates + React overlay (native 1080). Export: Chrome screenshot or
        devtools capture at 100% zoom. Copy JPGs + logo into public/ads per README if missing.
      </p>

      <MpmStaticAd
        ratio="4x5"
        bgUrl={PLATES.p1}
        scrim="deep"
        eyebrow="MPM · Pressure washing · South Jersey"
        headlineClass="headline-md"
        headline={
          <>
            Half the grime gone.
            <br />
            <em>All the curb back.</em>
          </>
        }
        subhead="Driveway and concrete wash that reads clean from the street — same local crew as patios and walks."
        chips={['Free estimate', 'Same-week slots', 'No subs']}
        ctaLabel="Book free estimate"
        bookingUrl={BOOKING_URL}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        siteUrl={SITE}
        serviceArea={AREA}
        adTag="MPM-PW-P1 · 4:5 · fal · driveway split"
      />

      <MpmStaticAd
        ratio="9x16"
        bgUrl={PLATES.p2}
        scrim="deep"
        eyebrow="MPM · House wash · Driveways"
        headlineClass="headline-lg"
        headline={
          <>
            Power wash
            <br />
            <em>done right.</em>
          </>
        }
        subhead="Soft-wash safe on siding, full blast where concrete needs it. Owner on site."
        chips={['Residential', 'Commercial', 'Cherry Hill area']}
        ctaLabel="Book free estimate"
        bookingUrl={BOOKING_URL}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        siteUrl={SITE}
        serviceArea={AREA}
        adTag="MPM-PW-P2 · 9:16 · fal · wand silhouette"
      />

      <MpmStaticAd
        ratio="1x1"
        bgUrl={PLATES.p3}
        scrim="bottom"
        eyebrow="MPM · Pavers · Concrete"
        headlineClass="headline-sm"
        headline={
          <>
            Algae off the joints.
            <br />
            <em>Color back.</em>
          </>
        }
        subhead="Paver and patio wash before seal season — pairs with new hardscape installs."
        chips={['Paver-safe', 'Joint rinse', 'One crew']}
        ctaLabel="Book free estimate"
        bookingUrl={BOOKING_URL}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        siteUrl={SITE}
        serviceArea={AREA}
        adTag="MPM-PW-P3 · 1:1 · fal · paver split"
      />

      <MpmStaticAd
        ratio="9x16"
        bgUrl={PLATES.p4}
        scrim="side"
        eyebrow="MPM · Vinyl · Stucco prep"
        headlineClass="headline-md"
        headline={
          <>
            Siding that
            <br />
            <em>reads clean.</em>
          </>
        }
        subhead="Controlled wash on white vinyl — no etched glass lines, no rushed wand passes."
        chips={['Soft wash', 'Detail edges', 'Local proof']}
        ctaLabel="Book free estimate"
        bookingUrl={BOOKING_URL}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        siteUrl={SITE}
        serviceArea={AREA}
        adTag="MPM-PW-P4 · 9:16 · fal · vinyl stripes"
      />

      <MpmStaticAd
        ratio="4x5"
        bgUrl={PLATES.p5}
        scrim="deep"
        eyebrow="MPM · Before we roll hoses"
        headlineClass="headline-md"
        headline={
          <>
            This driveway
            <br />
            <em>is next.</em>
          </>
        }
        subhead="Pair with the wash hero in feed or carousel — same property story, booking holds the date."
        chips={['Photo A in set', 'Deposit holds date', 'Free quote']}
        ctaLabel="Book free estimate"
        bookingUrl={BOOKING_URL}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        siteUrl={SITE}
        serviceArea={AREA}
        adTag="MPM-PW-P5 · 4:5 · fal · before establishing"
      />
    </div>
  )
}
