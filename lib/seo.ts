import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tacostechnologies.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TACOS Technologies | Advanced Aerial Data & Operational Solutions',
    template: '%s | TACOS Technologies',
  },
  description:
    'TACOS Technologies delivers mission-critical aerial intelligence and drone services in Kenya, Africa, and worldwide. Specializing in precision agriculture, infrastructure inspection, security surveillance, aerial surveying, and emergency response. Professional UAV operators serving Nairobi, East Africa, and global markets.',
  keywords: [
    // Regional keywords - Africa
    'drone services Kenya',
    'drone services Africa',
    'UAV services Nairobi',
    'aerial data solutions East Africa',
    'drone company Kenya',
    'drone services in Africa',
    'best drone services Kenya',
    'professional drone operators Kenya',
    'drone mapping Kenya',
    'drone surveying Africa',
    // Regional keywords - East Africa
    'drone services Uganda',
    'drone services Tanzania',
    'drone services Rwanda',
    'aerial surveying East Africa',
    // Industry-specific regional
    'precision agriculture drones Kenya',
    'agricultural drone services Africa',
    'infrastructure inspection drones Kenya',
    'crop monitoring drones East Africa',
    'security drones Kenya',
    'surveillance drones Africa',
    // Global keywords
    'drone services',
    'aerial data solutions',
    'UAV services',
    'precision agriculture drones',
    'infrastructure inspection drones',
    'geospatial intelligence',
    'multispectral crop imaging',
    'aerial surveying mapping',
    'thermal imaging drones',
    'emergency response UAV',
    'professional drone operators',
    // Brand keywords
    'TACOS Technologies',
    'TACOS Technologies Kenya',
    'Tactical Aerospace Command Operations Solutions',
  ],
  authors: [{ name: 'TACOS Technologies', url: siteUrl }],
  creator: 'TACOS Technologies',
  publisher: 'TACOS Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TACOS Technologies',
    title: 'TACOS Technologies | Drone Services Kenya & Africa | Aerial Solutions',
    description:
      'Leading drone services provider in Kenya and Africa. Precision agriculture, infrastructure inspection, aerial surveying, security surveillance. Professional UAV operators serving East Africa and worldwide.',
    images: [
      {
        url: `${siteUrl}/assets/drone-flying-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'TACOS Technologies - Advanced Aerial Data & Operational Solutions',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tacostechnology',
    creator: '@tacostechnology',
    title: 'TACOS Technologies | Drone Services Kenya & Africa',
    description:
      'Professional drone services in Kenya and Africa. Aerial intelligence, precision agriculture, infrastructure inspection. Serving East Africa and worldwide.',
    images: [`${siteUrl}/assets/drone-flying-mountains.webp`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-KE': siteUrl,
      'en-US': siteUrl,
      'en': siteUrl,
      'x-default': siteUrl,
    },
  },
  category: 'technology',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'geo.region': 'KE',
    'geo.placename': 'Nairobi, Kenya',
    'geo.position': '-1.2921;36.8219',
    ICBM: '-1.2921, 36.8219',
  },
};

export const pageMetadata = {
  home: {
    title: 'TACOS Technologies | Drone Services Kenya & Africa | Aerial Data Solutions',
    description:
      'Leading drone services provider in Kenya and Africa. Professional UAV operators for precision agriculture, infrastructure inspection, aerial surveying, security surveillance. Serving Nairobi, East Africa, and worldwide.',
  },
  about: {
    title: 'About TACOS Technologies | Drone Company Kenya | Aerial Solutions Africa',
    description:
      'TACOS Technologies - Kenya\'s professional drone services company. Advanced aerial data and operational solutions for agriculture, infrastructure, security. Serving East Africa and global markets.',
  },
  contact: {
    title: 'Contact TACOS Technologies | Drone Services Kenya | Get a Quote',
    description:
      'Contact TACOS Technologies for professional drone services in Kenya and Africa. Request a consultation for precision agriculture, infrastructure inspection, aerial surveying, or security solutions.',
  },
  services: {
    title: 'Drone Services Kenya & Africa | Aerial Surveying, Agriculture, Inspection',
    description:
      'Professional drone services in Kenya and Africa: precision agriculture, infrastructure inspection, aerial surveying, security surveillance, emergency response. Expert UAV operators serving East Africa.',
  },
};

export function generateStructuredData(
  type: 'organization' | 'website' | 'service' | 'localBusiness' | 'breadcrumb' | 'faq'
) {
  switch (type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'TACOS Technologies',
        alternateName: 'Tactical Aerospace Command & Operations Solutions',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/assets/tacoslogo1.png`,
          width: 512,
          height: 512,
        },
        image: `${siteUrl}/assets/drone-flying-mountains.webp`,
        description:
          'Advanced aerial data and operational solutions provider delivering mission-critical intelligence',
        foundingDate: '2020',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Nairobi',
          addressLocality: 'Nairobi',
          addressRegion: 'Nairobi County',
          postalCode: '00100',
          addressCountry: 'KE',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+254-740-161-366',
            contactType: 'customer service',
            email: 'info@tacostechnologies.com',
            availableLanguage: ['English', 'Swahili'],
            areaServed: ['KE', 'UG', 'TZ', 'RW', 'ET', 'SS', 'SO'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+254-740-161-366',
            contactType: 'sales',
            email: 'info@tacostechnologies.com',
            availableLanguage: ['English'],
            areaServed: 'Worldwide',
          },
        ],
        sameAs: ['https://www.instagram.com/tacostechnology/'],
        slogan: 'Command the Sky. Precision from Above.',
        knowsAbout: [
          'Drone Technology',
          'Aerial Surveying',
          'Precision Agriculture',
          'Infrastructure Inspection',
          'Geospatial Intelligence',
        ],
      };

    case 'localBusiness':
      return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#localbusiness`,
        name: 'TACOS Technologies',
        image: `${siteUrl}/assets/tacoslogo1.png`,
        url: siteUrl,
        telephone: '+254-740-161-366',
        email: 'info@tacostechnologies.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Nairobi',
          addressLocality: 'Nairobi',
          addressRegion: 'Nairobi County',
          postalCode: '00100',
          addressCountry: 'KE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -1.2921,
          longitude: 36.8219,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '14:00',
          },
        ],
        priceRange: '$$',
        currenciesAccepted: 'KES, USD',
        paymentAccepted: 'Cash, Bank Transfer, Mobile Money',
        areaServed: [
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'Country', name: 'Uganda' },
          { '@type': 'Country', name: 'Tanzania' },
          { '@type': 'Country', name: 'Rwanda' },
          { '@type': 'Country', name: 'Ethiopia' },
          { '@type': 'Continent', name: 'Africa' },
        ],
      };

    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'TACOS Technologies',
        url: siteUrl,
        description:
          'Advanced aerial data and operational solutions for agriculture, infrastructure, security, and emergency response.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        keywords: 'drone services Kenya, drone services Africa, UAV services Nairobi, aerial surveying East Africa, precision agriculture drones',
      };

    case 'service':
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        serviceType: 'Drone Services',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        areaServed: [
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'Country', name: 'Uganda' },
          { '@type': 'Country', name: 'Tanzania' },
          { '@type': 'Country', name: 'Rwanda' },
          { '@type': 'Continent', name: 'Africa' },
          { '@type': 'Text', name: 'Worldwide' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Aerial Solutions',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Precision Agriculture',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Crop Health Monitoring' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multispectral Imaging' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Yield Mapping' } },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'Infrastructure Inspection',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Power Line Inspection' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipeline Inspection' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bridge & Structure Assessment' } },
              ],
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Aerial Surveying & Mapping' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Security & Surveillance' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Emergency Response' },
            },
          ],
        },
      };

    case 'breadcrumb':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
        ],
      };

    case 'faq':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What industries does TACOS Technologies serve in Kenya and Africa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TACOS Technologies provides professional drone services across multiple sectors in Kenya, East Africa, and worldwide, including agriculture, infrastructure & utilities, energy, construction, environmental monitoring, logistics, and security.',
            },
          },
          {
            '@type': 'Question',
            name: 'What drone services do you offer in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We specialize in geospatial mapping & surveying, multispectral crop analysis, asset and infrastructure inspections, high-resolution imaging & videography, 3D modelling, and rapid-response aerial support throughout Kenya and Africa.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where do you provide drone services in Africa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our headquarters is in Nairobi, Kenya, and we provide drone services throughout East Africa including Uganda, Tanzania, Rwanda, and Ethiopia. We also support projects across the African continent and worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I hire drone services in Nairobi, Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact TACOS Technologies at +254 740 161 366 or info@tacostechnologies.com to request a consultation. We offer professional drone services for agriculture, infrastructure inspection, surveying, and security in Nairobi and throughout Kenya.',
            },
          },
        ],
      };
  }
}

// Generate page-specific metadata
export function generatePageMetadata(page: keyof typeof pageMetadata): Metadata {
  const pageMeta = pageMetadata[page];
  return {
    title: pageMeta.title,
    description: pageMeta.description,
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
    },
    twitter: {
      title: pageMeta.title,
      description: pageMeta.description,
    },
  };
}
