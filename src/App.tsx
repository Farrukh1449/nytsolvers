import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchModal from './components/SearchModal';
import FeaturedSolvers from './components/FeaturedSolvers';
import Footer from './components/Footer';
import WordleSolver from './pages/WordleSolver';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle browser navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/wordle-solver') {
        setCurrentPage('wordle-solver');
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial page based on URL
    handlePopState();
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigation
  useEffect(() => {
    const handleNavigation = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.includes(window.location.origin)) {
        e.preventDefault();
        const path = new URL(target.href).pathname;
        window.history.pushState({}, '', path);
        
        if (path === '/wordle-solver') {
          setCurrentPage('wordle-solver');
        } else {
          setCurrentPage('home');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'wordle-solver':
        return <WordleSolver />;
      default:
        return (
          <>
            <Hero onSearchOpen={() => setIsSearchOpen(true)} />
            <FeaturedSolvers />
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