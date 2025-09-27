import React, { useState } from 'react';
import { Search, Grid3x3 as Grid3X3, RefreshCw, Target, Info, Lightbulb } from 'lucide-react';

const QuordleSolver: React.FC = () => {
  const [guesses, setGuesses] = useState(['', '', '', '', '', '', '', '', '']);
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sampleResults = ['HOUSE', 'PLANT', 'WATER', 'LIGHT'];

  const handleSolve = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResults(sampleResults);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setGuesses(['', '', '', '', '', '', '', '', '']);
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Quordle Solver
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quordle <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Solver</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solve four Wordle puzzles simultaneously with our advanced Quordle solver
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Guesses Input */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Target className="w-5 h-5 text-red-500 mr-2" />
                Enter Your Guesses
              </h3>
              
              <div className="space-y-4">
                {guesses.map((guess, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-600 w-16">Guess {index + 1}:</span>
                    <input
                      type="text"
                      maxLength={5}
                      value={guess}
                      onChange={(e) => {
                        const newGuesses = [...guesses];
                        newGuesses[index] = e.target.value.toUpperCase();
                        setGuesses(newGuesses);
                      }}
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-lg font-mono"
                      placeholder="Enter 5-letter word"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSolve}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Solving...' : 'Solve Quordle'}
              </button>
              
              <button
                onClick={handleReset}
                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reset
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-blue-500 mr-2" />
                Quordle Rules
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Solve 4 Wordle puzzles at once</p>
                <p>• You have 9 guesses total</p>
                <p>• Each guess applies to all 4 grids</p>
                <p>• Green = correct letter, correct position</p>
                <p>• Yellow = correct letter, wrong position</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Strategy Tips
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Start with vowel-heavy words</p>
                <p>• Use common consonants early</p>
                <p>• Focus on one grid at a time</p>
                <p>• Save difficult grids for last</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Suggested Solutions
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6 text-center"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    <div className="text-sm text-gray-600 mb-2">Grid {index + 1}</div>
                    <div className="text-2xl font-bold text-gray-900">{word}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuordleSolver;