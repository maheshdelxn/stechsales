'use client';
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Gallery = () => {
  const imageCount = 23;
  const images = Array.from({ length: imageCount }, (_, i) => `/g${i + 1}.jpeg`);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Mark some images as best sellers (every 3rd image)
  const isBestSeller = (index) => index % 3 === 0;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Filter images based on active filter
  const filteredImages = images.filter((_, index) => {
    if (activeFilter === 'best') {
      return isBestSeller(index);
    } else if (activeFilter === 'new') {
      return index % 7 === 0; // New arrivals logic
    }
    return true; // show all if 'all' is selected
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-[length:100px_100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-yellow-300">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            Discover the artistry and excellence in every piece of our collection
          </motion.p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full font-medium shadow-md transition-all ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Items
            </button>
            <button 
              onClick={() => setActiveFilter('best')}
              className={`px-5 py-2 rounded-full font-medium shadow-md transition-all ${
                activeFilter === 'best' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Best Sellers
            </button>
            <button 
              onClick={() => setActiveFilter('new')}
              className={`px-5 py-2 rounded-full font-medium shadow-md transition-all ${
                activeFilter === 'new' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              New Arrivals
            </button>
          </motion.div>

          {/* Gallery Grid */}
          {activeFilter === 'new' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="text-4xl font-bold text-blue-600"
              >
                Coming Soon...
              </motion.div>
              <p className="mt-4 text-gray-600">Our new collection is on its way!</p>
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`image-${index}`}
                  variants={item}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image container */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Gallery item ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-image.jpeg';
                      }}
                    />
                    
                    {/* Best Seller ribbon */}
                    {isBestSeller(index) && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        Best Seller
                      </div>
                    )}
                  </div>
                  
                  {/* Product info */}
                  <div className="p-5 flex items-center justify-center">  {/* Added flex, items-center, justify-center */}
                    <h3 className="text-lg font-bold text-gray-800 text-center">Product {index + 1}</h3>  {/* Added text-center */}
                  </div> 
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Load More Button - Only show if not in "New Arrivals" filter */}
          {activeFilter !== 'new' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16 text-center"
            >
              <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg">
                Load More
              </button>
            </motion.div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;