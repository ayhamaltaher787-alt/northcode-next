import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://northcode-esmail.de/sitemap.xml',
    host: 'https://northcode-esmail.de',
  };
}
