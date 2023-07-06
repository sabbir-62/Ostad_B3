const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes/UserRoute');


app.use(express.json());

const DATABASE = process.env.DATABASE;

mongoose.connect(DATABASE).then(() =>{
    console.log("success");
}).catch((err) => {
    if(err){
        console.log(err);
    }
})

app.use("/api/v1",router);
app.use("*", (req, res) => {
    res.status(404).json({
        status: 404,
        data: "Not Found"
    })
})

module.exports = app;