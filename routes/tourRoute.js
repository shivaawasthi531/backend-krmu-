const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');
router.get('/tours/', tourController.getAllTours);
router.get('/tours/:id', tourController.getTourById);
router.get('/tours/search', tourController.getToursByQuery);
router.post('/tours', (req, res) => {
    const newTour = req.body;
    const tours = tourController.getAllTours();
    tours.push(newTour);
    tourController.save(newTour);
    res.status(201).json({ message: 'Tour created successfully' });
});

module.exports = router;