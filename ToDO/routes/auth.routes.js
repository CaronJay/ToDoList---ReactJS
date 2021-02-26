const express = require('express');
const router = express.Router();

// Import Controllers
const { registerUser, loginUser, adminMiddleware, googleController } = require('../controllers/auth.controllers')

// Local Auth
router.post('/signup', registerUser)
router.post('/signin', loginUser)

// Google & Facebook Auth
router.post('/googlelogin', googleController);

module.exports = router