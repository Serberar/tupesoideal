var WooCommerceAPI = require('woocommerce-api');
const axios = require('axios')

function conectar() {
  var WooCommerce = new WooCommerceAPI({
    url: process.env.URL_API,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
  });

  return WooCommerce; 
}

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



// function pedidoWP(){
// const pedidoData = {
//   payment_method: 'bacs',
//   payment_method_title: 'Direct Bank Transfer',
//   set_paid: true,
//   billing: {
//     first_name: 'Nombre',
//     last_name: 'Apellido',
//     address_1: 'Dirección de la calle',
//     address_2: 'Apartamento, habitación, etc. (opcional)',
//     city: 'Localidad / Ciudad',
//     state: 'O', // Código de provincia
//     postcode: 'Código postal',
//     country: 'ES', // Código de país para España
//     email: 'correo@example.com',
//     phone: '123456789',
//   },
//   shipping: {
//     first_name: 'Nombre',
//     last_name: 'Apellido',
//     address_1: 'Dirección de la calle',
//     address_2: 'Apartamento, habitación, etc. (opcional)',
//     city: 'Localidad / Ciudad',
//     state: 'O', // Código de provincia
//     postcode: 'Código postal',
//     country: 'ES', // Código de país para España
//   },
//   line_items: [
//     {
//       product_id: 30, 
//       quantity: 1, 
//     },
//   ],
// };






function pedidoWP(){
  const pedidoData = {
    "customer_id": 19,
    "set_paid": true, 
    line_items: [
      {
        product_id: 30, 
        quantity: 1, 
      },
    ],
  };
const auth = {
  username: process.env.WP_USER,
  password: process.env.WP_PASS,
};

const url = 'http://tupesoideal.es/back/wp-json/wc/v3/orders';

axios
  .post(url, pedidoData, { auth })
  .then((response) => {
    console.log('Datos del pedido creado:', response.data);
  })
  .catch((error) => {
    console.error('Error al crear el pedido:', error);
  });
}


module.exports = {conectar, WPconexion, pedidoWP};
