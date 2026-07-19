import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jdlo.site';

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    // Services
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/services/web-design-systems`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/services/client-communication-systems`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/services/business-operating-systems`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    // Main pages
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/work/vacaville-appliance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work/dhl-translator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work/pearl-farms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Legal
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/refund`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
