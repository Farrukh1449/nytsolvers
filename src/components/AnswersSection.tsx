import React from 'react';
import { Calendar, Clock, Target, BookOpen, Grid3x3 as Grid3X3, Zap, ArrowRight, TrendingUp } from 'lucide-react';

const AnswersSection: React.FC = () => {
  const answerPages = [
    {
      icon: Target,
      title: 'Connections Hints',
      description: 'Get subtle hints for today\'s NYT Connections puzzle without spoiling the fun.',
      href: '/connections-hints',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      stats: 'Updated daily',
      emoji: '🔗'
    },
    {
      icon: Grid3X3,
      title: 'Wordle Hints',
      description: 'Smart hints and clues for today\'s Wordle without giving away the answer.',
      href: '/wordle-hints',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      stats: 'Daily updates',
      emoji: '🎯'
    },
    {
      icon: Zap,
      title: 'Spelling Bee Hints',
      description: 'Discover word patterns and hints to achieve Queen Bee status.',
      href: '/spelling-bee-hints',
      gradient: 'from-amber-400 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      stats: 'Fresh hints',
      emoji: '🐝'
    },
    {
      icon: BookOpen,
      title: 'Crossword Hints',
      description: 'Get helpful hints for NYT Crossword clues without direct answers.',
      href: '/crossword-hints',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      stats: 'Daily puzzles',
      emoji: '📰'
    },
    {
      icon: Calendar,
      title: 'Strands Hints',
      description: 'Find the theme and get hints for NYT Strands word connections.',
      href: '/strands-hints',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      stats: 'Theme hints',
      emoji: '🧩'
    },
    {
      icon: Target,
      title: 'Mini Crossword',
      description: 'Quick hints for the NYT Mini Crossword daily puzzle.',
      href: '/mini-crossword-hints',
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
      stats: 'Quick solve',
      emoji: '⚡'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium mb-2">
            <Calendar className="w-3 h-3 mr-1" />
            Daily Answers
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Today's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hints & Answers</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Get helpful hints and answers for today's most popular word puzzles and games.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {answerPages.map((page, index) => (
            <div
              key={page.title}
              className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden min-h-[160px]"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${page.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Background Emoji */}
              <div className="absolute top-1 right-1 text-3xl opacity-10 pointer-events-none">
                {page.emoji}
              </div>
              
              {/* Content */}
              <div className="relative p-3">
                {/* Icon and Stats */}
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${page.gradient} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <page.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Clock className="w-2 h-2 mr-1" />
                    <span>{page.stats}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                  {page.title}
                </h3>
                <p className="text-gray-600 mb-2 leading-relaxed text-xs">
                  {page.description}
                </p>

                {/* CTA Button */}
                <a
                  href={page.href}
                  className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-1 px-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 text-xs"
                >
                  Get Hints
                  <ArrowRight className="w-2 h-2 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <a
            href="/all-answers"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 rounded-xl font-semibold text-sm hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Answers
            <ArrowRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnswersSection;