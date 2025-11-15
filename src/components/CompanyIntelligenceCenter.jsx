import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building, Users, DollarSign, MapPin, Globe, TrendingUp, Shield,
  Calendar, Target, Zap, AlertTriangle, CheckCircle, Award, Lightbulb,
  ExternalLink, Linkedin, Mail, Phone, Search, Filter, Eye, Star,
  Activity, BarChart3, Clock, ChevronDown, ChevronRight
} from 'lucide-react';
import { companyProfiles } from '../data/companyIntelligence';

const CompanyIntelligenceCenter = ({ isDarkMode }) => {
  const [selectedCompany, setSelectedCompany] = useState('cleveland-clinic');
  const [activeTab, setActiveTab] = useState('overview'); // overview, people, tech, signals, approach
  const [searchQuery, setSearchQuery] = useState('');

  const company = companyProfiles[selectedCompany];
  const allCompanies = Object.values(companyProfiles);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-black mb-2">Company Intelligence Center</h1>
              <p className="text-xl text-white/90">Deep Account Insights & Strategic Intelligence</p>
            </div>
            <Shield className="w-16 h-16 opacity-50" />
          </div>

          {/* Company Selector */}
          <div className="flex gap-4 items-center mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {allCompanies.map((comp) => (
              <motion.button
                key={comp.id}
                onClick={() => setSelectedCompany(comp.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedCompany === comp.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Building className="w-5 h-5" />
                {comp.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Company Header */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{company.name}</h2>
              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  {company.industry} - {company.subVertical}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {company.firmographics.headquarters}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <a href={company.firmographics.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    Website
                    <ExternalLink className="w-3 h-3 inline ml-1" />
                  </a>
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                ${(company.firmographics.revenue / 1000000000).toFixed(1)}B
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Annual Revenue</div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Users className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl font-bold">{(company.firmographics.employees / 1000).toFixed(0)}K</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Employees</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
              <div className="text-2xl font-bold">{company.firmographics.locations}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Locations</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
              <div className="text-2xl font-bold">{company.firmographics.founded}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Founded</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <Building className="w-6 h-6 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
              <div className="text-2xl font-bold">{company.firmographics.type}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Type</div>
            </div>
            {company.firmographics.ticker && (
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-red-600 dark:text-red-400" />
                <div className="text-2xl font-bold">{company.firmographics.ticker}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Ticker</div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'people', label: 'Decision Makers', icon: Users },
            { id: 'tech', label: 'Tech Stack', icon: Zap },
            { id: 'signals', label: 'Buying Signals', icon: Target },
            { id: 'approach', label: 'Best Approach', icon: Lightbulb }
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
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
              {/* Strategic Priorities */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4">Strategic Priorities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {company.strategicPriorities.map((priority, idx) => (
                    <div key={idx} className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="font-semibold text-sm">{priority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pain Points */}
              {company.painPoints && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4">Known Pain Points</h3>
                  <div className="space-y-3">
                    {company.painPoints.map((pain, idx) => (
                      <div key={idx} className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold">{pain.pain}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            pain.severity === 'Critical' || pain.severity === 'Very High'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                              : pain.severity === 'High'
                              ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                          }`}>
                            {pain.severity}
                          </span>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            Budget: {pain.budget}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            Champion: {pain.champion}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Initiatives */}
              {company.recentInitiatives && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4">Recent Initiatives</h3>
                  <div className="space-y-4">
                    {company.recentInitiatives.map((initiative, idx) => (
                      <div key={idx} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-lg">{initiative.name}</h4>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{initiative.timeline}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                              ${(initiative.budget / 1000000).toFixed(0)}M
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              initiative.status === 'Planning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                              initiative.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                              'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            }`}>
                              {initiative.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {initiative.stakeholders.map((stakeholder, sidx) => (
                            <span key={sidx} className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs font-semibold">
                              {stakeholder}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cultural Notes */}
              {company.culturalNotes && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4">Cultural Notes</h3>
                  <div className="space-y-2">
                    {company.culturalNotes.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'people' && (
            <motion.div
              key="people"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {company.decisionMakers.map((person, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                      <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">{person.title}</div>
                      <div className="flex gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Tenure: {person.tenure}
                        </span>
                        {person.linkedIn && (
                          <a href={person.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        person.buyingInfluence === 'Very High' || person.buyingInfluence === 'Final approval'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                          : person.buyingInfluence.includes('High')
                          ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}>
                        {person.buyingInfluence}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Background</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{person.background}</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-sm mb-1">Reachability</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{person.reachability}</p>
                    </div>
                  </div>

                  {person.interests && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {person.interests.map((interest, iidx) => (
                          <span key={iidx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(company.techStack).map(([category, tools]) => (
                    <div key={category}>
                      <h4 className="font-bold mb-3 capitalize">{category.replace('_', ' ')}</h4>
                      <div className="space-y-2">
                        {tools.map((tool, idx) => (
                          <div key={idx} className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                            <span className="font-semibold">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'signals' && company.buyingSignals && (
            <motion.div
              key="signals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-6">Recent Buying Signals</h3>
                <div className="space-y-4">
                  {company.buyingSignals.map((signal, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border-2 ${
                      signal.strength === 'Very Strong'
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                        : signal.strength === 'Strong'
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                        : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold">{signal.signal}</h4>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {new Date(signal.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-700 dark:text-gray-300 italic">{signal.implication}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          signal.strength === 'Very Strong'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : signal.strength === 'Strong'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}>
                          {signal.strength}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'approach' && company.bestApproach && (
            <motion.div
              key="approach"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-2 border-green-500">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-7 h-7 text-green-600 dark:text-green-400" />
                  Recommended Approach
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Entry Point</h4>
                    <p className="text-gray-700 dark:text-gray-300">{company.bestApproach.entryPoint}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Best Timing</h4>
                    <p className="text-gray-700 dark:text-gray-300">{company.bestApproach.timing}</p>
                  </div>
                  <div className="col-span-2">
                    <h4 className="font-bold mb-2">Messaging</h4>
                    <p className="text-gray-700 dark:text-gray-300">{company.bestApproach.messaging}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4">Key Differentiators</h3>
                <div className="grid grid-cols-2 gap-3">
                  {company.bestApproach.differentiators.map((diff, idx) => (
                    <div key={idx} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="font-semibold">{diff}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4">Red Flags to Avoid</h3>
                <div className="space-y-2">
                  {company.bestApproach.redFlags.map((flag, idx) => (
                    <div key={idx} className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <span>{flag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {company.bestApproach.referenceCustomers && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4">Reference Customers to Highlight</h3>
                  <div className="flex flex-wrap gap-3">
                    {company.bestApproach.referenceCustomers.map((ref, idx) => (
                      <span key={idx} className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg font-semibold">
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Budget Cycle */}
              {company.budgetCycle && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold mb-4">Budget Cycle Insights</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">FY Start</div>
                      <div className="font-bold">{company.budgetCycle.fiscalYearStart}</div>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Planning</div>
                      <div className="font-bold">{company.budgetCycle.planningStarts}</div>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Budget Lock</div>
                      <div className="font-bold">{company.budgetCycle.budgetLock}</div>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Best Time</div>
                      <div className="font-bold text-green-600 dark:text-green-400">{company.budgetCycle.bestTimeToSell}</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CompanyIntelligenceCenter;
