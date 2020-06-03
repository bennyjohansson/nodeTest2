var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get("/", (req, res, next) => {

    res.json("Welcome to ekosim");

});

const port = process.env.port || 3000;
app.listen(port, function() {


    console.log("Node server startedd");
});