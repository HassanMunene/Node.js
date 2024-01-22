const express = require('express');
const { dashboard, login } = require('../controller.js/mainController');
const router = express.Router();

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);

module.exports = router;