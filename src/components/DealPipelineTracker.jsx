import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target, CheckCircle, Circle, Clock, DollarSign, TrendingUp,
  AlertCircle, Calendar, User, Building, FileText, MessageSquare,
  Plus, MoreVertical, Edit, Trash2, ChevronDown, ChevronRight
} from 'lucide-react';

const DealPipelineTracker = ({ currentRepId = 'rep-001' }) => {
  const [expandedDeal, setExpandedDeal] = useState(null);
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' or 'list'

  // Pipeline stages
  const pipelineStages = [
    { id: 'prospecting', name: 'Prospecting', color: 'from-gray-400 to-gray-600' },
    { id: 'qualified', name: 'Qualified', color: 'from-blue-400 to-blue-600' },
    { id: 'demo', name: 'Demo/Presentation', color: 'from-purple-400 to-purple-600' },
    { id: 'proposal', name: 'Proposal Sent', color: 'from-yellow-400 to-yellow-600' },
    { id: 'negotiation', name: 'Negotiation', color: 'from-orange-400 to-orange-600' },
    { id: 'closed-won', name: 'Closed Won', color: 'from-green-400 to-green-600' }
  ];

  // Mock deals data
  const mockDeals = [
    {
      id: 'deal-001',
      missionTitle: 'Cleveland Clinic - Cardiology Leadership',
      companyName: 'Cleveland Clinic',
      stage: 'demo',
      value: 50000,
      probability: 60,
      expectedCloseDate: '2025-02-15',
      createdDate: '2025-01-05',
      daysInStage: 8,
      nextStep: 'Schedule follow-up meeting with CIO and clinical champion',
      milestones: [
        { id: 1, title: 'Initial contact made', completed: true, date: '2025-01-05' },
        { id: 2, title: 'Clinical champion engaged', completed: true, date: '2025-01-08' },
        { id: 3, title: 'Discovery call completed', completed: true, date: '2025-01-10' },
        { id: 4, title: 'Demo presentation', completed: false, date: null },
        { id: 5, title: 'Proposal submitted', completed: false, date: null },
        { id: 6, title: 'Contract signed', completed: false, date: null }
      ],
      activities: [
        { date: '2025-01-12', type: 'email', description: 'Sent demo invitation to stakeholders' },
        { date: '2025-01-10', type: 'call', description: 'Discovery call - identified 3 key pain points' },
        { date: '2025-01-08', type: 'meeting', description: 'Met Dr. Smith (Clinical Champion)' }
      ],
      contacts: [
        { name: 'Dr. Sarah Smith', title: 'Clinical Director', role: 'Champion' },
        { name: 'John Doe', title: 'CIO', role: 'Decision Maker' },
        { name: 'Mary Johnson', title: 'CFO', role: 'Influencer' }
      ]
    },
    {
      id: 'deal-002',
      missionTitle: 'Acme Financial - Deal Accelerator',
      companyName: 'Acme Financial',
      stage: 'negotiation',
      value: 60000,
      probability: 80,
      expectedCloseDate: '2025-02-01',
      createdDate: '2024-12-15',
      daysInStage: 12,
      nextStep: 'Review and respond to contract redlines',
      milestones: [
        { id: 1, title: 'Deal assessment completed', completed: true, date: '2024-12-15' },
        { id: 2, title: 'Blocker identified', completed: true, date: '2024-12-18' },
        { id: 3, title: 'Strategic plan created', completed: true, date: '2024-12-20' },
        { id: 4, title: 'Internal champion re-engaged', completed: true, date: '2025-01-05' },
        { id: 5, title: 'Contract negotiation', completed: false, date: null },
        { id: 6, title: 'Deal closed', completed: false, date: null }
        ],
      activities: [
        { date: '2025-01-13', type: 'email', description: 'Received contract redlines from legal' },
        { date: '2025-01-10', type: 'call', description: 'Pricing negotiation call with CFO' },
        { date: '2025-01-05', type: 'meeting', description: 'Re-engaged champion, built urgency' }
      ],
      contacts: [
        { name: 'Robert Brown', title: 'VP Sales', role: 'Champion' },
        { name: 'Lisa Chen', title: 'CFO', role: 'Economic Buyer' }
      ]
    },
    {
      id: 'deal-003',
      missionTitle: 'Target Corp - Territory Sprint',
      companyName: 'Target Corporation',
      stage: 'proposal',
      value: 85000,
      probability: 40,
      expectedCloseDate: '2025-03-01',
      createdDate: '2025-01-08',
      daysInStage: 5,
      nextStep: 'Follow up on proposal submission',
      milestones: [
        { id: 1, title: 'Territory analysis completed', completed: true, date: '2025-01-08' },
        { id: 2, title: 'Stakeholder mapping done', completed: true, date: '2025-01-10' },
        { id: 3, title: 'Proposal submitted', completed: true, date: '2025-01-13' },
        { id: 4, title: 'Proposal review meeting', completed: false, date: null },
        { id: 5, title: 'Contract negotiation', completed: false, date: null },
        { id: 6, title: 'Deal won', completed: false, date: null }
      ],
      activities: [
        { date: '2025-01-13', type: 'email', description: 'Submitted comprehensive proposal with ROI analysis' },
        { date: '2025-01-10', type: 'call', description: 'Mapped 5 key stakeholders across regions' }
      ],
      contacts: [
        { name: 'Mike Anderson', title: 'VP Retail Operations', role: 'Decision Maker' }
      ]
    },
    {
      id: 'deal-004',
      missionTitle: 'Small Manufacturing - Door Opener',
      companyName: 'ABC Manufacturing',
      stage: 'qualified',
      value: 25000,
      probability: 30,
      expectedCloseDate: '2025-02-20',
      createdDate: '2025-01-12',
      daysInStage: 3,
      nextStep: 'Schedule discovery call with operations team',
      milestones: [
        { id: 1, title: 'First contact made', completed: true, date: '2025-01-12' },
        { id: 2, title: 'Qualification call', completed: true, date: '2025-01-14' },
        { id: 3, title: 'Discovery meeting', completed: false, date: null },
        { id: 4, title: 'Proposal', completed: false, date: null },
        { id: 5, title: 'Close', completed: false, date: null }
      ],
      activities: [
        { date: '2025-01-14', type: 'call', description: 'Qualification call - budget confirmed' },
        { date: '2025-01-12', type: 'email', description: 'Initial outreach via warm intro' }
      ],
      contacts: [
        { name: 'Tom Wilson', title: 'Plant Manager', role: 'Influencer' }
      ]
    }
  ];

  const getDealsByStage = (stageId) => {
    return mockDeals.filter(deal => deal.stage === stageId);
  };

  const getTotalValue = (deals) => {
    return deals.reduce((sum, deal) => sum + deal.value, 0);
  };

  const getWeightedValue = (deals) => {
    return deals.reduce((sum, deal) => sum + (deal.value * deal.probability / 100), 0);
  };

  const getDaysInStageColor = (days) => {
    if (days > 14) return 'text-red-600 dark:text-red-400';
    if (days > 7) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getProgressPercentage = (milestones) => {
    const completed = milestones.filter(m => m.completed).length;
    return Math.round((completed / milestones.length) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Pipeline Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-8 h-8" />
            <span className="text-4xl font-bold">{mockDeals.length}</span>
          </div>
          <div className="text-sm opacity-90">Active Deals</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-8 h-8" />
            <span className="text-4xl font-bold">${(getTotalValue(mockDeals) / 1000).toFixed(0)}K</span>
          </div>
          <div className="text-sm opacity-90">Pipeline Value</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8" />
            <span className="text-4xl font-bold">${(getWeightedValue(mockDeals) / 1000).toFixed(0)}K</span>
          </div>
          <div className="text-sm opacity-90">Weighted Value</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-8 h-8" />
            <span className="text-4xl font-bold">{Math.round(mockDeals.reduce((sum, d) => sum + d.probability, 0) / mockDeals.length)}%</span>
          </div>
          <div className="text-sm opacity-90">Avg Probability</div>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Deal Pipeline</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('kanban')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm ${
              viewMode === 'kanban'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Kanban View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm ${
              viewMode === 'list'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {pipelineStages.map(stage => {
            const deals = getDealsByStage(stage.id);
            const stageValue = getTotalValue(deals);

            return (
              <div key={stage.id} className="flex-shrink-0 w-80">
                <div className={`bg-gradient-to-r ${stage.color} text-white rounded-t-xl p-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{stage.name}</h3>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-sm font-bold">
                      {deals.length}
                    </span>
                  </div>
                  <div className="text-sm opacity-90">
                    ${(stageValue / 1000).toFixed(0)}K total
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-b-xl p-4 space-y-3 min-h-[400px]">
                  {deals.map(deal => (
                    <motion.div
                      key={deal.id}
                      className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setExpandedDeal(expandedDeal === deal.id ? null : deal.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                            {deal.missionTitle}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {deal.companyName}
                          </p>
                        </div>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                          ${(deal.value / 1000).toFixed(0)}K
                        </span>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-semibold">
                          {deal.probability}% prob
                        </span>
                      </div>

                      <div className="mb-2">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-500 dark:text-gray-400">Progress</span>
                          <span className="font-semibold">{getProgressPercentage(deal.milestones)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-cyan-500 h-2 rounded-full"
                            style={{ width: `${getProgressPercentage(deal.milestones)}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className={`flex items-center gap-1 ${getDaysInStageColor(deal.daysInStage)}`}>
                          <Clock className="w-3 h-3" />
                          {deal.daysInStage} days in stage
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {new Date(deal.expectedCloseDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>

                      {/* Expanded Details */}
                      {expandedDeal === deal.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600"
                        >
                          <div className="mb-3">
                            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                              Next Step:
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{deal.nextStep}</p>
                          </div>

                          <div className="mb-2">
                            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                              Key Contacts:
                            </div>
                            {deal.contacts.slice(0, 2).map((contact, idx) => (
                              <div key={idx} className="text-xs text-gray-600 dark:text-gray-400">
                                • {contact.name} - {contact.role}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}

                  {deals.length === 0 && (
                    <div className="text-center py-8 text-gray-400 dark:text-gray-500">
                      <Circle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No deals in this stage</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Deal</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Probability</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Close Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockDeals.map(deal => (
                <tr key={deal.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="font-semibold">{deal.missionTitle}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{deal.companyName}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${pipelineStages.find(s => s.id === deal.stage)?.color} text-white rounded-full text-xs font-semibold`}>
                      {pipelineStages.find(s => s.id === deal.stage)?.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-green-600 dark:text-green-400">
                      ${(deal.value / 1000).toFixed(0)}K
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold">{deal.probability}%</span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(deal.expectedCloseDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-cyan-500 h-2 rounded-full"
                          style={{ width: `${getProgressPercentage(deal.milestones)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold">{getProgressPercentage(deal.milestones)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DealPipelineTracker;
