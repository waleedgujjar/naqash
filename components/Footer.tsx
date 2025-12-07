"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'SEO', href: '#seo' },
    { name: 'PPC', href: '#ppc' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' }
  ];

  const services = [
    { name: 'SEO Optimization', href: '#seo-optimization' },
    { name: 'Digital Strategy', href: '#digital-strategy' },
    { name: 'PPC Marketing', href: '#ppc-marketing' },
    { name: 'Content Marketing', href: '#content' },
    { name: 'Social Media', href: '#social' }
  ];

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, label: 'Email', value: 'hello@sathubs.com', href: 'mailto:hello@sathubs.com' },
    { icon: MapPin, label: 'Address', value: '123 Business Ave, Suite 100, New York, NY 10001', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <footer 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F0B28 0%, #1A1539 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#6622CC]/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#4C1FBF]/8 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6622CC]/40 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16"
        >
          
          {/* Column 1 - Logo & Mission */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Logo */}
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#6622CC] bg-clip-text text-transparent mb-4">
                SATHUBS
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Empowering businesses with cutting-edge SEO and digital marketing solutions. We turn data into growth, traffic into leads, and clicks into conversions.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(102, 34, 204, 0.2), rgba(76, 31, 191, 0.2))',
                      border: '1px solid rgba(102, 34, 204, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #6622CC, #4C1FBF)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 34, 204, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 34, 204, 0.2), rgba(76, 31, 191, 0.2))';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-[#6622CC] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6622CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-slate-400 hover:text-[#6622CC] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6622CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index}>
                    <a 
                      href={contact.href}
                      className="flex items-start gap-3 text-slate-400 hover:text-[#6622CC] transition-colors duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6622CC]/20 to-[#4C1FBF]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-4 h-4 text-[#6622CC]" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 mb-1">{contact.label}</div>
                        <div className="text-sm">{contact.value}</div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <p className="text-xs text-slate-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg text-sm text-white placeholder-slate-500 transition-all duration-300 outline-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(102, 34, 204, 0.2)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6622CC';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 34, 204, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(102, 34, 204, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #6622CC, #4C1FBF)',
                    boxShadow: '0 5px 20px rgba(102, 34, 204, 0.3)'
                  }}
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © 2025{' '}
              <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent font-semibold">
                Sathubs
              </span>
              . All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-slate-400 hover:text-[#6622CC] transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-[#6622CC] transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-[#6622CC] transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Made with love */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center text-slate-500 text-xs mt-6"
          >
            Crafted with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block text-red-500"
            >
              ♥
            </motion.span>
            {' '}by the Sathubs Team
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Decorative Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute w-1 h-1 rounded-full bg-[#6622CC]"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </footer>
  );
};

export default FooterSection;