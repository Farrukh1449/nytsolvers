import React, { useState } from 'react';
import { Search, BookOpen, RefreshCw, Filter, Volume2 } from 'lucide-react';

const Definitions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sampleDefinitions = [
    {
      word: 'SERENDIPITY',
      pronunciation: '/ˌserənˈdipədē/',
      partOfSpeech: 'noun',
      definition: 'The occurrence and development of events by chance in a happy or beneficial way',
      example: 'A fortunate stroke of serendipity brought the two old friends together.',
      synonyms: ['chance', 'fortune', 'luck', 'coincidence'],
      etymology: 'Coined by Horace Walpole in 1754, from the Persian fairy tale "The Three Princes of Serendip"'
    },
    {
      word: 'EPHEMERAL',
      pronunciation: '/əˈfem(ə)rəl/',
      partOfSpeech: 'adjective',
      definition: 'Lasting for a very short time',
      example: 'The beauty of cherry blossoms is ephemeral, lasting only a few weeks.',
      synonyms: ['temporary', 'fleeting', 'transient', 'momentary'],
      etymology: 'From Greek ephēmeros, meaning "lasting only a day"'
    }
  ];

  const popularWords = [
    'Serendipity', 'Ephemeral', 'Ubiquitous', 'Paradigm', 'Quintessential',
    'Mellifluous', 'Petrichor', 'Sonder', 'Hiraeth', 'Wanderlust'
  ];

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setResults(sampleDefinitions);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setSearchTerm('');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Word Definitions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Word <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Dictionary</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive word definitions, pronunciations, and etymologies
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Look Up Any Word</h3>
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter a word to define..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                  onClick={handleSearch}
                  disabled={isLoading || !searchTerm.trim()}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="space-y-6">
                {results.map((result, index) => (
                  <div
                    key={result.word}
                    className="bg-white rounded-2xl shadow-lg p-8"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    {/* Word Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{result.word}</h2>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-600 font-mono">{result.pronunciation}</span>
                          <button className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200">
                            <Volume2 className="w-4 h-4 mr-1" />
                            Listen
                          </button>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {result.partOfSpeech}
                      </span>
                    </div>

                    {/* Definition */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">Definition</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{result.definition}</p>
                    </div>

                    {/* Example */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">Example</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 italic">"{result.example}"</p>
                      </div>
                    </div>

                    {/* Synonyms */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">Synonyms</h3>
                      <div className="flex flex-wrap gap-2">
                        {result.synonyms.map((synonym: string) => (
                          <span key={synonym} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            {synonym}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Etymology */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Etymology</h3>
                      <p className="text-gray-600 text-sm">{result.etymology}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Words */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Words</h3>
              <div className="space-y-2">
                {popularWords.map(word => (
                  <button
                    key={word}
                    onClick={() => {
                      setSearchTerm(word);
                      handleSearch();
                    }}
                    className="w-full text-left bg-gray-50 hover:bg-green-50 px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dictionary Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Look up unfamiliar words immediately</p>
                <p>• Pay attention to pronunciation guides</p>
                <p>• Study word origins and etymology</p>
                <p>• Practice using new words in sentences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Definitions;