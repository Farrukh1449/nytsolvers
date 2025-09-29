import React from 'react';
import { useState } from 'react';
import { Grid3x3 as Grid3X3, Target, BookOpen, Twitter, Facebook, Instagram, Youtube, Mail, ExternalLink } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  subItems?: FooterLink[];
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const currentYear = new Date().getFullYear();

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const footerSections: FooterSection[] = [
    {
      title: 'NYT Solvers',
      links: [
        { 
          name: 'Wordle Solver', 
          href: '/wordle-solver',
          subItems: [
            { name: '3 Letter Words', href: '/3-letter-words' },
            { name: '4 Letter Words', href: '/4-letter-words' },
            { name: '5 Letter Words', href: '/5-letter-words' },
            { name: '6 Letter Words', href: '/6-letter-words' },
            { name: '7 Letter Words', href: '/7-letter-words' },
            { name: '8 Letter Words', href: '/8-letter-words' },
            { name: '9 Letter Words', href: '/9-letter-words' },
            { name: '10 Letter Words', href: '/10-letter-words' },
            { name: '11 Letter Words', href: '/11-letter-words' },
            { name: '12 Letter Words', href: '/12-letter-words' }
          ]
        },
        { name: 'Spelling Bee Solver', href: '/spelling-bee-solver' },
        { name: 'Letter Boxed Solver', href: '/letter-boxed-solver' },
      ]
    },
    {
      title: 'NYT Answer Pages',
      links: [
        { name: 'Connections Hints', href: '/connections-hints' },
        { name: 'Wordle Hints', href: '/wordle-hints' },
        { name: 'Spelling Bee Hints', href: '/spelling-bee-hints' },
        { name: 'Letter Boxed Hints', href: '/letter-boxed-hints' },
        { name: 'Strands Hints', href: '/strands-hints' },
        { name: 'Crossword Hints', href: '/crossword-hints' },
        { name: 'Mini Crossword Hints', href: '/mini-crossword-hints' },
        { name: 'Connections Sports Hints', href: '/connections-sports-hints' },
        { name: 'Pips Hints', href: '/pips-hints' }
      ]
    },
    {
      title: 'Other Solvers',
      links: [
        { name: 'Scrabble Word Finder', href: '/scrabble-solver' },
        { name: 'Word Unscrambler', href: '/word-unscrambler' },
        { name: 'Anagram Solver', href: '/anagram-solver' },
        { name: 'Quordle Solver', href: '/quordle-solver' },
        { name: 'Crossword Solver', href: '/crossword-solver' },
        { name: 'Jumble Solver', href: '/jumble-solver' },
        { name: 'Words With Friends Solver', href: '/words-with-friends-solver' }
      ]
    },
    {
      title: 'Other Answer Pages',
      links: [
        { name: 'Betweenle Hints', href: '/betweenle-hints' },
        { name: 'Conexo Hints', href: '/conexo-hints' },
        { name: 'Blossom Hints', href: '/blossom-hints' },
        { name: 'Quordle Hints', href: '/quordle-hints' },
        { name: 'LA Times Mini Hints', href: '/la-times-mini-hints' },
        { name: 'LA Times Crossword Hints', href: '/la-times-crossword-hints' },
        { name: 'Word Salad Hints', href: '/word-salad-hints' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blogs', href: '/blogs' },
        { name: 'Grammar', href: '/grammar' },
        { name: 'Misspelling', href: '/misspelling' },
        { name: 'Definitions', href: '/definitions' }
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
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent">
                  NYTSolvers
                </h3>
              </a>
              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
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
              <h4 className="font-semibold mb-3 text-white text-sm sm:text-base">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row max-w-sm mx-auto lg:mx-0 space-y-2 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:border-teal-400 transition-colors duration-200 text-white placeholder-gray-400 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-lime-500 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:from-teal-600 hover:to-lime-600 transition-all duration-200 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
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
            <div key={section.title} className="lg:col-span-1 text-center lg:text-left">
              <h4 className="font-semibold mb-4 text-white text-sm sm:text-base">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name} className="relative">
                    {link.subItems ? (
                      <div>
                        <button
                          onClick={() => toggleSection(link.name)}
                          className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-xs sm:text-sm flex items-center group w-full text-center lg:text-left justify-center lg:justify-start"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                        </button>
                        {expandedSections.includes(link.name) && (
                          <ul className="mt-2 ml-4 space-y-2">
                            {link.subItems.map((subItem) => (
                              <li key={subItem.name}>
                                <a
                                  href={subItem.href}
                                  className="text-gray-500 hover:text-teal-400 transition-colors duration-200 text-xs flex items-center group justify-center lg:justify-start"
                                >
                                  {subItem.name}
                                  <ExternalLink className="w-2 h-2 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-xs sm:text-sm flex items-center group justify-center lg:justify-start"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          {/* Copyright */}
          <div className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} NYTSolvers. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm flex-wrap justify-center">
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
          <div className="flex items-center space-x-2 text-xs text-gray-400 justify-center md:justify-end">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Optimized for Core Web Vitals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;