import type { MetadataRoute } from 'next';
import { LINKS } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = LINKS.demo;
  const routes = ['', '/services', '/pricing', '/cases', '/reservation', '/diagnosis', '/landing'];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.8,
  }));
}
