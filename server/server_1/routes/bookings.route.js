const express = require("express");
const { makeBooking, getCinemaBookings } = require("../controller/bookings.controller");

const bookingsRouter = express.Router();

bookingsRouter.post("/book", makeBooking)
bookingsRouter.get("/getCinemaBookings", getCinemaBookings)

module.exports = { bookingsRouter };
