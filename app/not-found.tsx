import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | TACOS Technologies',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] md:text-[14rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a8a] to-[#1e3a5f] leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Mission Not Found
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-lg mx-auto">
          The coordinates you entered don't match any known location in our system. 
          Let's get you back on course.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/">
            <button className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2d5a8a] transition-colors w-full sm:w-auto">
              Return to Base
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors w-full sm:w-auto">
              Request Assistance
            </button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">Quick Navigation</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/#services" className="text-[#2d5a8a] hover:text-[#1e3a5f] transition-colors">
              Capabilities
            </Link>
            <Link href="/about" className="text-[#2d5a8a] hover:text-[#1e3a5f] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-[#2d5a8a] hover:text-[#1e3a5f] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
