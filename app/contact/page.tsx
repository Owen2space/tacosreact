'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    title: 'TACOS Technologies',
    details: ['Nairobi, Kenya'],
  },
  {
    title: 'Email',
    details: ['info@tacostechnologies.com'],
  },
  {
    title: 'Phone',
    details: ['+254 740 161 366'],
  },
  {
    title: 'Operating Hours',
    details: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 2PM'],
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/contact2.webp"
            alt="Contact TACOS"
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
            className="inline-block text-[#2d5a8a] text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-headline text-white mb-6"
          >
            Request a <span className="text-[#2d5a8a]">Consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Connect with our team to discuss your operational requirements and explore tailored
            aerial solutions.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative section-padding">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Submit an Inquiry</h2>
                <p className="text-gray-600 mb-8">
                  Complete the form and our team will respond within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#2d5a8a]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#1e3a5f] text-white"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Emergency Response Services</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For urgent operational requirements or emergency response inquiries, contact our
                  24/7 operations line.
                </p>
                <a
                  href="tel:+254740161366"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-gray-200 transition-colors"
                >
                  +254 740 161 366
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-title text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common inquiries about our capabilities and services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What industries does TACOS Technologies serve?',
                a: 'TACOS Technologies provides aerial intelligence solutions across multiple sectors, including agriculture, infrastructure & utilities, energy, construction, environmental monitoring, logistics, and security. Our systems and services are engineered to meet the operational needs of commercial enterprises, research organisations, and public-sector partners.',
              },
              {
                q: 'What aerial services do you specialize in?',
                a: 'We specialise in a comprehensive range of professional aerial services: geospatial mapping & surveying, multispectral crop analysis, asset and infrastructure inspections, high-resolution imaging & videography, 3D modelling, and rapid-response aerial support. Each service is delivered using purpose-built platforms and analytics pipelines tailored to operational objectives.',
              },
              {
                q: 'Do you provide services for agricultural operations?',
                a: 'Yes. Our agricultural offering includes crop health monitoring (NDVI & multispectral), irrigation analysis, pest and disease detection, and yield estimation. We combine precise aerial data with analytics to help agricultural operations optimise inputs, increase yields, and reduce operational costs.',
              },
              {
                q: 'Can TACOS develop custom solutions for enterprise requirements?',
                a: 'Absolutely. We work closely with clients to develop custom integrations and workflows—from hardware selection and sensor packages to automated flight plans and bespoke data-processing pipelines. Whether you need a specialised inspection system, an automated mapping workflow, or an enterprise analytics dashboard, we design solutions that fit your operational requirements.',
              },
              {
                q: 'Where do you operate?',
                a: 'We support projects globally and maintain partnerships and logistical capabilities to deploy teams and systems quickly for both short-term projects and long-term programs.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#f8f9fa] border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
