import React, { useState } from 'react';
import { Calendar, Square, Eye, EyeOff, Lightbulb, Clock, Target } from 'lucide-react';

const LetterBoxedHints: React.FC = () => {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    number: 234,
    letters: {
      top: ['A', 'B', 'C'],
      right: ['D', 'E', 'F'],
      bottom: ['G', 'H', 'I'],
      left: ['J', 'K', 'L']
    },
    hint: 'Think about words that can chain together using the last letter of one as the first letter of the next',
    solution: ['JADE', 'ECHO', 'OPAL'],
    explanation: 'JADE ends with E, ECHO starts with E and ends with O, OPAL starts with O. This uses all 12 letters.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Square className="w-4 h-4 mr-2" />
            NYT Letter Boxed Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Letter Boxed <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Hints</span>
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

        {/* Letter Box Display */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Letter Box</h2>
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-4 border-gray-300 rounded-lg"></div>
              
              {/* Top Side */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex space-x-2">
                  {puzzleData.letters.top.map((letter, index) => (
                    <div key={index} className="w-12 h-12 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center text-lg font-bold text-red-700">
                      {letter}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col space-y-2">
                  {puzzleData.letters.right.map((letter, index) => (
                    <div key={index} className="w-12 h-12 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center text-lg font-bold text-blue-700">
                      {letter}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Side */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="flex space-x-2">
                  {puzzleData.letters.bottom.map((letter, index) => (
                    <div key={index} className="w-12 h-12 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center text-lg font-bold text-green-700">
                      {letter}
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Side */}
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col space-y-2">
                  {puzzleData.letters.left.map((letter, index) => (
                    <div key={index} className="w-12 h-12 bg-yellow-100 border-2 border-yellow-300 rounded-lg flex items-center justify-center text-lg font-bold text-yellow-700">
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hint Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Strategy Hint</h3>
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
              >
                {showHint ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-1" />
                    Hide Hint
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-1" />
                    Show Hint
                  </>
                )}
              </button>
            </div>
          </div>
          
          {showHint && (
            <div className="p-6">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                <p className="text-gray-700">{puzzleData.hint}</p>
              </div>
            </div>
          )}
        </div>

        {/* Solution Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-400 to-teal-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Today's Solution</h3>
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
              >
                {showSolution ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-1" />
                    Hide Solution
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-1" />
                    Show Solution
                  </>
                )}
              </button>
            </div>
          </div>
          
          {showSolution && (
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-gray-900">
                  {puzzleData.solution.map((word, index) => (
                    <React.Fragment key={word}>
                      <span className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg">
                        {word}
                      </span>
                      {index < puzzleData.solution.length - 1 && (
                        <Target className="w-5 h-5 text-gray-400" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-center">{puzzleData.explanation}</p>
            </div>
          )}
        </div>

        {/* Show All Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              showAnswers 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Rules and Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Letter Boxed Rules & Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Game Rules</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Use all 12 letters at least once</li>
                <li>• Words must be at least 3 letters long</li>
                <li>• Can't use consecutive letters from same side</li>
                <li>• Next word must start with last letter of previous word</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Strategy Tips</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Look for long words that use many letters</li>
                <li>• Find words that end with uncommon letters</li>
                <li>• Plan word chains in advance</li>
                <li>• Use all vowels efficiently</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterBoxedHints;