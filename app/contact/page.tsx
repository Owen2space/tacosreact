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
    title: 'Email Us',
    details: ['info@tacostechnologies.com'],
  },
  {
    title: 'Call Us',
    details: ['+254 740 161 366'],
  },
  {
    title: 'Working Hours',
    details: ['Mon - Fri: 8AM - 6PM', 'Sat: 9AM - 2PM'],
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-red-500 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-headline text-white mb-6"
          >
            Let&apos;s Start Your <span className="gradient-text-primary">Mission</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to transform your operations with drone technology? 
            Our team is here to help you get started.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative section-padding">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        <div className="relative container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
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
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm">{detail}</p>
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
                className="p-6 rounded-2xl bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Need Urgent Assistance?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For emergency response services or urgent inquiries, contact our 24/7 hotline.
                </p>
                <a 
                  href="tel:+254740161366" 
                  className="inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors"
                >
                  +254 740 161 366
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative section-padding bg-[#0f0f0f]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-title text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What industries does TACOS Technologies serve?',
                a: 'TACOS Technologies provides drone solutions across multiple industries, including agriculture, infrastructure & utilities, energy, construction, environmental monitoring, logistics, and security. Our systems and services are engineered to meet the operational needs of commercial enterprises, research organisations, and public-sector partners throughout Africa.',
              },
              {
                q: 'What drone services do you specialize in?',
                a: 'We specialise in a full range of professional drone services: aerial mapping & surveying, multispectral crop analysis, asset and infrastructure inspections, high-resolution imaging & videography, 3D modelling, and rapid-response aerial support. Each service is delivered using purpose-built platforms and analytics pipelines tailored to the client\'s objectives.',
              },
              {
                q: 'Do you provide drone services for agriculture?',
                a: 'Yes. Our agricultural offering includes crop health monitoring (NDVI & multispectral), irrigation analysis, pest and disease detection, and yield estimation. We combine precise aerial data with analytics to help farmers and agribusinesses optimise inputs, increase yields, and reduce operational costs.',
              },
              {
                q: 'Can TACOS create custom drone solutions for companies?',
                a: 'Absolutely. We work closely with clients to develop custom drone integrations and workflows—from hardware selection and sensor packages to automated flight plans and bespoke data-processing pipelines. Whether you need a specialised inspection rig, an automated mapping workflow, or an enterprise dashboard for analytics, we design solutions that fit your operational requirements.',
              },
              {
                q: 'What areas do you operate in?',
                a: 'Our primary operations are centred in Kenya and East Africa, and we support projects across multiple African markets. We maintain regional partnerships and logistical capabilities to deploy teams and systems quickly across the continent for both short-term projects and long-term programs.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
