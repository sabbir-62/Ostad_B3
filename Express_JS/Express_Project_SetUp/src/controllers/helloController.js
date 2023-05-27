exports.Hello=(req, res) => {
    res.status(200);
    //res.send("Hello World");
    res.json({"name" : "SABBIR", "age": 23})
}