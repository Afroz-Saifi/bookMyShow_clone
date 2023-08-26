const express = require("express");
const { makeBooking, getCinemaBookings, getMyBookings } = require("../controller/bookings.controller");

const bookingsRouter = express.Router();

bookingsRouter.post("/book", makeBooking)
bookingsRouter.post("/getCinemaBookings", getCinemaBookings)
bookingsRouter.get("/getMybookings/:id", getMyBookings)

module.exports = { bookingsRouter };
