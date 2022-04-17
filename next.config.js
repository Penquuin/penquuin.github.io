/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    }
  }]
], {
  reactStrictMode: true,
  assetPrefix: "/",
  images: {
    loader: "imgix",
    path: "./",
  },
})
