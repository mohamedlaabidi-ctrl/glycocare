import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Droplet, MapPin } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start >= end) {
          clearInterval(timer);
          setDisplayValue(end);
        }
      }, Math.max(incrementTime, 10));

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const impactStats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Expected Participants',
      description: 'Runners joining our cause',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Droplet,
      value: 100,
      suffix: '+',
      label: 'Glucometers to Donate',
      description: 'Medical devices for those in need',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Heart,
      value: 1000,
      suffix: '+',
      label: 'Lives to Impact',
      description: 'People reached through awareness',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: MapPin,
      value: 5,
      suffix: 'km',
      label: 'Marathon Distance',
      description: 'Run for health, run for life',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-[#1E40AF]/90 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Making a <span className="text-[#EF4444]">Real Difference</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every step counts. See how our collective effort is creating meaningful change 
            in the fight against diabetes.
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Counter */}
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-white/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#EF4444] hover:bg-red-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
          >
            Be Part of the Impact
            <Heart className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;