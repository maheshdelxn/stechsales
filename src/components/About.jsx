// src/components/About.js
'use client';
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCog, FaIndustry, FaMedal, FaFileAlt } from 'react-icons/fa';

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Company Introduction</h2>
          <div className="w-16 md:w-20 h-1 bg-orange-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-2 sm:px-0">
            Authorized Dealer for KTR Coupling (India) Pvt. Ltd.
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
              S-Tech Sales
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3 md:mb-5">  {/* Reduced mb-4 md:mb-6 */}
              We are pleased to introduce ourselves as <strong>S-Tech Sales</strong>, an Authorized Dealer of <strong>KTR Coupling (India) Pvt. Ltd.</strong>, one of the leading manufacturers of high-quality power transmission products and industrial coupling solutions.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-3 md:mb-5">  {/* Reduced mb-6 md:mb-8 */}
              Based in Dattanagar, Katraj, Pune, S-Tech Sales is committed to delivering reliable industrial products, precision engineering solutions, and excellent customer support to various industries across pan India.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-5 md:mb-7">
              With a strong focus on quality, technical expertise, and customer satisfaction, we provide a complete range of KTR Couplings and Power Transmission Products suitable for industrial automation, CNC machinery, heavy engineering, manufacturing plants, and process industries.
            </p>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border-l-4 border-orange-500 mb-5 md:mb-7">
              <div className="flex items-start mb-2 sm:mb-3">
                <FaMapMarkerAlt className="text-orange-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
                <p className="text-sm sm:text-base text-black">Dattanagar, Katraj, Pune – 411046</p>
              </div>
              <div className="flex items-start mb-2 sm:mb-3">
                <FaEnvelope className="text-orange-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
                <p className="text-sm sm:text-base text-black">info@stechsales.com</p>
              </div>
              <div className="flex items-start mb-2 sm:mb-3">
                <FaPhone className="text-orange-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
                <p className="text-sm sm:text-base text-black">+91 8208269162 / +91 9422302342</p>
              </div>
              <div className="flex items-start">
                <FaFileAlt className="text-orange-500 text-lg sm:text-xl mt-0.5 mr-2 sm:mr-3" />
                <p className="text-sm sm:text-base text-black">GSTIN: 27BPDPPJ5776D1ZS</p>
              </div>
            </div>

            <div className="mt-6 mb-4">
              <h4 className="text-lg font-bold text-blue-900 mb-4">WHY CHOOSE US</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <FaMedal className="text-orange-500 mr-3" />
                  <p className="font-medium text-sm text-black">ISO 9001:2015 Certified</p>
                </div>
                <div className="flex items-center">
                  <FaCog className="text-orange-500 mr-3" />
                  <p className="font-medium text-sm text-black">Genuine KTR Products</p>
                </div>
                <div className="flex items-center">
                  <FaIndustry className="text-orange-500 mr-3" />
                  <p className="font-medium text-sm text-black">Competitive Pricing</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-orange-500 mr-3" />
                  <p className="font-medium text-sm text-black">Prompt Technical Support</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 mr-3" />
                  <p className="font-medium text-sm text-black">Timely Delivery</p>
                </div>
                <div className="flex items-center">
                  <FaFileAlt className="text-orange-500 mr-3" />
                  <p className="font-medium text-sm text-black">Trusted Industrial Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;