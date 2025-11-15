import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, Send, User, Search, Phone, Video, Paperclip,
  MoreVertical, X, Check, CheckCheck, Clock, Star, Archive,
  Users, Building, Briefcase, Filter, ChevronLeft
} from 'lucide-react';

const MessagingCenter = ({ currentRepId = 'rep-001' }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'companies', 'reps', 'unread'

  // Mock conversations data
  const mockConversations = [
    {
      id: 'conv-001',
      type: 'company',
      participant: {
        name: 'Cleveland Clinic',
        title: 'Healthcare System',
        avatar: 'CC',
        online: true
      },
      mission: 'Cardiology Leadership Meeting',
      lastMessage: {
        text: 'Thanks for the proposal. Can we schedule a call to discuss the approach?',
        time: '2 min ago',
        unread: true,
        sender: 'them'
      },
      messages: [
        {
          id: 'm1',
          sender: 'them',
          text: 'Hi Sarah, we received your bid for the Cleveland Clinic Cardiology opportunity.',
          time: '10:30 AM',
          read: true
        },
        {
          id: 'm2',
          sender: 'me',
          text: 'Great! I have 8 years of experience in healthcare sales and have worked with 3 other major hospital systems in Ohio.',
          time: '10:35 AM',
          read: true
        },
        {
          id: 'm3',
          sender: 'me',
          text: 'I already have a relationship with their VP of Innovation from a previous engagement.',
          time: '10:36 AM',
          read: true
        },
        {
          id: 'm4',
          sender: 'them',
          text: 'Thanks for the proposal. Can we schedule a call to discuss the approach?',
          time: '11:20 AM',
          read: false
        }
      ]
    },
    {
      id: 'conv-002',
      type: 'company',
      participant: {
        name: 'Acme Financial',
        title: 'FinTech Company',
        avatar: 'AF',
        online: false
      },
      mission: 'Deal Accelerator - $500K Stuck Deal',
      lastMessage: {
        text: 'The decision maker will be back from vacation next Monday.',
        time: '1 hour ago',
        unread: false,
        sender: 'them'
      },
      messages: [
        {
          id: 'm1',
          sender: 'them',
          text: 'We accepted your bid! When can you start?',
          time: '9:00 AM',
          read: true
        },
        {
          id: 'm2',
          sender: 'me',
          text: 'I can start immediately. Let me review the deal details and prepare an action plan.',
          time: '9:15 AM',
          read: true
        },
        {
          id: 'm3',
          sender: 'them',
          text: 'The decision maker will be back from vacation next Monday.',
          time: '10:00 AM',
          read: true
        }
      ]
    },
    {
      id: 'conv-003',
      type: 'rep',
      participant: {
        name: 'Marcus Thompson',
        title: 'Deal Closer • SPARCC 88',
        avatar: 'MT',
        online: true
      },
      mission: null,
      lastMessage: {
        text: 'Want to team up on the Target Corp opportunity?',
        time: '3 hours ago',
        unread: true,
        sender: 'them'
      },
      messages: [
        {
          id: 'm1',
          sender: 'them',
          text: 'Hey Sarah! Saw you bid on the Target Corp mission. I have strong retail experience if you want to team up.',
          time: 'Yesterday 4:30 PM',
          read: true
        },
        {
          id: 'm2',
          sender: 'me',
          text: 'Hey Marcus! That could work. What's your typical split on team deals?',
          time: 'Yesterday 5:00 PM',
          read: true
        },
        {
          id: 'm3',
          sender: 'them',
          text: 'Want to team up on the Target Corp opportunity?',
          time: 'Today 8:30 AM',
          read: false
        }
      ]
    },
    {
      id: 'conv-004',
      type: 'company',
      participant: {
        name: 'Global Manufacturing Co',
        title: 'Manufacturing',
        avatar: 'GM',
        online: false
      },
      mission: 'Territory Sprint - Midwest',
      lastMessage: {
        text: 'Your first milestone payment has been processed.',
        time: 'Yesterday',
        unread: false,
        sender: 'them'
      },
      messages: [
        {
          id: 'm1',
          sender: 'them',
          text: 'Your first milestone payment has been processed.',
          time: 'Yesterday 2:00 PM',
          read: true
        },
        {
          id: 'm2',
          sender: 'me',
          text: 'Thank you! I'll have the territory analysis ready by Friday.',
          time: 'Yesterday 2:30 PM',
          read: true
        }
      ]
    },
    {
      id: 'conv-005',
      type: 'rep',
      participant: {
        name: 'Jennifer Rodriguez',
        title: 'Account Expansion • SPARCC 91',
        avatar: 'JR',
        online: false
      },
      mission: null,
      lastMessage: {
        text: 'Thanks for the referral! Just closed that deal.',
        time: '2 days ago',
        unread: false,
        sender: 'them'
      },
      messages: [
        {
          id: 'm1',
          sender: 'them',
          text: 'Thanks for the referral! Just closed that deal.',
          time: '2 days ago',
          read: true
        },
        {
          id: 'm2',
          sender: 'me',
          text: 'Congrats! Happy to help. Let me know if you need anything else.',
          time: '2 days ago',
          read: true
        }
      ]
    }
  ];

  const filteredConversations = mockConversations.filter(conv => {
    const matchesSearch = conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (conv.mission && conv.mission.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter =
      filterType === 'all' ||
      (filterType === 'companies' && conv.type === 'company') ||
      (filterType === 'reps' && conv.type === 'rep') ||
      (filterType === 'unread' && conv.lastMessage.unread);

    return matchesSearch && matchesFilter;
  });

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedConversation) return;

    // In a real app, this would send the message to the server
    console.log('Sending message:', messageText);
    setMessageText('');
  };

  const unreadCount = mockConversations.filter(c => c.lastMessage.unread).length;

  return (
    <div className="h-[calc(100vh-250px)] bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex">
      {/* Conversations Sidebar */}
      <div className={`${selectedConversation ? 'hidden md:block' : 'block'} w-full md:w-96 border-r border-gray-200 dark:border-gray-700 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-cyan-500" />
              Messages
              {unreadCount > 0 && (
                <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                  {unreadCount}
                </span>
              )}
            </h2>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'companies', label: 'Companies' },
              { id: 'reps', label: 'Reps' },
              { id: 'unread', label: 'Unread' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setFilterType(filter.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  filterType === filter.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map(conv => (
            <motion.div
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer transition-colors ${
                selectedConversation?.id === conv.id
                  ? 'bg-cyan-50 dark:bg-cyan-900/20'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
              whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.05)' }}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    conv.type === 'company'
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                      : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                  }`}>
                    {conv.participant.avatar}
                  </div>
                  {conv.participant.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{conv.participant.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {conv.participant.title}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                      {conv.lastMessage.time}
                    </span>
                  </div>
                  {conv.mission && (
                    <div className="text-xs text-cyan-600 dark:text-cyan-400 mb-1 truncate">
                      <Briefcase className="w-3 h-3 inline mr-1" />
                      {conv.mission}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <p className={`text-sm truncate ${
                      conv.lastMessage.unread
                        ? 'font-semibold text-gray-900 dark:text-gray-100'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {conv.lastMessage.text}
                    </p>
                    {conv.lastMessage.unread && (
                      <div className="w-2 h-2 bg-cyan-500 rounded-full ml-2 flex-shrink-0"></div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Message View */}
      <div className={`${selectedConversation ? 'block' : 'hidden md:block'} flex-1 flex flex-col`}>
        {selectedConversation ? (
          <>
            {/* Message Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedConversation(null)}
                    className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      selectedConversation.type === 'company'
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                    }`}>
                      {selectedConversation.participant.avatar}
                    </div>
                    {selectedConversation.participant.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold">{selectedConversation.participant.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {selectedConversation.participant.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {selectedConversation.mission && (
                <div className="mt-3 px-3 py-2 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="font-semibold text-cyan-900 dark:text-cyan-100">
                      Mission: {selectedConversation.mission}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
              {selectedConversation.messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-lg px-4 py-2 ${
                      msg.sender === 'me'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500 dark:text-gray-400 ${
                      msg.sender === 'me' ? 'justify-end' : 'justify-start'
                    }`}>
                      <span>{msg.time}</span>
                      {msg.sender === 'me' && (
                        msg.read ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-end gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  <Paperclip className="w-5 h-5 text-gray-500" />
                </button>
                <div className="flex-1">
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Type a message..."
                    rows="2"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 resize-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 dark:text-gray-500 mb-2">
                No conversation selected
              </h3>
              <p className="text-gray-400 dark:text-gray-500">
                Choose a conversation from the sidebar to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingCenter;
