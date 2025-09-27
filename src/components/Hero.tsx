import React from 'react';
import { Search, Target, Puzzle, Grid3x3 as Grid3X3, BookOpen, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearchOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearchOpen }) => {
  const gameIcons = [
    { icon: Grid3X3, name: 'Wordle', color: 'from-yellow-400 to-orange-500' },
    { icon: Target, name: 'Connections', color: 'from-blue-400 to-indigo-500' },
    { icon: Puzzle, name: 'Spelling Bee', color: 'from-amber-400 to-yellow-500' },
    { icon: BookOpen, name: 'Crossword', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-lime-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-200/30 to-lime-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-yellow-200/20 to-teal-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-lime-200/25 to-yellow-200/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-600 via-lime-600 to-yellow-500 bg-clip-text text-transparent">
              NYT
            </span>
            <span className="text-gray-800">Solvers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your ultimate destination for solving New York Times puzzles and word games. 
            Get instant hints, answers, and powerful solving tools.
          </p>
        </div>

        {/* Game Icons */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-center items-center space-x-6 mb-8">
            {gameIcons.map((game, index) => (
              <div 
                key={game.name}
                className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${game.color} shadow-lg flex items-center justify-center mb-2 group-hover:shadow-xl transition-all duration-300`}>
                  <game.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-teal-600 transition-colors duration-300">
                  {game.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onSearchOpen}
            className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-2xl font-semibold text-lg hover:from-teal-600 hover:to-lime-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Find Solutions</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <a
            href="https://www.nytimes.com/games"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-teal-300 hover:text-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <Grid3X3 className="w-5 h-5" />
            <span>Play NYT Games</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { number: '25+', label: 'Game Solvers', color: 'from-teal-500 to-teal-600' },
            { number: '50K+', label: 'Daily Users', color: 'from-lime-500 to-lime-600' },
            { number: '1M+', label: 'Puzzles Solved', color: 'from-yellow-400 to-yellow-500' },
            { number: '99.9%', label: 'Accuracy Rate', color: 'from-orange-400 to-orange-500' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-teal-500 to-lime-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;