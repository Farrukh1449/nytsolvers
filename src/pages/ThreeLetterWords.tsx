import React, { useState } from 'react';
import { Search, Hash, RefreshCw, Filter } from 'lucide-react';

const ThreeLetterWords: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [contains, setContains] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sampleWords = [
    'THE', 'AND', 'FOR', 'ARE', 'BUT', 'NOT', 'YOU', 'ALL', 'CAN', 'HER',
    'WAS', 'ONE', 'OUR', 'HAD', 'HAS', 'HIS', 'HOW', 'MAN', 'NEW', 'NOW',
    'OLD', 'SEE', 'TWO', 'WAY', 'WHO', 'BOY', 'DID', 'ITS', 'LET', 'PUT',
    'SAY', 'SHE', 'TOO', 'USE', 'DAD', 'MOM', 'SUN', 'CAR', 'DOG', 'CAT'
  ];

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = [...sampleWords];
      
      if (searchTerm) {
        filtered = filtered.filter(word => 
          word.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (startsWith) {
        filtered = filtered.filter(word => 
          word.toLowerCase().startsWith(startsWith.toLowerCase())
        );
      }
      
      if (endsWith) {
        filtered = filtered.filter(word => 
          word.toLowerCase().endsWith(endsWith.toLowerCase())
        );
      }
      
      if (contains) {
        filtered = filtered.filter(word => 
          word.toLowerCase().includes(contains.toLowerCase())
        );
      }
      
      setResults(filtered);
      setIsLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setSearchTerm('');
    setStartsWith('');
    setEndsWith('');
    setContains('');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Hash className="w-4 h-4 mr-2" />
            3 Letter Words
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            3 Letter <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Words</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find and explore 3-letter words for Wordle, word games, and puzzles
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Search */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search 3-Letter Words</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for 3-letter words..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-lg"
              />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Starts With</label>
                  <input
                    type="text"
                    maxLength={1}
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200"
                    placeholder="A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ends With</label>
                  <input
                    type="text"
                    maxLength={1}
                    value={endsWith}
                    onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200"
                    placeholder="T"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contains</label>
                  <input
                    type="text"
                    maxLength={1}
                    value={contains}
                    onChange={(e) => setContains(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-200"
                    placeholder="E"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Searching...' : 'Search Words'}
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
            {/* Common 3-Letter Words */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular 3-Letter Words</h3>
              <div className="space-y-2 text-sm">
                {['THE', 'AND', 'FOR', 'ARE', 'BUT'].map(word => (
                  <div key={word} className="bg-gray-50 px-3 py-2 rounded font-mono">{word}</div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Great for word game practice</p>
                <p>• Common in crosswords</p>
                <p>• Essential vocabulary building</p>
                <p>• Perfect for beginners</p>
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
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-3 text-center font-bold text-gray-900 hover:from-green-200 hover:to-teal-200 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.02}s`,
                      animation: 'fadeInUp 0.3s ease-out forwards'
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

export default ThreeLetterWords;