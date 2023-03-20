/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const isProd = process.env.NODE_ENV === "production";
var CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? "/sash/preview" : undefined,
  assetPrefix: isProd ? "https://nextjs.spruko.com/sash/preview/" : undefined,
  images: {
    loader: "akamai",
    path: "/public/assets/images",
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

module.exports = nextConfig;
