import { motion as Motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { DURATION, EASE_OUT, STAGGER_WORD } from '../../lib/motion-tokens.js'

/**
 * Word stagger for hero display type (react-bits–class typography motion).
 * Full sentence stays available to screen readers via parent-provided sr-only span.
 */
export default function StaggerWords({ text, className = '' }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text])

  if (reduceMotion) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    )
  }

  return (
    <span ref={ref} className={className} aria-hidden="true">
      {words.map((word, i) => (
        <Motion.span
          key={`${word}-${i}`}
          className="stagger-word"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{
            duration: DURATION.headline,
            delay: i * STAGGER_WORD,
            ease: EASE_OUT,
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00a0' : null}
        </Motion.span>
      ))}
    </span>
  )
}
