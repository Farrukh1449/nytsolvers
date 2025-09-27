import React, { useState } from 'react';
import { Search, Grid3x3 as Grid3X3, Target, Zap, BookOpen, Shuffle, Hash, Gamepad2, Trophy, Star, Filter } from 'lucide-react';

const AllSolvers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allSolvers = [
    // Word Games
    {
      name: 'Scrabble Word Finder',
      href: '/scrabble-solver',
      description: 'Find the highest scoring words for Scrabble',
      category: 'Word Games',
      icon: '🎯',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      name: 'Words With Friends Solver',
      href: '/words-with-friends-solver',
      description: 'Dominate Words With Friends with optimal plays',
      category: 'Word Games',
      icon: '👥',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      name: 'Word Unscrambler',
      href: '/word-unscrambler',
      description: 'Unscramble letters to find valid words',
      category: 'Word Games',
      icon: '🔀',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      name: 'Anagram Solver',
      href: '/anagram-solver',
      description: 'Discover all possible anagrams for any word',
      category: 'Word Games',
      icon: '🔄',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      name: 'Crossword Solver',
      href: '/crossword-solver',
      description: 'Solve crossword clues with our extensive database',
      category: 'Puzzles',
      icon: '📰',
      color: 'from-indigo-400 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    },
    {
      name: 'Jumble Solver',
      href: '/jumble-solver',
      description: 'Solve daily jumble puzzles instantly',
      category: 'Puzzles',
      icon: '🧩',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      name: 'Rhyme Finder',
      href: '/rhyme-finder',
      description: 'Find perfect rhymes for poetry and songwriting',
      category: 'Word Games',
      icon: '🎵',
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
    },
    // Multi-Word Games
    {
      name: 'Quordle Solver',
      href: '/quordle-solver',
      description: 'Solve four Wordle puzzles simultaneously',
      category: 'Multi-Word',
      icon: '4️⃣',
      color: 'from-red-400 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    },
    {
      name: 'Octordle Solver',
      href: '/octordle-solver',
      description: 'Master eight Wordle puzzles at once',
      category: 'Multi-Word',
      icon: '8️⃣',
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    // Mobile Games
    {
      name: 'Wordscapes Solver',
      href: '/wordscapes-solver',
      description: 'Complete Wordscapes levels with ease',
      category: 'Mobile Games',
      icon: '🌄',
      color: 'from-green-400 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    },
    {
      name: 'Word Cookies Solver',
      href: '/word-cookies-solver',
      description: 'Find all words in Word Cookies puzzles',
      category: 'Mobile Games',
      icon: '🍪',
      color: 'from-amber-400 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50'
    },
    {
      name: 'Word Chums Solver',
      href: '/word-chums-solver',
      description: 'Get the best plays in Word Chums',
      category: 'Mobile Games',
      icon: '🎮',
      color: 'from-lime-400 to-green-500',
      bgColor: 'from-lime-50 to-green-50'
    },
    {
      name: '4 Pics 1 Word Answer',
      href: '/4-pics-1-word',
      description: 'Find answers for 4 Pics 1 Word puzzles',
      category: 'Mobile Games',
      icon: '🖼️',
      color: 'from-violet-400 to-purple-500',
      bgColor: 'from-violet-50 to-purple-50'
    },
    // International Games
    {
      name: 'Wordfeud Helper',
      href: '/wordfeud-helper',
      description: 'Dominate Wordfeud with strategic plays',
      category: 'International',
      icon: '🌍',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50'
    },
    {
      name: 'Words of Wonder Solver',
      href: '/words-of-wonder-solver',
      description: 'Solve Words of Wonder challenges',
      category: 'International',
      icon: '✨',
      color: 'from-rose-400 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50'
    }
  ];

  const categories = ['all', 'Word Games', 'Puzzles', 'Multi-Word', 'Mobile Games', 'International'];

  const filteredSolvers = allSolvers.filter(solver => {
    const matchesSearch = solver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solver.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || solver.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gamepad2 className="w-4 h-4 mr-2" />
            All Game Solvers
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Solver Collection</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive collection of word game solvers and puzzle tools. From classic games to modern mobile challenges.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for game solvers..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-base"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-500 to-lime-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-600'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-teal-600">{filteredSolvers.length}</span> solver{filteredSolvers.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && (
              <span> in <span className="font-semibold text-teal-600">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Solvers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolvers.map((solver, index) => (
            <div
              key={solver.name}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solver.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${solver.color} rounded-xl flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {solver.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {solver.category}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                  {solver.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                  {solver.description}
                </p>

                {/* CTA Button */}
                <a
                  href={solver.href}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${solver.color} text-white py-2 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-200 transform hover:scale-105 text-sm`}
                >
                  Try Solver
                  <Target className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-teal-200 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSolvers.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No solvers found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold text-base hover:from-teal-600 hover:to-lime-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllSolvers;