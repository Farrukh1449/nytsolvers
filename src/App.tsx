import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchModal from './components/SearchModal';
import SolutionsSection from './components/SolutionsSection';
import AnswersSection from './components/AnswersSection';
import Footer from './components/Footer';
import WordleSolver from './pages/WordleSolver';
import AllSolvers from './pages/AllSolvers';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle browser navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/wordle-solver') {
        setCurrentPage('wordle-solver');
      } else if (path === '/all-solvers') {
        setCurrentPage('all-solvers');
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
        } else if (path === '/all-solvers') {
          setCurrentPage('all-solvers');
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
      case 'all-solvers':
        return <AllSolvers />;
      default:
        return (
          <>
            <Hero onSearchOpen={() => setIsSearchOpen(true)} />
            <SolutionsSection />
            <AnswersSection />
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