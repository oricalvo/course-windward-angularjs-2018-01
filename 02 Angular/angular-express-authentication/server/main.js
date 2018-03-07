const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/api/user", function(req, res){
    const authToken = req.headers["myauth"];
    if(!validateAuthToken(authToken)) {
        res.json({authenticated: false});
    }
    else {
        res.json({
            authenticated: true,
            userName: "ori",
            email: "ori@gamil.com"
        });
    }
});

app.post("/api/login", function(req, res){
    console.log("body", req.body);

    if(req.body.userName == "ori" && req.body.password=="123"){
        res.json({
           token: req.body.userName,
           userName: req.body.userName,
        });
    }
    else {
        res.status(500);
        res.end();
    }
});

app.use("/api/*", function(req, res, next){
    const authToken = req.headers["myauth"];
    if(!validateAuthToken(authToken)){
        res.status(403);
        res.end();
        return;
    }

    next();
});

app.get("/api/contact", function(req, res){
   res.json([
       {id:1, name: "Ori"},
       {id:2, name: "Roni"},
   ]);
});

app.use(express.static(path.resolve(__dirname, "..")));

app.listen(3000, function(){
    console.log("Server is running");
});

function validateAuthToken(token){
    return !!token;
}