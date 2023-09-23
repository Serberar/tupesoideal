const express = require('express');
const { crearUsuario } = require('../controllers/user.controller');

const router = express.Router();

router.post("/registro", crearUsuario);

module.exports = router;
