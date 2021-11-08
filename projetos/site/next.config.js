const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@schultzgabriel/modulo-comum']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});