const Compte = require('../models/compte');
const jwt = require('jsonwebtoken');

// Créer un nouveau compte
exports.createCompte = async (req, res) => {
  try {
    const newCompte = new Compte(req.body);
    const savedCompte = await newCompte.save();
    res.status(201).json(savedCompte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les comptes
exports.getAllComptes = async (req, res) => {
  try {
    const comptes = await Compte.find();
    res.status  (200).json(comptes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un compte par son ID
exports.getCompteById = async (req, res) => {
  try {
    const compte = await Compte.findById(req.params.id);
    res.status(200).json(compte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un compte par son ID
exports.updateCompte = async (req, res) => {
  try {
    const updatedCompte = await Compte.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCompte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un compte par son ID
exports.deleteCompte = async (req, res) => {
  try {
    await Compte.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Tentative de connexion avec email:', email);

    // Utilisez le champ correct pour rechercher le compte
    const compte = await Compte.findOne({ Adresse: email });

    if (!compte) {
      console.log('Aucun compte trouvé pour l\'email:', email);
      return res.status(401).json({ message: 'Aucun compte associé à cet email' });
    }

    // Comparaison du mot de passe
    if (password !== compte.MotDePass) {
      console.log('Mot de passe incorrect pour l\'email:', email);
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    console.log('Connexion réussie pour l\'email:', email);

    const token = generateAuthToken(compte);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error.message);
    res.status(500).json({ message: error.message });
  }
};



function generateAuthToken(compte) {
  // Utilisez la bibliothèque jsonwebtoken pour générer un jeton
  // Exemple: const token = jwt.sign({ userId: compte._id }, 'yourSecretKey');
  // Assurez-vous de sécuriser votre clé secrète et de la stocker dans un endroit sûr
  // Vous pouvez également définir des options d'expiration, etc.
  const token = jwt.sign({ userId: compte._id }, 'yourSecretKey');
  return token;
}

