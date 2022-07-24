/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    browsersListForSwc: true,
    images: { allowFutureImage: true },
    legacyBrowsers: false,
  },
};

export default nextConfig;
