const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nomClient:{type:String, required: true },
    prenomClient:{type:String,required:true},
    EmailClient : {type:String,required:true},
    telephoneClient :{ type: String , required: true},
    AgeClient:{type:Number,required:true},
    dateDrivingL:{type:Date,required:true},
    Flightinformation:{
        Compagnieaérienne:{ 
           type:String
        } ,
        Flight:{
            type:String, 
        } ,
        Provenance:{type:String},  
    },
    payement:{
        CreditCard:{type:String},
        CCN:{type:String} ,
        MounthExpiryCCN:{type:Date},
        YearExpiryCCN:{type:Number},
    },
    MotDePass:{type:String,required:true},
   
});

const Client = mongoose.model('Client',clientSchema);

module.exports = Client;