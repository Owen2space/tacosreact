'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  'Precision Agriculture',
  'Security & Surveillance',
  'Emergency Response',
  'Infrastructure Inspection',
  'Aerial Surveying',
  'Custom Solution',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
        >
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Request Received</h3>
        <p className="text-gray-600 mb-8">
          Thank you for your inquiry. Our team will respond within 24 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
          }}
          className="px-6 py-3 bg-[#f8f9fa] text-[#1a1a2e] rounded-full hover:bg-gray-200 transition-colors border border-gray-200"
        >
          Submit Another Request
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-modern"
            placeholder="John Doe"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-modern"
            placeholder="john@company.com"
          />
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input-modern"
            placeholder="Your Organization"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-modern"
            placeholder="+254 700 000 000"
          />
        </motion.div>
      </div>

      {/* Service */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interest *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="input-modern appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select a capability
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="input-modern resize-none"
          placeholder="Describe your operational requirements and objectives..."
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 rounded-full font-semibold text-white transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#1e3a5f] hover:bg-[#2d5a8a] shadow-lg shadow-[#1e3a5f]/20'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            'Submit Request'
          )}
        </motion.button>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-center"
        >
          {error}
        </motion.div>
      )}
    </form>
  );
}
