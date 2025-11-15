/**
 * Company Intelligence Database
 *
 * Detailed company profiles with tech stack, decision makers, buying signals, and competitive positioning
 */

export const companyProfiles = {
  'cleveland-clinic': {
    id: 'cleveland-clinic',
    name: 'Cleveland Clinic',
    industry: 'Healthcare',
    subVertical: 'Hospital Systems',

    firmographics: {
      revenue: 11500000000,
      employees: 67000,
      locations: 19,
      headquarters: 'Cleveland, OH',
      founded: 1921,
      type: 'Non-profit',
      website: 'https://my.clevelandclinic.org'
    },

    techStack: {
      crm: ['Salesforce Health Cloud'],
      ehr: ['Epic Systems'],
      analytics: ['Tableau', 'Power BI'],
      collaboration: ['Microsoft Teams', 'Slack'],
      cloud: ['AWS', 'Azure'],
      security: ['Palo Alto Networks', 'CrowdStrike']
    },

    decisionMakers: [
      {
        name: 'Dr. Tom Mihaljevic',
        title: 'CEO & President',
        linkedIn: 'https://linkedin.com/in/...',
        tenure: '7 years',
        background: 'Cardiac surgeon, strong clinical focus',
        buyingInfluence: 'Final approval',
        reachability: 'Low - executive assistant gatekeeper'
      },
      {
        name: 'Ed Marx',
        title: 'CIO',
        linkedIn: 'https://linkedin.com/in/...',
        tenure: '5 years',
        background: 'Healthcare IT veteran, innovation focused',
        buyingInfluence: 'High - IT decisions',
        reachability: 'Medium - active on LinkedIn',
        interests: ['Digital transformation', 'AI in healthcare', 'Patient experience']
      },
      {
        name: 'Dr. Steven Gordon',
        title: 'Chief Medical Officer',
        linkedIn: 'https://linkedin.com/in/...',
        tenure: '3 years',
        background: 'Infectious disease specialist',
        buyingInfluence: 'High - clinical solutions',
        reachability: 'Low - clinical duties'
      }
    ],

    buyingSignals: [
      {
        signal: 'Job posting for "Digital Health Innovation Lead"',
        date: '2025-10-15',
        strength: 'Strong',
        implication: 'Expanding digital health initiatives'
      },
      {
        signal: 'Announced $100M investment in AI research',
        date: '2025-09-20',
        strength: 'Very Strong',
        implication: 'Budget available for AI/ML solutions'
      },
      {
        signal: 'CIO speaking at Healthcare IT conference',
        date: '2025-11-01',
        strength: 'Medium',
        implication: 'Actively researching new solutions'
      }
    ],

    recentInitiatives: [
      {
        name: 'AI-Powered Diagnosis Platform',
        budget: 45000000,
        timeline: '2025-2027',
        stakeholders: ['CIO', 'CMO', 'VP Innovation'],
        status: 'Planning'
      },
      {
        name: 'Patient Experience Modernization',
        budget: 28000000,
        timeline: '2025-2026',
        stakeholders: ['CIO', 'Chief Patient Experience Officer'],
        status: 'In Progress'
      }
    ],

    competitors: [
      'Mayo Clinic',
      'Johns Hopkins',
      'Massachusetts General Hospital',
      'UCSF Medical Center'
    ],

    strategicPriorities: [
      'Digital patient experience',
      'Clinical outcomes improvement',
      'Operational efficiency',
      'Research innovation',
      'Caregiver satisfaction'
    ],

    budgetCycle: {
      fiscalYearStart: 'January',
      planningStarts: 'August',
      budgetLock: 'November',
      bestTimeToSell: 'Q4 (budget flush) or Q1 (new budget)',
      avgProcurementTime: '4-6 months'
    },

    procurementProcess: {
      steps: [
        'Initial vendor meeting',
        'Technical evaluation',
        'Security review',
        'Clinical validation',
        'Legal review',
        'Budget approval',
        'Contract negotiation',
        'Final approval'
      ],
      avgDuration: 145,
      keyGates: ['Security clearance', 'Clinical validation', 'CFO approval']
    },

    painPoints: [
      {
        pain: 'Siloed data across departments',
        severity: 'High',
        budget: 'Allocated',
        champion: 'CIO'
      },
      {
        pain: 'Patient wait times',
        severity: 'Medium',
        budget: 'Under review',
        champion: 'Chief Patient Experience Officer'
      },
      {
        pain: 'Staff burnout and retention',
        severity: 'High',
        budget: 'Approved',
        champion: 'CHRO'
      }
    ],

    relationshipMap: {
      existingVendors: [
        { vendor: 'Epic Systems', relationship: 'Strategic', strength: 'Very Strong' },
        { vendor: 'Salesforce', relationship: 'Partner', strength: 'Strong' },
        { vendor: 'AWS', relationship: 'Infrastructure', strength: 'Strong' }
      ],
      pastRFPs: [
        { topic: 'Telehealth platform', date: '2024-08', winner: 'Teladoc' },
        { topic: 'AI radiology', date: '2024-05', winner: 'Internal build' }
      ]
    },

    culturalNotes: [
      'Very research-oriented, need clinical evidence',
      'Conservative with new technology, prefer proven solutions',
      'Strong preference for local Cleveland vendors',
      'Clinical staff has significant influence',
      'Non-profit mindset - ROI must be clear'
    ],

    bestApproach: {
      entryPoint: 'CIO or VP Innovation',
      messaging: 'Focus on patient outcomes and clinical evidence',
      referenceCustomers: ['Mayo Clinic', 'Johns Hopkins'],
      timing: 'Q4 or early Q1',
      differentiators: ['Clinical validation', 'Integration with Epic', 'Local support'],
      redFlags: ['Unproven technology', 'No healthcare experience', 'Complex pricing']
    },

    competitiveWins: [
      {
        solution: 'AI-powered scheduling',
        wonAgainst: 'Internal build',
        winningFactors: ['Faster time to value', 'Proven at peer institutions', 'Strong Epic integration']
      }
    ],

    lostDeals: [
      {
        solution: 'Analytics platform',
        lostTo: 'Tableau',
        lossReasons: ['Better Epic integration', 'Stronger healthcare focus', 'Reference from Mayo']
      }
    ]
  },

  'acme-financial': {
    id: 'acme-financial',
    name: 'Acme Financial Services',
    industry: 'Financial Services',
    subVertical: 'Banking',

    firmographics: {
      revenue: 8200000000,
      employees: 12000,
      locations: 45,
      headquarters: 'New York, NY',
      founded: 1998,
      type: 'Public',
      ticker: 'ACME',
      website: 'https://acmefinancial.com'
    },

    techStack: {
      crm: ['Salesforce Financial Services Cloud'],
      core_banking: ['Temenos', 'FIS'],
      analytics: ['Snowflake', 'Looker'],
      security: ['Palo Alto', 'Okta', 'CrowdStrike'],
      cloud: ['Azure', 'GCP'],
      collaboration: ['Microsoft Teams']
    },

    decisionMakers: [
      {
        name: 'Jennifer Martinez',
        title: 'CISO',
        tenure: '4 years',
        background: 'Former FBI cybersecurity, extremely security-focused',
        buyingInfluence: 'Very High - veto power on security',
        reachability: 'Low',
        interests: ['Zero trust', 'Threat intelligence', 'Compliance automation']
      },
      {
        name: 'Michael Chen',
        title: 'CTO',
        tenure: '6 years',
        background: 'Fintech startup veteran, innovation driver',
        buyingInfluence: 'High - technology decisions',
        reachability: 'Medium - active at conferences',
        interests: ['Cloud-native', 'API-first', 'Developer experience']
      },
      {
        name: 'Sarah Williams',
        title: 'Head of Digital Banking',
        tenure: '2 years',
        background: 'Ex-Goldman Sachs, customer experience focused',
        buyingInfluence: 'Medium-High - digital initiatives',
        reachability: 'High - networking events',
        interests: ['Mobile banking', 'UX', 'Customer retention']
      }
    ],

    buyingSignals: [
      {
        signal: 'Press release: $50M digital transformation investment',
        date: '2025-10-01',
        strength: 'Very Strong',
        implication: 'Major budget for digital initiatives'
      },
      {
        signal: 'Multiple job postings for cloud engineers',
        date: '2025-10-20',
        strength: 'Medium',
        implication: 'Scaling cloud infrastructure'
      }
    ],

    strategicPriorities: [
      'Digital banking transformation',
      'Cybersecurity resilience',
      'Customer experience modernization',
      'Cloud migration',
      'Regulatory compliance automation'
    ],

    budgetCycle: {
      fiscalYearStart: 'January',
      planningStarts: 'July',
      budgetLock: 'October',
      bestTimeToSell: 'Q3-Q4',
      avgProcurementTime: '3-5 months'
    },

    painPoints: [
      {
        pain: 'Legacy system modernization',
        severity: 'Very High',
        budget: 'Allocated ($50M)',
        champion: 'CTO'
      },
      {
        pain: 'Mobile app user experience',
        severity: 'High',
        budget: 'Approved',
        champion: 'Head of Digital'
      },
      {
        pain: 'Cybersecurity threats',
        severity: 'Critical',
        budget: 'Ongoing',
        champion: 'CISO'
      }
    ],

    culturalNotes: [
      'Security is paramount - expect rigorous security review',
      'Risk-averse culture due to regulatory environment',
      'Fast decision-making once security approved',
      'Prefer vendors with financial services experience',
      'Strong preference for enterprise-grade solutions'
    ],

    bestApproach: {
      entryPoint: 'Head of Digital or CTO',
      messaging: 'Security-first with customer experience benefits',
      referenceCustomers: ['JPMorgan', 'Goldman Sachs'],
      timing: 'Q3-Q4 budget cycle',
      differentiators: ['SOC2/PCI compliance', 'Financial services expertise', 'Security track record'],
      redFlags: ['Security concerns', 'No financial services customers', 'Unclear compliance']
    }
  },

  'target-corp': {
    id: 'target-corp',
    name: 'Target Corporation',
    industry: 'Retail',
    subVertical: 'Omnichannel Retail',

    firmographics: {
      revenue: 106000000000,
      employees: 440000,
      locations: 1948,
      headquarters: 'Minneapolis, MN',
      founded: 1902,
      type: 'Public',
      ticker: 'TGT',
      website: 'https://target.com'
    },

    techStack: {
      ecommerce: ['Custom platform', 'Shopify Plus'],
      analytics: ['Google Analytics', 'Adobe Analytics'],
      cloud: ['Google Cloud Platform'],
      crm: ['Salesforce'],
      collaboration: ['Slack', 'Google Workspace']
    },

    decisionMakers: [
      {
        name: 'Brett Craig',
        title: 'Chief Information Officer',
        tenure: '3 years',
        background: 'Retail technology veteran',
        buyingInfluence: 'Very High',
        reachability: 'Low'
      },
      {
        name: 'Cara Sylvester',
        title: 'EVP Chief Stores Officer',
        tenure: '8 years',
        background: 'Operations expert',
        buyingInfluence: 'High - store operations',
        reachability: 'Very Low'
      }
    ],

    strategicPriorities: [
      'Omnichannel experience',
      'Same-day delivery',
      'Inventory optimization',
      'Personalization',
      'Store modernization'
    ],

    budgetCycle: {
      fiscalYearStart: 'February',
      planningStarts: 'August',
      budgetLock: 'November',
      bestTimeToSell: 'Q4 or Q1',
      avgProcurementTime: '6-9 months'
    },

    painPoints: [
      {
        pain: 'Inventory accuracy across channels',
        severity: 'High',
        budget: 'Allocated',
        champion: 'CIO'
      },
      {
        pain: 'Customer personalization at scale',
        severity: 'Medium-High',
        budget: 'Under review',
        champion: 'CMO'
      }
    ],

    culturalNotes: [
      'Very data-driven decision making',
      'Long procurement cycles',
      'Strong legal team - expect heavy contract negotiation',
      'Prefer proven solutions at scale',
      'Customer experience is paramount'
    ],

    bestApproach: {
      entryPoint: 'VP level in relevant function',
      messaging: 'Scale, reliability, and customer experience',
      referenceCustomers: ['Walmart', 'Home Depot', 'Best Buy'],
      timing: 'Q4 budget planning',
      differentiators: ['Proven at scale', 'Retail expertise', 'Strong SLAs'],
      redFlags: ['Unproven scalability', 'No enterprise retail customers']
    }
  }
};

export const getCompanyProfile = (companyId) => {
  return companyProfiles[companyId] || null;
};

export const getAllCompanies = () => {
  return Object.values(companyProfiles);
};

export const getDecisionMakers = (companyId) => {
  const company = companyProfiles[companyId];
  return company?.decisionMakers || [];
};

export const getBuyingSignals = (companyId) => {
  const company = companyProfiles[companyId];
  return company?.buyingSignals || [];
};

export const getTechStack = (companyId) => {
  const company = companyProfiles[companyId];
  return company?.techStack || {};
};

export const searchCompanies = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return Object.values(companyProfiles).filter(company =>
    company.name.toLowerCase().includes(lowercaseQuery) ||
    company.industry.toLowerCase().includes(lowercaseQuery)
  );
};

export default companyProfiles;
