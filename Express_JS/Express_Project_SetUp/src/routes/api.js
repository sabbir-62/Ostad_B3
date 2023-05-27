const express = require('express');
const helloController = require('../controllers/helloController')

const router = express.Router();

router.get('/hello', helloController.Hello);


module.exports = router;