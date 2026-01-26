import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, AlertCircle } from 'lucide-react';
import { useRamadan } from '../context/RamadanContext';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isRamadanMode } = useRamadan();

  const events = [
    {
      title: 'Opening Ceremony',
      date: 'February 15, 2026',
      time: '07:00 AM',
      location: "Sup'Com Campus",
      description: 'Kick-off event with health screenings and warm-up sessions.',
      attendees: 500,
      isMain: true,
    },
    {
      title: '5km Marathon Start',
      date: 'February 15, 2026',
      time: '08:00 AM',
      location: 'Cité Technologique',
      description: 'The main marathon event begins with all participants.',
      attendees: 500,
      isMain: true,
    },
    {
      title: 'Health Workshop',
      date: 'February 15, 2026',
      time: '10:00 AM',
      location: "Sup'Com Auditorium",
      description: 'Educational session on diabetes prevention and management.',
      attendees: 200,
      isMain: false,
    },
    {
      title: 'Closing & Awards',
      date: 'February 15, 2026',
      time: '12:00 PM',
      location: "Sup'Com Campus",
      description: 'Award ceremony and closing remarks with refreshments.',
      attendees: 500,
      isMain: false,
    },
  ];

  // Ramadan-specific content
  const ramadanContent = {
    title: 'Diabetes & Fasting',
    tips: [
      'Consult your doctor before fasting',
      'Monitor blood sugar levels regularly',
      'Stay hydrated during non-fasting hours',
      'Break fast with low glycemic foods',
      'Avoid excessive sugary foods at Iftar',
    ],
  };

  return (
    <section id="events" className={`py-20 transition-colors duration-500 ${
      isRamadanMode ? 'bg-[#1a1a2e]' : 'bg-[#F3F4F6]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
            isRamadanMode 
              ? 'bg-[#D4AF37]/20 text-[#D4AF37]' 
              : 'bg-[#1E40AF]/10 text-[#1E40AF]'
          }`}>
            {isRamadanMode ? '🌙 Ramadan Events' : 'Event Schedule'}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isRamadanMode ? 'text-white' : 'text-gray-900'
          }`}>
            Upcoming <span className={isRamadanMode ? 'text-[#D4AF37]' : 'text-[#EF4444]'}>Events</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isRamadanMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Mark your calendar for these important dates and join us in our mission.
          </p>
        </motion.div>

        {/* Ramadan Special Section */}
        {isRamadanMode && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 ramadan-highlight backdrop-blur-md bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-2xl p-8 border border-[#D4AF37]/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">{ramadanContent.title}</h3>
                <p className="text-gray-300 mb-4">
                  Special guidance for managing diabetes during the holy month of Ramadan:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {ramadanContent.tips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                isRamadanMode
                  ? 'backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10'
                  : 'backdrop-blur-md bg-white/70 border border-white/20 hover:bg-white'
              } ${event.isMain && isRamadanMode ? 'border-[#D4AF37]/50' : ''}`}
            >
              {/* Event Badge */}
              {event.isMain && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  isRamadanMode 
                    ? 'bg-[#D4AF37]/20 text-[#D4AF37]' 
                    : 'bg-[#EF4444]/10 text-[#EF4444]'
                }`}>
                  Main Event
                </span>
              )}

              <h3 className={`text-xl font-bold mb-3 ${
                isRamadanMode ? 'text-white' : 'text-gray-900'
              }`}>
                {event.title}
              </h3>

              <p className={`mb-4 ${isRamadanMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${
                  isRamadanMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Calendar className={`w-4 h-4 ${isRamadanMode ? 'text-[#D4AF37]' : 'text-[#1E40AF]'}`} />
                  {event.date}
                </div>
                <div className={`flex items-center gap-2 text-sm ${
                  isRamadanMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Clock className={`w-4 h-4 ${isRamadanMode ? 'text-[#D4AF37]' : 'text-[#1E40AF]'}`} />
                  {event.time}
                </div>
                <div className={`flex items-center gap-2 text-sm ${
                  isRamadanMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <MapPin className={`w-4 h-4 ${isRamadanMode ? 'text-[#D4AF37]' : 'text-[#1E40AF]'}`} />
                  {event.location}
                </div>
                <div className={`flex items-center gap-2 text-sm ${
                  isRamadanMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Users className={`w-4 h-4 ${isRamadanMode ? 'text-[#D4AF37]' : 'text-[#1E40AF]'}`} />
                  {event.attendees} expected attendees
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;