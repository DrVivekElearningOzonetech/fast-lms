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
    STRIPE_SECRET_KEY:
      "sk_test_51OMS4zCPECoxMYA9bjIBMQwKm8d56VZSnUSfn3wBCiyFPl2asc9xJ6cD9c7jVq9NjHVRMmhswW8ssIG7yjAWi4FO0051k1tARR",
    STRIPE_PUBLISHABLE_KEY:
      "pk_test_51OMS4zCPECoxMYA9jO56XHxbEv1SWmui2pmo0jYgnfqks9bxVFPNH8aF2bg9TCjiq3L5qc1FzuGZ37QkL4WcseQw00v6iQrEJa",
    HOST: process.env.HOST,
  },
};

module.exports = nextConfig;
