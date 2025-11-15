import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, MapPin, DollarSign, Clock, Target, Users, Briefcase, Star,
  TrendingUp, Award, CheckCircle, AlertCircle, Calendar, Send,
  Building, Zap, Shield, MessageSquare, ThumbsUp, Eye, ArrowRight
} from 'lucide-react';
import { toast } from 'sonner';

const MissionDetailModal = ({ mission, onClose, onBid, getMissionTypeIcon, getMissionTypeName, getUrgencyColor }) => {
  const [showBidForm, setShowBidForm] = useState(false);
  const [bidData, setBidData] = useState({
    proposedRate: mission.compensationType === 'Commission' ? mission.commissionRate : 0,
    estimatedTimeline: mission.duration,
    approach: '',
    relevantExperience: '',
    availability: new Date().toISOString().split('T')[0]
  });

  const MissionIcon = getMissionTypeIcon(mission.type);

  // AI-Generated Match Score (simulated)
  const matchScore = Math.floor(75 + Math.random() * 20); // 75-95%
  const matchReasons = [
    'Industry expertise in ' + mission.targetIndustry,
    'Previous success with similar deal sizes',
    'Strong track record in ' + mission.targetGeography,
    'Proven ability in ' + getMissionTypeName(mission.type) + ' missions'
  ];

  const handleBidSubmit = () => {
    if (!bidData.approach.trim()) {
      toast.error('Please describe your approach');
      return;
    }
    onBid(mission, bidData);
    onClose();
  };

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
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <MissionIcon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{mission.title}</h2>
                <div className="flex items-center gap-3">
                  <span className="text-white/90">{mission.companyName}</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {getMissionTypeName(mission.type)}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Estimated Earnings</div>
              <div className="text-xl font-bold">${mission.estimatedEarnings.expected.toLocaleString()}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Duration</div>
              <div className="text-xl font-bold">{mission.duration} days</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Active Bids</div>
              <div className="text-xl font-bold">{mission.activeBids}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-white/70 text-xs mb-1">Urgency</div>
              <div className="text-xl font-bold">{mission.urgency}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* AI Match Score */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">AI Match Score</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Based on your SPARCC fingerprint</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black text-green-600 dark:text-green-400">{matchScore}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Match</div>
              </div>
            </div>
            <div className="space-y-2">
              {matchReasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold mb-3">Mission Brief</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{mission.description}</p>
          </div>

          {/* Target Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Target Details
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Account:</span>
                  <span className="font-semibold">{mission.targetAccount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Persona:</span>
                  <span className="font-semibold">{mission.targetPersona}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Industry:</span>
                  <span className="font-semibold">{mission.targetIndustry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Location:</span>
                  <span className="font-semibold">{mission.targetGeography}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Compensation
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Type:</span>
                  <span className="font-semibold">{mission.compensationType}</span>
                </div>
                {mission.fixedFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fixed Fee:</span>
                    <span className="font-semibold">${mission.fixedFee.toLocaleString()}</span>
                  </div>
                )}
                {mission.commissionRate > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Commission:</span>
                    <span className="font-semibold">{mission.commissionRate}%</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Range:</span>
                  <span className="font-semibold">
                    ${mission.estimatedEarnings.min.toLocaleString()} - ${mission.estimatedEarnings.max.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-bold mb-3">Requirements</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Must Have</h4>
                <div className="flex flex-wrap gap-2">
                  {mission.mustHaves.map((req, idx) => (
                    <span key={idx} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nice to Have</h4>
                <div className="flex flex-wrap gap-2">
                  {mission.niceToHaves.map((req, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {mission.requiredSkills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Timeline
            </h3>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Posted</div>
                <div className="font-semibold">{new Date(mission.postedDate).toLocaleDateString()}</div>
              </div>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Deadline</div>
                <div className="font-semibold text-orange-600 dark:text-orange-400">
                  {new Date(mission.deadline).toLocaleDateString()}
                </div>
              </div>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Duration</div>
                <div className="font-semibold">{mission.duration} days</div>
              </div>
            </div>
          </div>

          {/* Bid Form or Action */}
          {!showBidForm ? (
            <div className="flex gap-3">
              <motion.button
                onClick={() => setShowBidForm(true)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-700 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Place Your Bid
              </motion.button>
              <motion.button
                className="px-6 py-4 bg-gray-100 dark:bg-gray-700 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-5 h-5" />
              </motion.button>
            </div>
          ) : (
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-bold mb-4">Submit Your Bid</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Proposed Rate {mission.compensationType === 'Commission' ? '(%)' : '($)'}
                    </label>
                    <input
                      type="number"
                      value={bidData.proposedRate}
                      onChange={(e) => setBidData({...bidData, proposedRate: parseFloat(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Timeline (days)</label>
                    <input
                      type="number"
                      value={bidData.estimatedTimeline}
                      onChange={(e) => setBidData({...bidData, estimatedTimeline: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Approach *</label>
                  <textarea
                    value={bidData.approach}
                    onChange={(e) => setBidData({...bidData, approach: e.target.value})}
                    placeholder="Explain why you're the best fit for this mission and your strategy..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Relevant Experience</label>
                  <textarea
                    value={bidData.relevantExperience}
                    onChange={(e) => setBidData({...bidData, relevantExperience: e.target.value})}
                    placeholder="Highlight similar deals you've closed or relevant expertise..."
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  />
                </div>
                <div className="flex gap-3">
                  <motion.button
                    onClick={handleBidSubmit}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    Submit Bid
                  </motion.button>
                  <button
                    onClick={() => setShowBidForm(false)}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MissionDetailModal;
