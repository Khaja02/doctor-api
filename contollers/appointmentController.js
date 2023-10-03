const Appointment = require('../models/appointmentModel');

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { doctor, patientName, appointmentDay, appointmentTime } = req.body;
    const appointment = new Appointment({
      doctor,
      patientName,
      appointmentDay,
      appointmentTime,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the appointment.' });
  }
};

// List all appointments
exports.listAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching appointments.' });
  }
};

// Get appointment details by ID
exports.getAppointmentDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }
    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching appointment details.' });
  }
};

// Update an appointment by ID
exports.updateAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }
    res.json(updatedAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the appointment.' });
  }
};

// Delete an appointment by ID
exports.deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAppointment = await Appointment.findByIdAndRemove(id);
    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }
    res.json(deletedAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the appointment.' });
  }
};
