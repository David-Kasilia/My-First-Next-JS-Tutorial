/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/fLKTzXvg/promtverse-x2-removebg-preview-transformed.png",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/images",
      },
    ],
  },
};

module.exports = nextConfig
