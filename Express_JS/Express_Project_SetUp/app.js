// Express import
const express = require('express');
const router = require('./src/routes/api');
const app = express();


// Security middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


// security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());


// Rate Limit implementation
const limiter = rateLimit({
    windowMs: 15*60*1000,  // 15 minutes
    max: 100   // Limit each IP to 100 request per windowMs
});
app.use(limiter);


// Routes connection
app.use("/api/v1", router);


// Undefined routes handle
app.use("*", (req, res) => {
    res.status(404).json({
        status: "Fail",
        data: "Not found"
    })
})


// Exports app and use it in index.js
module.exports = app;