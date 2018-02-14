const express = require("express");
const path = require("path");

const app = express();

const publicFolder = path.join(__dirname, "..");
console.log("public", publicFolder);
app.use(express.static(publicFolder));

app.get("/api/contact", function(req, res) {
    res.json([
        {"id":1, "name": "Ori"},
        {"id":2, "name": "Roni"},
        {"id":3, "name": "Udi"}
    ]);
});

app.listen(3000, function() {
    console.log("Server is running");
});
