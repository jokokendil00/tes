import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("halo dunia!");
});

app.get("auth", (req, res) => {
  res.send("auth");
});

app.listen(3000, console.log("Running on port 3000"));
