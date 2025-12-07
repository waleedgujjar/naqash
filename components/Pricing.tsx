"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
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

  const pricingData = [
    {
      name: 'Basic',
      icon: Sparkles,
      description: 'Perfect for startups and small businesses getting started.',
      monthlyPrice: 499,
      yearlyPrice: 4990,
      features: [
        'SEO Audit & Strategy',
        'Keyword Research (50 keywords)',
        'On-Page Optimization',
        'Monthly Performance Report',
        'Email Support',
        'Basic Link Building'
      ],
      highlighted: false,
      gradient: 'from-[#6622CC] to-[#7833DD]'
    },
    {
      name: 'Professional',
      icon: Zap,
      description: 'For growing businesses ready to dominate their market.',
      monthlyPrice: 1299,
      yearlyPrice: 12990,
      features: [
        'Everything in Basic',
        'Advanced SEO Strategy',
        'Keyword Research (200 keywords)',
        'Content Creation (4 articles/month)',
        'PPC Campaign Management',
        'Social Media Marketing',
        'Priority Support',
        'Competitor Analysis',
        'Conversion Rate Optimization'
      ],
      highlighted: true,
      gradient: 'from-[#6622CC] to-[#4C1FBF]'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'Custom solutions for established brands scaling fast.',
      monthlyPrice: 2999,
      yearlyPrice: 29990,
      features: [
        'Everything in Professional',
        'Unlimited Keyword Tracking',
        'Content Creation (12 articles/month)',
        'Full-Funnel Marketing',
        'Dedicated Account Manager',
        'Custom Reporting Dashboard',
        'Advanced Analytics & Attribution',
        '24/7 Priority Support',
        'Quarterly Strategy Sessions'
      ],
      highlighted: false,
      gradient: 'from-[#7833DD] to-[#4C1FBF]'
    }
  ];

  const handleCardHover = (e, isHovering) => {
    const card = e.currentTarget;
    if (isHovering) {
      card.style.transform = 'translateY(-8px) scale(1.02)';
      card.style.boxShadow = '0 30px 70px rgba(102, 34, 204, 0.25), 0 0 50px rgba(102, 34, 204, 0.15)';
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 15px 50px rgba(102, 34, 204, 0.12), 0 0 1px rgba(0, 0, 0, 0.05)';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
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
        {/* Gradient Mesh Shapes */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-[#6622CC]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#4C1FBF]/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#7833DD]/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: 'linear-gradient(#6622CC 1px, transparent 1px), linear-gradient(90deg, #6622CC 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6622CC]/10 to-[#4C1FBF]/10 text-[#6622CC] font-semibold text-sm border border-[#6622CC]/20">
              Pricing Plans
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
            Flexible Pricing That{' '}
            <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
              Fits Your Business
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan to accelerate your growth. No hidden fees, cancel anytime.
          </p>

          {/* Monthly/Yearly Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-4 p-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                !isYearly 
                  ? 'bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] text-white shadow-lg' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 relative ${
                isYearly 
                  ? 'bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] text-white shadow-lg' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-green-500 text-white text-xs font-bold">
                -20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {pricingData.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? 'year' : 'month';
            
            return (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
                className={`relative rounded-3xl p-8 transition-all duration-500 ${
                  plan.highlighted 
                    ? 'lg:scale-105 lg:-mt-4' 
                    : ''
                }`}
                style={{
                  background: plan.highlighted 
                    ? 'linear-gradient(135deg, rgba(102, 34, 204, 0.03) 0%, rgba(76, 31, 191, 0.03) 100%)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(16px)',
                  border: plan.highlighted 
                    ? '2px solid rgba(102, 34, 204, 0.2)' 
                    : '1px solid rgba(102, 34, 204, 0.1)',
                  boxShadow: '0 15px 50px rgba(102, 34, 204, 0.12), 0 0 1px rgba(0, 0, 0, 0.05)',
                  transform: 'translateY(0) scale(1)'
                }}
              >
                {/* Most Popular Badge */}
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] text-white font-bold text-sm shadow-lg"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Gradient Border Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${plan.gradient.includes('from-[#6622CC]') ? '#6622CC' : '#7833DD'}, ${plan.gradient.includes('to-[#4C1FBF]') ? '#4C1FBF' : '#7833DD'})`,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                ></div>

                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-baseline gap-2"
                    >
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-slate-600 font-medium">
                        /{period}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div 
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 relative overflow-hidden group ${
                    plan.highlighted
                      ? 'text-white'
                      : 'text-[#6622CC] hover:text-white'
                  }`}
                  style={
                    plan.highlighted
                      ? {
                          background: 'linear-gradient(135deg, #6622CC 0%, #4C1FBF 100%)',
                          boxShadow: '0 10px 30px rgba(102, 34, 204, 0.3)'
                        }
                      : {
                          background: 'transparent',
                          border: '2px solid',
                          borderImage: 'linear-gradient(135deg, #6622CC, #4C1FBF) 1'
                        }
                  }
                >
                  <span className="relative z-10">Choose {plan.name}</span>
                  {!plan.highlighted && (
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-sm">
            All plans include a 14-day money-back guarantee. Need a custom solution?{' '}
            <a href="#contact" className="font-semibold text-[#6622CC] hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;