// Importer le paquet express
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoute');
const locationRoutes = require('./routes/locationRoute');
const voitureRoutes = require('./routes/voitureRoute');
const compteRoutes = require('./routes/compteRoute');
//const session = require('express-session');
//const flash = require('express-flash');
//onst passport = require('./routes/AuthRoute'); // Assurez-vous d'ajuster le chemin
const bodyParser = require('body-parser');
// Créer une application express 
const app = express();
/*
// Utilisez express-session pour stocker les sessions
app.use(session({
  secret: 'votre_secret_key',
  resave: false,
  saveUninitialized: false,
}));
*/
/* Initialisez Passport.js et restaurez les sessions
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());*/
// Parsing the incoming JSON format from the HTTP call XML
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
// Configurer CORS pour autoriser les demandes depuis le domaine front-end
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // Autoriser les cookies lors des requêtes
}));

const PORT = process.env.PORT || 8000;

// Connection avec la base de données
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/safarAmir', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
  console.log('Connecté à la base de données');
});

// Définir le répertoire statique pour les images
app.use('/cars', express.static('front/public/cars'));

// Utiliser les routes pour chaque modèle
app.use('/clients', clientRoutes);
app.use('/locations', locationRoutes);
app.use('/voitures', voitureRoutes);
app.use('/comptes', compteRoutes);


// Lancement du serveur sur le port défini dans l'environnement ou bien sur le port 3001 s'il n'y a pas d'environnement
app.listen(PORT, () => {
  console.log(`Server listening on :: http://localhost:${PORT}`);
});
