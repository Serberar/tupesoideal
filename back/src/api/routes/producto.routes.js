const express = require("express");
const { getProducto } = require('../controllers/producto.controller');

const router = express.Router();

router.get("/", getProducto);

module.exports = router;
