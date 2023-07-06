const userModel = require('../models/UsersModel');

exports.registration = async(req, res) => {
    let reqBody = req.body;
    try{
        let data = await userModel.create(reqBody);
        res.status(200).json({
            status: "Success",
            data: data
        })

    }
    catch(err){
        res.status(200).json({
            status: "Fail",
            data: err
        })
    }
    
}


exports.login = async(req, res) => {
    let reqBody = req.body;
    try{
        let result = await userModel.find(reqBody).count('total');
        res.status(200).json({
            status: "success",
            data: result
        })
    }
    catch(err){
        res.status(200).json({
            status: "Fail",
            data: err
        })
    }
}