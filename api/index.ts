const express = require("express");
const app = express();
const path = require('path')

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'components', 'home.htm'))
});

app.get("/auth", (req, res) => {
    res.send("auth bang");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
