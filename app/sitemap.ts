import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: `weekly`,
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/specialities`,
            lastModified: new Date().toISOString(),
            changeFrequency: `weekly`,
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
            lastModified: new Date().toISOString(),
            changeFrequency: `weekly`,
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: `weekly`,
            priority: 1.0,
        }
    ]
}