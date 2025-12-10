'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const features = [
  {
    image: '/assets/dji-4223416_1920.webp',
    title: 'Precision Agriculture',
    subtitle: 'Smart Farming Solutions',
    description: 'Optimize your farming operations with multispectral imaging, crop health monitoring, and precision analysis technology that helps maximize yields while reducing resource usage.',
    stats: [
      { value: 'Up to 30%', label: 'Yield Improvement' },
      { value: 'Up to 40%', label: 'Resource Savings' },
    ],
    color: 'from-green-600/20',
  },
  {
    image: '/assets/low-angle-man-watching-drone.webp',
    title: 'Security Operations',
    subtitle: 'Advanced Surveillance',
    description: 'Deploy aerial security with real-time monitoring and thermal imaging for perimeter security, event coverage, and infrastructure protection.',
    stats: [
      { value: 'Real-time', label: 'Monitoring' },
      { value: 'HD', label: 'Video Quality' },
    ],
    color: 'from-blue-600/20',
  },
  {
    image: '/assets/christopher-burns-xoMWD3nqEGg-unsplash.webp',
    title: 'Infrastructure Inspection',
    subtitle: 'Safe & Efficient Assessment',
    description: 'Conduct thorough inspections of power lines, pipelines, bridges, and buildings without putting personnel at risk. Our drones capture detailed imagery for comprehensive analysis.',
    stats: [
      { value: 'Safer', label: 'Operations' },
      { value: 'Faster', label: 'Inspections' },
    ],
    color: 'from-orange-600/20',
  },
];

export default function ParallaxImages() {
  return (
    <section className="relative bg-[#0a0a0a]">
      {/* Section Header */}
      <div className="container-custom pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
            Applications
          </span>
          <h2 className="text-headline text-white mb-6">
            Industry <span className="gradient-text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored drone solutions for diverse operational needs across multiple sectors
          </p>
        </motion.div>
      </div>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <FeatureSection key={feature.title} feature={feature} index={index} />
      ))}
    </section>
  );
}

function FeatureSection({ feature, index }: { feature: typeof features[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isReversed = index % 2 === 1;

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center py-20">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} to-transparent opacity-30`} />
      
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <motion.div
            style={{ y: imageY, opacity }}
            className={`relative ${isReversed ? 'lg:order-2' : ''}`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
              >
                {feature.subtitle}
              </motion.div>

              {/* Corner Frame */}
              <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ y: contentY, opacity }}
            className={`${isReversed ? 'lg:order-1' : ''}`}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              0{index + 1} — {feature.subtitle}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {feature.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              {feature.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-8 mb-8"
            >
              {feature.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 text-white font-semibold group"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <span className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
