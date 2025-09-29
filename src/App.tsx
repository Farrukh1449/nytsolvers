import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchModal from './components/SearchModal';
import FeaturedSolvers from './components/FeaturedSolvers';
import SolutionsSection from './components/SolutionsSection';
import AnswersSection from './components/AnswersSection';
import Footer from './components/Footer';

// Import all pages
import WordleSolver from './pages/WordleSolver';
import AllSolvers from './pages/AllSolvers';
import SpellingBeeSolver from './pages/SpellingBeeSolver';
import LetterBoxedSolver from './pages/LetterBoxedSolver';
import ScrabbleSolver from './pages/ScrabbleSolver';
import WordUnscrambler from './pages/WordUnscrambler';
import AnagramSolver from './pages/AnagramSolver';
import CrosswordSolver from './pages/CrosswordSolver';
import JumbleSolver from './pages/JumbleSolver';
import WordsWithFriendsSolver from './pages/WordsWithFriendsSolver';
import QuordleSolver from './pages/QuordleSolver';
import LetterBoxedHints from './pages/LetterBoxedHints';
import SpellingBeeHints from './pages/SpellingBeeHints';

// Letter word solvers
import ThreeLetterWords from './pages/ThreeLetterWords';
import FourLetterWords from './pages/FourLetterWords';
import FiveLetterWords from './pages/FiveLetterWords';
import SixLetterWords from './pages/SixLetterWords';
import SevenLetterWords from './pages/SevenLetterWords';
import EightLetterWords from './pages/EightLetterWords';
import NineLetterWords from './pages/NineLetterWords';
import TenLetterWords from './pages/TenLetterWords';
import ElevenLetterWords from './pages/ElevenLetterWords';
import TwelveLetterWords from './pages/TwelveLetterWords';

// Answer pages
import ConnectionsHints from './pages/ConnectionsHints';
import WordleHints from './pages/WordleHints';
import StrandsHints from './pages/StrandsHints';
import CrosswordHints from './pages/CrosswordHints';
import MiniCrosswordHints from './pages/MiniCrosswordHints';
import QuordleHints from './pages/QuordleHints';
import BlossomHints from './pages/BlossomHints';
import ConexoHints from './pages/ConexoHints';
import ConnectionsSportsHints from './pages/ConnectionsSportsHints';
import PipsHints from './pages/PipsHints';
import LATimesMiniHints from './pages/LATimesMiniHints';
import LATimesCrosswordHints from './pages/LATimesCrosswordHints';
import WordSaladHints from './pages/WordSaladHints';
import BetweenleHints from './pages/BetweenleHints';
import WhatIsWordleBlog from './pages/WhatIsWordleBlog';

// Resource pages
import Blogs from './pages/Blogs';
import Grammar from './pages/Grammar';
import Misspelling from './pages/Misspelling';
import Definitions from './pages/Definitions';
import AffectVsEffect from './pages/AffectVsEffect';
function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(getPageFromPath(path));
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleNavigation = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.includes(window.location.origin)) {
        e.preventDefault();
        const path = new URL(target.href).pathname;
        window.history.pushState({}, '', path);
        setCurrentPage(getPageFromPath(path));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  const getPageFromPath = (path: string) => {
    switch (path) {
      case '/wordle-solver': return 'wordle-solver';
      case '/all-solvers': return 'all-solvers';
      case '/spelling-bee-solver': return 'spelling-bee-solver';
      case '/letter-boxed-solver': return 'letter-boxed-solver';
      case '/scrabble-solver': return 'scrabble-solver';
      case '/word-unscrambler': return 'word-unscrambler';
      case '/anagram-solver': return 'anagram-solver';
      case '/crossword-solver': return 'crossword-solver';
      case '/jumble-solver': return 'jumble-solver';
      case '/words-with-friends-solver': return 'words-with-friends-solver';
      case '/quordle-solver': return 'quordle-solver';
      case '/3-letter-words': return '3-letter-words';
      case '/4-letter-words': return '4-letter-words';
      case '/5-letter-words': return '5-letter-words';
      case '/6-letter-words': return '6-letter-words';
      case '/7-letter-words': return '7-letter-words';
      case '/8-letter-words': return '8-letter-words';
      case '/9-letter-words': return '9-letter-words';
      case '/10-letter-words': return '10-letter-words';
      case '/11-letter-words': return '11-letter-words';
      case '/12-letter-words': return '12-letter-words';
      case '/connections-hints': return 'connections-hints';
      case '/wordle-hints': return 'wordle-hints';
      case '/strands-hints': return 'strands-hints';
      case '/crossword-hints': return 'crossword-hints';
      case '/mini-crossword-hints': return 'mini-crossword-hints';
      case '/quordle-hints': return 'quordle-hints';
      case '/spelling-bee-hints': return 'spelling-bee-hints';
      case '/letter-boxed-hints': return 'letter-boxed-hints';
      case '/blossom-hints': return 'blossom-hints';
      case '/conexo-hints': return 'conexo-hints';
      case '/connections-sports-hints': return 'connections-sports-hints';
      case '/pips-hints': return 'pips-hints';
      case '/la-times-mini-hints': return 'la-times-mini-hints';
      case '/la-times-crossword-hints': return 'la-times-crossword-hints';
      case '/word-salad-hints': return 'word-salad-hints';
      case '/betweenle-hints': return 'betweenle-hints';
      case '/blogs': return 'blogs';
      case '/what-is-wordle': return 'what-is-wordle';
      case '/grammar': return 'grammar';
      case '/misspelling': return 'misspelling';
      case '/definitions': return 'definitions';
      case '/affect-vs-effect': return 'affect-vs-effect';
      default: return 'home';
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'wordle-solver': return <WordleSolver />;
      case 'all-solvers': return <AllSolvers />;
      case 'spelling-bee-solver': return <SpellingBeeSolver />;
      case 'letter-boxed-solver': return <LetterBoxedSolver />;
      case 'scrabble-solver': return <ScrabbleSolver />;
      case 'word-unscrambler': return <WordUnscrambler />;
      case 'anagram-solver': return <AnagramSolver />;
      case 'crossword-solver': return <CrosswordSolver />;
      case 'jumble-solver': return <JumbleSolver />;
      case 'words-with-friends-solver': return <WordsWithFriendsSolver />;
      case 'quordle-solver': return <QuordleSolver />;
      case '3-letter-words': return <ThreeLetterWords />;
      case '4-letter-words': return <FourLetterWords />;
      case '5-letter-words': return <FiveLetterWords />;
      case '6-letter-words': return <SixLetterWords />;
      case '7-letter-words': return <SevenLetterWords />;
      case '8-letter-words': return <EightLetterWords />;
      case '9-letter-words': return <NineLetterWords />;
      case '10-letter-words': return <TenLetterWords />;
      case '11-letter-words': return <ElevenLetterWords />;
      case '12-letter-words': return <TwelveLetterWords />;
      case 'connections-hints': return <ConnectionsHints />;
      case 'wordle-hints': return <WordleHints />;
      case 'strands-hints': return <StrandsHints />;
      case 'crossword-hints': return <CrosswordHints />;
      case 'mini-crossword-hints': return <MiniCrosswordHints />;
      case 'quordle-hints': return <QuordleHints />;
      case 'spelling-bee-hints': return <SpellingBeeHints />;
      case 'letter-boxed-hints': return <LetterBoxedHints />;
      case 'blossom-hints': return <BlossomHints />;
      case 'conexo-hints': return <ConexoHints />;
      case 'connections-sports-hints': return <ConnectionsSportsHints />;
      case 'pips-hints': return <PipsHints />;
      case 'la-times-mini-hints': return <LATimesMiniHints />;
      case 'la-times-crossword-hints': return <LATimesCrosswordHints />;
      case 'word-salad-hints': return <WordSaladHints />;
      case 'betweenle-hints': return <BetweenleHints />;
      case 'blogs': return <Blogs />;
      case 'what-is-wordle': return <WhatIsWordleBlog />;
      case 'grammar': return <Grammar />;
      case 'misspelling': return <Misspelling />;
      case 'definitions': return <Definitions />;
      case 'affect-vs-effect': return <AffectVsEffect />;
      default:
        return (
          <>
            <Hero />
            <FeaturedSolvers />
            <AnswersSection />
            <SolutionsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      {renderPage()}
      <Footer />
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </div>
  );
}

export default App;