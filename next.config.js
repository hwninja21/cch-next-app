const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')

module.exports = withPlugins(
  [
    [withSass],
    [withCSS],
  ],
  {
    env: {
      CONTENTFUL_SPACE_ID: "3cpf3a6ch1h0",
      CONTENTFUL_ACCESS_TOKEN: "6tk_cT__kLMOvyviS8X7buuDGc0ZRV_H_zSw03LP9LQ"
    }
  },
);
