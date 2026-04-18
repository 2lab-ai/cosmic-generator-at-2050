/** @type {import('next').NextConfig} */
// basePath is opt-in via env:
//   - nginx subpath hosting (2lab.ai/cosmic-generator-at-2050): set NEXT_PUBLIC_BASE_PATH=/cosmic-generator-at-2050
//   - Vercel / root hosting: leave unset → basePath=''
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const config = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};
if (basePath) {
  config.basePath = basePath;
  config.assetPrefix = basePath + '/';
}
module.exports = config;
