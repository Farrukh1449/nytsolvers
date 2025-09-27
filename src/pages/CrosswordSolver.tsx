import React, { useState } from 'react';
import { Search, BookOpen, RefreshCw, Settings, Filter, HelpCircle } from 'lucide-react';

const CrosswordSolver: React.FC = () => {
  const [clue, setClue] = useState('');
  const [pattern, setPattern] = useState('');
  const [length, setLength] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [contains, setContains] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const sampleResults = [
    { word: 'PUZZLE', definition: 'A game or problem designed to test ingenuity', length: 6, confidence: 95 },
    { word: 'ENIGMA', definition: 'A person or thing that is mysterious or difficult to understand', length: 6, confidence: 88 },
    { word: 'RIDDLE', definition: 'A question or statement intentionally phrased to require ingenuity', length: 6, confidence: 82 },
    { word: 'CIPHER', definition: 'A secret or disguised way of writing', length: 6, confidence: 75 }
  ];

  const handleSolve = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResults(sampleResults);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setClue('');
    setPattern('');
    setLength('');
    setStartsWith('');
    setEndsWith('');
    setContains('');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Crossword Solver
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Crossword <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Solver</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solve crossword clues instantly with our comprehensive database and intelligent matching system
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Clue Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Crossword Clue</h3>
              <textarea
                value={clue}
                onChange={(e) => setClue(e.target.value)}
                placeholder="Enter the crossword clue (e.g., 'Game that tests ingenuity')"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-lg resize-none"
                rows={3}
              />
            </div>

            {/* Pattern Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Letter Pattern (Optional)</h3>
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value.toUpperCase())}
                placeholder="Enter known letters with ? for unknowns (e.g., P?ZZ?E)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-lg font-mono"
              />
              <p className="text-sm text-gray-500 mt-2">Use ? for unknown letters, _ for spaces</p>
            </div>

            {/* Advanced Options */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  {showAdvanced ? 'Hide' : 'Show'}
                </button>
              </div>

              {showAdvanced && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Word Length</label>
                    <select
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all duration-200"
                    >
                      <option value="">Any Length</option>
                      <option value="3">3 Letters</option>
                      <option value="4">4 Letters</option>
                      <option value="5">5 Letters</option>
                      <option value="6">6 Letters</option>
                      <option value="7">7 Letters</option>
                      <option value="8">8 Letters</option>
                      <option value="9">9 Letters</option>
                      <option value="10+">10+ Letters</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Starts With</label>
                    <input
                      type="text"
                      value={startsWith}
                      onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                      placeholder="e.g., ST"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ends With</label>
                    <input
                      type="text"
                      value={endsWith}
                      onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                      placeholder="e.g., ED"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Must Contain</label>
                    <input
                      type="text"
                      value={contains}
                      onChange={(e) => setContains(e.target.value.toUpperCase())}
                      placeholder="e.g., TH"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all duration-200"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSolve}
                disabled={isLoading || (!clue && !pattern)}
                className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Solving...' : 'Solve Clue'}
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
            {/* How It Works */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
                How It Works
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>1. Enter the crossword clue</p>
                <p>2. Add letter pattern if known</p>
                <p>3. Set additional filters</p>
                <p>4. Get ranked solutions</p>
              </div>
            </div>

            {/* Pattern Help */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pattern Examples</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><code className="bg-gray-100 px-2 py-1 rounded">P?ZZ?E</code> - 6 letters, starts with P</p>
                <p><code className="bg-gray-100 px-2 py-1 rounded">??A??</code> - 5 letters, A in middle</p>
                <p><code className="bg-gray-100 px-2 py-1 rounded">C?T</code> - 3 letters, starts C, ends T</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pro Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Look for wordplay in clues</p>
                <p>• Consider multiple meanings</p>
                <p>• Check crossing letters</p>
                <p>• Think about abbreviations</p>
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
                  Possible Answers ({results.length})
                </h3>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Sort by Confidence</option>
                    <option>Sort by Length</option>
                    <option>Sort Alphabetically</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={result.word}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:from-purple-100 hover:to-indigo-100 transition-all duration-200"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="text-2xl font-bold text-gray-900">{result.word}</div>
                        <div className="text-sm text-gray-500">({result.length} letters)</div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          result.confidence >= 90 ? 'bg-green-100 text-green-700' :
                          result.confidence >= 80 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {result.confidence}% match
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{result.definition}</p>
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

export default CrosswordSolver;