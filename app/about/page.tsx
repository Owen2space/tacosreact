'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '10+', label: 'Missions Completed' },
  { value: '4+', label: 'Industries Served' },
  { value: '500+', label: 'Hectares Mapped' },
  { value: '98%', label: 'Mission Success' },
];

const values = [
  {
    title: 'Precision',
    description:
      'Delivering accurate geospatial intelligence through rigorous operational standards and advanced sensor systems.',
  },
  {
    title: 'Reliability',
    description:
      'Consistent, mission-critical service delivery with redundant systems and comprehensive safety protocols.',
  },
  {
    title: 'Expertise',
    description:
      'Deep technical knowledge combined with operational excellence in aerial systems and data analytics.',
  },
  {
    title: 'Partnership',
    description:
      'Working closely with clients to understand operational requirements and deliver tailored solutions.',
  },
];

export default function AboutPage() {
  return (
    <main className="relative bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/about.webp"
            alt="About TACOS Technologies"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-[#1a1a2e]/50 to-[#f8f9fa]" />
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block"
          >
            About TACOS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Tactical Aerospace Command
            <span className="block text-[#2d5a8a]">& Operations Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            TACOS Technologies delivers mission-critical aerial intelligence and operational
            solutions to support planning, monitoring, and decision-making across East Africa.
          </motion.p>
        </div>
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

      {/* Mission Section */}
      <section className="relative py-24 bg-[#f8f9fa]">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">Precision from Above</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At TACOS Technologies, we deliver accurate geospatial intelligence to support
                planning, monitoring, and operational decision-making. Our mission is to provide
                advanced aerial data and operational solutions that enable organizations to operate
                with greater efficiency and insight.
              </p>
              <p className="text-gray-500 leading-relaxed">
                From precision agriculture that optimizes resource allocation, to infrastructure
                assessments that ensure asset integrity, we deliver actionable intelligence that
                drives operational outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image src="/assets/drone-flying-mountains.webp" alt="Aerial operations" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1 shadow-2xl"
            >
              <Image
                src="/assets/AdobeStock_1562473527_Preview.webp"
                alt="Professional UAV systems"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block">
                Platform Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">Enterprise-Grade Systems</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We operate a fleet of enterprise-level unmanned aerial systems equipped with
                advanced sensors and imaging payloads. Our platforms are selected for reliability,
                precision, and the ability to deliver mission-critical data.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[#1a1a2e] font-semibold mb-1">Multispectral Imaging</div>
                  <div className="text-gray-500 text-sm">Crop health analytics</div>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[#1a1a2e] font-semibold mb-1">Thermal Sensors</div>
                  <div className="text-gray-500 text-sm">Heat signature detection</div>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[#1a1a2e] font-semibold mb-1">RTK GPS</div>
                  <div className="text-gray-500 text-sm">Centimeter-level accuracy</div>
                </div>
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[#1a1a2e] font-semibold mb-1">4K Imaging</div>
                  <div className="text-gray-500 text-sm">High-resolution capture</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-[#f8f9fa]">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Core Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#2d5a8a]/30 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-[#2d5a8a] rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">
              Purpose-Built for Performance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/uav-quadcopter-drone-picjumbo-com.webp"
                alt="Survey platform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-[#1a1a2e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Survey Platforms</h3>
                <p className="text-gray-300 text-sm">High-precision mapping and surveying</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/drone-uav-quadcopter-motor-and-propeller-close-up-picjumbo-com.webp"
                alt="Agricultural platform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-[#1a1a2e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Agricultural Platforms</h3>
                <p className="text-gray-300 text-sm">Multispectral crop analysis</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/assets/christopher-burns-xoMWD3nqEGg-unsplash.webp"
                alt="Inspection platform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-[#1a1a2e]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Inspection Platforms</h3>
                <p className="text-gray-300 text-sm">Infrastructure assessment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Begin?</h2>
              <p className="text-xl text-gray-200 mb-10">
                Contact our team to discuss how our aerial solutions can support your operational
                objectives.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-all text-lg shadow-lg"
                  >
                    Request Consultation
                  </motion.button>
                </Link>
                <a href="mailto:info@tacostechnologies.com">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 transition-all text-lg"
                  >
                    info@tacostechnologies.com
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
