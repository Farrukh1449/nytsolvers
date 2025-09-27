import React, { useState } from 'react';
import { Calendar, BookOpen, Eye, EyeOff, Lightbulb, Clock, Grid3x3 as Grid3X3 } from 'lucide-react';

const CrosswordHints: React.FC = () => {
  const [showClues, setShowClues] = useState({ across: false, down: false });
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    constructor: 'Will Shortz',
    theme: 'Word Play',
    acrossClues: [
      { number: 1, clue: 'Morning beverage', answer: 'COFFEE', hint: 'Popular caffeinated drink' },
      { number: 7, clue: 'Feline pet', answer: 'CAT', hint: 'Meows and purrs' },
      { number: 10, clue: 'Large body of water', answer: 'OCEAN', hint: 'Pacific or Atlantic' },
      { number: 15, clue: 'Flying mammal', answer: 'BAT', hint: 'Nocturnal creature' },
      { number: 17, clue: 'Garden tool', answer: 'RAKE', hint: 'Used for leaves' }
    ],
    downClues: [
      { number: 1, clue: 'Frozen precipitation', answer: 'SNOW', hint: 'White and cold' },
      { number: 2, clue: 'Cooking vessel', answer: 'POT', hint: 'Used on stove' },
      { number: 3, clue: 'Tree fruit', answer: 'APPLE', hint: 'Red or green' },
      { number: 4, clue: 'Time period', answer: 'ERA', hint: 'Historical age' },
      { number: 5, clue: 'Bird\'s home', answer: 'NEST', hint: 'Made of twigs' }
    ]
  };

  const toggleClues = (direction: 'across' | 'down') => {
    setShowClues(prev => ({
      ...prev,
      [direction]: !prev[direction]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            NYT Crossword Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Crossword <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hints</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {puzzleData.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Constructor: {puzzleData.constructor}
            </div>
          </div>
        </div>

        {/* Puzzle Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Today's Theme</h2>
            <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-xl">
              <span className="text-xl font-bold text-indigo-700">{puzzleData.theme}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Across Clues */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <Grid3X3 className="w-5 h-5 mr-2" />
                  Across Clues
                </h3>
                <button
                  onClick={() => toggleClues('across')}
                  className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                >
                  {showClues.across ? (
                    <>
                      <EyeOff className="w-4 h-4 mr-1" />
                      Hide Hints
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-1" />
                      Show Hints
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {puzzleData.acrossClues.map((clue, index) => (
                  <div key={clue.number} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm font-bold">
                        {clue.number}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{clue.clue}</p>
                        {showClues.across && (
                          <div className="mt-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Lightbulb className="w-4 h-4 text-yellow-500" />
                              <span>{clue.hint}</span>
                            </div>
                            {showAnswers && (
                              <div className="mt-2 p-2 bg-indigo-50 rounded">
                                <span className="font-bold text-indigo-700">{clue.answer}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Down Clues */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <Grid3X3 className="w-5 h-5 mr-2" />
                  Down Clues
                </h3>
                <button
                  onClick={() => toggleClues('down')}
                  className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                >
                  {showClues.down ? (
                    <>
                      <EyeOff className="w-4 h-4 mr-1" />
                      Hide Hints
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-1" />
                      Show Hints
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {puzzleData.downClues.map((clue, index) => (
                  <div key={clue.number} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-bold">
                        {clue.number}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{clue.clue}</p>
                        {showClues.down && (
                          <div className="mt-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Lightbulb className="w-4 h-4 text-yellow-500" />
                              <span>{clue.hint}</span>
                            </div>
                            {showAnswers && (
                              <div className="mt-2 p-2 bg-purple-50 rounded">
                                <span className="font-bold text-purple-700">{clue.answer}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Show Answers Button */}
        <div className="text-center mt-8 mb-8">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              showAnswers 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Crossword Solving Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Getting Started</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with the easiest clues</li>
                <li>• Look for fill-in-the-blank clues</li>
                <li>• Use crossing letters as hints</li>
                <li>• Consider multiple meanings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Advanced Strategies</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Look for wordplay and puns</li>
                <li>• Consider abbreviations</li>
                <li>• Think about proper nouns</li>
                <li>• Use theme clues to help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrosswordHints;