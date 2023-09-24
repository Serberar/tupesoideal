const express = require('express');
const { crearUsuario, getUsuario, autenticarUsuario } = require('../controllers/user.controller');

const router = express.Router();

router.get("/", getUsuario);
router.post("/registro", crearUsuario); 
router.post("/login", autenticarUsuario);




module.exports = router;
