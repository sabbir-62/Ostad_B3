const userModel = require('../models/User');

exports.createUser = (req, res) => {
    let reqBody = req.body;
    const { name } = req.body; 
    if(!name){
        return res.status(404).json({
            error: "Name is required"
        });
    }

   userModel.create(reqBody).then((data) =>{
    res.status(200).json({
        status: "Success",
        data: data
    })
}).catch((err) => {
        res.status(404).json({
            status: "Fail",
            data: err
        })
    })
}