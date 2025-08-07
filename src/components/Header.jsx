// src/components/Header.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { FaCogs, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Animation variants
const headerVariants = {
  scrolled: {
    backgroundColor: 'rgba(12, 35, 64, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  },
  normal: {
    backgroundColor: 'rgba(12, 35, 64, 1)',
    backdropFilter: 'blur(0px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0)'
  }
};

const mobileMenuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.5
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Products', href: 'products' },
    { name: 'Gallery', href: '/galary', isPage: true },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <motion.header
      initial="normal"
      animate={scrolled ? "scrolled" : "normal"}
      variants={headerVariants}
      className="fixed w-full z-50 text-white"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ScrollLink 
          to="home" 
          smooth={true} 
          duration={500} 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setActiveLink('home')}
        >
          <motion.div 
            whileHover={{ rotate: 15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaCogs className="text-red-400 text-3xl" />
          </motion.div>
          <div>
            <motion.h1 
              className="text-xl md:text-2xl font-bold"
              whileHover={{ x: 2 }}
            >
              S-<span className="text-red-400">Tech</span> Sales
            </motion.h1>
            <p className="text-xs text-blue-100 opacity-80 group-hover:opacity-100 transition-opacity">
              Coupling Solutions & Precision Job Work
            </p>
          </div>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isPage ? (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 font-medium transition-colors duration-300 cursor-pointer 
                      ${activeLink === item.href ? 'text-red-400' : 'text-white hover:text-red-300'}`}
                    onClick={() => setActiveLink(item.href)}
                  >
                    {item.name}
                    {activeLink === item.href && (
                      <motion.span 
                        layoutId="navUnderline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-red-400"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>
                ) : (
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`relative px-4 py-2 font-medium transition-colors duration-300 cursor-pointer 
                      ${activeLink === item.href ? 'text-red-400' : 'text-white hover:text-red-300'}`}
                    onSetActive={() => setActiveLink(item.href)}
                    spy={true}
                  >
                    {item.name}
                    {activeLink === item.href && (
                      <motion.span 
                        layoutId="navUnderline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-red-400"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl focus:outline-none p-2 rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-red-400" />
          ) : (
            <FaBars className="text-white" />
          )}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="md:hidden fixed left-0 top-16 w-full h-[calc(100vh-4rem)] bg-blue-950 bg-gradient-to-b from-blue-900/95 to-blue-800/95 backdrop-blur-md z-50 overflow-y-auto"
              >
                <motion.nav
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="container mx-auto px-4 py-6"
                >
                  <motion.ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        variants={menuItemVariants}
                        custom={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.isPage ? (
                          <Link
                            href={item.href}
                            className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300
                              ${activeLink === item.href 
                                ? 'text-red-400 bg-blue-700/50 shadow-lg' 
                                : 'text-white hover:text-red-300 hover:bg-blue-700/30'}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveLink(item.href);
                            }}
                          >
                            <span className="flex-1">{item.name}</span>
                            {activeLink === item.href && (
                              <motion.span 
                                className="w-2 h-2 bg-red-400 rounded-full"
                                layoutId="mobileNavIndicator"
                              />
                            )}
                          </Link>
                        ) : (
                          <ScrollLink
                            to={item.href}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300
                              ${activeLink === item.href 
                                ? 'text-red-400 bg-blue-700/50 shadow-lg' 
                                : 'text-white hover:text-red-300 hover:bg-blue-700/30'}`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveLink(item.href);
                            }}
                            onSetActive={() => setActiveLink(item.href)}
                            spy={true}
                          >
                            <span className="flex-1">{item.name}</span>
                            {activeLink === item.href && (
                              <motion.span 
                                className="w-2 h-2 bg-red-400 rounded-full"
                                layoutId="mobileNavIndicator"
                              />
                            )}
                          </ScrollLink>
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;