const express = require('express')
const mongoose = require('mongoose')
const nodemon = require('nodemon')
require("dotenv").config();


mongoose.connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const app = express()
const PORT = 3000;

app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.render("index")
})

