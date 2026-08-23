import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pagemint.in'

  const routes = [
    '',
    '/platform',
    '/auto-newspaper',
    '/digital-editions',
    '/epaper',
    '/publisher-portal',
    '/solutions/newspapers',
    '/solutions/magazines',
    '/solutions/regional-publishers',
    '/resources',
    '/resources/guides',
    '/resources/case-studies',
    '/resources/insights',
    '/about',
    '/contact',
    '/request-demo',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
