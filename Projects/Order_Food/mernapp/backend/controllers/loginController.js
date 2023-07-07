const userModel = require('../models/User');

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
        if(password !== userData.password){
            return res.status(404).json({
                status: "Not Found"
            })
        }
        return res.status(200).json({
            status: "Success",
            success:true
        })
    }
    catch(err){
        console.log(err);
        res.json({
            success: false
        })
    }
}