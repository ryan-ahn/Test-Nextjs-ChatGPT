require('dotenv').config();
const withFonts = require('next-fonts');

module.exports = withFonts({
  env: {
    HOST: process.env.NEXT_PUBLIC_HOST,
    API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    CHAT_GPT_KEY: process.env.CHAT_GPT_KEY,
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
