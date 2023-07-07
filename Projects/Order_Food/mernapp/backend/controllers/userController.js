const userModel = require('../models/User');

exports.createUser = (req, res) => {
    let reqBody = req.body;
   

   userModel.create(reqBody).then((data) =>{
    res.status(200).json({
        success: true,
        status: "Success",
        data: data
    })
}).catch((err) => {
        res.status(404).json({
            success: false,
            status: "Fail",
            data: err
        })
    })
}
