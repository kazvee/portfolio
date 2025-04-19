import fs from 'fs';
import path from 'path';

const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];

    const pages = [
        { url: 'https://kazvee.com', lastModified: today },
        { url: 'https://kazvee.com/#about', lastModified: today },
        { url: 'https://kazvee.com/#projects', lastModified: today },
        { url: 'https://kazvee.com/#stats', lastModified: today },
        { url: 'https://kazvee.com/#blog', lastModified: today },
        { url: 'https://kazvee.com/#contact', lastModified: today },
    ];

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
            .map(
                (page) => `
          <url>
            <loc>${page.url}</loc>
            <lastmod>${page.lastModified}</lastmod>
          </url>`
            )
            .join('')}
    </urlset>`;

    const sitemapPath = path.join(process.cwd(), 'out', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapXml);

    console.log('Sitemap generated at', sitemapPath);
};

generateSitemap();