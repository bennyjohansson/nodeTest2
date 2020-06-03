const express = require('express');
const app = express();
 
app.get("/", (req, res, next) => {

    res.send("Welcome to ekosim");

});

const port = process.env.port || 3000;
app.listen(port, function() {
    console.log("Node server startedd");
});