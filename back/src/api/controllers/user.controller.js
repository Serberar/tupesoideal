const { WCconexion } = require('../../utils/conexion');
const axios = require('axios');


async function crearUsuario(req, res) {
  try {
    const WooCommerce = WCconexion();
    const nuevoCliente = req.body;
    const response = await WooCommerce.post('customers', nuevoCliente);
    if (response.status === 201) {
      console.log('Cliente creado con éxito');
      return res.json(response.data);
    } else {
      console.error('Error al crear el Cliente:', response.statusText);
      return res.status(response.status).json({ error: 'Error al crear el Cliente' });
    }
  } catch (error) {
    console.error('Error al crear el Cliente:', error.message);
    return res.status(500).json({ error: 'Error al crear el Cliente' });
  }
}

async function autenticarUsuario(req, res) {
  try {
    const { correo, contraseña } = req.body;
    const base64Credentials = Buffer.from(`${correo}:${contraseña}`).toString('base64');
    const headers = {
      'Authorization': `Basic ${base64Credentials}`,
    };
    const apiUrl = `${process.env.URL_WP}users`;
    const response = await axios.get(apiUrl, { headers });

    if (response.status === 200) {
      const userEmail = correo; 
      const username = process.env.WP_USER;
      const password = process.env.WP_PASS;
      const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

      const headers = {
        'Authorization': `Basic ${base64Credentials}`,
      };

      const response = await axios.get(`${apiUrl}?search=${userEmail}`, { headers });

      if (response.status === 200) {
        const responseData = response.data;
        console.log('Datos del usuario:', responseData);
        return res.json(responseData);
      } else {
        console.error('Error al obtener los datos del usuario:', response.statusText);
        return res.status(response.status).json({ error: 'Error al obtener los datos del usuario' });
      }
    } else {
      console.error('Error de autenticación:', response.statusText);
      return res.status(response.status).json({ error: 'Error de autenticación' });
    }
  } catch (error) {
    console.error('Error al autenticar u obtener los datos del usuario:', error.message);
    return res.status(500).json({ error: 'Error al autenticar u obtener los datos del usuario' });
  }
}



module.exports = { crearUsuario, autenticarUsuario };