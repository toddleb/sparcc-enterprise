/**
 * SPARCC Color System - ROYGBIV Spectrum
 *
 * This module defines the complete color spectrum for the SPARCC Enterprise platform.
 * Colors are distributed across 10 domains following the ROYGBIV (Rainbow) spectrum.
 *
 * Spectrum Order:
 * 1. Red → Corporate
 * 2. Orange → Finance
 * 3. Yellow → Sales
 * 4. Green → Marketing
 * 5. Cyan → Product
 * 6. Blue → Customer Success
 * 7. Indigo → HR
 * 8. Deep Indigo → IT
 * 9. Purple → Operations
 * 10. Violet → Legal
 */

export const spectrumColors = {
  red: {
    name: 'Red',
    primary: '#dc2626',      // red-600
    secondary: '#ef4444',    // red-500
    tertiary: '#f97316',     // orange-600 (blend)
    gradient: 'from-red-700 via-red-600 to-red-500',
    text: 'text-red-600',
    bg: 'bg-red-600',
    border: 'border-red-600',
    hover: 'hover:bg-red-700',
    active: 'bg-red-700',
  },

  orange: {
    name: 'Orange',
    primary: '#ea580c',      // orange-600
    secondary: '#f97316',    // orange-500
    tertiary: '#fb923c',     // orange-400
    gradient: 'from-orange-700 via-orange-600 to-orange-500',
    text: 'text-orange-600',
    bg: 'bg-orange-600',
    border: 'border-orange-600',
    hover: 'hover:bg-orange-700',
    active: 'bg-orange-700',
  },

  yellow: {
    name: 'Yellow',
    primary: '#ca8a04',      // yellow-600
    secondary: '#eab308',    // yellow-500
    tertiary: '#fbbf24',     // yellow-400
    gradient: 'from-yellow-600 via-yellow-500 to-amber-400',
    text: 'text-yellow-600',
    bg: 'bg-yellow-600',
    border: 'border-yellow-600',
    hover: 'hover:bg-yellow-700',
    active: 'bg-yellow-700',
  },

  green: {
    name: 'Green',
    primary: '#16a34a',      // green-600
    secondary: '#22c55e',    // green-500
    tertiary: '#4ade80',     // green-400
    gradient: 'from-green-700 via-green-600 to-green-500',
    text: 'text-green-600',
    bg: 'bg-green-600',
    border: 'border-green-600',
    hover: 'hover:bg-green-700',
    active: 'bg-green-700',
  },

  cyan: {
    name: 'Cyan',
    primary: '#0891b2',      // cyan-600
    secondary: '#06b6d4',    // cyan-500
    tertiary: '#22d3ee',     // cyan-400
    gradient: 'from-cyan-700 via-cyan-600 to-cyan-500',
    text: 'text-cyan-600',
    bg: 'bg-cyan-600',
    border: 'border-cyan-600',
    hover: 'hover:bg-cyan-700',
    active: 'bg-cyan-700',
  },

  blue: {
    name: 'Blue',
    primary: '#2563eb',      // blue-600
    secondary: '#3b82f6',    // blue-500
    tertiary: '#60a5fa',     // blue-400
    gradient: 'from-blue-700 via-blue-600 to-blue-500',
    text: 'text-blue-600',
    bg: 'bg-blue-600',
    border: 'border-blue-600',
    hover: 'hover:bg-blue-700',
    active: 'bg-blue-700',
  },

  indigo: {
    name: 'Indigo',
    primary: '#4f46e5',      // indigo-600
    secondary: '#6366f1',    // indigo-500
    tertiary: '#818cf8',     // indigo-400
    gradient: 'from-indigo-700 via-indigo-600 to-indigo-500',
    text: 'text-indigo-600',
    bg: 'bg-indigo-600',
    border: 'border-indigo-600',
    hover: 'hover:bg-indigo-700',
    active: 'bg-indigo-700',
  },

  deepIndigo: {
    name: 'Deep Indigo',
    primary: '#5b21b6',      // violet-700 (deeper indigo)
    secondary: '#6d28d9',    // violet-600
    tertiary: '#7c3aed',     // violet-500
    gradient: 'from-violet-800 via-violet-700 to-violet-600',
    text: 'text-violet-700',
    bg: 'bg-violet-700',
    border: 'border-violet-700',
    hover: 'hover:bg-violet-800',
    active: 'bg-violet-800',
  },

  purple: {
    name: 'Purple',
    primary: '#9333ea',      // purple-600
    secondary: '#a855f7',    // purple-500
    tertiary: '#c084fc',     // purple-400
    gradient: 'from-purple-700 via-purple-600 to-purple-500',
    text: 'text-purple-600',
    bg: 'bg-purple-600',
    border: 'border-purple-600',
    hover: 'hover:bg-purple-700',
    active: 'bg-purple-700',
  },

  violet: {
    name: 'Violet',
    primary: '#7c3aed',      // violet-600
    secondary: '#8b5cf6',    // violet-500
    tertiary: '#a78bfa',     // violet-400
    gradient: 'from-violet-700 via-violet-600 to-fuchsia-600',
    text: 'text-violet-600',
    bg: 'bg-violet-600',
    border: 'border-violet-600',
    hover: 'hover:bg-violet-700',
    active: 'bg-violet-700',
  },

  // Extended spectrum colors for additional domains
  darkRed: {
    name: 'Dark Red',
    primary: '#991b1b',      // red-800
    secondary: '#b91c1c',    // red-700
    tertiary: '#dc2626',     // red-600
    gradient: 'from-red-900 via-red-800 to-red-700',
    text: 'text-red-800',
    bg: 'bg-red-800',
    border: 'border-red-800',
    hover: 'hover:bg-red-900',
    active: 'bg-red-900',
  },

  amber: {
    name: 'Amber',
    primary: '#d97706',      // amber-600
    secondary: '#f59e0b',    // amber-500
    tertiary: '#fbbf24',     // amber-400
    gradient: 'from-amber-700 via-amber-600 to-amber-500',
    text: 'text-amber-600',
    bg: 'bg-amber-600',
    border: 'border-amber-600',
    hover: 'hover:bg-amber-700',
    active: 'bg-amber-700',
  },

  lime: {
    name: 'Lime',
    primary: '#65a30d',      // lime-600
    secondary: '#84cc16',    // lime-500
    tertiary: '#a3e635',     // lime-400
    gradient: 'from-lime-700 via-lime-600 to-lime-500',
    text: 'text-lime-600',
    bg: 'bg-lime-600',
    border: 'border-lime-600',
    hover: 'hover:bg-lime-700',
    active: 'bg-lime-700',
  },

  emerald: {
    name: 'Emerald',
    primary: '#059669',      // emerald-600
    secondary: '#10b981',    // emerald-500
    tertiary: '#34d399',     // emerald-400
    gradient: 'from-emerald-700 via-emerald-600 to-emerald-500',
    text: 'text-emerald-600',
    bg: 'bg-emerald-600',
    border: 'border-emerald-600',
    hover: 'hover:bg-emerald-700',
    active: 'bg-emerald-700',
  },

  teal: {
    name: 'Teal',
    primary: '#0d9488',      // teal-600
    secondary: '#14b8a6',    // teal-500
    tertiary: '#2dd4bf',     // teal-400
    gradient: 'from-teal-700 via-teal-600 to-teal-500',
    text: 'text-teal-600',
    bg: 'bg-teal-600',
    border: 'border-teal-600',
    hover: 'hover:bg-teal-700',
    active: 'bg-teal-700',
  },

  sky: {
    name: 'Sky',
    primary: '#0284c7',      // sky-600
    secondary: '#0ea5e9',    // sky-500
    tertiary: '#38bdf8',     // sky-400
    gradient: 'from-sky-700 via-sky-600 to-sky-500',
    text: 'text-sky-600',
    bg: 'bg-sky-600',
    border: 'border-sky-600',
    hover: 'hover:bg-sky-700',
    active: 'bg-sky-700',
  },

  fuchsia: {
    name: 'Fuchsia',
    primary: '#c026d3',      // fuchsia-600
    secondary: '#d946ef',    // fuchsia-500
    tertiary: '#e879f9',     // fuchsia-400
    gradient: 'from-fuchsia-700 via-fuchsia-600 to-fuchsia-500',
    text: 'text-fuchsia-600',
    bg: 'bg-fuchsia-600',
    border: 'border-fuchsia-600',
    hover: 'hover:bg-fuchsia-700',
    active: 'bg-fuchsia-700',
  },

  pink: {
    name: 'Pink',
    primary: '#db2777',      // pink-600
    secondary: '#ec4899',    // pink-500
    tertiary: '#f472b6',     // pink-400
    gradient: 'from-pink-700 via-pink-600 to-pink-500',
    text: 'text-pink-600',
    bg: 'bg-pink-600',
    border: 'border-pink-600',
    hover: 'hover:bg-pink-700',
    active: 'bg-pink-700',
  },

  rose: {
    name: 'Rose',
    primary: '#e11d48',      // rose-600
    secondary: '#f43f5e',    // rose-500
    tertiary: '#fb7185',     // rose-400
    gradient: 'from-rose-700 via-rose-600 to-rose-500',
    text: 'text-rose-600',
    bg: 'bg-rose-600',
    border: 'border-rose-600',
    hover: 'hover:bg-rose-700',
    active: 'bg-rose-700',
  },
};

/**
 * Domain to Spectrum Color Mapping
 * Maps each domain to its designated spectrum color
 * 19 Total Domains across 5 Pillars
 */
export const domainColors = {
  // Pillar 1: Strategy & Leadership (Red spectrum)
  corporate: spectrumColors.red,
  strategy: spectrumColors.darkRed,
  legal: spectrumColors.rose,
  risk: spectrumColors.red,
  esg: spectrumColors.orange,
  communications: spectrumColors.amber,

  // Pillar 2: Financial & Operational Backbone (Yellow/Green spectrum)
  finance: spectrumColors.yellow,
  operations: spectrumColors.lime,
  it: spectrumColors.emerald,
  analytics: spectrumColors.teal,

  // Pillar 3: Growth Engine (Cyan/Blue spectrum)
  sales: spectrumColors.cyan,
  marketing: spectrumColors.sky,
  partners: spectrumColors.blue,
  customersuccess: spectrumColors.indigo,
  customerexperience: spectrumColors.deepIndigo,

  // Pillar 4: Innovation & Product Delivery (Indigo/Purple spectrum)
  product: spectrumColors.purple,
  engineering: spectrumColors.violet,
  ai: spectrumColors.fuchsia,
  quality: spectrumColors.purple,

  // Pillar 5: People & Culture (Purple/Pink spectrum)
  hr: spectrumColors.pink,
  learning: spectrumColors.fuchsia,
  changemanagement: spectrumColors.rose,
};

/**
 * System View Colors
 * Colors for system-level views (not domain-specific)
 */
export const systemColors = {
  health: {
    name: 'Health',
    primary: '#16a34a',     // green-600
    gradient: 'from-green-600 via-green-500 to-emerald-500',
    active: 'bg-green-500',
    border: 'border-green-400',
  },
  commandCenter: {
    name: 'Command Center',
    primary: '#7c3aed',     // violet-600
    gradient: 'from-violet-600 via-violet-500 to-purple-500',
    active: 'bg-violet-500',
    border: 'border-violet-400',
  },
  analytics: {
    name: 'Enterprise Analytics',
    primary: '#ea580c',     // orange-600
    gradient: 'from-orange-600 via-orange-500 to-amber-500',
    active: 'bg-orange-500',
    border: 'border-orange-400',
  },
  gaps: {
    name: 'Gap Analyzer',
    primary: '#dc2626',     // red-600
    gradient: 'from-red-600 via-red-500 to-rose-500',
    active: 'bg-red-500',
    border: 'border-red-400',
  },
};

/**
 * Full Spectrum Gradient
 * The complete ROYGBIV gradient used for headers and branding
 */
export const fullSpectrumGradient = 'from-red-600 via-orange-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-600 via-indigo-600 via-purple-600 to-violet-600';

/**
 * Helper function to get color by domain ID
 */
export const getColorByDomain = (domainId) => {
  return domainColors[domainId] || spectrumColors.blue;
};

/**
 * Helper function to get system view color
 */
export const getSystemColor = (systemView) => {
  return systemColors[systemView] || systemColors.commandCenter;
};

export default {
  spectrumColors,
  domainColors,
  systemColors,
  fullSpectrumGradient,
  getColorByDomain,
  getSystemColor,
};
