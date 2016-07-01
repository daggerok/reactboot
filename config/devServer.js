const devServer = {
  inline: true,
  options: {
    watchOptions: 100
  },
  port: 3000,
  proxy: {
    '/api/*': 'http://localhost:8080/api/'
  },
  historyApiFallback: true
};

module.exports = devServer;
