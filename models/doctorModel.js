const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  availableSlots: [
    {
      day: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      maxPatients: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Doctor', doctorSchema);
