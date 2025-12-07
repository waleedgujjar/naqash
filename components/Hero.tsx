"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, Link2, BarChart3, Target, Zap, ArrowUpRight } from 'lucide-react';

const PremiumHeroSection = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // GSAP-like floating animations
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
      const animateFloat = () => {
        const duration = 3000 + index * 500;
        const delay = index * 200;
        
        const animate = () => {
          el.style.transition = `transform ${duration}ms ease-in-out`;
          el.style.transform = `translateY(-15px) rotate(${index * 2}deg)`;
          
          setTimeout(() => {
            el.style.transform = `translateY(15px) rotate(-${index * 2}deg)`;
          }, duration / 2);
        };
        
        setTimeout(() => {
          animate();
          setInterval(animate, duration);
        }, delay);
      };
      
      animateFloat();
    });

    // Particle drift animation
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      const duration = 4000 + Math.random() * 2000;
      const delay = index * 300;
      
      const animateParticle = () => {
        particle.style.transition = `all ${duration}ms ease-in-out`;
        particle.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)`;
        particle.style.opacity = '0.6';
        
        setTimeout(() => {
          particle.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)`;
          particle.style.opacity = '0.2';
        }, duration / 2);
      };
      
      setTimeout(() => {
        animateParticle();
        setInterval(animateParticle, duration);
      }, delay);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const iconData = [
    { Icon: Search, color: '#6622CC', top: '15%', left: '10%', size: 40 },
    { Icon: BarChart3, color: '#4C1FBF', top: '60%', left: '5%', size: 35 },
    { Icon: Link2, color: '#7833DD', top: '40%', right: '8%', size: 38 },
    { Icon: Target, color: '#6622CC', top: '75%', right: '15%', size: 42 },
    { Icon: Zap, color: '#5D2FD0', top: '25%', right: '20%', size: 36 }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/40 via-blue-50/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-50/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating Gradient Blobs */}
        <div className="absolute top-20 left-[15%] w-64 h-64 bg-gradient-to-br from-[#6622CC]/10 to-[#4C1FBF]/5 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-32 right-[20%] w-80 h-80 bg-gradient-to-tl from-[#7833DD]/10 to-[#6622CC]/5 rounded-full blur-3xl floating"></div>
        
        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}

        {/* Abstract Wave Pattern */}
        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#gradient)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6622CC" />
              <stop offset="100%" stopColor="#4C1FBF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Main Formula Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900">
                More Traffic{' '}
                <span className="inline-block relative">
                  <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
                    +
                  </span>
                </span>
                <br />
                More Conversions
                <br />
                <span className="inline-block relative">
                  <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
                    = More Profit
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" preserveAspectRatio="none">
                    <path d="M0,4 Q150,8 300,4" stroke="url(#underlineGradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6622CC" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#4C1FBF" stopOpacity="0.6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.h2 
              variants={itemVariants}
              className="text-lg lg:text-xl font-semibold tracking-wider text-slate-700 uppercase leading-relaxed"
            >
              Growing a business is just like reverse engineering the success of your competitors.
            </motion.h2>

            {/* Supporting Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              The key to scaling any business is understanding what already works in your industry — then engineering a more optimized, more strategic, and more profitable version of it. Our SEO and digital marketing frameworks help you{' '}
              <span className="font-semibold text-[#6622CC]">outrank</span>,{' '}
              <span className="font-semibold text-[#6622CC]">outperform</span>, and{' '}
              <span className="font-semibold text-[#6622CC]">outgrow</span> your toughest competition.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl font-bold text-white text-base overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)',
                  boxShadow: '0 10px 40px rgba(102, 34, 204, 0.3), 0 0 20px rgba(102, 34, 204, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(102, 34, 204, 0.5), 0 0 30px rgba(102, 34, 204, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(102, 34, 204, 0.3), 0 0 20px rgba(102, 34, 204, 0.2)';
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Growth
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7833DD] to-[#5D2FD0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl font-bold text-[#6622CC] text-base bg-white border-2 border-[#6622CC] overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">Free 20-Min Consultation</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)'
                  }}
                ></div>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6622CC] to-[#4C1FBF] border-2 border-white"></div>
                  ))}
                </div>
                <span className="font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="ml-1 font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            {/* Main Dashboard Card */}
            <div className="relative w-full h-full">
              {/* 3D Graph Rising */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] rounded-3xl p-8 floating"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 30px 80px rgba(102, 34, 204, 0.15), 0 0 1px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(102, 34, 204, 0.1)'
                }}
              >
                {/* Chart Bars */}
                <div className="flex items-end justify-around h-full gap-4 px-6">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                      className="w-full rounded-t-xl relative"
                      style={{
                        background: `linear-gradient(180deg, #6622CC ${100-height}%, #4C1FBF 100%)`
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-[#6622CC]">
                        {height}%
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="absolute -top-6 right-8 px-6 py-3 rounded-2xl bg-white shadow-2xl shadow-purple-200/50 border border-purple-100 floating"
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-[#6622CC]" />
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">+247%</div>
                      <div className="text-xs text-slate-600">Growth Rate</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="absolute -bottom-6 left-8 px-6 py-3 rounded-2xl bg-white shadow-2xl shadow-purple-200/50 border border-purple-100 floating"
                >
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-[#4C1FBF]" />
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">$2.4M</div>
                      <div className="text-xs text-slate-600">Revenue Generated</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Icons */}
              {iconData.map(({ Icon, color, top, left, right, size }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="absolute p-4 rounded-2xl bg-white shadow-xl shadow-purple-100/50 border border-purple-50 floating"
                  style={{
                    top,
                    left,
                    right
                  }}
                >
                  <Icon style={{ width: size, height: size, color }} />
                </motion.div>
              ))}

              {/* Gradient Orbs */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#6622CC]/20 to-[#4C1FBF]/10 rounded-full blur-2xl floating"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tl from-[#7833DD]/20 to-transparent rounded-full blur-2xl floating"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#6622CC] flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-[#6622CC] to-[#4C1FBF]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PremiumHeroSection;