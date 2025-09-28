import React, { useState } from 'react';
import { Calendar, Target, Eye, EyeOff, Lightbulb, Clock } from 'lucide-react';

const ConnectionsHints: React.FC = () => {
  const [showHints, setShowHints] = useState([false, false, false, false]);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: 'Sat, Sep 27',
    number: 542,
    categories: [
      {
        name: 'YELLOW (EASIEST)',
        color: 'bg-yellow-400',
        hint: 'Things you might find in a kitchen drawer',
        words: ['FORK', 'KNIFE', 'SPOON', 'LADLE'],
        explanation: 'Common kitchen utensils used for eating and cooking.'
      },
      {
        name: 'GREEN (EASY)',
        color: 'bg-green-400', 
        hint: 'Words that can come before "BOARD"',
        words: ['CLIP', 'DASH', 'KEY', 'SURF'],
        explanation: 'CLIPBOARD, DASHBOARD, KEYBOARD, SURFBOARD'
      },
      {
        name: 'BLUE (MEDIUM)',
        color: 'bg-blue-400',
        hint: 'Things that are typically round',
        words: ['BALL', 'COIN', 'PIZZA', 'WHEEL'],
        explanation: 'Objects that have a circular shape.'
      },
      {
        name: 'PURPLE (HARDEST)',
        color: 'bg-purple-400',
        hint: 'Words with double letters',
        words: ['ALLEY', 'BERRY', 'DIZZY', 'HAPPY'],
        explanation: 'Each word contains repeated consecutive letters.'
      }
    ]
  };

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Connections NYT: Hints For Today's Puzzle, {puzzleData.date}
          </h1>
          
          {/* Intro Text */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              Love the NYT Wordle hack? You can find daily NYT Connections hints and answers every day on our website.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Play Today's NYT Game
            </button>
          </div>
          
          {/* Spoiler Alert */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-gray-700">
              <strong>Psst... Connections Spoiler Ahead!</strong>
            </p>
            <p className="text-gray-600 text-sm mt-1">
              We're the ANSWER POLICE! If you don't want to know the hints to today's NYT Connections puzzle, please stop reading now. Otherwise, please continue below.
            </p>
          </div>
        </div>

        {/* Game Grid Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Words</h2>
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
            {puzzleData.categories.flatMap(cat => cat.words).sort().map((word, index) => (
              <div
                key={word}
                className="bg-gray-100 rounded-lg p-3 text-center font-semibold text-gray-800 hover:bg-gray-200 transition-colors duration-200 text-sm"
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Hints Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Hints by Difficulty
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
                          <span key={word} className="bg-blue-200 px-3 py-1 rounded-full text-sm font-medium">
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
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Want to Play More Section */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Play More NYT Connections Games?
            </h2>
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
              <span>Yesterday's Connections</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Daily Games Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Daily Games Hints & Answers:
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We also help out users discover other daily word guessing games.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Wordle Answers</h3>
              <p className="text-sm text-gray-600">Daily hints</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Connections Answers</h3>
              <p className="text-sm text-gray-600">Daily hints</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">NYT Mini Answers</h3>
              <p className="text-sm text-gray-600">Daily hints</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Strands Answers</h3>
              <p className="text-sm text-gray-600">Daily hints</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Spelling Bee Answers</h3>
              <p className="text-sm text-gray-600">Daily hints</p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Connections Strategy Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">General Strategy</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with the easiest category (yellow)</li>
                <li>• Look for obvious connections first</li>
                <li>• Group similar words together</li>
                <li>• Use process of elimination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Common Categories</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Colors, animals, foods</li>
                <li>• Word patterns (endings, prefixes)</li>
                <li>• Related concepts or themes</li>
                <li>• Parts of something larger</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsHints;