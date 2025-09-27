import React, { useState } from 'react';
import { Calendar, Flower, Eye, EyeOff, Lightbulb, Clock, Star } from 'lucide-react';

const BlossomHints: React.FC = () => {
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
    number: 156,
    centerLetter: 'R',
    outerLetters: ['B', 'L', 'O', 'S', 'M', 'E'],
    theme: 'Spring Flowers',
    hint: 'Think about flowers that bloom in springtime',
    words: [
      'ROSE', 'BLOOM', 'BLOSSOM', 'EMBER', 'SOMBRE', 'ROBES'
    ],
    pangram: 'BLOSSOM',
    explanation: 'All words relate to flowers, blooming, or spring themes.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Flower className="w-4 h-4 mr-2" />
            Blossom Word Game Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blossom <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Hints</span>
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

        {/* Flower Display */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Flower</h2>
          <div className="flex justify-center">
            <div className="relative">
              {/* Center Letter */}
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {puzzleData.centerLetter}
              </div>
              
              {/* Outer Letters - Petals */}
              {puzzleData.outerLetters.map((letter, index) => {
                const angle = (index * 60) - 90; // 6 petals, 60 degrees apart, starting from top
                const radius = 60;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={letter}
                    className="absolute w-14 h-14 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full flex items-center justify-center text-pink-700 text-lg font-bold shadow-md"
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
          <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Theme Hint</h3>
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
              >
                {showHints ? (
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
          
          {showHints && (
            <div className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-gray-700 font-medium mb-2">Theme: {puzzleData.theme}</p>
                  <p className="text-gray-600">{puzzleData.hint}</p>
                </div>
              </div>
              
              {showAnswers && (
                <div className="mt-4 p-4 bg-pink-50 rounded-lg">
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      Pangram (uses all letters):
                    </p>
                    <div className="text-2xl font-bold text-pink-700">
                      {puzzleData.pangram}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">All Words:</p>
                    <div className="flex flex-wrap gap-2">
                      {puzzleData.words.map(word => (
                        <span key={word} className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                          {word}
                        </span>
                      ))}
                    </div>
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
                : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* How to Play */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            How to Play Blossom
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Basic Rules</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Use the center letter in every word</li>
                <li>• Words must be at least 4 letters long</li>
                <li>• Letters can be used multiple times</li>
                <li>• Find the pangram (uses all letters)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Strategy Tips</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with common word patterns</li>
                <li>• Look for prefixes and suffixes</li>
                <li>• Try different letter combinations</li>
                <li>• Think about the theme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlossomHints;