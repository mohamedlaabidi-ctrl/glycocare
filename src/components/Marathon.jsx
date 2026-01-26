import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Clock, Trophy, Heart, Activity } from 'lucide-react';

const Marathon = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      time: '08:30',
      title: 'Welcome & Screening',
      description: 'Registration, health screening, and warm-up activities',
      icon: <Heart className="w-5 h-5" />,
    },
    {
      time: '10:00',
      title: 'Marathon Start',
      description: 'The main event begins! Run for health and awareness',
      icon: <Activity className="w-5 h-5" />,
    },
    {
      time: '11:30',
      title: 'Awards & Closing',
      description: 'Prize distribution and closing ceremony',
      icon: <Trophy className="w-5 h-5" />,
    },
  ];

  return (
    <section id="marathon" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#EF4444]/10 text-[#EF4444] rounded-full text-sm font-semibold mb-4">
            Main Event
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Run for <span className="text-[#1E40AF]">Health</span> Marathon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for an unforgettable day of running, health awareness, 
            and community spirit. Every step counts towards our goal!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">Date</div>
                    <div className="text-lg font-semibold">February 15, 2026</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">Location</div>
                    <div className="text-lg font-semibold">Cité Technologique des Communications, Ariana</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">Duration</div>
                    <div className="text-lg font-semibold">08:30 AM - 12:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goal Box */}
            <div className="bg-[#EF4444]/10 border-2 border-[#EF4444]/20 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#EF4444] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Goal</h4>
                  <p className="text-gray-600">
                    All funds raised go directly to purchasing <strong>Prochidia glucometers</strong> for 
                    underprivileged diabetes patients at INNTA. Help us reach our 
                    target of 100+ devices!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Event Timeline</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-12 h-12 bg-[#1E40AF] rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-[#F3F4F6] rounded-xl p-6 flex-1">
                      <div className="text-sm font-bold text-[#EF4444] mb-1">
                        {item.time}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#register"
              className="mt-8 inline-flex items-center justify-center w-full px-8 py-4 bg-[#EF4444] hover:bg-red-600 text-white rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg shadow-red-500/30"
            >
              Register for the Marathon
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marathon;