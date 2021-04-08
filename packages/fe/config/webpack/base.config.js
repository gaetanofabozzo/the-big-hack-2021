const path = require('path');

module.exports = {
  target: 'web',
  stats: {
    children: false,
    entrypoints: false,
    modules: false,
  },
  externals: {
    // Required by translation tool
    jsdom: 'jsdom',
  },
  devtool: 'source-map',
  //   node: {
  //     Buffer: true,
  //     fs: 'empty',
  //     tls: 'empty',
  //   },
  output: {
    publicPath: '/',
    filename: 'assets/[name].[contenthash:8].js',
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.json',
    ],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../../src'),
    ],
  },
};
