const { conectar } = require('../../utils/conexion');

async function postPedido(req, res) {
    try {
        console.log('Iniciando creación de pedido...');
        const WooCommerce = conectar();
        const nuevoPedido = req.body;

        console.log('Enviando solicitud para crear el pedido:', nuevoPedido);
        const response = await WooCommerce.post('orders', nuevoPedido);

        console.log('Respuesta del servidor WooCommerce:', response.status, response.statusText);
        
        if (response.status === 201) {
            console.log('Pedido creado con éxito');
            return res.json(response.data);
        } else {
            console.error('Error al crear el pedido:', response.statusText);
            return res.status(response.status).json({ error: 'Error al crear el pedido' });
        }
    } catch (error) {
        console.error('Error al crear el Pedido:', error.message);
        console.log('Respuesta del servidor WooCommerce:', response);
        return res.status(500).json({ error: 'Error al crear el pedido' });
    }
}

module.exports = { postPedido };
