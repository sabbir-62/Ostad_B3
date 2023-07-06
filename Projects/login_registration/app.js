// Basic Configuration
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/api');
const app = express();


// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');


// Security Middleware Implementations
app.use(helmet());
app.use(mongoSanitize());
app.use(cors());
app.use(xss());
app.use(hpp());


// Request Rate Limit
const limiter = rateLimit({
    window: 15*60*1000,
    max: 300
})
app.use(limiter);


// Database Connection
const URI = 'mongodb://localhost:27017/ToDo';
const OPTION = {
    user: '',
    pass: '',
    autoIndex: true
}
mongoose.connect(URI, OPTION, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Connection Success");
    }
})


// Routing Implement
app.use('/api/v1', router);


// Undefined Routing
app.use('*', (req, res) => {
    res.status(404).json({
        status: "Fail",
        data: "Not Found"
    })
})


// Export
module.exports = app;