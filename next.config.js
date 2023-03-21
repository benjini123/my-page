const withsvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withsvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
