/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 // experiments = { topLevelAwait: true };
};
//nextConfig.experiments = { topLevelAwait: true };
//return nextConfig;
// module.exports = nextConfig;
module.exports = {
  webpack: (nextConfig, options) => {
    nextConfig.experiments = {
      layers : true,
      topLevelAwait: true,
    };
    return nextConfig;
  },
};
