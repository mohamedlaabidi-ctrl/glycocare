import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { useRamadan } from '../context/RamadanContext';

const Hero = () => {
  const [isLiked, setIsLiked] = useState(false);
  const { isRamadanMode } = useRamadan();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Marathon runners"
          className="w-full h-full object-cover"
        />
        {/* Dark Blue Overlay */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isRamadanMode 
            ? 'bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/85 to-[#0f3460]/90' 
            : 'bg-gradient-to-br from-[#1E40AF]/80 via-[#1E3A8A]/75 to-[#1E40AF]/80'
        }`}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 right-20 hidden lg:block pointer-events-none z-10"
      >
        <Heart className={`w-12 h-12 fill-current ${isRamadanMode ? 'text-[#D4AF37]/30' : 'text-white/20'}`} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 left-20 hidden lg:block pointer-events-none z-10"
      >
        <div className={`w-16 h-16 border-4 rounded-full ${isRamadanMode ? 'border-[#D4AF37]/20' : 'border-white/20'}`}></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Ramadan Badge */}
            {isRamadanMode && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-semibold mb-4 border border-[#D4AF37]/30"
              >
                🌙 Ramadan Special Edition
              </motion.span>
            )}

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                isRamadanMode 
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37]' 
                  : 'bg-white/10 backdrop-blur-md text-white'
              }`}
            >
              🏃‍♂️ University Social Project
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Running for Health,{' '}
              <span className={isRamadanMode ? 'text-[#D4AF37]' : 'text-[#EF4444]'}>Fighting</span>{' '}
              <span className="text-white">Diabetes</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              {isRamadanMode 
                ? "Join GlycoCare this Ramadan in our mission to raise awareness about diabetes management during fasting. Together, we can make a difference."
                : "Join GlycoCare in our mission to combine citizen engagement, prevention, and therapeutic education. Together, we can make a difference in the lives of diabetes patients."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#register"
                className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 ${
                  isRamadanMode
                    ? 'bg-[#D4AF37] hover:bg-[#B8960C] text-gray-900 shadow-[#D4AF37]/30'
                    : 'bg-[#EF4444] hover:bg-red-600 text-white shadow-red-500/30'
                }`}
              >
                Join the Run
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Our Mission
              </motion.a>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 relative z-30">
              <span className="text-white/60 text-sm">Follow us:</span>
              
              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/profile.php?id=61586988750580"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#1877F2] transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/glycocare.tn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 backdrop-blur-md bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#E4405F] transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Expected Runners' },
                { number: '100+', label: 'Glucometers Goal' },
                { number: '5', label: 'Partner Organizations' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className={`text-2xl sm:text-3xl font-bold ${isRamadanMode ? 'text-[#D4AF37]' : 'text-white'}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              {/* Marathon Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Marathon runners running for diabetes awareness"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Floating Date Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 backdrop-blur-md bg-white/90 rounded-xl shadow-xl p-4 flex items-center space-x-3"
              >
                {/* Interactive Heart Button */}
                <motion.button
                  onClick={() => setIsLiked(!isLiked)}
                  whileTap={{ scale: 1.3 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105 ${
                    isLiked ? 'bg-[#EF4444]' : 'bg-[#EF4444]/10'
                  }`}
                >
                  <motion.div
                    animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isLiked ? 'text-white fill-white' : 'text-[#EF4444]'
                      }`}
                    />
                  </motion.div>
                </motion.button>
                <div>
                  <div className="text-sm font-semibold text-gray-900">February 15, 2026</div>
                  <div className="text-xs text-gray-500">Save the Date!</div>
                </div>
              </motion.div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#1E40AF]/20 rounded-2xl" style={{ zIndex: -1 }}></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/40 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;