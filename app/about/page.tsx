"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "4+", label: "Industries Served" },
  { value: "500+", label: "Hectares Mapped" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    title: "Innovation",
    description: "Leveraging cutting-edge drone technology and data analytics to deliver solutions that drive real results.",
  },
  {
    title: "Reliability",
    description: "Consistent, high-quality service delivery with redundant systems and rigorous safety protocols.",
  },
  {
    title: "Expertise",
    description: "Deep industry knowledge combined with technical excellence in aerial operations and data processing.",
  },
  {
    title: "Partnership",
    description: "Working closely with clients to understand their unique challenges and deliver tailored solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Pioneering Drone Solutions
            <span className="block text-red-500">Across East Africa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            TACOS Technologies delivers professional drone services that help 
            businesses make smarter, data-driven decisions.
          </motion.p>
        </div>
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

      {/* Mission Section */}
      <section className="relative py-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforming Industries Through Aerial Innovation
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At TACOS Technologies, we believe that drone technology has the power to 
                revolutionize how businesses operate across Africa. Our mission is to make 
                advanced aerial solutions accessible and practical for organizations of all sizes.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From precision agriculture that helps farmers optimize their yields, to 
                infrastructure inspections that keep critical assets safe, we deliver 
                actionable insights that drive real business outcomes.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-gray-300">KCAA Certified Operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-gray-300">Fully Insured</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/assets/drone-flying-mountains.webp"
                alt="Drone operations"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Technology Section */}
      <section className="relative py-24 bg-zinc-900/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="/assets/AdobeStock_1562473527_Preview.webp"
                alt="Professional drone equipment"
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
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Technology
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional-Grade Equipment
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We operate a fleet of enterprise-level drones equipped with advanced 
                sensors and imaging systems. Our equipment is selected for reliability, 
                precision, and the ability to deliver actionable data.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                  <div className="text-white font-semibold mb-1">Multispectral Imaging</div>
                  <div className="text-gray-400 text-sm">Crop health analysis</div>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                  <div className="text-white font-semibold mb-1">Thermal Sensors</div>
                  <div className="text-gray-400 text-sm">Heat detection</div>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                  <div className="text-white font-semibold mb-1">RTK GPS</div>
                  <div className="text-gray-400 text-sm">Centimeter accuracy</div>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                  <div className="text-white font-semibold mb-1">4K Cameras</div>
                  <div className="text-gray-400 text-sm">High-resolution capture</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-[#0a0a0a]">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
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
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="relative py-24 bg-zinc-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Purpose-Built for Performance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/assets/uav-quadcopter-drone-picjumbo-com.webp"
                alt="Survey drone"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Survey Drones</h3>
                <p className="text-gray-300 text-sm">High-precision mapping and surveying</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/assets/drone-uav-quadcopter-motor-and-propeller-close-up-picjumbo-com.webp"
                alt="Agricultural drone"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Agricultural Drones</h3>
                <p className="text-gray-300 text-sm">Multispectral crop analysis</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[350px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/assets/christopher-burns-xoMWD3nqEGg-unsplash.webp"
                alt="Inspection drone"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">Inspection Drones</h3>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Let&apos;s discuss how our drone solutions can help transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                <a href="mailto:info@tacostechnologies.com">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline text-lg"
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
