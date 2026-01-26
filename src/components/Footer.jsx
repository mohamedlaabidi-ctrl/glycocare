import React from 'react';
import { Heart } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Marathon', href: '#marathon' },
    { name: 'Events', href: '#events' },
    { name: 'Partners', href: '#partners' },
    { name: 'Team', href: '#team' },
  ];

  const teamFacebook = [
    { name: 'Yassine Kamoun', href: 'https://www.facebook.com/yassine.kamoun.98' },
    { name: 'Rayhana Mokchaha', href: 'https://www.facebook.com/rayhan.mokchaha' },
    { name: 'Mohamed Laabidi', href: 'https://www.facebook.com/mohamed.labidi.1840070' },
    { name: 'Koussay Massoudi', href: 'https://www.facebook.com/koussay.massoudi.120631' },
    { name: 'Amine Sassi', href: 'https://www.facebook.com/amine.9.sassi' },
  ];

  // SVG Icons as components
  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-6 bg-white rounded-xl p-3">
              <img 
                src={logo} 
                alt="GlycoCare Logo" 
                className="h-20 sm:h-24 w-auto"
              />
            </a>
            <p className="text-gray-400 mb-6">
              GlycoCare is a university social project dedicated to fighting 
              diabetes through community engagement, education, and resource 
              distribution.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61586988750580', '_blank')}
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors text-white"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </button>
              <button
                onClick={() => window.open('https://www.instagram.com/glycocare.tn/', '_blank')}
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E4405F] transition-colors text-white"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Team</h3>
            <ul className="space-y-3">
              {teamFacebook.map((member) => (
                <li key={member.name}>
                  <button
                    onClick={() => window.open(member.href, '_blank')}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-left"
                  >
                    <FacebookIcon />
                    {member.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-[#EF4444] flex-shrink-0 mt-0.5">
                  <MapPinIcon />
                </span>
                <span>Sup'Com, Cité Technologique des Communications, Ariana, Tunisia</span>
              </li>
              <li>
                <button
                  onClick={() => window.location.href = 'mailto:mohamed.laabidi@supcom.tn'}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-[#EF4444]">
                    <MailIcon />
                  </span>
                  <span>mohamed.laabidi@supcom.tn</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://www.instagram.com/glycocare.tn/', '_blank')}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-[#EF4444]">
                    <InstagramIcon />
                  </span>
                  <span>@glycocare.tn</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://www.facebook.com/profile.php?id=61586988750580', '_blank')}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-[#EF4444]">
                    <FacebookIcon />
                  </span>
                  <span>GlycoCare</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 GlycoCare. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline text-[#EF4444] fill-current" /> by Team 4
            </p>
            <p className="text-gray-500 text-sm">
              Sup'Com Pact Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;