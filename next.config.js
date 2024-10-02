const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  images: {
    unoptimized: true, // This is fine if you're not using the next/image optimization
  },
  assetPrefix: isProd ? "/" : "",
  basePath: "", // Keep this if you're not deploying under a subdirectory
  trailingSlash: true, // Adds a trailing slash to the URLs
};

module.exports = nextConfig;
