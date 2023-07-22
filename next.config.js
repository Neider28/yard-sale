/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    curstomKey: 'customValue',
  },
  compress: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'cdn.pixabay.com', 'www.pngkey.com', "picsum.photos"]
  }
};

module.exports = nextConfig;