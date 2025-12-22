'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import ServiceCard from '@/components/ServiceCard';
import DroneShowcase from '@/components/DroneShowcase';
import VideoShowcase from '@/components/VideoShowcase';
import ParallaxImages from '@/components/ParallaxImages';

const services = [
  {
    title: 'Precision Agriculture',
    description: 'Multispectral imaging, crop health analytics, and precision application systems for optimized agricultural operations.',
    icon: '',
    image: '/assets/dji-4223416_1920.webp',
    features: ['Crop Health Analysis', 'Precision Application', 'Yield Mapping'],
  },
  {
    title: 'Security & Surveillance',
    description: 'Real-time aerial monitoring with thermal imaging and intelligent threat detection for perimeter and asset protection.',
    icon: '',
    image: '/assets/low-angle-man-watching-drone.webp',
    features: ['24/7 Monitoring', 'Thermal Imaging', 'Threat Detection'],
  },
  {
    title: 'Emergency Response',
    description: 'Rapid deployment capabilities for search & rescue, disaster assessment, and critical supply delivery operations.',
    icon: '',
    image: '/assets/christopher-burns-xoMWD3nqEGg-unsplash.webp',
    features: ['Rapid Deployment', 'Search & Rescue', 'Critical Delivery'],
  },
  {
    title: 'Infrastructure Inspection',
    description: 'Comprehensive aerial assessment of power lines, pipelines, bridges, and structures with detailed reporting.',
    icon: '',
    image: '/assets/drone-flying-mountains.webp',
    features: ['Asset Inspection', 'Structural Analysis', 'Detailed Reporting'],
  },
];

const stats = [
  { value: '4+', label: 'Industries Served' },
  { value: '10+', label: 'Missions Completed' },
  { value: 'Kenya', label: 'East Africa HQ' },
  { value: '24/7', label: 'Operational Support' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <main className="relative bg-[#f8f9fa]">
      {/* Hero Section - Keep dark for impact */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/drone-flying-mountains.webp"
            alt="Aerial operations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#f8f9fa]" />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 container-custom text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-300 uppercase tracking-[0.2em] mb-6"
          >
            Advanced Aerial Data & Operational Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display mb-8 text-white text-shadow"
          >
            <span className="block">Command</span>
            <span className="text-[#2d5a8a]">the Sky</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
          >
            We deliver accurate geospatial intelligence to support planning, 
            monitoring, and operational decision-making across East Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                Request Consultation
              </motion.button>
            </Link>
            <Link href="/#services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all text-lg"
              >
                View Capabilities
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative section-padding bg-[#f8f9fa]">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Capabilities
            </span>
            <h2 className="text-headline text-[#1a1a2e] mb-6">
              Operational Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mission-critical aerial intelligence tailored for diverse operational requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Drone Showcase */}
      <DroneShowcase />

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Parallax Images */}
      <ParallaxImages />

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/medium-shot-smiley-woman-with-drone-outside.webp"
            alt="Operations team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/80 to-[#1e3a5f]/95" />
        </div>

        <div className="relative container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-headline text-white mb-6">
                Ready to Optimize Your Operations?
              </h2>
              <p className="text-xl text-gray-200 mb-10">
                Partner with TACOS Technologies to leverage precision aerial data 
                for enhanced operational efficiency and informed decision-making.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-all text-lg shadow-lg"
                  >
                    Schedule a Briefing
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 transition-all text-lg"
                  >
                    About TACOS
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
