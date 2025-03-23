import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Karen V. (kazvee) - Portfolio',
  description: 'IT professional based in Canada with a background in software development, technical writing, and customer-focused tech support. Explore my portfolio to learn more.',
  metadataBase: new URL('https://kazvee.com/'),
  keywords: ['Software Developer', 'Web Developer', 'Software Engineering', 'Technical Writer', 'Portfolio', 'Canada', 'kazvee', 'Karen V.'],
  openGraph: {
    title: 'Karen V. (kazvee) - Portfolio',
    description: 'IT professional based in Canada with a background in software development, technical writing, and customer-focused tech support. Explore my portfolio to learn more.',
    url: 'https://kazvee.com/',
    images: [
      {
        url: '/images/social-media-preview.png',
        width: 1200,
        height: 630,
        alt: 'Preview of Karen V. (kazvee) portfolio featuring a dark purple background, chickadee logo, and showcasing projects and programming languages.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karen V. (kazvee) - Portfolio',
    description: 'IT professional based in Canada with a background in software development, technical writing, and customer-focused tech support. Explore my portfolio to learn more.',
    images: [
      {
        url: '/images/social-media-preview.png',
        width: 1200,
        height: 630,
        alt: 'Preview of Karen V. (kazvee) portfolio featuring a dark purple background, chickadee logo, and showcasing projects and programming languages.',
      },
    ],
  },
  alternates: {
    canonical: 'https://kazvee.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}