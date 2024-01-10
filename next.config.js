/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    UPLOAD_PRESETS: process.env.UPLOAD_PRESETS,
    CLOUDINARY_URL: `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
    CLOUDINARY_VIDEO_URL: `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/video/upload`,
    CLOUDINARY_ZIP_URL: `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/raw/upload`,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    HOST: process.env.HOST,
  },
};

module.exports = nextConfig;
