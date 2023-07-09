const mongoose = require('mongoose');

exports.foodItems = async(req, res) => {
    try{
        const foodItems = await mongoose.connection.db.collection('food-items').find().toArray();
        const foodCategory = await mongoose.connection.db.collection('food-category').find().toArray();
        
        global.foodItems = foodItems;
        global.foodCategory = foodCategory;
        res.send([global.foodItems, global.foodCategory]);
    }
    catch(err){
        console.log(err);
    }
}

