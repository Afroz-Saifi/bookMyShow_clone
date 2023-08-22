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

const getCinemaBookings = async (req, res) => {
  const { PvrId, date, time } = req.body;
  try {
    const data = await Booking.aggregate([
      {
        $match: {
          PvrId: PvrId,
          date: new Date(date),
          time: time,
        },
      },
      {
        $group: {
          _id: null,
          seats: { $push: "$seat" },
        },
      },
      {
        $project: {
          _id: 0,
          seats: 1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { makeBooking, getCinemaBookings };
