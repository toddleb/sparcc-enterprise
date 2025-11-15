import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Search, Star, Users, TrendingUp, Award, Shield,
  Target, Trophy, FileText, ChevronRight, Clock, BarChart3,
  ThumbsUp, Download, Bookmark, Share2, X, CheckCircle,
  Lightbulb, Zap, Filter
} from 'lucide-react';

import { playbookCategories, featuredPlaybooks, playbookStats } from '../data/playbooks';

const KnowledgeBaseHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlaybook, setSelectedPlaybook] = useState(null);
  const [bookmarkedPlaybooks, setBookmarkedPlaybooks] = useState([]);

  const getCategoryIcon = (iconName) => {
    const icons = {
      target: Target,
      trophy: Trophy,
      handshake: Award,
      building: Users,
      shield: Shield,
      'file-text': FileText
    };
    return icons[iconName] || BookOpen;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Advanced': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
    };
    return colors[difficulty] || colors['Intermediate'];
  };

  const filteredPlaybooks = featuredPlaybooks.filter(pb => {
    const matchesSearch =
      pb.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pb.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pb.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || pb.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleBookmark = (playbookId) => {
    if (bookmarkedPlaybooks.includes(playbookId)) {
      setBookmarkedPlaybooks(bookmarkedPlaybooks.filter(id => id !== playbookId));
    } else {
      setBookmarkedPlaybooks([...bookmarkedPlaybooks, playbookId]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-8 h-8" />
            <span className="text-4xl font-bold">{playbookStats.totalPlaybooks}</span>
          </div>
          <div className="text-sm opacity-90">Total Playbooks</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8" />
            <span className="text-4xl font-bold">{playbookStats.totalAuthors}</span>
          </div>
          <div className="text-sm opacity-90">Contributing Authors</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8" />
            <span className="text-4xl font-bold">{playbookStats.avgSuccessRate}%</span>
          </div>
          <div className="text-sm opacity-90">Avg Success Rate</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-8 h-8" />
            <span className="text-4xl font-bold">{filteredPlaybooks.length}</span>
          </div>
          <div className="text-sm opacity-90">Available Now</div>
        </div>
      </div>

      {/* Search & Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search playbooks, strategies, templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All Categories
          </button>
          {playbookCategories.map(cat => {
            const Icon = getCategoryIcon(cat.icon);
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {cat.playbookCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Playbooks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPlaybooks.map(playbook => (
          <motion.div
            key={playbook.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
            whileHover={{ y: -4 }}
            onClick={() => setSelectedPlaybook(playbook)}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(playbook.difficulty)}`}>
                      {playbook.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-semibold">
                      {playbookCategories.find(c => c.id === playbook.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{playbook.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {playbook.overview}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark(playbook.id);
                  }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  <Bookmark
                    className={`w-5 h-5 ${
                      bookmarkedPlaybooks.includes(playbook.id)
                        ? 'fill-cyan-500 text-cyan-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {playbook.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{playbook.author.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    SPARCC {playbook.author.sparccScore} • {playbook.author.specialization}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-sm">{playbook.rating}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {playbook.successRate}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {playbook.usageCount}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Times Used</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {playbook.steps?.length || 'N/A'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Steps</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {playbook.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {playbook.timeToExecute}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700">
                  View Playbook
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Playbook Detail Modal */}
      <AnimatePresence>
        {selectedPlaybook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedPlaybook(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-t-2xl z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-white/20 rounded-full text-xs font-semibold`}>
                        {selectedPlaybook.difficulty}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{selectedPlaybook.rating}</span>
                      </div>
                      <span className="text-sm opacity-90">• {selectedPlaybook.usageCount} uses</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{selectedPlaybook.title}</h2>
                    <p className="text-white/90">{selectedPlaybook.overview}</p>
                  </div>
                  <button
                    onClick={() => setSelectedPlaybook(null)}
                    className="p-2 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-semibold">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(selectedPlaybook.id);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-semibold"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        bookmarkedPlaybooks.includes(selectedPlaybook.id) ? 'fill-white' : ''
                      }`}
                    />
                    {bookmarkedPlaybooks.includes(selectedPlaybook.id) ? 'Bookmarked' : 'Bookmark'}
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {/* Key Takeaways */}
                {selectedPlaybook.keyTakeaways && (
                  <div className="mb-6 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      Key Takeaways
                    </h3>
                    <ul className="space-y-2">
                      {selectedPlaybook.keyTakeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Steps */}
                {selectedPlaybook.steps && (
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-4">Step-by-Step Guide</h3>
                    <div className="space-y-4">
                      {selectedPlaybook.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-cyan-500"
                        >
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg">{step.title}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-3 h-3 inline mr-1" />
                                {step.duration}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm mb-3 ml-11">{step.description}</p>
                          <ul className="space-y-1 ml-11">
                            {step.actions.map((action, actionIdx) => (
                              <li key={actionIdx} className="flex items-start gap-2 text-sm">
                                <Zap className="w-3 h-3 text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0" />
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Templates */}
                {selectedPlaybook.templates && selectedPlaybook.templates.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-4">Templates & Scripts</h3>
                    <div className="space-y-4">
                      {selectedPlaybook.templates.map((template, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{template.title}</h4>
                            <button className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline">
                              Copy Template
                            </button>
                          </div>
                          <pre className="text-xs bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600 overflow-x-auto whitespace-pre-wrap">
                            {template.content}
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials */}
                {selectedPlaybook.testimonials && (
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-4">Success Stories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedPlaybook.testimonials.map((testimonial, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <ThumbsUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="font-semibold text-sm">{testimonial.rep}</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">
                            "{testimonial.quote}"
                          </p>
                          <div className="text-xs font-semibold text-green-600 dark:text-green-400">
                            Result: {testimonial.result}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KnowledgeBaseHub;
