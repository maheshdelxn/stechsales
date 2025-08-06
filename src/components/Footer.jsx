'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaChevronRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const products = [
    { name: 'Encoder Couplings', id: 'encoder-couplings' },
    { name: 'Clamping/Locking Assemblies', id: 'servo-couplings' },
    { name: 'Timing Pulleys', id: 'clamping-assemblies' },
    { name: 'Steel Lamina Couplings', id: 'universal-joints' },
    { name: 'Flexible Couplings', id: 'flexible-couplings' },
    { name: 'KTR Spiders / Sleeves / Ring / Lamina', id: 'specialty-components' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProduct = (id) => {
    const productsSection = document.getElementById('products');
    const productElement = document.getElementById(id);
    
    if (productsSection && productElement) {
      window.scrollTo({
        top: productsSection.offsetTop - 100,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        productElement.classList.add('ring-2', 'ring-red-500');
        setTimeout(() => {
          productElement.classList.remove('ring-2', 'ring-red-500');
        }, 2000);
      }, 500);
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <FaCogs className="text-red-500 text-2xl mr-3" />
              <h3 className="text-xl font-bold">S-<span className="text-red-500">Tech</span> Sales</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Your trusted partner for precision coupling solutions and industrial components.
            </p>
            <p className="text-blue-200">Coupling Solutions & Precision Job Work</p>
            <div className="flex mt-4 space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-blue-200 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Clients', 'Contact'].map((item, index) => (
                <motion.li key={index} whileHover="hover" variants={linkVariants}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center text-blue-200 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase().replace(' ', '-'));
                    }}
                  >
                    <FaChevronRight className="text-xs mr-2" /> {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <motion.li key={index} whileHover="hover" variants={linkVariants}>
                  <button 
                    onClick={() => scrollToProduct(product.id)}
                    className="flex items-center w-full text-left text-blue-200 hover:text-white transition-colors"
                  >
                    <FaChevronRight className="text-xs mr-2" /> {product.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <motion.li whileHover="hover" variants={linkVariants}>
                <a href="#" className="flex items-start text-blue-200 hover:text-white transition-colors">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-red-400" />
                  <span>Dattanager Shivanjil lane no 2, Katraj, Pune - 411046</span>
                </a>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <a href="mailto:couplingwork.stech@yahoo.com" className="flex items-center text-blue-200 hover:text-white transition-colors">
                  <FaEnvelope className="mr-3 text-red-400" /> couplingwork.stech@yahoo.com
                </a>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <a href="tel:+918208269162" className="flex items-center text-blue-200 hover:text-white transition-colors">
                  <FaPhone className="mr-3 text-red-400" /> +91 8208269162
                </a>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <a href="tel:+919422302342" className="flex items-center text-blue-200 hover:text-white transition-colors">
                  <FaPhone className="mr-3 text-red-400" /> +91 9422302342
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-300">
            &copy; {new Date().getFullYear()} S-Tech Sales. All Rights Reserved. | Designed with Precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;