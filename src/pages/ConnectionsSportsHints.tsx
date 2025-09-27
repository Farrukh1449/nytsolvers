import React, { useState } from 'react';
import { Calendar, Trophy, Eye, EyeOff, Lightbulb, Clock } from 'lucide-react';

const ConnectionsSportsHints: React.FC = () => {
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
    number: 89,
    categories: [
      {
        name: 'YELLOW (EASIEST)',
        color: 'bg-yellow-400',
        hint: 'Basketball positions',
        words: ['GUARD', 'FORWARD', 'CENTER', 'POINT'],
        explanation: 'The main positions in basketball: Point Guard, Shooting Guard, Small Forward, Power Forward, and Center.'
      },
      {
        name: 'GREEN (EASY)',
        color: 'bg-green-400', 
        hint: 'Baseball equipment',
        words: ['BAT', 'GLOVE', 'HELMET', 'CLEATS'],
        explanation: 'Essential equipment used by baseball players during games.'
      },
      {
        name: 'BLUE (MEDIUM)',
        color: 'bg-blue-400',
        hint: 'Olympic sports',
        words: ['SWIMMING', 'DIVING', 'ROWING', 'SAILING'],
        explanation: 'Water-based sports that are featured in the Summer Olympics.'
      },
      {
        name: 'PURPLE (HARDEST)',
        color: 'bg-purple-400',
        hint: 'Words that can follow "FIELD"',
        words: ['GOAL', 'HOCKEY', 'TRACK', 'DAY'],
        explanation: 'FIELD GOAL, FIELD HOCKEY, TRACK AND FIELD, FIELD DAY - all compound terms or phrases.'
      }
    ]
  };

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            NYT Connections: Sports Edition
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connections: Sports Edition <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Hints</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {puzzleData.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Sports Puzzle #{puzzleData.number}
            </div>
          </div>
        </div>

        {/* Game Grid Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Sports Words</h2>
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
            {puzzleData.categories.flatMap(cat => cat.words).sort().map((word, index) => (
              <div
                key={word}
                className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 text-center font-semibold text-gray-800 hover:from-orange-200 hover:to-red-200 transition-colors duration-200"
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Hints Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Sports Hints by Difficulty
          </h2>
          
          {puzzleData.categories.map((category, index) => (
            <div key={category.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`${category.color} p-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{category.name}</h3>
                  <button
                    onClick={() => toggleHint(index)}
                    className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                  >
                    {showHints[index] ? (
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
              
              {showHints[index] && (
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
                          <span key={word} className="bg-orange-200 px-3 py-1 rounded-full text-sm font-medium">
                            {word}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{category.explanation}</p>
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
                : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Sports Connections Strategy
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Sports Knowledge</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Think about different sports categories</li>
                <li>• Consider equipment, positions, rules</li>
                <li>• Look for Olympic vs. professional sports</li>
                <li>• Think about team vs. individual sports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Common Categories</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Equipment for specific sports</li>
                <li>• Positions in team sports</li>
                <li>• Types of competitions</li>
                <li>• Sports terminology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsSportsHints;