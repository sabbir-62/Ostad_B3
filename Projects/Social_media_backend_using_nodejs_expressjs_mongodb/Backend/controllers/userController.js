const user = require('../models/userModel');

const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await user.find()
    } 
    catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({"Message" : "User not found"});
    }
    return res.status(200).json({ users });
};

module.exports = getAllUser;