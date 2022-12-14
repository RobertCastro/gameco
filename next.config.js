/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    CHANEL_TOKEN: process.env.CHANEL_TOKEN,
  },
}

module.exports = nextConfig
