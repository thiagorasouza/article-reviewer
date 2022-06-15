require("dotenv").config();

const express = require("express");
const mongo = require("./mongo");
const app = express();

const Article = require("./articles.js");

mongo.connect();

app.get("/api", (req, res) => {
  res.send("Api server");
});

app.listen("4000", () => {
  console.log("Express server started");
});
