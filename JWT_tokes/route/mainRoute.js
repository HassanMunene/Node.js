const express = require('express');
const authenticationMiddleware = require('../middleware/auth');
const { dashboard, login } = require('../controller.js/mainController');
const router = express.Router();

router.route('/dashboard').get(authenticationMiddleware,dashboard);
router.route('/login').post(login);

module.exports = router;