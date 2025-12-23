'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Apple-style smooth easing
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const capabilities = [
  {
    title: 'Real-Time Intelligence',
    description: 'Live HD data feed with minimal latency for immediate operational awareness',
  },
  {
    title: 'Thermal Imaging',
    description: 'Advanced thermal sensors for night operations and heat signature detection',
  },
  {
    title: 'GPS Precision',
    description: 'Centimeter-level accuracy for precise geospatial mapping and navigation',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless data synchronization and analysis through secure cloud infrastructure',
  },
];

export default function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative bg-[#f8f9fa] overflow-hidden">
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Operational Capabilities
          </span>
          <h2 className="text-headline text-[#1a1a2e] mb-6">
            Airborne Intelligence, <span className="gradient-text-primary">Delivered</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the precision of professional aerial operations
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative mb-20 gpu-accelerate"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden group shadow-xl">
            <Image
              src="/assets/drone-flying-mountains.webp"
              alt="Aerial operations"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="100vw"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/70 via-transparent to-transparent" />
            
            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: smoothEase }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#1e3a5f] flex items-center justify-center"
            >
              <svg 
                className="w-8 h-8 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mission Overview</h3>
                  <p className="text-gray-300">Agricultural survey operation</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: smoothEase }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#2d5a8a]/30 transition-all duration-300 card-hover"
            >
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{capability.title}</h3>
              <p className="text-gray-500 text-sm">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Hectares Surveyed' },
            { value: '200+', label: 'Flight Hours' },
            { value: '98%', label: 'Mission Success' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: smoothEase }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
