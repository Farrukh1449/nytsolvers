import React, { useState } from 'react';
import { Calendar, ArrowRight, Eye, EyeOff, Lightbulb, Clock, Target } from 'lucide-react';

const BetweenleHints: React.FC = () => {
  const [showHints, setShowHints] = useState([false, false, false, false, false]);
  const [showAnswers, setShowAnswers] = useState(false);

  const todayDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const puzzleData = {
    date: todayDate,
    number: 298,
    puzzles: [
      {
        start: 'CAT',
        end: 'DOG',
        hint: 'Common pets',
        answer: 'COG',
        explanation: 'CAT → COG → DOG (changing one letter at a time)'
      },
      {
        start: 'COLD',
        end: 'WARM',
        hint: 'Temperature change',
        answer: 'WORD',
        explanation: 'COLD → CORD → WORD → WARM (changing one letter at a time)'
      },
      {
        start: 'NIGHT',
        end: 'LIGHT',
        hint: 'Opposite concepts',
        answer: 'RIGHT',
        explanation: 'NIGHT → RIGHT → LIGHT (changing one letter at a time)'
      },
      {
        start: 'BREAD',
        end: 'WATER',
        hint: 'Basic necessities',
        answer: 'LATER',
        explanation: 'BREAD → BRAID → BRAIN → TRAIN → TRAIT → TREAT → GREAT → GREET → WATER'
      },
      {
        start: 'HAPPY',
        end: 'SMILE',
        hint: 'Positive emotions',
        answer: 'WHILE',
        explanation: 'HAPPY → HARPY → HARDY → WORDY → WORLD → WOULD → WHILE → SMILE'
      }
    ]
  };

  const toggleHint = (index: number) => {
    const newShowHints = [...showHints];
    newShowHints[index] = !newShowHints[index];
    setShowHints(newShowHints);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            Betweenle Hints
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Betweenle <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Hints</span>
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

        {/* How to Play */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">How to Play</h2>
          <p className="text-gray-600 text-center mb-4">
            Find the word that connects two given words by changing one letter at a time.
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg font-mono">
            <span className="bg-teal-100 px-4 py-2 rounded-lg">START</span>
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <span className="bg-cyan-100 px-4 py-2 rounded-lg">MIDDLE</span>
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <span className="bg-teal-100 px-4 py-2 rounded-lg">END</span>
          </div>
        </div>

        {/* Puzzles */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Today's Puzzles
          </h2>
          
          {puzzleData.puzzles.map((puzzle, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-400 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-bold text-white">Puzzle {index + 1}</h3>
                    <div className="flex items-center space-x-2 text-white">
                      <span className="bg-white/20 px-3 py-1 rounded-lg font-mono">{puzzle.start}</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="bg-white/20 px-3 py-1 rounded-lg font-mono">{puzzle.end}</span>
                    </div>
                  </div>
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
                      <p className="text-gray-700 font-medium mb-2">Theme: {puzzle.hint}</p>
                      <p className="text-gray-600">Find a word that connects these two concepts.</p>
                    </div>
                  </div>
                  
                  {showAnswers && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">Answer:</p>
                      <div className="text-xl font-bold text-teal-600 mb-2 font-mono">
                        {puzzle.answer}
                      </div>
                      <p className="text-sm text-gray-600">{puzzle.explanation}</p>
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
                : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white'
            }`}
          >
            {showAnswers ? 'Hide All Answers' : 'Show All Answers'}
          </button>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
            Betweenle Strategy Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Finding Connections</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Think about the relationship between words</li>
                <li>• Consider synonyms and related concepts</li>
                <li>• Look for words that bridge the gap</li>
                <li>• Try different letter combinations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Word Transformation</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Change only one letter at a time</li>
                <li>• Each step must be a valid word</li>
                <li>• Think of common word patterns</li>
                <li>• Consider multiple paths</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetweenleHints;