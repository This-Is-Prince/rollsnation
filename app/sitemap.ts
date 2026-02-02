import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rollsnationindia.in'

  const routes = [
    '',
    '/about',
    '/franchise',
    '/menu',
    '/gallery',
    '/testimony',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }))
}