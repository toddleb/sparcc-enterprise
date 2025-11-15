/**
 * LiquidSales Data Model
 *
 * This defines the core data structures for the LiquidSales marketplace where
 * sales talent meets revenue opportunities in a liquid, dynamic exchange.
 */

// Rep Fingerprint - Links to SPARCC's rep performance fingerprinting
export const repFingerprint = {
  // Identity
  repId: 'string',
  name: 'string',
  email: 'string',
  profileImage: 'string',

  // SPARCC Integration - Performance Fingerprint
  sparccScore: 'number', // 0-100
  archetype: 'string', // 'Hunter', 'Farmer', 'Closer', 'Opener', 'Navigator'

  // Specializations
  industries: ['string'], // ['Healthcare', 'Finance', 'Technology']
  verticals: ['string'],
  dealSizes: {
    min: 'number',
    max: 'number',
    sweet_spot: 'number'
  },

  // Behavioral Profile
  strengths: ['string'], // ['Complex negotiations', 'Multi-threading', 'C-level relationships']
  preferredDealTypes: ['string'], // ['New Logo', 'Expansion', 'Renewal']
  geographies: ['string'],

  // Performance Metrics
  closedDeals: 'number',
  totalRevenue: 'number',
  avgDealSize: 'number',
  avgCycleTime: 'number', // days
  winRate: 'number', // percentage

  // Reputation
  rating: 'number', // 0-5 stars
  reviews: 'number',
  badges: ['string'], // ['Top Closer Q4', 'Healthcare Expert', 'Enterprise Specialist']

  // Availability
  status: 'string', // 'Available', 'Busy', 'Selective'
  bandwidth: 'string', // 'Full-time', 'Part-time', 'Fractional', 'Per-deal'
  hourlyRate: 'number',
  minCommission: 'number', // percentage

  // Social Proof
  testimonials: ['object'],
  linkedinUrl: 'string',
  joinedDate: 'date',
  lastActive: 'date'
};

// Mission Types
export const missionTypes = {
  DOOR_OPENER: 'door_opener', // Get the first meeting
  RELATIONSHIP_INTRO: 'relationship_intro', // Warm introduction
  DEAL_CLOSER: 'deal_closer', // Close the deal
  DEAL_ACCELERATOR: 'deal_accelerator', // Unstick a stalled deal
  NEGOTIATION: 'negotiation', // Handle final negotiations
  ACCOUNT_EXPANSION: 'account_expansion', // Grow existing accounts
  TERRITORY_SPRINT: 'territory_sprint', // Blitz a territory for 30-90 days
  VERTICAL_SPECIALIST: 'vertical_specialist', // Industry expertise needed
  FULL_CYCLE: 'full_cycle' // End-to-end sales cycle
};

// Mission Object
export const mission = {
  // Identity
  missionId: 'string',
  companyId: 'string',
  companyName: 'string',
  companyLogo: 'string',

  // Mission Details
  title: 'string', // "Crack into Cleveland Clinic cardiology"
  description: 'string',
  type: 'string', // from missionTypes

  // Target
  targetAccount: 'string',
  targetPersona: 'string', // 'CIO', 'CFO', 'VP Sales'
  targetIndustry: 'string',
  targetGeography: 'string',

  // Scope
  estimatedDealSize: 'number',
  duration: 'number', // days
  urgency: 'string', // 'Low', 'Medium', 'High', 'Critical'

  // Compensation
  compensationType: 'string', // 'Fixed', 'Commission', 'Hybrid', 'Bounty'
  fixedFee: 'number',
  commissionRate: 'number', // percentage
  bonusStructure: 'object',
  estimatedEarnings: {
    min: 'number',
    max: 'number',
    expected: 'number'
  },

  // Requirements
  requiredSkills: ['string'],
  requiredExperience: 'string',
  requiredRelationships: ['string'], // "Existing relationship with target"
  mustHaves: ['string'],
  niceToHaves: ['string'],

  // Status & Timeline
  status: 'string', // 'Open', 'Bidding', 'Assigned', 'In Progress', 'Completed', 'Closed'
  postedDate: 'date',
  deadline: 'date',
  startDate: 'date',
  expectedCloseDate: 'date',

  // Bidding
  bids: ['object'],
  activeBids: 'number',
  acceptedBid: 'string', // bidId

  // Match Score (AI-powered)
  recommendedReps: ['object'], // Array of { repId, matchScore, reasons }

  // Visibility
  visibility: 'string', // 'Public', 'Invite-only', 'Private'
  invitedReps: ['string']
};

// Bid Object
export const bid = {
  bidId: 'string',
  missionId: 'string',
  repId: 'string',
  repName: 'string',
  repRating: 'number',

  // Bid Details
  proposedRate: 'number', // commission % or fixed fee
  estimatedTimeline: 'number', // days
  approach: 'string', // Why I'm the best fit
  relevantExperience: 'string',

  // Proof Points
  similarDeals: ['object'], // Past deals that prove capability
  relationships: ['string'], // "I know the CTO personally"

  // Terms
  availability: 'date', // When can start
  commitment: 'string', // 'Full-time', 'Part-time', etc.

  // Status
  status: 'string', // 'Pending', 'Accepted', 'Rejected', 'Withdrawn'
  submittedDate: 'date',
  respondedDate: 'date',

  // Company Response
  companyNotes: 'string',
  companyRating: 'number' // How excited is company about this bid
};

// Transaction / Engagement
export const engagement = {
  engagementId: 'string',
  missionId: 'string',
  repId: 'string',
  companyId: 'string',

  // Contract Terms
  agreedRate: 'number',
  rateType: 'string', // 'Commission', 'Fixed', 'Hybrid'
  timeline: 'number',
  startDate: 'date',
  endDate: 'date',

  // Milestones
  milestones: ['object'], // { name, dueDate, payout, status }

  // Progress
  status: 'string', // 'Active', 'Paused', 'Completed', 'Cancelled'
  progressUpdates: ['object'],

  // Outcomes
  dealClosed: 'boolean',
  dealValue: 'number',
  repEarnings: 'number',
  paymentStatus: 'string', // 'Pending', 'Processing', 'Paid'

  // Ratings & Reviews
  repRating: 'number', // Company rates rep
  companyRating: 'number', // Rep rates company
  repReview: 'string',
  companyReview: 'string',

  // Metrics
  cycleTime: 'number', // actual days
  touchpoints: 'number',
  meetingsBooked: 'number'
};

// Reputation / Rating System
export const reputation = {
  repId: 'string',

  // Overall
  overallRating: 'number', // 0-5
  totalReviews: 'number',
  totalEngagements: 'number',

  // Category Ratings
  ratings: {
    communication: 'number',
    expertise: 'number',
    reliability: 'number',
    speed: 'number',
    resultQuality: 'number'
  },

  // Achievements
  badges: ['object'], // { name, description, awardedDate, icon }
  milestones: ['object'],

  // Leaderboard Position
  leaderboardRank: 'number',
  percentile: 'number',

  // Trust Indicators
  verified: 'boolean',
  backgroundCheck: 'boolean',
  linkedinVerified: 'boolean',
  emailVerified: 'boolean',
  phoneVerified: 'boolean'
};

// Company Profile
export const companyProfile = {
  companyId: 'string',
  name: 'string',
  logo: 'string',
  industry: 'string',
  size: 'string',
  website: 'string',

  // Reputation
  rating: 'number', // Reps rate companies too!
  reviews: 'number',
  totalMissions: 'number',
  activeMissions: 'number',

  // Payment Track Record
  avgPaymentTime: 'number', // days
  paymentReliability: 'number', // 0-100

  // Preferences
  preferredRepTypes: ['string'],
  typicalBudget: {
    min: 'number',
    max: 'number'
  }
};

// Search/Filter Criteria
export const searchCriteria = {
  // Mission Filters
  missionType: ['string'],
  industries: ['string'],
  dealSize: {
    min: 'number',
    max: 'number'
  },
  compensationMin: 'number',
  urgency: ['string'],
  duration: {
    min: 'number',
    max: 'number'
  },

  // Rep Filters
  rating: 'number', // minimum
  winRate: 'number', // minimum
  experience: 'string',
  availability: 'string',
  geography: ['string']
};

// Matching Algorithm Inputs
export const matchingInputs = {
  missionId: 'string',
  mission: 'object',
  availableReps: ['object'],

  // Matching Weights
  weights: {
    industryMatch: 0.25,
    experienceMatch: 0.20,
    relationshipMatch: 0.20,
    performanceScore: 0.15,
    availability: 0.10,
    rateAlignment: 0.10
  },

  // Output
  matches: [
    {
      repId: 'string',
      matchScore: 'number', // 0-100
      reasons: ['string'], // ["Healthcare experience", "Closed 12 similar deals"]
      fitScore: 'number',
      confidenceScore: 'number'
    }
  ]
};

// Notification Types
export const notificationTypes = {
  NEW_MISSION: 'new_mission', // New mission matching your profile
  BID_ACCEPTED: 'bid_accepted',
  BID_REJECTED: 'bid_rejected',
  NEW_BID: 'new_bid', // Company receives new bid
  MISSION_UPDATE: 'mission_update',
  PAYMENT_RECEIVED: 'payment_received',
  REVIEW_RECEIVED: 'review_received',
  MILESTONE_COMPLETED: 'milestone_completed',
  MESSAGE: 'message'
};

export default {
  repFingerprint,
  missionTypes,
  mission,
  bid,
  engagement,
  reputation,
  companyProfile,
  searchCriteria,
  matchingInputs,
  notificationTypes
};
