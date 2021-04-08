const path = require('path');
const applyPlugins = require('./utils/applyPlugins');
const rules = require('./rules');
const plugins = require('./plugins');

const baseConfig = require('./base.config');

module.exports = {
  ...baseConfig,
  mode: 'development',
  devServer: {
    clientLogLevel: 'error',
    compress: true,
    historyApiFallback: true,
    port: 8888,
  },
  entry: {
    index: [
      path.resolve(__dirname, '../../src/index.js'),
    ],
  },
  module: {
    rules: Object.values(rules),
  },
  plugins: applyPlugins(plugins),
};
