import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/tantra-foundations',
    '/bdsm-fundamentals',
    '/maine-retreat',
    '/about',
    '/events',
    '/blog',
    '/faq',
    '/contact',
    '/legal',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('blog') ? 0.7 : 0.8,
  }));
}
