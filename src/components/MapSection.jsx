import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Navigation, Clock, Route } from 'lucide-react';

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const routeInfo = [
    { icon: Route, label: 'Distance', value: '5 km' },
    { icon: Clock, label: 'Est. Time', value: '30-45 min' },
    { icon: MapPin, label: 'Start Point', value: "Sup'Com Campus" },
    { icon: Navigation, label: 'Terrain', value: 'Flat, Urban' },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1E40AF]/20 to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#EF4444]/20 text-[#EF4444] rounded-full text-sm font-semibold mb-4">
            The Route
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            5km Marathon <span className="text-[#3B82F6]">Route</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our carefully planned route around the Higher School of Communication of Tunis (Sup'Com) in Ariana.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Google Maps Embed - Sup'Com exact location */}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Sup'Com+Higher+School+of+Communication+Tunis,Tunisia&zoom=16"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>

              {/* Map Overlay with Route Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="backdrop-blur-md bg-black/60 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin className="w-5 h-5 text-[#EF4444]" />
                    <span className="font-semibold">Higher School of Communication of Tunis (Sup'Com)</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Cité Technologique des Communications, Ariana 2083, Tunisia
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    GPS: V5RQ+Q42
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Route Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {routeInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-lg font-bold text-white">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Checkpoints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="backdrop-blur-md bg-gradient-to-r from-[#EF4444]/20 to-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl p-4"
            >
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#EF4444]" />
                Checkpoints
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#EF4444] rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                  Start - Sup'Com Main Gate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                  Water Station - 2.5km
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                  Finish - Sup'Com Campus
                </li>
              </ul>
            </motion.div>

            {/* Direct Link to Google Maps */}
            <motion.a
              href="https://www.google.com/maps/place/V5RQ%2BQ42"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="block w-full py-3 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-center rounded-xl font-semibold transition-all duration-300"
            >
              Open in Google Maps
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;