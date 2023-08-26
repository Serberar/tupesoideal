const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectar = require('./src/utils/conexion')
const productoRoutes = require('./src/api/routes/producto.routes');

dotenv.config();
const PORT = 5000;
const app = express();

conectar()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/producto', productoRoutes);

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
