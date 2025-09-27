import React, { useState } from 'react';
import { Search, Hash, RefreshCw, Settings, Filter } from 'lucide-react';

const AnagramSolver: React.FC = () => {
  const [inputWord, setInputWord] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [contains, setContains] = useState('');
  const [length, setLength] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const sampleResults = [
    'LISTEN', 'SILENT', 'ENLIST', 'TINSEL', 'INLETS', 'ELINTS'
  ];

  const handleSolve = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResults(sampleResults);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setInputWord('');
    setStartsWith('');
    setEndsWith('');
    setContains('');
    setLength('');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Hash className="w-4 h-4 mr-2" />
            Anagram Solver
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Anagram <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Solver</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find all possible anagrams for any word or phrase with advanced filtering options
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Word or Phrase</h3>
              <input
                type="text"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value.toUpperCase())}
                placeholder="Enter word to find anagrams (e.g., LISTEN)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200 text-lg font-mono"
              />
              <p className="text-sm text-gray-500 mt-2">Enter any word or phrase to find anagrams</p>
            </div>

            {/* Advanced Options */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center text-pink-600 hover:text-pink-700 transition-colors duration-200"
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
                      placeholder="e.g., ST"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ends With</label>
                    <input
                      type="text"
                      value={endsWith}
                      onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                      placeholder="e.g., ED"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Must Contain</label>
                    <input
                      type="text"
                      value={contains}
                      onChange={(e) => setContains(e.target.value.toUpperCase())}
                      placeholder="e.g., TH"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Word Length</label>
                    <select
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-200 transition-all duration-200"
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
                disabled={isLoading || !inputWord}
                className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Finding Anagrams...' : 'Find Anagrams'}
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
            {/* What are Anagrams */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What are Anagrams?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>Anagrams are words formed by rearranging the letters of another word.</p>
                <p><strong>Example:</strong> LISTEN → SILENT</p>
                <p>Both words use the exact same letters!</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pro Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Look for common letter patterns</p>
                <p>• Try different word lengths</p>
                <p>• Use filters to narrow results</p>
                <p>• Consider proper nouns too</p>
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
                  Found Anagrams ({results.length})
                </h3>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Sort by Length</option>
                    <option>Sort Alphabetically</option>
                    <option>Sort by Points</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-4 text-center font-bold text-lg text-gray-900 hover:from-pink-200 hover:to-rose-200 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    {word}
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

export default AnagramSolver;