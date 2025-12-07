"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechVision Inc.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      feedback: 'Working with this agency transformed our digital presence completely. Within 6 months, we saw a 300% increase in organic traffic and our conversion rates doubled. Their strategic approach and attention to detail is unmatched.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthLabs',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      feedback: 'The ROI we\'ve achieved has been phenomenal. Not only did they help us rank #1 for our target keywords, but they also built a complete lead generation system that brings in qualified prospects daily. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'EcoRetail Solutions',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      feedback: 'Their expertise in e-commerce SEO is exceptional. They helped us scale from $50K to $500K in monthly revenue through strategic content marketing and PPC optimization. The team is professional, responsive, and results-driven.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'VP of Sales',
      company: 'CloudSync Technologies',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      feedback: 'Best decision we made for our business. The team doesn\'t just execute campaigns—they become true partners in your growth. Our lead quality improved dramatically, and we\'re closing deals faster than ever before.',
      rating: 5
    },
    {
      id: 5,
      name: 'Jennifer Park',
      role: 'CMO',
      company: 'FinanceFirst Group',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
      feedback: 'Outstanding results across all channels. They helped us dominate local search, build authority through content, and create a predictable pipeline of high-value clients. The transparency and communication throughout the process was excellent.',
      rating: 5
    }
  ];

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

  // Auto-play carousel
  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = setInterval(() => {
        paginate(1);
      }, 5000);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [isVisible, currentIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number): number => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(102, 34, 204, 0.02) 0%, rgba(102, 34, 204, 0.04) 50%, rgba(102, 34, 204, 0.02) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#6622CC]/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-[#4C1FBF]/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating Quote Icons */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[15%] opacity-5"
        >
          <Quote className="w-32 h-32 text-[#6622CC]" strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-[15%] opacity-5"
        >
          <Quote className="w-40 h-40 text-[#4C1FBF]" strokeWidth={1} />
        </motion.div>
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
              Testimonials
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
            What{' '}
            <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent">
              Our Clients
            </span>{' '}
            Say
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Testimonial Cards Carousel */}
          <div className="relative h-[500px] lg:h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-4xl"
              >
                <div 
                  className="relative p-8 lg:p-12 rounded-3xl cursor-grab active:cursor-grabbing"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(102, 34, 204, 0.12), 0 0 1px rgba(102, 34, 204, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.6)'
                  }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-8 left-8 opacity-10">
                    <Quote className="w-16 h-16 text-[#6622CC]" strokeWidth={2} />
                  </div>

                  <div className="relative flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                    
                    {/* Client Photo */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Gradient Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6622CC] to-[#4C1FBF] p-1">
                          <div className="w-full h-full rounded-full bg-white"></div>
                        </div>
                        
                        {/* Photo */}
                        <img 
                          src={testimonials[currentIndex].photo}
                          alt={testimonials[currentIndex].name}
                          className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-white shadow-lg"
                        />

                        {/* Verified Badge */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#6622CC] to-[#4C1FBF] flex items-center justify-center shadow-lg border-4 border-white">
                          <Star className="w-5 h-5 text-white fill-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      {/* Feedback */}
                      <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        "{testimonials[currentIndex].feedback}"
                      </p>

                      {/* Client Info */}
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-slate-600 font-medium">
                          {testimonials[currentIndex].role} at{' '}
                          <span className="bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent font-semibold">
                            {testimonials[currentIndex].company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                clearInterval(autoPlayRef.current);
                paginate(-1);
              }}
              className="pointer-events-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#6622CC] transition-all duration-300 border border-[#6622CC]/20 -ml-6 lg:-ml-20"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={3} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                clearInterval(autoPlayRef.current);
                paginate(1);
              }}
              className="pointer-events-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#6622CC] transition-all duration-300 border border-[#6622CC]/20 -mr-6 lg:-mr-20"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  clearInterval(autoPlayRef.current);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="group relative"
              >
                <div 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-[#6622CC] to-[#4C1FBF]' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '$50M+', label: 'Revenue Generated' },
            { value: '4.9/5', label: 'Average Rating' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#6622CC]/10 shadow-lg"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#6622CC] to-[#4C1FBF] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;