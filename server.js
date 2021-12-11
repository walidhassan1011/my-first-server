var express = require("express");
// here is my first-sever
var app = express();

const PORT = 8080;

app.listen(PORT, () => console.log("iam alive"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
