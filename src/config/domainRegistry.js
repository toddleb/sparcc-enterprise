/**
 * SPARCC Enterprise Domain Registry
 *
 * This file defines all domains, layers, and modules across the enterprise.
 * Each domain follows the 5-layer architecture:
 * 1. Strategy Layer - Vision, targets, KPIs
 * 2. Planning Layer - Operational design and resource allocation
 * 3. Execution Layer - Day-to-day operations and workflows
 * 4. Performance Layer - Measurement and analytics
 * 5. Insight & Improvement Layer - Predictive analytics and optimization
 */

export const domainRegistry = {
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    icon: 'Building2',
    color: 'red',
    gradient: 'from-red-600 via-red-500 to-orange-600',
    description: 'Strategic direction, governance, and enterprise-wide initiatives',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Corporate Strategy',
            description: 'Vision, growth levers, portfolio strategy, M&A, risk appetite',
            status: 'Ready',
            kpis: [
              { label: 'Strategic Initiatives', value: '12' },
              { label: 'Portfolio Companies', value: '4' },
              { label: 'Strategic Score', value: '87/100' }
            ]
          },
          {
            id: 2,
            name: 'M&A & Portfolio',
            description: 'Acquisition strategy and portfolio management',
            status: 'In Design',
            kpis: []
          },
          {
            id: 3,
            name: 'ESG & Sustainability',
            description: 'Environmental, social, and governance initiatives',
            status: 'Planned',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Strategic Roadmap',
            description: 'Corporate OKRs and strategic initiatives',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Policy Framework',
            description: 'Enterprise policies and standards',
            status: 'In Design',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Governance Processes',
            description: 'Board meetings, committee management',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Risk Controls',
            description: 'Enterprise risk management',
            status: 'Ready',
            kpis: []
          },
          {
            id: 3,
            name: 'Compliance Programs',
            description: 'Regulatory compliance tracking',
            status: 'In Design',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Board Reporting',
            description: 'Executive and board dashboards',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'KPI Dashboard',
            description: 'Enterprise-wide KPI tracking',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Continuous Improvement',
            description: 'Lessons learned and optimization',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

  analytics: {
    id: 'analytics',
    name: 'Enterprise Analytics',
    icon: 'BarChart',
    color: 'violet',
    gradient: 'from-orange-600 via-orange-500 to-amber-500',
    description: 'Cross-functional analytics and business intelligence',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Data & Analytics Strategy',
            description: 'Enterprise data strategy and governance',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Data Architecture',
            description: 'Data warehouse and lake design',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'KPI Framework',
            description: 'Enterprise KPI standardization',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'BI Dashboards',
            description: 'Business intelligence reporting',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Data Pipelines',
            description: 'ETL and data integration',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Data Quality',
            description: 'Data quality monitoring and remediation',
            status: 'Ready',
            kpis: [
              { label: 'Data Quality', value: '96%' },
              { label: 'Dashboards', value: '42' },
              { label: 'Reports', value: '187' }
            ]
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Predictive Modeling',
            description: 'AI/ML models and predictions',
            status: 'In Design',
            kpis: []
          },
          {
            id: 2,
            name: 'AI Governance',
            description: 'AI model governance and ethics',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

  finance: {
    id: 'finance',
    name: 'Finance',
    icon: 'DollarSign',
    color: 'blue',
    gradient: 'from-blue-600 via-blue-500 to-indigo-500',
    description: 'Financial planning, operations, and stewardship',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Financial Strategy',
            description: 'Capital allocation, investment policy, pricing governance',
            status: 'Ready',
            kpis: [
              { label: 'ROIC', value: '18%' },
              { label: 'Capital Allocated', value: '$25M' },
              { label: 'Investment Pipeline', value: '12' }
            ]
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Budgeting',
            description: 'Annual budget planning and allocation',
            status: 'Ready',
            integrations: ['sales.planning.9'],
            kpis: [
              { label: 'Budget', value: '$150M' },
              { label: 'Variance', value: '±3%' },
              { label: 'Scenarios', value: '4' }
            ]
          },
          {
            id: 2,
            name: 'Forecasting',
            description: 'Rolling forecasts and reforecasting',
            status: 'Ready',
            integrations: ['sales.planning.9'],
            kpis: [
              { label: 'Forecast Accuracy', value: '94%' },
              { label: 'Reforecast Cycle', value: 'Monthly' }
            ]
          },
          {
            id: 3,
            name: 'Revenue Planning',
            description: 'Revenue models and targets',
            status: 'Ready',
            integrations: ['sales.planning.9'],
            kpis: [
              { label: 'Revenue Target', value: '$58M' },
              { label: 'vs Sales Quota', value: '+$8M' }
            ]
          },
          {
            id: 4,
            name: 'Cost Modeling',
            description: 'Cost center structure and allocation',
            status: 'In Design',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Accounting Operations',
            description: 'General ledger, close process, journal entries',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Treasury Operations',
            description: 'Cash management, payments, banking',
            status: 'Ready',
            kpis: []
          },
          {
            id: 3,
            name: 'Billing & AR',
            description: 'Invoicing, collections, revenue recognition',
            status: 'Ready',
            integrations: ['sales.performance.2'],
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Financial Dashboards',
            description: 'P&L, balance sheet, cash flow reporting',
            status: 'Ready',
            kpis: [
              { label: 'Revenue', value: '$45M' },
              { label: 'EBITDA', value: '$12M' },
              { label: 'Margin', value: '27%' }
            ]
          },
          {
            id: 2,
            name: 'Variance Analysis',
            description: 'Budget vs actual, forecast accuracy',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Predictive Finance',
            description: 'Cash flow forecasting, scenario modeling',
            status: 'In Design',
            kpis: []
          },
          {
            id: 2,
            name: 'Risk Analytics',
            description: 'Financial risk scoring and alerts',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

  sales: {
    id: 'sales',
    name: 'Sales',
    icon: 'TrendingUp',
    color: 'green',
    gradient: 'from-green-600 via-green-500 to-emerald-500',
    description: 'Sales planning, execution, and performance management',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Market Segmentation',
            description: 'Define target markets, customer segments, and vertical focus',
            status: 'Ready',
            kpis: [
              { label: 'Segments', value: '4' },
              { label: 'Alignment', value: '100%' },
              { label: 'Coverage', value: '85%' }
            ]
          },
          {
            id: 2,
            name: 'Channel Strategy',
            description: 'Define partner tiers & MDF model',
            status: 'Planned',
            kpis: [
              { label: 'Channels', value: '0' },
              { label: 'Partners', value: '0' },
              { label: 'MDF', value: '$0' }
            ]
          },
          {
            id: 3,
            name: 'Value Proposition',
            description: 'Build persona-level messaging and positioning',
            status: 'Planned',
            kpis: [
              { label: 'Personas', value: '0' },
              { label: 'Messages', value: '0' },
              { label: 'Tested', value: '0%' }
            ]
          },
          {
            id: 4,
            name: 'Route-to-Market Design',
            description: 'Validate hybrid go-to-market model',
            status: 'In Design',
            kpis: [
              { label: 'Routes', value: '2' },
              { label: 'Validated', value: '50%' },
              { label: 'Hybrid', value: 'Yes' }
            ]
          },
          {
            id: 5,
            name: 'Org & Role Alignment',
            description: 'Align coverage model with GTM strategy',
            status: 'In Design',
            kpis: [
              { label: 'Roles', value: '5' },
              { label: 'Aligned', value: '60%' },
              { label: 'Coverage', value: '85%' }
            ]
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Corporate Strategy',
            description: 'Strategic frameworks, vision & positioning, growth strategy',
            status: 'Ready',
            kpis: [
              { label: 'Frameworks', value: '4' },
              { label: 'Vision', value: '100%' },
              { label: 'Growth Plans', value: '2' }
            ]
          },
          {
            id: 2,
            name: 'Sales Strategy',
            description: 'GTM model, sales methodology, and sales cycle design',
            status: 'Ready',
            kpis: [
              { label: 'GTM Model', value: 'Direct' },
              { label: 'Methodology', value: 'ILAER' },
              { label: 'Cycle Days', value: '90' }
            ]
          },
          {
            id: 3,
            name: 'Role Library',
            description: 'Define sales roles, responsibilities, and career paths',
            status: 'In Design',
            kpis: [
              { label: 'Total Roles', value: '5' },
              { label: 'Defined', value: '3/5' },
              { label: 'Coverage', value: '60%' }
            ]
          },
          {
            id: 4,
            name: 'Job Design',
            description: 'Job levels, pay ranges, and career progression',
            status: 'Planned',
            kpis: [
              { label: 'Levels', value: '6' },
              { label: 'Pay Ranges', value: '0/6' },
              { label: 'Paths', value: '2' }
            ]
          },
          {
            id: 5,
            name: 'Pay Mix',
            description: 'Base vs variable compensation ratios by role',
            status: 'Planned',
            kpis: [
              { label: 'Roles', value: '0/5' },
              { label: 'Avg Mix', value: '0%' },
              { label: 'OTE', value: '$0K' }
            ]
          },
          {
            id: 6,
            name: 'Segmentation',
            description: 'Market segmentation hierarchy and rules',
            status: 'Ready',
            kpis: [
              { label: 'Segments', value: '4' },
              { label: 'Hierarchy', value: '2 lvl' },
              { label: 'Coverage', value: '85%' }
            ]
          },
          {
            id: 7,
            name: 'Territory Management',
            description: 'Territory design, assignment, and balance',
            status: 'In Design',
            kpis: [
              { label: 'Territories', value: '12' },
              { label: 'Balance', value: '92%' },
              { label: 'Overlap', value: '3%' }
            ]
          },
          {
            id: 8,
            name: 'Coverage Model',
            description: 'Rep-to-account ratios and capacity planning',
            status: 'Planned',
            kpis: [
              { label: 'Ratio', value: '1:50' },
              { label: 'Capacity', value: '87%' },
              { label: 'Load/Rep', value: '45' }
            ]
          },
          {
            id: 9,
            name: 'Quota Planning',
            description: 'Quota setting, allocation, and relief factors',
            status: 'Ready',
            integrations: ['finance.planning.1', 'finance.planning.3'],
            kpis: [
              { label: 'Total', value: '$12M' },
              { label: 'Relief', value: '15%' },
              { label: 'Attain', value: '94%' }
            ]
          },
          {
            id: 10,
            name: 'Talent Alignment',
            description: 'Headcount planning and role-to-person matching',
            status: 'In Design',
            kpis: [
              { label: 'Headcount', value: '45' },
              { label: 'Filled', value: '42/45' },
              { label: 'Match', value: '88%' }
            ]
          },
          {
            id: 11,
            name: 'Comp Component Design',
            description: 'Design individual comp components (commissions, bonuses, MBOs, SPIFFs)',
            status: 'Ready',
            kpis: [
              { label: 'Components', value: '4' },
              { label: 'Avg Target', value: '$50K' },
              { label: 'Active', value: '3' }
            ]
          },
          {
            id: 12,
            name: 'Comp Plan Structure',
            description: 'Assemble components into complete compensation plans',
            status: 'Ready',
            kpis: [
              { label: 'Plans', value: '4' },
              { label: 'Avg OTE', value: '$183K' },
              { label: 'Reps', value: '197' }
            ]
          },
          {
            id: 13,
            name: 'Governance',
            description: 'Policies, approval workflows, and compliance',
            status: 'Planned',
            kpis: [
              { label: 'Policies', value: '4' },
              { label: 'Approvals', value: '2 lvl' },
              { label: 'Compliance', value: '98%' }
            ]
          },
          {
            id: 14,
            name: 'Communications',
            description: 'Plan rollout, campaigns, and change management',
            status: 'Planned',
            kpis: [
              { label: 'Campaigns', value: '2' },
              { label: 'Templates', value: '5' },
              { label: 'Reach', value: '95%' }
            ]
          },
          {
            id: 15,
            name: 'Administration',
            description: 'System configuration and data quality',
            status: 'Ready',
            kpis: [
              { label: 'Systems', value: 'Active' },
              { label: 'Quality', value: '96%' },
              { label: 'Sync', value: '1h ago' }
            ]
          },
          {
            id: 16,
            name: 'Analytics',
            description: 'Reports, dashboards, and insights',
            status: 'Ready',
            kpis: [
              { label: 'Reports', value: '12' },
              { label: 'Dashboards', value: '5' },
              { label: 'Insights', value: '23' }
            ]
          },
          {
            id: 17,
            name: 'Data Management',
            description: 'Data sources, integration, and quality management',
            status: 'Ready',
            kpis: [
              { label: 'Tools', value: '8' },
              { label: 'Sources', value: '5' },
              { label: 'Quality', value: '98%' }
            ]
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Onboarding & Training',
            description: 'New hire onboarding programs by role tier',
            status: 'Planned',
            kpis: [
              { label: 'Programs', value: '0' },
              { label: 'Roles', value: '0/5' },
              { label: 'Completion', value: '0%' }
            ]
          },
          {
            id: 2,
            name: 'Playbooks',
            description: 'Sales playbooks per GTM motion',
            status: 'In Design',
            kpis: [
              { label: 'Playbooks', value: '2' },
              { label: 'GTM Motions', value: '3' },
              { label: 'Complete', value: '33%' }
            ]
          },
          {
            id: 3,
            name: 'Tool Enablement',
            description: 'CRM, SPM, and sales tool training',
            status: 'Planned',
            kpis: [
              { label: 'Tools', value: '0' },
              { label: 'Integrations', value: '0' },
              { label: 'Training', value: '0%' }
            ]
          },
          {
            id: 4,
            name: 'Coaching & Development',
            description: 'Manager enablement and coaching programs',
            status: 'In Design',
            kpis: [
              { label: 'Managers', value: '12' },
              { label: 'Certified', value: '4/12' },
              { label: 'Coverage', value: '33%' }
            ]
          },
          {
            id: 5,
            name: 'Performance Support',
            description: 'AI-powered performance support layer',
            status: 'Planned',
            kpis: [
              { label: 'AI Tools', value: '0' },
              { label: 'Support', value: '0%' },
              { label: 'Usage', value: '0%' }
            ]
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Credit Assignment',
            description: 'Deal credit and split rules',
            status: 'In Design',
            kpis: [
              { label: 'Rules', value: '12' },
              { label: 'Tested', value: '8/12' },
              { label: 'Disputes', value: '3' }
            ]
          },
          {
            id: 2,
            name: 'Calculation Engine',
            description: 'Comp calculation and processing',
            status: 'Ready',
            integrations: ['finance.execution.3'],
            kpis: [
              { label: 'Accuracy', value: '99.8%' },
              { label: 'Runtime', value: '2.3s' },
              { label: 'Validated', value: '100%' }
            ]
          },
          {
            id: 3,
            name: 'Workflow Automation',
            description: 'Approvals and disputes workflow',
            status: 'In Design',
            kpis: [
              { label: 'Workflows', value: '4' },
              { label: 'Automated', value: '50%' },
              { label: 'SLA', value: '2d' }
            ]
          },
          {
            id: 4,
            name: 'Data Integration',
            description: 'CRM, ERP, and data source feeds',
            status: 'Ready',
            kpis: [
              { label: 'Sources', value: '5' },
              { label: 'Validated', value: '100%' },
              { label: 'Sync', value: '1h' }
            ]
          },
          {
            id: 5,
            name: 'Governance & Controls',
            description: 'Audit trails and compliance controls',
            status: 'Planned',
            kpis: [
              { label: 'Controls', value: '0' },
              { label: 'Audit Logs', value: '0' },
              { label: 'Compliance', value: '0%' }
            ]
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Pipeline Management',
            description: 'Pipeline health, velocity, and conversion tracking',
            status: 'Ready',
            kpis: [
              { label: 'Pipeline', value: '$2.4M' },
              { label: 'Velocity', value: '45d' },
              { label: 'Conversion', value: '24%' }
            ]
          },
          {
            id: 2,
            name: 'Forecast Accuracy',
            description: 'Forecast models with predictive overlay',
            status: 'In Design',
            kpis: [
              { label: 'Accuracy', value: '72%' },
              { label: 'Predictive', value: '0%' },
              { label: 'Variance', value: '±15%' }
            ]
          },
          {
            id: 3,
            name: 'Deal Coaching',
            description: 'AI-powered deal coaching and insights',
            status: 'In Design',
            kpis: [
              { label: 'Coached', value: '45' },
              { label: 'Win Rate', value: '+12%' },
              { label: 'Integration', value: '50%' }
            ]
          },
          {
            id: 4,
            name: 'Productivity Analysis',
            description: 'Rep efficiency and productivity benchmarks',
            status: 'Planned',
            kpis: [
              { label: 'Index', value: '0' },
              { label: 'Benchmarks', value: '0' },
              { label: 'Coverage', value: '0%' }
            ]
          },
          {
            id: 5,
            name: 'Sales Process Optimization',
            description: 'Stage gates and process improvements',
            status: 'In Design',
            kpis: [
              { label: 'Stages', value: '5' },
              { label: 'Gates', value: '3' },
              { label: 'Complete', value: '60%' }
            ]
          }
        ]
      }
    }
  },

  marketing: {
    id: 'marketing',
    name: 'Marketing',
    icon: 'Megaphone',
    color: 'yellow',
    gradient: 'from-yellow-500 via-yellow-400 to-amber-400',
    description: 'Brand strategy, demand generation, and customer acquisition',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Brand Strategy',
            description: 'Brand positioning and market strategy',
            status: 'Ready',
            kpis: [
              { label: 'Brand Awareness', value: '67%' },
              { label: 'Market Share', value: '12%' }
            ]
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Campaign Planning',
            description: 'Marketing campaign strategy and calendar',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Content Calendar',
            description: 'Content planning and publishing schedule',
            status: 'In Design',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Campaign Execution',
            description: 'Running marketing campaigns',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Marketing ROI',
            description: 'Campaign performance and attribution',
            status: 'Ready',
            kpis: [
              { label: 'MQLs', value: '1,247' },
              { label: 'CAC', value: '$850' },
              { label: 'ROAS', value: '4.2x' }
            ]
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Predictive Lead Scoring',
            description: 'AI-powered lead quality prediction',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

  product: {
    id: 'product',
    name: 'Product',
    icon: 'Package',
    color: 'lime',
    gradient: 'from-lime-500 via-lime-400 to-green-400',
    description: 'Product strategy, roadmapping, and lifecycle management',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Product Strategy',
            description: 'Product vision and innovation themes',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Product Roadmap',
            description: 'Feature roadmap and prioritization',
            status: 'Ready',
            kpis: [
              { label: 'Features Planned', value: '24' },
              { label: 'Releases', value: '4/year' }
            ]
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Development',
            description: 'Product development and launches',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Feature Adoption',
            description: 'Product usage and adoption metrics',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Product-Market Fit',
            description: 'PMF analytics and insights',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

  customersuccess: {
    id: 'customersuccess',
    name: 'Customer Success',
    icon: 'Heart',
    color: 'red',
    gradient: 'from-cyan-500 via-cyan-400 to-sky-400',
    description: 'Customer retention, expansion, and advocacy',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Retention Strategy',
            description: 'Customer retention and expansion strategy',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Success Plan Design',
            description: 'Customer success playbooks',
            status: 'In Design',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Onboarding',
            description: 'Customer onboarding programs',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Support Operations',
            description: 'Customer support and ticket management',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Health Scoring',
            description: 'Customer health metrics and NPS',
            status: 'Ready',
            kpis: [
              { label: 'NPS', value: '72' },
              { label: 'Churn', value: '3.2%' },
              { label: 'Expansion', value: '18%' }
            ]
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Predictive Churn',
            description: 'AI-powered churn prediction',
            status: 'In Design',
            kpis: []
          }
        ]
      }
    }
  },

  hr: {
    id: 'hr',
    name: 'Human Resources',
    icon: 'Users',
    color: 'lime',
    gradient: 'from-indigo-600 via-indigo-500 to-purple-500',
    description: 'Talent strategy, workforce planning, and culture',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Talent Strategy',
            description: 'Workforce strategy and culture vision',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Workforce Planning',
            description: 'Headcount planning and org design',
            status: 'Ready',
            kpis: [
              { label: 'Headcount', value: '487' },
              { label: 'Open Roles', value: '23' }
            ]
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Talent Acquisition',
            description: 'Recruiting and hiring operations',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Learning & Development',
            description: 'Training programs and career development',
            status: 'In Design',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Performance Reviews',
            description: 'Performance management and reviews',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Predictive Attrition',
            description: 'Employee turnover prediction',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

  it: {
    id: 'it',
    name: 'Information Technology',
    icon: 'Server',
    color: 'slate',
    gradient: 'from-indigo-700 via-indigo-600 to-violet-600',
    description: 'IT infrastructure, applications, and cybersecurity',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'IT Strategy',
            description: 'Technology architecture and innovation roadmap',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'IT Portfolio Planning',
            description: 'System roadmap and project portfolio',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Infrastructure',
            description: 'Cloud infrastructure and data centers',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Application Management',
            description: 'Enterprise applications and integrations',
            status: 'Ready',
            kpis: []
          },
          {
            id: 3,
            name: 'Cybersecurity',
            description: 'Security operations and threat management',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'IT Operations',
            description: 'Uptime, SLA, and incident metrics',
            status: 'Ready',
            kpis: [
              { label: 'Uptime', value: '99.97%' },
              { label: 'Incidents', value: '12' },
              { label: 'MTTR', value: '2.4h' }
            ]
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'AIOps Analytics',
            description: 'Predictive IT operations and automation',
            status: 'In Design',
            kpis: []
          }
        ]
      }
    }
  },

  operations: {
    id: 'operations',
    name: 'Operations',
    icon: 'Cog',
    color: 'indigo',
    gradient: 'from-purple-600 via-purple-500 to-violet-500',
    description: 'Operational excellence and process optimization',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Operations Strategy',
            description: 'Operational excellence and efficiency targets',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Capacity Planning',
            description: 'Resource and capacity forecasting',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Process Management',
            description: 'Day-to-day operations and workflows',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Operational Metrics',
            description: 'Efficiency and quality metrics',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Process Mining',
            description: 'AI-powered process optimization',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

  legal: {
    id: 'legal',
    name: 'Legal & Compliance',
    icon: 'Scale',
    color: 'stone',
    gradient: 'from-violet-700 via-violet-600 to-purple-700',
    description: 'Legal risk management and regulatory compliance',
    layers: {
      strategy: {
        id: 'strategy',
        name: 'Strategy Layer',
        icon: 'Target',
        color: 'purple-500',
        modules: [
          {
            id: 1,
            name: 'Legal Risk Strategy',
            description: 'Legal risk appetite and compliance framework',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      planning: {
        id: 'planning',
        name: 'Planning Layer',
        icon: 'ClipboardList',
        color: 'blue-500',
        modules: [
          {
            id: 1,
            name: 'Regulatory Calendar',
            description: 'Compliance planning and deadlines',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      execution: {
        id: 'execution',
        name: 'Execution Layer',
        icon: 'Settings',
        color: 'cyan-500',
        modules: [
          {
            id: 1,
            name: 'Contract Management',
            description: 'Contract lifecycle and negotiations',
            status: 'Ready',
            kpis: []
          },
          {
            id: 2,
            name: 'Compliance Operations',
            description: 'Compliance monitoring and reporting',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      performance: {
        id: 'performance',
        name: 'Performance Layer',
        icon: 'TrendingUp',
        color: 'amber-500',
        modules: [
          {
            id: 1,
            name: 'Compliance Metrics',
            description: 'Policy adherence and audit results',
            status: 'Ready',
            kpis: []
          }
        ]
      },
      insights: {
        id: 'insights',
        name: 'Insight & Improvement Layer',
        icon: 'Zap',
        color: 'violet-500',
        aiEnabled: true,
        modules: [
          {
            id: 1,
            name: 'Risk Prediction',
            description: 'Predictive legal and compliance risk',
            status: 'Planned',
            kpis: []
          }
        ]
      }
    }
  },

};

// Helper function to get all modules across all domains
export const getAllModules = () => {
  const allModules = [];
  Object.values(domainRegistry).forEach(domain => {
    Object.values(domain.layers).forEach(layer => {
      layer.modules.forEach(module => {
        allModules.push({
          ...module,
          domainId: domain.id,
          domainName: domain.name,
          layerId: layer.id,
          layerName: layer.name
        });
      });
    });
  });
  return allModules;
};

// Helper function to get modules by domain and layer
export const getModulesByDomainAndLayer = (domainId, layerId) => {
  const domain = domainRegistry[domainId];
  if (!domain) return [];
  const layer = domain.layers[layerId];
  if (!layer) return [];
  return layer.modules;
};

// Helper function to count total modules
export const getModuleCount = () => {
  return getAllModules().length;
};

// Helper function to get module by path (domain.layer.moduleId)
export const getModule = (domainId, layerId, moduleId) => {
  const domain = domainRegistry[domainId];
  if (!domain) return null;
  const layer = domain.layers[layerId];
  if (!layer) return null;
  return layer.modules.find(m => m.id === moduleId) || null;
};
