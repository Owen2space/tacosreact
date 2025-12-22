'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

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
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative bg-[#f8f9fa] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
          className="relative mb-20"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden group shadow-2xl">
            {/* Video/Image */}
            <Image
              src="/assets/drone-flying-mountains.webp"
              alt="Aerial operations"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-[#1a1a2e]/20 to-transparent" />
            
            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#1e3a5f] flex items-center justify-center shadow-2xl shadow-[#1e3a5f]/50 group/play"
            >
              <div className="absolute inset-0 rounded-full bg-[#1e3a5f] animate-ping opacity-30" />
              <svg 
                className="w-10 h-10 text-white ml-1" 
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
                  <h3 className="text-3xl font-bold text-white mb-2">Mission Overview</h3>
                  <p className="text-gray-300">Agricultural survey operation — Kenya</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                    4K Resolution
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                    2:34
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-white/30" />
            <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-white/30" />
            <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-white/30" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-white/30" />
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#2d5a8a]/30 transition-all duration-300 group shadow-sm hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{capability.title}</h3>
              <p className="text-gray-500 text-sm">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
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
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
