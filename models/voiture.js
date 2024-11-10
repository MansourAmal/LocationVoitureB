const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voitureSchema = new Schema({
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    carName: { type: String, required: true },
    couleur: { type: String, default: "No color specified" },
    prix: { type: Number, required: true },
    km: { type: Number, required: false },
    nbPortes: { type: Number, required: false },
    boiteVitesse: { type: String, enum: ['Manuelle', 'Automatique'] },
    fueltype: { type: String, enum: ['Diesel', 'Essence'] },
    disponibilité: { type: Boolean, default: true },
    imgUrl: {type:String},
   
});


const Voiture = mongoose.model('Voiture', voitureSchema);

module.exports = Voiture;

