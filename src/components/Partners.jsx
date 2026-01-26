import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PersonStanding } from 'lucide-react';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    { name: 'ATSN', logo: 'atsn' },
    { name: 'Délice Holding', logo: 'delice' },
    { name: 'Kilani Groupe', logo: 'kilani' },
    { name: 'STB Bank', logo: 'stb' },
    { name: 'Run-in Community', logo: 'runin' },
    { name: 'INNTA', logo: 'innta' },
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
            Supported by <span className="text-[#EF4444]">Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with organizations that share our vision 
            for a healthier Tunisia. Together, we're making a difference.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#F3F4F6] rounded-2xl p-6 h-32 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1E40AF]/5 group-hover:shadow-lg">
                <PartnerLogo partner={partner} />
              </div>
              <div className="mt-3 text-center">
                <div className="font-semibold text-gray-900 text-sm">{partner.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Interested in partnering with GlycoCare?
          </p>
          <a
            href="mailto:mohamed.laabidi@supcom.tn"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white rounded-full font-semibold transition-all duration-200"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const PartnerLogo = ({ partner }) => {
  switch (partner.logo) {
    case 'atsn':
      return (
        <div className="text-center">
          <div className="text-xs text-[#1E40AF] font-semibold leading-tight">
            الجمعية التونسية لعلوم التغذية
          </div>
          <div className="text-[10px] text-gray-600 mt-1">
            Association Tunisienne des Sciences de la Nutrition
          </div>
        </div>
      );
    case 'delice':
      return (
        <div className="text-center">
          <span className="text-2xl font-bold text-[#1E40AF]">délice</span>
          <div className="text-xs text-gray-500">Holding</div>
        </div>
      );
    case 'kilani':
      return (
        <div className="w-16 h-16 bg-[#9B8B6E] rounded-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-xs font-bold">KILANI</div>
            <div className="text-[8px]">GROUPE</div>
          </div>
        </div>
      );
    case 'stb':
      return (
        <div className="w-16 h-16 bg-[#1E40AF] rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold text-center">STB<br/>Bank</span>
        </div>
      );
    case 'runin':
      return (
        <div className="flex items-center space-x-1">
          <PersonStanding className="w-8 h-8 text-[#EF4444]" />
          <div>
            <span className="text-lg font-bold text-[#1E40AF]">Run</span>
            <span className="text-lg font-bold text-[#EF4444]">-in</span>
          </div>
        </div>
      );
    case 'innta':
      return (
        <div className="text-center">
          <span className="text-lg font-bold text-[#1E40AF]">INNTA</span>
          <div className="text-[8px] text-gray-500">Institut National de Nutrition</div>
        </div>
      );
    default:
      return <span className="text-gray-400 text-xs">{partner.name}</span>;
  }
};

export default Partners;
