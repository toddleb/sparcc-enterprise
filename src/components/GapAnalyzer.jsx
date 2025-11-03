import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RefreshCw, Compass, Zap, Target, TrendingUp, Database,
  Lightbulb, Users, BarChart3, AlertTriangle, ArrowRight, CheckCircle
} from 'lucide-react';

const GapAnalyzer = ({ isDarkMode = true }) => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [hoveredConnection, setHoveredConnection] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);

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

  // Comprehensive gap data - connections between phases
  const connections = [
    {
      from: 'gtm',
      to: 'data',
      gap: 'Territory assignments not tracked in CRM',
      impact: 'high',
      priority: 'urgent',
      consequence: 'Cannot measure territory balance or rep coverage accurately',
      recommendation: 'Create custom territory field in CRM and enforce data entry',
      metrics: { current: '45% tracked', target: '100%' }
    },
    {
      from: 'gtm',
      to: 'enablement',
      gap: 'West territory 35% larger than average',
      impact: 'high',
      priority: 'urgent',
      consequence: '87 reps need discovery training but territory size prevents coaching time',
      recommendation: 'Rebalance West territory in Q2 OR hire 3 additional managers',
      metrics: { current: '35% imbalance', target: '±15%' }
    },
    {
      from: 'data',
      to: 'insights',
      gap: 'Win/loss reasons not captured in 68% of closed deals',
      impact: 'high',
      priority: 'urgent',
      consequence: 'Cannot identify competitive weaknesses or product gaps',
      recommendation: 'Make win/loss survey mandatory in deal closure workflow',
      metrics: { current: '32% captured', target: '90%+' }
    },
    {
      from: 'enablement',
      to: 'spm',
      gap: 'Reps trained on consultative selling but comp rewards volume',
      impact: 'high',
      priority: 'urgent',
      consequence: 'Training-compensation misalignment, reps revert to transactional selling',
      recommendation: 'Add deal size multiplier to comp plan (2x credit for deals >$100K)',
      metrics: { current: 'Volume only', target: 'Volume + Size' }
    },
    {
      from: 'effectiveness',
      to: 'spm',
      gap: 'Top performers hitting commission caps',
      impact: 'high',
      priority: 'urgent',
      consequence: '14 reps projected to hit 200% cap, may sandbag Q4 deals',
      recommendation: 'Increase cap to 250% OR remove cap with board approval',
      metrics: { current: '14 reps capped', target: '0 reps' }
    },
    {
      from: 'customer-success',
      to: 'gtm',
      gap: 'Churn rate 23% higher in West region but not in territory planning',
      impact: 'high',
      priority: 'urgent',
      consequence: 'Assigning aggressive growth quotas to regions with retention issues',
      recommendation: 'Factor NRR into territory quota allocation (reduce quota 10% where NRR <90%)',
      metrics: { current: 'Not factored', target: 'NRR-adjusted' }
    },
    {
      from: 'planning',
      to: 'customer-success',
      gap: 'Expansion revenue forecasted but CS not staffed for it',
      impact: 'high',
      priority: 'urgent',
      consequence: '$2.4M expansion target but only 3 CSMs to drive upsells',
      recommendation: 'Hire 2 additional CSMs or reduce expansion forecast by 40%',
      metrics: { current: '3 CSMs', target: '5 CSMs' }
    },
    {
      from: 'gtm',
      to: 'planning',
      gap: 'Territory revenue potential outdated (using 2023 TAM data)',
      impact: 'medium',
      priority: 'high',
      consequence: 'Quotas assigned based on stale market data, misaligned targets',
      recommendation: 'Refresh TAM analysis quarterly, not annually',
      metrics: { current: 'Annual', target: 'Quarterly' }
    },
    {
      from: 'data',
      to: 'effectiveness',
      gap: 'Activity logging inconsistent across teams',
      impact: 'medium',
      priority: 'high',
      consequence: 'Pipeline coverage metrics unreliable, coaching decisions flawed',
      recommendation: 'Implement auto-logging via email/calendar integration',
      metrics: { current: '67% compliance', target: '95%+' }
    },
    {
      from: 'enablement',
      to: 'effectiveness',
      gap: 'Content engagement high but win rate below target',
      impact: 'medium',
      priority: 'high',
      consequence: 'Reps consuming content but not applying skills in deals',
      recommendation: 'Add role-play certification before allowing reps to progress pipeline',
      metrics: { current: '32.5% win rate', target: '35%' }
    },
    {
      from: 'insights',
      to: 'gtm',
      gap: 'Competitive losses in healthcare vertical not reflected in territory design',
      impact: 'medium',
      priority: 'high',
      consequence: 'Assigning enterprise reps to healthcare accounts they can\'t win',
      recommendation: 'Create specialized healthcare territory with industry-expert reps',
      metrics: { current: '28% win rate', target: '45%+' }
    },
    {
      from: 'effectiveness',
      to: 'customer-success',
      gap: 'No handoff SLA between Sales and CS',
      impact: 'medium',
      priority: 'high',
      consequence: '23% of new customers report "fell through the cracks" after signing',
      recommendation: 'Implement 48-hour handoff SLA with joint kickoff call',
      metrics: { current: '23% complaints', target: '<5%' }
    },
    {
      from: 'customer-success',
      to: 'insights',
      gap: 'Customer feedback not shared with Product/Marketing',
      impact: 'medium',
      priority: 'high',
      consequence: 'Roadmap decisions ignore what would reduce churn',
      recommendation: 'Monthly CS → Product feedback session with data',
      metrics: { current: '0/year', target: '12/year' }
    },
    {
      from: 'spm',
      to: 'data',
      gap: 'Payout calculations delayed 8 days due to manual data entry',
      impact: 'medium',
      priority: 'high',
      consequence: 'Reps don\'t trust comp system, constant Slack questions',
      recommendation: 'Automate commission calculation with direct CRM integration',
      metrics: { current: '8-day delay', target: 'Real-time' }
    },
    {
      from: 'planning',
      to: 'gtm',
      gap: 'Annual planning cycle but market shifts quarterly',
      impact: 'high',
      priority: 'high',
      consequence: 'Locked into outdated capacity plan for 12 months',
      recommendation: 'Move to rolling 4-quarter planning with quarterly adjustments',
      metrics: { current: 'Annual', target: 'Quarterly rolling' }
    }
  ];

  // Recommended Actions
  const recommendedActions = [
    {
      priority: 1,
      action: 'Rebalance West Coast territory',
      owner: 'GTM Strategy',
      impactedPhases: ['GTM', 'Enablement', 'Effectiveness'],
      effort: 'high',
      impact: 'high',
      timeline: 'Q2 2024',
      kpiImpact: [
        { kpi: 'Territory Balance', before: '92%', after: '97%', change: '+5%' },
        { kpi: 'Coaching Capacity', before: '73%', after: '89%', change: '+16%' }
      ]
    },
    {
      priority: 2,
      action: 'Implement mandatory win/loss capture',
      owner: 'Sales Data & Insights',
      impactedPhases: ['Data', 'Insights', 'Effectiveness'],
      effort: 'medium',
      impact: 'high',
      timeline: 'Q1 2024',
      kpiImpact: [
        { kpi: 'Win/Loss Capture', before: '32%', after: '90%', change: '+58%' },
        { kpi: 'Competitive Intel', before: '78%', after: '95%', change: '+17%' }
      ]
    },
    {
      priority: 3,
      action: 'Increase commission cap to 250%',
      owner: 'SPM',
      impactedPhases: ['SPM', 'Effectiveness'],
      effort: 'medium',
      impact: 'high',
      timeline: 'Q1 2024',
      kpiImpact: [
        { kpi: 'Revenue at Risk', before: '$2.4M', after: '$0', change: '100%' },
        { kpi: 'Top Rep Retention', before: '87%', after: '95%', change: '+8%' }
      ]
    },
    {
      priority: 4,
      action: 'Add deal size multiplier to comp plan',
      owner: 'SPM & Enablement',
      impactedPhases: ['SPM', 'Enablement', 'Effectiveness'],
      effort: 'medium',
      impact: 'high',
      timeline: 'Q2 2024',
      kpiImpact: [
        { kpi: 'Avg Deal Size', before: '$68K', after: '$94K', change: '+38%' },
        { kpi: 'Training Effectiveness', before: '76%', after: '89%', change: '+13%' }
      ]
    }
  ];

  // Calculate position for phase nodes in a circle
  const centerX = 450;
  const centerY = 450;
  const radius = 320;

  const getNodePosition = (position) => {
    const angle = (position - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  // Get connections for a specific phase
  const getPhaseConnections = (phaseId) => {
    return connections.filter(c => c.from === phaseId || c.to === phaseId);
  };

  // Calculate connection stats
  const getConnectionStats = () => {
    const urgent = connections.filter(c => c.priority === 'urgent').length;
    const high = connections.filter(c => c.priority === 'high').length;
    const medium = connections.filter(c => c.priority === 'medium').length;
    const highImpact = connections.filter(c => c.impact === 'high').length;

    return { urgent, high, medium, highImpact, total: connections.length };
  };

  const stats = getConnectionStats();

  return (
    <div className={`min-h-screen ${getBgColor()} p-6 space-y-6`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <RefreshCw
              className={`w-8 h-8 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}
              style={{ animation: 'spin 4s linear infinite' }}
            />
            <h1 className={`text-4xl font-black ${getTextColor()}`}>
              Gap Analyzer
            </h1>
            <div className={`px-3 py-1 rounded-full ${
              isDarkMode ? 'bg-red-900/30' : 'bg-red-100'
            }`}>
              <span className={`flex items-center gap-2 text-sm font-semibold text-red-600`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 bg-red-500`}></span>
                </span>
                360° Live
              </span>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 rounded-full"></div>
        </div>
      </div>

      {/* Top Row: Key Metrics */}
      <div className="grid grid-cols-3 gap-6">
        {/* Total Connections */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <div className="text-center">
            <p className={`text-xs mb-2 ${getTextColor('secondary')}`}>Total Connections</p>
            <div className="text-6xl font-black text-purple-600 mb-2">
              {stats.total}
            </div>
            <div className="flex items-center justify-center gap-2 text-xs">
              <span className={`font-bold text-red-600`}>{stats.urgent} Urgent</span>
              <span className={getTextColor('secondary')}>•</span>
              <span className={`font-bold text-orange-600`}>{stats.high} High</span>
            </div>
          </div>
        </div>

        {/* Priority Distribution */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <h3 className={`text-sm font-bold mb-4 ${getTextColor()}`}>Priority Distribution</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs ${getTextColor('secondary')}`}>Urgent</span>
                <span className={`text-xs font-bold text-red-600`}>{stats.urgent} gaps</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${(stats.urgent / stats.total) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs ${getTextColor('secondary')}`}>High</span>
                <span className={`text-xs font-bold text-orange-600`}>{stats.high} gaps</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500"
                  style={{ width: `${(stats.high / stats.total) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs ${getTextColor('secondary')}`}>Medium</span>
                <span className={`text-xs font-bold text-amber-600`}>{stats.medium} gaps</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500"
                  style={{ width: `${(stats.medium / stats.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Gap Impact Metrics */}
        <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
          <h3 className={`text-sm font-bold mb-4 ${getTextColor()}`}>Gap Impact Metrics</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`text-xs ${getTextColor('secondary')}`}>High Impact Gaps</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600" style={{ width: `${(stats.highImpact / stats.total) * 100}%` }}></div>
                </div>
                <span className={`text-xs font-bold text-purple-600`}>{stats.highImpact}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs ${getTextColor('secondary')}`}>Critical Paths</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600" style={{ width: '38%' }}></div>
                </div>
                <span className={`text-xs font-bold text-red-600`}>3</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs ${getTextColor('secondary')}`}>Avg. Gap Severity</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-600" style={{ width: '72%' }}></div>
                </div>
                <span className={`text-xs font-bold text-orange-600`}>7.2/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gap Analyzer Network Diagram - Full Width */}
      <div className={`${getCardClasses()} rounded-lg shadow-xl border p-6`}>
        <h3 className={`text-lg font-bold mb-4 ${getTextColor()}`}>System Gaps & Dependencies</h3>

          <svg width="900" height="900" className="mx-auto">
            {/* Draw connections first (behind nodes) */}
            {connections.map((conn, idx) => {
              const fromPhase = phases.find(p => p.id === conn.from);
              const toPhase = phases.find(p => p.id === conn.to);
              if (!fromPhase || !toPhase) return null;

              const fromPos = getNodePosition(fromPhase.position);
              const toPos = getNodePosition(toPhase.position);

              const isHovered = hoveredConnection === idx;
              const isSelected = selectedConnection?.from === conn.from && selectedConnection?.to === conn.to;
              const isPhaseSelected = selectedPhase === conn.from || selectedPhase === conn.to;

              // Color based on priority
              let strokeColor = '#94a3b8';
              if (conn.priority === 'urgent') strokeColor = '#ef4444';
              else if (conn.priority === 'high') strokeColor = '#f97316';
              else if (conn.priority === 'medium') strokeColor = '#fbbf24';

              const strokeWidth = isHovered || isSelected ? 4 : isPhaseSelected ? 2.5 : 1.5;
              const opacity = isHovered || isSelected || isPhaseSelected || !selectedPhase ? 1 : 0.15;

              return (
                <g key={idx}>
                  <line
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={toPos.x}
                    y2={toPos.y}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    opacity={opacity}
                    strokeDasharray={conn.impact === 'high' ? '0' : '8,4'}
                    onMouseEnter={() => setHoveredConnection(idx)}
                    onMouseLeave={() => setHoveredConnection(null)}
                    onClick={() => setSelectedConnection(conn)}
                    style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                  />
                  <circle
                    cx={toPos.x + (fromPos.x - toPos.x) * 0.18}
                    cy={toPos.y + (fromPos.y - toPos.y) * 0.18}
                    r={isHovered || isSelected ? 6 : 4}
                    fill={strokeColor}
                    opacity={opacity}
                    onMouseEnter={() => setHoveredConnection(idx)}
                    onMouseLeave={() => setHoveredConnection(null)}
                    onClick={() => setSelectedConnection(conn)}
                    style={{ cursor: 'pointer' }}
                  />
                </g>
              );
            })}

            {/* Draw phase nodes */}
            {phases.map((phase) => {
              const pos = getNodePosition(phase.position);
              const Icon = phase.icon;
              const isSelected = selectedPhase === phase.id;
              const connCount = getPhaseConnections(phase.id).length;

              return (
                <g key={phase.id}>
                  {isSelected && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={65}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth={4}
                      opacity={0.6}
                    />
                  )}

                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={50}
                    fill={`url(#gradient-${phase.id})`}
                    onMouseEnter={() => setSelectedPhase(phase.id)}
                    onMouseLeave={() => setSelectedPhase(null)}
                    style={{
                      cursor: 'pointer',
                      filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.2))',
                      transition: 'all 0.3s'
                    }}
                  />

                  <defs>
                    <linearGradient id={`gradient-${phase.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: phase.gradientColors[0] }} />
                      <stop offset="100%" style={{ stopColor: phase.gradientColors[1] }} />
                    </linearGradient>
                  </defs>

                  <circle
                    cx={pos.x + 32}
                    cy={pos.y - 32}
                    r={14}
                    fill={connCount > 4 ? '#ef4444' : connCount > 2 ? '#f59e0b' : '#10b981'}
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                  />
                  <text
                    x={pos.x + 32}
                    y={pos.y - 32}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-bold fill-white"
                  >
                    {connCount}
                  </text>

                  <circle
                    cx={pos.x}
                    cy={pos.y + 68}
                    r={16}
                    fill={isDarkMode ? '#1f2937' : '#ffffff'}
                    stroke={phase.healthScore >= 85 ? '#10b981' : phase.healthScore >= 75 ? '#f59e0b' : '#ef4444'}
                    strokeWidth={3}
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 68}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`text-xs font-bold ${
                      phase.healthScore >= 85 ? 'fill-green-500' :
                      phase.healthScore >= 75 ? 'fill-amber-500' :
                      'fill-red-500'
                    }`}
                  >
                    {phase.healthScore}
                  </text>

                  <text
                    x={pos.x}
                    y={pos.y + 95}
                    textAnchor="middle"
                    className={`text-sm font-bold ${getTextColor()}`}
                    style={{ pointerEvents: 'none' }}
                  >
                    {phase.name}
                  </text>

                  <text
                    x={pos.x}
                    y={pos.y + 110}
                    textAnchor="middle"
                    className={`text-xs ${getTextColor('secondary')}`}
                    style={{ pointerEvents: 'none' }}
                  >
                    {phase.tagline}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-10 h-2 bg-red-500 rounded"></div>
                <span className={getTextColor('secondary')}>Urgent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-2 bg-orange-500 rounded"></div>
                <span className={getTextColor('secondary')}>High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-2 bg-amber-500 rounded"></div>
                <span className={getTextColor('secondary')}>Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">5</div>
                <span className={getTextColor('secondary')}>Gap Count</span>
              </div>
            </div>
          </div>
      </div>

      {/* Selected Connection Details */}
      {selectedConnection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-6"
        >
          <div className={`col-span-2 ${getCardClasses()} rounded-lg shadow-xl border p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-bold ${getTextColor()}`}>Gap Details</h3>
              <button
                onClick={() => setSelectedConnection(null)}
                className={`px-3 py-1 rounded ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className={`text-xs font-semibold mb-2 ${getTextColor('secondary')}`}>Connection Path</div>
                  <div className="flex items-center gap-3">
                    <div className={`px-3 py-2 rounded-lg bg-gradient-to-br ${phases.find(p => p.id === selectedConnection.from)?.color}`}>
                      <span className="text-xs font-bold text-white">
                        {phases.find(p => p.id === selectedConnection.from)?.name}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                    <div className={`px-3 py-2 rounded-lg bg-gradient-to-br ${phases.find(p => p.id === selectedConnection.to)?.color}`}>
                      <span className="text-xs font-bold text-white">
                        {phases.find(p => p.id === selectedConnection.to)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={`text-xs font-semibold mb-2 ${getTextColor('secondary')}`}>Priority & Impact</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-3 py-1.5 rounded-lg font-bold ${
                      selectedConnection.priority === 'urgent' ? 'bg-red-600 text-white' :
                      selectedConnection.priority === 'high' ? 'bg-orange-600 text-white' :
                      'bg-amber-600 text-white'
                    }`}>
                      {selectedConnection.priority.toUpperCase()}
                    </span>
                    <span className={`text-xs px-3 py-1.5 rounded-lg font-semibold ${
                      selectedConnection.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      selectedConnection.impact === 'medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {selectedConnection.impact} impact
                    </span>
                  </div>
                </div>

                <div>
                  <div className={`text-xs font-semibold mb-2 ${getTextColor('secondary')}`}>Current vs Target</div>
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Current</div>
                        <div className="text-sm font-bold text-red-500">{selectedConnection.metrics.current}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-500" />
                      <div>
                        <div className="text-xs text-gray-500">Target</div>
                        <div className="text-sm font-bold text-green-500">{selectedConnection.metrics.target}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className={`text-xs font-semibold mb-2 ${getTextColor('secondary')}`}>Gap Identified</div>
                  <h4 className={`text-base font-bold ${getTextColor()}`}>{selectedConnection.gap}</h4>
                </div>

                <div>
                  <div className={`text-xs font-semibold mb-2 ${getTextColor('secondary')}`}>Consequence</div>
                  <p className={`text-sm ${getTextColor()}`}>{selectedConnection.consequence}</p>
                </div>

                <div>
                  <div className={`text-xs font-semibold mb-2 ${getTextColor('secondary')}`}>Recommended Action</div>
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-green-900/20 border border-green-700/30' : 'bg-green-50 border border-green-200'}`}>
                    <p className={`text-sm font-semibold ${getTextColor()}`}>{selectedConnection.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`${getCardClasses()} rounded-lg shadow-lg border p-4`}>
              <h4 className={`text-sm font-bold mb-3 ${getTextColor()}`}>Affected Phases</h4>
              <div className="space-y-2">
                {[selectedConnection.from, selectedConnection.to].map(phaseId => {
                  const phase = phases.find(p => p.id === phaseId);
                  return (
                    <div key={phaseId} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${phase?.color} flex items-center justify-center`}>
                          {React.createElement(phase?.icon, { className: 'w-4 h-4 text-white' })}
                        </div>
                        <span className={`text-sm font-bold ${getTextColor()}`}>{phase?.name}</span>
                      </div>
                      <div className="text-xs space-y-1">
                        {phase?.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className={getTextColor('secondary')}>{metric.label}</span>
                            <span className={`font-bold ${
                              metric.status === 'good' ? 'text-green-500' : 'text-orange-500'
                            }`}>{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Recommended Actions */}
      <div className={`${getCardClasses()} rounded-lg shadow-lg border p-6`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className={`text-lg font-bold ${getTextColor()}`}>Recommended Actions (Prioritized)</h3>
            <p className={`text-xs ${getTextColor('secondary')}`}>Cross-functional initiatives to close gaps</p>
          </div>
          <div>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {recommendedActions.map((action, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border-l-4 ${
                action.priority === 1 ? `border-red-500 ${isDarkMode ? 'bg-red-900/10' : 'bg-red-50'}` :
                action.priority === 2 ? `border-orange-500 ${isDarkMode ? 'bg-orange-900/10' : 'bg-orange-50'}` :
                action.priority === 3 ? `border-amber-500 ${isDarkMode ? 'bg-amber-900/10' : 'bg-amber-50'}` :
                `border-blue-500 ${isDarkMode ? 'bg-blue-900/10' : 'bg-blue-50'}`
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white ${
                    action.priority === 1 ? 'bg-red-600' :
                    action.priority === 2 ? 'bg-orange-600' :
                    action.priority === 3 ? 'bg-amber-600' :
                    'bg-blue-600'
                  }`}>
                    {action.priority}
                  </div>
                  <div>
                    <h4 className={`font-bold ${getTextColor()}`}>{action.action}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        {action.owner}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        action.effort === 'high' ? 'bg-red-500/20 text-red-600' :
                        action.effort === 'medium' ? 'bg-amber-500/20 text-amber-600' :
                        'bg-green-500/20 text-green-600'
                      }`}>
                        {action.effort} effort
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        action.impact === 'high' ? 'bg-green-500/20 text-green-600' :
                        'bg-blue-500/20 text-blue-600'
                      }`}>
                        {action.impact} impact
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${getTextColor()}`}>{action.timeline}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {action.kpiImpact.map((kpi, kIdx) => (
                  <div key={kIdx} className={`p-2 rounded text-xs ${isDarkMode ? 'bg-gray-700/50' : 'bg-white'}`}>
                    <div className={`font-semibold mb-1 ${getTextColor('secondary')}`}>{kpi.kpi}</div>
                    <div className="flex items-center justify-between">
                      <span className={getTextColor()}>{kpi.before}</span>
                      <ArrowRight className="w-3 h-3 text-blue-500" />
                      <span className="font-bold text-green-500">{kpi.after}</span>
                      <span className="font-bold text-green-500">({kpi.change})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={`${getCardClasses()} rounded-lg shadow-xl border p-6`}>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20 border border-purple-700/30' : 'bg-purple-50 border border-purple-200'}`}>
          <div className="flex items-center gap-3 mb-3">
            <RefreshCw className="w-6 h-6 text-purple-600" />
            <span className={`text-lg font-bold ${getTextColor()}`}>Close Gaps to Accelerate the Flywheel</span>
          </div>
          <p className={`text-sm ${getTextColor('secondary')} mb-3`}>
            Each gap represents a friction point slowing your revenue engine. Address urgent and high-priority gaps first
            to see immediate improvements in cycle time, conversion rates, and team productivity.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className={`text-2xl font-black text-red-600`}>{stats.urgent}</div>
              <div className={`text-xs ${getTextColor('secondary')}`}>Urgent Gaps</div>
            </div>
            <div>
              <div className={`text-2xl font-black text-purple-600`}>46%</div>
              <div className={`text-xs ${getTextColor('secondary')}`}>Faster When Fixed</div>
            </div>
            <div>
              <div className={`text-2xl font-black text-green-600`}>+29%</div>
              <div className={`text-xs ${getTextColor('secondary')}`}>Revenue Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GapAnalyzer;
