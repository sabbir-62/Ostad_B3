const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController')


router.post("/createUser", userController.createUser);
router.post('/loginUser', loginController.loginUser)

module.exports = router;