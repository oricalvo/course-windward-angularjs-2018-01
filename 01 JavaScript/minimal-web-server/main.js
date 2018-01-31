var express = require("express");

var app = express();

app.get("/api/contact", function(req, res) {
    res.json([
        {id:1, name: "Ori"},
    ]);
});

app.listen(3000, function() {
    console.log("Server is running");
});
