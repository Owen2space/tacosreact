'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import ServiceCard from '@/components/ServiceCard';
import DroneShowcase from '@/components/DroneShowcase';
import VideoShowcase from '@/components/VideoShowcase';
import ParallaxImages from '@/components/ParallaxImages';

// Apple-style smooth easing
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    title: 'Drone Systems & Parts',
    description: 'Custom UAV assembly, component supply, and system integration. From motors and ESCs to flight controllers and frames.',
    icon: '',
    image: '/assets/drone-uav-quadcopter-motor-and-propeller-close-up-picjumbo-com.webp',
    features: ['Custom Builds', 'Component Supply', 'System Integration'],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions for computer vision, autonomous systems, predictive analytics, and intelligent data processing.',
    icon: '',
    image: '/assets/futuristic-ai-chip-circuit-board.webp',
    features: ['Computer Vision', 'Autonomous Systems', 'Predictive Analytics'],
  },
  {
    title: 'Technical Consultation',
    description: 'Expert guidance on UAV selection, system design, operational planning, and regulatory compliance for your specific needs.',
    icon: '',
    image: '/assets/low-angle-man-watching-drone.webp',
    features: ['System Design', 'Operational Planning', 'Compliance Advisory'],
  },
  {
    title: 'Mechanical Engineering',
    description: 'Precision mechanical design, prototyping, and fabrication services for aerospace components and custom solutions.',
    icon: '',
    image: '/assets/DroneMotor.webp',
    features: ['CAD Design', 'Prototyping', 'Fabrication'],
  },
];

const stats = [
  { value: '4', label: 'Core Services' },
  { value: '27+', label: 'Projects Completed' },
  { value: 'Kenya', label: 'East Africa HQ' },
  { value: 'AI/ML', label: 'Powered Solutions' },
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
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
          className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8 gpu-accelerate"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            className="text-xs sm:text-sm md:text-base text-gray-300 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6"
          >
            Tactical Aerospace Command & Operations Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 text-white text-shadow font-bold leading-tight"
          >
            <span className="block">Engineering</span>
            <span className="text-[#2d5a8a]">the Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            From AI-powered autonomous systems and drone components to technical consultation 
            and mechanical engineering solutions for aerospace applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: smoothEase }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: smoothEase }}
                className="btn-primary text-base sm:text-lg w-full sm:w-auto"
              >
                Request Consultation
              </motion.button>
            </Link>
            <Link href="/#services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: smoothEase }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all text-base sm:text-lg w-full sm:w-auto"
              >
                View Capabilities
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-2">{stat.value}</div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative section-padding bg-[#f8f9fa]">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <span className="text-[#2d5a8a] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a2e] mb-4 sm:mb-6 font-bold">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive solutions from AI/ML systems to parts supply, consultation, and engineering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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

        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 px-4">
                Whether you need AI-powered solutions, drone parts, technical consultation, or custom 
                engineering services, TACOS Technologies is here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-all text-base sm:text-lg shadow-lg w-full sm:w-auto"
                  >
                    Schedule a Briefing
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 transition-all text-base sm:text-lg w-full sm:w-auto"
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
