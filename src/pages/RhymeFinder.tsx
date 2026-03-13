import React, { useState } from 'react';
import { Search, RefreshCw, Copy, CheckCircle } from 'lucide-react';

const RhymeFinder: React.FC = () => {
  const [inputWord, setInputWord] = useState('');
  const [results, setResults] = useState<{ word: string; syllables: number; type: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [filterType, setFilterType] = useState<'rhymes' | 'rhymes-advanced' | 'similar-sound' | 'similar-spell' | 'homophones' | 'phrase-rhymes' | 'match-consonants' | 'synonyms' | 'antonyms' | 'definitions'>('rhymes');
  const [syllableFilter, setSyllableFilter] = useState<string>('default');
  const [organizeBy, setOrganizeBy] = useState<'letters' | 'syllables'>('letters');
  const [wantPhrases, setWantPhrases] = useState(false);

  const wordDatabase: { [key: string]: { rhymes: string[]; nearRhymes: string[]; homophones: string[]; similarSpelling: string[]; synonyms: string[]; antonyms: string[]; definition: string; phraseRhymes: string[] } } = {
    'apple': {
      rhymes: ['dapple', 'grapple', 'scrapple', 'snapple', 'chapel', 'happily'],
      nearRhymes: ['ample', 'sample', 'example', 'purple', 'couple'],
      homophones: [],
      similarSpelling: ['apply', 'appear', 'appeal', 'application', 'applied'],
      synonyms: ['fruit', 'pomme'],
      antonyms: [],
      definition: 'A round fruit with red, yellow, or green skin and white flesh',
      phraseRhymes: ['big apple', 'apple pie', 'apple tree', 'apple core', 'apple cart', 'rotten apple']
    },
    'cat': {
      rhymes: ['bat', 'chat', 'fat', 'flat', 'gnat', 'hat', 'mat', 'pat', 'rat', 'sat', 'tat', 'vat', 'brat', 'drat', 'format', 'combat', 'prat', 'scat', 'sprat', 'tat'],
      nearRhymes: ['cut', 'kit', 'cot', 'coat', 'caught', 'cart'],
      homophones: [],
      similarSpelling: ['cap', 'car', 'can', 'cart', 'cast', 'calf', 'call'],
      synonyms: ['feline', 'kitten', 'pussy', 'tom', 'tabby'],
      antonyms: ['dog'],
      definition: 'A small domesticated carnivorous mammal with fur, a short snout, and retractile claws',
      phraseRhymes: ['alley cat', 'copy cat', 'cat nap', 'black cat', 'cat fight', 'cat call', 'scaredy cat']
    },
    'night': {
      rhymes: ['bright', 'delight', 'fight', 'flight', 'fright', 'height', 'kite', 'light', 'might', 'right', 'sight', 'slight', 'tight', 'white', 'bight', 'plight', 'knight', 'blight', 'dynamite', 'ignite', 'invite', 'polite', 'quite', 'write', 'spite', 'sprite'],
      nearRhymes: ['neat', 'knit', 'newt', 'net', 'not'],
      homophones: ['knight'],
      similarSpelling: ['nine', 'nigh', 'nice', 'nite', 'nitrogen'],
      synonyms: ['darkness', 'evening', 'nighttime'],
      antonyms: ['day', 'light'],
      definition: 'The time from sunset to sunrise, or a period of darkness',
      phraseRhymes: ['good night', 'night owl', 'night stand', 'Saturday night', 'fright night', 'last night']
    },
    'love': {
      rhymes: ['above', 'dove', 'glove', 'shove', 'thereof'],
      nearRhymes: ['leave', 'live', 'loaf', 'life', 'leaf'],
      homophones: [],
      similarSpelling: ['lobe', 'lobe', 'lovely', 'lover', 'loved', 'lava'],
      synonyms: ['affection', 'adoration', 'fondness', 'passion', 'devotion'],
      antonyms: ['hate', 'dislike', 'anger'],
      definition: 'An intense feeling of deep affection and care toward another person',
      phraseRhymes: ['true love', 'love affair', 'love song', 'love letter', 'love story', 'labor of love']
    },
    'day': {
      rhymes: ['bay', 'clay', 'gray', 'hay', 'jay', 'lay', 'may', 'pay', 'play', 'ray', 'say', 'stay', 'sway', 'tray', 'way', 'away', 'betray', 'convey', 'decay', 'delay', 'display', 'essay', 'gateway', 'holiday', 'okay', 'portray', 'subway', 'sway', 'today', 'okay'],
      nearRhymes: ['die', 'dye', 'date', 'dare', 'dare'],
      homophones: [],
      similarSpelling: ['day', 'days', 'daily', 'daylight', 'daytime'],
      synonyms: ['daytime', '24 hours', 'date'],
      antonyms: ['night'],
      definition: 'A 24-hour period, especially from midnight to midnight, or the daylight hours',
      phraseRhymes: ['day time', 'day care', 'day dream', 'day break', 'day light', 'day trip']
    },
    'time': {
      rhymes: ['chime', 'climb', 'crime', 'dime', 'grime', 'lime', 'mime', 'prime', 'rhyme', 'slime', 'sublime', 'thyme', 'rime', 'anime', 'bedtime', 'daytime', 'lifetime', 'meantime', 'onetime', 'overtime', 'pastime', 'wartime'],
      nearRhymes: ['team', 'tame', 'term', 'item', 'atom'],
      homophones: [],
      similarSpelling: ['times', 'timer', 'timely', 'timeline', 'timeout'],
      synonyms: ['hour', 'moment', 'period', 'era', 'age'],
      antonyms: ['timelessness'],
      definition: 'The indefinite continued progress of existence and events in the past, present, and future',
      phraseRhymes: ['good time', 'bad time', 'hard time', 'time out', 'time zone', 'time keeper']
    },
  };

  const countSyllables = (word: string): number => {
    const syllables = word.match(/[aeiouy]/gi) || [];
    return Math.max(1, syllables.length);
  };

  const getConsonants = (word: string): string[] => {
    return word.toLowerCase().replace(/[aeiouy]/g, '').split('');
  };

  const findMatchingConsonants = (inputWord: string): string[] => {
    const inputConsonants = new Set(getConsonants(inputWord));
    const results: string[] = [];

    Object.keys(wordDatabase).forEach(word => {
      if (word === inputWord.toLowerCase()) return;
      const wordConsonants = new Set(getConsonants(word));
      let matchCount = 0;
      inputConsonants.forEach(c => {
        if (wordConsonants.has(c)) matchCount++;
      });
      if (matchCount >= Math.max(1, inputConsonants.size * 0.6)) {
        results.push(word);
      }
    });
    return results;
  };

  const processResults = (word: string, type: string) => {
    const cleanWord = word.toLowerCase().trim();
    if (!cleanWord) return [];

    const data = wordDatabase[cleanWord];
    if (!data) return [];

    let resultWords: string[] = [];

    switch (type) {
      case 'rhymes':
        resultWords = data.rhymes;
        break;
      case 'rhymes-advanced':
        resultWords = [...data.rhymes, ...data.nearRhymes];
        break;
      case 'similar-sound':
        resultWords = data.nearRhymes;
        break;
      case 'similar-spell':
        resultWords = data.similarSpelling;
        break;
      case 'homophones':
        resultWords = data.homophones;
        break;
      case 'phrase-rhymes':
        resultWords = data.phraseRhymes;
        break;
      case 'match-consonants':
        resultWords = findMatchingConsonants(cleanWord);
        break;
      case 'synonyms':
        resultWords = data.synonyms;
        break;
      case 'antonyms':
        resultWords = data.antonyms;
        break;
      case 'definitions':
        return [{ word: data.definition, syllables: 0, type: 'definition' }];
      default:
        resultWords = data.rhymes;
    }

    return resultWords.map(w => ({
      word: w,
      syllables: countSyllables(w),
      type
    })).filter((item, index, self) =>
      index === self.findIndex((t) => t.word === item.word)
    );
  };

  const handleSearch = () => {
    if (!inputWord.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      let filtered = processResults(inputWord, filterType);

      if (syllableFilter !== 'default' && filtered.length > 0 && filtered[0].type !== 'definition') {
        const targetSyllables = parseInt(syllableFilter);
        if (syllableFilter === 'exact') {
          filtered = filtered.filter(r => r.syllables === countSyllables(inputWord));
        } else {
          filtered = filtered.filter(r => r.syllables === targetSyllables);
        }
      }

      if (organizeBy === 'syllables') {
        filtered.sort((a, b) => a.syllables - b.syllables);
      } else {
        filtered.sort((a, b) => a.word.localeCompare(b.word));
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
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 mb-8">
          <div className="space-y-6">
            {/* Input */}
            <div>
              <label className="block text-white text-base sm:text-lg font-semibold mb-3">
                Enter your rhyme here...
              </label>
              <input
                type="text"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your rhyme..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-4 border-yellow-400 rounded-xl focus:border-yellow-300 focus:ring-4 focus:ring-yellow-200 transition-all duration-200 text-base sm:text-lg bg-white"
              />
            </div>

            {/* Filters Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Choose Filter */}
              <div>
                <label className="block text-white text-base font-semibold mb-3">
                  Choose:
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-base bg-white text-gray-900 font-medium"
                >
                  <option value="rhymes">Rhymes</option>
                  <option value="rhymes-advanced">Rhymes (advanced)</option>
                  <option value="similar-sound">Similar sounding words</option>
                  <option value="similar-spell">Similarly spelled words</option>
                  <option value="homophones">Homophones</option>
                  <option value="phrase-rhymes">Phrase rhymes</option>
                  <option value="match-consonants">Match consonants</option>
                  <option value="synonyms">Synonyms</option>
                  <option value="antonyms">Antonyms</option>
                  <option value="definitions">Definitions</option>
                </select>
              </div>

              {/* Syllables Filter */}
              <div>
                <label className="block text-white text-base font-semibold mb-3">
                  Syllables:
                </label>
                <select
                  value={syllableFilter}
                  onChange={(e) => setSyllableFilter(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-base bg-white text-gray-900 font-medium"
                >
                  <option value="default">Default</option>
                  <option value="exact">Exact match</option>
                  <option value="1">1 syllable</option>
                  <option value="2">2 syllables</option>
                  <option value="3">3 syllables</option>
                  <option value="4">4 syllables</option>
                  <option value="5">5+ syllables</option>
                </select>
              </div>
            </div>

            {/* Filters Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Want Phrases */}
              <div>
                <label className="block text-white text-base font-semibold mb-3">
                  Want Phrases?
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setWantPhrases(true)}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base flex items-center justify-center gap-2 ${
                      wantPhrases
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-white" />
                    Yes
                  </button>
                  <button
                    onClick={() => setWantPhrases(false)}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base flex items-center justify-center gap-2 ${
                      !wantPhrases
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-white" />
                    No
                  </button>
                </div>
              </div>

              {/* Organize By */}
              <div>
                <label className="block text-white text-base font-semibold mb-3">
                  Organize By
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setOrganizeBy('letters')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base flex items-center justify-center gap-2 ${
                      organizeBy === 'letters'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-white" />
                    Letters
                  </button>
                  <button
                    onClick={() => setOrganizeBy('syllables')}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base flex items-center justify-center gap-2 ${
                      organizeBy === 'syllables'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-white" />
                    Syllables
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleReset}
                className="flex-1 px-6 py-3 sm:py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-bold transition-all duration-300 text-base sm:text-lg"
              >
                Clear All
              </button>
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 text-white px-6 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Finding...
                  </div>
                ) : (
                  'Find Rhymes'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Results: {results.length} Found
              </h2>
              {results.length > 0 && (
                <button
                  onClick={handleCopy}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy All
                    </>
                  )}
                </button>
              )}
            </div>

            {filterType === 'definitions' ? (
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <p className="text-lg text-gray-800 leading-relaxed">
                  {results[0]?.word}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {results.map((result, index) => (
                  <div
                    key={result.word + index}
                    className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-5 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-blue-200"
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors break-words">
                        {result.word}
                      </h3>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(result.word);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1"
                        title="Copy word"
                      >
                        <Copy className="w-4 h-4 text-blue-600" />
                      </button>
                    </div>
                    {result.syllables > 0 && (
                      <p className="text-xs sm:text-sm text-gray-600">
                        {result.syllables} syllable{result.syllables !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && inputWord && results.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-600">Try a different word (e.g., "apple", "cat", "night", "love")</p>
          </div>
        )}

        {/* Tips Section */}
        {!inputWord && !isLoading && results.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Rhymes</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Find perfect and near rhymes for any word. Perfect for poetry, songwriting, and creative writing.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Advanced Rhymes</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Includes both perfect and near rhymes to expand your vocabulary and creative options.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Similar Sounding Words</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Find words that sound similar even if they don't rhyme perfectly. Great for creative alternatives.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Synonyms & Antonyms</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Find words with similar meanings or opposite meanings to expand your vocabulary.
              </p>
            </div>
          </div>
        )}
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
