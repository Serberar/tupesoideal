const axios = require('axios');

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

module.exports = {WCconexion};
