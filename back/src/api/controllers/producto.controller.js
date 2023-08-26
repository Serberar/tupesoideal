const conectar = require('../../utils/conexion');

async function getProducto(req, res) {
  try {
    const WooCommerce = conectar();
    const products = await WooCommerce.getAsync('products');
    return res.json(products);
  } catch (error) {
    console.error('Error descargando productos:', error);
    res.status(500).json({ error: 'Error descargando productos' });
  }
}

module.exports = {getProducto};
