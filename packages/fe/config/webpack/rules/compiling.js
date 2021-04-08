const path = require('path');

module.exports = {
  test: /\.(jsx|js)$/,
  include: [
    path.resolve(__dirname, '../../../src'),
    /\/node_modules\//,
    /\/packages\//,
  ],
  use: [
    {
      loader: 'babel-loader',
      options: {
        rootMode: 'upward',
      },
    },
  ],
};
