"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, Target, Users, Zap, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

const CEOSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  // GSAP-like floating animation
  useEffect(() => {
    if (imageRef.current) {
      let frame = 0;
      const animate = () => {
        frame += 0.008;
        if (imageRef.current) {
          const y = Math.sin(frame) * 5;
          imageRef.current.style.transform = `translateY(${y}px)`;
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  const highlights = [
    {
      icon: Award,
      text: '10+ years of leadership in the digital industry'
    },
    {
      icon: Target,
      text: 'Vision-driven approach to growth'
    },
    {
      icon: Users,
      text: 'Focus on innovation & customer success'
    },
    {
      icon: Zap,
      text: 'Builds high-performance teams'
    }
  ];

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Gradient Blobs */}
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#6622CC]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#4C1FBF]/6 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: 'linear-gradient(#6622CC 1px, transparent 1px), linear-gradient(90deg, #6622CC 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Floating Quote Icons */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] opacity-5"
        >
          <Quote className="w-24 h-24 text-[#6622CC]" strokeWidth={1} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#6622CC]/10 to-[#4C1FBF]/10 text-[#6622CC] font-semibold text-sm border border-[#6622CC]/20">
            Leadership
          </span>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6622CC]/10 to-[#4C1FBF]/10 rounded-3xl blur-2xl scale-105"></div>

            {/* Main Image Container */}
            <div 
              ref={imageRef}
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 25px 70px rgba(102, 34, 204, 0.2), 0 0 60px rgba(102, 34, 204, 0.1)'
              }}
            >
              {/* Gradient Border */}
              <div 
                className="absolute inset-0 rounded-3xl p-1 z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(102, 34, 204, 0.4), rgba(76, 31, 191, 0.4))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              ></div>

             {/* CEO Portrait */}
<Image
  src="/ceo.png"   // <-- your public folder image
  width={600}
  height={700}
  alt="CEO Portrait"
  className="w-full h-auto object-cover rounded-3xl shadow-xl relative z-0"
  priority
/>


              {/* Subtle Overlay */}
              <div 
                className="absolute inset-0 z-5"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(102, 34, 204, 0.03) 100%)'
                }}
              ></div>
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 z-20"
            >
              <div 
                className="px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/60 shadow-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6622CC] to-[#4C1FBF] flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xl font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
                      10+ Years
                    </div>
                    <div className="text-xs text-slate-600 font-medium">Industry Leader</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Gradient Orbs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#6622CC]/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-[#4C1FBF]/15 to-transparent rounded-full blur-2xl"></div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4">
                Meet Our{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
                    CEO
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,4 Q100,8 200,4" stroke="url(#ceoUnderline)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="ceoUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6622CC" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#4C1FBF" stopOpacity="0.6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
            </motion.div>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-2xl font-semibold text-slate-700 leading-relaxed"
            >
              Leading With Vision, Integrity, and Innovation.
            </motion.p>

            {/* Main Paragraph */}
            <motion.div 
              variants={itemVariants}
              className="relative p-6 rounded-2xl"
              style={{
                background: 'rgba(102, 34, 204, 0.02)',
                border: '1px solid rgba(102, 34, 204, 0.1)'
              }}
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#6622CC] opacity-20" />
              <p className="text-lg text-slate-600 leading-relaxed pl-6">
                At <span className="font-semibold text-[#6622CC]">Sathubs</span>, our mission has always been to deliver world-class SEO, Digital Marketing, and technology solutions that drive real business growth. Under my guidance, we focus on innovation, transparency, and long-term success for every client. Our strategies are rooted in data, creativity, and industry-leading expertise — ensuring measurable results and sustainable growth."
              </p>
            </motion.div>

            {/* Bullet Points / Highlights */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[#6622CC]/10 hover:border-[#6622CC]/30 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6622CC] to-[#4C1FBF] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed pt-1">
                      {highlight.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Signature Section */}
            <motion.div 
              variants={itemVariants}
              className="pt-4 space-y-4"
            >
              {/* Handwritten Signature Style */}
              <div className="text-4xl font-serif italic text-slate-800 opacity-80">
                Muhammad Naqash
              </div>
              
              {/* Name & Title */}
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Muhammad Naqash
                </h3>
                <p className="text-slate-600 font-medium">
                  Founder & CEO —{' '}
                  <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent font-semibold">
                    Sathubs
                  </span>
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)',
                  boxShadow: '0 10px 40px rgba(102, 34, 204, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(102, 34, 204, 0.5), 0 0 30px rgba(102, 34, 204, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(102, 34, 204, 0.3)';
                }}
              >
                <span className="relative z-10">Learn More About Our Vision</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7833DD] to-[#5D2FD0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Additional Trust Line */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-sm text-slate-600 pt-2"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6622CC] to-[#4C1FBF] border-2 border-white"></div>
                ))}
              </div>
              <span className="font-medium">Leading a team of 50+ digital experts</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6622CC]/20 to-transparent"></div>
    </section>
  );
};

export default CEOSection;