import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/academy/', '/auth/', '/return'],
    },
    sitemap: 'https://jdlo.site/sitemap.xml',
  };
}
