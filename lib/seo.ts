import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacostechnologies.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TACOS Technologies | Advanced Aerial Data & Operational Solutions in East Africa',
    template: '%s | TACOS Technologies',
  },
  description:
    'TACOS Technologies delivers mission-critical aerial intelligence and operational solutions across East Africa. Specializing in precision agriculture, infrastructure inspection, security surveillance, aerial surveying, and emergency response services in Kenya and beyond.',
  keywords: [
    // Primary keywords
    'drone services Kenya',
    'aerial data solutions East Africa',
    'UAV services Nairobi',
    'precision agriculture drones Kenya',
    'infrastructure inspection drones Africa',
    // Secondary keywords
    'geospatial intelligence Kenya',
    'multispectral crop imaging',
    'aerial surveying mapping Kenya',
    'thermal imaging drones',
    'security surveillance drones Africa',
    'emergency response UAV',
    // Long-tail keywords
    'crop health monitoring drones Kenya',
    'power line inspection drones East Africa',
    'agricultural drone services Nairobi',
    'professional drone operators Kenya',
    // Brand keywords
    'TACOS Technologies',
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
    locale: 'en_KE',
    url: siteUrl,
    siteName: 'TACOS Technologies',
    title: 'TACOS Technologies | Advanced Aerial Data & Operational Solutions',
    description:
      'Mission-critical aerial intelligence and operational solutions across East Africa. Precision agriculture, infrastructure inspection, security, and emergency response.',
    images: [
      {
        url: `${siteUrl}/assets/drone-flying-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'TACOS Technologies - Advanced Aerial Data & Operational Solutions in East Africa',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tacostechnology',
    creator: '@tacostechnology',
    title: 'TACOS Technologies | Aerial Data Solutions East Africa',
    description:
      'Mission-critical aerial intelligence across East Africa. Precision from above.',
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
    },
  },
  category: 'technology',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'geo.region': 'KE',
    'geo.placename': 'Nairobi',
    'geo.position': '-1.2921;36.8219',
    ICBM: '-1.2921, 36.8219',
  },
};

export const pageMetadata = {
  home: {
    title: 'TACOS Technologies | Advanced Aerial Data & Operational Solutions in East Africa',
    description:
      'TACOS Technologies delivers mission-critical aerial intelligence and operational solutions across East Africa. Precision agriculture, infrastructure inspection, security surveillance, and emergency response services.',
  },
  about: {
    title: 'About Us - Tactical Aerospace Command & Operations Solutions',
    description:
      'Learn about TACOS Technologies - East Africa\'s leading provider of advanced aerial data and operational solutions. Delivering accurate geospatial intelligence for planning, monitoring, and decision-making.',
  },
  contact: {
    title: 'Contact Us - Request a Consultation',
    description:
      'Contact TACOS Technologies for professional aerial data and operational solutions in Kenya and East Africa. Request a consultation for precision agriculture, infrastructure inspection, or security services.',
  },
  services: {
    title: 'Our Services - Aerial Data & Operational Solutions',
    description:
      'Explore TACOS Technologies comprehensive aerial services: precision agriculture, infrastructure inspection, aerial surveying, security surveillance, and emergency response across East Africa.',
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
          'Advanced aerial data and operational solutions provider delivering mission-critical intelligence across East Africa',
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
            areaServed: ['KE', 'UG', 'TZ', 'RW', 'ET'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+254-740-161-366',
            contactType: 'sales',
            email: 'info@tacostechnologies.com',
            availableLanguage: ['English'],
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
          { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: -1.2921, longitude: 36.8219 }, geoRadius: '2000' },
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
          'Advanced aerial data and operational solutions for agriculture, infrastructure, security, and emergency response across East Africa.',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-KE',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

    case 'service':
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        serviceType: 'Aerial Data & Operational Solutions',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        areaServed: [
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'Country', name: 'East Africa' },
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
            name: 'What industries does TACOS Technologies serve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TACOS Technologies provides aerial intelligence solutions across multiple sectors, including agriculture, infrastructure & utilities, energy, construction, environmental monitoring, logistics, and security throughout East Africa.',
            },
          },
          {
            '@type': 'Question',
            name: 'What aerial services do you specialize in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We specialize in geospatial mapping & surveying, multispectral crop analysis, asset and infrastructure inspections, high-resolution imaging & videography, 3D modelling, and rapid-response aerial support.',
            },
          },
          {
            '@type': 'Question',
            name: 'What regions do you operate in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our primary operations are centered in Kenya and East Africa, and we support projects across multiple African markets including Uganda, Tanzania, Rwanda, and Ethiopia.',
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
