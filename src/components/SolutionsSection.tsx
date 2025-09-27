import React from 'react';
import { Zap, Target, Grid3x3 as Grid3X3, BookOpen, Hash, Shuffle, ArrowRight, TrendingUp } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solverCategories = [
    {
      icon: Grid3X3,
      title: 'Wordle Solver',
      description: 'Get the perfect word for today\'s Wordle puzzle with our advanced algorithm.',
      href: '/wordle-solver',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      features: ['5-letter word finder', 'Letter position hints', 'Optimal guessing strategy']
    },
    {
      icon: Target,
      title: 'Connections Solver',
      description: 'Discover hidden connections between words with AI-powered analysis.',
      href: '/connections-hints',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
      features: ['Pattern recognition', 'Category suggestions', 'Difficulty analysis']
    },
    {
      icon: Zap,
      title: 'Spelling Bee Solver',
      description: 'Find all possible words and achieve Queen Bee status effortlessly.',
      href: '/spelling-bee-solver',
      gradient: 'from-amber-400 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      features: ['All word combinations', 'Pangram finder', 'Score calculator']
    },
    {
      icon: BookOpen,
      title: 'Crossword Solver',
      description: 'Solve crossword clues instantly with our comprehensive database.',
      href: '/crossword-solver',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      features: ['Clue database', 'Pattern matching', 'Multiple solutions']
    },
    {
      icon: Shuffle,
      title: 'Word Unscrambler',
      description: 'Unscramble any combination of letters to find valid words.',
      href: '/word-unscrambler',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      features: ['Multiple word lengths', 'Anagram finder', 'Scrabble scoring']
    },
    {
      icon: Hash,
      title: 'Letter Boxed Solver',
      description: 'Complete Letter Boxed puzzles with optimal word combinations.',
      href: '/letter-boxed-solver',
      gradient: 'from-red-400 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50',
      features: ['Optimal paths', 'Word chaining', 'Minimum moves']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-lime-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Find Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">Game Solvers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced algorithms and comprehensive databases to help you solve any word puzzle challenge.
          </p>
        </div>

        {/* Solvers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solverCategories.map((solver, index) => (
            <div
              key={solver.title}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 min-h-[280px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solver.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${solver.gradient} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <solver.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  {solver.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {solver.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solver.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={solver.href}
                  className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-lime-600 text-base"
                >
                  Try Solver
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-teal-200 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/all-solvers"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-lime-500 text-white px-8 py-4 rounded-xl font-semibold text-xl hover:from-teal-600 hover:to-lime-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Solvers
            <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;