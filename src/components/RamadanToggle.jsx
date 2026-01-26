import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useRamadan } from '../context/RamadanContext';

const RamadanToggle = () => {
  const { isRamadanMode, setIsRamadanMode } = useRamadan();

  return (
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={() => setIsRamadanMode(!isRamadanMode)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-500 hover:scale-105 ${
        isRamadanMode
          ? 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-[#D4AF37]'
          : 'bg-white text-gray-700 border border-gray-200'
      }`}
    >
      <AnimatePresence mode="wait">
        {isRamadanMode ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Moon className="w-5 h-5 fill-current" />
            <span className="text-sm font-semibold">Ramadan Mode</span>
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Sun className="w-5 h-5" />
            <span className="text-sm font-semibold">Regular Mode</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default RamadanToggle;