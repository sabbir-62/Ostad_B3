
const userModel = require('../models/User');
const bcrypt = require('bcryptjs');

exports.createUser = async(req, res) => {

    const { name, email, password } = req.body;

        if (!name.trim()) {
            return res.json({ error: "Name is required" });
        }
        if (!email) {
            return res.json({ error: "Email is required" });
        }
        if (!password || password.length < 6) {
            return res.json({ error: "Password must be at least 6 characters long" });
        }
        const existingUser = await userModel.findOne({ email });
      
        if (existingUser) {
            return res.json({ error: "Email is taken"});
        }

   
    let salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password, salt);

   await userModel.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: securePassword
   }).then(
    res.json({
        success: true
    })
   )
}