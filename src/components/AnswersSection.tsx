import React from 'react';
import { Calendar, Target, Grid3x3 as Grid3X3, BookOpen, Zap, ArrowRight, Clock, Star } from 'lucide-react';

const AnswersSection: React.FC = () => {
  const answerPages = [
    {
      icon: Grid3X3,
      title: 'Wordle Hints',
      description: 'Daily hints and answers for today\'s Wordle puzzle with strategic tips.',
      href: '/wordle-hints',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      updateTime: 'Updated daily at 12:00 AM EST',
      difficulty: 'Easy'
    },
    {
      icon: Target,
      title: 'Connections Hints',
      description: 'Get subtle hints for NYT Connections without spoiling the fun.',
      href: '/connections-hints',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      updateTime: 'Updated daily at 12:00 AM EST',
      difficulty: 'Medium'
    },
    {
      icon: Zap,
      title: 'Spelling Bee Hints',
      description: 'Find today\'s pangram and get hints for all possible words.',
      href: '/spelling-bee-hints',
      gradient: 'from-amber-400 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      updateTime: 'Updated daily at 3:00 AM EST',
      difficulty: 'Hard'
    },
    {
      icon: BookOpen,
      title: 'Crossword Hints',
      description: 'Daily crossword clues and answers with detailed explanations.',
      href: '/crossword-hints',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      updateTime: 'Updated daily at 10:00 PM EST',
      difficulty: 'Hard'
    },
    {
      icon: Grid3X3,
      title: 'Mini Crossword Hints',
      description: 'Quick hints for the NYT Mini Crossword puzzle.',
      href: '/mini-crossword-hints',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      updateTime: 'Updated daily at 10:00 PM EST',
      difficulty: 'Easy'
    },
    {
      icon: Target,
      title: 'Strands Hints',
      description: 'Navigate today\'s Strands puzzle with helpful hints and solutions.',
      href: '/strands-hints',
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
      updateTime: 'Updated daily at 12:00 AM EST',
      difficulty: 'Medium'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Daily Answers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Today's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Puzzle Hints</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get daily hints and answers for all your favorite New York Times puzzles, updated fresh every day.
          </p>
        </div>

        {/* Answer Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {answerPages.map((page, index) => (
            <div
              key={page.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${page.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-6 sm:p-8">
                {/* Header with Icon and Difficulty */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${page.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <page.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(page.difficulty)}`}>
                    {page.difficulty}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {page.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {page.description}
                </p>

                {/* Update Time */}
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="truncate">{page.updateTime}</span>
                </div>

                {/* CTA Button */}
                <a
                  href={page.href}
                  className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 text-sm sm:text-base"
                >
                  Get Today's Hints
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/all-answers"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            View All Answer Pages
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnswersSection;