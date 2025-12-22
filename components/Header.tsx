'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/#services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-12 h-12 overflow-hidden">
                  <Image
                    src="/assets/tacoslogo1.png?v=2"
                    alt="TACOS"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight uppercase">
                  <span className={isScrolled ? 'text-[#1a1a2e]' : 'text-white'}>TACOS</span>
                  <span className="text-[#2d5a8a]">.</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-5 py-2 text-sm font-medium transition-colors group ${
                      isScrolled ? 'text-gray-600 hover:text-[#1e3a5f]' : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#2d5a8a] group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#1e3a5f] text-white text-sm font-semibold rounded-full hover:bg-[#2d5a8a] transition-all duration-300 shadow-lg shadow-[#1e3a5f]/20"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 rounded-full transition-all ${isScrolled ? 'bg-[#1a1a2e]' : 'bg-white'}`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 rounded-full transition-all ${isScrolled ? 'bg-[#1a1a2e]' : 'bg-white'}`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 rounded-full transition-all ${isScrolled ? 'bg-[#1a1a2e]' : 'bg-white'}`}
              />
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white p-8 pt-24 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-2xl font-semibold text-[#1a1a2e] hover:text-[#2d5a8a] transition-colors border-b border-gray-100"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2d5a8a] transition-colors">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
