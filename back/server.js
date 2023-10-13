const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const productoRoutes = require('./src/api/routes/producto.routes');
const userRoutes = require('./src/api/routes/user.routes');
const pedidoRoutes = require('./src/api/routes/pedido.routes');
const bodyParser = require('body-parser'); 

dotenv.config();
const PORT = 5000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/producto', productoRoutes);
app.use('/user', userRoutes);
app.use('/pedido', pedidoRoutes);


app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
