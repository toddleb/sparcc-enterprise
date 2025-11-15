import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, Users, TrendingUp, Star, MapPin, Clock, DollarSign,
  Filter, Search, Award, Target, Zap, CheckCircle, AlertCircle,
  MessageSquare, Calendar, ArrowRight, Eye, Heart, Send, User,
  Building, Trophy, ThumbsUp, Sparkles, BadgeCheck, Shield, TrendingDown
} from 'lucide-react';
import { toast } from 'sonner';
import { mockReps, mockMissions, mockBids, mockEngagements } from '../data/liquidSalesMockData';

const LiquidSalesMarketplace = ({ isDarkMode }) => {
  const [activeView, setActiveView] = useState('missions'); // 'missions', 'reps', 'my-bids', 'dashboard'
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedRep, setSelectedRep] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // User type simulation - in real app this would come from auth
  const [userType, setUserType] = useState('rep'); // 'rep' or 'company'
  const currentRepId = 'rep-001'; // Simulated logged-in rep

  const handleViewChange = (view) => {
    setActiveView(view);
    setSelectedMission(null);
    setSelectedRep(null);
    toast.success(`Switched to ${view === 'missions' ? 'Mission Browser' : view === 'reps' ? 'Rep Marketplace' : view === 'my-bids' ? 'My Bids' : 'Dashboard'}`);
  };

  const handleBidOnMission = (mission) => {
    toast.success(`Bid submitted for ${mission.title}`);
  };

  const handleContactRep = (rep) => {
    toast.success(`Message sent to ${rep.name}`);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'High': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300';
    }
  };

  const getMissionTypeIcon = (type) => {
    const icons = {
      door_opener: Target,
      relationship_intro: Users,
      deal_closer: Trophy,
      deal_accelerator: Zap,
      negotiation: Shield,
      account_expansion: TrendingUp,
      territory_sprint: MapPin,
      vertical_specialist: Award,
      full_cycle: Briefcase
    };
    return icons[type] || Briefcase;
  };

  const getMissionTypeName = (type) => {
    const names = {
      door_opener: 'Door Opener',
      relationship_intro: 'Warm Intro',
      deal_closer: 'Deal Closer',
      deal_accelerator: 'Deal Accelerator',
      negotiation: 'Negotiation',
      account_expansion: 'Account Expansion',
      territory_sprint: 'Territory Sprint',
      vertical_specialist: 'Vertical Specialist',
      full_cycle: 'Full Cycle'
    };
    return names[type] || type;
  };

  const filteredMissions = mockMissions.filter(mission => {
    const matchesSearch = mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mission.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || mission.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const filteredReps = mockReps.filter(rep => {
    const matchesSearch = rep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rep.industries.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-12 h-12" />
                <h1 className="text-5xl font-black">LiquidSales</h1>
              </div>
              <p className="text-xl text-white/90">Where Elite Revenue Talent Meets Opportunity</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-white/80">Logged in as</div>
                <div className="text-lg font-bold">Sarah Chen</div>
                <div className="text-sm text-white/80">Top Performer • 4.9★</div>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* View Tabs */}
          <div className="flex gap-3">
            <motion.button
              onClick={() => handleViewChange('missions')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'missions'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase className="w-5 h-5" />
              Mission Marketplace
            </motion.button>

            <motion.button
              onClick={() => handleViewChange('reps')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'reps'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              Rep Marketplace
            </motion.button>

            <motion.button
              onClick={() => handleViewChange('my-bids')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'my-bids'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              My Bids & Engagements
            </motion.button>

            <motion.button
              onClick={() => handleViewChange('dashboard')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeView === 'dashboard'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp className="w-5 h-5" />
              Dashboard
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={activeView === 'missions' ? 'Search missions...' : 'Search reps...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {activeView === 'missions' && (
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            >
              <option value="all">All Mission Types</option>
              <option value="door_opener">Door Opener</option>
              <option value="deal_closer">Deal Closer</option>
              <option value="deal_accelerator">Deal Accelerator</option>
              <option value="full_cycle">Full Cycle</option>
              <option value="negotiation">Negotiation</option>
              <option value="relationship_intro">Warm Intro</option>
            </select>
          )}
          <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <AnimatePresence mode="wait">
          {activeView === 'missions' && (
            <motion.div
              key="missions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{filteredMissions.length} Active Missions</h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold">
                    {mockMissions.filter(m => m.status === 'Open').length} Open
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold">
                    {mockMissions.filter(m => m.status === 'Bidding').length} Bidding
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {filteredMissions.map((mission) => {
                  const MissionIcon = getMissionTypeIcon(mission.type);
                  return (
                    <motion.div
                      key={mission.missionId}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedMission(mission)}
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                                <MissionIcon className="w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">{mission.title}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-sm text-gray-600 dark:text-gray-400">{mission.companyName}</span>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                                    {getMissionTypeName(mission.type)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getUrgencyColor(mission.urgency)}`}>
                              {mission.urgency} Priority
                            </span>
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                              <Eye className="w-4 h-4" />
                              <span className="text-sm">{mission.activeBids} bids</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                          {mission.description}
                        </p>

                        <div className="grid grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
                              <div className="text-sm font-semibold">{mission.targetGeography}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Estimated Earnings</div>
                              <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                                ${mission.estimatedEarnings.expected.toLocaleString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                              <div className="text-sm font-semibold">{mission.duration} days</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-gray-400" />
                            <div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Deal Size</div>
                              <div className="text-sm font-semibold">
                                {mission.estimatedDealSize > 0 ? `$${(mission.estimatedDealSize / 1000).toFixed(0)}K` : 'N/A'}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          {mission.requiredSkills.slice(0, 3).map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-semibold">
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Posted {new Date(mission.postedDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              Deadline {new Date(mission.deadline).toLocaleDateString()}
                            </div>
                          </div>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBidOnMission(mission);
                            }}
                            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Place Bid
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeView === 'reps' && (
            <motion.div
              key="reps"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold">{filteredReps.length} Elite Sales Professionals</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReps.map((rep) => (
                  <motion.div
                    key={rep.repId}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedRep(rep)}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {rep.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold">{rep.name}</h3>
                            {rep.sparccScore >= 90 && (
                              <BadgeCheck className="w-5 h-5 text-blue-500" />
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.floor(rep.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-semibold">{rep.rating}</span>
                            <span className="text-sm text-gray-500">({rep.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded text-xs font-semibold">
                              {rep.archetype}
                            </span>
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-semibold">
                              {rep.status}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {rep.sparccScore}
                          </div>
                          <div className="text-xs text-gray-500">SPARCC Score</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div>
                          <div className="text-2xl font-bold">{rep.closedDeals}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Deals Closed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{rep.winRate}%</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Win Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">${(rep.avgDealSize / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Avg Deal</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-semibold mb-2">Specializations</div>
                        <div className="flex flex-wrap gap-2">
                          {rep.industries.map((industry, index) => (
                            <span key={index} className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded text-xs">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-semibold mb-2">Top Strengths</div>
                        <div className="flex flex-wrap gap-2">
                          {rep.strengths.slice(0, 2).map((strength, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs">
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-sm">
                          <span className="text-gray-500">Rate: </span>
                          <span className="font-semibold">{rep.minCommission}% min commission</span>
                        </div>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContactRep(rep);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageSquare className="w-4 h-4" />
                          Contact
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeView === 'my-bids' && (
            <motion.div
              key="my-bids"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold">My Bids & Active Engagements</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-bold mb-4">Active Bids ({mockBids.filter(b => b.repId === currentRepId).length})</h3>
                  {mockBids.filter(b => b.repId === currentRepId).map((bid) => {
                    const mission = mockMissions.find(m => m.missionId === bid.missionId);
                    return (
                      <div key={bid.bidId} className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{mission?.title}</h4>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Bid submitted {new Date(bid.submittedDate).toLocaleDateString()}
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-semibold">
                            {bid.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          Proposed rate: {bid.proposedRate}% • Timeline: {bid.estimatedTimeline} days
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-bold mb-4">Active Engagements ({mockEngagements.filter(e => e.repId === currentRepId && e.status === 'Active').length})</h3>
                  {mockEngagements.filter(e => e.repId === currentRepId && e.status === 'Active').map((engagement) => (
                    <div key={engagement.engagementId} className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">Active Deal</h4>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Started {new Date(engagement.startDate).toLocaleDateString()}
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold">
                          Active
                        </span>
                      </div>
                      <div className="space-y-2">
                        {engagement.progressUpdates.map((update, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">{new Date(update.date).toLocaleDateString()}: </span>
                              <span className="text-gray-800 dark:text-gray-200">{update.update}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeView === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold">My Dashboard</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-8 h-8" />
                    <span className="text-3xl font-bold">4.9</span>
                  </div>
                  <div className="text-sm opacity-90">Overall Rating</div>
                  <div className="text-xs opacity-75 mt-1">28 reviews</div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign className="w-8 h-8" />
                    <span className="text-3xl font-bold">$127K</span>
                  </div>
                  <div className="text-sm opacity-90">YTD Earnings</div>
                  <div className="text-xs opacity-75 mt-1">+23% vs last year</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="w-8 h-8" />
                    <span className="text-3xl font-bold">8</span>
                  </div>
                  <div className="text-sm opacity-90">Active Bids</div>
                  <div className="text-xs opacity-75 mt-1">3 pending response</div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="w-8 h-8" />
                    <span className="text-3xl font-bold">12</span>
                  </div>
                  <div className="text-sm opacity-90">Deals Closed YTD</div>
                  <div className="text-xs opacity-75 mt-1">34% win rate</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Bid accepted on Cleveland Clinic mission</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">New mission matches your profile</div>
                        <div className="text-xs text-gray-500">5 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Payment received: $15,000</div>
                        <div className="text-xs text-gray-500">1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-bold mb-4">Recommended Missions</h3>
                  <div className="space-y-3">
                    {mockMissions.slice(0, 3).map((mission) => (
                      <div key={mission.missionId} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30">
                        <div className="text-sm font-semibold mb-1">{mission.title}</div>
                        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className="text-green-600 dark:text-green-400 font-semibold">
                            ${mission.estimatedEarnings.expected.toLocaleString()}
                          </span>
                          <span>•</span>
                          <span>{mission.duration} days</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiquidSalesMarketplace;
