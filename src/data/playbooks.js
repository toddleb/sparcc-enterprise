// Knowledge Base & Playbooks for LiquidSales
// Comprehensive repository of winning strategies, templates, and best practices

export const playbookCategories = [
  {
    id: 'door-opening',
    name: 'Door Opening Strategies',
    icon: 'target',
    description: 'Proven tactics for getting that critical first meeting',
    playbookCount: 12
  },
  {
    id: 'deal-closing',
    name: 'Deal Closing Playbooks',
    icon: 'trophy',
    description: 'Techniques for bringing deals across the finish line',
    playbookCount: 15
  },
  {
    id: 'negotiation',
    name: 'Negotiation Frameworks',
    icon: 'handshake',
    description: 'Advanced negotiation strategies and tactics',
    playbookCount: 8
  },
  {
    id: 'industry-specific',
    name: 'Industry-Specific Guides',
    icon: 'building',
    description: 'Tailored approaches for different verticals',
    playbookCount: 20
  },
  {
    id: 'objection-handling',
    name: 'Objection Handling',
    icon: 'shield',
    description: 'Responses to common objections and blockers',
    playbookCount: 25
  },
  {
    id: 'templates',
    name: 'Templates & Scripts',
    icon: 'file-text',
    description: 'Ready-to-use email templates, call scripts, proposals',
    playbookCount: 30
  }
];

export const featuredPlaybooks = [
  {
    id: 'pb-001',
    category: 'door-opening',
    title: 'The Multi-Touch Hospital System Entry Strategy',
    author: {
      name: 'Sarah Chen',
      sparccScore: 94,
      specialization: 'Healthcare'
    },
    rating: 4.9,
    usageCount: 234,
    successRate: 68, // % of reps who successfully used this
    difficulty: 'Advanced',
    timeToExecute: '2-4 weeks',
    idealFor: ['Healthcare', 'Enterprise', 'Complex Sales'],
    overview: 'A systematic approach to penetrating large hospital systems by building relationships across multiple departments simultaneously.',
    keyTakeaways: [
      'Identify 3-5 entry points across different departments',
      'Use clinical outcomes data to build credibility',
      'Leverage physician champions before approaching C-suite',
      'Time outreach around budget cycles (Q4 planning)'
    ],
    steps: [
      {
        step: 1,
        title: 'Research & Mapping',
        duration: '3-5 days',
        description: 'Map the organizational structure, identify key stakeholders, and research recent initiatives',
        actions: [
          'Review hospital's recent press releases and strategic plans',
          'Identify department heads in target areas (IT, Clinical, Finance)',
          'Research any recent quality/safety initiatives',
          'Check for mutual connections on LinkedIn'
        ]
      },
      {
        step: 2,
        title: 'Build Clinical Champion',
        duration: '1-2 weeks',
        description: 'Engage with a physician or clinical leader who can validate your solution',
        actions: [
          'Reach out to department medical director via warm intro',
          'Share relevant clinical outcomes data from peer institutions',
          'Offer to present at grand rounds or department meeting',
          'Get their input on how to position to administration'
        ]
      },
      {
        step: 3,
        title: 'Multi-Channel Outreach',
        duration: '1 week',
        description: 'Execute coordinated outreach to IT, operations, and finance simultaneously',
        actions: [
          'Email CIO referencing clinical champion support',
          'LinkedIn message to VP Operations with ROI summary',
          'Call CFO office to discuss budget and procurement process',
          'Send executive summary to all three stakeholders'
        ]
      },
      {
        step: 4,
        title: 'The Discovery Meeting',
        duration: '1-2 days',
        description: 'Conduct initial meeting with cross-functional team',
        actions: [
          'Request meeting with IT, clinical, and finance together',
          'Present clinical outcomes + financial impact',
          'Identify their current pain points and priorities',
          'Propose pilot program or phased approach'
        ]
      }
    ],
    templates: [
      {
        type: 'email',
        title: 'Clinical Champion Outreach Email',
        content: `Subject: Improving [Specific Outcome] at [Hospital Name]

Dr. [Last Name],

I'm reaching out because [Mutual Connection] suggested I connect with you regarding [Hospital Name]'s work on [Recent Initiative].

We've helped similar academic medical centers achieve [Specific Outcome]:
- [Hospital A]: 23% reduction in [Metric]
- [Hospital B]: $1.2M cost savings in first year
- [Hospital C]: Improved [Quality Metric] by 34%

Would you be open to a 15-minute call to explore whether our approach could support your goals?

Best regards,
[Your Name]`
      },
      {
        type: 'email',
        title: 'CIO Follow-up Email (with Clinical Support)',
        content: `Subject: [Clinical Champion Name] suggested we connect

[CIO Name],

Dr. [Clinical Champion] and I have been discussing how [Solution] could support [Hospital Name]'s [Initiative].

Based on our conversation, I believe there's potential to:
1. [Specific Clinical Benefit]
2. [Operational Efficiency Gain]
3. [Cost Reduction Opportunity]

I'd love to schedule 20 minutes with you and Dr. [Clinical Champion] to explore this further.

Available next week:
- Tuesday 2-4 PM
- Thursday 10 AM - 12 PM

Best regards,
[Your Name]`
      }
    ],
    resources: [
      'Hospital System Org Chart Template',
      'Healthcare ROI Calculator',
      'Clinical Outcomes Presentation Deck',
      'Budget Cycle Calendar for Top 100 Hospital Systems'
    ],
    testimonials: [
      {
        rep: 'Marcus Thompson',
        quote: 'Used this exact playbook to break into Cleveland Clinic. Got my first meeting in 3 weeks, deal closed in 4 months.',
        result: '$850K deal'
      },
      {
        rep: 'Jennifer Rodriguez',
        quote: 'The multi-touch approach is brilliant. Building the clinical champion first makes the C-suite conversations so much easier.',
        result: '3 hospital systems opened in Q1'
      }
    ],
    lastUpdated: '2025-01-15',
    tags: ['Healthcare', 'Enterprise', 'Door Opening', 'Multi-Threading', 'Hospital Systems']
  },
  {
    id: 'pb-002',
    category: 'deal-closing',
    title: 'The "Stuck Deal" Unsticker Framework',
    author: {
      name: 'Marcus Thompson',
      sparccScore: 88,
      specialization: 'Deal Closing'
    },
    rating: 4.8,
    usageCount: 312,
    successRate: 71,
    difficulty: 'Intermediate',
    timeToExecute: '1-3 weeks',
    idealFor: ['Stalled Deals', 'Long Sales Cycles', 'Enterprise'],
    overview: 'A diagnostic framework for identifying why deals stall and a proven 5-step process to get them moving again.',
    keyTakeaways: [
      'Most stalled deals lack clear next steps or internal champion',
      'Use "diagnostic call" to uncover real blockers',
      'Create urgency through competitive intel or deadline',
      'Offer to "unstick" by doing their internal selling for them'
    ],
    steps: [
      {
        step: 1,
        title: 'Diagnose the Real Issue',
        duration: '2-3 days',
        description: 'Understand why the deal actually stalled (not what they're telling you)',
        actions: [
          'Request "transparent conversation" with main contact',
          'Ask: "What would need to happen for you to move forward this quarter?"',
          'Identify if blocker is: budget, priority, internal politics, or lack of urgency',
          'Map out who is blocking and who is supporting'
        ]
      },
      {
        step: 2,
        title: 'Build/Rebuild Champion',
        duration: '3-5 days',
        description: 'Ensure you have someone internally who will sell for you when you're not in the room',
        actions: [
          'If champion weak: Equip them with internal selling tools',
          'If no champion: Identify who has most to gain from solution',
          'Create "champion enablement package" (slides, ROI calc, FAQ)',
          'Role-play their internal conversations with you'
        ]
      },
      {
        step: 3,
        title: 'Create Urgency Event',
        duration: '1 week',
        description: 'Manufacture a legitimate reason to decide now rather than later',
        actions: [
          'Limited-time pricing or implementation discount',
          'Highlight competitor activity in their space',
          'Tie to their business deadline (end of quarter, fiscal year)',
          'Offer early-adopter benefits or executive sponsor access'
        ]
      },
      {
        step: 4,
        title: 'The "Mutual Action Plan"',
        duration: '1 day',
        description: 'Co-create a detailed plan with specific dates and owners for each step',
        actions: [
          'Document every step from now to contract signature',
          'Assign owner and date to each action item',
          'Get verbal commit on timeline from decision maker',
          'Share as living document (Google Doc) for transparency'
        ]
      },
      {
        step: 5,
        title: 'Weekly Check-ins Until Close',
        duration: 'Ongoing',
        description: 'Stay close but not annoying - be helpful, not pushy',
        actions: [
          'Schedule standing 15-min call every Tuesday/Thursday',
          'Ask "How can I help move this forward?" each time',
          'Proactively send resources, answers, executive support',
          'Celebrate small wins publicly to build momentum'
        ]
      }
    ],
    commonPitfalls: [
      'Accepting "we're still evaluating" at face value - dig deeper',
      'Not having a true champion who will sell internally',
      'Pushing on deal without diagnosing real blocker first',
      'Being too passive - take control of the process'
    ],
    templates: [
      {
        type: 'email',
        title: 'The "Diagnostic Call" Request',
        content: `Subject: Quick question about [Company] timeline

[Name],

I haven't heard from you in a few weeks and want to make sure I'm being respectful of your time.

Can we schedule 15 minutes for me to understand:
1. Is this still a priority for [Company]?
2. What would need to happen to move forward this quarter?
3. Is there anything I can do to help?

I'd rather have a transparent conversation than keep following up if this isn't the right time.

Available this week?

[Your Name]`
      }
    ],
    resources: [
      'Mutual Action Plan Template',
      'Champion Enablement Slide Deck',
      'Deal Blocker Diagnostic Worksheet'
    ],
    lastUpdated: '2025-01-10',
    tags: ['Deal Closing', 'Stalled Deals', 'Enterprise', 'Negotiation']
  },
  {
    id: 'pb-003',
    category: 'objection-handling',
    title: 'The "We're Happy with Current Vendor" Response Framework',
    author: {
      name: 'Jennifer Rodriguez',
      sparccScore: 91,
      specialization: 'Account Expansion'
    },
    rating: 4.7,
    usageCount: 487,
    successRate: 64,
    difficulty: 'Beginner',
    timeToExecute: 'Immediate',
    idealFor: ['Cold Outreach', 'Prospecting', 'Competitive Displacement'],
    overview: 'A battle-tested script for handling the most common objection in B2B sales: "We're happy with our current solution."',
    keyTakeaways: [
      'Never badmouth the competitor directly',
      'Acknowledge they're likely satisfied, then pivot to "what if"',
      'Focus on what's changed in their business, not your product',
      'Ask for permission to be "plan B" or "stay in touch"'
    ],
    responses: [
      {
        scenario: 'Prospect says: "We're happy with [Competitor]"',
        response: `"That's great to hear - [Competitor] is a solid solution and I'm glad they're serving you well.

Quick question: If you could wave a magic wand and improve ONE thing about how you're currently handling [Process], what would it be?"

[Wait for answer]

"Interesting. That's actually the exact problem we've solved for companies who were previously happy with [Competitor] but realized they needed [Specific Capability].

Not saying you need to make a change, but would you be open to a 10-minute conversation about how [Company X] improved [Metric] by 30% after switching? At minimum, you'll learn something you can potentially apply with your current vendor."`,
        whyItWorks: 'Acknowledges their satisfaction, shows respect for competitor, then opens door by focusing on their unsolved problem rather than your product.'
      },
      {
        scenario: 'Prospect says: "We just signed a 3-year contract"',
        response: `"Totally understand - and I'm definitely not suggesting you break a contract.

But since you're locked in for 3 years, now is actually the perfect time for us to talk. No pressure, no timeline, just a chance to:
1. Understand what you wish you had negotiated differently
2. Show you what's possible when your contract comes up
3. Potentially become a backup option if things change

Would you be open to a low-pressure conversation in the next month or two? I promise I won't try to sell you anything - just want to earn the right to be on your radar when the time is right."`,
        whyItWorks: 'Removes all pressure, positions you as long-term resource rather than pushy salesperson, plants seed for future.'
      },
      {
        scenario: 'Prospect says: "We built something in-house"',
        response: `"That's actually really smart - you had specific needs and took control of the solution.

Out of curiosity, how much engineering time are you spending maintaining and updating it vs. building new features that drive revenue?

[Wait for answer]

Most teams we work with initially built in-house but eventually realized the opportunity cost wasn't worth it. Once they switched to our solution, they freed up 40% of engineering capacity to work on core product.

Not saying that's your situation, but would you be open to a 15-minute conversation about how [Similar Company] made that transition? Might give you some ideas even if you stay in-house."`,
        whyItWorks: 'Validates their decision, then highlights hidden cost (engineering time), offers value with no commitment.'
      }
    ],
    doNotSay: [
      '"Are you SURE you're happy?" (dismissive)',
      '"What if I could save you 50%?" (price-focused too early)',
      '"Most of our customers switched from [Competitor]" (sounds desperate)',
      '"Your current vendor is going out of business" (unless you have proof)'
    ],
    followUpStrategy: {
      immediate: 'Thank them for their time, ask permission to send one relevant case study',
      week1: 'Send case study of competitor customer who switched, with specific metrics',
      month3: 'Share industry report or insight (not about your product)',
      month6: 'Check in: "Is [Current Vendor] still working well? Anything changed?"',
      annually: 'Ask about contract renewal timeline and whether they'd consider RFP process'
    },
    lastUpdated: '2025-01-12',
    tags: ['Objection Handling', 'Cold Outreach', 'Competitive', 'Prospecting']
  },
  {
    id: 'pb-004',
    category: 'templates',
    title: 'The "Breakup Email" That Actually Gets Responses',
    author: {
      name: 'David Kim',
      sparccScore: 86,
      specialization: 'Outbound Sales'
    },
    rating: 4.9,
    usageCount: 623,
    successRate: 78, // Response rate
    difficulty: 'Beginner',
    timeToExecute: '5 minutes',
    idealFor: ['Cold Outreach', 'Unresponsive Prospects', 'Email Marketing'],
    overview: 'When prospects ghost you after initial interest, this "breakup email" has a 78% response rate by using psychology and humor.',
    template: `Subject: Should I break up with you?

[First Name],

I've sent you a few emails about [Topic] and haven't heard back.

I'm going to assume one of three things:
1. You're interested but it's not the right time (hit reply and say "timing")
2. You're not interested and I should stop bothering you (hit reply and say "not interested")
3. You've been abducted by aliens and can't access email (hit reply and say "send help")

Either way, I'd love to know so I can:
- Follow up at a better time, OR
- Stop filling up your inbox, OR
- Contact the appropriate authorities

Fair?

[Your Name]

P.S. - If you're actually interested and just swamped, let me know and I'll send you a quick 2-minute video showing exactly how we helped [Similar Company] achieve [Specific Result]. No pressure, just trying to be helpful.`,
    whyItWorks: [
      'Humor makes it memorable and humanizes you',
      'Gives them easy outs (reduces friction)',
      'Creates mild urgency (this is your last email)',
      'P.S. provides value even if they don't respond',
      'Short and scannable - respects their time'
    ],
    whenToSend: 'After 3-4 previous emails over 2-3 weeks with no response',
    metrics: {
      responseRate: 78,
      positiveResponse: 34, // % who say "timing" or "interested"
      unsubscribe: 12, // % who say "not interested"
      noResponse: 10 // % who still don't respond
    },
    variations: [
      {
        version: 'B2B SaaS',
        subject: 'Permission to break up?',
        tone: 'Professional but playful'
      },
      {
        version: 'Enterprise',
        subject: 'Last email (I promise)',
        tone: 'More formal, less humor'
      }
    ],
    lastUpdated: '2025-01-08',
    tags: ['Email Templates', 'Outbound', 'Re-engagement', 'Prospecting']
  },
  {
    id: 'pb-005',
    category: 'negotiation',
    title: 'The "Split the Difference" Counter-Strategy',
    author: {
      name: 'Sarah Chen',
      sparccScore: 94,
      specialization: 'Enterprise Negotiation'
    },
    rating: 4.8,
    usageCount: 156,
    successRate: 82,
    difficulty: 'Advanced',
    timeToExecute: 'Situation-dependent',
    idealFor: ['Price Negotiation', 'Enterprise', 'High-Stakes Deals'],
    overview: 'When a buyer suggests "splitting the difference," this framework helps you avoid leaving money on the table while maintaining relationship.',
    keyTakeaways: [
      'Never immediately accept "split the difference" - it signals you had room all along',
      'Use "if/then" conditional trades instead of straight concessions',
      'Always anchor first if possible, but know how to recover if they do',
      'Make them work for every concession and trade value for value'
    ],
    scenario: 'Your price: $500K. Their budget: $400K. They say: "Let's split the difference at $450K"',
    badResponse: '"Okay, deal" - You just left $50K on the table and they know you folded easily.',
    goodResponse: `"I appreciate you trying to find a middle ground. Here's the challenge:

At $500K, we're including [Specific Features/Services]. If we go to $450K, we'd need to adjust scope.

What if we did this:
- You commit to $475K now
- We include everything except [Lower-Value Feature]
- If you hit [Success Metric] in first 6 months, we add that feature at no cost
- You also commit to being a case study and reference

That way you get a better price, we protect our margins, and we both have skin in the game for your success.

Does that work?"`,
    framework: {
      step1: 'Acknowledge their offer without accepting',
      step2: 'Explain why your price is justified (value, not cost)',
      step3: 'Offer conditional trade: "If you X, then I can Y"',
      step4: 'Make them choose between price and scope/terms',
      step5: 'Always anchor final number closer to your original'
    },
    conditionalTrades: [
      'Lower price IF they sign multi-year',
      'Discount IF they agree to case study + 2 references',
      'Concession IF they expand to additional divisions',
      'Better terms IF they commit to implementation timeline',
      'Reduce scope IF they want lower price'
    ],
    lastUpdated: '2025-01-14',
    tags: ['Negotiation', 'Pricing', 'Enterprise', 'Deal Closing']
  }
];

export const playbookStats = {
  totalPlaybooks: 110,
  totalAuthors: 47,
  avgSuccessRate: 67,
  topCategories: [
    { name: 'Templates & Scripts', count: 30 },
    { name: 'Objection Handling', count: 25 },
    { name: 'Industry-Specific', count: 20 },
    { name: 'Deal Closing', count: 15 }
  ]
};
