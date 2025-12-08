/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 cannot include dynamic server code in a static export
  // output: 'export', 
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
