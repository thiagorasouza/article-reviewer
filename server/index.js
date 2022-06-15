require("dotenv").config();

const express = require("express");
const mongo = require("./mongo");
const app = express();

const Article = require("./articles.js");

mongo.connect();

app.use(express.json());

app.post("/api/articles", async (req, res) => {
  const articleData = req.body;

  const requiredFields = ["name", "url", "date", "email"];
  for (const requiredField of requiredFields) {
    if (!articleData[requiredField]) {
      return res.status(400).json(`Missing param: ${requiredField}`);
    }
  }

  const article = new Article(articleData);
  try {
    const saved = await article.save();
    return res.status(200).json(saved);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server error");
  }
});

app.get("/api/articles", async (req, res) => {
  try {
    const articles = await Article.find({}).exec();
    return res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server error");
  }
});

app.listen("4000", () => {
  console.log("Express server started");
});
