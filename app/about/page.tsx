"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "4+", label: "Industries Served" },
  { value: "5+", label: "Drones in Fleet" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge drone technology and AI-powered analytics.",
  },
  {
    title: "Precision",
    description: "Delivering accurate, actionable data that drives informed decision-making.",
  },
  {
    title: "Reliability",
    description: "Consistent, dependable service backed by rigorous safety standards.",
  },
  {
    title: "Sustainability",
    description: "Eco-friendly solutions that minimize environmental impact.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/about.webp"
          alt="About TACOS Technologies"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            About TACOS Technologies
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transforming Africa Through <span className="text-red-500">Drone Innovation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            A growing drone technology startup delivering professional aerial solutions for enterprise and government across East Africa.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Industries with Aerial Intelligence
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                TACOS Technologies is committed to revolutionizing how businesses and organizations 
                across Africa leverage drone technology. We provide end-to-end aerial solutions 
                that transform raw data into actionable insights.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From precision agriculture and infrastructure inspection to emergency response 
                and environmental monitoring, our certified team delivers professional-grade 
                services that meet international standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/assets/AdobeStock_1562473527_Preview.webp"
                  alt="Drone technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-red-600/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/assets/drone-uav-quadcopter-motor-and-propeller-close-up-picjumbo-com.webp"
                  alt="Advanced drone technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">Our Technology</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional-Grade Platforms
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our fleet features reliable drone technology, equipped with multispectral 
                sensors, thermal imaging, and high-resolution cameras for comprehensive 
                data capture.
              </p>
              <ul className="space-y-4">
                {["4K Aerial Imaging", "Multispectral Analysis", "Thermal Detection", "3D Mapping & Modeling"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold">What Drives Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-4 block">Our Fleet</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Purpose-Built for Every Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our growing fleet includes specialized drones for agriculture, surveying, 
                inspection, and emergency response. Each platform is maintained to the 
                highest standards and operated by trained professionals.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every aircraft undergoes rigorous pre-flight checks and is equipped with 
                safety systems to ensure reliable operations in various environments.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/assets/uav-quadcopter-drone-picjumbo-com.webp"
                  alt="Professional drone fleet"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Operations?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Partner with TACOS Technologies and discover how drone solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-500 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/#services"
                className="inline-block bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
