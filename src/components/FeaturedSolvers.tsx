import React from 'react';
import { Grid3x3 as Grid3X3, Target, Zap, BookOpen, Shuffle, Hash, ArrowRight, TrendingUp } from 'lucide-react';

const FeaturedSolvers: React.FC = () => {
  const featuredSolvers = [
    {
      icon: Grid3X3,
      title: 'Wordle Solver',
      description: 'Get the perfect word for today\'s Wordle puzzle with our advanced algorithm.',
      href: '/wordle-solver',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      stats: '50K+ daily users'
    },
    {
      icon: Target,
      title: 'Connections Hints',
      description: 'Discover the hidden connections between words with subtle hints and solutions.',
      href: '/connections-hints',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      stats: '30K+ daily users'
    },
    {
      icon: Zap,
      title: 'Spelling Bee Solver',
      description: 'Find all possible words and achieve Queen Bee status with our comprehensive solver.',
      href: '/spelling-bee-solver',
      gradient: 'from-amber-400 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      stats: '25K+ daily users'
    },
    {
      icon: BookOpen,
      title: 'Crossword Solver',
      description: 'Solve crossword clues instantly with our extensive database and AI assistance.',
      href: '/crossword-solver',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      stats: '40K+ daily users'
    },
    {
      icon: Shuffle,
      title: 'Word Unscrambler',
      description: 'Unscramble any combination of letters to find valid words and solutions.',
      href: '/word-unscrambler',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      stats: '35K+ daily users'
    },
    {
      icon: Hash,
      title: 'Anagram Solver',
      description: 'Discover all possible anagrams for any word or phrase with lightning speed.',
      href: '/anagram-solver',
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
      stats: '20K+ daily users'
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

        {/* Solvers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSolvers.map((solver, index) => (
            <div
              key={solver.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solver.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${solver.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <solver.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  {solver.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solver.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-500">
                    {solver.stats}
                  </span>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Popular</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={solver.href}
                  className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-lime-600"
                >
                  Try Solver
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-200 transition-colors duration-300" />
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