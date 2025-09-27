import React, { useState } from 'react';
import { Calendar, Zap, Eye, EyeOff, Lightbulb, Clock, Star, Target } from 'lucide-react';

const SpellingBeeHints: React.FC = () => {
  const [showHint, setShowHint] = useState(false);
  const [showPangram, setShowPangram] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    number: 456,
    centerLetter: 'R',
    outerLetters: ['A', 'E', 'I', 'N', 'S', 'T'],
    hint: 'Think about words related to movement and direction',
    pangram: 'TRAINERS',
    pangramHint: 'People who teach skills or fitness (8 letters)',
    words: [
      'RAIN', 'TRAIN', 'STRAIN', 'STAIN', 'SAINT', 'ANTS', 'ARTS', 'RATS', 'STAR', 'TEAR'
    ],
    explanation: 'All words must contain the center letter R and use only the given letters.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            NYT Spelling Bee Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Spelling Bee <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Hints</span>
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

        {/* Honeycomb Display */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Letters</h2>
          <div className="flex justify-center">
            <div className="relative">
              {/* Center Letter */}
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {puzzleData.centerLetter}
              </div>
              
              {/* Outer Letters - Hexagon Pattern */}
              {puzzleData.outerLetters.map((letter, index) => {
                const angle = (index * 60) - 90;
                const radius = 60;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={letter}
                    className="absolute w-14 h-14 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full flex items-center justify-center text-yellow-700 text-lg font-bold shadow-md border-2 border-yellow-300"
                    style={{
                      left: `calc(50% + ${x}px - 28px)`,
                      top: `calc(50% + ${y}px - 28px)`
                    }}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Theme Hint */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Theme Hint</h3>
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

        {/* Pangram Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Pangram Hint
              </h3>
              <button
                onClick={() => setShowPangram(!showPangram)}
                className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
              >
                {showPangram ? (
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
          
          {showPangram && (
            <div className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                <p className="text-gray-700">{puzzleData.pangramHint}</p>
              </div>
              
              {showAnswers && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Pangram Answer:</p>
                  <div className="text-2xl font-bold text-yellow-700 tracking-wider">
                    {puzzleData.pangram}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Show Answers Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              showAnswers 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* All Words */}
        {showAnswers && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">All Words</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {puzzleData.words.map((word, index) => (
                <div
                  key={word}
                  className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-3 text-center font-bold text-gray-900"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rules and Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Spelling Bee Rules & Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Game Rules</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Words must be at least 4 letters long</li>
                <li>• Words must include the center letter</li>
                <li>• Words can only use the given letters</li>
                <li>• Letters can be used multiple times</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Strategy Tips</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with common prefixes and suffixes</li>
                <li>• Look for the pangram (uses all letters)</li>
                <li>• Try different letter combinations</li>
                <li>• Think of word families</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellingBeeHints;