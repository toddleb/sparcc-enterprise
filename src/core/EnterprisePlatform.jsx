import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Building2, DollarSign, TrendingUp, Target, ClipboardList,
  Settings, Zap, Sun, Moon, Home, Megaphone, Package, Heart,
  Server, Cog, Scale, BarChart3, Users, Activity, RefreshCw, AlertTriangle,
  Shield, Leaf, Handshake, Star, Code, Bot, CheckCircle, GraduationCap,
  Sparkles
} from 'lucide-react';
import { domainRegistry, getModulesByDomainAndLayer } from '../config/domainRegistry';
import { fullSpectrumGradient, systemColors } from '../config/colorSystem';
import { pillarRegistry, getDomainsByPillar } from '../config/pillarSystem';
import { toast } from 'sonner';
import SystemHealth from '../components/SystemHealth';
import CommandCenterDashboard from '../components/CommandCenterDashboard';
import GapAnalyzer from '../components/GapAnalyzer';
import LiquidSalesMarketplaceEnhanced from '../components/LiquidSalesMarketplaceEnhanced';

const EnterprisePlatform = () => {
  const [activePillar, setActivePillar] = useState(null); // null shows all domains
  const [activeDomain, setActiveDomain] = useState('corporate');
  const [activeLayer, setActiveLayer] = useState('strategy');
  const [activeModule, setActiveModule] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [systemView, setSystemView] = useState(null); // null, 'health', 'command-center', 'gaps', 'analytics', 'liquidsales'

  // Apply dark mode class to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const domain = domainRegistry[activeDomain];
  const layer = domain?.layers[activeLayer];
  const modules = getModulesByDomainAndLayer(activeDomain, activeLayer);

  // Get filtered domains based on active pillar
  const visibleDomains = activePillar
    ? Object.values(domainRegistry).filter(d => getDomainsByPillar(activePillar).includes(d.id))
    : Object.values(domainRegistry);

  const handlePillarChange = (pillarId) => {
    if (activePillar === pillarId) {
      // Toggle off if clicking the same pillar
      setActivePillar(null);
      toast.success('Showing all domains');
    } else {
      setActivePillar(pillarId);
      const pillar = pillarRegistry[pillarId];
      toast.success(`Filtered to ${pillar.name}`);
    }
  };

  const handleDomainChange = (domainId) => {
    setActiveDomain(domainId);
    setActiveLayer('strategy'); // Reset to strategy layer
    setActiveModule(null);
    setSystemView(null); // Clear system view when switching domains
    toast.success(`Switched to ${domainRegistry[domainId].name}`);
  };

  const handleLayerChange = (layerId) => {
    setActiveLayer(layerId);
    setActiveModule(null);
    toast.success(`Viewing ${domain.layers[layerId].name}`);
  };

  const handleModuleClick = (module) => {
    setActiveModule(module);
    setSystemView(null); // Clear system view when module is selected
    toast.success(`Opened ${module.name}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'In Design': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Planned': return 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      Building2, DollarSign, TrendingUp, Target, ClipboardList,
      Settings, Zap, Megaphone, Package, Heart, Server, Cog, Scale,
      BarChart3, Users, Shield, Leaf, Handshake, Star, Code, Bot,
      CheckCircle, GraduationCap, RefreshCw
    };
    const Icon = icons[iconName] || Building2;
    return Icon;
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        {/* Top Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-4xl font-black bg-gradient-to-r ${fullSpectrumGradient} bg-clip-text text-transparent mb-1`}>
                  SPARCC Enterprise
                </h1>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-semibold rounded-full">
                  V2.0 - Multi-Domain
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Pillar Buttons */}
                {Object.values(pillarRegistry).map((pillar) => {
                  const PillarIcon = getIcon(pillar.icon);
                  return (
                    <motion.button
                      key={pillar.id}
                      onClick={() => handlePillarChange(pillar.id)}
                      className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all min-w-[180px] border-2 ${
                        activePillar === pillar.id
                          ? `bg-gradient-to-r ${pillar.gradient} text-white shadow-2xl border-white/50`
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-xl border-gray-300 dark:border-gray-600'
                      }`}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PillarIcon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-base font-bold whitespace-nowrap">{pillar.shortName}</span>
                    </motion.button>
                  );
                })}

                {/* Separator */}
                <div className="h-10 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

                {/* System View Buttons */}
                <motion.button
                  onClick={() => { setSystemView('health'); setActiveModule(null); }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all min-w-[180px] border-2 ${
                    systemView === 'health'
                      ? 'bg-green-500 text-white shadow-2xl border-green-400'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-xl border-gray-300 dark:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Activity className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-bold whitespace-nowrap">System Health</span>
                </motion.button>

                <motion.button
                  onClick={() => { setSystemView('command-center'); setActiveModule(null); }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all min-w-[200px] border-2 ${
                    systemView === 'command-center'
                      ? 'bg-violet-500 text-white shadow-2xl border-violet-400'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-xl border-gray-300 dark:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ClipboardList className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-bold whitespace-nowrap">Command Center</span>
                </motion.button>

                <motion.button
                  onClick={() => { setSystemView('analytics'); setActiveModule(null); }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all min-w-[220px] border-2 ${
                    systemView === 'analytics'
                      ? 'bg-orange-500 text-white shadow-2xl border-orange-400'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-xl border-gray-300 dark:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BarChart3 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-bold whitespace-nowrap">Enterprise Analytics</span>
                </motion.button>

                <motion.button
                  onClick={() => { setSystemView('gaps'); setActiveModule(null); }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all min-w-[180px] border-2 ${
                    systemView === 'gaps'
                      ? 'bg-red-500 text-white shadow-2xl border-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-xl border-gray-300 dark:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-bold whitespace-nowrap">Gap Analyzer</span>
                </motion.button>

                <motion.button
                  onClick={() => { setSystemView('liquidsales'); setActiveModule(null); }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all min-w-[180px] border-2 ${
                    systemView === 'liquidsales'
                      ? 'bg-cyan-500 text-white shadow-2xl border-cyan-400'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-xl border-gray-300 dark:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-bold whitespace-nowrap">LiquidSales</span>
                </motion.button>

                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Domain Navigation */}
          <div className={`px-6 py-3 bg-gradient-to-r ${fullSpectrumGradient} flex items-center justify-center gap-4 overflow-x-auto`}>
            {visibleDomains.map((d) => {
              const Icon = getIcon(d.icon);
              return (
                <motion.button
                  key={d.id}
                  onClick={() => handleDomainChange(d.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all min-w-[220px] ${
                    activeDomain === d.id
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-2xl border-2 border-white/50'
                      : 'bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 hover:shadow-xl border-2 border-white/20'
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-bold whitespace-nowrap">{d.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Layer Navigation */}
          {domain && (
            <div className={`px-6 py-3 bg-gradient-to-r ${domain.gradient} flex items-center gap-2 overflow-x-auto`}>
              {Object.values(domain.layers).map((l) => {
                const Icon = getIcon(l.icon);
                return (
                  <motion.button
                    key={l.id}
                    onClick={() => handleLayerChange(l.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                      activeLayer === l.id
                        ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-semibold">{l.name}</span>
                    {l.aiEnabled && <Zap className="w-3 h-3 text-yellow-300" />}
                  </motion.button>
                );
              })}
            </div>
          )}
        </header>

        {/* Main Content Area */}
        <div className="flex h-[calc(100vh-220px)]">
          {/* Conditional Left Sidebar - Only show for module view */}
          {!systemView && (
            <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
              <div className={`p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r ${domain?.gradient} sticky top-0`}>
                <h2 className="text-lg font-bold text-white">{layer?.name}</h2>
                <p className="text-sm text-white/80 mt-1">{modules.length} modules</p>
              </div>

              <div className="p-4 space-y-2">
                {modules.map((module) => (
                  <motion.button
                    key={module.id}
                    onClick={() => handleModuleClick(module)}
                    className={`w-full p-4 rounded-lg text-left transition-all border ${
                      activeModule?.id === module.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                        : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-6 h-6 flex items-center justify-center rounded bg-gradient-to-br ${domain?.gradient} text-white text-sm font-bold`}>
                            {module.id}
                          </span>
                          <h3 className="font-semibold">{module.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {module.description}
                        </p>
                        {module.integrations && module.integrations.length > 0 && (
                          <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                            🔗 {module.integrations.length} integrations
                          </div>
                        )}
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${getStatusColor(module.status)}`}>
                        {module.status}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Center - System View or Module Detail View */}
          <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            {systemView === 'health' ? (
              <SystemHealth isDarkMode={isDarkMode} />
            ) : systemView === 'command-center' ? (
              <CommandCenterDashboard isDarkMode={isDarkMode} />
            ) : systemView === 'analytics' ? (
              <div className="p-8">
                <div className={`bg-gradient-to-r ${systemColors.analytics.gradient} rounded-lg p-6 text-white mb-6`}>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-12 h-12" />
                    <div>
                      <h1 className="text-3xl font-bold">Enterprise Analytics</h1>
                      <p className="text-white/90 mt-1">Cross-functional analytics and business intelligence</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400">
                    📊 Enterprise Analytics dashboard will be implemented here with cross-domain KPIs,
                    data quality metrics, BI dashboards, and predictive analytics.
                  </p>
                </div>
              </div>
            ) : systemView === 'gaps' ? (
              <GapAnalyzer isDarkMode={isDarkMode} />
            ) : systemView === 'liquidsales' ? (
              <LiquidSalesMarketplaceEnhanced isDarkMode={isDarkMode} />
            ) : activeModule ? (
              <div className="p-8">
                <div className={`bg-gradient-to-r ${domain?.gradient} rounded-lg p-6 text-white mb-6`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 text-xl font-bold">
                          {activeModule.id}
                        </span>
                        <h1 className="text-3xl font-bold">{activeModule.name}</h1>
                      </div>
                      <p className="text-white/90 text-lg">{activeModule.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      activeModule.status === 'Ready' ? 'bg-green-500' :
                      activeModule.status === 'In Design' ? 'bg-blue-500' :
                      'bg-gray-500'
                    }`}>
                      {activeModule.status}
                    </span>
                  </div>
                </div>

                {/* KPIs */}
                {activeModule.kpis && activeModule.kpis.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Key Performance Indicators</h2>
                    <div className="grid grid-cols-3 gap-4">
                      {activeModule.kpis.map((kpi, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                          <div className="text-sm text-gray-600 dark:text-gray-400">{kpi.label}</div>
                          <div className="text-2xl font-bold mt-1">{kpi.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Integrations */}
                {activeModule.integrations && activeModule.integrations.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Cross-Domain Integrations</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <div className="space-y-3">
                        {activeModule.integrations.map((integration, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="font-mono text-sm">{integration}</span>
                            <span className="ml-auto text-xs text-gray-600 dark:text-gray-400">Bidirectional sync</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Placeholder Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400">
                    📊 Module dashboard and functionality will be implemented here.
                    This is the foundation for the {activeModule.name} module.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h2 className="text-2xl font-bold mb-2">Select a Module</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Choose a module from the left panel to view details and functionality
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePlatform;
