const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const eier = new Schema({
    navn: String,
    epost: String,
    telefon: Number,
    adresse: String
})

const Eier = mongoose.model("Eier", eier)

module.exports = Eier;


