const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

// CRIANDO ROTA LOGIN
router.post('/login', authControllers.loginAuth);


module.exports = router;