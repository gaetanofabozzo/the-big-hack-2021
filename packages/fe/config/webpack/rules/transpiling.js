module.exports = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "ts-loader",
    },
  ],
};
