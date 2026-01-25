import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { defaultMetadata, generateStructuredData } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a5f' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a5f' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateStructuredData('organization');
  const websiteSchema = generateStructuredData('website');
  const localBusinessSchema = generateStructuredData('localBusiness');
  const serviceSchema = generateStructuredData('service');

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Favicon & Icons */}
        <link rel="icon" href="/assets/favicon.png" sizes="any" />
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/tacoslogo1.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for analytics and external services */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/assets/tacoslogo1.png" as="image" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Structured Data - Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1e3a5f] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
