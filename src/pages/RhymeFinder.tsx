import React, { useState } from 'react';
import { Search, RefreshCw, Volume2, Copy, CheckCircle } from 'lucide-react';

const RhymeFinder: React.FC = () => {
  const [inputWord, setInputWord] = useState('');
  const [results, setResults] = useState<{ word: string; syllables: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'perfect' | 'near'>('all');

  const rhymeDatabase: { [key: string]: string[] } = {
    'cat': ['bat', 'chat', 'fat', 'flat', 'gnat', 'hat', 'mat', 'pat', 'rat', 'sat', 'tat', 'vat', 'at', 'brat', 'drat', 'format', 'combat'],
    'night': ['bright', 'delight', 'fight', 'flight', 'fright', 'height', 'kite', 'light', 'might', 'right', 'sight', 'slight', 'tight', 'white', 'bight', 'plight', 'slight', 'knight'],
    'love': ['above', 'dove', 'glove', 'shove', 'thereof', 'thereof'],
    'day': ['bay', 'bay', 'clay', 'gray', 'hay', 'jay', 'lay', 'may', 'pay', 'play', 'ray', 'say', 'stay', 'sway', 'tray', 'way', 'away', 'betray', 'convey', 'decay', 'delay', 'display'],
    'time': ['chime', 'climb', 'crime', 'dime', 'grime', 'lime', 'mime', 'prime', 'rhyme', 'slime', 'sublime', 'rime', 'thyme'],
    'heart': ['art', 'apart', 'chart', 'dart', 'depart', 'impart', 'mart', 'part', 'smart', 'start', 'tart'],
    'mind': ['bind', 'blind', 'find', 'grind', 'kind', 'remind', 'unwind', 'wind'],
    'sky': ['butterfly', 'by', 'cry', 'dry', 'fly', 'fry', 'guy', 'high', 'I', 'lie', 'multiply', 'my', 'pie', 'reply', 'rye', 'shy', 'sigh', 'spy', 'supply', 'thigh', 'tie', 'try', 'vie', 'why'],
    'moon': ['balloon', 'boon', 'croon', 'goon', 'june', 'june', 'lagoon', 'loon', 'noon', 'soon', 'spoon', 'swoon', 'tune', 'balloon'],
    'sea': ['bee', 'be', 'debris', 'decree', 'degree', 'fee', 'flee', 'free', 'glee', 'guarantee', 'key', 'knee', 'lee', 'pea', 'plea', 'relieved', 'see', 'spree', 'tea', 'thee', 'thee', 'tree', 'we'],
    'rose': ['arose', 'chose', 'close', 'cloths', 'compose', 'dose', 'hose', 'nose', 'pose', 'prose', 'those'],
    'fire': ['acquire', 'admire', 'aspire', 'attire', 'choir', 'conspire', 'desire', 'empire', 'entire', 'expire', 'expire', 'higher', 'hire', 'inquire', 'inspire', 'liar', 'mire', 'require', 'retire', 'sire', 'tire', 'wire'],
    'bright': ['blight', 'flight', 'height', 'kite', 'light', 'might', 'night', 'right', 'sight', 'site', 'tight', 'white', 'write'],
    'dream': ['beam', 'cream', 'deem', 'esteem', 'extreme', 'gleam', 'let', 'ream', 'scheme', 'scream', 'seam', 'seem', 'steam', 'stream', 'supreme', 'team', 'theme'],
    'sing': ['bring', 'cling', 'fling', 'king', 'ling', 'ring', 'spring', 'sting', 'string', 'swing', 'thing', 'wring'],
  };

  const countSyllables = (word: string): number => {
    return (word.match(/[aeiouy]/gi) || []).length;
  };

  const findRhymes = (word: string) => {
    const cleanWord = word.toLowerCase().trim();
    if (!cleanWord) return [];

    const directRhymes = rhymeDatabase[cleanWord] || [];

    const lastSyllable = cleanWord.slice(-3);
    const moreRhymes: string[] = [];

    Object.entries(rhymeDatabase).forEach(([_, rhymeList]) => {
      rhymeList.forEach(rhyme => {
        if (!directRhymes.includes(rhyme) && rhyme.endsWith(lastSyllable.slice(-2))) {
          moreRhymes.push(rhyme);
        }
      });
    });

    const allRhymes = [...new Set([...directRhymes, ...moreRhymes])];
    return allRhymes.map(word => ({
      word,
      syllables: countSyllables(word)
    })).filter((item, index, self) =>
      index === self.findIndex((t) => t.word === item.word)
    );
  };

  const handleSearch = () => {
    if (!inputWord.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const rhymes = findRhymes(inputWord);

      let filtered = rhymes;
      if (filterType === 'perfect') {
        filtered = rhymes.filter(r => r.syllables === countSyllables(inputWord));
      } else if (filterType === 'near') {
        filtered = rhymes.filter(r => Math.abs(r.syllables - countSyllables(inputWord)) <= 1);
      }

      setResults(filtered);
      setIsLoading(false);
    }, 600);
  };

  const handleReset = () => {
    setInputWord('');
    setResults([]);
    setCopied(false);
  };

  const handleCopy = () => {
    const text = results.map(r => r.word).join(', ');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Search className="w-4 h-4 mr-2" />
            Rhyme Finder
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Perfect <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rhymes</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Search for words that rhyme with any word. Perfect for poetry, songwriting, and creative writing.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="space-y-6">
            {/* Input */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-3">
                Enter a word to find rhymes
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputWord}
                  onChange={(e) => setInputWord(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type any word..."
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-base sm:text-lg"
                />
                <button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span className="hidden sm:inline">Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span className="hidden sm:inline">Search</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Filter Options */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-3">
                Filter by type
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['all', 'perfect', 'near'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type as 'all' | 'perfect' | 'near')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                      filterType === type
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'all' && 'All Rhymes'}
                    {type === 'perfect' && 'Perfect Rhymes'}
                    {type === 'near' && 'Near Rhymes'}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleReset}
                className="flex-1 sm:flex-none px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
              {results.length > 0 && (
                <button
                  onClick={handleCopy}
                  className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span className="hidden sm:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span className="hidden sm:inline">Copy All</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Found {results.length} Rhyme{results.length !== 1 ? 's' : ''}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {results.map((result, index) => (
                <div
                  key={result.word}
                  className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-5 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-blue-200"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {result.word}
                    </h3>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(result.word);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Copy word"
                    >
                      <Copy className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {result.syllables} syllable{result.syllables !== 1 ? 's' : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && inputWord && results.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No rhymes found</h3>
            <p className="text-gray-600">Try searching for a different word</p>
          </div>
        )}

        {/* Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Perfect Rhymes</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Words that have identical ending sounds from the last stressed vowel onwards. Example: "cat" and "bat"
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Near Rhymes</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Words with similar but not identical sounds. Also called slant or imperfect rhymes. Example: "home" and "come"
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Poetry & Songwriting</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Use rhyming words to create compelling verses, memorable choruses, and enhance the musicality of your creative work.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Syllable Matching</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Match rhymes by syllable count for better rhythm and flow. Filter results to find rhymes with similar word structure.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RhymeFinder;
