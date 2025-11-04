/**
 * SPARCC Enterprise Pillar System
 *
 * Defines the 5 strategic pillars that organize all enterprise domains.
 * Each pillar represents a key area of business capability and strategic focus.
 */

export const pillarRegistry = {
  strategyLeadership: {
    id: 'strategyLeadership',
    name: 'Strategy & Leadership',
    emoji: '🏛️',
    icon: 'Target',
    shortName: 'Leadership',
    description: 'Direction & Oversight - Set vision, allocate capital, and manage enterprise risk',
    color: 'red',
    gradient: 'from-red-600 via-orange-600 to-amber-600',
    domains: [
      'corporate',
      'strategy',
      'legal',
      'risk',
      'esg',
      'communications'
    ],
    purpose: 'Set vision, allocate capital, and manage enterprise risk',
    kpis: [
      { label: 'Strategic Initiatives', value: '24', trend: 'up' },
      { label: 'Risk Score', value: '87/100', trend: 'stable' },
      { label: 'Compliance %', value: '98%', trend: 'up' }
    ]
  },

  financialOperational: {
    id: 'financialOperational',
    name: 'Financial & Operational Backbone',
    emoji: '💰',
    icon: 'DollarSign',
    shortName: 'Operations',
    description: 'Enablement & Control - Maintain financial integrity, optimize resources, ensure efficient operations',
    color: 'yellow',
    gradient: 'from-yellow-600 via-green-600 to-emerald-600',
    domains: [
      'finance',
      'operations',
      'it',
      'analytics'
    ],
    purpose: 'Maintain financial integrity, optimize resources, and ensure efficient operations',
    kpis: [
      { label: 'Operating Margin', value: '34%', trend: 'up' },
      { label: 'System Uptime', value: '99.9%', trend: 'stable' },
      { label: 'Cost Efficiency', value: '92/100', trend: 'up' }
    ]
  },

  growthEngine: {
    id: 'growthEngine',
    name: 'Growth Engine',
    emoji: '🚀',
    icon: 'TrendingUp',
    shortName: 'Growth',
    description: 'Revenue & Market Expansion - Drive top-line growth through market engagement and commercial execution',
    color: 'cyan',
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    domains: [
      'sales',
      'marketing',
      'partners',
      'customersuccess',
      'customerexperience'
    ],
    purpose: 'Drive top-line growth through market engagement and commercial execution',
    kpis: [
      { label: 'Revenue Growth', value: '+42%', trend: 'up' },
      { label: 'Customer NPS', value: '72', trend: 'up' },
      { label: 'Pipeline', value: '$24M', trend: 'up' }
    ]
  },

  innovation: {
    id: 'innovation',
    name: 'Innovation & Product Delivery',
    emoji: '🧬',
    icon: 'Zap',
    shortName: 'Innovation',
    description: 'Value Creation - Build, deliver, and evolve the core products or services',
    color: 'indigo',
    gradient: 'from-indigo-600 via-purple-600 to-violet-600',
    domains: [
      'product',
      'engineering',
      'ai',
      'quality'
    ],
    purpose: 'Build, deliver, and evolve the core products or services',
    kpis: [
      { label: 'Release Velocity', value: '2.4/wk', trend: 'up' },
      { label: 'Product NPS', value: '68', trend: 'up' },
      { label: 'Innovation Index', value: '84/100', trend: 'stable' }
    ]
  },

  peopleCulture: {
    id: 'peopleCulture',
    name: 'People & Culture',
    emoji: '👥',
    icon: 'Users',
    shortName: 'People',
    description: 'Capability & Engagement - Attract, develop, and retain talent aligned with enterprise strategy',
    color: 'purple',
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
    domains: [
      'hr',
      'learning',
      'changemanagement'
    ],
    purpose: 'Attract, develop, and retain talent aligned with enterprise strategy',
    kpis: [
      { label: 'Employee NPS', value: '76', trend: 'up' },
      { label: 'Retention', value: '94%', trend: 'stable' },
      { label: 'Culture Score', value: '88/100', trend: 'up' }
    ]
  }
};

/**
 * Get pillar by ID
 */
export const getPillarById = (pillarId) => {
  return pillarRegistry[pillarId];
};

/**
 * Get pillar by domain ID
 */
export const getPillarByDomain = (domainId) => {
  return Object.values(pillarRegistry).find(pillar =>
    pillar.domains.includes(domainId)
  );
};

/**
 * Get all domains for a pillar
 */
export const getDomainsByPillar = (pillarId) => {
  const pillar = pillarRegistry[pillarId];
  return pillar ? pillar.domains : [];
};

/**
 * Check if domain belongs to pillar
 */
export const isDomainInPillar = (domainId, pillarId) => {
  const pillar = pillarRegistry[pillarId];
  return pillar ? pillar.domains.includes(domainId) : false;
};

export default pillarRegistry;
