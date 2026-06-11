import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Hero plate — premium patio-at-golden-hour image layer
 * with GSAP ScrollTrigger parallax.
 */
export default function HeroPlate({ src, alt = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)

    const anim = gsap.to(el, {
      yPercent: 18,
      scale: 1.06,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.4,
      },
    })

    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [])

  return (
    <div className="hero-plate" aria-hidden="true">
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onError={(e) => {
          // If the Midjourney export isn't in /public/art/hero yet, hide the
          // plate entirely — the shader + CSS gradient still carry the hero.
          e.currentTarget.parentElement.style.display = 'none'
        }}
      />
      <div className="hero-plate-scrim" />
    </div>
  )
}
