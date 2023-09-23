const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {conectar, WPconexion, pedidoWP} = require('./src/utils/conexion')
const productoRoutes = require('./src/api/routes/producto.routes');
const userRoutes = require('./src/api/routes/user.routes');
const pedidoRoutes = require('./src/api/routes/pedido.routes');

dotenv.config();
const PORT = 5000;
const app = express();

const woocommerce = conectar()
const WordPress = WPconexion();
pedidoWP()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/producto', productoRoutes);
app.use('/user', userRoutes);
app.use('/pedido', pedidoRoutes);

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
