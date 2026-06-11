import { motion as Motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { DURATION, EASE_OUT } from '../../lib/motion-tokens.js'

/** Thin gold-gradient rule between major sections (editorial rhythm). */
export default function SectionFlowRule() {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  if (reduceMotion) {
    return <div ref={ref} className="section-flow-rule section-flow-rule--static" aria-hidden="true" />
  }

  return (
    <Motion.div
      ref={ref}
      className="section-flow-rule"
      style={{ transformOrigin: 'center' }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
      transition={{ duration: DURATION.rule, ease: EASE_OUT }}
      aria-hidden="true"
    />
  )
}
