import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import team photos
import yassineImg from '../assets/team/yassine.jpg';
import rayhanImg from '../assets/team/rayhan.jpg';
import mohamedImg from '../assets/team/mohamed.jpg';
import koussayImg from '../assets/team/koussay.jpg';
import amineImg from '../assets/team/amine.jpg';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // SVG Icons
  const FacebookIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const teamMembers = [
    {
      name: 'Mohamed Yassine Kamoun',
      role: 'Team Lead',
      image: yassineImg,
      facebook: 'https://www.facebook.com/yassine.kamoun.98',
      instagram: 'https://www.instagram.com/yassine_kamoun.7/',
      email: 'mohamedyassine.kamoun@supcom.tn',
      color: 'from-[#1E40AF] to-[#3B82F6]',
    },
    {
      name: 'Rayhan Mokchaha',
      role: 'Project Coordinator',
      image: rayhanImg,
      facebook: 'https://www.facebook.com/rayhan.mokchaha',
      instagram: 'https://www.instagram.com/rayhan.mokchaha/',
      email: 'rayhan.mokchaha@supcom.tn',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Mohamed Laabidi',
      role: 'Communications Lead',
      image: mohamedImg,
      facebook: 'https://www.facebook.com/mohamed.labidi.1840070',
      instagram: 'https://www.instagram.com/mohamed_labidi0/',
      email: 'mohamed.laabidi@supcom.tn',
      color: 'from-[#EF4444] to-red-500',
    },
    {
      name: 'Koussay Massoudi',
      role: 'Logistics Manager',
      image: koussayImg,
      facebook: 'https://www.facebook.com/koussay.massoudi.120631',
      instagram: null,
      email: 'koussayabdessamai.massoudi@supcom.tn',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Amine Sassi',
      role: 'Partnerships Lead',
      image: amineImg,
      facebook: 'https://www.facebook.com/amine.9.sassi',
      instagram: 'https://www.instagram.com/sassi___amine/',
      email: 'amine.sassi@supcom.tn',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="team" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#EF4444]/10 text-[#EF4444] rounded-full text-sm font-semibold mb-4">
            Team 4
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet the <span className="text-[#1E40AF]">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate group of university students united by a common goal: 
            making a positive impact in the fight against diabetes.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col">
                {/* Avatar */}
                <div className="relative mx-auto w-24 h-24 mb-4 flex-shrink-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity`}
                  ></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                  />
                </div>

                {/* Info */}
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 min-h-[40px] flex items-center justify-center">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">{member.role}</p>
                </div>

                {/* Social Links */}
                <div className="flex-shrink-0 flex justify-center space-x-2">
                  {/* Facebook */}
                  <button
                    onClick={() => window.open(member.facebook, '_blank')}
                    className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-200"
                    aria-label={`${member.name} Facebook`}
                  >
                    <FacebookIcon />
                  </button>

                  {/* Instagram - only show if exists */}
                  {member.instagram && (
                    <button
                      onClick={() => window.open(member.instagram, '_blank')}
                      className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#E4405F] hover:text-white transition-all duration-200"
                      aria-label={`${member.name} Instagram`}
                    >
                      <InstagramIcon />
                    </button>
                  )}

                  {/* Email */}
                  <button
                    onClick={() => window.location.href = `mailto:${member.email}`}
                    className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#EF4444] hover:text-white transition-all duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <MailIcon />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;