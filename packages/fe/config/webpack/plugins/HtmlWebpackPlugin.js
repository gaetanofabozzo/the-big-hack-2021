const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BASE_URL = process.env.baseUrl ? process.env.baseUrl : '/';

module.exports = {
  plugin: HtmlWebpackPlugin,
  options: [{
    template: './src/index.html',
    filename: 'index.html',
    // templateParameters: '',
    favicon: path.resolve(__dirname, '../../../src/favicon.ico'),
    baseUrl: BASE_URL,
  }],
};
