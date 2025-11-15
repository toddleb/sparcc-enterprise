import React from 'react';
import { motion } from 'framer-motion';
import {
  X, Star, Award, TrendingUp, Target, Briefcase, MapPin, Calendar,
  DollarSign, Clock, CheckCircle, ThumbsUp, MessageSquare, Shield,
  Zap, Trophy, Users, Building, Flame
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RepProfileModal = ({ rep, onClose, onContact }) => {
  // Generate performance data (simulated)
  const performanceData = [
    { month: 'Jan', deals: 3, revenue: 420 },
    { month: 'Feb', deals: 4, revenue: 580 },
    { month: 'Mar', deals: 2, revenue: 340 },
    { month: 'Apr', deals: 5, revenue: 720 },
    { month: 'May', deals: 4, revenue: 650 },
    { month: 'Jun', deals: 6, revenue: 890 }
  ];

  const testimonials = [
    {
      company: 'HealthTech Solutions',
      role: 'VP Sales',
      text: `${rep.name} broke into our dream account in just 14 days. Their healthcare expertise and executive presence made all the difference.`,
      rating: 5,
      date: '2 months ago'
    },
    {
      company: 'CloudSecure Inc',
      role: 'CRO',
      text: 'Incredible closer. Took a stalled $500K deal and got it signed in 3 weeks. Worth every penny.',
      rating: 5,
      date: '4 months ago'
    }
  ];

  const recentWins = [
    { company: 'Mayo Clinic', dealSize: 890000, type: 'New Logo', duration: 98 },
    { company: 'Johns Hopkins', dealSize: 620000, type: 'Expansion', duration: 67 },
    { company: 'Kaiser Permanente', dealSize: 450000, type: 'New Logo', duration: 112 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4 border-white/30">
                {rep.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-3xl font-bold">{rep.name}</h2>
                  {rep.sparccScore >= 90 && (
                    <Shield className="w-6 h-6 text-yellow-300" />
                  )}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(rep.rating) ? 'fill-yellow-300 text-yellow-300' : 'text-white/50'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold">{rep.rating}</span>
                  <span className="text-white/80">({rep.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {rep.archetype}
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {rep.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-4xl font-black">{rep.sparccScore}</div>
                <div className="text-sm text-white/80">SPARCC Score</div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Deals Closed</div>
              <div className="text-2xl font-bold">{rep.closedDeals}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Win Rate</div>
              <div className="text-2xl font-bold">{rep.winRate}%</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Avg Deal</div>
              <div className="text-2xl font-bold">${(rep.avgDealSize / 1000).toFixed(0)}K</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Avg Cycle</div>
              <div className="text-2xl font-bold">{rep.avgCycleTime}d</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Performance Chart */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance Trend (Last 6 Months)
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Specializations & Strengths */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Industry Expertise
              </h3>
              <div className="space-y-2">
                {rep.industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <span className="font-semibold">{industry}</span>
                    <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Geographies</h4>
                <div className="flex flex-wrap gap-2">
                  {rep.geographies.map((geo, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {geo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Top Strengths
              </h3>
              <div className="space-y-2">
                {rep.strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="font-semibold">{strength}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Deal Types</h4>
                <div className="flex flex-wrap gap-2">
                  {rep.preferredDealTypes.map((type, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-semibold">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deal Size Sweet Spot */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Deal Size Range
            </h3>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Min</div>
                <div className="text-2xl font-bold">${(rep.dealSizes.min / 1000).toFixed(0)}K</div>
              </div>
              <div className="flex-1 h-2 bg-gradient-to-r from-green-300 via-green-500 to-green-300 rounded-full relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Sweet Spot</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">${(rep.dealSizes.sweet_spot / 1000).toFixed(0)}K</div>
              </div>
              <div className="flex-1 h-2 bg-gradient-to-r from-green-500 via-green-300 to-gray-300 rounded-full"></div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Max</div>
                <div className="text-2xl font-bold">${(rep.dealSizes.max / 1000).toFixed(0)}K</div>
              </div>
            </div>
          </div>

          {/* Recent Wins */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Recent Wins
            </h3>
            <div className="space-y-3">
              {recentWins.map((win, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{win.company}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{win.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">${(win.dealSize / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{win.duration} days</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements & Badges
            </h3>
            <div className="flex flex-wrap gap-3">
              {rep.badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
                  <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <span className="font-semibold text-yellow-900 dark:text-yellow-200">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Client Testimonials
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold">{testimonial.company}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-2">"{testimonial.text}"</p>
                  <div className="text-xs text-gray-500">{testimonial.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Compensation */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Compensation Preferences
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Min Commission</div>
                <div className="text-2xl font-bold">{rep.minCommission}%</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Hourly Rate</div>
                <div className="text-2xl font-bold">${rep.hourlyRate}/hr</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Bandwidth</div>
                <div className="text-2xl font-bold">{rep.bandwidth}</div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            onClick={() => { onContact(rep); onClose(); }}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare className="w-6 h-6" />
            Contact {rep.name.split(' ')[0]}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RepProfileModal;
