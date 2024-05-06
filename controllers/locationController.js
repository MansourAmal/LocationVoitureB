// Importing required modules
const Location = require('../models/location');
const Voiture = require('../models/voiture');
const Compte = require('../models/compte');

// Location controller
const locationController = {
  // Créer une nouvelle location
  async createLocation(req, res) {
    try {
      // Vérifier si le compte existe déjà
      let compte = await Compte.findOne({ Adresse: req.body.Email });

      // Si le compte n'existe pas, créer un nouveau compte et l'associer
      if (!compte) {
        const newCompte = new Compte({
          Adresse: req.body.Email,
          MotDePass: 'SFR' + req.body.FirstName,
        });
        const savedCompte = await newCompte.save();

        // Créer le client avec le nouveau compte associé
        const newClient = new Client({
          IDCompte: savedCompte._id,
          nomClient: req.body.FirstName,
          prenomClient: req.body.LastName,
          EmailClient: req.body.Email,
          telephoneClient: req.body.phone,
          AgeClient: req.body.Age,
          dateDrivingL: req.body.dateDrivingL,
          // Autres champs du client...
        });
        const client = await newClient.save();

        // Update the location with the new client ID
        req.body.idClient = client._id;
      } else {
        // Update the location with the existing client ID
        req.body.idClient = compte._id;
      }

      // Créer la location avec l'ID du client
      const newLocation = new Location(req.body);
      const savedLocation = await newLocation.save();
      res.status(201).json(savedLocation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Récupérer toutes les locations
  async getAllLocations(req, res) {
    try {
      const locations = await Location.find();
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Récupérer une location par son ID
  async getLocationById(req, res) {
    try {
      const location = await Location.findById(req.params.id);
      res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Mettre à jour une location par son ID
  async updateLocation(req, res) {
    try {
      const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedLocation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Annuler une location par son ID
  async cancelLocation(req, res) {
    try {
      await Location.findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = locationController;
 

  
  