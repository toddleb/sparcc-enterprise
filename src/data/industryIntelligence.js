/**
 * Industry Intelligence Database
 *
 * Comprehensive industry data, benchmarks, buyer personas, and competitive intelligence
 */

export const industryIntelligence = {
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    icon: 'Activity',
    totalMarketSize: 4300000000000, // $4.3T
    growthRate: 5.4,

    subVerticals: [
      {
        id: 'hospital-systems',
        name: 'Hospital Systems',
        marketSize: 1200000000000,
        avgDealSize: 850000,
        avgSalesCycle: 189,
        keyPlayers: ['HCA Healthcare', 'CommonSpirit', 'Ascension', 'Trinity Health'],
        growthRate: 4.2
      },
      {
        id: 'medical-devices',
        name: 'Medical Devices',
        marketSize: 450000000000,
        avgDealSize: 320000,
        avgSalesCycle: 156,
        keyPlayers: ['Medtronic', 'Abbott', 'Boston Scientific', 'Stryker'],
        growthRate: 5.8
      },
      {
        id: 'health-tech',
        name: 'Health Tech / Digital Health',
        marketSize: 280000000000,
        avgDealSize: 180000,
        avgSalesCycle: 98,
        keyPlayers: ['Epic', 'Cerner', 'Teladoc', 'Oscar Health'],
        growthRate: 15.3
      }
    ],

    buyerPersonas: [
      {
        title: 'CIO / VP IT',
        decisionPower: 'High',
        typicalConcerns: ['Integration with existing systems', 'Security & compliance', 'ROI timeline'],
        preferredChannels: ['Email', 'LinkedIn', 'Industry conferences'],
        avgMeetingsToClose: 8,
        bestApproach: 'Technical deep-dive with clear integration roadmap'
      },
      {
        title: 'CFO',
        decisionPower: 'Very High',
        typicalConcerns: ['Cost savings', 'Revenue impact', 'Implementation costs'],
        preferredChannels: ['Executive briefing', 'Peer referrals'],
        avgMeetingsToClose: 5,
        bestApproach: 'Financial modeling with conservative assumptions'
      },
      {
        title: 'Chief Medical Officer',
        decisionPower: 'High',
        typicalConcerns: ['Patient outcomes', 'Clinical workflow', 'Evidence-based results'],
        preferredChannels: ['Medical conferences', 'Peer-reviewed studies'],
        avgMeetingsToClose: 6,
        bestApproach: 'Clinical evidence and peer testimonials'
      }
    ],

    commonObjections: [
      {
        objection: 'We already have a solution in place',
        frequency: 'Very Common',
        bestResponse: 'Compare ROI and showcase integration capabilities'
      },
      {
        objection: 'HIPAA compliance concerns',
        frequency: 'Common',
        bestResponse: 'Provide compliance documentation and BAA templates upfront'
      },
      {
        objection: 'Budget allocated for next fiscal year',
        frequency: 'Common',
        bestResponse: 'Create pilot program with current year budget'
      }
    ],

    benchmarks: {
      avgWinRate: 28,
      topPerformerWinRate: 42,
      avgDealCycle: 147,
      fastestDealCycle: 67,
      avgCommission: 9.5,
      discountRange: { min: 5, max: 20 }
    },

    seasonality: [
      { quarter: 'Q1', activity: 'High', note: 'New budgets available' },
      { quarter: 'Q2', activity: 'Medium', note: 'Mid-year reviews' },
      { quarter: 'Q3', activity: 'Low', note: 'Summer slowdown' },
      { quarter: 'Q4', activity: 'Very High', note: 'Year-end budget flush' }
    ],

    competitiveIntel: [
      {
        competitor: 'Epic Systems',
        marketShare: 31,
        strengths: ['Market leader', 'Comprehensive platform', 'Integration depth'],
        weaknesses: ['Expensive', 'Long implementation', 'Rigid customization'],
        winningAgainst: 'Focus on faster deployment and lower TCO'
      },
      {
        competitor: 'Cerner',
        marketShare: 25,
        strengths: ['Large install base', 'Strong analytics'],
        weaknesses: ['User experience', 'Support quality'],
        winningAgainst: 'Emphasize UX and dedicated support'
      }
    ],

    successStories: [
      {
        company: 'Cleveland Clinic',
        dealSize: 1200000,
        cycle: 145,
        keyFactors: ['Existing relationship with CMIO', 'Strong ROI model', 'Phased implementation'],
        winningStrategy: 'Started with small pilot in one department, proved value, expanded system-wide'
      },
      {
        company: 'Mayo Clinic',
        dealSize: 890000,
        cycle: 98,
        keyFactors: ['Clinical evidence', 'Peer hospital references', 'Integration capabilities'],
        winningStrategy: 'Led with clinical outcomes data from peer institutions'
      }
    ]
  },

  financial_services: {
    id: 'financial_services',
    name: 'Financial Services',
    icon: 'DollarSign',
    totalMarketSize: 5100000000000,
    growthRate: 6.2,

    subVerticals: [
      {
        id: 'banking',
        name: 'Banking',
        marketSize: 2100000000000,
        avgDealSize: 650000,
        avgSalesCycle: 178,
        keyPlayers: ['JPMorgan Chase', 'Bank of America', 'Wells Fargo', 'Citigroup'],
        growthRate: 4.8
      },
      {
        id: 'fintech',
        name: 'Fintech',
        marketSize: 310000000000,
        avgDealSize: 420000,
        avgSalesCycle: 112,
        keyPlayers: ['Stripe', 'Square', 'PayPal', 'Adyen'],
        growthRate: 23.4
      },
      {
        id: 'insurance',
        name: 'Insurance',
        marketSize: 1300000000000,
        avgDealSize: 580000,
        avgSalesCycle: 156,
        keyPlayers: ['Berkshire Hathaway', 'UnitedHealth', 'MetLife', 'Prudential'],
        growthRate: 5.1
      }
    ],

    buyerPersonas: [
      {
        title: 'CISO',
        decisionPower: 'Very High',
        typicalConcerns: ['Security', 'Compliance', 'Risk management'],
        preferredChannels: ['Security conferences', 'Analyst reports'],
        avgMeetingsToClose: 9,
        bestApproach: 'Security-first with third-party audits'
      },
      {
        title: 'Head of Digital',
        decisionPower: 'High',
        typicalConcerns: ['Customer experience', 'Time to market', 'Scalability'],
        preferredChannels: ['Industry events', 'Peer networks'],
        avgMeetingsToClose: 7,
        bestApproach: 'Focus on competitive advantage and speed'
      }
    ],

    benchmarks: {
      avgWinRate: 31,
      topPerformerWinRate: 48,
      avgDealCycle: 134,
      fastestDealCycle: 78,
      avgCommission: 11.2,
      discountRange: { min: 8, max: 25 }
    },

    commonObjections: [
      {
        objection: 'Regulatory approval required',
        frequency: 'Very Common',
        bestResponse: 'Provide compliance documentation and regulatory roadmap'
      },
      {
        objection: 'Legacy system integration complexity',
        frequency: 'Common',
        bestResponse: 'Showcase API flexibility and migration support'
      }
    ]
  },

  manufacturing: {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'Settings',
    totalMarketSize: 6200000000000,
    growthRate: 3.8,

    subVerticals: [
      {
        id: 'automotive',
        name: 'Automotive',
        marketSize: 2800000000000,
        avgDealSize: 920000,
        avgSalesCycle: 198,
        keyPlayers: ['GM', 'Ford', 'Tesla', 'Toyota'],
        growthRate: 4.2
      },
      {
        id: 'aerospace',
        name: 'Aerospace & Defense',
        marketSize: 1500000000000,
        avgDealSize: 1500000,
        avgSalesCycle: 245,
        keyPlayers: ['Boeing', 'Lockheed Martin', 'Raytheon', 'Northrop Grumman'],
        growthRate: 3.1
      }
    ],

    buyerPersonas: [
      {
        title: 'VP Operations',
        decisionPower: 'High',
        typicalConcerns: ['Production efficiency', 'Quality control', 'Downtime reduction'],
        preferredChannels: ['Trade shows', 'Peer referrals'],
        avgMeetingsToClose: 8,
        bestApproach: 'ROI focused with production metrics'
      },
      {
        title: 'Plant Manager',
        decisionPower: 'Medium',
        typicalConcerns: ['Ease of implementation', 'Training requirements', 'Support'],
        preferredChannels: ['On-site demos', 'Industry publications'],
        avgMeetingsToClose: 6,
        bestApproach: 'Hands-on demo with clear training plan'
      }
    ],

    benchmarks: {
      avgWinRate: 26,
      topPerformerWinRate: 39,
      avgDealCycle: 167,
      fastestDealCycle: 89,
      avgCommission: 8.5,
      discountRange: { min: 10, max: 30 }
    }
  },

  retail: {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: 'ShoppingCart',
    totalMarketSize: 5800000000000,
    growthRate: 8.4,

    subVerticals: [
      {
        id: 'ecommerce',
        name: 'E-commerce',
        marketSize: 1200000000000,
        avgDealSize: 280000,
        avgSalesCycle: 89,
        keyPlayers: ['Amazon', 'Shopify', 'Walmart.com', 'Target.com'],
        growthRate: 16.3
      },
      {
        id: 'omnichannel',
        name: 'Omnichannel Retail',
        marketSize: 2400000000000,
        avgDealSize: 450000,
        avgSalesCycle: 112,
        keyPlayers: ['Walmart', 'Target', 'Home Depot', 'Best Buy'],
        growthRate: 6.7
      }
    ],

    buyerPersonas: [
      {
        title: 'CMO',
        decisionPower: 'High',
        typicalConcerns: ['Customer acquisition cost', 'Conversion rates', 'Brand consistency'],
        preferredChannels: ['Marketing conferences', 'Case studies'],
        avgMeetingsToClose: 5,
        bestApproach: 'Data-driven with clear CAC/LTV metrics'
      },
      {
        title: 'VP E-commerce',
        decisionPower: 'High',
        typicalConcerns: ['Cart abandonment', 'Personalization', 'Mobile experience'],
        preferredChannels: ['E-commerce events', 'LinkedIn'],
        avgMeetingsToClose: 6,
        bestApproach: 'Focus on conversion optimization and UX'
      }
    ],

    benchmarks: {
      avgWinRate: 34,
      topPerformerWinRate: 51,
      avgDealCycle: 98,
      fastestDealCycle: 54,
      avgCommission: 10.8,
      discountRange: { min: 5, max: 20 }
    }
  },

  technology: {
    id: 'technology',
    name: 'Technology & SaaS',
    icon: 'Code',
    totalMarketSize: 1200000000000,
    growthRate: 18.2,

    subVerticals: [
      {
        id: 'saas',
        name: 'SaaS',
        marketSize: 450000000000,
        avgDealSize: 180000,
        avgSalesCycle: 67,
        keyPlayers: ['Salesforce', 'Microsoft', 'Adobe', 'ServiceNow'],
        growthRate: 21.4
      },
      {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        marketSize: 210000000000,
        avgDealSize: 320000,
        avgSalesCycle: 98,
        keyPlayers: ['Palo Alto', 'CrowdStrike', 'Fortinet', 'Cisco'],
        growthRate: 12.8
      }
    ],

    buyerPersonas: [
      {
        title: 'CTO',
        decisionPower: 'Very High',
        typicalConcerns: ['Technical architecture', 'Scalability', 'API quality'],
        preferredChannels: ['GitHub', 'Technical blogs', 'Developer conferences'],
        avgMeetingsToClose: 6,
        bestApproach: 'Technical deep-dive with hands-on POC'
      }
    ],

    benchmarks: {
      avgWinRate: 38,
      topPerformerWinRate: 58,
      avgDealCycle: 76,
      fastestDealCycle: 34,
      avgCommission: 12.5,
      discountRange: { min: 10, max: 35 }
    }
  }
};

// Helper functions
export const getIndustryData = (industryId) => {
  return industryIntelligence[industryId] || null;
};

export const getAllIndustries = () => {
  return Object.values(industryIntelligence);
};

export const getIndustryBenchmarks = (industryId) => {
  const industry = industryIntelligence[industryId];
  return industry?.benchmarks || null;
};

export const getBuyerPersonas = (industryId) => {
  const industry = industryIntelligence[industryId];
  return industry?.buyerPersonas || [];
};

export const getCompetitiveIntel = (industryId) => {
  const industry = industryIntelligence[industryId];
  return industry?.competitiveIntel || [];
};

export const getSuccessStories = (industryId) => {
  const industry = industryIntelligence[industryId];
  return industry?.successStories || [];
};

export default industryIntelligence;
