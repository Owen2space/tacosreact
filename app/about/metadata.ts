import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacostechnologies.com';

export const metadata: Metadata = {
  title: 'About Us - Tactical Aerospace Command & Operations Solutions',
  description:
    "Learn about TACOS Technologies - East Africa's leading provider of advanced aerial data and operational solutions. Delivering accurate geospatial intelligence for planning, monitoring, and decision-making across Kenya and beyond.",
  keywords: [
    'about TACOS Technologies',
    'drone company Kenya',
    'aerial solutions provider East Africa',
    'UAV company Nairobi',
    'geospatial intelligence Africa',
  ],
  openGraph: {
    title: 'About TACOS Technologies - Tactical Aerospace Command & Operations Solutions',
    description:
      "East Africa's leading provider of advanced aerial data and operational solutions.",
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/assets/about.webp`,
        width: 1200,
        height: 630,
        alt: 'About TACOS Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TACOS Technologies',
    description: 'Advanced aerial data and operational solutions across East Africa.',
    images: [`${siteUrl}/assets/about.webp`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};
