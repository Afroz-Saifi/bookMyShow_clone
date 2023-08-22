const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  PvrId: {
    type: String,
    required: true,
    ref: "Pvr", // Reference to another model if needed
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seat: [
    {
      type: String,
      required: true,
    },
  ],
  userId: {
    type: String,
    required: true,
    ref: "User", // Reference to another model if needed
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = { Booking };
