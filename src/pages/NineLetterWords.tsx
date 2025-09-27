import React, { useState } from 'react';
import { Search, Hash, RefreshCw, Filter } from 'lucide-react';

const NineLetterWords: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [contains, setContains] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sampleWords = [
    'ABILITIES', 'ABSOLUTES', 'ABSTRACTS', 'ACADEMICS', 'ACCIDENTS', 'ACCORDING', 'ACHIEVING', 'ACQUIRING', 'ACTRESSES', 'ADDITIONS',
    'ADDRESSED', 'ADJUSTING', 'ADVANTAGE', 'ADVENTURE', 'ADVERTISE', 'AFTERNOON', 'AGREEMENT', 'ALGORITHM', 'ALONGSIDE', 'AMAZEMENT',
    'AMENDMENT', 'AMERICANS', 'AMUSEMENT', 'ANALOGIES', 'ANALYZING', 'ANCESTORS', 'ANNOUNCED', 'ANSWERING', 'APARTMENT', 'APPARATUS',
    'APPEARING', 'APPOINTED', 'APPRAISAL', 'ARCHITECT', 'ARGUMENTS', 'ARMSTRONG', 'ARRANGING', 'ARTILLERY', 'ASCENDING', 'ASSEMBLED'
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Hash className="w-4 h-4 mr-2" />
            9 Letter Words
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            9 Letter <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Words</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore complex 9-letter words for the most challenging puzzles and advanced vocabulary
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Search */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search 9-Letter Words</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for 9-letter words..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all duration-200 text-lg"
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
                    maxLength={4}
                    value={startsWith}
                    onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-500 focus:ring-1 focus:ring-rose-200 transition-all duration-200"
                    placeholder="ABIL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ends With</label>
                  <input
                    type="text"
                    maxLength={4}
                    value={endsWith}
                    onChange={(e) => setEndsWith(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-500 focus:ring-1 focus:ring-rose-200 transition-all duration-200"
                    placeholder="TION"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contains</label>
                  <input
                    type="text"
                    maxLength={5}
                    value={contains}
                    onChange={(e) => setContains(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-rose-500 focus:ring-1 focus:ring-rose-200 transition-all duration-200"
                    placeholder="MENT"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50"
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
            {/* Common 9-Letter Words */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular 9-Letter Words</h3>
              <div className="space-y-2 text-sm">
                {['ABILITIES', 'ACCORDING', 'ADVANTAGE', 'AGREEMENT', 'ALGORITHM'].map(word => (
                  <div key={word} className="bg-gray-50 px-3 py-2 rounded font-mono">{word}</div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Expert-level Scrabble words</p>
                <p>• Advanced crossword puzzles</p>
                <p>• Technical vocabulary</p>
                <p>• Literary expressions</p>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-3 text-center font-bold text-gray-900 hover:from-rose-200 hover:to-pink-200 transition-all duration-200 transform hover:scale-105 cursor-pointer"
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

export default NineLetterWords;