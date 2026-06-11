/**
 * MPM paid-social static — same layering as HTML batch (bg + scrim + type + logo).
 * Canvas sizes: 1080×1350 (4x5), 1080×1920 (9x16), 1080×1080 (1x1).
 */
export default function MpmStaticAd({
  ratio,
  bgUrl,
  scrim = 'deep',
  eyebrow,
  headlineClass = 'headline-md',
  headline,
  subhead,
  chips = [],
  ctaLabel,
  bookingUrl,
  phoneDisplay,
  phoneTel,
  siteUrl,
  serviceArea,
  adTag,
}) {
  const ratioClass = ratio === '9x16' ? 'ad-9x16' : ratio === '1x1' ? 'ad-1x1' : 'ad-4x5'
  const scrimClass = scrim === 'bottom' ? 'scrim-bottom' : scrim === 'side' ? 'scrim-side' : 'scrim-deep'

  return (
    <div className={`ad ${ratioClass}`}>
      <div className="bg-photo" style={{ backgroundImage: `url(${bgUrl})` }} />
      <div className={`scrim ${scrimClass}`} />

      <div className="eyebrow">{eyebrow}</div>
      <img className="logo" src="/ads/mpm-logo-white.png" alt="MPM Property Management" />

      <div className="content">
        <h1 className={`headline ${headlineClass}`}>{headline}</h1>
        {subhead ? <p className="subhead">{subhead}</p> : null}

        {chips.length > 0 ? (
          <div className="proof-row">
            {chips.map((t) => (
              <span key={t} className="proof-chip">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="cta-row">
          <a className="cta-btn" href={bookingUrl} target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
          <div className="cta-meta">
            <div className="cta-phone">
              <a href={phoneTel}>{phoneDisplay}</a>
            </div>
            <div className="cta-url">{siteUrl}</div>
            <div className="cta-area">{serviceArea}</div>
          </div>
        </div>
      </div>

      {adTag ? <div className="ad-tag">{adTag}</div> : null}
    </div>
  )
}
