'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-red-500/10 border-2 border-red-500/20 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-lg mx-auto">
            We encountered an unexpected error. Our team has been notified and is working on a fix.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left">
              <p className="text-sm text-red-400 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reset}
              className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2d5a8a] transition-colors w-full sm:w-auto"
            >
              Try Again
            </motion.button>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors w-full sm:w-auto"
              >
                Return Home
              </motion.button>
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm mb-2">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a
                href="mailto:info@tacostechnologies.com"
                className="text-[#2d5a8a] hover:text-[#1e3a5f] transition-colors"
              >
                info@tacostechnologies.com
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href="tel:+254796803774"
                className="text-[#2d5a8a] hover:text-[#1e3a5f] transition-colors"
              >
                +254 796 803 774
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
