const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const dyr = new Schema({
    navn: String,
    art: String,
    rase: String,
    alder: Number,
    eier: {
        type: Schema.Types.ObjectId,
        ref: "Eier"
    },
    veteri: {
        type: Schema.Types.ObjectId,
        ref: "Veteri"
    }
})

const Dyr = mongoose.model("Dyr", dyr)
module.exports = Dyr;



