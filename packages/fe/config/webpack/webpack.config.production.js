const path = require("path");
const rules = require("./rules");
const plugins = require("./plugins");
const baseConfig = require("./base.config");
const applyPlugins = require("./utils/applyPlugins");

const BASE_URL = process.env.baseUrl ? process.env.baseUrl : "/";
const buildedPlugins = applyPlugins(plugins);

module.exports = {
  ...baseConfig,
  mode: "production",
  entry: {
    index: [path.resolve(__dirname, "../../src/index.js")],
  },
  output: {
    ...baseConfig.output,
    publicPath: BASE_URL,
    path: path.resolve(__dirname, "../../build/app"),
  },
  module: {
    rules: Object.values(rules),
  },
  plugins: buildedPlugins,
};
