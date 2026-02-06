import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Mail, Phone, Calendar, Send, CheckCircle, Ticket, Info, Loader2 } from 'lucide-react';

const RegistrationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbywhV3nYrJA2SpnfXlbmg_XULvUU1QkWf1y_-RhsqGbpRgJDA-Gd9jxyvkchAF-PAyX/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for registering for the GlycoCare Marathon. We'll send you a confirmation email with further details.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-yellow-800">
                <Ticket className="w-5 h-5" />
                <span className="font-semibold">Participation Fee: 5 DT</span>
              </div>
              <p className="text-sm text-yellow-700 mt-2">
                Please pay the fee at the registration desk on the event day or by contacting one of the organizers below.
              </p>
            </div>
            <p className="text-sm text-gray-500">
              See you on February 15, 2026 at Sup'Com Campus!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
            Join the Movement
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Register for the Marathon
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Be part of this meaningful event. Fill out the form below to secure your spot.
          </p>
          
          {/* Participation Fee Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-green-500 rounded-full text-white font-bold text-lg shadow-lg"
          >
            <Ticket className="w-6 h-6" />
            <span>Participation Fee: Only 5 DT</span>
          </motion.div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-2xl"
        >
          {/* Fee Info Box */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Participation Fee: 5 DT</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Includes race bib, hydration, and certificate. All proceeds go towards glucometers for diabetes patients.
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all disabled:bg-gray-100"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all disabled:bg-gray-100"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all disabled:bg-gray-100"
                  placeholder="+216 XX XXX XXX"
                />
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  min="10"
                  max="80"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all disabled:bg-gray-100"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            {/* Total Fee Display */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Participation Fee</p>
                <p className="text-xs text-gray-500">Payable at registration desk</p>
              </div>
              <div className="text-3xl font-bold text-[#1E40AF]">5 DT</div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C] text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Complete Registration
                </>
              )}
            </motion.button>

            <p className="text-center text-sm text-gray-500">
              By registering, you agree to our terms and conditions. The participation fee of <strong>5 DT</strong> will be collected on the event day or by contacting one of the organizers below.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
