require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on("error", (error) => {
      console.log(error);
      throw new Error("There was a problem with the database connection");
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Could not establish a connection to the database");
  }
}

connect();

app.get("/api", (req, res) => {
  res.send("Api server");
});

app.listen("4000", () => {
  console.log("Express server started");
});
