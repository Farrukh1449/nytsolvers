import React from 'react';
import { Grid3x3 as Grid3X3, Target, Zap, BookOpen, Shuffle, Hash, ArrowRight, TrendingUp } from 'lucide-react';

const FeaturedSolvers: React.FC = () => {
  const featuredSolvers = [
    {
      icon: Target,
      title: 'Wordle Solver',
      description: 'Get the perfect word for today\'s Wordle puzzle with our advanced algorithm that analyzes letter patterns.',
      href: '/wordle-solver',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      stats: '50K+ daily users',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Grid3X3,
      title: 'Connections Hints',
      description: 'Discover the hidden connections between words with subtle hints and AI-powered pattern recognition.',
      href: '/connections-hints',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      stats: '30K+ daily users',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Spelling Bee Solver',
      description: 'Find all possible words and achieve Queen Bee status with our comprehensive word database.',
      href: '/spelling-bee-solver',
      gradient: 'from-amber-400 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      stats: '25K+ daily users',
      iconColor: 'text-amber-600'
    },
    {
      icon: BookOpen,
      title: 'Crossword Solver',
      description: 'Solve crossword clues instantly with our extensive database and intelligent matching system.',
      href: '/crossword-solver',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      stats: '40K+ daily users',
      iconColor: 'text-purple-600'
    },
    {
      icon: Hash,
      title: 'Word Unscrambler',
      description: 'Unscramble any combination of letters to find valid words with our lightning-fast algorithm.',
      href: '/word-unscrambler',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      stats: '35K+ daily users',
      iconColor: 'text-green-600'
    },
    {
      icon: Shuffle,
      title: 'Anagram Solver',
      description: 'Discover all possible anagrams for any word or phrase with our comprehensive anagram engine.',
      href: '/anagram-solver',
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
      stats: '20K+ daily users',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-lime-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Most Popular
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">Solvers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most trusted and frequently used game solvers, designed to help you conquer any word puzzle challenge.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredSolvers.map((solver, index) => (
            <div
              key={solver.title}
              className="flip-card h-72 sm:h-80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                  {/* Large SVG Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${solver.iconColor} mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <solver.icon className="w-full h-full" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {solver.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-xs sm:text-sm font-medium">{solver.stats}</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className={`flip-card-back bg-gradient-to-br ${solver.bgGradient} rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Background Icon with Low Opacity */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20 opacity-10 pointer-events-none text-gray-400">
                    <solver.icon className="w-full h-full" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${solver.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                      <solver.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {solver.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      {solver.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={solver.href}
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${solver.gradient} text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 relative z-10 text-sm sm:text-base`}
                  >
                    Try {solver.title.replace(' Solver', '').replace(' Hints', '')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/all-solvers"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-lime-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-teal-600 hover:to-lime-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            View All Solvers
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolvers;