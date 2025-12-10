'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const specs = [
  { 
    value: '45', 
    unit: 'min', 
    label: 'Flight Time', 
    description: 'Extended operations for comprehensive coverage',
  },
  { 
    value: '10', 
    unit: 'km', 
    label: 'Range', 
    description: 'Long-distance mission capability',
  },
  { 
    value: '4K', 
    unit: '60fps', 
    label: 'Resolution', 
    description: 'Professional-grade aerial imaging',
  },
  { 
    value: 'AI', 
    unit: 'Powered', 
    label: 'Navigation', 
    description: 'Intelligent obstacle avoidance',
  },
];

export default function DroneShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]" />

      <div className="relative container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Technology
          </span>
          <h2 className="text-headline text-white mb-6">
            Built for <span className="gradient-text-primary">Performance</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every detail engineered for precision, reliability, and mission success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Drone Image */}
          <motion.div
            style={{ y: imageY, rotate: imageRotate, opacity }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Glow Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full border border-red-500/20 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-red-500/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Drone Image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/assets/drone1.webp"
                  alt="TACOS Drone"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Shadow */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-4 bg-black/50 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Specs */}
          <div className="space-y-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-white">{spec.value}</span>
                      <span className="text-lg text-red-500 font-semibold">{spec.unit}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      {spec.label}
                    </div>
                    <p className="text-gray-500 text-sm">{spec.description}</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </motion.div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl glass"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Max Speed', value: 'Up to 65 km/h' },
              { label: 'Wind Resistance', value: 'Level 4-5' },
              { label: 'Operating Temp', value: '0°C to 40°C' },
              { label: 'Payload Capacity', value: 'Up to 2 kg' },
            ].map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
