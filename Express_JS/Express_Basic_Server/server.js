const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/json", (req,res)=>{
    res.json({
        "name": "Sabbir",
        "age": 23,
        "dept": "ECE"
    });
})
app.get("/user", (req,res)=>{
    res.sendFile(path.join(__dirname + "/public/index.html"))
})
app.post("/", (req,res)=>{
    res.send("<h1>Post Method</h1>");
})
app.put("/", (req,res)=>{
    res.send("<h1>Put Method</h1>");
})
app.patch("/", (req,res)=>{
    res.send("<h1>Patch Method</h1>");
})
app.delete("/", (req,res)=>{
    res.send("<h1>Delete Method</h1>");
})


app.listen(3000, ()=>{
    console.log("Server is running success on 3000j port")
})