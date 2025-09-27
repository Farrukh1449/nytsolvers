import React, { useState } from 'react';
import { Calendar, Grid3x3 as Grid3X3, Eye, EyeOff, Lightbulb, Clock } from 'lucide-react';

const MiniCrosswordHints: React.FC = () => {
  const [showHints, setShowHints] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    clues: [
      { direction: 'Across', number: 1, clue: 'Morning drink', answer: 'TEA', hint: '3 letters, hot beverage' },
      { direction: 'Across', number: 4, clue: 'Feline', answer: 'CAT', hint: '3 letters, pet that meows' },
      { direction: 'Across', number: 5, clue: 'Frozen water', answer: 'ICE', hint: '3 letters, cold and solid' },
      { direction: 'Down', number: 1, clue: 'Tall plant', answer: 'TREE', hint: '4 letters, has branches' },
      { direction: 'Down', number: 2, clue: 'Breakfast food', answer: 'EGG', hint: '3 letters, from chickens' },
      { direction: 'Down', number: 3, clue: 'Ocean mammal', answer: 'WHALE', hint: '5 letters, very large' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Grid3X3 className="w-4 h-4 mr-2" />
            NYT Mini Crossword Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mini Crossword <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Hints</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {puzzleData.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Quick 5x5 Puzzle
            </div>
          </div>
        </div>

        {/* Mini Grid Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Mini Grid</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-1 w-60 h-60">
              {Array.from({ length: 25 }).map((_, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-300 bg-white flex items-center justify-center text-sm font-bold"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Clues Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-teal-400 to-cyan-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">All Clues</h3>
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
              >
                {showHints ? (
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
            <div className="grid md:grid-cols-2 gap-8">
              {/* Across */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Across</h4>
                <div className="space-y-4">
                  {puzzleData.clues.filter(clue => clue.direction === 'Across').map((clue, index) => (
                    <div key={clue.number} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-sm font-bold">
                          {clue.number}
                        </span>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium">{clue.clue}</p>
                          {showHints && (
                            <div className="mt-2">
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Lightbulb className="w-4 h-4 text-yellow-500" />
                                <span>{clue.hint}</span>
                              </div>
                              {showAnswers && (
                                <div className="mt-2 p-2 bg-teal-50 rounded">
                                  <span className="font-bold text-teal-700">{clue.answer}</span>
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

              {/* Down */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Down</h4>
                <div className="space-y-4">
                  {puzzleData.clues.filter(clue => clue.direction === 'Down').map((clue, index) => (
                    <div key={clue.number} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-sm font-bold">
                          {clue.number}
                        </span>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium">{clue.clue}</p>
                          {showHints && (
                            <div className="mt-2">
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Lightbulb className="w-4 h-4 text-yellow-500" />
                                <span>{clue.hint}</span>
                              </div>
                              {showAnswers && (
                                <div className="mt-2 p-2 bg-cyan-50 rounded">
                                  <span className="font-bold text-cyan-700">{clue.answer}</span>
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
        </div>

        {/* Show Answers Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              showAnswers 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Mini Crossword Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Quick Solving</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with the shortest words</li>
                <li>• Use crossing letters immediately</li>
                <li>• Think of common short words</li>
                <li>• Don't overthink the clues</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Common Patterns</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 3-letter words are often simple</li>
                <li>• Look for plural endings</li>
                <li>• Consider abbreviations</li>
                <li>• Think of everyday objects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCrosswordHints;