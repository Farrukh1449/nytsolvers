import React, { useState } from 'react';
import { Calendar, Salad, Eye, EyeOff, Lightbulb, Clock, Shuffle } from 'lucide-react';

const WordSaladHints: React.FC = () => {
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
    number: 167,
    categories: [
      {
        name: 'GREEN CATEGORY',
        color: 'bg-green-400',
        hint: 'Types of vegetables',
        words: ['CARROT', 'LETTUCE', 'TOMATO', 'CUCUMBER'],
        explanation: 'Common vegetables you might find in a salad or garden.'
      },
      {
        name: 'YELLOW CATEGORY',
        color: 'bg-yellow-400', 
        hint: 'Kitchen appliances',
        words: ['BLENDER', 'TOASTER', 'MICROWAVE', 'DISHWASHER'],
        explanation: 'Electrical appliances commonly found in modern kitchens.'
      },
      {
        name: 'ORANGE CATEGORY',
        color: 'bg-orange-400',
        hint: 'Things that are round',
        words: ['BALL', 'WHEEL', 'COIN', 'PIZZA'],
        explanation: 'Objects that have a circular or spherical shape.'
      },
      {
        name: 'RED CATEGORY',
        color: 'bg-red-400',
        hint: 'Words with double letters',
        words: ['COFFEE', 'BUTTER', 'PEPPER', 'DINNER'],
        explanation: 'Each word contains at least one pair of consecutive identical letters.'
      }
    ]
  };

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-yellow-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Salad className="w-4 h-4 mr-2" />
            Word Salad Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Word Salad <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">Hints</span>
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

        {/* Game Grid Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Shuffle className="w-6 h-6 mr-2" />
            Today's Word Salad
          </h2>
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
            {puzzleData.categories.flatMap(cat => cat.words).sort().map((word, index) => (
              <div
                key={word}
                className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg p-3 text-center font-semibold text-gray-800 hover:from-green-200 hover:to-yellow-200 transition-colors duration-200 text-sm"
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Hints Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Category Hints
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
                          <span key={word} className="bg-green-200 px-3 py-1 rounded-full text-sm font-medium">
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
                : 'bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Word Salad Strategy Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Finding Categories</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Look for obvious groupings first</li>
                <li>• Consider different types of connections</li>
                <li>• Think about word patterns</li>
                <li>• Use process of elimination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Common Patterns</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Things in the same category</li>
                <li>• Words with similar structure</li>
                <li>• Related concepts or themes</li>
                <li>• Parts of a larger whole</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSaladHints;