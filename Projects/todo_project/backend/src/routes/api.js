const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsersController');

router.post('/Registration', userController.registration);
router.post('/login', userController.login);

module.exports = router;