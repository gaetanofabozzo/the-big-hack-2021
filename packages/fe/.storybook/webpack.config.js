const rules = require('../config/webpack/rules');

module.exports = async ({ config }) => {
  config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'ProgressPlugin');
  config.module.rules = Object.values(rules);
  config.resolve.extensions = [...config.resolve.extensions, '.tsx', '.ts'];
  return config;
};
