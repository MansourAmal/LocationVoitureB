const Client=require('../models/client.js');

// Fonction pour créer un nouveau client
exports.createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer tous les clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour récupérer un client par son ID
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour mettre à jour un client par son ID
exports.updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fonction pour supprimer un client par son ID
exports.deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
