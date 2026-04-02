import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Features from './pages/Features';
import Developers from './pages/Developers';
import Company from './pages/Company';
import Blog from './pages/Blog';
import Changelog from './pages/Changelog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'features':
        return <Features />;
      case 'developers':
        return <Developers />;
      case 'company':
        return <Company />;
      case 'blog':
        return <Blog />;
      case 'changelog':
        return <Changelog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
