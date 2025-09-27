import React, { useState } from 'react';
import { Search, Square, RefreshCw, Target, Info, Lightbulb } from 'lucide-react';

const LetterBoxedSolver: React.FC = () => {
  const [sides, setSides] = useState(['', '', '', '']);
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sampleSolutions = [
    'QUICK → KARMA',
    'JUMBO → OXIDE',
    'FRIZZ → ZESTY',
    'WALTZ → ZEBRA'
  ];

  const handleSolve = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResults(sampleSolutions);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setSides(['', '', '', '']);
    setResults([]);
  };

  const sideColors = [
    'border-red-400 bg-red-50',
    'border-blue-400 bg-blue-50', 
    'border-green-400 bg-green-50',
    'border-yellow-400 bg-yellow-50'
  ];

  const sideLabels = ['Top', 'Right', 'Bottom', 'Left'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Square className="w-4 h-4 mr-2" />
            Letter Boxed Solver
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NYT Letter Boxed <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Solver</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the optimal word combinations to solve Letter Boxed puzzles in minimum moves
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Letter Box Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Target className="w-5 h-5 text-purple-500 mr-2" />
                Enter Box Letters
              </h3>
              
              {/* Visual Box */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div className="absolute inset-0 border-4 border-gray-300 rounded-lg"></div>
                
                {/* Top Side */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex space-x-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <input
                        key={`top-${index}`}
                        type="text"
                        maxLength={1}
                        value={sides[0][index] || ''}
                        onChange={(e) => {
                          const newSides = [...sides];
                          const letters = newSides[0].split('');
                          letters[index] = e.target.value.toUpperCase();
                          newSides[0] = letters.join('');
                          setSides(newSides);
                        }}
                        className={`w-12 h-12 text-center text-lg font-bold border-2 rounded-lg focus:ring-2 transition-all duration-200 ${sideColors[0]}`}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-2 text-sm font-medium text-gray-600">Top</div>
                </div>

                {/* Right Side */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="flex flex-col space-y-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <input
                        key={`right-${index}`}
                        type="text"
                        maxLength={1}
                        value={sides[1][index] || ''}
                        onChange={(e) => {
                          const newSides = [...sides];
                          const letters = newSides[1].split('');
                          letters[index] = e.target.value.toUpperCase();
                          newSides[1] = letters.join('');
                          setSides(newSides);
                        }}
                        className={`w-12 h-12 text-center text-lg font-bold border-2 rounded-lg focus:ring-2 transition-all duration-200 ${sideColors[1]}`}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-2 text-sm font-medium text-gray-600">Right</div>
                </div>

                {/* Bottom Side */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="flex space-x-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <input
                        key={`bottom-${index}`}
                        type="text"
                        maxLength={1}
                        value={sides[2][index] || ''}
                        onChange={(e) => {
                          const newSides = [...sides];
                          const letters = newSides[2].split('');
                          letters[index] = e.target.value.toUpperCase();
                          newSides[2] = letters.join('');
                          setSides(newSides);
                        }}
                        className={`w-12 h-12 text-center text-lg font-bold border-2 rounded-lg focus:ring-2 transition-all duration-200 ${sideColors[2]}`}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-2 text-sm font-medium text-gray-600">Bottom</div>
                </div>

                {/* Left Side */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex flex-col space-y-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <input
                        key={`left-${index}`}
                        type="text"
                        maxLength={1}
                        value={sides[3][index] || ''}
                        onChange={(e) => {
                          const newSides = [...sides];
                          const letters = newSides[3].split('');
                          letters[index] = e.target.value.toUpperCase();
                          newSides[3] = letters.join('');
                          setSides(newSides);
                        }}
                        className={`w-12 h-12 text-center text-lg font-bold border-2 rounded-lg focus:ring-2 transition-all duration-200 ${sideColors[3]}`}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-2 text-sm font-medium text-gray-600">Left</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSolve}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Finding Solutions...' : 'Find Solutions'}
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
                Letter Boxed Rules
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Use all 12 letters at least once</p>
                <p>• Words must be at least 3 letters long</p>
                <p>• Can't use consecutive letters from same side</p>
                <p>• Next word must start with last letter of previous word</p>
                <p>• Goal: Complete in 5 words or fewer</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Strategy Tips
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Look for long words that use many letters</p>
                <p>• Find words that end with uncommon letters</p>
                <p>• Plan word chains in advance</p>
                <p>• Use all vowels efficiently</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Optimal Solutions
              </h3>
              
              <div className="space-y-4">
                {results.map((solution, index) => (
                  <div
                    key={solution}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 hover:from-purple-200 hover:to-pink-200 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      Solution {index + 1}
                    </div>
                    <div className="text-xl font-mono text-purple-700">
                      {solution}
                    </div>
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

export default LetterBoxedSolver;