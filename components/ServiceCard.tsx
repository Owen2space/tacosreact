'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    image: string;
    features: string[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-red-500/50 transition-colors duration-500" />

      {/* Glow Effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Title */}
        <motion.h3
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-2xl md:text-3xl font-bold text-white mb-3"
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          animate={{ y: isHovered ? -10 : 0, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-gray-300 mb-6 line-clamp-2"
        >
          {service.description}
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/10"
              >
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <button className="inline-flex items-center gap-2 text-red-500 font-semibold group/btn">
            Learn More
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-6 right-6">
        <motion.div
          animate={{ rotate: isHovered ? 90 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-8 h-8 border-t-2 border-r-2 border-white/30 group-hover:border-red-500 transition-colors duration-500"
        />
      </div>
    </motion.div>
  );
}
