"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, TrendingUp, Users } from 'lucide-react';

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // GSAP-like entrance animation
    if (navRef.current) {
      navRef.current.style.transform = 'translateY(-100%)';
      navRef.current.style.opacity = '0';
      
      setTimeout(() => {
        if (navRef.current) {
          navRef.current.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease';
          navRef.current.style.transform = 'translateY(0)';
          navRef.current.style.opacity = '1';
        }
      }, 100);
    }
  }, []);

  const handleCTAHover = (isHovering: boolean) => {
    if (ctaRef.current) {
      if (isHovering) {
        ctaRef.current.style.transform = 'translateY(-2px) scale(1.02)';
        ctaRef.current.style.boxShadow = '0 20px 40px rgba(102, 34, 204, 0.4), 0 0 30px rgba(102, 34, 204, 0.3)';
      } else {
        ctaRef.current.style.transform = 'translateY(0) scale(1)';
        ctaRef.current.style.boxShadow = '0 10px 30px rgba(102, 34, 204, 0.25), 0 0 15px rgba(102, 34, 204, 0.15)';
      }
    }
  };

  const menuItems = [
    { label: 'SEO', href: '#seo' },
    { 
      label: 'Digital Marketing', 
      href: '#digital-marketing',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Digital Marketing Agency', icon: <Target className="w-4 h-4" />, href: '#agency' },
        { label: 'PPC Advertising', icon: <TrendingUp className="w-4 h-4" />, href: '#ppc' },
        { label: 'Lead Generation', icon: <Users className="w-4 h-4" />, href: '#leads' }
      ]
    },
    { label: 'Profile', href: '#profile' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-lg shadow-purple-100/50' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent relative">
                Naqash
                <span className="absolute inset-0 bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
              </h1>
            </motion.a>

            {/* Center Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
                >
                  <a
                    href={item.href}
                    className="relative group flex items-center gap-1 text-slate-700 font-semibold text-sm tracking-wide hover:text-[#6622CC] transition-colors duration-300"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                    <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] group-hover:w-full transition-all duration-300"></span>
                  </a>

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-4 w-64 rounded-xl overflow-hidden"
                          style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 20px 60px rgba(102, 34, 204, 0.15), 0 0 1px rgba(102, 34, 204, 0.2)',
                            border: '1px solid rgba(102, 34, 204, 0.1)'
                          }}
                        >
                          <div className="p-2">
                            {item.dropdownItems.map((dropItem, idx) => (
                              <motion.a
                                key={dropItem.label}
                                href={dropItem.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-slate-700 hover:text-[#6622CC] transition-all duration-200 group"
                              >
                                <span className="text-[#6622CC] group-hover:scale-110 transition-transform duration-200">
                                  {dropItem.icon}
                                </span>
                                <span className="font-medium text-sm">{dropItem.label}</span>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              ref={ctaRef}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onMouseEnter={() => handleCTAHover(true)}
              onMouseLeave={() => handleCTAHover(false)}
              className="relative px-8 py-3 rounded-xl font-semibold text-white text-sm tracking-wide overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)',
                boxShadow: '0 10px 30px rgba(102, 34, 204, 0.25), 0 0 15px rgba(102, 34, 204, 0.15)',
                transform: 'translateY(0) scale(1)'
              }}
            >
              <span className="relative z-10">Consulting</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7833DD] to-[#5D2FD0] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #6622CC 50%, transparent 100%)'
          }}
        ></div>
      </motion.nav>
    </>
  );
};

export default PremiumNavbar;