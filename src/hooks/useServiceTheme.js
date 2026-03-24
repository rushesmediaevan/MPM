import { useEffect } from 'react'

/**
 * Pushes service palette into CSS custom properties for About/Gallery and legacy sections.
 */
export function useServiceTheme(colors) {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--service-primary', colors.primary)
    root.style.setProperty('--service-secondary', colors.secondary)
    root.style.setProperty('--service-accent', colors.accent)
    root.style.setProperty('--service-neutral', colors.neutral)
    root.style.setProperty('--service-background', colors.background)
  }, [colors])
}
