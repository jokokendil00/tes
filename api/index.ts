const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express app!");
});

app.get("/auth", (req, res) => {
    res.send("auth bang");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
