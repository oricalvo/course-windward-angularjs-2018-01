const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser());

app.post("/api/login", function(req, res){
    console.log(req.body);

    res.json({ok: true});
});

app.listen(3000, function(){
    console.log("Server is running");
});