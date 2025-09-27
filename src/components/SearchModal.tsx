import React, { useState, useEffect } from 'react';
import { Search, X, Zap, Target, Grid3x3 as Grid3X3, BookOpen } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const popularSolvers = [
    { name: 'Wordle Solver', href: '/wordle-solver', icon: Grid3X3, desc: 'Solve daily Wordle puzzles instantly' },
    { name: 'Connections Hints', href: '/connections-hints', icon: Target, desc: 'Get hints for NYT Connections game' },
    { name: 'Spelling Bee Solver', href: '/spelling-bee-solver', icon: Zap, desc: 'Find all possible words for Spelling Bee' },
    { name: 'Crossword Solver', href: '/crossword-solver', icon: BookOpen, desc: 'Solve crossword clues quickly' }
  ];

  const allSolvers = [
    { name: 'Wordle Solver', href: '/wordle-solver', category: 'NYT Solvers' },
    { name: 'Spelling Bee Solver', href: '/spelling-bee-solver', category: 'NYT Solvers' },
    { name: 'Letter Boxed Solver', href: '/letter-boxed-solver', category: 'NYT Solvers' },
    { name: '3 Letter Words', href: '/3-letter-words', category: 'Word Lists' },
    { name: '4 Letter Words', href: '/4-letter-words', category: 'Word Lists' },
    { name: '5 Letter Words', href: '/5-letter-words', category: 'Word Lists' },
    { name: '6 Letter Words', href: '/6-letter-words', category: 'Word Lists' },
    { name: '7 Letter Words', href: '/7-letter-words', category: 'Word Lists' },
    { name: '8 Letter Words', href: '/8-letter-words', category: 'Word Lists' },
    { name: '9 Letter Words', href: '/9-letter-words', category: 'Word Lists' },
    { name: '10 Letter Words', href: '/10-letter-words', category: 'Word Lists' },
    { name: '11 Letter Words', href: '/11-letter-words', category: 'Word Lists' },
    { name: '12 Letter Words', href: '/12-letter-words', category: 'Word Lists' },
    { name: 'Connections Hints', href: '/connections-hints', category: 'NYT Answer Pages' },
    { name: 'Wordle Hints', href: '/wordle-hints', category: 'NYT Answer Pages' },
    { name: 'Spelling Bee Hints', href: '/spelling-bee-hints', category: 'NYT Answer Pages' },
    { name: 'Letter Boxed Hints', href: '/letter-boxed-hints', category: 'NYT Answer Pages' },
    { name: 'Strands Hints', href: '/strands-hints', category: 'NYT Answer Pages' },
    { name: 'Crossword Hints', href: '/crossword-hints', category: 'NYT Answer Pages' },
    { name: 'Mini Crossword Hints', href: '/mini-crossword-hints', category: 'NYT Answer Pages' },
    { name: 'Connections Sports Hints', href: '/connections-sports-hints', category: 'NYT Answer Pages' },
    { name: 'Pips Hints', href: '/pips-hints', category: 'NYT Answer Pages' },
    { name: 'Scrabble Word Finder', href: '/scrabble-solver', category: 'Other Solvers' },
    { name: 'Word Unscrambler', href: '/word-unscrambler', category: 'Other Solvers' },
    { name: 'Anagram Solver', href: '/anagram-solver', category: 'Other Solvers' },
    { name: 'Quordle Solver', href: '/quordle-solver', category: 'Other Solvers' },
    { name: 'Crossword Solver', href: '/crossword-solver', category: 'Other Solvers' },
    { name: 'Jumble Solver', href: '/jumble-solver', category: 'Other Solvers' },
    { name: 'Words With Friends Solver', href: '/words-with-friends-solver', category: 'Other Solvers' },
    { name: 'Betweenle Hints', href: '/betweenle-hints', category: 'Other Answer Pages' },
    { name: 'Conexo Hints', href: '/conexo-hints', category: 'Other Answer Pages' },
    { name: 'Blossom Hints', href: '/blossom-hints', category: 'Other Answer Pages' },
    { name: 'Quordle Hints', href: '/quordle-hints', category: 'Other Answer Pages' },
    { name: 'LA Times Mini Hints', href: '/la-times-mini-hints', category: 'Other Answer Pages' },
    { name: 'LA Times Crossword Hints', href: '/la-times-crossword-hints', category: 'Other Answer Pages' },
    { name: 'Word Salad Hints', href: '/word-salad-hints', category: 'Other Answer Pages' }
  ];

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = allSolvers.filter(solver =>
        solver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solver.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-start justify-center p-4 pt-16">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl transform transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Search Solvers</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-6 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for game solvers, hints, or tools..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                autoFocus
              />
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchTerm.trim() ? (
              <div className="p-6">
                {results.length > 0 ? (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-500 mb-4">Search Results</h3>
                    {results.map((solver, index) => (
                      <a
                        key={solver.name}
                        href={solver.href}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        onClick={onClose}
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                            {solver.name}
                          </div>
                          <div className="text-sm text-gray-500">{solver.category}</div>
                        </div>
                        <div className="text-gray-400 group-hover:text-teal-500 transition-colors duration-200">
                          <Search className="w-4 h-4" />
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No solvers found for "{searchTerm}"</p>
                    <p className="text-sm text-gray-400 mt-2">Try searching for "Wordle", "Connections", or "Crossword"</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4">Popular Solvers</h3>
                <div className="space-y-3">
                  {popularSolvers.map((solver, index) => (
                    <a
                      key={solver.name}
                      href={solver.href}
                      className="flex items-center p-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-lime-50 transition-all duration-200 group"
                      onClick={onClose}
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-lime-100 rounded-lg flex items-center justify-center mr-4 group-hover:from-teal-200 group-hover:to-lime-200 transition-all duration-200">
                        <solver.icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
                          {solver.name}
                        </div>
                        <div className="text-sm text-gray-500">{solver.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;