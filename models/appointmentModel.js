const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  appointmentDay: {
    type: String,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
