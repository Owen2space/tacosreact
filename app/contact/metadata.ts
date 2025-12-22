import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacostechnologies.com';

export const metadata: Metadata = {
  title: 'Contact Us - Request a Consultation | TACOS Technologies',
  description:
    'Contact TACOS Technologies for professional aerial data and operational solutions in Kenya and East Africa. Request a consultation for precision agriculture, infrastructure inspection, security surveillance, or emergency response services.',
  keywords: [
    'contact TACOS Technologies',
    'drone services consultation Kenya',
    'aerial solutions quote East Africa',
    'UAV services inquiry Nairobi',
  ],
  openGraph: {
    title: 'Contact TACOS Technologies - Request a Consultation',
    description:
      'Get in touch with TACOS Technologies for professional aerial data and operational solutions in Kenya and East Africa.',
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/assets/contact2.webp`,
        width: 1200,
        height: 630,
        alt: 'Contact TACOS Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TACOS Technologies',
    description: 'Request a consultation for aerial data solutions in East Africa.',
    images: [`${siteUrl}/assets/contact2.webp`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};
