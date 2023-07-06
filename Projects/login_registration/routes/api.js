const express = require('express');
const registrationController = require('../controllers/registrationController');
const todoListController = require('../controllers/ToDoListController');
const userAuthentication = require('../middleware/userAuthentication');
const router = express.Router();


router.post('/createProfile', registrationController.createProfile)