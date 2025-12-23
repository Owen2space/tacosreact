'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// Apple-style smooth easing
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: smoothEase }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg gpu-accelerate"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Title */}
        <motion.h3
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="text-2xl md:text-3xl font-bold text-white mb-3"
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          animate={{ y: isHovered ? -8 : 0, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.4, ease: smoothEase }}
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
          transition={{ duration: 0.4, ease: smoothEase }}
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
          animate={{ y: isHovered ? 0 : 15, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: smoothEase }}
        >
          <button className="inline-flex items-center gap-2 text-[#2d5a8a] font-semibold">
            View Details
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
