import React from 'react';
import { Grid3x3 as Grid3X3, Target, BookOpen, Twitter, Facebook, Instagram, Youtube, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'NYT Solvers',
      links: [
        { name: 'Wordle Solver', href: '/wordle-solver' },
        { name: 'Spelling Bee Solver', href: '/spelling-bee-solver' },
        { name: 'Letter Boxed Solver', href: '/letter-boxed-solver' },
        { name: '3-12 Letter Words', href: '/letter-words' }
      ]
    },
    {
      title: 'NYT Answer Pages',
      links: [
        { name: 'Connections Hints', href: '/connections-hints' },
        { name: 'Wordle Hints', href: '/wordle-hints' },
        { name: 'Strands Hints', href: '/strands-hints' },
        { name: 'Crossword Hints', href: '/crossword-hints' }
      ]
    },
    {
      title: 'Other Solvers',
      links: [
        { name: 'Scrabble Word Finder', href: '/scrabble-solver' },
        { name: 'Word Unscrambler', href: '/word-unscrambler' },
        { name: 'Anagram Solver', href: '/anagram-solver' },
        { name: 'Quordle Solver', href: '/quordle-solver' }
      ]
    },
    {
      title: 'Other Answer Pages',
      links: [
        { name: 'Betweenle Hints', href: '/betweenle-hints' },
        { name: 'Quordle Hints', href: '/quordle-hints' },
        { name: 'Blossom Hints', href: '/blossom-hints' },
        { name: 'Word Salad Hints', href: '/word-salad-hints' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  const gameIcons = [
    { icon: Grid3X3, color: 'from-yellow-400 to-orange-500' },
    { icon: Target, color: 'from-blue-400 to-indigo-500' },
    { icon: BookOpen, color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-lime-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-lime-500/8 to-teal-500/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
                  NYTSolvers
                </h3>
              </a>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Your go-to destination for solving New York Times puzzles and word games. 
                Get instant solutions, hints, and powerful tools to conquer any challenge.
              </p>
            </div>

            {/* Game Icons */}
            <div className="flex items-center space-x-4 mb-6">
              {gameIcons.map((game, index) => (
                <div 
                  key={index}
                  className={`w-10 h-10 bg-gradient-to-r ${game.color} rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer`}
                >
                  <game.icon className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-teal-400 transition-colors duration-200 text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-r-lg hover:from-teal-600 hover:to-lime-600 transition-all duration-200 flex items-center">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-lime-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} NYTSolvers. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
              Contact
            </a>
            <a href="/about" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
              About
            </a>
          </div>

          {/* Performance Badge */}
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Optimized for Core Web Vitals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;