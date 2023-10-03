const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Include doctor routes
const doctorRoutes = require('./routes/doctorRoutes');
app.use('/api/doctors', doctorRoutes);

// Include appointment routes
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/api/appointments', appointmentRoutes);
const dbUrl = "mongodb+srv://khaja001sk:786Khaja@cluster0.euenqp0.mongodb.net/DoctorAppointment";

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running at ${PORT}`);
    });
    console.log("Database is Connected.");
  })
  .catch((err) => {
    console.error("Database Not Connected", err);
  });
