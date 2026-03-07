import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jdlo.site';
  const slugs = getAllSlugs();

  const coursePages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/courses`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/mentorship`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/quiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...coursePages,
  ];
}
