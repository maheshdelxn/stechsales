'use client'; // Add this at the top for Next.js App Router

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-white min-h-[500px] md:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/bg3.png"
          alt="Industrial background"
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          quality={100}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-3xl pt-10 pb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-md"
          >
            Precision Coupling Solutions for Industrial Excellence
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow-md"
          >
            Your trusted partner for industrial couplings, precision components, and engineering solutions
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('products')}
            >
              Explore Products <FaArrowRight className="ml-2" />
            </motion.button>
            
            <motion.button 
              className="flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-full transition duration-300 drop-shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;