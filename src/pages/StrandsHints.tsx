import React, { useState } from 'react';
import { Calendar, Target, Eye, EyeOff, Lightbulb, Clock, Zap } from 'lucide-react';

const StrandsHints: React.FC = () => {
  const [showHint, setShowHint] = useState(false);
  const [showSpangram, setShowSpangram] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    number: 287,
    theme: 'Kitchen Essentials',
    hint: 'Things you\'d find in every well-equipped kitchen',
    spangram: 'COOKINGUTENSILS',
    spangramHint: 'Tools used for food preparation (two words)',
    words: ['KNIFE', 'SPOON', 'WHISK', 'TONGS', 'LADLE', 'SPATULA'],
    explanation: 'All words are common kitchen utensils used for cooking and food preparation.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            NYT Strands Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Strands <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Hints</span>
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

        {/* Theme Display */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Today's Theme</h2>
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 px-6 py-3 rounded-xl">
              <span className="text-2xl font-bold text-orange-700">{puzzleData.theme}</span>
            </div>
          </div>
        </div>

        {/* Hint Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-orange-400 to-red-400 p-4">
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
                <p className="text-gray-700 text-lg">{puzzleData.hint}</p>
              </div>
            </div>
          )}
        </div>

        {/* Spangram Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Spangram Hint
              </h3>
              <button
                onClick={() => setShowSpangram(!showSpangram)}
                className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
              >
                {showSpangram ? (
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
          
          {showSpangram && (
            <div className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                <p className="text-gray-700 text-lg">{puzzleData.spangramHint}</p>
              </div>
              
              {showAnswers && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Spangram Answer:</p>
                  <div className="text-2xl font-bold text-yellow-700 tracking-wider">
                    {puzzleData.spangram}
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
                : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* All Answers */}
        {showAnswers && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">All Theme Words</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {puzzleData.words.map((word, index) => (
                <div
                  key={word}
                  className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 text-center font-bold text-gray-900"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">{puzzleData.explanation}</p>
            </div>
          </div>
        )}

        {/* How to Play */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            How to Play Strands
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Basic Rules</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Find words that fit the theme</li>
                <li>• Words can be horizontal, vertical, or diagonal</li>
                <li>• Letters can only be used once per word</li>
                <li>• Find the spangram (spans entire grid)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Strategy Tips</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with the theme in mind</li>
                <li>• Look for the spangram first</li>
                <li>• Use all letters in the grid</li>
                <li>• Think of word variations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrandsHints;