import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, CheckCircle, Clock, AlertTriangle, XCircle, ArrowRight,
  GitBranch, Database, Shield, Users, TrendingUp, FileText, Target,
  Layers, Activity, Zap, Award, DollarSign, BarChart3, RefreshCw,
  ChevronRight, AlertCircle, PlayCircle, PauseCircle, CheckCircle2, ClipboardList
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie
} from 'recharts';

const CommandCenterDashboard = ({ isDarkMode = true }) => {
  const [selectedScenario, setSelectedScenario] = useState('current');

  // Theme utilities
  const getCardClasses = () =>
    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const getTextColor = (variant = 'primary') => {
    if (variant === 'secondary') return isDarkMode ? 'text-gray-400' : 'text-gray-600';
    return isDarkMode ? 'text-white' : 'text-gray-900';
  };
  const getBgColor = () => (isDarkMode ? 'bg-gray-900' : 'bg-gray-50');

  // Planning Cycles
  const planningCycles = [
    {
      id: 'q1-2024',
      name: 'Q1 2024 Planning',
      status: 'active',
      phase: 'Execution',
      startDate: '2024-01-01',
      deployDate: '2024-01-15',
      endDate: '2024-03-31',
      completion: 100,
      modulesComplete: 15,
      modulesTotal: 15,
      daysRemaining: 45,
      owner: 'RevOps Leadership',
      approvalStatus: 'approved'
    },
    {
      id: 'q2-rebalance',
      name: 'Q2 Territory Rebalance',
      status: 'in-progress',
      phase: 'Planning',
      startDate: '2024-02-15',
      deployDate: '2024-04-01',
      endDate: '2024-06-30',
      completion: 47,
      modulesComplete: 4,
      modulesTotal: 8,
      daysRemaining: 28,
      owner: 'Territory Planning Team',
      approvalStatus: 'pending'
    },
    {
      id: 'fy25-annual',
      name: 'FY25 Annual Planning',
      status: 'scheduled',
      phase: 'Pre-Planning',
      startDate: '2024-09-01',
      deployDate: '2025-01-01',
      endDate: '2025-12-31',
      completion: 12,
      modulesComplete: 2,
      modulesTotal: 15,
      daysRemaining: 120,
      owner: 'Executive Team',
      approvalStatus: 'draft'
    }
  ];

  // Module Dependencies
  const moduleDependencies = [
    {
      id: 1,
      name: 'Corporate Strategy',
      status: 'complete',
      completion: 100,
      blockedBy: [],
      blocks: [2],
      owner: 'Executive Team',
      daysInProgress: 0,
      lastUpdated: '2024-01-05'
    },
    {
      id: 2,
      name: 'Sales Strategy',
      status: 'complete',
      completion: 100,
      blockedBy: [1],
      blocks: [5],
      owner: 'Sales Leadership',
      daysInProgress: 0,
      lastUpdated: '2024-01-08'
    },
    {
      id: 5,
      name: 'Segmentation',
      status: 'complete',
      completion: 100,
      blockedBy: [2],
      blocks: [6, 7],
      owner: 'Market Strategy',
      daysInProgress: 0,
      lastUpdated: '2024-01-12'
    },
    {
      id: 6,
      name: 'Territory Mgmt',
      status: 'in-progress',
      completion: 73,
      blockedBy: [5],
      blocks: [7, 8],
      owner: 'Territory Planning',
      daysInProgress: 12,
      lastUpdated: '2024-02-18',
      issues: ['West region boundary conflicts', '3 reps unassigned']
    },
    {
      id: 7,
      name: 'Coverage Model',
      status: 'blocked',
      completion: 35,
      blockedBy: [6],
      blocks: [8],
      owner: 'Capacity Planning',
      daysInProgress: 8,
      lastUpdated: '2024-02-10',
      issues: ['Waiting on territory assignments']
    },
    {
      id: 8,
      name: 'Quota Planning',
      status: 'blocked',
      completion: 20,
      blockedBy: [6, 7],
      blocks: [10],
      owner: 'Finance & RevOps',
      daysInProgress: 5,
      lastUpdated: '2024-02-05',
      issues: ['Territory quotas pending', 'Capacity model incomplete']
    },
    {
      id: 10,
      name: 'Comp Plan Design',
      status: 'blocked',
      completion: 15,
      blockedBy: [8],
      blocks: [],
      owner: 'Compensation Team',
      daysInProgress: 3,
      lastUpdated: '2024-02-01',
      issues: ['Quota targets not finalized']
    }
  ];

  // Scenario Comparison
  const scenarios = [
    {
      id: 'current',
      name: 'Current State',
      status: 'deployed',
      lastModified: '2024-01-15',
      metrics: {
        territories: 12,
        totalHeadcount: 1247,
        quotaTarget: 847,
        variableComp: 108,
        tam: 1840,
        coverage: 81.4,
        balance: 92,
        risk: 'low'
      }
    },
    {
      id: 'q2-rebalance',
      name: 'Q2 Rebalance',
      status: 'in-development',
      lastModified: '2024-02-18',
      metrics: {
        territories: 15,
        totalHeadcount: 1285,
        quotaTarget: 932,
        variableComp: 118,
        tam: 1840,
        coverage: 89.2,
        balance: 97,
        risk: 'medium'
      }
    },
    {
      id: 'fy25-aggressive',
      name: 'FY25 Aggressive Growth',
      status: 'draft',
      lastModified: '2024-02-10',
      metrics: {
        territories: 18,
        totalHeadcount: 1580,
        quotaTarget: 1240,
        variableComp: 156,
        tam: 2350,
        coverage: 93.5,
        balance: 88,
        risk: 'high'
      }
    }
  ];

  // Data Readiness
  const dataReadiness = [
    {
      category: 'CRM Data Quality',
      score: 94,
      status: 'excellent',
      checks: [
        { name: 'Account ownership', status: 'pass', value: '98%' },
        { name: 'Opportunity hygiene', status: 'pass', value: '96%' },
        { name: 'Contact completeness', status: 'pass', value: '92%' },
        { name: 'Activity logging', status: 'pass', value: '89%' }
      ],
      lastValidated: '2024-02-19'
    },
    {
      category: 'Territory Definitions',
      score: 87,
      status: 'good',
      checks: [
        { name: 'Boundary clarity', status: 'pass', value: '95%' },
        { name: 'Account assignment', status: 'warning', value: '82%' },
        { name: 'Coverage rules', status: 'pass', value: '91%' },
        { name: 'Overlap resolution', status: 'warning', value: '78%' }
      ],
      lastValidated: '2024-02-18'
    },
    {
      category: 'Historical Attainment',
      score: 98,
      status: 'excellent',
      checks: [
        { name: 'Prior year data', status: 'pass', value: '100%' },
        { name: 'Rep performance', status: 'pass', value: '98%' },
        { name: 'Territory results', status: 'pass', value: '97%' },
        { name: 'Product mix', status: 'pass', value: '96%' }
      ],
      lastValidated: '2024-02-19'
    },
    {
      category: 'Headcount Data',
      score: 82,
      status: 'fair',
      checks: [
        { name: 'Current roster', status: 'pass', value: '100%' },
        { name: 'Role definitions', status: 'pass', value: '92%' },
        { name: 'Comp data', status: 'warning', value: '78%' },
        { name: 'Tenure tracking', status: 'warning', value: '68%' }
      ],
      lastValidated: '2024-02-15'
    }
  ];

  // Approval Workflow
  const approvalWorkflow = [
    {
      module: 'Territory Management',
      status: 'pending',
      submittedBy: 'Territory Planning Team',
      submittedDate: '2024-02-18',
      approver: 'VP Sales Operations',
      dueDate: '2024-02-25',
      priority: 'high',
      comments: 3
    },
    {
      module: 'Quota Planning',
      status: 'draft',
      submittedBy: null,
      submittedDate: null,
      approver: 'CFO',
      dueDate: '2024-03-01',
      priority: 'high',
      comments: 0
    },
    {
      module: 'Comp Plan Design',
      status: 'draft',
      submittedBy: null,
      submittedDate: null,
      approver: 'CEO',
      dueDate: '2024-03-05',
      priority: 'high',
      comments: 0
    },
    {
      module: 'FY25 Annual Plan',
      status: 'approved',
      submittedBy: 'RevOps Leadership',
      submittedDate: '2024-01-10',
      approver: 'Executive Team',
      dueDate: '2024-01-15',
      priority: 'completed',
      comments: 12
    }
  ];

  const getStatusColor = (status) => {
    if (status === 'complete' || status === 'approved' || status === 'excellent' || status === 'pass') {
      return isDarkMode ? 'bg-green-900/30 text-green-400 border-green-700' : 'bg-green-50 text-green-700 border-green-200';
    }
    if (status === 'in-progress' || status === 'pending' || status === 'good' || status === 'warning') {
      return isDarkMode ? 'bg-amber-900/30 text-amber-400 border-amber-700' : 'bg-amber-50 text-amber-700 border-amber-200';
    }
    if (status === 'blocked' || status === 'failed' || status === 'fair') {
      return isDarkMode ? 'bg-red-900/30 text-red-400 border-red-700' : 'bg-red-50 text-red-700 border-red-200';
    }
    return isDarkMode ? 'bg-gray-700 text-gray-400 border-gray-600' : 'bg-gray-100 text-gray-600 border-gray-200';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className={`${getCardClasses()} border p-3 rounded-lg shadow-xl`}>
        <p className={`font-bold text-sm mb-1 ${getTextColor()}`}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${getBgColor()} p-6 space-y-6`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className={`w-8 h-8 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <h1 className={`text-4xl font-black ${getTextColor()}`}>Command Center</h1>
            <div className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'}`}>
              <span className="flex items-center gap-2 text-sm font-semibold text-violet-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                Live
              </span>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 rounded-full"></div>
        </div>
      </div>

      {/* Active Planning Cycles */}
      <div className={`${getCardClasses()} rounded-lg shadow-xl border p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${getTextColor()}`}>Active Planning Cycles</h3>
          <Calendar className="w-5 h-5 text-blue-600" />
        </div>

        <div className="grid grid-cols-3 gap-4">
            {planningCycles.map((cycle) => (
              <motion.div
                key={cycle.id}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-lg border-2 ${
                  cycle.status === 'active'
                    ? 'border-green-500 bg-green-900/10'
                    : cycle.status === 'in-progress'
                    ? 'border-blue-500 bg-blue-900/10'
                    : 'border-gray-500 bg-gray-900/10'
                } ${isDarkMode ? '' : 'bg-opacity-50'}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded font-bold ${getStatusColor(cycle.status)}`}>
                    {cycle.status.toUpperCase().replace('-', ' ')}
                  </span>
                  <span className={`text-xs ${getTextColor('secondary')}`}>{cycle.phase}</span>
                </div>

                <h4 className={`font-bold mb-2 ${getTextColor()}`}>{cycle.name}</h4>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className={getTextColor('secondary')}>Completion</span>
                    <span className={`font-bold ${getTextColor()}`}>{cycle.completion}%</span>
                  </div>
                  <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        cycle.completion === 100
                          ? 'bg-green-500'
                          : cycle.completion >= 50
                          ? 'bg-blue-500'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${cycle.completion}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <div className={`text-xs ${getTextColor('secondary')}`}>Modules</div>
                    <div className={`text-sm font-bold ${getTextColor()}`}>
                      {cycle.modulesComplete}/{cycle.modulesTotal}
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs ${getTextColor('secondary')}`}>Days Left</div>
                    <div className={`text-sm font-bold ${getTextColor()}`}>{cycle.daysRemaining}d</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className={getTextColor('secondary')}>Deploy: {cycle.deployDate}</span>
                  <span className={`px-2 py-0.5 rounded ${getStatusColor(cycle.approvalStatus)}`}>
                    {cycle.approvalStatus}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Row 1: Module Dependencies + Data Readiness */}
      <div className="grid grid-cols-2 gap-6">
        {/* Module Dependency Flow */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-bold ${getTextColor()}`}>Module Dependency Flow</h3>
              <p className={`text-xs ${getTextColor('secondary')}`}>Critical path • 3 modules blocking downstream</p>
            </div>
            <GitBranch className="w-5 h-5 text-purple-600" />
          </div>

          <div className="space-y-4">
            {moduleDependencies.map((module, idx) => (
              <div key={module.id}>
                <div
                  className={`p-3 rounded-lg border-l-4 ${
                    module.status === 'complete'
                      ? 'border-green-500 bg-green-900/10'
                      : module.status === 'in-progress'
                      ? 'border-blue-500 bg-blue-900/10'
                      : 'border-red-500 bg-red-900/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {module.status === 'complete' && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {module.status === 'in-progress' && <PlayCircle className="w-4 h-4 text-blue-500" />}
                      {module.status === 'blocked' && <PauseCircle className="w-4 h-4 text-red-500" />}
                      <span className={`font-bold ${getTextColor()}`}>{module.name}</span>
                    </div>
                    <span className={`text-sm font-bold ${
                      module.status === 'complete' ? 'text-green-500' :
                      module.status === 'in-progress' ? 'text-blue-500' :
                      'text-red-500'
                    }`}>
                      {module.completion}%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                    <div>
                      <span className={getTextColor('secondary')}>Owner: </span>
                      <span className={getTextColor()}>{module.owner}</span>
                    </div>
                    <div>
                      <span className={getTextColor('secondary')}>Updated: </span>
                      <span className={getTextColor()}>{module.lastUpdated}</span>
                    </div>
                  </div>

                  {module.issues && module.issues.length > 0 && (
                    <div className={`mt-2 p-2 rounded text-xs ${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
                      <div className="flex items-center gap-1 mb-1">
                        <AlertTriangle className="w-3 h-3 text-red-500" />
                        <span className="font-bold text-red-500">Issues:</span>
                      </div>
                      <ul className="ml-4">
                        {module.issues.map((issue, i) => (
                          <li key={i} className={getTextColor('secondary')}>• {issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {module.blocks.length > 0 && (
                    <div className="mt-2 flex items-center gap-2 text-xs">
                      <ArrowRight className="w-3 h-3 text-gray-500" />
                      <span className={getTextColor('secondary')}>
                        Blocks: {module.blocks.map(id => moduleDependencies.find(m => m.id === id)?.name).join(', ')}
                      </span>
                    </div>
                  )}
                </div>

                {idx < moduleDependencies.length - 1 && (
                  <div className="flex justify-center my-2">
                    <ChevronRight className="w-5 h-5 text-gray-500 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Data Readiness */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-bold ${getTextColor()}`}>Data Readiness Gates</h3>
              <p className={`text-xs ${getTextColor('secondary')}`}>Quality checks before planning begins</p>
            </div>
            <Database className="w-5 h-5 text-cyan-600" />
          </div>

          <div className="space-y-4">
            {dataReadiness.map((data, idx) => (
              <div key={idx} className={`p-4 rounded-lg border-2 ${
                data.status === 'excellent' ? 'border-green-500 bg-green-900/10' :
                data.status === 'good' ? 'border-blue-500 bg-blue-900/10' :
                'border-amber-500 bg-amber-900/10'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`font-bold ${getTextColor()}`}>{data.category}</h4>
                  <div className="text-right">
                    <div className={`text-2xl font-black ${
                      data.score >= 90 ? 'text-green-500' :
                      data.score >= 80 ? 'text-blue-500' :
                      'text-amber-500'
                    }`}>
                      {data.score}
                    </div>
                    <div className={`text-xs ${getTextColor('secondary')}`}>{data.status}</div>
                  </div>
                </div>

                <div className="space-y-1">
                  {data.checks.map((check, cIdx) => (
                    <div key={cIdx} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        {check.status === 'pass' ? (
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                        ) : (
                          <AlertCircle className="w-3 h-3 text-amber-500" />
                        )}
                        <span className={getTextColor('secondary')}>{check.name}</span>
                      </div>
                      <span className={`font-bold ${
                        check.status === 'pass' ? 'text-green-500' : 'text-amber-500'
                      }`}>
                        {check.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={`mt-2 text-xs ${getTextColor('secondary')}`}>
                  Last validated: {data.lastValidated}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Scenario Comparison */}
      <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className={`text-lg font-bold ${getTextColor()}`}>Scenario Comparison Matrix</h3>
            <p className={`text-xs ${getTextColor('secondary')}`}>Compare 3 planning scenarios side-by-side</p>
          </div>
          <GitBranch className="w-5 h-5 text-indigo-600" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className={`text-left p-3 ${getTextColor('secondary')} text-xs font-semibold`}>Metric</th>
                {scenarios.map((scenario) => (
                  <th key={scenario.id} className="p-3">
                    <div className="text-center">
                      <div className={`font-bold mb-1 ${getTextColor()}`}>{scenario.name}</div>
                      <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(scenario.status)}`}>
                        {scenario.status}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`p-3 font-semibold ${getTextColor('secondary')} text-sm`}>Territories</td>
                {scenarios.map((s) => (
                  <td key={s.id} className={`p-3 text-center font-bold ${getTextColor()}`}>{s.metrics.territories}</td>
                ))}
              </tr>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`p-3 font-semibold ${getTextColor('secondary')} text-sm`}>Total Headcount</td>
                {scenarios.map((s) => (
                  <td key={s.id} className={`p-3 text-center font-bold ${getTextColor()}`}>{s.metrics.totalHeadcount.toLocaleString()}</td>
                ))}
              </tr>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`p-3 font-semibold ${getTextColor('secondary')} text-sm`}>Quota Target ($M)</td>
                {scenarios.map((s) => (
                  <td key={s.id} className={`p-3 text-center font-bold ${getTextColor()}`}>${s.metrics.quotaTarget}M</td>
                ))}
              </tr>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`p-3 font-semibold ${getTextColor('secondary')} text-sm`}>Variable Comp ($M)</td>
                {scenarios.map((s) => (
                  <td key={s.id} className={`p-3 text-center font-bold ${getTextColor()}`}>${s.metrics.variableComp}M</td>
                ))}
              </tr>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`p-3 font-semibold ${getTextColor('secondary')} text-sm`}>TAM Coverage (%)</td>
                {scenarios.map((s) => (
                  <td key={s.id} className={`p-3 text-center font-bold ${
                    s.metrics.coverage >= 90 ? 'text-green-500' :
                    s.metrics.coverage >= 80 ? 'text-blue-500' :
                    'text-amber-500'
                  }`}>
                    {s.metrics.coverage}%
                  </td>
                ))}
              </tr>
              <tr className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <td className={`p-3 font-semibold ${getTextColor('secondary')} text-sm`}>Territory Balance (%)</td>
                {scenarios.map((s) => (
                  <td key={s.id} className={`p-3 text-center font-bold ${
                    s.metrics.balance >= 95 ? 'text-green-500' :
                    s.metrics.balance >= 90 ? 'text-blue-500' :
                    'text-amber-500'
                  }`}>
                    {s.metrics.balance}%
                  </td>
                ))}
              </tr>
              <tr>
                <td className={`p-3 font-semibold ${getTextColor('secondary')} text-sm`}>Risk Level</td>
                {scenarios.map((s) => (
                  <td key={s.id} className="p-3 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      s.metrics.risk === 'low' ? 'bg-green-500/20 text-green-500' :
                      s.metrics.risk === 'medium' ? 'bg-amber-500/20 text-amber-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {s.metrics.risk.toUpperCase()}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <span className={`font-bold ${getTextColor()}`}>Recommendation</span>
          </div>
          <p className={`text-sm ${getTextColor('secondary')}`}>
            "Q2 Rebalance" scenario optimizes coverage (+8%) and balance (+5%) with moderate headcount increase (+3%).
            Deploy after Territory module approval. "FY25 Aggressive" requires board approval due to high comp investment.
          </p>
        </div>
      </div>

      {/* Row 3: Approval Workflow */}
      <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className={`text-lg font-bold ${getTextColor()}`}>Approval Workflow</h3>
            <p className={`text-xs ${getTextColor('secondary')}`}>Pending approvals • 1 urgent, 2 upcoming</p>
          </div>
          <Shield className="w-5 h-5 text-purple-600" />
        </div>

        <div className="space-y-3">
          {approvalWorkflow.map((approval, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border-l-4 ${
                approval.status === 'approved'
                  ? 'border-green-500 bg-green-900/10'
                  : approval.status === 'pending'
                  ? 'border-amber-500 bg-amber-900/10'
                  : 'border-gray-500 bg-gray-900/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {approval.status === 'approved' && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {approval.status === 'pending' && <Clock className="w-5 h-5 text-amber-500 animate-pulse" />}
                  {approval.status === 'draft' && <FileText className="w-5 h-5 text-gray-500" />}
                  <div>
                    <h4 className={`font-bold ${getTextColor()}`}>{approval.module}</h4>
                    <div className={`text-xs ${getTextColor('secondary')}`}>
                      Approver: {approval.approver}
                      {approval.submittedDate && ` • Submitted: ${approval.submittedDate}`}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded font-bold ${getStatusColor(approval.status)}`}>
                    {approval.status.toUpperCase()}
                  </span>
                  {approval.dueDate && (
                    <div className={`text-xs mt-1 ${getTextColor('secondary')}`}>Due: {approval.dueDate}</div>
                  )}
                </div>
              </div>

              {approval.comments > 0 && (
                <div className={`mt-2 text-xs ${getTextColor('secondary')}`}>
                  💬 {approval.comments} {approval.comments === 1 ? 'comment' : 'comments'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandCenterDashboard;
