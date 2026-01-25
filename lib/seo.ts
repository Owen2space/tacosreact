import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tacostechnologies.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TACOS Technologies | Advanced Aerial Data & Operational Solutions',
    template: '%s | TACOS Technologies',
  },
  description:
    'TACOS Technologies delivers AI-powered drone solutions, UAV parts, mechanical engineering, and technical consultation in Kenya, Africa, and worldwide. Specializing in autonomous systems, precision agriculture, infrastructure inspection, and aerial surveying. Professional UAV operators serving Nairobi, East Africa, and global markets.',
  keywords: [
    // AI & Technology keywords
    'AI drone systems',
    'machine learning UAV',
    'autonomous drone systems',
    'computer vision drones',
    'AI-powered aerial solutions',
    'intelligent drone systems Kenya',
    'autonomous navigation systems',
    'predictive analytics drones',
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
    // Parts & Engineering keywords
    'drone parts Kenya',
    'UAV components Africa',
    'drone assembly services',
    'custom drone builds Kenya',
    'mechanical engineering drones',
    'CAD design aerospace',
    'drone prototyping Kenya',
    'flight controller Kenya',
    'drone motors ESC Kenya',
    // Consultation keywords
    'drone consultation Kenya',
    'UAV technical consultation',
    'drone system design',
    'aerial operations planning',
    'drone compliance advisory',
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
    title: 'TACOS Technologies | AI-Powered Drone Solutions, Parts & Engineering | Kenya & Africa',
    description:
      'Leading AI-powered drone solutions provider in Kenya and Africa. Offering UAV parts, custom builds, mechanical engineering, technical consultation, and aerial services. Professional operators serving East Africa and worldwide.',
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
    site: '@_Tacostech',
    creator: '@_Tacostech',
    title: 'TACOS Technologies | AI Drones, Parts & Engineering | Kenya & Africa',
    description:
      'AI-powered drone solutions, UAV parts, mechanical engineering, and technical consultation in Kenya and Africa. Custom builds, autonomous systems, and aerial services. Serving East Africa and worldwide.',
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
    title: 'TACOS Technologies | AI Drones, Parts, Engineering & Consultation | Kenya & Africa',
    description:
      'Leading provider of AI-powered drone solutions, UAV parts, mechanical engineering, and technical consultation in Kenya and Africa. Custom builds, autonomous systems, precision agriculture, infrastructure inspection. Serving Nairobi, East Africa, and worldwide.',
  },
  about: {
    title: 'About TACOS Technologies | AI Drones, Parts & Engineering Company | Kenya & Africa',
    description:
      'TACOS Technologies - Kenya\'s leading AI-powered drone solutions company. Offering UAV parts, custom builds, mechanical engineering, technical consultation, and aerial services for agriculture, infrastructure, and security. Serving East Africa and global markets.',
  },
  contact: {
    title: 'Contact TACOS Technologies | AI Drones, Parts & Engineering | Kenya | Get a Quote',
    description:
      'Contact TACOS Technologies for AI-powered drone solutions, UAV parts, mechanical engineering, and technical consultation in Kenya and Africa. Request a quote for custom builds, autonomous systems, precision agriculture, or infrastructure inspection.',
  },
  services: {
    title: 'AI Drone Solutions, Parts & Engineering | Kenya & Africa | TACOS Technologies',
    description:
      'Comprehensive drone solutions in Kenya and Africa: AI/ML systems, UAV parts supply, custom builds, mechanical engineering, technical consultation, precision agriculture, infrastructure inspection, aerial surveying. Expert operators serving East Africa.',
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
            telephone: '+254-796-803-774',
            contactType: 'customer service',
            email: 'info@tacostechnologies.com',
            availableLanguage: ['English', 'Swahili'],
            areaServed: ['KE', 'UG', 'TZ', 'RW', 'ET', 'SS', 'SO'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+254-796-803-774',
            contactType: 'sales',
            email: 'tacostechnologies@gmail.com',
            availableLanguage: ['English'],
            areaServed: 'Worldwide',
          },
        ],
        sameAs: [
          'https://www.instagram.com/tacostechnology/',
          'https://www.tiktok.com/@tacostechnology',
          'https://x.com/_Tacostech',
        ],
        slogan: 'Command the Sky. Precision from Above.',
        knowsAbout: [
          'Artificial Intelligence',
          'Machine Learning',
          'Computer Vision',
          'Autonomous Systems',
          'Drone Technology',
          'UAV Parts & Components',
          'Mechanical Engineering',
          'CAD Design',
          'Technical Consultation',
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
        telephone: '+254-796-803-774',
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
            name: 'What AI and machine learning services does TACOS Technologies offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TACOS Technologies provides cutting-edge AI/ML solutions including computer vision for object detection and tracking, autonomous navigation systems, predictive maintenance analytics, and intelligent data processing for UAV applications in Kenya and Africa.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you sell drone parts and components in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we supply a comprehensive range of UAV parts and components including motors, ESCs, flight controllers, frames, propellers, and accessories from leading manufacturers. We serve customers throughout Kenya and East Africa.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you build custom drones in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely! TACOS Technologies specializes in custom UAV builds tailored to your specific requirements. From agricultural drones to inspection platforms, we design and assemble complete systems with AI-powered capabilities.',
            },
          },
          {
            '@type': 'Question',
            name: 'What mechanical engineering services do you provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer precision mechanical engineering services including CAD design, prototyping, and fabrication for aerospace components and custom drone solutions. Our team handles everything from concept to production.',
            },
          },
          {
            '@type': 'Question',
            name: 'What industries does TACOS Technologies serve in Kenya and Africa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'TACOS Technologies provides AI-powered drone solutions, parts, and engineering services across multiple sectors in Kenya, East Africa, and worldwide, including agriculture, infrastructure & utilities, energy, construction, environmental monitoring, logistics, and security.',
            },
          },
          {
            '@type': 'Question',
            name: 'What drone services do you offer in Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We specialize in AI-powered autonomous systems, geospatial mapping & surveying, multispectral crop analysis, asset and infrastructure inspections, high-resolution imaging & videography, 3D modelling, and rapid-response aerial support throughout Kenya and Africa.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where do you provide drone services in Africa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our headquarters is in Nairobi, Kenya, and we provide AI-powered drone solutions, parts supply, engineering services, and consultation throughout East Africa including Uganda, Tanzania, Rwanda, and Ethiopia. We also support projects across the African continent and worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I hire drone services or buy parts in Nairobi, Kenya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact TACOS Technologies at +254 796 803 774 or info@tacostechnologies.com / tacostechnologies@gmail.com to request a consultation. We offer AI-powered drone solutions, UAV parts, custom builds, mechanical engineering, and technical consultation for agriculture, infrastructure inspection, surveying, and security in Nairobi and throughout Kenya.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide technical consultation for drone projects?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we offer expert technical consultation on UAV selection, system design, operational planning, regulatory compliance, and AI integration. Our team helps you choose the right solutions for your specific needs in Kenya and Africa.',
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
