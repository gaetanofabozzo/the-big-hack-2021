module.exports = {
  enforce: "pre",
  test: /\.js$/,
  loader: "source-map-loader",
  exclude: [/\/node_modules\/(?:@apollo)\//],
};
