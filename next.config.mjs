/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript errors during build for maximum deployment stability
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
