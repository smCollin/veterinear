const Dyr = require('../models/dyr');
const Eier = require('../models/eier');
const Veteri = require('../models/veteri');

const registerController = {
    getRegister: (req, res) => {
        res.render("register")
    },
    createRegister: async (req, res) => {
        const {navn, epost, telefon, adresse} = req.body;
        const {dyrNavn, art, rase, alder} = req.body;
        const {veteriNavn, veteriEpost, veteriTelefon, spesialisering} = req.body;
        
            const eier = new Eier({
                navn, epost, telefon, adresse
            })
            await eier.save()
            

            const veteri = new Veteri({
                navn: veteriNavn, epost: veteriEpost, telefon: veteriTelefon, spesialisering
            })
            await veteri.save()
            

            const dyr = new Dyr({
                navn: dyrNavn, art, rase, alder, eier: eier._id, veteri: veteri._id
            })
            await dyr.save()

        res.status(201).send("Kjæledyr egistrert")
    }
}


module.exports = registerController;



