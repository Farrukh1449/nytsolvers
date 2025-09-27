import React, { useState } from 'react';
import { Search, Hash, RefreshCw, Filter, Star } from 'lucide-react';

const FiveLetterWords: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [contains, setContains] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sampleWords = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
    'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
    'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWAKE', 'AWARD'
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            5 Letter Words - Wordle Perfect
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            5 Letter <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Words</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The ultimate collection of 5-letter words perfect for Wordle, word games, and puzzles
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Search */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search 5-Letter Words</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for 5-letter words..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 text-lg"
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
                    maxLength={2}
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-200 transition-all duration-200"
                    placeholder="AB"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ends With</label>
                  <input
                    type="text"
                    maxLength={2}
                    value={endsWith}
                    onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-200 transition-all duration-200"
                    placeholder="ER"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contains</label>
                  <input
                    type="text"
                    maxLength={3}
                    value={contains}
                    onChange={(e) => setContains(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-200 transition-all duration-200"
                    placeholder="OUT"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50"
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
            {/* Wordle Favorites */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wordle Favorites</h3>
              <div className="space-y-2 text-sm">
                {['ABOUT', 'HOUSE', 'PLANT', 'WORLD', 'LIGHT'].map(word => (
                  <div key={word} className="bg-yellow-50 px-3 py-2 rounded font-mono border border-yellow-200">{word}</div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wordle Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Start with vowel-rich words</p>
                <p>• Use common consonants</p>
                <p>• Avoid repeated letters initially</p>
                <p>• Think of word patterns</p>
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
              
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-3 text-center font-bold text-gray-900 hover:from-yellow-200 hover:to-orange-200 transition-all duration-200 transform hover:scale-105 cursor-pointer"
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

export default FiveLetterWords;