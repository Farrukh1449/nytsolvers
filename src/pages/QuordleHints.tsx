import React, { useState } from 'react';
import { Calendar, Grid3x3 as Grid3X3, Eye, EyeOff, Lightbulb, Clock, Target } from 'lucide-react';

const QuordleHints: React.FC = () => {
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
    number: 642,
    words: [
      {
        position: 'Top Left',
        answer: 'HOUSE',
        hints: [
          'A place where people live',
          'Has rooms and a roof',
          'Starts with H'
        ]
      },
      {
        position: 'Top Right', 
        answer: 'PLANT',
        hints: [
          'Something that grows in soil',
          'Needs water and sunlight',
          'Starts with P'
        ]
      },
      {
        position: 'Bottom Left',
        answer: 'WATER',
        hints: [
          'Essential for life',
          'H2O chemical formula',
          'Starts with W'
        ]
      },
      {
        position: 'Bottom Right',
        answer: 'LIGHT',
        hints: [
          'Opposite of darkness',
          'Helps us see things',
          'Starts with L'
        ]
      }
    ]
  };

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Quordle Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quordle <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Hints</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
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

        {/* Game Grids Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Four Grids</h2>
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {Array.from({ length: 4 }).map((_, gridIndex) => (
              <div key={gridIndex} className="border-2 border-gray-200 rounded-lg p-4">
                <div className="text-center text-sm font-medium text-gray-600 mb-2">
                  Grid {gridIndex + 1}
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: 30 }).map((_, cellIndex) => (
                    <div
                      key={cellIndex}
                      className="w-6 h-6 border border-gray-300 rounded bg-white"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hints for Each Word */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {puzzleData.words.map((word, index) => (
            <div key={word.position} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`p-4 ${
                index === 0 ? 'bg-gradient-to-r from-red-400 to-red-500' :
                index === 1 ? 'bg-gradient-to-r from-pink-400 to-pink-500' :
                index === 2 ? 'bg-gradient-to-r from-rose-400 to-rose-500' :
                'bg-gradient-to-r from-purple-400 to-purple-500'
              }`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    {word.position}
                  </h3>
                  <button
                    onClick={() => toggleHint(index)}
                    className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                  >
                    {showHints[index] ? (
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
              
              {showHints[index] && (
                <div className="p-6">
                  <div className="space-y-3">
                    {word.hints.map((hint, hintIndex) => (
                      <div key={hintIndex} className="flex items-start space-x-3">
                        <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{hint}</p>
                      </div>
                    ))}
                  </div>
                  
                  {showAnswers && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Answer:</p>
                      <div className="text-2xl font-bold text-red-600 tracking-wider">
                        {word.answer}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show Answers Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              showAnswers 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Strategy Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Quordle Strategy Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Starting Strategy</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Use vowel-heavy starting words</li>
                <li>• Try words with common consonants</li>
                <li>• Don't repeat letters in early guesses</li>
                <li>• Focus on one grid at a time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Advanced Tips</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Save easier grids for last</li>
                <li>• Use process of elimination</li>
                <li>• Consider letter frequency</li>
                <li>• Think of word patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuordleHints;