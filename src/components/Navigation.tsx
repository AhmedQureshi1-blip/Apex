import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
            </div>
            <span className="text-xl font-bold text-white">Apexcify</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-xl border border-gray-800 transition-all duration-200 ${isFeaturesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-2">
                  <button onClick={() => { onNavigate('features'); setIsFeaturesOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">AI Solutions</button>
                  <button onClick={() => { onNavigate('features'); setIsFeaturesOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">Automation</button>
                  <button onClick={() => { onNavigate('features'); setIsFeaturesOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">Analytics</button>
                  <button onClick={() => { onNavigate('features'); setIsFeaturesOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">Integration</button>
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('developers')} className={`text-gray-300 hover:text-white transition-colors ${currentPage === 'developers' ? 'text-white' : ''}`}>
              Developers
            </button>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-xl border border-gray-800 transition-all duration-200 ${isCompanyOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-2">
                  <button onClick={() => { onNavigate('company'); setIsCompanyOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">About Us</button>
                  <button onClick={() => { onNavigate('company'); setIsCompanyOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">Team</button>
                  <button onClick={() => { onNavigate('company'); setIsCompanyOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">Careers</button>
                  <button onClick={() => { onNavigate('company'); setIsCompanyOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">Contact</button>
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('blog')} className={`text-gray-300 hover:text-white transition-colors ${currentPage === 'blog' ? 'text-white' : ''}`}>
              Blog
            </button>

            <button onClick={() => onNavigate('changelog')} className={`text-gray-300 hover:text-white transition-colors ${currentPage === 'changelog' ? 'text-white' : ''}`}>
              Changelog
            </button>
          </div>

          <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-transparent border border-gray-700 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Join waitlist
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => { onNavigate('features'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-white py-2">Features</button>
            <button onClick={() => { onNavigate('developers'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-white py-2">Developers</button>
            <button onClick={() => { onNavigate('company'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-white py-2">Company</button>
            <button onClick={() => { onNavigate('blog'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-white py-2">Blog</button>
            <button onClick={() => { onNavigate('changelog'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-white py-2">Changelog</button>
            <button className="w-full px-6 py-2.5 bg-transparent border border-gray-700 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 mt-4">
              Join waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
