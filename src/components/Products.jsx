// src/components/Products.jsx
'use client';
import React from 'react';
import { FaLink, FaCogs, FaCompressAlt, FaSyncAlt, FaProjectDiagram, FaTools } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      id: 'encoder-couplings',
      icon: <FaLink className="text-3xl" />,
      title: 'Encoder Couplings',
      image: '/ab.jpg',
    },
    {
      id: 'servo-couplings',
      icon: <FaCogs className="text-3xl" />,
      title: 'Clamping/Locking Assemblies',
      image: '/ab2.jpeg',
    },
    {
      id: 'clamping-assemblies',
      icon: <FaCompressAlt className="text-3xl" />,
      title: 'Timing Pulleys',
      image: '/ab3.jpeg',
    },
    {
      id: 'universal-joints',
      icon: <FaSyncAlt className="text-3xl" />,
      title: 'Steel Lamina Couplings',
      image: '/ab4.jpeg',
    },
    {
      id: 'flexible-couplings',
      icon: <FaProjectDiagram className="text-3xl" />,
      title: 'Flexible Couplings',
      image: '/ab5.jpeg',
    },
    {
      id: 'specialty-components',
      icon: <FaTools className="text-3xl" />,
      title: 'KTR Spiders / Sleeves / Ring / Lamina',
      image: '/ab6.jpeg',
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of industrial coupling solutions and precision components
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              {/* Product Card (Image only) */}
              <div 
                id={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-blue-700 relative"
              >
                {/* Product Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Product Title (Below card) */}
              <h3 className="mt-4 text-center text-xl font-bold text-blue-900">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;