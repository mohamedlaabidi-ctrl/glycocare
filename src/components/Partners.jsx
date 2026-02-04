import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Handshake } from 'lucide-react';

// Import partner logos
import logo1 from '../assets/partners/logo1.png';
import logo2 from '../assets/partners/logo2.png';
import logo3 from '../assets/partners/logo3.png';
import logo4 from '../assets/partners/logo4.png';
import logo5 from '../assets/partners/logo5.png';
import logo6 from '../assets/partners/logo6.png';
import logo7 from '../assets/partners/logo7.png';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    {
      name: 'Institut National de Nutrition et de Technologies Alimentaires',
      shortName: 'INNTA',
      logo: logo1,
      description: 'National Institute of Nutrition and Food Technologies',
    },
    {
      name: 'Association Tunisienne des Sciences de la Nutrition',
      shortName: 'ATSN',
      logo: logo2,
      description: 'Tunisian Association of Nutrition Sciences',
    },
    {
      name: 'Prochidia',
      shortName: 'Prochidia',
      logo: logo3,
      description: 'Healthcare Partner',
    },
    {
      name: 'Run in Community',
      shortName: 'Run in Community',
      logo: logo4,
      description: 'Running Community Partner',
    },
    {
      name: 'Délice',
      shortName: 'Délice',
      logo: logo5,
      description: 'Food & Beverage Partner',
    },
    {
      name: 'Premium Fitness',
      shortName: 'Premium Fitness',
      logo: logo6,
      description: 'Fitness Partner',
    },
    {
      name: 'Kaiser',
      shortName: 'Kaiser',
      logo: logo7,
      description: 'Sports Equipment Partner',
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full text-sm font-semibold mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted <span className="text-[#EF4444]">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with these amazing organizations who share our vision 
            for a healthier Tunisia.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Logo - Always in color */}
              <div className="w-full h-24 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Partner Name */}
              <h3 className="text-sm font-bold text-gray-900 text-center mb-1">
                {partner.shortName}
              </h3>
              <p className="text-xs text-gray-500 text-center">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl text-white">
            <Handshake className="w-6 h-6" />
            <div className="text-left">
              <p className="font-semibold">Want to become a partner?</p>
              <p className="text-sm text-white/80">mohamedyassine.kamoun@supcom.tn</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
