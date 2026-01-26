import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Heart,
      title: 'Health Awareness',
      description:
        'Educating communities about diabetes prevention and management through engaging activities.',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description:
        'Bringing together students, healthcare professionals, and citizens for a common cause.',
    },
    {
      icon: Target,
      title: 'Resource Distribution',
      description:
        'Collecting and distributing glucometers to those in need across Tunisia.',
    },
    {
      icon: Lightbulb,
      title: 'Therapeutic Education',
      description:
        'Providing practical knowledge to help diabetes patients better manage their condition.',
    },
  ];

  const stats = [
    { number: '589M', label: 'Adults with diabetes worldwide' },
    { number: '1 in 9', label: 'Adults are affected globally' },
    { number: '43%', label: 'Remain undiagnosed' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1E40AF]/10 text-[#1E40AF] rounded-full text-sm font-semibold mb-4">
            About GlycoCare
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Mission to <span className="text-[#EF4444]">Fight Diabetes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            GlycoCare is a university social project created by Sup'Com students, 
            dedicated to raising awareness about diabetes and supporting those 
            affected through community action.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F3F4F6] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - UPDATED WITH 2026 DATA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 sm:p-12"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;