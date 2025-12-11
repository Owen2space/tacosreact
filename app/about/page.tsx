"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "David Ochieng",
    role: "CEO & Founder",
    image: "/assets/jonathan-lampel-L9wrEGJjRdo-unsplash.webp",
  },
  {
    name: "Sarah Kimani",
    role: "Chief Operations Officer",
    image: "/assets/medium-shot-smiley-woman-with-drone-outside.webp",
  },
  {
    name: "Michael Adebayo",
    role: "Head of Technology",
    image: "/assets/kenny-eliason-LrL45dXXvJ8-unsplash.webp",
  },
  {
    name: "Grace Mwangi",
    role: "Director of Agriculture",
    image: "/assets/dose-media-DiTiYQx0mh4-unsplash.webp",
  },
];

const milestones = [
  { year: "2018", title: "Founded", description: "TACOS Drone Services established in Nairobi" },
  { year: "2019", title: "First Major Contract", description: "Partnered with Kenya Wildlife Service" },
  { year: "2020", title: "Expansion", description: "Extended services to Tanzania and Uganda" },
  { year: "2021", title: "Innovation Award", description: "Recognized for agricultural drone solutions" },
  { year: "2022", title: "Fleet Growth", description: "Expanded fleet to 50+ commercial drones" },
  { year: "2023", title: "Regional Leader", description: "Became East Africas largest drone service provider" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/about.webp"
          alt="About TACOS Drone Services"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Pioneering drone technology across East Africa
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-orange-500">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              At TACOS Drone Services, we are committed to revolutionizing industries across 
              East Africa through innovative drone technology.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/drone-flying-mountains.webp"
              alt="Drone flying over mountains"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-4">
                <span className="text-orange-500 font-bold">{milestone.year}</span>
                <div>
                  <h3 className="font-semibold">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">Lets discuss how our drone services can transform your business</p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
