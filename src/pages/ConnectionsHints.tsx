import React, { useState } from 'react';
import { Calendar, Target, Eye, EyeOff, Lightbulb, Clock, ArrowRight, Zap, BookOpen, Grid3x3 as Grid3X3, Flower } from 'lucide-react';

const ConnectionsHints: React.FC = () => {
  const [showHints, setShowHints] = useState([false, false, false, false]);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    number: 542,
    categories: [
      {
        name: 'YELLOW (EASIEST)',
        color: 'bg-yellow-400',
        hint: 'Things you might find in a kitchen drawer',
        words: ['FORK', 'KNIFE', 'SPOON', 'LADLE'],
        explanation: 'Common kitchen utensils used for eating and cooking.'
      },
      {
        name: 'GREEN (EASY)',
        color: 'bg-green-400', 
        hint: 'Words that can come before "BOARD"',
        words: ['CLIP', 'DASH', 'KEY', 'SURF'],
        explanation: 'CLIPBOARD, DASHBOARD, KEYBOARD, SURFBOARD'
      },
      {
        name: 'BLUE (MEDIUM)',
        color: 'bg-blue-400',
        hint: 'Things that are typically round',
        words: ['BALL', 'COIN', 'PIZZA', 'WHEEL'],
        explanation: 'Objects that have a circular shape.'
      },
      {
        name: 'PURPLE (HARDEST)',
        color: 'bg-purple-400',
        hint: 'Words with double letters',
        words: ['ALLEY', 'BERRY', 'DIZZY', 'HAPPY'],
        explanation: 'Each word contains repeated consecutive letters.'
      }
    ]
  };

  const relatedGames = [
    {
      title: 'Wordle Hints',
      description: 'Get daily hints for today\'s Wordle puzzle',
      href: '/wordle-hints',
      icon: Target,
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Spelling Bee Hints',
      description: 'Find today\'s pangram and word list',
      href: '/spelling-bee-hints',
      icon: Zap,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Strands Hints',
      description: 'Navigate today\'s Strands puzzle',
      href: '/strands-hints',
      icon: Target,
      gradient: 'from-red-400 to-pink-500'
    },
    {
      title: 'Mini Crossword Hints',
      description: 'Quick hints for the NYT Mini',
      href: '/mini-crossword-hints',
      icon: Grid3X3,
      gradient: 'from-teal-400 to-cyan-500'
    }
  ];

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            NYT Connections Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connections <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hints</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600 mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {puzzleData.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Puzzle #{puzzleData.number}
            </div>
          </div>
        </div>

        {/* Game Board Visual */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm">
              Flip any "?" below to reveal the word
            </div>
          </div>
          
          <div className="space-y-4">
            {puzzleData.categories.map((category, categoryIndex) => (
              <div key={category.name} className="relative">
                <div className={`${category.color} rounded-xl p-4 relative`}>
                  {/* Hint Button */}
                  <button
                    onClick={() => toggleHint(categoryIndex)}
                    className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center"
                  >
                    <Lightbulb className="w-4 h-4 mr-1" />
                    Hint
                  </button>
                  
                  {/* Top hint box */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/30 border-2 border-white/50 rounded-lg px-6 py-3 text-center">
                      {showHints[categoryIndex] ? (
                        <span className="text-white font-semibold">{category.hint}</span>
                      ) : (
                        <span className="text-white text-2xl font-bold">?</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Word boxes */}
                  <div className="grid grid-cols-4 gap-3">
                    {category.words.map((word, wordIndex) => (
                      <div
                        key={word}
                        className="bg-white/30 border-2 border-white/50 rounded-lg px-4 py-3 text-center"
                      >
                        {showAnswers ? (
                          <span className="text-white font-semibold">{word}</span>
                        ) : (
                          <span className="text-white text-xl font-bold">?</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <div className="bg-gray-800 text-white px-4 py-2 rounded-lg inline-block text-sm">
              Tap a word to place it into the right group
            </div>
          </div>
        </div>

        {/* Show Answers Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              showAnswers 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Detailed Hints Section */}
        {showHints.some(hint => hint) && (
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Detailed Hints
            </h2>
            
            {puzzleData.categories.map((category, index) => (
              showHints[index] && (
                <div key={category.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className={`${category.color} p-4`}>
                    <h3 className="text-lg font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <p className="text-gray-700 font-medium mb-2">Hint:</p>
                        <p className="text-gray-600">{category.hint}</p>
                      </div>
                    </div>
                    
                    {showAnswers && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Answer:</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {category.words.map(word => (
                            <span key={word} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                              {word}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{category.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* You Might Need Help Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You Might Need Help in Other <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NYT Games</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore hints and solutions for other popular New York Times puzzle games
            </p>
          </div>

          {/* Related Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {relatedGames.map((game, index) => (
              <a
                key={game.title}
                href={game.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${game.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <game.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {game.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                    Get Hints
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Strategy Tips */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Connections Strategy Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">General Strategy</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Start with the most obvious connections - usually the yellow category
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Look for common themes like colors, animals, or foods
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Purple category often has wordplay or tricks
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Use process of elimination for difficult categories
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Common Categories</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Things that go together (like kitchen utensils)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Words with multiple meanings or compound words
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Prefixes, suffixes, or word patterns
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Pop culture references or wordplay
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsHints;