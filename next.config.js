/** @type {import('next').NextConfig} */
const basePath = '/cosmic-generator-at-2050';
module.exports = {
  output: 'export',
  basePath,
  assetPrefix: basePath + '/',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};
