import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'The Marathon', href: '#marathon' },
    { name: 'Events', href: '#events' },
    { name: 'Partners', href: '#partners' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-1' : 'bg-white/80 backdrop-blur-md py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - BIGGER SIZE */}
          <a href="#home" className="flex items-center">
            <img 
              src={logo} 
              alt="GlycoCare Logo" 
              className={`transition-all duration-300 ${
                scrolled ? 'h-14' : 'h-16 sm:h-20'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#1E40AF] font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-[#EF4444] hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1E40AF]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <a
                    href="#register"
                    className="block text-center bg-[#EF4444] hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;