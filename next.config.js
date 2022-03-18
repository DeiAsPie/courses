/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
//  images: {
//    loader: 'custom',
//    path: 'https://deiaspie.github.io/courses',
//  },
  assetPrefix: isProd ? '/courses' : '',
};
