"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { TrendingUp, Users, Target, ArrowRight, BarChart3 } from 'lucide-react';

const CaseStudiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const caseStudies = [
    {
      client: 'TechFlow Solutions',
      industry: 'B2B SaaS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      metrics: [
        { icon: TrendingUp, label: 'Traffic', before: '5.2K', after: '18.7K', increase: '+260%', color: 'from-[#6622CC] to-[#7833DD]' },
        { icon: Users, label: 'Leads', before: '124', after: '487', increase: '+293%', color: 'from-[#7833DD] to-[#4C1FBF]' },
        { icon: Target, label: 'Conversions', before: '2.1%', after: '6.8%', increase: '+224%', color: 'from-[#6622CC] to-[#4C1FBF]' }
      ],
      strategy: 'Implemented comprehensive SEO overhaul with technical optimization, content strategy, and strategic link building. Focus on bottom-funnel keywords and conversion rate optimization.',
      duration: '6 months'
    },
    {
      client: 'Urban Retail Co.',
      industry: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      metrics: [
        { icon: TrendingUp, label: 'Traffic', before: '12.3K', after: '48.9K', increase: '+298%', color: 'from-[#6622CC] to-[#7833DD]' },
        { icon: Users, label: 'Leads', before: '341', after: '1.2K', increase: '+252%', color: 'from-[#7833DD] to-[#4C1FBF]' },
        { icon: Target, label: 'Conversions', before: '1.8%', after: '5.4%', increase: '+200%', color: 'from-[#6622CC] to-[#4C1FBF]' }
      ],
      strategy: 'Deployed full-funnel digital marketing with PPC campaigns, SEO content clusters, and retargeting strategies. Built automated lead nurturing system with email sequences.',
      duration: '8 months'
    },
    {
      client: 'HealthFirst Clinics',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      metrics: [
        { icon: TrendingUp, label: 'Traffic', before: '3.8K', after: '15.2K', increase: '+300%', color: 'from-[#6622CC] to-[#7833DD]' },
        { icon: Users, label: 'Leads', before: '89', after: '412', increase: '+363%', color: 'from-[#7833DD] to-[#4C1FBF]' },
        { icon: Target, label: 'Conversions', before: '3.2%', after: '8.9%', increase: '+178%', color: 'from-[#6622CC] to-[#4C1FBF]' }
      ],
      strategy: 'Local SEO dominance with Google Business optimization, reputation management, and hyper-targeted PPC campaigns. Created educational content hub for authority building.',
      duration: '5 months'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        {/* Gradient Shadows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#6622CC]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#4C1FBF]/4 to-transparent rounded-full blur-3xl"></div>
        
        {/* Light Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'linear-gradient(#6622CC 1px, transparent 1px), linear-gradient(90deg, #6622CC 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
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
              Case Studies
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
            Our Proven{' '}
            <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped companies transform their digital presence and drive measurable ROI.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(102, 34, 204, 0.1)',
                boxShadow: '0 15px 50px rgba(102, 34, 204, 0.08), 0 0 1px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #6622CC, #4C1FBF)',
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              ></div>

              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                
                {/* Left Side - Image */}
                <motion.div 
                  className="relative h-80 lg:h-full rounded-2xl overflow-hidden"
                  animate={{
                    x: hoveredCard === index ? -10 : 0,
                    scale: hoveredCard === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6622CC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg">
                    <span className="text-sm font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
                      {study.duration}
                    </span>
                  </div>
                </motion.div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center space-y-6">
                  
                  {/* Client Info */}
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                      {study.client}
                    </h3>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#6622CC]" />
                      <span className="text-slate-600 font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                          className="relative p-4 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                          {/* Icon */}
                          <div 
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center mb-3 shadow-md`}
                          >
                            <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                          </div>
                          
                          {/* Label */}
                          <div className="text-xs text-slate-600 font-medium mb-1">
                            {metric.label}
                          </div>
                          
                          {/* Before/After */}
                          <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-xs text-slate-500 line-through">
                              {metric.before}
                            </span>
                            <span className="text-xl font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
                              {metric.after}
                            </span>
                          </div>
                          
                          {/* Increase */}
                          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                            ↑ {metric.increase}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Strategy Summary */}
                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#6622CC]/5 to-[#4C1FBF]/5 border border-[#6622CC]/10">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6622CC] to-[#4C1FBF]"></span>
                      Strategy Overview
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {study.strategy}
                    </p>
                  </div>

                  {/* View Details Link */}
                  <motion.a
                    href="#case-study"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-[#6622CC] font-bold text-sm hover:gap-3 transition-all duration-300"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#all-case-studies"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)',
              boxShadow: '0 10px 40px rgba(102, 34, 204, 0.3)'
            }}
          >
            <span className="relative z-10">View Full Case Studies</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7833DD] to-[#5D2FD0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>

          {/* Decorative Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-3 h-1 w-32 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, #6622CC 0%, #4C1FBF 100%)',
              transformOrigin: 'center'
            }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6622CC]/20 to-transparent"></div>
    </section>
  );
};

export default CaseStudiesSection;