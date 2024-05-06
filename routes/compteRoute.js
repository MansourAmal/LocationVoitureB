const express = require('express');

const router = express.Router();
const compteController = require('../controllers/compteController');

// Routes pour les comptes
router.post('/', compteController.createCompte);
router.get('/', compteController.getAllComptes);
router.get('/:id', compteController.getCompteById);
router.put('/:id', compteController.updateCompte);
router.delete('/:id', compteController.deleteCompte);
router.post('/login', compteController.login);
module.exports = router;
