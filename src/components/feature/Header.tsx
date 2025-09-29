
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.REACT_APP_NAVIGATE('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToTeam = () => {
    window.REACT_APP_NAVIGATE('/team');
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.REACT_APP_NAVIGATE('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-orbitron">N</span>
            </div>
            <span className="text-white font-bold text-xl font-orbitron">NEXATHON</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('#schedule')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Schedule
            </button>
            <button
              onClick={() => scrollToSection('#sponsors')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Sponsors
            </button>
            <button
              onClick={navigateToTeam}
              className="text-white hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('#location')}
              className="text-white hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Location
            </button>
            <motion.button
              onClick={() => scrollToSection('#register')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Register
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={isMenuOpen ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl'}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
            >
              <div className="py-4 space-y-4">
                <button
                  onClick={() => scrollToSection('#home')}
                  className="block w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="block w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('#schedule')}
                  className="block w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 cursor-pointer"
                >
                  Schedule
                </button>
                <button
                  onClick={() => scrollToSection('#sponsors')}
                  className="block w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 cursor-pointer"
                >
                  Sponsors
                </button>
                <button
                  onClick={navigateToTeam}
                  className="block w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 cursor-pointer"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection('#location')}
                  className="block w-full text-left text-white hover:text-cyan-400 transition-colors duration-300 px-4 py-2 cursor-pointer"
                >
                  Location
                </button>
                <button
                  onClick={() => scrollToSection('#register')}
                  className="block w-full text-left bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold mx-4 cursor-pointer"
                >
                  Register
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
