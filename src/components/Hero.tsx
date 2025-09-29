import React from 'react';
import { Search, Target, Puzzle, Grid3x3 as Grid3X3, BookOpen, Zap, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const popularSolvers = [
    { 
      name: 'Wordle', 
      icon: Target, 
      href: '/wordle-solver',
      color: 'hover:bg-red-50 hover:text-red-600 hover:border-red-200'
    },
    { 
      name: 'Connections', 
      icon: Grid3X3, 
      href: '/connections-hints',
      color: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200'
    },
    { 
      name: 'Spelling Bee', 
      icon: Zap, 
      href: '/spelling-bee-solver',
      color: 'hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200'
    },
    { 
      name: 'Letter Boxed', 
      icon: BookOpen, 
      href: '/letter-boxed-solver',
      color: 'hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(132, 204, 22, 0.1) 0%, transparent 50%)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Brand */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
              NYT
            </span>
            <span className="text-gray-900">Solvers</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Expert solutions and daily answers for New York Times games, Wordle, Connections, and more word puzzles
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in-up">
          <div className="max-w-2xl mx-auto relative px-4 sm:px-0">
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="pl-4 sm:pl-6 pr-4 py-4 w-full sm:w-auto">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for game solvers..."
                  className="flex-1 py-3 sm:py-4 pr-4 text-base sm:text-lg placeholder-gray-400 border-none outline-none focus:ring-0 w-full"
                />
                <button
                  className="mr-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2 text-sm sm:text-base"
                >
                  <span>Search</span>
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Solvers */}
        <div className="mb-12 animate-fade-in-up">
          <p className="text-gray-500 mb-4 sm:mb-6 font-medium text-sm sm:text-base">Popular solvers:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
            {popularSolvers.map((solver, index) => (
              <a
                key={solver.name}
                href={solver.href}
                className={`inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-3 bg-white border border-gray-200 rounded-full font-medium text-gray-700 transition-all duration-200 transform hover:scale-105 hover:shadow-md text-sm sm:text-base ${solver.color}`}
              >
                <solver.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{solver.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 sm:mb-16 animate-fade-in-up px-4">
          <a
            href="/all-solvers"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-2xl font-semibold text-base sm:text-lg hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
          >
            <Zap className="w-5 h-5" />
            <span>Find Solutions</span>
          </a>
          
          <a
            href="/connections-hints"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 rounded-2xl font-semibold text-base sm:text-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
          >
            <Calendar className="w-5 h-5" />
            <span>Daily Answers</span>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto animate-fade-in-up px-4">
          {[
            { number: '25+', label: 'Game Solvers', color: 'from-teal-500 to-teal-600' },
            { number: '50K+', label: 'Daily Users', color: 'from-lime-500 to-lime-600' },
            { number: '1M+', label: 'Puzzles Solved', color: 'from-yellow-400 to-yellow-500' },
            { number: '99.9%', label: 'Accuracy Rate', color: 'from-orange-400 to-orange-500' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};

export default Hero;