const profileModel = require('../models/profileModel');
const jwt = require('jsonwebtoken');


// User Registration
exports.createProfile = (req, res) => {
    let reqBody = req.body;

    profileModel.create(reqBody, (err, data) => {
        if(err){
            res.status(404).json({
                status: "Fail",
                data: err
            })
        }
        else{
            res.status(200).json({
                status: "Success",
                data: data
            })
        }
    })
}


// User Login
exports.login = (req, res) => {
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];

    profileModel.find({UserName:UserName, Password:Password}, (req, res) => {
        if(err){
            res.status(404).json({
                status: "Fail",
                data: data
            })
        }
        else{
            let payload = {
                exp : Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data: data[0]
            }
            let token = jwt.sign(payload, 'SecretKey12345');

            if(data.length > 0){
                res.status(200).json({
                    status: "Success",
                    token: token,
                    data: data
                })
            }
            else{
                res.status(401).json({
                    status: "Unauthorized"
                })
            }
        }
    })
}


// Select Users
exports.selectUser = (req, res) => {
    let UserName = req.headers['userName'];

    profileModel.find({UserName:UserName}, (err, data) => {
        if(err){
            res.status(404).json({
                status: "Fail",
                data: err
            })
        }
        else{
            res.status(200).json({
                status: "Success",
                data: data[0]
            })
        }
    })


    // Update Profile
    exports.updateProfile = (req, res) => {
        let UserName = req.headers['userName'];
        let reqBody = req.body;

        profileModel.updateOne({UserName:UserName}, {$set: reqBody}, {upsert: true}, (err, data) =>{
            if(err){
                res.status(404).json({
                    status: "Fail",
                    data: err
                })
            }
            else{
                res.status(200).json({
                    status: "Success",
                    data: data
                })
            }
        })
    }
}


// Change Password
exports.changePassword = (req, res) => {
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];

    profileModel.updateOne({UserName:UserName}, {$set: {Password: Password}}, (err, data) => {
        if(err){
            res.status(404).json({
                status: "Fail",
                data: err
            })
        }
        else{
            res.status(200).json({
                data:data
            })
        }
    })
}