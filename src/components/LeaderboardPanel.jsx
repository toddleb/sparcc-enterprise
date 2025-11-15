import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Star, Award, Flame, BadgeCheck, Shield } from 'lucide-react';

const LeaderboardPanel = ({ reps }) => {
  const topReps = [...reps]
    .sort((a, b) => b.sparccScore - a.sparccScore)
    .slice(0, 10);

  const getRankBadge = (index) => {
    if (index === 0) return { color: 'from-yellow-400 to-yellow-600', icon: '🥇', text: 'Champion' };
    if (index === 1) return { color: 'from-gray-300 to-gray-500', icon: '🥈', text: 'Elite' };
    if (index === 2) return { color: 'from-orange-400 to-orange-600', icon: '🥉', text: 'Master' };
    return { color: 'from-blue-400 to-blue-600', icon: '⭐', text: 'Top 10' };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="w-7 h-7 text-yellow-500" />
          Top Performers - SPARCC Certified
        </h2>
        <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-sm">
          Live Rankings
        </div>
      </div>

      <div className="space-y-3">
        {topReps.map((rep, index) => {
          const badge = getRankBadge(index);
          return (
            <motion.div
              key={rep.repId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-xl border-2 ${
                index < 3
                  ? 'bg-gradient-to-r ' + badge.color + ' text-white border-transparent'
                  : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`text-4xl font-black ${index < 3 ? 'text-white' : 'text-gray-400'}`}>
                  #{index + 1}
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold border-3 border-white/30">
                  {rep.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg">{rep.name}</span>
                    <Shield className={`w-4 h-4 ${index < 3 ? 'text-white' : 'text-cyan-500'}`} title="SPARCC Certified" />
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className={index < 3 ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}>
                      {rep.archetype}
                    </span>
                    <span className={index < 3 ? 'text-white/70' : 'text-gray-500'}>•</span>
                    <span className={index < 3 ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}>
                      {rep.winRate}% win rate
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-black ${index < 3 ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                    {rep.sparccScore}
                  </div>
                  <div className={`text-xs ${index < 3 ? 'text-white/80' : 'text-gray-500'}`}>
                    {badge.text}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-1">SPARCC Certified Only</h4>
            <p className="text-sm text-cyan-800 dark:text-cyan-200">
              All reps must pass SPARCC's rigorous assessment and certification process to join the exchange.
              Rankings based on real performance fingerprints and validated outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPanel;
