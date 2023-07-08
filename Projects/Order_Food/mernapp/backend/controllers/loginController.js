const userModel = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.loginUser = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try{
        let userData = await userModel.findOne({email});
        if(userData === null) {
            return res.status(404).json({
                status: "Not Found"
            })
        }

        const passwordCheck = await bcrypt.compare(password, userData.password);

        if(!passwordCheck){
            return res.status(404).json({
                status: "Not Found"
            })
        }

        const secretKey = process.env.secretKey;
        const payload = {
            user: {
                _id: userData._id
            }
        }
        const expDate = {
            expiresIn: "7d"
        }

        const token = jwt.sign(payload, secretKey, expDate);

        return res.status(200).json({
            status: "Success",
            success:true,
            token: token
        })
    }
    catch(err){
        console.log(err);
        res.json({
            success: false
        })
    }
}