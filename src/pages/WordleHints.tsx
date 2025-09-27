import React, { useState } from 'react';
import { Calendar, Target, Eye, EyeOff, Lightbulb, Clock, CheckCircle } from 'lucide-react';

const WordleHints: React.FC = () => {
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    number: 892,
    answer: 'PLANT',
    hints: [
      {
        title: 'First Hint',
        text: 'This word is something you might find in a garden or inside your home.'
      },
      {
        title: 'Second Hint', 
        text: 'It\'s a living thing that needs water and sunlight to grow.'
      }
    ],
    letterHints: {
      vowels: 'Contains 1 vowel',
      consonants: 'Contains 4 consonants',
      commonLetters: 'Uses common letters like P, L, N, T',
      startsWith: 'Starts with P'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-yellow-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            NYT Wordle Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Today's Wordle <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">Hints</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {puzzleData.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Wordle #{puzzleData.number}
            </div>
          </div>
        </div>

        {/* Wordle Grid Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Today's Puzzle</h2>
          <div className="grid grid-cols-5 gap-2 max-w-xs mx-auto">
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center bg-white"
              />
            ))}
          </div>
        </div>

        {/* Letter Analysis */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            Letter Analysis
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Vowels:</span>
                <span className="text-green-600 font-semibold">{puzzleData.letterHints.vowels}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Consonants:</span>
                <span className="text-blue-600 font-semibold">{puzzleData.letterHints.consonants}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">First Letter:</span>
                <span className="text-purple-600 font-semibold">{puzzleData.letterHints.startsWith}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Letter Info:</span>
                <p className="text-gray-600 text-sm mt-1">{puzzleData.letterHints.commonLetters}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hints Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Progressive Hints
          </h2>
          
          {/* First Hint */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-400 to-green-500 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Hint #1 (Gentle)</h3>
                <button
                  onClick={() => setShowHint1(!showHint1)}
                  className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                >
                  {showHint1 ? (
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
            
            {showHint1 && (
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <p className="text-gray-700">{puzzleData.hints[0].text}</p>
                </div>
              </div>
            )}
          </div>

          {/* Second Hint */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Hint #2 (Stronger)</h3>
                <button
                  onClick={() => setShowHint2(!showHint2)}
                  className="flex items-center bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                >
                  {showHint2 ? (
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
            
            {showHint2 && (
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <p className="text-gray-700">{puzzleData.hints[1].text}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Answer Section */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              showAnswer 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white'
            }`}
          >
            {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
          </button>
        </div>

        {showAnswer && (
          <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl p-8 mb-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Today's Answer</h3>
            <div className="text-6xl font-bold text-green-600 mb-4 tracking-wider">
              {puzzleData.answer}
            </div>
            <p className="text-gray-700">
              The answer is <strong>{puzzleData.answer}</strong> - a living organism that grows in soil and produces oxygen.
            </p>
          </div>
        )}

        {/* Strategy Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Wordle Strategy Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Starting Words</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Use words with common vowels (A, E, I, O)</li>
                <li>• Include frequent consonants (R, S, T, L, N)</li>
                <li>• Try: ADIEU, AUDIO, STARE, SLATE</li>
                <li>• Avoid repeating letters in first guess</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">General Strategy</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Use yellow letters in different positions</li>
                <li>• Eliminate gray letters completely</li>
                <li>• Think of common word patterns</li>
                <li>• Consider letter frequency in English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordleHints;