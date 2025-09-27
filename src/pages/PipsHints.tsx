import React, { useState } from 'react';
import { Calendar, Circle, Eye, EyeOff, Lightbulb, Clock, Star } from 'lucide-react';

const PipsHints: React.FC = () => {
  const [showHints, setShowHints] = useState({ easy: false, medium: false, hard: false });
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
    levels: [
      {
        difficulty: 'Easy',
        color: 'bg-green-400',
        hint: 'Common household items',
        answer: 'CHAIR',
        clue: 'Something you sit on with four legs',
        explanation: 'A piece of furniture designed for sitting, typically having four legs and a back.'
      },
      {
        difficulty: 'Medium',
        color: 'bg-yellow-400',
        hint: 'Musical instrument',
        answer: 'PIANO',
        clue: 'Black and white keys make beautiful music',
        explanation: 'A large keyboard instrument with strings that are struck by hammers when keys are pressed.'
      },
      {
        difficulty: 'Hard',
        color: 'bg-red-400',
        hint: 'Scientific concept',
        answer: 'GRAVITY',
        clue: 'What keeps us grounded on Earth',
        explanation: 'The force that attracts objects toward the center of the Earth, discovered by Newton.'
      }
    ]
  };

  const toggleHint = (level: 'easy' | 'medium' | 'hard') => {
    setShowHints(prev => ({
      ...prev,
      [level]: !prev[level]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Circle className="w-4 h-4 mr-2" />
            NYT Pips Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pips <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Hints</span>
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

        {/* Difficulty Levels */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Today's Challenges
          </h2>
          
          {puzzleData.levels.map((level, index) => (
            <div key={level.difficulty} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`${level.color} p-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center">
                    {index === 0 && <Star className="w-5 h-5 mr-2" />}
                    {level.difficulty} Level
                  </h3>
                  <button
                    onClick={() => toggleHint(level.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard')}
                    className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                  >
                    {showHints[level.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'] ? (
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
              
              {showHints[level.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'] && (
                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-gray-700 font-medium mb-2">Category: {level.hint}</p>
                      <p className="text-gray-600">{level.clue}</p>
                    </div>
                  </div>
                  
                  {showAnswers && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Answer:</p>
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {level.answer}
                      </div>
                      <p className="text-sm text-gray-600">{level.explanation}</p>
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
                : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* How to Play */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            How to Play Pips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Game Rules</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Three difficulty levels: Easy, Medium, Hard</li>
                <li>• Each level has a different challenge</li>
                <li>• Use the hints to guide your thinking</li>
                <li>• Progress from easy to hard</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Strategy Tips</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Start with the easy level</li>
                <li>• Think broadly about categories</li>
                <li>• Consider multiple meanings</li>
                <li>• Use process of elimination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipsHints;