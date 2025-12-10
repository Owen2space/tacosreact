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
    description: 'Advanced crop monitoring, multispectral imaging, and precision spraying for maximum yield optimization.',
    icon: '',
    image: '/assets/dji-4223416_1920.webp',
    features: ['Crop Health Analysis', 'Precision Spraying', 'Yield Mapping'],
  },
  {
    title: 'Security & Surveillance',
    description: 'Real-time aerial monitoring with thermal imaging and AI-powered threat detection systems.',
    icon: '',
    image: '/assets/low-angle-man-watching-drone.webp',
    features: ['24/7 Monitoring', 'Thermal Imaging', 'AI Detection'],
  },
  {
    title: 'Emergency Response',
    description: 'Rapid deployment for search & rescue, disaster assessment, and emergency medical deliveries.',
    icon: '',
    image: '/assets/christopher-burns-xoMWD3nqEGg-unsplash.webp',
    features: ['Rapid Deployment', 'Search & Rescue', 'Medical Delivery'],
  },
  {
    title: 'Logistics & Delivery',
    description: 'Efficient last-mile delivery solutions for remote areas and time-critical shipments.',
    icon: '',
    image: '/assets/drone-flying-mountains.webp',
    features: ['Last-Mile Delivery', 'Remote Access', 'Express Shipping'],
  },
];

const stats = [
  { value: '4+', label: 'Industries Served' },
  { value: '10+', label: 'Projects Delivered' },
  { value: 'Kenya', label: 'Based in East Africa' },
  { value: '24/7', label: 'Support Available' },
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
    <main className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/drone-flying-mountains.webp"
            alt="Drone flying"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 gradient-mesh opacity-40" />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 container-custom text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display mb-8 text-white text-shadow"
          >
            <span className="block">Elevate Your</span>
            <span className="gradient-text-primary">Operations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Professional drone solutions for agriculture, security, emergency response, 
            and logistics across the African continent.
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
                Start Your Mission
              </motion.button>
            </Link>
            <Link href="/#services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-[#0a0a0a]">
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
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative section-padding bg-[#0a0a0a]">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
              What We Offer
            </span>
            <h2 className="text-headline text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive drone solutions tailored for African markets and challenges
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
            alt="Drone operator"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
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
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Partner with us to leverage drone technology 
                for unprecedented efficiency and insights.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg"
                  >
                    Get a Free Consultation
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-glass text-lg text-white"
                  >
                    Learn More About Us
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
