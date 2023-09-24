const { WPconexion } = require('../../utils/conexion');
const axios = require('axios');


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
async function autenticarUsuario(req, res) {
  try {
    // Obtén los datos de correo y contraseña proporcionados por el usuario desde el cuerpo de la solicitud
    const { correo, contraseña } = req.body;

    // Codificar las credenciales en base64
    const base64Credentials = Buffer.from(`${correo}:${contraseña}`).toString('base64');

    // Configura los encabezados de la solicitud con la autenticación básica
    const headers = {
      'Authorization': `Basic ${base64Credentials}`,
    };

    // URL de la API de WordPress para verificar las credenciales del usuario
    const apiUrl = 'http://tupesoideal.es/back/wp-json/wp/v2/users/';

    // Realiza una solicitud GET para verificar las credenciales del usuario
    const response = await axios.get(apiUrl, { headers });

    // Verifica si la solicitud es exitosa y si el usuario está autenticado correctamente
    if (response.status === 200) {
      // El usuario está autenticado correctamente, ahora obtenemos sus datos
      const userEmail = correo; // Usamos el correo proporcionado

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
      // Las credenciales son incorrectas o la autenticación falló
      console.error('Error de autenticación:', response.statusText);
      return res.status(response.status).json({ error: 'Error de autenticación' });
    }
  } catch (error) {
    console.error('Error al autenticar u obtener los datos del usuario:', error.message);
    return res.status(500).json({ error: 'Error al autenticar u obtener los datos del usuario' });
  }
}

































// async function autenticarUsuario(req, res) {
//   try {
//     // Obtén los datos de correo y contraseña proporcionados por el usuario desde el cuerpo de la solicitud
//     const { correo, contraseña } = req.body;

//     // Codificar las credenciales en base64
//     const base64Credentials = Buffer.from(`${correo}:${contraseña}`).toString('base64');

//     // Configura los encabezados de la solicitud con la autenticación básica
//     const headers = {
//       'Authorization': `Basic ${base64Credentials}`,
//     };

//     // URL de la API de WordPress para verificar las credenciales del usuario
//     const apiUrl = 'http://tupesoideal.es/back/wp-json/wp/v2/users/';


//     // Realiza una solicitud GET para verificar las credenciales del usuario
//     const response = await axios.get(apiUrl, { headers });

//     // Verifica si la solicitud es exitosa y si el usuario está autenticado correctamente
//     if (response.status === 200) {
//       // El usuario está autenticado correctamente, puedes devolver una respuesta positiva
//       console.log('Usuario autenticado con éxito');
//       return res.json({ mensaje: 'Autenticación exitosa' });
//     } else {
//       // Las credenciales son incorrectas o la autenticación falló
//       console.error('Error de autenticación:', response.statusText);
//       return res.status(response.status).json({ error: 'Error de autenticación' });
//     }
//   } catch (error) {
//     console.error('Error al autenticar al usuario:', error.message);
//     return res.status(500).json({ error: 'Error al autenticar al usuario' });
//   }
// }

async function getUsuario(req, res) {
  try {
    // Correo electrónico del usuario que deseas obtener
    const userEmail = "correo@correo.es";

    const username = process.env.WP_USER;
    const password = process.env.WP_PASS;

    const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

    const headers = {
      'Authorization': `Basic ${base64Credentials}`,
    };
    const apiUrl = 'http://tupesoideal.es/back/wp-json/wp/v2/users/';

    const response = await axios.get(`${apiUrl}?search=${userEmail}`, { headers });

    if (response.status === 200) {
      const responseData = response.data;
      console.log('Datos del usuario:', responseData);
      return res.json(responseData);
    } else {
      console.error('Error al obtener los datos del usuario:', response.statusText);
      return res.status(response.status).json({ error: 'Error al obtener los datos del usuario' });
    }
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error.message);
    return res.status(500).json({ error: 'Error al obtener los datos del usuario' });
  }
}


module.exports = { crearUsuario, autenticarUsuario, getUsuario };
