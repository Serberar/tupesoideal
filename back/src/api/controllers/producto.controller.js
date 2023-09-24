const {WCconexion} = require('../../utils/conexion');

async function getProducto(req, res) {
  try {
    const WooCommerce = WCconexion();
    const response = await WooCommerce.get('products');
    const products = response.data;
    res.json(products);
  } catch (error) {
    console.error('Error descargando productos:', error);
    const errorMessage = error.message || 'Error descargando productos';
    res.status(500).json({ error: errorMessage });
  }
}

module.exports = {getProducto};
