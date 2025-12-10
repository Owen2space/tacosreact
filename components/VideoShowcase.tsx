'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const capabilities = [
  {
    title: 'Real-Time Monitoring',
    description: 'Live HD video feed with minimal latency for instant decision making',
  },
  {
    title: 'Thermal Imaging',
    description: 'Advanced thermal sensors for night operations and heat detection',
  },
  {
    title: 'GPS Precision',
    description: 'Centimeter-level accuracy for precise mapping and navigation',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless data sync and analysis through our cloud platform',
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
    <section ref={containerRef} className="relative bg-[#0f0f0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Capabilities
          </span>
          <h2 className="text-headline text-white mb-6">
            See It In <span className="gradient-text-primary">Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the power of professional drone operations
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative mb-20"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden group">
            {/* Video/Image */}
            <Image
              src="/assets/drone-flying-mountains.webp"
              alt="Drone in action"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-2xl shadow-red-600/50 group/play"
            >
              <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-30" />
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
                  <p className="text-gray-300">Agricultural survey in Kenya</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
                    4K Quality
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
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
              <p className="text-gray-400 text-sm">{capability.description}</p>
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
            { value: '98%', label: 'Client Satisfaction' },
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
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
