"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', business: '', message: '' });
      }, 3000);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      gradient: 'from-[#6622CC] to-[#7833DD]'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@agency.com',
      href: 'mailto:hello@agency.com',
      gradient: 'from-[#7833DD] to-[#4C1FBF]'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: '123 Business Ave, Suite 100, New York, NY 10001',
      href: 'https://maps.google.com',
      gradient: 'from-[#6622CC] to-[#4C1FBF]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

   const itemVariants: Variants = {
     hidden: { opacity: 0, y: 30 },
     visible: {
       opacity: 1,
       y: 0,
       transition: {
         duration: 0.6
       }
     }
   };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Large Gradient Wave Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-[600px]" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6622CC" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#7833DD" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#4C1FBF" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            d="M0,320L48,298.7C96,277,192,235,288,229.3C384,224,480,256,576,250.7C672,245,768,203,864,197.3C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
          />
        </svg>

        {/* Additional Gradient Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#6622CC]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-[#4C1FBF]/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6622CC]/10 to-[#4C1FBF]/10 text-[#6622CC] font-semibold text-sm border border-[#6622CC]/20">
              Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
            Let's Grow{' '}
            <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
              Your Business
            </span>
            {' '}Together
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Schedule a free consultation and discover how we can help you achieve your business goals.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                Start Your Growth Journey
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Book a free 20-minute consultation with our team. We'll analyze your current digital presence, identify opportunities, and create a custom strategy to help you dominate your market.
              </p>
            </motion.div>

            {/* Consultation Benefits */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-gradient-to-br from-[#6622CC]/5 to-[#4C1FBF]/5 border border-[#6622CC]/10">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-[#6622CC] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">What to Expect:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6622CC] flex-shrink-0 mt-0.5" />
                      <span>Free website & SEO audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6622CC] flex-shrink-0 mt-0.5" />
                      <span>Custom growth strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6622CC] flex-shrink-0 mt-0.5" />
                      <span>ROI projections & timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6622CC] flex-shrink-0 mt-0.5" />
                      <span>No pressure, just insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h4>
              
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.a
                    key={index}
                    href={detail.href}
                    target={detail.icon === MapPin ? "_blank" : undefined}
                    rel={detail.icon === MapPin ? "noopener noreferrer" : undefined}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[#6622CC]/10 hover:border-[#6622CC]/30 transition-all duration-300 shadow-sm hover:shadow-lg group"
                  >
                    <div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-500 font-medium mb-1">
                        {detail.label}
                      </div>
                      <div className="text-slate-900 font-semibold break-words">
                        {detail.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Business Hours */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#6622CC]/10 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#6622CC]" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-semibold text-slate-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-semibold text-slate-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-semibold text-slate-900">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div 
              className="relative p-8 lg:p-10 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 70px rgba(102, 34, 204, 0.15), 0 0 1px rgba(102, 34, 204, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.6)'
              }}
            >
              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl z-10"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={3} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Name Field */}
                <motion.div
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: focusedField === 'name' 
                        ? '2px solid #6622CC' 
                        : '2px solid rgba(102, 34, 204, 0.2)',
                      outline: 'none',
                      boxShadow: focusedField === 'name' 
                        ? '0 0 0 4px rgba(102, 34, 204, 0.1), 0 10px 30px rgba(102, 34, 204, 0.1)' 
                        : 'none'
                    }}
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: focusedField === 'email' 
                        ? '2px solid #6622CC' 
                        : '2px solid rgba(102, 34, 204, 0.2)',
                      outline: 'none',
                      boxShadow: focusedField === 'email' 
                        ? '0 0 0 4px rgba(102, 34, 204, 0.1), 0 10px 30px rgba(102, 34, 204, 0.1)' 
                        : 'none'
                    }}
                    placeholder="john@company.com"
                  />
                </motion.div>

                {/* Business/Website Field */}
                <motion.div
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Business/Website
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('business')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: focusedField === 'business' 
                        ? '2px solid #6622CC' 
                        : '2px solid rgba(102, 34, 204, 0.2)',
                      outline: 'none',
                      boxShadow: focusedField === 'business' 
                        ? '0 0 0 4px rgba(102, 34, 204, 0.1), 0 10px 30px rgba(102, 34, 204, 0.1)' 
                        : 'none'
                    }}
                    placeholder="www.yourwebsite.com"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 transition-all duration-300 resize-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: focusedField === 'message' 
                        ? '2px solid #6622CC' 
                        : '2px solid rgba(102, 34, 204, 0.2)',
                      outline: 'none',
                      boxShadow: focusedField === 'message' 
                        ? '0 0 0 4px rgba(102, 34, 204, 0.1), 0 10px 30px rgba(102, 34, 204, 0.1)' 
                        : 'none'
                    }}
                    placeholder="Tell us about your project and goals..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-xl font-bold text-white text-base relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)',
                    boxShadow: '0 15px 40px rgba(102, 34, 204, 0.35), 0 0 20px rgba(102, 34, 204, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 34, 204, 0.5), 0 0 30px rgba(102, 34, 204, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 34, 204, 0.35), 0 0 20px rgba(102, 34, 204, 0.2)';
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7833DD] to-[#5D2FD0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                {/* Privacy Note */}
                <motion.p
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.9 }}
                  className="text-xs text-slate-500 text-center"
                >
                  By submitting this form, you agree to our{' '}
                  <a href="#privacy" className="text-[#6622CC] hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#terms" className="text-[#6622CC] hover:underline">Terms of Service</a>.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;