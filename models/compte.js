//comptemodel
const mongoose = require('mongoose');
const CompteSchema = new mongoose.Schema({
    Adresse:{type:String,required:true},
    MotDePass:{type:String,required:true},
});


const Compte = mongoose.model('Compte',CompteSchema);


module.exports = Compte;