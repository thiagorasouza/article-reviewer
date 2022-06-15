const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema({
  name: String,
  url: String,
  date: Date,
  email: String,
});

const Article =
  mongoose.models.Article || mongoose.model("Article", articlesSchema);

module.exports = Article;
