import React from 'react';
import { Grid3x3 as Grid3X3, Target, Zap, BookOpen, Shuffle, Hash, ArrowRight, TrendingUp } from 'lucide-react';

const FeaturedSolvers: React.FC = () => {
  const featuredSolvers = [
    {
      icon: Grid3X3,
      title: 'Wordle Solver',
      description: 'Get the perfect word for today\'s Wordle puzzle with our advanced algorithm that analyzes letter patterns.',
      href: '/wordle-solver',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      stats: '50K+ daily users',
      emoji: '🎯'
    },
    {
      icon: Target,
      title: 'Connections Hints',
      description: 'Discover the hidden connections between words with subtle hints and AI-powered pattern recognition.',
      href: '/connections-hints',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      stats: '30K+ daily users',
      emoji: '🔗'
    },
    {
      icon: Zap,
      title: 'Spelling Bee Solver',
      description: 'Find all possible words and achieve Queen Bee status with our comprehensive word database.',
      href: '/spelling-bee-solver',
      gradient: 'from-amber-400 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      stats: '25K+ daily users',
      emoji: '🐝'
    },
    {
      icon: BookOpen,
      title: 'Crossword Solver',
      description: 'Solve crossword clues instantly with our extensive database and intelligent matching system.',
      href: '/crossword-solver',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      stats: '40K+ daily users',
      emoji: '📰'
    },
    {
      icon: Shuffle,
      title: 'Word Unscrambler',
      description: 'Unscramble any combination of letters to find valid words with our lightning-fast algorithm.',
      href: '/word-unscrambler',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      stats: '35K+ daily users',
      emoji: '🔀'
    },
    {
      icon: Hash,
      title: 'Anagram Solver',
      description: 'Discover all possible anagrams for any word or phrase with our comprehensive anagram engine.',
      href: '/anagram-solver',
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
      stats: '20K+ daily users',
      emoji: '🔄'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-lime-100 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <TrendingUp className="w-3 h-3 mr-1.5" />
            Most Popular
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Featured <span className="bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">Solvers</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Our most trusted and frequently used game solvers, designed to help you conquer any word puzzle challenge.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {featuredSolvers.map((solver, index) => (
            <div
              key={solver.title}
              className="flip-card h-48"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col items-center justify-center text-center">
                  {/* Large Emoji Icon */}
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {solver.emoji}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {solver.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span className="text-xs font-medium">{solver.stats}</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className={`flip-card-back bg-gradient-to-br ${solver.bgGradient} rounded-xl shadow-md border border-gray-100 p-4 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Background Emoji with Low Opacity */}
            <div className="flex space-x-6 text-sm">
                <div className={`flip-card-back bg-gradient-to-br ${solver.bgGradient} rounded-xl shadow-md border border-gray-100 p-4 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute top-3 right-3 text-6xl opacity-10 pointer-events-none">
                    {solver.emoji}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-10 h-10 bg-gradient-to-r ${solver.gradient} rounded-lg flex items-center justify-center mb-3 shadow-md`}>
                      <solver.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {solver.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {solver.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={solver.href}
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${solver.gradient} text-white py-2 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-200 transform hover:scale-105 relative z-10 text-sm`}
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
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-lime-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Solvers
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    )
    )
    }
    </section>
  );
};

export default FeaturedSolvers;