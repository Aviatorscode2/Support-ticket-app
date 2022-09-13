const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// defining and using seperate route modules

router.post('/', registerUser);

router.post('/login', loginUser);


module.exports = router