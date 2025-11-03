import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RefreshCw, Compass, Zap, Target, TrendingUp, Database,
  Lightbulb, Users, BarChart3, Activity, CheckCircle,
  ArrowUpRight, ArrowRightCircle
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, RadarChart,
  Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart
} from 'recharts';

const SystemHealth = ({ isDarkMode = true }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  // Theme utilities
  const getCardClasses = () =>
    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const getTextColor = (variant = 'primary') => {
    if (variant === 'secondary') return isDarkMode ? 'text-gray-400' : 'text-gray-600';
    return isDarkMode ? 'text-white' : 'text-gray-900';
  };
  const getBgColor = () => (isDarkMode ? 'bg-gray-900' : 'bg-gray-50');

  // 8 phases in the Sales Operating System - 360° view
  const phases = [
    {
      id: 'gtm',
      name: 'GTM Strategy',
      icon: Compass,
      color: 'from-cyan-500 to-blue-500',
      gradientColors: ['#06b6d4', '#3b82f6'],
      position: 0,
      tagline: 'Define the play',
      description: 'Market segmentation, territory design, capacity planning',
      healthScore: 82,
      metrics: [
        { label: 'TAM Coverage', value: '81.4%', status: 'good', change: '+3.2%' },
        { label: 'Territory Balance', value: '92%', status: 'good', change: '+5%' },
        { label: 'Reps per $1M Pipeline', value: '2.4', status: 'concern', change: '+0.3' }
      ]
    },
    {
      id: 'data',
      name: 'Sales Data',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      gradientColors: ['#a855f7', '#ec4899'],
      position: 45,
      tagline: 'Capture reality',
      description: 'CRM hygiene, pipeline tracking, activity logging',
      healthScore: 94,
      metrics: [
        { label: 'Data Completeness', value: '94.2%', status: 'good', change: '+2.1%' },
        { label: 'CRM Adoption', value: '97%', status: 'good', change: '+1%' },
        { label: 'Activity Logging', value: '67%', status: 'concern', change: '-3%' }
      ]
    },
    {
      id: 'enablement',
      name: 'Enablement',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
      gradientColors: ['#f59e0b', '#f97316'],
      position: 90,
      tagline: 'Equip the players',
      description: 'Training, content, readiness programs',
      healthScore: 85,
      metrics: [
        { label: 'Readiness Score', value: '85.2%', status: 'good', change: '+4.1%' },
        { label: 'Time to 1st Deal', value: '42 days', status: 'good', change: '-20d' },
        { label: 'Content Engagement', value: '6.9K', status: 'good', change: '+18%' }
      ]
    },
    {
      id: 'insights',
      name: 'Sales Insights',
      icon: Lightbulb,
      color: 'from-yellow-500 to-amber-500',
      gradientColors: ['#eab308', '#f59e0b'],
      position: 135,
      tagline: 'Learn & adapt',
      description: 'Competitive intel, win/loss analysis, market feedback',
      healthScore: 78,
      metrics: [
        { label: 'Win/Loss Capture', value: '32%', status: 'concern', change: '-5%' },
        { label: 'Competitive Intel', value: '78%', status: 'good', change: '+12%' },
        { label: 'Feedback Loops', value: '4/yr', status: 'concern', change: '0' }
      ]
    },
    {
      id: 'effectiveness',
      name: 'Effectiveness',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      gradientColors: ['#22c55e', '#10b981'],
      position: 180,
      tagline: 'Optimize execution',
      description: 'Conversion rates, deal velocity, coaching',
      healthScore: 91,
      metrics: [
        { label: 'Pipeline Conversion', value: '23.4%', status: 'good', change: '+2.8%' },
        { label: 'Deal Velocity', value: '47 days', status: 'good', change: '-5d' },
        { label: 'Forecast Accuracy', value: '91.2%', status: 'good', change: '+3.5%' }
      ]
    },
    {
      id: 'customer-success',
      name: 'Customer Success',
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
      gradientColors: ['#14b8a6', '#06b6d4'],
      position: 225,
      tagline: 'Retain & expand',
      description: 'NRR, churn analysis, expansion opportunities',
      healthScore: 88,
      metrics: [
        { label: 'NRR', value: '112%', status: 'good', change: '+8%' },
        { label: 'Churn Rate', value: '4.2%', status: 'good', change: '-1.3%' },
        { label: 'Expansion Rate', value: '23%', status: 'good', change: '+5%' }
      ]
    },
    {
      id: 'spm',
      name: 'SPM',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-500',
      gradientColors: ['#3b82f6', '#6366f1'],
      position: 270,
      tagline: 'Reward & reinforce',
      description: 'Compensation, quotas, performance management',
      healthScore: 76,
      metrics: [
        { label: 'Quota Attainment', value: '97.7%', status: 'good', change: '+5.2%' },
        { label: 'Pay-for-Performance', value: '0.87 r²', status: 'good', change: '+0.05' },
        { label: 'Plan Effectiveness', value: '76.2%', status: 'concern', change: '+8%' }
      ]
    },
    {
      id: 'planning',
      name: 'Revenue Planning',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      gradientColors: ['#6366f1', '#a855f7'],
      position: 315,
      tagline: 'Forecast & allocate',
      description: 'Financial planning, capacity modeling, territory allocation',
      healthScore: 81,
      metrics: [
        { label: 'Forecast Accuracy', value: '93%', status: 'good', change: '+2%' },
        { label: 'Planning Cycle', value: 'Annual', status: 'concern', change: '0' },
        { label: 'Capacity Utilization', value: '89%', status: 'good', change: '+6%' }
      ]
    }
  ];

  // Cross-Dashboard Health Metrics (Spider/Radar Chart)
  const systemHealth = [
    { phase: 'GTM', score: 82, target: 85, status: 'fair' },
    { phase: 'Data', score: 94, target: 90, status: 'good' },
    { phase: 'Enablement', score: 85, target: 80, status: 'good' },
    { phase: 'Insights', score: 78, target: 85, status: 'concern' },
    { phase: 'Execution', score: 91, target: 90, status: 'good' },
    { phase: 'Customer', score: 88, target: 85, status: 'good' },
    { phase: 'Comp', score: 76, target: 85, status: 'concern' },
    { phase: 'Planning', score: 81, target: 80, status: 'good' }
  ];

  // Flywheel Velocity Trend
  const flywheelVelocity = [
    { quarter: 'Q1 2023', cycleTime: 120, improvements: 8, revenue: 720 },
    { quarter: 'Q2 2023', cycleTime: 105, improvements: 12, revenue: 765 },
    { quarter: 'Q3 2023', cycleTime: 92, improvements: 15, revenue: 798 },
    { quarter: 'Q4 2023', cycleTime: 78, improvements: 18, revenue: 847 },
    { quarter: 'Q1 2024 (P)', cycleTime: 65, improvements: 22, revenue: 932 }
  ];

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
            <Activity
              className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}
              style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            />
            <h1 className={`text-4xl font-black ${getTextColor()}`}>
              System Health
            </h1>
            <div className={`px-3 py-1 rounded-full ${
              isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
            }`}>
              <span className={`flex items-center gap-2 text-sm font-semibold text-green-600`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 bg-green-500`}></span>
                </span>
                Live
              </span>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 rounded-full"></div>
        </div>
      </div>

      {/* Top Row: Key Metrics */}
      <div className="grid grid-cols-3 gap-6">
        {/* Overall Health Score */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="text-center">
            <p className={`text-xs mb-2 ${getTextColor('secondary')}`}>Overall System Health</p>
            <div className="text-6xl font-black text-purple-600 mb-2">
              {Math.round(systemHealth.reduce((acc, h) => acc + h.score, 0) / systemHealth.length)}%
            </div>
            <div className="flex items-center justify-center gap-2 text-xs">
              <ArrowUpRight className="w-4 h-4 text-green-600" />
              <span className="font-bold text-green-600">+4.2% MoM</span>
            </div>
          </div>
        </div>

        {/* Health Distribution */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <h3 className={`text-sm font-bold mb-4 ${getTextColor()}`}>Health Distribution</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs ${getTextColor('secondary')}`}>Excellent (85%+)</span>
                <span className={`text-xs font-bold text-green-600`}>
                  {phases.filter(p => p.healthScore >= 85).length} phases
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${(phases.filter(p => p.healthScore >= 85).length / phases.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs ${getTextColor('secondary')}`}>Good (75-84%)</span>
                <span className={`text-xs font-bold text-amber-600`}>
                  {phases.filter(p => p.healthScore >= 75 && p.healthScore < 85).length} phases
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500"
                  style={{ width: `${(phases.filter(p => p.healthScore >= 75 && p.healthScore < 85).length / phases.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs ${getTextColor('secondary')}`}>Needs Work (&lt;75%)</span>
                <span className={`text-xs font-bold text-red-600`}>
                  {phases.filter(p => p.healthScore < 75).length} phases
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${(phases.filter(p => p.healthScore < 75).length / phases.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* System Readiness */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <h3 className={`text-sm font-bold mb-4 ${getTextColor()}`}>System Readiness</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`text-xs ${getTextColor('secondary')}`}>Data Quality</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600" style={{ width: '94%' }}></div>
                </div>
                <span className={`text-xs font-bold ${getTextColor()}`}>94%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs ${getTextColor('secondary')}`}>Process Maturity</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: '85%' }}></div>
                </div>
                <span className={`text-xs font-bold ${getTextColor()}`}>85%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs ${getTextColor('secondary')}`}>Tech Integration</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-600" style={{ width: '82%' }}></div>
                </div>
                <span className={`text-xs font-bold ${getTextColor()}`}>82%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs ${getTextColor('secondary')}`}>Team Adoption</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600" style={{ width: '91%' }}></div>
                </div>
                <span className={`text-xs font-bold ${getTextColor()}`}>91%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Phase KPI Boxes */}
      <div className="grid grid-cols-4 gap-4">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className={`${getCardClasses()} rounded-lg shadow-lg border p-4 cursor-pointer hover:shadow-xl transition-shadow`}
            onClick={() => setSelectedPhase(phase.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                {React.createElement(phase.icon, { className: 'w-5 h-5 text-white' })}
              </div>
              <div className={`text-2xl font-black ${
                phase.healthScore >= 85 ? 'text-green-500' :
                phase.healthScore >= 75 ? 'text-amber-500' :
                'text-red-500'
              }`}>
                {phase.healthScore}%
              </div>
            </div>
            <h4 className={`text-sm font-bold ${getTextColor()}`}>{phase.name}</h4>
            <p className={`text-xs ${getTextColor('secondary')}`}>{phase.tagline}</p>
          </div>
        ))}
      </div>

      {/* Main Charts Row: Radar + Flywheel */}
      <div className="grid grid-cols-2 gap-6">
        {/* System Health Radar */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className={`text-lg font-bold ${getTextColor()}`}>8-Phase System Health</h3>
              <p className={`text-sm ${getTextColor('secondary')}`}>Current vs. Target benchmarks</p>
            </div>
            <Activity className="w-6 h-6 text-purple-600" />
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={systemHealth}>
              <PolarGrid stroke={isDarkMode ? '#4b5563' : '#d1d5db'} strokeWidth={1.5} />
              <PolarAngleAxis
                dataKey="phase"
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 11, fontWeight: 600 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 9 }}
                tickCount={6}
              />
              <Radar
                name="Current Score"
                dataKey="score"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
                strokeWidth={3}
              />
              <Radar
                name="Target"
                dataKey="target"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.15}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
            </RadarChart>
          </ResponsiveContainer>

          {/* Phase Health Mini-Cards */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {systemHealth.map((health, idx) => (
              <div key={idx} className={`p-2 rounded border-l-2 ${
                health.score >= 85 ? 'border-green-500 bg-green-500/10' :
                health.score >= 75 ? 'border-amber-500 bg-amber-500/10' :
                'border-red-500 bg-red-500/10'
              }`}>
                <div className={`text-xs font-bold ${getTextColor()}`}>{health.phase}</div>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-sm font-black ${
                    health.score >= 85 ? 'text-green-600' :
                    health.score >= 75 ? 'text-amber-600' :
                    'text-red-600'
                  }`}>{health.score}%</span>
                  <span className={`text-xs ${getTextColor('secondary')}`}>→ {health.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flywheel Velocity */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className={`text-lg font-bold ${getTextColor()}`}>Flywheel Velocity Trend</h3>
              <p className={`text-sm ${getTextColor('secondary')}`}>Cycle time, improvements & revenue impact</p>
            </div>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={flywheelVelocity}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
              <XAxis
                dataKey="quarter"
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 11 }}
              />
              <YAxis
                yAxisId="left"
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }}
                label={{ value: 'Days / Count', angle: -90, position: 'insideLeft', fontSize: 10 }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }}
                label={{ value: 'Revenue ($M)', angle: 90, position: 'insideRight', fontSize: 10 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="cycleTime"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: '#ef4444', r: 4 }}
                name="Cycle Time (days)"
              />
              <Bar yAxisId="left" dataKey="improvements" fill="#8b5cf6" name="Improvements" />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                fill="url(#revenueGrad)"
                name="Revenue ($M)"
              />
            </ComposedChart>
          </ResponsiveContainer>

          <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-green-900/20 border border-green-700/30' : 'bg-green-50 border border-green-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-bold text-green-600 mb-1`}>46% Cycle Time Improvement</p>
                <p className={`text-xs ${getTextColor('secondary')}`}>
                  From 120 days to 65 days • 29% revenue increase • 18 system improvements deployed
                </p>
              </div>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Phase Transition Success Rate */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className={`text-lg font-bold ${getTextColor()}`}>Phase Transition Success Rate</h3>
              <p className={`text-sm ${getTextColor('secondary')}`}>Smooth handoffs between sales phases</p>
            </div>
            <ArrowRightCircle className="w-6 h-6 text-blue-600" />
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { phase: 'P→V', rate: 92, target: 95 },
              { phase: 'V→D', rate: 88, target: 95 },
              { phase: 'D→N', rate: 94, target: 95 },
              { phase: 'N→P', rate: 86, target: 95 },
              { phase: 'P→C', rate: 91, target: 95 },
              { phase: 'C→W', rate: 89, target: 95 },
              { phase: 'W→R', rate: 93, target: 95 },
              { phase: 'R→P', rate: 87, target: 95 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
              <XAxis
                dataKey="phase"
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 11 }}
              />
              <YAxis
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }}
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="rate" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                {[92, 88, 94, 86, 91, 89, 93, 87].map((val, idx) => (
                  <Cell key={idx} fill={val >= 90 ? '#10b981' : val >= 85 ? '#f59e0b' : '#ef4444'} />
                ))}
              </Bar>
              <Bar dataKey="target" fill="#e5e7eb" fillOpacity={0.3} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/20 border border-blue-700/30' : 'bg-blue-50 border border-blue-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-bold text-blue-600 mb-1`}>90% Average Transition Rate</p>
                <p className={`text-xs ${getTextColor('secondary')}`}>
                  5 phases above target • Focus on Validation→Discovery (88%) and Negotiation→Proposal (86%)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Optimization Impact */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className={`text-lg font-bold ${getTextColor()}`}>System Optimization Impact</h3>
              <p className={`text-sm ${getTextColor('secondary')}`}>Business outcomes from health improvements</p>
            </div>
            <BarChart3 className="w-6 h-6 text-purple-600" />
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { metric: 'Win Rate', current: 34, potential: 41 },
              { metric: 'Cycle Time', current: 65, potential: 52 },
              { metric: 'Deal Size', current: 285, potential: 340 },
              { metric: 'Forecast Acc.', current: 82, potential: 92 },
              { metric: 'Rep Prod.', current: 2.8, potential: 3.6 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
              <XAxis
                dataKey="metric"
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }}
              />
              <YAxis
                stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280', fontSize: 10 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="current" fill="#8b5cf6" name="Current" radius={[4, 4, 0, 0]} />
              <Bar dataKey="potential" fill="#10b981" name="Optimized" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border border-purple-700/30' : 'bg-purple-50 border border-purple-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-xs font-bold text-purple-600 mb-1`}>$4.2M Revenue Opportunity</p>
                <p className={`text-xs ${getTextColor('secondary')}`}>
                  Optimizing system health to 95% target unlocks 20% win rate gain, 19% faster cycles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Summary */}
      <div className={`${getCardClasses()} rounded-lg shadow-xl border p-6`}>
        <div className="grid grid-cols-3 gap-6">
          {/* Health Status Summary */}
          <div>
            <p className={`text-xs mb-2 ${getTextColor('secondary')}`}>Health Status</p>
            <div className={`text-2xl font-black text-purple-600 mb-2`}>
              {Math.round(systemHealth.reduce((acc, h) => acc + h.score, 0) / systemHealth.length)}%
            </div>
            <p className={`text-xs ${getTextColor('secondary')}`}>
              {phases.filter(p => p.healthScore >= 85).length} phases excellent • {phases.filter(p => p.healthScore >= 75 && p.healthScore < 85).length} good • {phases.filter(p => p.healthScore < 75).length} need work
            </p>
          </div>

          {/* Improvement Opportunity */}
          <div>
            <p className={`text-xs mb-2 ${getTextColor('secondary')}`}>Improvement Opportunity</p>
            <div className={`text-2xl font-black text-amber-600 mb-2`}>
              {Math.round((95 - (systemHealth.reduce((acc, h) => acc + h.score, 0) / systemHealth.length)))}pts
            </div>
            <p className={`text-xs ${getTextColor('secondary')}`}>
              Focus on {phases.sort((a, b) => a.healthScore - b.healthScore)[0].name} and {phases.sort((a, b) => a.healthScore - b.healthScore)[1].name} for maximum impact
            </p>
          </div>

          {/* System Impact */}
          <div>
            <p className={`text-xs mb-2 ${getTextColor('secondary')}`}>System Impact</p>
            <div className={`text-2xl font-black text-green-600 mb-2`}>+29%</div>
            <p className={`text-xs ${getTextColor('secondary')}`}>
              Strong system health correlates with 46% faster cycle times and 20% higher win rates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;
