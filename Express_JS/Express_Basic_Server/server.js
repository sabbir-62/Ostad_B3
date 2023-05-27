const path = require('path');
const express = require('express');
const app = express();

// app.use(express.static('public'));

function validator(req, res, next) {
    res.send("<h1>Sabbir Hossain</h1>");
    next();
};

app.use("/", validator);

app.get("/", (req,res) => {

    console.log("sabbir");
})



app.listen(3000, ()=>{
    console.log("Server is running success on 3000j port")
})