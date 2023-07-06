const express = require('express');
const router = require('./src/routes/api');
const app = new express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const mongoose = require('mongoose');


// Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));


app.use(express.json());


// Rate Limiting
const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 300
})
app.use(limiter);


// Database Connection
const URI = "mongodb://localhost:27017/taskmanager";
let OPTION = {
    user:'',
    pass: '',
    autoIndex: true
}

mongoose.connect(URI, OPTION).then((res) => {
    console.log("Success");
}).catch((err) => {
    console.log(err);
})

app.use("/api/v1", router);

app.use("*", (req, res) => {
    res.status(404).json({
        status: "Fail",
        data: "Not Found"
    })
})


module.exports = app;