const express = require('express')
const mongoose = require('mongoose')
const nodemon = require('nodemon')
require("dotenv").config();

const registerRoutes = require('./routes/registerRoutes')


mongoose.connect(process.env.DB_URL)
const app = express()


app.set("view engine", "ejs");

app.use(registerRoutes);



app.get("/", (req, res) => {
    res.render("index")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
