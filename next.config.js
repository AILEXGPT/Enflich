/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false, // enable browser source map generation during the production build
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Configure pageExtensions to include md and mdx

  // Removed experimental.appDir
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
