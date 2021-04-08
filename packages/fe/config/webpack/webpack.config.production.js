const path = require('path');
const applyPlugins = require('./utils/applyPlugins');
const rules = require('./rules');
const plugins = require('./plugins');

const baseConfig = require('./base.config');

const BASE_URL = process.env.baseUrl ? process.env.baseUrl : '/';

plugins.HtmlWebpackPlugin.options[0] = {
  ...plugins.HtmlWebpackPlugin.options[0],
  filename: 'index.html.template',
};

const buildedPlugins = applyPlugins(plugins);

module.exports = {
  ...baseConfig,
  mode: 'production',
  entry: {
    index: [
      path.resolve(__dirname, '../../src/index.js'),
    ],
  },
  output: {
    ...baseConfig.output,
    publicPath: BASE_URL,
    path: path.resolve(__dirname, '../../build/app'),
  },
  module: {
    rules: Object.values(rules),
  },
  plugins: buildedPlugins,
};
