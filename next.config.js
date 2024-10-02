/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  assetPrefix: "/", // Use relative paths for assets
};

module.exports = nextConfig;
module.exports = {
  output: "export",
  basePath: "/gauravjalap.github.io", // Use the repository name as the basePath
  trailingSlash: true, // Ensures pages are generated with a trailing slash
  images: {
    unoptimized: true, // Disable image optimization, which is not supported in static export
  },
  assetPrefix: "./", // Use relative paths for assets
};
module.exports = nextConfig;
