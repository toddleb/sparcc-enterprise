import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, DollarSign, Clock, Users, Target, AlertTriangle,
  Award, BarChart3, Search, Filter, ChevronDown, ChevronRight,
  Building, Lightbulb, Shield, Zap, Activity, ShoppingCart, Code
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { industryIntelligence } from '../data/industryIntelligence';

const IndustryIntelligenceHub = ({ isDarkMode }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');
  const [activeTab, setActiveTab] = useState('overview'); // overview, personas, competitors, benchmarks, success
  const [expandedSection, setExpandedSection] = useState(null);

  const industry = industryIntelligence[selectedIndustry];
  const allIndustries = Object.values(industryIntelligence);

  const getIndustryIcon = (id) => {
    const icons = {
      healthcare: Activity,
      financial_services: DollarSign,
      manufacturing: Settings,
      retail: ShoppingCart,
      technology: Code
    };
    return icons[id] || Building;
  };

  // Prepare radar chart data for industry comparison
  const radarData = [
    {
      metric: 'Win Rate',
      value: industry.benchmarks.avgWinRate,
      topPerformer: industry.benchmarks.topPerformerWinRate
    },
    {
      metric: 'Avg Deal Size',
      value: (industry.subVerticals[0]?.avgDealSize / 10000) || 50,
      topPerformer: 100
    },
    {
      metric: 'Growth Rate',
      value: industry.growthRate * 10,
      topPerformer: 100
    },
    {
      metric: 'Commission',
      value: industry.benchmarks.avgCommission * 8,
      topPerformer: 100
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-black mb-2">Industry Intelligence Hub</h1>
              <p className="text-xl text-white/90">Deep Market Insights & Competitive Analysis</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">${(industry.totalMarketSize / 1000000000000).toFixed(1)}T</div>
              <div className="text-sm text-white/80">Total Market Size</div>
            </div>
          </div>

          {/* Industry Selector */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {allIndustries.map((ind) => {
              const Icon = getIndustryIcon(ind.id);
              return (
                <motion.button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                    selectedIndustry === ind.id
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  {ind.name}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-3 mb-6">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'personas', label: 'Buyer Personas', icon: Users },
            { id: 'competitors', label: 'Competitive Intel', icon: Target },
            { id: 'benchmarks', label: 'Benchmarks', icon: TrendingUp },
            { id: 'success', label: 'Success Stories', icon: Award }
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                  <TrendingUp className="w-8 h-8 mb-3" />
                  <div className="text-3xl font-bold">{industry.growthRate}%</div>
                  <div className="text-sm opacity-90">Growth Rate</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
                  <DollarSign className="w-8 h-8 mb-3" />
                  <div className="text-3xl font-bold">${(industry.subVerticals[0]?.avgDealSize / 1000).toFixed(0)}K</div>
                  <div className="text-sm opacity-90">Avg Deal Size</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
                  <Clock className="w-8 h-8 mb-3" />
                  <div className="text-3xl font-bold">{industry.subVerticals[0]?.avgSalesCycle}d</div>
                  <div className="text-sm opacity-90">Avg Sales Cycle</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
                  <Target className="w-8 h-8 mb-3" />
                  <div className="text-3xl font-bold">{industry.benchmarks.avgWinRate}%</div>
                  <div className="text-sm opacity-90">Avg Win Rate</div>
                </div>
              </div>

              {/* Performance Radar */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4">Performance Profile</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#94a3b8" />
                    <PolarAngleAxis dataKey="metric" stroke="#64748b" />
                    <PolarRadiusAxis stroke="#64748b" />
                    <Radar name="Average" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Radar name="Top Performer" dataKey="topPerformer" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Sub-Verticals */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4">Sub-Vertical Breakdown</h3>
                <div className="space-y-4">
                  {industry.subVerticals.map((vertical, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold">{vertical.name}</h4>
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          +{vertical.growthRate}%
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600 dark:text-gray-400">Market Size</div>
                          <div className="font-semibold">${(vertical.marketSize / 1000000000).toFixed(1)}B</div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-400">Avg Deal</div>
                          <div className="font-semibold">${(vertical.avgDealSize / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-400">Cycle</div>
                          <div className="font-semibold">{vertical.avgSalesCycle} days</div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-400">Key Players</div>
                          <div className="font-semibold">{vertical.keyPlayers.length}</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Key Players:</div>
                        <div className="flex flex-wrap gap-2">
                          {vertical.keyPlayers.map((player, pidx) => (
                            <span key={pidx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs">
                              {player}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seasonality */}
              {industry.seasonality && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4">Buying Seasonality</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {industry.seasonality.map((season, idx) => (
                      <div key={idx} className={`p-4 rounded-lg border-2 ${
                        season.activity === 'Very High' ? 'bg-green-50 dark:bg-green-900/20 border-green-500' :
                        season.activity === 'High' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' :
                        season.activity === 'Medium' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500' :
                        'bg-gray-50 dark:bg-gray-700/50 border-gray-500'
                      }`}>
                        <div className="text-2xl font-bold mb-1">{season.quarter}</div>
                        <div className="text-sm font-semibold mb-2">{season.activity}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{season.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'personas' && (
            <motion.div
              key="personas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {industry.buyerPersonas.map((persona, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{persona.title}</h3>
                      <div className="flex gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          persona.decisionPower === 'Very High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                          persona.decisionPower === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}>
                          {persona.decisionPower} Decision Power
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold">
                          {persona.avgMeetingsToClose} meetings to close
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Typical Concerns
                      </h4>
                      <ul className="space-y-1">
                        {persona.typicalConcerns.map((concern, cidx) => (
                          <li key={cidx} className="text-sm flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{concern}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Preferred Channels
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {persona.preferredChannels.map((channel, chidx) => (
                          <span key={chidx} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-green-600" />
                      Best Approach
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{persona.bestApproach}</p>
                  </div>
                </div>
              ))}

              {/* Common Objections */}
              {industry.commonObjections && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4">Common Objections & Responses</h3>
                  <div className="space-y-3">
                    {industry.commonObjections.map((obj, idx) => (
                      <div key={idx} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-red-900 dark:text-red-200">"{obj.objection}"</h4>
                          <span className="text-xs font-semibold text-red-600 dark:text-red-400">{obj.frequency}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold text-green-600 dark:text-green-400">Best Response: </span>
                          <span className="text-gray-700 dark:text-gray-300">{obj.bestResponse}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'competitors' && industry.competitiveIntel && (
            <motion.div
              key="competitors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {industry.competitiveIntel.map((comp, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{comp.competitor}</h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Market Share: {comp.marketShare}%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{comp.marketShare}%</div>
                      <div className="text-xs text-gray-500">Market Share</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-bold mb-2 text-green-600 dark:text-green-400">Strengths</h4>
                      <ul className="space-y-1">
                        {comp.strengths.map((strength, sidx) => (
                          <li key={sidx} className="text-sm flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-red-600 dark:text-red-400">Weaknesses</h4>
                      <ul className="space-y-1">
                        {comp.weaknesses.map((weakness, widx) => (
                          <li key={widx} className="text-sm flex items-start gap-2">
                            <span className="text-red-500">✗</span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      How to Win Against Them
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{comp.winningAgainst}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'benchmarks' && (
            <motion.div
              key="benchmarks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-6">Performance Benchmarks</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{industry.benchmarks.avgWinRate}%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg Win Rate</div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                      Top: {industry.benchmarks.topPerformerWinRate}%
                    </div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">{industry.benchmarks.avgDealCycle}d</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg Deal Cycle</div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                      Fastest: {industry.benchmarks.fastestDealCycle}d
                    </div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">{industry.benchmarks.avgCommission}%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg Commission</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                    <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                      {industry.benchmarks.discountRange.min}-{industry.benchmarks.discountRange.max}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Discount Range</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'success' && industry.successStories && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {industry.successStories.map((story, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{story.company}</h3>
                      <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>Deal: ${(story.dealSize / 1000).toFixed(0)}K</span>
                        <span>•</span>
                        <span>Cycle: {story.cycle} days</span>
                      </div>
                    </div>
                    <Award className="w-12 h-12 text-yellow-500" />
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Key Success Factors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.keyFactors.map((factor, fidx) => (
                        <span key={fidx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-bold mb-2">Winning Strategy:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{story.winningStrategy}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IndustryIntelligenceHub;
