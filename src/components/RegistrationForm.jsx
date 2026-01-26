import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Mail, Phone, Calendar, Droplet, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const RegistrationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    bloodType: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // ⚠️ REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT URL FROM STEP 3
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNozCYebXa7kZz_ph07GYcq9WEOudMom4z00AGyB2rXcyB99grEp20GuDNzBtA3jCj/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('bloodType', formData.bloodType);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // Required for Google Apps Script
      });

      // With no-cors, we can't read the response, so assume success
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        bloodType: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#EF4444]/10 text-[#EF4444] rounded-full text-sm font-semibold mb-4">
              Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Register for the <span className="text-[#1E40AF]">Marathon</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards making a difference. Register now to 
              participate in the Run for Health marathon and help us fight diabetes.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Free health screening at the event',
                'Certificate of participation',
                'Contribute to a meaningful cause',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F3F4F6] rounded-2xl p-8 shadow-lg">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Registration Confirmed!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering. We'll send you more details soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[#1E40AF] font-semibold hover:underline"
                  >
                    Register another participant
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Age and Blood Type Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Age */}
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="10"
                        max="100"
                        placeholder="Age"
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Blood Type */}
                    <div className="relative">
                      <Droplet className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <select
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Blood Type</option>
                        {bloodTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-gradient-to-r from-[#EF4444] to-red-500 hover:from-red-500 hover:to-red-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-red-500/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Complete Registration</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-sm text-gray-500">
                    By registering, you agree to our terms and conditions.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;