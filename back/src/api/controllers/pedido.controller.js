const {WCconexion} = require('../../utils/conexion')

async function postPedido(req, res) {
  try {
    const WooCommerce = WCconexion();
    const nuevoPedido = req.body; 

    const response = await WooCommerce.post('orders', nuevoPedido);

    if (response.status === 201) {
      console.log('Pedido creado con éxito');
      return res.json(response.data);
    } else {
      console.error('Error al crear el Pedido:', response.statusText);
      return res.status(response.status).json({ error: 'Error al crear el Pedido' });
    }
  } catch (error) {
    console.error('Error al crear el Pedido:', error.message);
    return res.status(500).json({ error: 'Error al crear el Pedido' });
  }
}

module.exports = {postPedido};