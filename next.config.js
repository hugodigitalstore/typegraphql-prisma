/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
nextConfig.experiments = { topLevelAwait: true };
//return nextConfig;
// module.exports = nextConfig;
module.exports = {
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
};
