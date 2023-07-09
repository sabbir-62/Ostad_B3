const express = require('express');
const router = express.Router();
const foodItemController = require('../controllers/foodItemController');


router.post("/foodItems", foodItemController.foodItems);

module.exports = router;