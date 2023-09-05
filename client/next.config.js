/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["comfy.blob.core.windows.net", "ibb.co"],
  },
  target: "serverless",
};

module.exports = nextConfig;
