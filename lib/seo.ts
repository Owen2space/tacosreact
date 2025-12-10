import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacostechnologies.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TACOS Technologies | Professional Drone Solutions in Africa',
    template: '%s | TACOS Technologies'
  },
  description: 'Leading drone technology company in East Africa. Professional aerial solutions for agriculture, infrastructure inspection, surveying, security, and emergency response. Serving Kenya and across Africa.',
  keywords: [
    'drone services Kenya',
    'drone services Africa',
    'aerial surveying Kenya',
    'agricultural drones',
    'precision agriculture Africa',
    'drone inspection services',
    'infrastructure inspection drones',
    'aerial mapping Kenya',
    'drone technology East Africa',
    'commercial drone services',
    'multispectral imaging',
    'crop monitoring drones',
    'security surveillance drones',
    'emergency response drones',
    'TACOS Technologies',
    'drone solutions Nairobi'
  ],
  authors: [{ name: 'TACOS Technologies' }],
  creator: 'TACOS Technologies',
  publisher: 'TACOS Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteUrl,
    siteName: 'TACOS Technologies',
    title: 'TACOS Technologies | Professional Drone Solutions in Africa',
    description: 'Leading drone technology company in East Africa. Professional aerial solutions for agriculture, infrastructure, security, and more.',
    images: [
      {
        url: '/assets/drone-flying-mountains.webp',
        width: 1200,
        height: 630,
        alt: 'TACOS Technologies - Professional Drone Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TACOS Technologies | Professional Drone Solutions in Africa',
    description: 'Leading drone technology company in East Africa. Professional aerial solutions for agriculture, infrastructure, security, and more.',
    images: ['/assets/drone-flying-mountains.webp'],
    creator: '@tacostechnologies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};

export const pageMetadata = {
  home: {
    title: 'TACOS Technologies | Professional Drone Solutions in Africa',
    description: 'Leading drone technology company in East Africa. Professional aerial solutions for agriculture, infrastructure inspection, surveying, security, and emergency response.',
  },
  about: {
    title: 'About Us',
    description: 'Learn about TACOS Technologies - East Africas leading drone solutions provider. Our mission, technology, and commitment to transforming industries through aerial innovation.',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with TACOS Technologies for professional drone services in Kenya and East Africa. Request a consultation for your aerial solution needs.',
  },
};

export function generateStructuredData(type: 'organization' | 'website' | 'service' | 'localBusiness') {
  switch (type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TACOS Technologies',
        url: siteUrl,
        logo: `${siteUrl}/assets/logo.png`,
        description: 'Leading drone technology company providing professional aerial solutions across East Africa',
        foundingDate: '2018',
        founders: [{ '@type': 'Person', name: 'TACOS Technologies Team' }],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressCountry: 'KE'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254-740-161-366',
          contactType: 'customer service',
          email: 'info@tacostechnologies.com',
          availableLanguage: ['English', 'Swahili']
        },
        sameAs: [
          'https://twitter.com/tacostechnologies',
          'https://linkedin.com/company/tacostechnologies',
          'https://instagram.com/tacostechnologies'
        ]
      };

    case 'localBusiness':
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'TACOS Technologies',
        image: `${siteUrl}/assets/logo.png`,
        url: siteUrl,
        telephone: '+254-740-161-366',
        email: 'info@tacostechnologies.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressCountry: 'Kenya'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -1.2921,
          longitude: 36.8219
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '14:00'
          }
        ],
        priceRange: '$$'
      };

    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TACOS Technologies',
        url: siteUrl,
        description: 'Professional drone solutions for agriculture, infrastructure, security, and emergency response across East Africa.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };

    case 'service':
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Drone Services',
        provider: {
          '@type': 'Organization',
          name: 'TACOS Technologies'
        },
        areaServed: {
          '@type': 'Place',
          name: 'East Africa'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Drone Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Precision Agriculture' }
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Infrastructure Inspection' }
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Aerial Surveying & Mapping' }
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Security & Surveillance' }
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Emergency Response' }
            }
          ]
        }
      };
  }
}
