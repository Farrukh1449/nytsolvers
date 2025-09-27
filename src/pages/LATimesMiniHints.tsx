import React, { useState } from 'react';
import { Calendar, Grid3x3 as Grid3X3, Eye, EyeOff, Lightbulb, Clock, MapPin } from 'lucide-react';

const LATimesMiniHints: React.FC = () => {
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
      { direction: 'Across', number: 1, clue: 'California city', answer: 'LA', hint: '2 letters, City of Angels abbreviation' },
      { direction: 'Across', number: 3, clue: 'Beach activity', answer: 'SURF', hint: '4 letters, ride the waves' },
      { direction: 'Across', number: 5, clue: 'Movie star', answer: 'ACTOR', hint: '5 letters, performs in films' },
      { direction: 'Down', number: 1, clue: 'Bright light', answer: 'LAMP', hint: '4 letters, illuminates a room' },
      { direction: 'Down', number: 2, clue: 'Breakfast drink', answer: 'JUICE', hint: '5 letters, orange or apple' },
      { direction: 'Down', number: 4, clue: 'Ocean bird', answer: 'GULL', hint: '4 letters, seagull' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            LA Times Mini Crossword
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LA Times Mini <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Hints</span>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's LA Times Mini</h2>
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
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center">
                <Grid3X3 className="w-5 h-5 mr-2" />
                All Clues
              </h3>
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
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm font-bold">
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
                                <div className="mt-2 p-2 bg-orange-50 rounded">
                                  <span className="font-bold text-orange-700">{clue.answer}</span>
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
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-bold">
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
                                <div className="mt-2 p-2 bg-yellow-50 rounded">
                                  <span className="font-bold text-yellow-700">{clue.answer}</span>
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
                : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            LA Times Mini Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">West Coast Flavor</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Often features California references</li>
                <li>• Beach and surf culture clues</li>
                <li>• Hollywood and entertainment themes</li>
                <li>• Local landmarks and places</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Solving Strategy</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with shortest answers</li>
                <li>• Look for proper nouns</li>
                <li>• Consider abbreviations</li>
                <li>• Think about common phrases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LATimesMiniHints;