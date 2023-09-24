const { WPconexion } = require('../../utils/conexion');


async function crearUsuario(req, res) {
  try {
    const WordPress = WPconexion();
    const nuevoUsuario = req.body; 

    const response = await WordPress.post('users', nuevoUsuario);

    if (response.status === 201) {
      console.log('Usuario creado con éxito');
      return res.json(response.data);
    } else {
      console.error('Error al crear el usuario:', response.statusText);
      return res.status(response.status).json({ error: 'Error al crear el usuario' });
    }
  } catch (error) {
    console.error('Error al crear el usuario:', error.message);
    return res.status(500).json({ error: 'Error al crear el usuario' });
  }
}

module.exports = { crearUsuario };
