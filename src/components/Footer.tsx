import React from 'react';
import { Grid3x3 as Grid3X3, Mail, Twitter, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'NYT Solvers',
      links: [
        { name: 'Wordle Solver', href: '/wordle-solver' },
        { name: 'Connections Hints', href: '/connections-hints' },
        { name: 'Spelling Bee Solver', href: '/spelling-bee-solver' },
        { name: 'Crossword Solver', href: '/crossword-solver' }
      ]
    },
    {
      title: 'Other Tools',
      links: [
        { name: 'Word Unscrambler', href: '/word-unscrambler' },
        { name: 'Anagram Solver', href: '/anagram-solver' },
        { name: 'Scrabble Helper', href: '/scrabble-solver' },
        { name: 'All Solvers', href: '/all-solvers' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'How to Play Wordle', href: '/how-to-play-wordle' },
        { name: 'Word Game Tips', href: '/word-game-tips' },
        { name: 'Daily Puzzles', href: '/daily-puzzles' },
        { name: 'Game Strategies', href: '/strategies' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 text-4xl">🎯</div>
        <div className="absolute top-8 right-8 text-3xl">🔗</div>
        <div className="absolute bottom-4 left-8 text-3xl">🐝</div>
        <div className="absolute bottom-8 right-4 text-4xl">📰</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-30">🧩</div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-2">
              <Grid3X3 className="w-6 h-6 text-teal-400 mr-2" />
              <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
                NYTSolvers
              </span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Your ultimate destination for solving word puzzles, games, and brain teasers with advanced algorithms and comprehensive databases.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-300 hover:text-teal-400 transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center text-xs text-gray-400">
              <span>© {currentYear} NYTSolvers. Made with</span>
              <Heart className="w-3 h-3 text-red-400 mx-1" />
              <span>for puzzle lovers.</span>
            </div>
            
            <div className="flex space-x-4 text-xs">
              <a href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;