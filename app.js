const express = require('express');
const app = express();
 
app.get('/', (req, res) => {

    res.send("WElcome to ekosim");

});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Node server startedd");
});