module.exports = {
  devServer: {
    proxy: "https://domain.de:44300"
  },
  configureWebpack: {
    node: {
      crypto: true,
      stream: true,
      zlib: true,
      path: true,
      os: true,
      http: true,
      https: true,
      process: true,
      setImmediate: true
    },
    devtool: "source-map"
  }
};
