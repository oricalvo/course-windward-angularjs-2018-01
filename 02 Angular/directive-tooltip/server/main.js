const express = require("express");
const compression = require('compression');
const path = require("path");

const app = express();

app.use(compression());

app.use(express.static(path.resolve(__dirname, "..")));

app.listen(3000, function(){
    console.log("Server is running");
});
