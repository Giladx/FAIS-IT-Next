module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: /node_modules/,
      }
    }
    return config
  },
}