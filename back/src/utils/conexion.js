const axios = require('axios');

function WPconexion() {
  const WordPress = axios.create({
    baseURL: process.env.URL_WP,
    auth: {
      username: process.env.WP_USER,
      password: process.env.WP_PASS,
    }
  });

  return WordPress;
}

function WCconexion() {
  const WooCommerce = axios.create({
    baseURL: process.env.URL_WC,
    auth: {
      username: process.env.WP_USER,
      password: process.env.WP_PASS,
    },
  });

  return WooCommerce;
}

module.exports = {WPconexion, WCconexion};
