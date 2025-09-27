import React, { useState, useEffect } from 'react';
import { Search, Target, RefreshCw, CheckCircle, XCircle, Info, Lightbulb } from 'lucide-react';

const WordleSolver: React.FC = () => {
  const [knownLetters, setKnownLetters] = useState(['', '', '', '', '']);
  const [wrongLetters, setWrongLetters] = useState('');
  const [wrongPositions, setWrongPositions] = useState(['', '', '', '', '']);
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showHints, setShowHints] = useState(false);

  // Sample word list for demonstration
  const sampleWords = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
    'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
    'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AVOID', 'AWAKE', 'AWARD',
    'AWARE', 'BADLY', 'BAKER', 'BASES', 'BASIC', 'BEACH', 'BEGAN', 'BEGIN', 'BEING', 'BELOW',
    'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLANK', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD'
  ];

  const handleSolve = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = [...sampleWords];
      
      // Filter by known letters (green)
      knownLetters.forEach((letter, index) => {
        if (letter) {
          filtered = filtered.filter(word => word[index].toLowerCase() === letter.toLowerCase());
        }
      });
      
      // Filter by wrong letters (gray)
      if (wrongLetters) {
        const wrong = wrongLetters.toLowerCase().split('').filter(l => l.trim());
        filtered = filtered.filter(word => 
          !wrong.some(letter => word.toLowerCase().includes(letter))
        );
      }
      
      // Filter by wrong positions (yellow)
      wrongPositions.forEach((letters, index) => {
        if (letters) {
          const wrongPos = letters.toLowerCase().split('').filter(l => l.trim());
          filtered = filtered.filter(word => 
            wrongPos.every(letter => 
              word.toLowerCase().includes(letter) && word[index].toLowerCase() !== letter
            )
          );
        }
      });
      
      setResults(filtered.slice(0, 20)); // Limit to 20 results
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setKnownLetters(['', '', '', '', '']);
    setWrongLetters('');
    setWrongPositions(['', '', '', '', '']);
    setResults([]);
  };

  const tips = [
    'Start with common vowels (A, E, I, O, U) and consonants (R, S, T, L, N)',
    'Use your second guess to test different letters, not repeat known ones',
    'Pay attention to letter frequency - E, A, R, I, O are most common',
    'Consider common word patterns and endings like -ING, -ED, -ER'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            Wordle Solver
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wordle <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Solver</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Enter your known letters and constraints to find the perfect Wordle solution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Known Letters (Green) */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Known Letters (Green)
              </h3>
              <p className="text-gray-600 mb-4 text-sm">Enter letters you know are in the correct position</p>
              
              <div className="flex space-x-2 justify-center">
                {knownLetters.map((letter, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={letter}
                    onChange={(e) => {
                      const newLetters = [...knownLetters];
                      newLetters[index] = e.target.value.toUpperCase();
                      setKnownLetters(newLetters);
                    }}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-green-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-green-50"
                    placeholder={(index + 1).toString()}
                  />
                ))}
              </div>
            </div>

            {/* Wrong Position Letters (Yellow) */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full mr-2" />
                Wrong Position Letters (Yellow)
              </h3>
              <p className="text-gray-600 mb-4 text-sm">Enter letters that are in the word but in wrong positions</p>
              
              <div className="flex space-x-2 justify-center">
                {wrongPositions.map((letters, index) => (
                  <input
                    key={index}
                    type="text"
                    value={letters}
                    onChange={(e) => {
                      const newPositions = [...wrongPositions];
                      newPositions[index] = e.target.value.toUpperCase();
                      setWrongPositions(newPositions);
                    }}
                    className="w-12 h-12 text-center text-xs font-bold border-2 border-yellow-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-200 bg-yellow-50"
                    placeholder={(index + 1).toString()}
                  />
                ))}
              </div>
            </div>

            {/* Excluded Letters (Gray) */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <XCircle className="w-5 h-5 text-gray-500 mr-2" />
                Excluded Letters (Gray)
              </h3>
              <p className="text-gray-600 mb-4 text-sm">Enter letters that are not in the word</p>
              
              <input
                type="text"
                value={wrongLetters}
                onChange={(e) => setWrongLetters(e.target.value.toUpperCase())}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-all duration-200 text-center text-base font-medium bg-gray-50"
                placeholder="Enter excluded letters (e.g., QWERT)"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleSolve}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-4 rounded-xl font-semibold text-base hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Solving...' : 'Find Solutions'}
              </button>
              
              <button
                onClick={handleReset}
                className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center text-base"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reset
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowHints(!showHints)}
              >
                <h3 className="text-base font-semibold text-gray-900 flex items-center">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                  Pro Tips
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  {showHints ? '−' : '+'}
                </button>
              </div>
              
              {showHints && (
                <div className="mt-3 space-y-2">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-1">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-xs text-gray-600">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* How to Use */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                <Info className="w-5 h-5 text-blue-500 mr-2" />
                How to Use
              </h3>
              <div className="space-y-2 text-xs text-gray-600">
                <p><strong className="text-green-600">Green:</strong> Letter is correct and in right position</p>
                <p><strong className="text-yellow-600">Yellow:</strong> Letter is in word but wrong position</p>
                <p><strong className="text-gray-600">Gray:</strong> Letter is not in the word</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-10">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Possible Solutions ({results.length})
              </h3>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-3 text-center font-bold text-base text-gray-900 hover:from-yellow-200 hover:to-orange-200 transition-all duration-200 transform hover:scale-105 cursor-pointer"
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

export default WordleSolver;