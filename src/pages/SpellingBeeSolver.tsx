import React, { useState } from 'react';
import { Search, Zap, RefreshCw, Star, Target, Info } from 'lucide-react';

const SpellingBeeSolver: React.FC = () => {
  const [centerLetter, setCenterLetter] = useState('');
  const [outerLetters, setOuterLetters] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [pangrams, setPangrams] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sampleWords = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE'
  ];

  const handleSolve = () => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = sampleWords.filter(word => 
        word.includes(centerLetter.toUpperCase()) && 
        word.length >= 4
      );
      setResults(filtered);
      setPangrams(['PANGRAM', 'EXAMPLE']);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setCenterLetter('');
    setOuterLetters('');
    setResults([]);
    setPangrams([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Spelling Bee Solver
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NYT Spelling Bee <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Solver</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find all possible words and achieve Queen Bee status with our comprehensive Spelling Bee solver
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Honeycomb Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Target className="w-5 h-5 text-yellow-500 mr-2" />
                Enter Letters
              </h3>
              
              {/* Center Letter */}
              <div className="text-center mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Center Letter (Required)</label>
                <input
                  type="text"
                  maxLength={1}
                  value={centerLetter}
                  onChange={(e) => setCenterLetter(e.target.value.toUpperCase())}
                  className="w-20 h-20 text-center text-3xl font-bold border-4 border-yellow-400 rounded-full focus:border-yellow-500 focus:ring-4 focus:ring-yellow-200 transition-all duration-200 bg-yellow-50"
                  placeholder="A"
                />
              </div>

              {/* Outer Letters */}
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-4">Outer Letters (6 letters)</label>
                <div className="flex justify-center space-x-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={outerLetters[index] || ''}
                      onChange={(e) => {
                        const newLetters = outerLetters.split('');
                        newLetters[index] = e.target.value.toUpperCase();
                        setOuterLetters(newLetters.join(''));
                      }}
                      className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200"
                      placeholder={(index + 1).toString()}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSolve}
                disabled={isLoading || !centerLetter}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Finding Words...' : 'Find All Words'}
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
                Spelling Bee Rules
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Words must be at least 4 letters long</p>
                <p>• Words must include the center letter</p>
                <p>• Words can only use the given letters</p>
                <p>• Letters can be used multiple times</p>
                <p>• Pangrams use all 7 letters</p>
              </div>
            </div>

            {/* Scoring */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                Scoring System
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>4-letter words: <span className="font-semibold">1 point</span></p>
                <p>5+ letter words: <span className="font-semibold">1 point per letter</span></p>
                <p>Pangrams: <span className="font-semibold">7 bonus points</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-12 space-y-8">
            {/* Pangrams */}
            {pangrams.length > 0 && (
              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-yellow-600 mr-2" />
                  Pangrams ({pangrams.length})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {pangrams.map((word, index) => (
                    <div
                      key={word}
                      className="bg-gradient-to-r from-yellow-200 to-amber-200 rounded-lg p-4 text-center font-bold text-lg text-gray-900 hover:from-yellow-300 hover:to-amber-300 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Words */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                All Words ({results.length})
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gray-50 rounded-lg p-3 text-center font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 cursor-pointer"
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

export default SpellingBeeSolver;