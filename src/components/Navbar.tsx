import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
  subItems?: DropdownItem[];
}

interface NavbarProps {
  onSearchOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'NYT Solvers',
      items: [
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
        { name: 'Letter Boxed Solver', href: '/letter-boxed-solver' }
      ]
    },
    {
      title: 'NYT Answer Pages',
      items: [
        { name: 'Connections Hints', href: '/connections-hints' },
        { name: 'Wordle Hints', href: '/wordle-hints' },
        { name: 'Spelling Bee Hints', href: '/spelling-bee-hints' },
        { name: 'Letter Boxed Hints', href: '/letter-boxed-hints' },
        { name: 'Strands Hints', href: '/strands-hints' },
        { name: 'Crossword Hints', href: '/crossword-hints' },
        { name: 'Mini Crossword Hints', href: '/mini-crossword-hints' },
        { name: 'Connections: Sports Edition Hints', href: '/connections-sports-hints' },
        { name: 'Letter Boxed Hints', href: '/letter-boxed-hints' },
        { name: 'Pips Hints', href: '/pips-hints' }
      ]
    },
    {
      title: 'Other Solvers',
      items: [
        { name: 'Scrabble Word Finder', href: '/scrabble-solver' },
        { name: 'Word Unscrambler', href: '/word-unscrambler' },
        { name: 'Anagram Solver', href: '/anagram-solver' },
        { name: 'Quordle Solver', href: '/quordle-solver' },
        { name: 'Crossword Solver', href: '/crossword-solver' },
        { name: 'Words With Friends Solver', href: '/words-with-friends-solver' },
        { name: 'Jumble Solver', href: '/jumble-solver' }
      ]
    },
    {
      title: 'Other Answer Pages',
      items: [
        { name: 'Betweenle Hints', href: '/betweenle-hints' },
        { name: 'Conexo Hints', href: '/conexo-hints' },
        { name: 'Blossom Hints', href: '/blossom-hints' },
        { name: 'Quordle Hints', href: '/quordle-hints' },
        { name: 'LA Times Mini Crossword Hints', href: '/la-times-mini-hints' },
        { name: 'LA Times Crossword Hints', href: '/la-times-crossword-hints' },
        { name: 'Word Salad Hints', href: '/word-salad-hints' }
      ]
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-teal-100' 
        : 'bg-gradient-to-r from-white/90 to-teal-50/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent hover:from-teal-700 hover:to-lime-700 transition-all duration-300"
            >
              NYTSolvers
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((section) => (
              <div 
                key={section.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(section.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">
                  {section.title}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  activeDropdown === section.title 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 -translate-y-2 invisible'
                }`}>
                  <div className="py-2">
                    {section.items.map((item) => (
                      <div key={item.name} className="relative group/item">
                        <a
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-50 hover:to-lime-50 hover:text-teal-700 transition-all duration-200"
                        >
                          {item.name}
                          {item.subItems && (
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </a>
                        
                        {/* Sub-dropdown */}
                        {item.subItems && (
                          <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                            <div className="py-2">
                              {item.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-lime-50 hover:text-teal-700 transition-all duration-200"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Show All Button for Other Solvers */}
                    {section.title === 'Other Solvers' && (
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <a
                          href="/all-solvers"
                          className="flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg mx-2 transition-all duration-200"
                        >
                          Show All Solvers
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSearchOpen}
              className="p-2 rounded-lg bg-gradient-to-r from-teal-500 to-lime-500 text-white hover:from-teal-600 hover:to-lime-600 transition-all duration-200 hover:scale-105"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 py-2 space-y-2">
          {navigationItems.map((section) => (
            <div key={section.title} className="border-b border-gray-100 last:border-b-0 pb-2">
              <div className="font-medium text-gray-900 py-2">{section.title}</div>
              <div className="pl-4 space-y-1">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                    {item.subItems && (
                      <div className="pl-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1 text-xs text-gray-500 hover:text-teal-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
             
             {/* Show All Button for Mobile - Other Solvers */}
             {section.title === 'Other Solvers' && (
               <div className="pl-4 mt-2">
                 <a
                   href="/all-solvers"
                   className="block py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg px-3 text-center transition-all duration-200"
                 >
                   Show All Solvers
                 </a>
               </div>
             )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;