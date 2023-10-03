const express = require('express');
const router = express.Router();
const appointmentController = require('../contollers/appointmentController');

// Create a new appointment
router.post('/', appointmentController.createAppointment);

// List all appointments
router.get('/', appointmentController.listAppointments);

// Get appointment details by ID
router.get('/:id', appointmentController.getAppointmentDetails);

// Update an appointment by ID
router.put('/:id', appointmentController.updateAppointment);

// Delete an appointment by ID
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
