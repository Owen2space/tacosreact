'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Apple-style smooth easing
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const specs = [
  { 
    value: '45', 
    unit: 'min', 
    label: 'Flight Time', 
    description: 'Extended endurance for comprehensive mission coverage',
  },
  { 
    value: '10', 
    unit: 'km', 
    label: 'Operational Range', 
    description: 'Long-distance capability for wide-area operations',
  },
  { 
    value: '4K', 
    unit: '60fps', 
    label: 'Imaging Resolution', 
    description: 'Professional-grade aerial data capture',
  },
  { 
    value: 'AI', 
    unit: 'Powered', 
    label: 'Navigation System', 
    description: 'Intelligent autonomous flight operations',
  },
];

export default function DroneShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative container-custom section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Platform Specifications
          </span>
          <h2 className="text-headline text-[#1a1a2e] mb-6">
            Engineered for <span className="gradient-text-primary">Precision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every system component optimized for reliability, accuracy, and mission success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Drone Image */}
          <motion.div
            style={{ y: imageY, opacity }}
            className="relative gpu-accelerate"
          >
            <div className="relative aspect-square">
              {/* Drone Image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/assets/drone1.webp"
                  alt="TACOS UAV Platform"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Specs */}
          <div className="space-y-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative p-6 rounded-2xl bg-[#f8f9fa] border border-gray-200 hover:border-[#2d5a8a]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-[#1a1a2e]">{spec.value}</span>
                      <span className="text-lg text-[#2d5a8a] font-semibold">{spec.unit}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      {spec.label}
                    </div>
                    <p className="text-gray-500 text-sm">{spec.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 p-8 rounded-3xl bg-[#1a1a2e] text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Max Velocity', value: '65 km/h' },
              { label: 'Wind Tolerance', value: 'Level 4-5' },
              { label: 'Operating Temp', value: '0°C to 40°C' },
              { label: 'Payload Capacity', value: 'Up to 2 kg' },
            ].map((item) => (
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
