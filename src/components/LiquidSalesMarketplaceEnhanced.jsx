import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, Users, TrendingUp, Star, MapPin, Clock, DollarSign,
  Filter, Search, Award, Target, Zap, CheckCircle, AlertCircle,
  MessageSquare, Calendar, ArrowRight, Eye, Heart, Send, User,
  Building, Trophy, ThumbsUp, Sparkles, BadgeCheck, Shield, Flame,
  BarChart3, Activity, TrendingDown
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { toast } from 'sonner';
import { mockReps, mockMissions, mockBids, mockEngagements } from '../data/liquidSalesMockData';
import MissionDetailModal from './MissionDetailModal';
import RepProfileModal from './RepProfileModal';
import LeaderboardPanel from './LeaderboardPanel';

const LiquidSalesMarketplaceEnhanced = ({ isDarkMode }) => {
  const [activeView, setActiveView] = useState('missions'); // 'missions', 'reps', 'my-bids', 'dashboard', 'leaderboard'
  const [selectedMission, setSelectedMission] = useState(null);
  const [selectedRep, setSelectedRep] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showCertificationInfo, setShowCertificationInfo] = useState(false);

  const currentRepId = 'rep-001'; // Simulated logged-in user
  const currentRep = mockReps.find(r => r.repId === currentRepId);

  // Dashboard analytics data
  const earningsData = [
    { month: 'Jan', earnings: 18500 },
    { month: 'Feb', earnings: 22000 },
    { month: 'Mar', earnings: 19500 },
    { month: 'Apr', earnings: 25000 },
    { month: 'May', earnings: 21000 },
    { month: 'Jun', earnings: 27000 }
  ];

  const missionTypeDistribution = [
    { name: 'Door Opener', value: 35, color: '#06b6d4' },
    { name: 'Deal Closer', value: 25, color: '#3b82f6' },
    { name: 'Accelerator', value: 20, color: '#8b5cf6' },
    { name: 'Full Cycle', value: 15, color: '#ec4899' },
    { name: 'Other', value: 5, color: '#94a3b8' }
  ];

  const handleViewChange = (view) => {
    setActiveView(view);
    setSelectedMission(null);
    setSelectedRep(null);
    const viewNames = {
      missions: 'Mission Browser',
      reps: 'Rep Marketplace',
      'my-bids': 'My Bids',
      dashboard: 'Dashboard',
      leaderboard: 'Leaderboard'
    };
    toast.success(`Switched to ${viewNames[view]}`);
  };

  const handleBidOnMission = (mission, bidData) => {
    toast.success(`Bid submitted for ${mission.title}!`, {
      description: `Proposed rate: ${bidData.proposedRate}% • Timeline: ${bidData.estimatedTimeline} days`
    });
  };

  const handleContactRep = (rep) => {
    toast.success(`Message sent to ${rep.name}`);
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      'Critical': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'High': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Low': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
    };
    return colors[urgency] || 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300';
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
                <div>
                  <h1 className="text-5xl font-black">LiquidSales</h1>
                  <p className="text-sm text-white/80 flex items-center gap-2 mt-1">
                    <Shield className="w-4 h-4" />
                    SPARCC Certified Talent Exchange
                  </p>
                </div>
              </div>
              <p className="text-xl text-white/90">Where Elite Revenue Talent Meets Opportunity</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCertificationInfo(true)}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <BadgeCheck className="w-4 h-4" />
                Get Certified
              </button>
              <div className="text-right">
                <div className="text-sm text-white/80">Logged in as</div>
                <div className="text-lg font-bold flex items-center gap-2">
                  {currentRep.name}
                  <Shield className="w-5 h-5 text-cyan-300" title="SPARCC Certified" />
                </div>
                <div className="text-sm text-white/80">SPARCC Score: {currentRep.sparccScore} • {currentRep.rating}★</div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/30">
                <User className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* View Tabs */}
          <div className="flex gap-3">
            {[
              { id: 'missions', icon: Briefcase, label: 'Mission Marketplace' },
              { id: 'reps', icon: Users, label: 'Rep Marketplace' },
              { id: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
              { id: 'my-bids', icon: Send, label: 'My Bids' },
              { id: 'dashboard', icon: BarChart3, label: 'Dashboard' }
            ].map(tab => (
              <motion.button
                key={tab.id}
                onClick={() => handleViewChange(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeView === tab.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      {(activeView === 'missions' || activeView === 'reps') && (
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={activeView === 'missions' ? 'Search missions...' : 'Search certified reps...'}
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
      )}

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
                  const matchScore = Math.floor(75 + Math.random() * 20);

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
                              <div className="flex-1">
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
                            <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-bold">
                              {matchScore}% Match
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

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex flex-wrap gap-2">
                            {mission.requiredSkills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-semibold">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedMission(mission);
                            }}
                            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Details
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
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  {filteredReps.length} SPARCC Certified Professionals
                  <Shield className="w-6 h-6 text-cyan-500" />
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  All reps assessed & verified by SPARCC
                </div>
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
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-cyan-200 dark:border-cyan-900">
                          {rep.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold">{rep.name}</h3>
                            <Shield className="w-5 h-5 text-cyan-500" title="SPARCC Certified" />
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
                            <span className="text-sm text-gray-500">({rep.reviews})</span>
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
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {rep.sparccScore}
                          </div>
                          <div className="text-xs text-gray-500">SPARCC</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div>
                          <div className="text-2xl font-bold">{rep.closedDeals}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Deals</div>
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
                        <div className="flex flex-wrap gap-2">
                          {rep.industries.map((industry, index) => (
                            <span key={index} className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded text-xs">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-sm">
                          <span className="text-gray-500">Rate: </span>
                          <span className="font-semibold">{rep.minCommission}% commission</span>
                        </div>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedRep(rep);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Profile
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeView === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <LeaderboardPanel reps={mockReps} />
            </motion.div>
          )}

          {activeView === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Trophy className="w-8 h-8" />
                      <span className="text-4xl font-bold">{currentRep.sparccScore}</span>
                    </div>
                    <div className="text-sm opacity-90">SPARCC Score</div>
                    <div className="text-xs opacity-75 mt-1">Top 5% Performer</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <DollarSign className="w-8 h-8" />
                      <span className="text-4xl font-bold">$127K</span>
                    </div>
                    <div className="text-sm opacity-90">YTD Earnings</div>
                    <div className="text-xs opacity-75 mt-1">+23% vs last year</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Zap className="w-8 h-8" />
                      <span className="text-4xl font-bold">8</span>
                    </div>
                    <div className="text-sm opacity-90">Active Bids</div>
                    <div className="text-xs opacity-75 mt-1">3 pending response</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Target className="w-8 h-8" />
                      <span className="text-4xl font-bold">{currentRep.closedDeals}</span>
                    </div>
                    <div className="text-sm opacity-90">Deals Closed YTD</div>
                    <div className="text-xs opacity-75 mt-1">{currentRep.winRate}% win rate</div>
                  </div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-bold mb-4">Earnings Trend</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={earningsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Line type="monotone" dataKey="earnings" stroke="#06b6d4" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-bold mb-4">Mission Types</h3>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={missionTypeDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {missionTypeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Certification Status */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 border-2 border-cyan-200 dark:border-cyan-800">
                  <div className="flex items-start gap-4">
                    <Shield className="w-12 h-12 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">SPARCC Certification Status</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        You are SPARCC Certified with a performance score of <span className="font-bold text-cyan-600 dark:text-cyan-400">{currentRep.sparccScore}/100</span>.
                        Your certification expires in 12 months and requires annual renewal.
                      </p>
                      <div className="flex gap-3">
                        <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg font-semibold flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Active Certification
                        </div>
                        <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg font-semibold">
                          Renewed: Jan 2025
                        </div>
                        <div className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg font-semibold">
                          Expires: Jan 2026
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="space-y-6">
                {/* Active Bids */}
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

                {/* Active Engagements */}
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
        </AnimatePresence>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedMission && (
          <MissionDetailModal
            mission={selectedMission}
            onClose={() => setSelectedMission(null)}
            onBid={handleBidOnMission}
            getMissionTypeIcon={getMissionTypeIcon}
            getMissionTypeName={getMissionTypeName}
            getUrgencyColor={getUrgencyColor}
          />
        )}

        {selectedRep && (
          <RepProfileModal
            rep={selectedRep}
            onClose={() => setSelectedRep(null)}
            onContact={handleContactRep}
          />
        )}

        {showCertificationInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCertificationInfo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">SPARCC Certification</h2>
                <p className="text-gray-600 dark:text-gray-400">Join the Elite Revenue Talent Exchange</p>
              </div>
              <div className="space-y-4 text-left">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <h4 className="font-bold mb-2">Certification Requirements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5" />
                      <span>Complete SPARCC performance assessment (100-point fingerprint)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5" />
                      <span>Minimum 70/100 SPARCC score required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5" />
                      <span>Background verification & reference checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5" />
                      <span>Proven track record with validated deal closures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-600 mt-0.5" />
                      <span>Annual renewal with performance review</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setShowCertificationInfo(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700"
                >
                  Start Certification Process
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiquidSalesMarketplaceEnhanced;
