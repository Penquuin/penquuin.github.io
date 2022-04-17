/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
  }]
], {
  reactStrictMode: true,
  assetPrefix: ".",
  images: {
    loader: "imgix",
    path: "./",
  },
})
