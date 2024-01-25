const {registerUser, loginUser} = require('../controller/authController')
const express = require('express');

const authRoute = express.Router();

authRoute.route('/register').post(registerUser);
authRoute.route('/login').post(loginUser);
// authRoute.post('/register', registerUser);
// authRoute.post('/login', loginUser);

module.exports = authRoute;