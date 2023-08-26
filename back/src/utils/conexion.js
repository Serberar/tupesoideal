var WooCommerceAPI = require('woocommerce-api');

function conectar() {
  var WooCommerce = new WooCommerceAPI({
    url: process.env.URL_API,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
  });

  return WooCommerce; 
}

module.exports = conectar;
