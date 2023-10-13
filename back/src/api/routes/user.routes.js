const express = require('express');
const { crearUsuario, autenticarUsuario, getWooCommerceUser } = require('../controllers/user.controller');

const router = express.Router();


router.post("/registro", crearUsuario); 
router.post("/login", autenticarUsuario);





module.exports = router;
