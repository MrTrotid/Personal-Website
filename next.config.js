/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  cleanDistDir: true,
  experimental: {
    forceSwcTransforms: true
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  trailingSlash: true
}

module.exports = nextConfig
