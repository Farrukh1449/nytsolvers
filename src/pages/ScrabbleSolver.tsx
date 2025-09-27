import React, { useState } from 'react';
import { Search, Grid3x3 as Grid3X3, RefreshCw, Settings, Star, Filter } from 'lucide-react';

const ScrabbleSolver: React.FC = () => {
  const [letters, setLetters] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [contains, setContains] = useState('');
  const [length, setLength] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const sampleResults = [
    { word: 'QUARTZ', points: 25, definition: 'A hard mineral' },
    { word: 'ZEPHYR', points: 23, definition: 'A gentle breeze' },
    { word: 'JAZZY', points: 33, definition: 'Having the characteristics of jazz' },
    { word: 'FIZZY', points: 29, definition: 'Containing bubbles of gas' }
  ];

  const handleSolve = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResults(sampleResults);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setLetters('');
    setStartsWith('');
    setEndsWith('');
    setContains('');
    setLength('');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Scrabble Word Finder
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Scrabble <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Word Finder</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the highest scoring Scrabble words from your letters with advanced filtering options
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Letters</h3>
              <input
                type="text"
                value={letters}
                onChange={(e) => setLetters(e.target.value.toUpperCase())}
                placeholder="Enter your letters (e.g., ABCDEFG)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-lg font-mono"
              />
              <p className="text-sm text-gray-500 mt-2">Use ? for blank tiles</p>
            </div>

            {/* Advanced Options */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Advanced Options</h3>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  {showAdvanced ? 'Hide' : 'Show'}
                </button>
              </div>

              {showAdvanced && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Starts With</label>
                    <input
                      type="text"
                      value={startsWith}
                      onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                      placeholder="e.g., QU"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ends With</label>
                    <input
                      type="text"
                      value={endsWith}
                      onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                      placeholder="e.g., ING"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contains</label>
                    <input
                      type="text"
                      value={contains}
                      onChange={(e) => setContains(e.target.value.toUpperCase())}
                      placeholder="e.g., TH"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Word Length</label>
                    <select
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200"
                    >
                      <option value="">Any Length</option>
                      <option value="3">3 Letters</option>
                      <option value="4">4 Letters</option>
                      <option value="5">5 Letters</option>
                      <option value="6">6 Letters</option>
                      <option value="7">7 Letters</option>
                      <option value="8+">8+ Letters</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSolve}
                disabled={isLoading || !letters}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Finding Words...' : 'Find Words'}
              </button>
              
              <button
                onClick={handleReset}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reset
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Letter Values */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Letter Values
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between"><span>A,E,I,O,U,L,N,S,T,R</span><span>1</span></div>
                <div className="flex justify-between"><span>D,G</span><span>2</span></div>
                <div className="flex justify-between"><span>B,C,M,P</span><span>3</span></div>
                <div className="flex justify-between"><span>F,H,V,W,Y</span><span>4</span></div>
                <div className="flex justify-between"><span>K</span><span>5</span></div>
                <div className="flex justify-between"><span>J,X</span><span>8</span></div>
                <div className="flex justify-between"><span>Q,Z</span><span>10</span></div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pro Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Look for high-value letters (J,Q,X,Z)</p>
                <p>• Use prefixes and suffixes</p>
                <p>• Consider two-letter words</p>
                <p>• Save S for plurals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Found Words ({results.length})
                </h3>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Sort by Points</option>
                    <option>Sort by Length</option>
                    <option>Sort Alphabetically</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div
                    key={result.word}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-200"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-xl font-bold text-gray-900">{result.word}</div>
                      <div className="text-sm text-gray-600">{result.definition}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                        {result.points} pts
                      </div>
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

export default ScrabbleSolver;