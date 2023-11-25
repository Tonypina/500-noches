/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: "node-loader",
    });

    return config;
  },
};
nextConfig;
