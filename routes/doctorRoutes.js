const express = require('express');
const router = express.Router();
const doctorController = require('../contollers/doctoresController');

// Create a new doctor
router.post('/', doctorController.createDoctor);

// List all doctors
router.get('/', doctorController.listDoctors);

// Get doctor details by ID
router.get('/:id', doctorController.getDoctorDetails);

// Update a doctor by ID
router.put('/:id', doctorController.updateDoctor);

// Delete a doctor by ID
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
