import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacostechnologies.com';
  const currentDate = new Date();

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Service section anchors (for better indexing)
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...mainPages, ...servicePages];
}
