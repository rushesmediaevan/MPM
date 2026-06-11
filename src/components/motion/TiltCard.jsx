import { useEffect, useRef } from 'react'

/**
 * CSS 3D tilt on pointer move. Pointer position → rotateX/rotateY within ±max deg.
 * Disabled for prefers-reduced-motion and coarse pointers (touch).
 */
export default function TiltCard({ as = 'article', className = '', max = 8, glare = true, children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || coarse) return

    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    const apply = () => {
      raf = 0
      tx += (cx - tx) * 0.18
      ty += (cy - ty) * 0.18
      el.style.setProperty('--tilt-x', `${ty.toFixed(2)}deg`)
      el.style.setProperty('--tilt-y', `${(-tx).toFixed(2)}deg`)
      el.style.setProperty('--tilt-mx', `${(50 + tx * 4).toFixed(1)}%`)
      el.style.setProperty('--tilt-my', `${(50 + ty * 4).toFixed(1)}%`)
      if (Math.abs(cx - tx) > 0.01 || Math.abs(cy - ty) > 0.01) {
        raf = requestAnimationFrame(apply)
      }
    }

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      cx = (px - 0.5) * 2 * max
      cy = (py - 0.5) * 2 * max
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      cx = 0
      cy = 0
      if (!raf) raf = requestAnimationFrame(apply)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max])

  const Tag = as
  const classes = `tilt-card ${glare ? 'tilt-card--glare' : ''} ${className}`.trim()
  return (
    <Tag ref={ref} className={classes} {...rest}>
      <div className="tilt-card-inner">{children}</div>
      {glare && <div className="tilt-card-glare" aria-hidden="true" />}
    </Tag>
  )
}
