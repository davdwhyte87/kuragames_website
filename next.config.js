/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: 'serverless',
  assetPrefix: "." ,
}

module.exports = nextConfig
