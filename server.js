var express = require("express");
var app = express();
var connect = require("connect");
var PORT = 8080;


app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/addition.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/subtraction.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/multiplication.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/division.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});