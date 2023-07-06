const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/userRoutes')

const app = express();

app.use("api/user", router);

app.use("/api", (req, res, next) => {
    res.send("Hello Sabbir");
});


mongoose.connect('mongodb+srv://admin:aTEq7l6KaJzKWTy0@cluster0.xkyh7r0.mongodb.net/Blog?retryWrites=true&w=majority').then(()=> app.listen(5000)).then(()=>console.log("Connected")).catch((err)=> console.log(err));

//aTEq7l6KaJzKWTy0