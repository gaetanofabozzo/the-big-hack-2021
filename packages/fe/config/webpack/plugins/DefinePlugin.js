const { DefinePlugin } = require("webpack");

const BASE_URL = process.env.baseUrl ? process.env.baseUrl : "/";

module.exports = {
  plugin: DefinePlugin,
  options: [
    {
      BASE_URL: JSON.stringify(BASE_URL),
    },
  ],
};
