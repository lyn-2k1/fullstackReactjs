const withPlugins = require("next-compose-plugins");
/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = withPlugins([], nextConfig);
