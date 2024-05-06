//voiturecontroller
const Voiture = require('../models/voiture');

// Créer une nouvelle voiture
exports.createVoiture = async (req, res) => {
  try {
    const newVoiture = new Voiture(req.body);
    const savedVoiture = await newVoiture.save();
    res.status(201).json(savedVoiture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Récupérer toutes les voitures
exports.getAllVoitures = async (req, res) => {
  try {
    const voitures = await Voiture.find();
    res.status(200).json(voitures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une voiture par son ID
exports.getVoitureById = async (req, res) => {
  try {
    const voiture = await Voiture.findById(req.params.id);
    res.status(200).json(voiture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une voiture par son ID
exports.updateVoiture = async ( req, res) => {
  try {
    const updatedVoiture = await Voiture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedVoiture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une voiture par son ID
exports.deleteVoiture = async (req, res) => {
  try {
    await Voiture.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
