import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const today = new Date().toISOString().split('T')[0];

    return [
        {
            url: 'https://kazvee.com',
            lastModified: today,
        },
        {
            url: 'https://kazvee.com/#about',
            lastModified: today,
        },
        {
            url: 'https://kazvee.com/#projects',
            lastModified: today,
        },
        {
            url: 'https://kazvee.com/#stats',
            lastModified: today,
        },
        {
            url: 'https://kazvee.com/#blog',
            lastModified: today,
        },
        {
            url: 'https://kazvee.com/#contact',
            lastModified: today,
        },
    ];
}