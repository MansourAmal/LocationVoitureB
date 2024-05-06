const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Routes pour les locations
router.post('/', locationController.createLocation);
router.get('/', locationController.getAllLocations);
router.get('/:id', locationController.getLocationById);
router.put('/:id', locationController.updateLocation);
router.delete('/:id', locationController.cancelLocation);
// Route pour la recherche de locations disponibles
//router.post('/search', locationController.searchAvailableCars);
/*
// Point de terminaison pour l'historique de location
router.get('/history/:clientId', async (req, res) => {
    try {
      const clientId = req.params.clientId;
      const locationHistory = await Location.find({ idClient: clientId });
      res.status(200).json(locationHistory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
// Point de terminaison pour annuler la dernière location
router.post('/cancel-last/:clientId', async (req, res) => {
    try {
      const clientId = req.params.clientId;
      const lastReservation = await Location.findOne({ idClient: clientId, status: 'Reserved' })
        .sort({ createdAt: -1 })
        .limit(1);
  
      if (lastReservation) {
        // Mettre à jour le statut de la dernière réservation à "Cancelled"
        await Location.findByIdAndUpdate(lastReservation._id, { status: 'Cancelled' });
        res.status(200).json({ message: 'Reservation cancelled successfully' });
      } else {
        res.status(404).json({ message: 'No reserved reservations found for cancellation' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
*/
module.exports = router;
