/** @type {import('next').NextConfig} */

module.exports = {
  i18n: {
    locales: ['default', 'pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    });

    // Important: return the modified config
    return config;
  },
};
