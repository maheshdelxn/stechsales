// src/components/Clients.jsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { id: 1, logo: '/c1.png' },
    { id: 2, logo: '/c2.png' },
    { id: 3, logo: '/c3.png' },
    { id: 4, logo: '/c4.png' },
  ];

  return (
    <section className="py-16 bg-gray-50" id="clients">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Clients
          </h2>
          <div className="w-16 md:w-20 h-1 bg-red-500 mx-auto mt-4 mb-4 md:mb-6"></div>
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden md:flex justify-center items-center">
          <div className="grid grid-cols-4 gap-8 lg:gap-16 w-full max-w-5xl mx-auto">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-4 rounded-lg w-full h-32 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt="Client logo"
                    width={120}
                    height={80}
                    className="object-contain h-full w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Grid Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-6">
            {clients.map((client) => (
              <div key={client.id} className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-lg w-full h-24 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt="Client logo"
                    width={80}
                    height={60}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;