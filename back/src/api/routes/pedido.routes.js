const express = require('express');
const { postPedido } = require('../controllers/pedido.controller');

const router = express.Router();

router.post("/crear", postPedido);

module.exports = router;