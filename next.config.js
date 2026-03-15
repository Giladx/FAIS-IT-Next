module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: '/get-involved',
        destination: '/contact',
        permanent: true,
      },
    ]
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