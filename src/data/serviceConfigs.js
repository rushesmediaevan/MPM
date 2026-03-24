/**
 * Service categories, imagery, and theme for MPM.
 */
import { MEDIA } from '../constants/media.js'

const brandColors = {
  primary: '#3d5242',
  secondary: '#e6e3d9',
  accent: '#a67c52',
  neutral: '#6f7670',
  background: '#f3f1eb',
}

export const serviceConfigs = {
  hardscaping: {
    name: 'Hardscaping',
    icon: '🪨',
    colors: { ...brandColors },
    images: [...MEDIA.hardscaping],
    checklist: [
      'Patios, walkways, and steps',
      'Retaining and garden walls',
      'Outdoor kitchens, fire pits, and seating walls',
      'Pergolas and shade structures',
      'Grading and drainage coordination',
    ],
  },
  landscaping: {
    name: 'Landscaping',
    icon: '🌿',
    colors: { ...brandColors },
    images: [...MEDIA.landscaping],
    checklist: [
      'Landscape design and installation',
      'Lawn care, edging, and trimming',
      'Mulching, planting, and bed work',
      'Seasonal cleanups',
      'Commercial and HOA maintenance',
      'Fertilization and turf programs',
    ],
  },
  pressurewashing: {
    name: 'Pressure washing',
    icon: '💧',
    colors: { ...brandColors },
    images: [...MEDIA.pressureWashing],
    checklist: [
      'Homes and building exteriors',
      'Driveways, walks, and patios',
      'Decks and fences',
      'Storefronts and parking areas',
      'Roofs, gutters, and detail cleaning',
    ],
  },
}

export const SERVICE_KEYS = Object.keys(serviceConfigs)
export const DEFAULT_SERVICE_KEY = 'hardscaping'
