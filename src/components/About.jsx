// src/components/About.js
'use client';
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCog, FaIndustry, FaMedal,FaFileAlt } from 'react-icons/fa';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of image paths from public folder
  const images = [
    '/about1.jpeg',
    '/about2.jpeg',
    '/about3.jpeg',
    '/about4.jpeg',
    '/about5.jpeg',
    '/about6.jpeg',
    '/about7.jpeg',
    '/about8.jpeg',
    '/about9.jpeg',
    '/about10.jpeg',
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-8 md:py-12 bg-white">  {/* Reduced from py-12 md:py-24 */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">  {/* Reduced from mb-12 md:mb-16 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">About S-Tech Sales</h2>
          <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-0">
            With years of expertise in precision engineering, S-Tech Sales delivers high-quality coupling solutions for diverse industrial applications.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">  {/* Reduced gap from gap-8 md:gap-12 */}
          <div className="w-full h-96 w-96 md:w-1/2 flex justify-center">
            <img 
              src={images[currentImageIndex]} 
              alt="S-Tech Sales Facility"
              className="h-full rounded-xl"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-5">  {/* Reduced mb-4 md:mb-6 */}
              Your Reliable Partner in Industrial Solutions
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3 md:mb-5">  {/* Reduced mb-4 md:mb-6 */}
              S-Tech Sales specializes in providing top-quality coupling solutions and precision job work for various industrial applications. Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-5 md:mb-7">  {/* Reduced mb-6 md:mb-8 */}
              We pride ourselves on our technical expertise, quality products, and timely delivery. Our team of skilled engineers and technicians ensure that every product meets the highest standards of precision and durability.
            </p>
            
            <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border-l-4 border-red-500 mb-5 md:mb-7">
  <div className="flex items-start mb-2 sm:mb-3">
    <FaMapMarkerAlt className="text-red-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
    <p className="text-sm sm:text-base">Dattanager Shivanjil lane no 2 katraj pune - 411046</p>
  </div>
  <div className="flex items-start mb-2 sm:mb-3">
    <FaEnvelope className="text-red-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
    <p className="text-sm sm:text-base">couplingwork.stech@yahoo.com</p>
  </div>
  <div className="flex items-start mb-2 sm:mb-3">
    <FaPhone className="text-red-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
    <p className="text-sm sm:text-base">+91 8208269162, +91 9422302342</p>
  </div>
  <div className="flex items-start">
    <FaFileAlt className="text-red-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
    <p className="text-sm sm:text-base">GST No: 27BPDPJ5776D1ZS</p>
  </div>
</div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">  {/* Reduced gap-3 sm:gap-4 */}
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-3">  {/* Reduced mr-3 sm:mr-4 */}
                  <FaCog className="text-blue-700 text-lg sm:text-xl" />
                </div>
                <p className="font-medium text-sm sm:text-base">Precision Engineering</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-3">  {/* Reduced mr-3 sm:mr-4 */}
                  <FaIndustry className="text-blue-700 text-lg sm:text-xl" />
                </div>
                <p className="font-medium text-sm sm:text-base">Quality Solutions</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-3">  {/* Reduced mr-3 sm:mr-4 */}
                  <FaMedal className="text-blue-700 text-lg sm:text-xl" />
                </div>
                <p className="font-medium text-sm sm:text-base">Industry Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;