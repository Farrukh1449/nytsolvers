import React, { useState } from 'react';
import { Search, Puzzle, RefreshCw, Settings, Filter, Lightbulb } from 'lucide-react';

const JumbleSolver: React.FC = () => {
  const [scrambledWords, setScrambledWords] = useState(['', '', '', '']);
  const [finalClue, setFinalClue] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [finalAnswer, setFinalAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sampleResults = ['HOUSE', 'PLANT', 'WATER', 'LIGHT'];
  const sampleFinalAnswer = 'GARDEN';

  const handleSolve = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResults(sampleResults);
      setFinalAnswer(sampleFinalAnswer);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setScrambledWords(['', '', '', '']);
    setFinalClue('');
    setResults([]);
    setFinalAnswer('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Puzzle className="w-4 h-4 mr-2" />
            Jumble Solver
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Daily Jumble <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Solver</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solve daily jumble puzzles instantly by unscrambling words and finding the final answer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Scrambled Words */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Scrambled Words</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {scrambledWords.map((word, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Word {index + 1}
                    </label>
                    <input
                      type="text"
                      value={word}
                      onChange={(e) => {
                        const newWords = [...scrambledWords];
                        newWords[index] = e.target.value.toUpperCase();
                        setScrambledWords(newWords);
                      }}
                      placeholder={`Enter scrambled word ${index + 1}`}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 text-lg font-mono"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Final Clue */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Answer Clue</h3>
              <textarea
                value={finalClue}
                onChange={(e) => setFinalClue(e.target.value)}
                placeholder="Enter the clue for the final answer (optional)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 text-lg resize-none"
                rows={3}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleSolve}
                disabled={isLoading || scrambledWords.every(word => !word)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                {isLoading ? 'Solving...' : 'Solve Jumble'}
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
            {/* How It Works */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>1. Enter the scrambled words</p>
                <p>2. Add the final clue (optional)</p>
                <p>3. Click "Solve Jumble"</p>
                <p>4. Get unscrambled words and final answer</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Jumble Tips
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Look for common letter patterns</p>
                <p>• Try different vowel positions</p>
                <p>• Consider word endings like -ING, -ED</p>
                <p>• Use the final clue for context</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-12 space-y-8">
            {/* Unscrambled Words */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Unscrambled Words
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {results.map((word, index) => (
                  <div
                    key={word}
                    className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 text-center"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    <div className="text-sm text-gray-600 mb-2">Word {index + 1}</div>
                    <div className="text-2xl font-bold text-gray-900">{word}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Answer */}
            {finalAnswer && (
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Final Answer</h3>
                <div className="text-5xl font-bold text-orange-600 mb-4 tracking-wider">
                  {finalAnswer}
                </div>
                {finalClue && (
                  <p className="text-gray-700 text-lg">
                    Clue: "{finalClue}"
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JumbleSolver;