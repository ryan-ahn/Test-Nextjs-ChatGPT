require('dotenv').config();
const withFonts = require('next-fonts');

module.exports = withFonts({
  env: {
    HOST: process.env.NEXT_PUBLIC_HOST,
    API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    TOSS_PAYMENTS_CLIENT_KEY: process.env.TOSS_PAYMENTS_CLIENT_KEY,
    TOSS_PAYMENTS_SECRET_KEY: process.env.TOSS_PAYMENTS_SECRET_KEY,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});
