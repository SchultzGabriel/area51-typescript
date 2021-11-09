const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@schultzgabriel/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});