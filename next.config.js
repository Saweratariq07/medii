/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional: Enables React strict mode

  webpack(config) {
    // Handle font files (woff2, woff, otf, etc.)
    config.module.rules.push({
      test: /\.(woff2?|woff|otf|eot|ttf|svg|jpg|jpeg|png|gif|webp)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/fonts',
          outputPath: 'static/fonts',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },

  // Optional: Enable image optimization if needed (if using images)
  images: {
    domains: ['yourdomain.com'], // Add external image domains
  },

  // Additional optimizations or configurations can be added here
};

module.exports = nextConfig;
