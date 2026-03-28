import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jdlo.site';

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/websites`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/apps-systems`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/creative`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
