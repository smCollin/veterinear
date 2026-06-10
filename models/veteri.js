const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const veteri = new Schema({
    navn: String,
    epost: String,
    telefon: Number,
    spesialisering: String
})

const Veteri = mongoose.model("Veteri", veteri)
module.exports = Veteri;