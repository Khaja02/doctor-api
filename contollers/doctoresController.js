const Doctor = require('../models/doctorModel');

// Create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const { name, specialty, availableSlots } = req.body;
    const doctor = new Doctor({
      name,
      specialty,
      availableSlots,
    });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the doctor.' });
  }
};

// List all doctors
exports.listDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching doctors.' });
  }
};

// Get doctor details by ID
exports.getDoctorDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found.' });
    }
    res.json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching doctor details.' });
  }
};

// Update a doctor by ID
exports.updateDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDoctor) {
      return res.status(404).json({ error: 'Doctor not found.' });
    }
    res.json(updatedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the doctor.' });
  }
};

// Delete a doctor by ID
exports.deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDoctor = await Doctor.findByIdAndRemove(id);
    if (!deletedDoctor) {
      return res.status(404).json({ error: 'Doctor not found.' });
    }
    res.json(deletedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the doctor.' });
  }
};
