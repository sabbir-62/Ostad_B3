const express = require('express');
const app = express();

app.all("/", (req,res)=>{
    res.send("<h1>Hello Express JS</h1>");
})


app.listen(3000, ()=>{
    console.log("Server is running success on 3000j port")
})