const { Booking } = require("../models/bookings.model");

const makeBooking = async (req, res) => {
  const data = req.body;
  try {
    const bookingDetails = new Booking(data);
    await bookingDetails.save();
    return res.status(201).json({
      success: true,
      data: bookingDetails,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { makeBooking };
