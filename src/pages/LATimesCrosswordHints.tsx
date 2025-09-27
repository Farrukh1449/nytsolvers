import React, { useState } from 'react';
import { Calendar, BookOpen, Eye, EyeOff, Lightbulb, Clock, MapPin } from 'lucide-react';

const LATimesCrosswordHints: React.FC = () => {
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
    constructor: 'Rich Norris',
    theme: 'California Dreaming',
    acrossClues: [
      { number: 1, clue: 'Hollywood sign city', answer: 'LOS ANGELES', hint: 'City of Angels' },
      { number: 11, clue: 'Beach activity', answer: 'SURFING', hint: 'Riding waves on a board' },
      { number: 17, clue: 'Wine region north of SF', answer: 'NAPA', hint: 'Famous valley for vineyards' },
      { number: 23, clue: 'Golden State bridge', answer: 'GOLDEN GATE', hint: 'Famous San Francisco landmark' },
      { number: 35, clue: 'Tech company hub', answer: 'SILICON VALLEY', hint: 'South Bay tech center' }
    ],
    downClues: [
      { number: 1, clue: 'Pacific coast highway', answer: 'PCH', hint: 'Scenic coastal route abbreviation' },
      { number: 2, clue: 'Movie industry', answer: 'CINEMA', hint: 'Film business' },
      { number: 3, clue: 'Redwood tree state', answer: 'CALIFORNIA', hint: 'The Golden State' },
      { number: 4, clue: 'Disneyland location', answer: 'ANAHEIM', hint: 'Orange County city' },
      { number: 5, clue: 'Earthquake fault', answer: 'SAN ANDREAS', hint: 'Major geological fault line' }
    ]
  };

  const toggleClues = (direction: 'across' | 'down') => {
    setShowClues(prev => ({
      ...prev,
      [direction]: !prev[direction]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            LA Times Crossword
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LA Times Crossword <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hints</span>
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
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-xl">
              <span className="text-xl font-bold text-blue-700">{puzzleData.theme}</span>
            </div>
            <p className="text-gray-600 mt-4">Celebrating the Golden State and West Coast culture</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Across Clues */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
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
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-bold">
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
                              <div className="mt-2 p-2 bg-blue-50 rounded">
                                <span className="font-bold text-blue-700">{clue.answer}</span>
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
                  <BookOpen className="w-5 h-5 mr-2" />
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
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            LA Times Crossword Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">West Coast Style</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Often features California culture</li>
                <li>• Entertainment industry references</li>
                <li>• Beach and outdoor lifestyle clues</li>
                <li>• Tech industry terminology</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Solving Approach</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Look for theme-related answers</li>
                <li>• Consider regional references</li>
                <li>• Think about pop culture</li>
                <li>• Use crossing letters strategically</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LATimesCrosswordHints;