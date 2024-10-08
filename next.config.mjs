/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  env: {
    SERVICE_KEY: process.env.SERVICE_KEY,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  }
};

export default nextConfig;
