"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, TrendingUp, Target, Users, Share2, FileText, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost rankings, organic traffic, and website authority.',
      gradient: 'from-[#6622CC] to-[#4C1FBF]'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing Strategy',
      description: 'Tailored campaigns combining SEO + PPC + content + analytics.',
      gradient: 'from-[#7833DD] to-[#5D2FD0]'
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'High-ROI paid ads with advanced targeting and optimization.',
      gradient: 'from-[#6622CC] to-[#7833DD]'
    },
    {
      icon: Users,
      title: 'Lead Generation Systems',
      description: 'Pure conversion frameworks and funnel-based acquisition.',
      gradient: 'from-[#5D2FD0] to-[#4C1FBF]'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build awareness + engagement using content and automation.',
      gradient: 'from-[#6622CC] to-[#5D2FD0]'
    },
    {
      icon: FileText,
      title: 'Content Strategy & Copywriting',
      description: 'Premium SEO-optimized content that drives conversions.',
      gradient: 'from-[#7833DD] to-[#4C1FBF]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, isHovering: boolean) => {
    const card = e.currentTarget;
    if (isHovering) {
      card.style.transform = 'translateY(-4px) scale(1.02)';
      card.style.boxShadow = '0 25px 60px rgba(102, 34, 204, 0.25), 0 0 40px rgba(102, 34, 204, 0.15)';
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 10px 40px rgba(102, 34, 204, 0.1), 0 0 1px rgba(0, 0, 0, 0.05)';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, rgba(102, 34, 204, 0.02) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#6622CC]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#4C1FBF]/5 to-transparent rounded-full blur-3xl"></div>
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
              What We Offer
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
            Our SEO &{' '}
            <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
              Digital Marketing
            </span>
            <br />
            Services
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your brand, dominate search rankings, and drive measurable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
                className="group relative rounded-2xl p-8 cursor-pointer transition-all duration-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 10px 40px rgba(102, 34, 204, 0.1), 0 0 1px rgba(0, 0, 0, 0.05)',
                  transform: 'translateY(0) scale(1)'
                }}
              >
                {/* Gradient Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(102, 34, 204, 0.1) 0%, rgba(76, 31, 191, 0.1) 100%)',
                    padding: '1px'
                  }}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Glow Effect */}
                  <div 
                    className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6622CC] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-[#6622CC] font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${service.gradient.includes('from-[#6622CC]') ? '#6622CC' : '#7833DD'}, ${service.gradient.includes('to-[#4C1FBF]') ? '#4C1FBF' : '#5D2FD0'})`
                  }}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#all-services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)',
              boxShadow: '0 10px 40px rgba(102, 34, 204, 0.3)'
            }}
          >
            <span className="relative z-10">Explore All Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7833DD] to-[#5D2FD0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>

          {/* Decorative Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-3 h-1 w-32 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, #6622CC 0%, #4C1FBF 100%)',
              transformOrigin: 'center'
            }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6622CC]/20 to-transparent"></div>
    </section>
  );
};

export default ServicesSection;