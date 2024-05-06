//locationmodel
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    pickupLocation:{type:String,enum:[
        'oran- Aéroport Ahmed Ben Bella',
        'Tlemcen- Aéroport Messali El Hadj',
        'Alger - Aéroport Houari Boumedienne',
        'Constantine - Aéroport Mohamed Boudiaf ',
        'Batna- Aéroport Mostafa Benboulaid',
        'Sétif - Aéroport 08 Mai 1945',
        'Annaba - Aéroport Rabah Bitat',
        'Jijel- Aéroport Ferhat Abbas',
        'Béjaia- Aéroport Abane Ramdane'
    ]},
    returnLocation:{type:String,enum:[
        'oran- Aéroport Ahmed Ben Bella',
        'Tlemcen- Aéroport Messali El Hadj',
        'Alger - Aéroport Houari Boumedienne',
        'Constantine - Aéroport Mohamed Boudiaf ',
        'Batna- Aéroport Mostafa Benboulaid',
        'Sétif - Aéroport 08 Mai 1945',
        'Annaba - Aéroport Rabah Bitat',
        'Jijel- Aéroport Ferhat Abbas',
        'Béjaia- Aéroport Abane Ramdane'
    ]},
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true},
    options:{type:String,enum:['driver','curburant','BabySeat']},
    idClient: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    idVoiture: { type: mongoose.Schema.Types.ObjectId, ref: 'Voiture', required: true },
    cost:{type:Number},
});

const location = mongoose.model('location', locationSchema);

module.exports = location;
